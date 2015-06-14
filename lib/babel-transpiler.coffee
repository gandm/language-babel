{CompositeDisposable} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
pathIsInside = require 'path-is-inside'
merge = require 'lodash/object/merge'
stripJsonComments = require 'strip-json-comments'

module.exports = BabelTranspile =
  config:
    transpileOnSave:
      type: 'boolean'
      default: true
      order: 10
    supressTranspileOnSaveMessages:
      description: 'Supress notification messages on each save'
      type: 'boolean'
      default: false
      order: 12
    useInternalScanner:
      type: 'boolean'
      default: false
      description: 'Use internal scanner for .babelrc files'
      order: 14
    stopAtProjectDirectory:
      description: 'Stop .babelrc recursion at Project Root. Needs Internal Scanner'
      type: 'boolean'
      default: false
      order: 16
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
    supressSourcePathMessages:
      description: 'Supress messages about file not inside Babel Source Path'
      type: 'boolean'
      default: false
      order: 55
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
        @transpile(event.path, textEditor)

  deactivate: ->
    if @disposable?
      @disposable.dispose()

  # transpile sourceFile edited by the optional textEditor
  transpile: (sourceFile, textEditor) ->
    config = @getConfig()
    return if config.transpileOnSave isnt true

    pathsTo = @getPaths(sourceFile, config)

    if not pathIsInside(pathsTo.sourceFile, pathsTo.sourceRoot)
      if not config.supressSourcePathMessages
        atom.notifications.addWarning 'Babel file is not inside the "Babel Source Path" directory.',
          dismissable: false
          detail: "No transpiled code output for file \n#{pathsTo.sourceFile}
            \n\nTo supress these 'invalid source path' messages use language-babel package settings"
      return

    babelOptions = @getBabelOptions(config, pathsTo)

    babelOptions.code = true
    babelOptions.filename = pathsTo.sourceFile
    # babel-core seems to add a lot of time to atom loading so delay until needed
    @babel ?= require('../node_modules/babel-core')
    @babel.transformFile pathsTo.sourceFile, babelOptions, (err,result) =>
      if err
        notification = atom.notifications.addError "Babel v#{@babel.version} Transpiler Error",
          dismissable: true
          detail: err.message
          buttons: [{
            text: 'View Transpiler Options',
            onDidClick: =>
              @displayTranspilerOptions(babelOptions, config)
            }]
        # if we have a line/col syntax error jump to the position
        if err.loc? and textEditor? then textEditor.setCursorBufferPosition [err.loc.line-1, err.loc.column-1]
      else
        if not config.supressTranspileOnSaveMessages
          notification = atom.notifications.addInfo "Babel v#{@babel.version} Transpiler Success",
            detail: pathsTo.sourceFile
            buttons: [{
              text: 'View Transpiler Options',
              onDidClick: =>
                @displayTranspilerOptions(babelOptions, config)
                notification.dismiss()
              }]

        if not config.createTranspiledCode
          atom.notifications.addInfo 'No transpiled output configured'
          return
        if pathsTo.sourceFile is pathsTo.transpiledFile
          atom.notifications.addWarning 'Transpiled file would overwrite source file. Aborted!',
            dismissable: true
            detail: pathsTo.sourceFile
          return

        # write code and maps
        if config.createTargetDirectories
          fs.makeTreeSync( path.parse( pathsTo.transpiledFile).dir)

        # add source map url if not inline and file isn't ignored
        if config.babelMapsAddUrl and
        babelOptions.sourceMaps not in ['inline','both'] and
        babelOptions.sourceMaps and
        not result.ignored
          result.code = result.code + '\n' + '//# sourceMappingURL='+pathsTo.mapFile

        fs.writeFileSync(pathsTo.transpiledFile, result.code)

        # is this file matched by an ignore option flag don't save any maps
        if result.ignored
          return

        # write source map if not inline
        if config.createMap and
        babelOptions.sourceMaps not in ['inline','both'] and
        babelOptions.sourceMaps
          if config.createTargetDirectories
            fs.makeTreeSync( path.parse( pathsTo.mapFile).dir )
          mapJson =
            version: result.map.version
            sources:  pathsTo.sourceFile
            file: pathsTo.transpiledFile
            sourceRoot: ''
            names: result.map.names
            mappings: result.map.mappings
          xssiProtection = ')]}\n'
          fs.writeFileSync(pathsTo.mapFile, xssiProtection + JSON.stringify( mapJson, null, ' ' ) )


  # calculate babel options based upon package config, babelrc files and
  # whether internalScanner is used.
  getBabelOptions: (config, pathsTo)->
    # set transpiler options from package configuration.
    babelOptions =
      sourceMaps: config.createMap
      blacklist: config.blacklistTransformers
      loose: config.looseTransformers
      optional: config.optionalTransformers
      modules: config.moduleLoader
      externalHelpers: config.externalHelpers
      stage: config.babelStage
    # babel seems to treat an empty array of whitelists as don't apply any transforms
    if config.whitelistTransformers.length > 0
      babelOptions.whitelist = config.whitelistTransformers
    # get babelrc configurations if required
    if config.useInternalScanner
      # determine where to stop .babelrc traversal
      if config.stopAtProjectDirectory
        stopDir = pathsTo.projectPath
      else
        stopDir = path.parse(pathsTo.projectPath).root
      babelrcOpts = {}
      @getBabelrc(pathsTo.sourceFileDir, stopDir, babelrcOpts)
      # if a babelrc file had breakConfig then don't merge package config
      # The intent is to localise all options
      if babelrcOpts.breakConfig
        babelOptions = babelrcOpts
      else
        babelrcOpts.breakConfig = true     # set to stop the use of babel's .babelrc scanner
        @mergeBabelrc(babelOptions, babelrcOpts)
    return babelOptions

  # get & merge babelrc options from the source files directory upto the source root
  # if a breakConfig: true option is found end recursion and pass back merged opts
  # this is modeled on babels own resolve-rc.js
  getBabelrc: (fromDir, toDir, opts) ->
    # enviromnents used in babelrc
    babelrc = '.babelrc'
    babelEnv = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
    babelrcFile = path.join(fromDir, babelrc)
    opts.babelrc ?= []
    if fs.existsSync babelrcFile
      babelrcContent = fs.readFileSync(babelrcFile, 'utf8')
      try
        babelrcContent = JSON.parse(stripJsonComments(babelrcContent))
      catch err
        err.message = "#{babelrcFile}\n"+err.message
        atom.notifications.addError "Error in .babelrc file", { dismissable: true, detail: err.message}
      opts.babelrc.push(babelrcFile)
      if babelrcContent.env?[babelEnv]
        babelrcContent = babelrcContent.env[babelEnv]
      @mergeBabelrc(opts, babelrcContent) # we even merge breakConfigs
      if opts.breakConfig
        return opts
    if fromDir isnt toDir
      @getBabelrc( path.dirname(fromDir), toDir, opts)
    return opts

  # get configuration for language-babel
  getConfig: -> atom.config.get('language-babel')

  # calculate absoulte paths of babel source, target js and maps files
  # based upon the project directory containing the source
  # and the roots of source, transpile path and maps paths defined in config
  getPaths:  (sourceFile, config) ->
    projectContainingSource = atom.project.relativizePath(sourceFile)
    # if a project is in the root directory atom passes back a null for
    # the project path. We need the real root
    if projectContainingSource[0] is null
      absProjectPath = path.parse(sourceFile).root
    else absProjectPath = path.normalize(projectContainingSource[0])
    relSourcePath = path.normalize(config.babelSourcePath)
    relTranspilePath = path.normalize(config.babelTranspilePath)
    relMapsPath = path.normalize(config.babelMapsPath)

    absSourceRoot = path.join(absProjectPath , relSourcePath)
    absTranspileRoot = path.join(absProjectPath , relTranspilePath)
    absMapsRoot = path.join(absProjectPath , relMapsPath)

    parsedSourceFile = path.parse(sourceFile)
    relSourceRootToSourceFile = path.relative(absSourceRoot, parsedSourceFile.dir)
    absTranspiledFile = path.join(absTranspileRoot, relSourceRootToSourceFile , parsedSourceFile.name  + '.js')
    absMapFile = path.join(absMapsRoot, relSourceRootToSourceFile , parsedSourceFile.name  + '.js.map')

    sourceFile: sourceFile
    sourceFileDir: parsedSourceFile.dir
    mapFile: absMapFile
    transpiledFile: absTranspiledFile
    sourceRoot: absSourceRoot
    projectPath: absProjectPath

  # merge babelrc options as per babel code in
  # https://github.com/babel/babel/blob/master/src/babel/helpers/merge.js
  mergeBabelrc: (dest, src) ->
    merge dest, src, (a,b) ->
      if (Array.isArray(a))
        c = a.slice(0)
        for k, v of b
          if (a.indexOf(v) < 0)
            c.push(v)
        return c

  #verbose notification of transpiler options by using notify
  displayTranspilerOptions: (options, config) ->
    if config.useInternalScanner
      atom.notifications.addInfo "Babel v#{@babel.version} Transpiler Options",
        dismissable: true
        detail:
          'Internal Scanner always show breakConfig as true\n' +
          JSON.stringify options, null, ' '
    else
      atom.notifications.addInfo "Babel v#{@babel.version} Transpiler Options",
        dismissable: true
        detail:
          'The package settings are as follows:-\n' +
          JSON.stringify options, null, ' '
