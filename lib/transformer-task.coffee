module.exports = (projectPath) ->
  #util = require 'util'
  path = require 'path'
  callback = @async() #async task
  process.chdir(projectPath)
  # require babel-core package for this project
  projectBabelCore = path.normalize( path.join( projectPath, '/node_modules/babel-core'))
  try
    babel = require projectBabelCore
  catch
    # babel core version not found
    projectBabelCore = 'babel-core'
    babel = require projectBabelCore

  babelCoreUsed = "Using babel-core at\n#{require.resolve projectBabelCore}"

  process.on 'message', (mObj) ->
    if mObj.command is 'transpile'
      #console.log(util.inspect(process.memoryUsage()));
      babel.transformFile mObj.pathTo.sourceFile, mObj.babelOptions, (err,result) =>
        # fiddly formating a return
        msgRet = {}
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
          if result.ignored?
            msgRet.ignored = false
        msgRet.babelVersion = babel.version
        msgRet.babelCoreUsed = babelCoreUsed
        emit 'language-babel:transpile', msgRet
    #stop issued
    if mObj.command is 'stop' then callback()
