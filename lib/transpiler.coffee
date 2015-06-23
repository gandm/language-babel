fs = require 'fs-plus'
path = require 'path'
pathIsInside = require 'path-is-inside'

class Transpiler
  constructor: ->
    @deprecateConfig()

  # transpile sourceFile edited by the optional textEditor
  transpile: (sourceFile, textEditor) ->
    config = @getConfig()
    return if config.transpileOnSave isnt true

    pathTo = @getPaths(sourceFile, config)

    if not pathIsInside(pathTo.sourceFile, pathTo.sourceRoot)
      if not config.supressSourcePathMessages
        atom.notifications.addWarning 'Babel file is not inside the "Babel Source Path" directory.',
          dismissable: false
          detail: "No transpiled code output for file \n#{pathTo.sourceFile}
            \n\nTo supress these 'invalid source path'
            messages use language-babel package settings"
      return

    babelOptions = @getBabelOptions(config, pathTo)

    # babel-core seems to add a lot of time to atom loading so delay until needed
    @babel ?= require('../node_modules/babel-core')
    @babel.transformFile pathTo.sourceFile, babelOptions, (err,result) =>
      if err
        notification = atom.notifications.addError "Babel v#{@babel.version} Transpiler Error",
          dismissable: true
          detail: err.message
        # if we have a line/col syntax error jump to the position
        if err.loc? and textEditor?
          textEditor.setCursorBufferPosition [err.loc.line-1, err.loc.column-1]
      else
        if not config.supressTranspileOnSaveMessages
          notification = atom.notifications.addInfo "Babel v#{@babel.version} Transpiler Success",
            detail: pathTo.sourceFile

        if not config.createTranspiledCode
          if not config.supressTranspileOnSaveMessages
            atom.notifications.addInfo 'No transpiled output configured'
          return
        if pathTo.sourceFile is pathTo.transpiledFile
          atom.notifications.addWarning 'Transpiled file would overwrite source file. Aborted!',
            dismissable: true
            detail: pathTo.sourceFile
          return

        # write code and maps
        if config.createTargetDirectories
          fs.makeTreeSync( path.parse( pathTo.transpiledFile).dir)

        # add source map url to code if file isn't ignored
        if config.babelMapsAddUrl and not result.ignored
          result.code = result.code + '\n' + '//# sourceMappingURL='+pathTo.mapFile

        fs.writeFileSync pathTo.transpiledFile, result.code

        # write source map asked to and not ignored
        if config.createMap and not result.ignored
          if config.createTargetDirectories
            fs.makeTreeSync(path.parse(pathTo.mapFile).dir)
          mapJson =
            version: result.map.version
            sources:  pathTo.sourceFile
            file: pathTo.transpiledFile
            sourceRoot: ''
            names: result.map.names
            mappings: result.map.mappings
          xssiProtection = ')]}\n'
          fs.writeFileSync pathTo.mapFile,
            xssiProtection + JSON.stringify mapJson, null, ' '

  # modifies config options for changed or deprecated configs
  deprecateConfig: ->
    atom.config.unset('language-babel.useInternalScanner')
    atom.config.unset('language-babel.stopAtProjectDirectory')

  # calculate babel options based upon package config, babelrc files and
  # whether internalScanner is used.
  getBabelOptions: (config, pathTo)->
    # set transpiler options from package configuration.
    babelOptions =
      sourceMaps: config.createMap
      blacklist: config.blacklistTransformers
      loose: config.looseTransformers
      optional: config.optionalTransformers
      modules: config.moduleLoader
      stage: config.babelStage
      externalHelpers: config.externalHelpers
      code: true
    # babel seems to treat an empty array of whitelists as don't apply any transforms
    if config.whitelistTransformers.length > 0
      babelOptions.whitelist = config.whitelistTransformers
    return babelOptions

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

exports.Transpiler = Transpiler
