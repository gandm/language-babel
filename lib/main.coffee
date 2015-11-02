{CompositeDisposable} = require 'atom'

module.exports =
  config: require './config'

  activate: (state) ->
    @transpiler ?= new (require './transpiler')
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
