{CompositeDisposable} = require 'atom'
defaultConfig = require './config'

transpiler = null
getTranspiler = ->
  if not transpiler
    {Transpiler} = require './transpiler'
    transpiler = new Transpiler
  transpiler

disposable = null
onTranspileOnSaveOptionChanged = (shouldTranspile) ->
  if shouldTranspile
    # track any file save (buffer save) events and transpile if babel
    disposable = new CompositeDisposable
    disposable.add atom.workspace.observeTextEditors (textEditor) =>
      disposable.add textEditor.onDidSave (event) =>
        grammar = textEditor.getGrammar()
        return if grammar.packageName isnt 'language-babel'
        getTranspiler().transpile(event.path, textEditor)
  else if disposable?
    disposable.dispose()


module.exports =
  config: defaultConfig

  activate: (state) ->
    TRANSPILE_ON_SAVE_OPTION = 'language-babel.transpileOnSave'
    onTranspileOnSaveOptionChanged atom.config.get(TRANSPILE_ON_SAVE_OPTION)
    atom.config.observe TRANSPILE_ON_SAVE_OPTION, onTranspileOnSaveOptionChanged

  deactivate: ->
    if disposable?
      disposable.dispose()
