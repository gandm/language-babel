{Task} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
pathIsInside = require '../node_modules/path-is-inside'
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
    @msgId = 0
    @babelTranspilerTasks = {}
    @babelTransformerPath = require.resolve './transformer-task'
    @transpileErrorNotifications = {}
    @deprecateConfig()

  # transpile sourceFile edited by the optional textEditor
  transpile: (sourceFile, textEditor) ->
    # Remove unused tasks
    @stopUnusedTasks()

    config = @getConfig()
    pathTo = @getPaths sourceFile, config
    if pathTo.sourceFileInProject isnt true then return;

    if config.allowLocalOverride
      if not @jsonSchema?
        @jsonSchema = (require '../node_modules/jjv')() # use jjv as it runs without CSP issues
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

    # babel transformer tasks - one per project as needed
    @babelTranspilerTasks[pathTo.projectPath] ?=
      Task.once @babelTransformerPath, pathTo.projectPath, =>
        # task ended
        delete @babelTranspilerTasks[pathTo.projectPath]

    if @babelTranspilerTasks[pathTo.projectPath]?
      msgId = @msgId++
      msgObject =
        msgId: msgId
        command: 'transpile'
        pathTo: pathTo
        babelOptions: babelOptions
      # transpile in task
      @babelTranspilerTasks[pathTo.projectPath].send(msgObject)
      # get result from task
      @babelTranspilerTasks[pathTo.projectPath].on msgId, (msgRet) =>
        # .ignored is returned when .babelrc ignore/only flags are used
        if msgRet.ignored then return
        if msgRet.err
          notification =atom.notifications.addError "Babel v#{msgRet.babelVersion} Transpiler Error",
            dismissable: true
            detail: "#{msgRet.err.message}\n \n#{msgRet.babelCoreUsed}\n \n#{msgRet.err.codeFrame}"
          @transpileErrorNotifications[pathTo.sourceFile] = notification
          # if we have a line/col syntax error jump to the position
          if msgRet.err.loc? and textEditor?
            textEditor.setCursorBufferPosition [msgRet.err.loc.line-1, msgRet.err.loc.column-1]
        else
          if not config.suppressTranspileOnSaveMessages
            atom.notifications.addInfo "Babel v#{msgRet.babelVersion} Transpiler Success",
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
            msgRet.result.code = msgRet.result.code + '\n' + '//# sourceMappingURL='+pathTo.mapFile

          fs.writeFileSync pathTo.transpiledFile, msgRet.result.code

          # write source map if returned and if asked
          if config.createMap and msgRet.result.map?.version
            if config.createTargetDirectories
              fs.makeTreeSync(path.parse(pathTo.mapFile).dir)
            mapJson =
              version: msgRet.result.map.version
              sources:  pathTo.sourceFile
              file: pathTo.transpiledFile
              sourceRoot: ''
              names: msgRet.result.map.names
              mappings: msgRet.result.map.mappings
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
    # remove babel V5 options
    atom.config.unset('language-babel.babelStage')
    atom.config.unset('language-babel.externalHelpers')
    atom.config.unset('language-babel.moduleLoader')
    atom.config.unset('language-babel.blacklistTransformers')
    atom.config.unset('language-babel.whitelistTransformers')
    atom.config.unset('language-babel.looseTransformers')
    atom.config.unset('language-babel.optionalTransformers')
    atom.config.unset('language-babel.plugins')
    atom.config.unset('language-babel.presets')

  # calculate babel options based upon package config, babelrc files and
  # whether internalScanner is used.
  getBabelOptions: (config)->
    # set transpiler options from package configuration.
    babelOptions =
      sourceMaps: config.createMap
      plugins: config.plugins
      presets: config.presets
      code: true


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
      sourceFileInProject = false
    else
      absProjectPath = path.normalize(projectContainingSource[0])
      sourceFileInProject = true
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

    sourceFileInProject: sourceFileInProject
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

# stop transpiler task
  stopTranspilerTask: (projectPath) ->
    msgObject =
      command: 'stop'
    @babelTranspilerTasks[projectPath].send(msgObject)

# stop transpiler task
  stopAllTranspilerTask: () ->
    for projectPath, v of @babelTranspilerTasks
      @stopTranspilerTask(projectPath)

# stop unsued transpiler tasks
  stopUnusedTasks: () ->
    for projectPath,v of @babelTranspilerTasks
      projectLoaded = (atom.project.relativizePath(projectPath))[0]
      if not projectLoaded? then @stopTranspilerTask(projectPath)


module.exports = Transpiler
