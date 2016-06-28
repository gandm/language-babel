{Task, CompositeDisposable } = require 'atom'
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
    projectRoot:                      { type: 'boolean' },
    suppressSourcePathMessages:       { type: 'boolean' },
    suppressTranspileOnSaveMessages:  { type: 'boolean' },
    transpileOnSave:                  { type: 'boolean' }
  },
  additionalProperties: false
}

class Transpiler

  fromGrammarName: 'Babel ES6 JavaScript'
  fromScopeName: 'source.js.jsx'
  toScopeName: 'source.js.jsx'

  constructor: ->
    @reqId = 0
    @babelTranspilerTasks = {}
    @babelTransformerPath = require.resolve './transpiler-task'
    @transpileErrorNotifications = {}
    @deprecateConfig()
    @disposables = new CompositeDisposable()
    if @getConfig().transpileOnSave or @getConfig().allowLocalOverride
      @disposables.add atom.contextMenu.add {
        '.tree-view .directory > .header > .name': [
            {
              label: 'Language-Babel'
              submenu: [
                {label: 'Transpile Directory ', command: 'language-babel:transpile-directory'}
                {label: 'Transpile Directories', command: 'language-babel:transpile-directories'}
              ]
            }
            {'type': 'separator' }
          ]
        }
      @disposables.add atom.commands.add '.tree-view .directory > .header > .name', 'language-babel:transpile-directory', @commandTranspileDirectory
      @disposables.add atom.commands.add '.tree-view .directory > .header > .name', 'language-babel:transpile-directories', @commandTranspileDirectories

  # method used by source-preview to see transpiled code
  transform: (code, {filePath, sourceMap}) ->
    config = @getConfig()
    pathTo = @getPaths filePath, config
    # create babel transformer tasks - one per project as needed
    @createTask pathTo.projectPath
    babelOptions =
      filename: filePath
      ast: false
    if sourceMap then babelOptions.sourceMaps = sourceMap
    # ok now transpile in the task and wait on the result
    if @babelTranspilerTasks[pathTo.projectPath]
      reqId = @reqId++
      msgObject =
        reqId: reqId
        command: 'transpileCode'
        pathTo: pathTo
        code: code
        babelOptions: babelOptions

    new Promise (resolve, reject ) =>
      # transpile in task
      try
        @babelTranspilerTasks[pathTo.projectPath].send(msgObject)
      catch err
        delete @babelTranspilerTasks[pathTo.projectPath]
        reject("Error #{err} sending to transpile task with PID #{@babelTranspilerTasks[pathTo.projectPath].childProcess.pid}")
      # get result from task for this reqId
      @babelTranspilerTasks[pathTo.projectPath].once "transpile:#{reqId}", (msgRet) =>
        if msgRet.err?
          reject("Babel v#{msgRet.babelVersion}\n#{msgRet.err.message}\n#{msgRet.babelCoreUsed}")
        else
          msgRet.sourceMap = msgRet.map
          resolve(msgRet)

  # called by command
  commandTranspileDirectory: ({target}) =>
    @transpileDirectory {directory: target.dataset.path }

  # called by command
  commandTranspileDirectories: ({target}) =>
    @transpileDirectory {directory: target.dataset.path, recursive: true}

  # transpile all files in a directory or recursive directories
  # options are { directory: name, recursive: true|false}
  transpileDirectory: (options) ->
    directory = options.directory
    recursive = options.recursive or false
    fs.readdir directory, (err,files) =>
      if not err?
        files.map (file) =>
          fqFileName = path.join(directory, file)
          fs.stat fqFileName, (err, stats) =>
            if not err?
              if stats.isFile()
                return if /\.min\.[a-z]+$/.test fqFileName # no minimized files
                if /\.(js|jsx|es|es6|babel)$/.test fqFileName # only js
                  @transpile file, null, @getConfigAndPathTo fqFileName
              else if recursive and stats.isDirectory()
                @transpileDirectory {directory: fqFileName, recursive: true}

  # transpile sourceFile edited by the optional textEditor
  transpile: (sourceFile, textEditor, configAndPathTo) ->
    # get config
    if configAndPathTo?
      { config, pathTo } = configAndPathTo
    else
      {config, pathTo } = @getConfigAndPathTo(sourceFile)

    return if config.transpileOnSave isnt true

    if config.disableWhenNoBabelrcFileInPath
      if not @isBabelrcInPath pathTo.sourceFileDir
        return

    if not pathIsInside(pathTo.sourceFile, pathTo.sourceRoot)
      if not config.suppressSourcePathMessages
        atom.notifications.addWarning 'LB: Babel file is not inside the "Babel Source Path" directory.',
          dismissable: false
          detail: "No transpiled code output for file \n#{pathTo.sourceFile}
            \n\nTo suppress these 'invalid source path'
            messages use language-babel package settings"
      return

    babelOptions = @getBabelOptions config

    @cleanNotifications(pathTo)

    # create babel transformer tasks - one per project as needed
    @createTask pathTo.projectPath

    # ok now transpile in the task and wait on the result
    if @babelTranspilerTasks[pathTo.projectPath]
      reqId = @reqId++
      msgObject =
        reqId: reqId
        command: 'transpile'
        pathTo: pathTo
        babelOptions: babelOptions

      # transpile in task
      try
        @babelTranspilerTasks[pathTo.projectPath].send(msgObject)
      catch err
        console.log "Error #{err} sending to transpile task with PID #{@babelTranspilerTasks[pathTo.projectPath].childProcess.pid}"
        delete @babelTranspilerTasks[pathTo.projectPath]
        @createTask pathTo.projectPath
        console.log "Restarted transpile task with PID #{@babelTranspilerTasks[pathTo.projectPath].childProcess.pid}"
        @babelTranspilerTasks[pathTo.projectPath].send(msgObject)

      # get result from task for this reqId
      @babelTranspilerTasks[pathTo.projectPath].once "transpile:#{reqId}", (msgRet) =>
        # .ignored is returned when .babelrc ignore/only flags are used
        if msgRet.result?.ignored then return
        if msgRet.err
          if msgRet.err.stack
            @transpileErrorNotifications[pathTo.sourceFile] =
              atom.notifications.addError "LB: Babel Transpiler Error",
                dismissable: true
                detail: "#{msgRet.err.message}\n \n#{msgRet.babelCoreUsed}\n \n#{msgRet.err.stack}"
          else
            @transpileErrorNotifications[pathTo.sourceFile] =
              atom.notifications.addError "LB: Babel v#{msgRet.babelVersion} Transpiler Error",
                dismissable: true
                detail: "#{msgRet.err.message}\n \n#{msgRet.babelCoreUsed}\n \n#{msgRet.err.codeFrame}"
            # if we have a line/col syntax error jump to the position
            if msgRet.err.loc?.line? and textEditor?.alive
              textEditor.setCursorBufferPosition [msgRet.err.loc.line-1, msgRet.err.loc.column]
        else
          if not config.suppressTranspileOnSaveMessages
            atom.notifications.addInfo "LB: Babel v#{msgRet.babelVersion} Transpiler Success",
              detail: "#{pathTo.sourceFile}\n \n#{msgRet.babelCoreUsed}"

          if not config.createTranspiledCode
            if not config.suppressTranspileOnSaveMessages
              atom.notifications.addInfo 'LB: No transpiled output configured'
            return
          if pathTo.sourceFile is pathTo.transpiledFile
            atom.notifications.addWarning 'LB: Transpiled file would overwrite source file. Aborted!',
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

  # clean notification messages
  cleanNotifications: (pathTo) ->
    # auto dismiss previous transpile error notifications for this source file
    if @transpileErrorNotifications[pathTo.sourceFile]?
      @transpileErrorNotifications[pathTo.sourceFile].dismiss()
      delete @transpileErrorNotifications[pathTo.sourceFile]
    # remove any user dismissed notification object references
    for sf, n of @transpileErrorNotifications
      if n.dismissed
        delete @transpileErrorNotifications[sf]
    # FIX for atom notifications. dismissed noftifications via whatever means
    # are never actually removed from memory. I consider this a memory leak
    # See https://github.com/atom/atom/issues/8614 so remove any dismissed
    # notification objects prefixed with a message prefix of LB: from memory
    i = atom.notifications.notifications.length - 1
    while i >= 0
      if atom.notifications.notifications[i].dismissed and
      atom.notifications.notifications[i].message.substring(0,3) is "LB:"
        atom.notifications.notifications.splice i, 1
      i--

  # create babel transformer tasks - one per project as needed
  createTask: (projectPath) ->
    @babelTranspilerTasks[projectPath] ?=
      Task.once @babelTransformerPath, projectPath, =>
        # task ended
        delete @babelTranspilerTasks[projectPath]

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
    # remove old name indent options
    atom.config.unset('language-babel.formatJSX')

  # calculate babel options based upon package config, babelrc files and
  # whether internalScanner is used.
  getBabelOptions: (config)->
    # set transpiler options from package configuration.
    babelOptions =
      code: true
    if config.createMap  then babelOptions.sourceMaps = config.createMap
    babelOptions

  #get configuration and paths
  getConfigAndPathTo: (sourceFile) ->
    config = @getConfig()
    pathTo = @getPaths sourceFile, config

    if config.allowLocalOverride
      if not @jsonSchema?
        @jsonSchema = (require '../node_modules/jjv')() # use jjv as it runs without CSP issues
        @jsonSchema.addSchema 'localConfig', languagebabelSchema
      localConfig = @getLocalConfig pathTo.sourceFileDir, pathTo.projectPath, {}
      # merge local configs with global. local wins
      @merge config, localConfig
      # recalc paths
      pathTo = @getPaths sourceFile, config
    return { config, pathTo }

  # get global configuration for language-babel
  getConfig: -> atom.config.get('language-babel')

# check for prescence of a .languagebabel file path fromDir toDir
# read, validate and overwrite config as required
# toDir is normally the implicit Atom project folders root but we
# will stop of a projectRoot true is found as well
  getLocalConfig: (fromDir, toDir, localConfig) ->
    # get local path overides
    localConfigFile = '.languagebabel'
    languageBabelCfgFile = path.join fromDir, localConfigFile
    if fs.existsSync languageBabelCfgFile
      fileContent= fs.readFileSync languageBabelCfgFile, 'utf8'
      try
        jsonContent = JSON.parse fileContent
      catch err
        atom.notifications.addError "LB: #{localConfigFile} #{err.message}",
          dismissable: true
          detail: "File = #{languageBabelCfgFile}\n\n#{fileContent}"
        return

      schemaErrors = @jsonSchema.validate 'localConfig', jsonContent
      if schemaErrors
        atom.notifications.addError "LB: #{localConfigFile} configuration error",
          dismissable: true
          detail: "File = #{languageBabelCfgFile}\n\n#{fileContent}"
      else
        # merge local config. config closest sourceFile wins
        # apart from projectRoot which wins on true
        isProjectRoot = jsonContent.projectRoot
        @merge  jsonContent, localConfig
        if isProjectRoot then jsonContent.projectRootDir = fromDir
        localConfig = jsonContent
    if fromDir isnt toDir
      # stop infinite recursion https://github.com/gandm/language-babel/issues/66
      if fromDir == path.dirname(fromDir) then return localConfig
      # check projectRoot property and end recursion if true
      if isProjectRoot then return localConfig
      return @getLocalConfig path.dirname(fromDir), toDir, localConfig
    else return localConfig

  # calculate absoulte paths of babel source, target js and maps files
  # based upon the project directory containing the source
  # and the roots of source, transpile path and maps paths defined in config
  getPaths:  (sourceFile, config) ->
    projectContainingSource = atom.project.relativizePath sourceFile
    # Is the sourceFile located inside an Atom project folder?
    if projectContainingSource[0] is null
      sourceFileInProject = false
    else sourceFileInProject = true
    # determines the project root dir from .languagebabel or from Atom
    # if a project is in the root directory of atom passes back a null for
    # the project path if the file isn't in a project folder
    # so make the root dir that source file the project
    if config.projectRootDir?
      absProjectPath = path.normalize(config.projectRootDir)
    else if projectContainingSource[0] is null
      absProjectPath = path.parse(sourceFile).root
    else
      # Atom 1.8 returning drive as project root on windows e.g. c: not c:\
      # using path.join to '.' fixes it.
      absProjectPath = path.normalize(path.join(projectContainingSource[0],'.'))
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

# stop all transpiler tasks
  stopAllTranspilerTask: () ->
    for projectPath, v of @babelTranspilerTasks
      @stopTranspilerTask(projectPath)

# stop unsued transpiler tasks if its path isn't present in a current
# Atom project folder
  stopUnusedTasks: () ->
    atomProjectPaths = atom.project.getPaths()
    for projectTaskPath,v of @babelTranspilerTasks
      isTaskInCurrentProject = false
      for atomProjectPath in atomProjectPaths
        if pathIsInside(projectTaskPath, atomProjectPath)
          isTaskInCurrentProject = true
          break
      if not isTaskInCurrentProject then @stopTranspilerTask(projectTaskPath)

module.exports = Transpiler
