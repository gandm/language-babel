{CompositeDisposable} = require 'atom'
fs = require 'fs'
path = require 'path'
pathIsInside = require 'path-is-inside'
mkdirp = require 'mkdirp'

module.exports = BabelTranspile =
  config:
    transpileOnSave:
      type: 'boolean'
      default: true
      order: 10
    createTranspiledCode:
      type: 'boolean'
      default: false
      order: 20
    createMap:
      type: 'boolean'
      default: false
      order: 30
    babelMapsAddUrl:
      type: 'boolean'
      default: true
      order: 40
    babelSourcePath:
      description: 'Babel Source Root based on Project root'
      type: 'string'
      default: ''
      order: 50
    babelTranspilePath:
      description: 'Babel Transpile Root based on Project root'
      type: 'string'
      default: ''
      order: 60
    babelMapsPath:
      description: 'Babel Maps Root based on Project root'
      type: 'string'
      default: ''
      order: 70
    createTargetDirectories:
      type: 'boolean'
      default: true
      order: 80
    babelStage:
      description: 'Stage 0 - Strawman
                    Stage 1 - Proposal
                    Stage 2 - Draft
                    Stage 3 - Candidate
                    Stage 4 - Finished'
      type: 'integer'
      default: 2
      minimum: 0
      maximium: 4
      order: 90
    externalHelpers:
      type: 'boolean'
      default: false
      order: 100
    moduleLoader:
      description: 'common, amd or umd'
      type: 'string'
      default: 'common'
      enum: ['common', 'amd', 'umd']
      order: 120
    blacklistTransformers:
      description: 'Comma seperated list of excluded transformers'
      type: 'array'
      default: []
      order: 130
      items:
        type: 'string'
    whitelistTransformers:
      description: 'Comma seperated list of transformers'
      type: 'array'
      default: []
      order: 140
      items:
        type: 'string'
    looseTransformers:
      description: 'Comma seperated list of "loose" transformers - or "all"'
      type: 'array'
      default: []
      order: 150
      items:
        type: 'string'
    optionalTransformers:
      description: 'Comma seperated list of optional transformers. You can use "runtime" here'
      type: 'array'
      default: []
      order: 160
      items:
        type: 'string'

  activate: (state) ->
    # track any file save ( buffer save) events and transpile if babel
    @disposable = new CompositeDisposable
    @disposable.add  atom.workspace.observeTextEditors (textEditor) =>
      @disposable.add textEditor.onDidSave (event) =>
        grammar = textEditor.getGrammar()
        return if grammar.packageName isnt 'language-babel'
        BabelTranspile.transpile(event.path)

  deactivate: ->
    if @disposable?
      @disposable.dispose()

  transpile: (sourceFile) ->
    config = BabelTranspile.getConfig()
    return if config.transpileOnSave isnt true

    fqName = BabelTranspile.enumPaths(sourceFile, config)

    # set transpiler options
    babelOptions =
      code: true
      sourceMaps: config.createMap
      blacklist: config.blacklistTransformers
      loose: config.looseTransformers
      optional: config.optionalTransformers
      modules: config.moduleLoader
      externalHelpers: config.externalHelpers
      stage: config.babelStage
    # babel seems to treat an empty arrat of whitelists as don't apply any transforms
    if config.whitelistTransformers.length > 0
      babelOptions.whitelist = config.whitelistTransformers

    # babel-core seems to add a lot of time to atom loading so delay until needed
    @babel ?= require('babel-core')
    @babel.transformFile fqName.sourceFile, babelOptions, (err,result) ->
      if err
        atom.notifications.addError 'Babel Transpiler Error', { dismissable: true, detail: err.message}
      else
        atom.notifications.addInfo 'Babel Transpiler Success', { detail: fqName.sourceFile }

        if not config.createTranspiledCode
          atom.notifications.addInfo 'No transpiled output configured'
          return
        if not pathIsInside(fqName.sourceFile,fqName.sourceRoot)
          atom.notifications.addWarning 'Babel file is not inside the source root directory. No transpiled code output',
            { dismissable: true, detail: fqName.sourceFile}
          return
        if fqName.sourceFile is fqName.transpiledFile
          atom.notifications.addWarning 'Transpiled file would overwrite source file. Aborted!',
            { dismissable: true, detail: fqName.sourceFile}
          return

        # write code and maps
        if config.createTargetDirectories
          mkdirp.sync( path.parse( fqName.transpiledFile).dir)

        if config.babelMapsAddUrl
          result.code = result.code + '\n' + '//# sourceMappingURL='+fqName.mapFile
        fs.writeFileSync(fqName.transpiledFile, result.code)

        if config.createMap
          if config.createTargetDirectories
            mkdirp.sync( path.parse( fqName.mapFile).dir )
          mapJson =
            version: result.map.version
            sources:  fqName.sourceFile
            file: fqName.transpiledFile
            sourceRoot: ''
            names: result.map.names
            mappings: result.map.mappings
          xssiProtection = ')]}\n'
          fs.writeFileSync(fqName.mapFile, xssiProtection + JSON.stringify( mapJson, null, ' ' ) )

  # get configuration for language-babel
  getConfig: -> atom.config.get('language-babel')

  # calculate absoulte paths of babel source, target js and maps files
  # based upon the project directory containing the source
  # and the roots of source, transpile path and maps paths defined in config
  enumPaths:  (sourceFile, config) ->
    projectContainingSource = atom.project.relativizePath(sourceFile)
    absProjectPath = path.normalize(projectContainingSource[0])

    relSourcePath = path.normalize(config.babelSourcePath)
    relTranspilePath = path.normalize(config.babelTranspilePath)
    relMapsPath = path.normalize(config.babelMapsPath)

    absSourceRoot = path.join( absProjectPath , relSourcePath )
    absTranspileRoot = path.join( absProjectPath , relTranspilePath )
    absMapsRoot = path.join( absProjectPath , relMapsPath )

    parsedSourceFile = path.parse( sourceFile)
    relSourceRootToSourceFile = path.relative( absSourceRoot, parsedSourceFile.dir)
    absTranspiledFile = path.join( absTranspileRoot, relSourceRootToSourceFile , parsedSourceFile.name  + '.js' )
    absMapFile = path.join( absMapsRoot, relSourceRootToSourceFile , parsedSourceFile.name  + '.js.map' )

    sourceFile: sourceFile
    mapFile: absMapFile
    transpiledFile: absTranspiledFile
    sourceRoot: absSourceRoot
