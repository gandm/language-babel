{CompositeDisposable} = require 'atom'

module.exports =
  config: require './config'

  activate: (state) ->
    @transpiler ?= new (require './transpiler')
    # track any file save events and transpile if babel
    @disposable = new CompositeDisposable
    @textEditors = {}

    @disposable.add atom.project.onDidChangePaths =>
      @transpiler.stopUnusedTasks()

    @disposable.add atom.workspace.observeTextEditors (textEditor) =>
      @textEditors[textEditor.id] = new CompositeDisposable
      @textEditors[textEditor.id].add textEditor.onDidSave (event) =>
        if atom.workspace.getActiveTextEditor().id is textEditor.id and
        textEditor.getGrammar().packageName is 'language-babel'
          @transpiler.transpile(event.path, textEditor)
      @textEditors[textEditor.id].add textEditor.onDidDestroy () =>
        @textEditors[textEditor.id].dispose()
        delete @textEditors[textEditor.id]

  deactivate: ->
    @disposable.dispose()
    for id, disposeable of @textEditors
      disposeable.dispose()    
    @transpiler.stopAllTranspilerTask()
