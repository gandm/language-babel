fs = require 'fs-plus'
path = require 'path'
pathIsInside = require 'path-is-inside'
# setup JSON Schema to parse .languagebabel configs
languagebabelSchema = {
  type: 'object',
  properties: {
    babelMapsPath:                    { type: 'string' },
    babelMapsAddUrl:                  { type: 'boolean' },
    babelSourcePath:                  { type: 'string' },
    babelTranspilePath:               { type: 'string' },
    createMap:                        { type: 'boolean' },
    createTargetDirectories:          { type: 'boolean' },
    createTranspiledCode:             { type: 'boolean' },
    disableWhenNoBabelrcFileInPath:   { type: 'boolean' },
    suppressSourcePathMessages:       { type: 'boolean' },
    suppressTranspileOnSaveMessages:  { type: 'boolean' },
    transpileOnSave:                  { type: 'boolean' }
  },
  additionalProperties: false
}

class Transpiler
  constructor: ->
    @transpileErrorNotifications = {}
    @deprecateConfig()

  # transpile sourceFile edited by the optional textEditor
  transpile: (sourceFile, textEditor) ->
    config = @getConfig()
    pathTo = @getPaths sourceFile, config

    if config.allowLocalOverride
      if not @jsonSchema?
        @jsonSchema = (require 'jjv')() # use jjv as it runs without CSP issues
        @jsonSchema.addSchema 'localConfig', languagebabelSchema
      localConfig = @getLocalConfig pathTo.sourceFileDir, pathTo.projectPath, {}
      # merge local configs with global. local wins
      @merge config, localConfig
      # recalc paths
      pathTo = @getPaths sourceFile, config

    return if config.transpileOnSave isnt true

    if config.disableWhenNoBabelrcFileInPath
      if not @isBabelrcInPath pathTo.sourceFileDir
        return

    if not pathIsInside(pathTo.sourceFile, pathTo.sourceRoot)
      if not config.suppressSourcePathMessages
        atom.notifications.addWarning 'Babel file is not inside the "Babel Source Path" directory.',
          dismissable: false
          detail: "No transpiled code output for file \n#{pathTo.sourceFile}
            \n\nTo suppress these 'invalid source path'
            messages use language-babel package settings"
      return

    babelOptions = @getBabelOptions config

    # remove previous transpile error notifications for this source file
    if @transpileErrorNotifications[pathTo.sourceFile]?
      @transpileErrorNotifications[pathTo.sourceFile].dismiss()
      delete @transpileErrorNotifications[pathTo.sourceFile]
    # babel-core seems to add a lot of time to atom loading so delay until needed
    @babel ?= require('../node_modules/babel-core')
    @babel.transformFile pathTo.sourceFile, babelOptions, (err,result) =>
      # result.ignored is returned when .babelrc ignore/only flags are used
      if result?.ignored? and result.ignored is true then return
      if err
        notification =atom.notifications.addError "Babel v#{@babel.version} Transpiler Error",
          dismissable: true
          detail: err.message
        @transpileErrorNotifications[pathTo.sourceFile] = notification
        # if we have a line/col syntax error jump to the position
        if err.loc? and textEditor?
          textEditor.setCursorBufferPosition [err.loc.line-1, err.loc.column-1]
      else
        if not config.suppressTranspileOnSaveMessages
          atom.notifications.addInfo "Babel v#{@babel.version} Transpiler Success",
            detail: pathTo.sourceFile

        if not config.createTranspiledCode
          if not config.suppressTranspileOnSaveMessages
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
        if config.babelMapsAddUrl
          result.code = result.code + '\n' + '//# sourceMappingURL='+pathTo.mapFile

        fs.writeFileSync pathTo.transpiledFile, result.code

        # write source map if returned and if asked
        if config.createMap and result.map?.version
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
    if atom.config.get('language-babel.supressTranspileOnSaveMessages')?
      atom.config.set 'language-babel.suppressTranspileOnSaveMessages',
        atom.config.get('language-babel.supressTranspileOnSaveMessages')
    if atom.config.get('language-babel.supressSourcePathMessages')?
      atom.config.set 'language-babel.suppressSourcePathMessages',
        atom.config.get('language-babel.supressSourcePathMessages')
    atom.config.unset('language-babel.supressTranspileOnSaveMessages')
    atom.config.unset('language-babel.supressSourcePathMessages')
    atom.config.unset('language-babel.useInternalScanner')
    atom.config.unset('language-babel.stopAtProjectDirectory')

  # calculate babel options based upon package config, babelrc files and
  # whether internalScanner is used.
  getBabelOptions: (config)->
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

  # get global configuration for language-babel
  getConfig: -> atom.config.get('language-babel')

# check for prescence of a .languagebabel file path fromDir toDir
# read, validate and overwrite config as required
  getLocalConfig: (fromDir, toDir, localConfig) ->
    # get local path overides
    localConfigFile = '.languagebabel'
    languageBabelCfgFile = path.join fromDir, localConfigFile
    if fs.existsSync languageBabelCfgFile
      fileContent= fs.readFileSync languageBabelCfgFile, 'utf8'
      try
        jsonContent = JSON.parse fileContent
      catch err
        atom.notifications.addError "#{localConfigFile} #{err.message}",
          dismissable: true
          detail: "File = #{languageBabelCfgFile}\n\n#{fileContent}"
        return
      schemaErrors = @jsonSchema.validate 'localConfig', jsonContent
      if schemaErrors
        atom.notifications.addError "#{localConfigFile} configuration error",
          dismissable: true
          detail: "File = #{languageBabelCfgFile}\n\n#{fileContent}"
      else
        # merge local config. config closest sourceFile wins
        @merge  jsonContent, localConfig
        localConfig = jsonContent
    if fromDir isnt toDir
      # stop infinite recursion https://github.com/gandm/language-babel/issues/66
      if fromDir == path.dirname(fromDir) then return localConfig
      return @getLocalConfig path.dirname(fromDir), toDir, localConfig
    else return localConfig

  # calculate absoulte paths of babel source, target js and maps files
  # based upon the project directory containing the source
  # and the roots of source, transpile path and maps paths defined in config
  getPaths:  (sourceFile, config) ->
    projectContainingSource = atom.project.relativizePath sourceFile
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

# check for prescence of a .babelrc file path fromDir to root
  isBabelrcInPath: (fromDir) ->
    # enviromnents used in babelrc
    babelrc = '.babelrc'
    babelrcFile = path.join fromDir, babelrc
    if fs.existsSync babelrcFile
      return true
    if fromDir != path.dirname(fromDir)
      return @isBabelrcInPath path.dirname(fromDir)
    else return false

# simple merge of objects
  merge: (targetObj, sourceObj) ->
    for prop, val of sourceObj
      targetObj[prop] = val

module.exports = Transpiler
