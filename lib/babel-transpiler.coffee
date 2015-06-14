{CompositeDisposable} = require 'atom'
defaultConfig = require './config'
{Transpiler} = require './transpiler'

module.exports = 
  config: defaultConfig

  activate: (state) ->
    if not @transpiler?
      @transpiler = new Transpiler
    # track any file save ( buffer save) events and transpile if babel
    @disposable = new CompositeDisposable
    @disposable.add  atom.workspace.observeTextEditors (textEditor) =>
      @disposable.add textEditor.onDidSave (event) =>
        grammar = textEditor.getGrammar()
        return if grammar.packageName isnt 'language-babel'
        @transpiler.transpile(event.path, textEditor)

  deactivate: ->
    if @disposable?
      @disposable.dispose()
