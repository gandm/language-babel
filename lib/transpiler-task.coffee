fs = require 'fs-plus'
path = require 'path'
stripJsonComments = require 'strip-json-comments'
YAML = require 'js-yaml'

isYarnWorkspace = (projectPath) ->
  try
    parentDir = path.normalize( path.join( projectPath, '..'))
    parentDirPackageJSON = path.normalize( path.join(parentDir, '/package.json'))
    parentDirYarnLock = path.normalize( path.join(parentDir, '/yarn.lock'))

    if fs.existsSync(parentDirYarnLock) and fs.existsSync(parentDirPackageJSON)
      fileContent = stripJsonComments(fs.readFileSync(parentDirPackageJSON, 'utf8'))
      workspaces = (YAML.safeLoad fileContent).workspaces
  catch
    return false
  return !!workspaces

# try and find a babel core
tryBabelCore = (projectPath, nodeModulePath) ->
  try
    projectBabelCore = path.normalize( path.join( projectPath, nodeModulePath))
    babel = require projectBabelCore
  catch
    return false
  'babel': babel
  'projectBabelCore': projectBabelCore

# return the location of babel-core or @babel/core and also test for project part of workspace
requireBabelCore = (projectPath) ->
  if !!( babelCore = tryBabelCore( projectPath, '/node_modules/@babel/core') ) then return babelCore
  else if !!( babelCore = tryBabelCore( projectPath, '/node_modules/babel-core') ) then return babelCore
  else if isYarnWorkspace(projectPath)
    if !!( babelCore = tryBabelCore( projectPath, '../node_modules/@babel/core') ) then return babelCore
    else if !!( babelCore = tryBabelCore( projectPath, '../node_modules/babel-core') ) then return babelCore

  return tryBabelCore( '', '../node_modules/babel-core')

# language-babel transpiles run here.
# This runs as a separate task so that transpiles can have their own environment.
module.exports = (projectPath) ->
  callback = @async() #async task
  process.chdir(projectPath)

  { babel, projectBabelCore } = requireBabelCore(projectPath)
  babelCoreUsed = "Using babel-core at\n#{require.resolve projectBabelCore}"

  process.on 'message', (mObj) ->
    if mObj.command is 'transpile'
      try
        babel.transformFile mObj.pathTo.sourceFile, mObj.babelOptions, (err,result) =>
          # fiddly formating a return
          msgRet = {}
          msgRet.reqId = mObj.reqId # send back to reqId
          if err
            msgRet.err = {}
            if err.loc then msgRet.err.loc = err.loc
            if err.codeFrame
              msgRet.err.codeFrame = err.codeFrame
            else msgRet.err.codeFrame = ""
            msgRet.err.message = err.message
          if result
            msgRet.result = result
            msgRet.result.ast = null; # ast seems to create a JSON circular ref on emit
          msgRet.babelVersion = babel.version
          msgRet.babelCoreUsed = babelCoreUsed
          emit "transpile:#{mObj.reqId}", msgRet
          # if this file transpilation isn't in a Atom project folder then term this task
          # as this is normally an Ad-hoc file transpile.
          if not mObj.pathTo.sourceFileInProject
            callback()
      catch err
        msgRet = {}
        msgRet.reqId = mObj.reqId # send back to reqId
        msgRet.err = {}
        msgRet.err.message = err.message
        msgRet.err.stack = err.stack
        msgRet.babelCoreUsed = babelCoreUsed
        emit "transpile:#{mObj.reqId}", msgRet
        callback()

    # used for preview
    if mObj.command is 'transpileCode'
      try
        msgRet = babel.transform mObj.code, mObj.babelOptions
        # fiddly formating a return
        msgRet.babelVersion = babel.version
        msgRet.babelCoreUsed = babelCoreUsed
        emit "transpile:#{mObj.reqId}", msgRet
        # if this file transpilation isn't in a Atom project folder then term this task
        # as this is normally an Ad-hoc file transpile.
        if not mObj.pathTo.sourceFileInProject
          callback()
      catch err
        msgRet = {}
        msgRet.reqId = mObj.reqId # send back to reqId
        msgRet.err = {}
        msgRet.err.message = err.message
        msgRet.err.stack = err.stack
        msgRet.babelVersion = babel.version
        msgRet.babelCoreUsed = babelCoreUsed
        emit "transpile:#{mObj.reqId}", msgRet
        callback()

    #stop issued stop process
    if mObj.command is 'stop'
      callback()
