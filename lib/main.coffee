{CompositeDisposable} = require 'atom'

INTERFILESAVETIME = 1000

module.exports =
  config: require './config'

  activate: (state) ->
    @transpiler ?= new (require './transpiler')
    # track any file save events and transpile if babel
    @disposable = new CompositeDisposable
    @textEditors = {}
    @fileSaveTimes = {}

    @disposable.add atom.project.onDidChangePaths =>
      @transpiler.stopUnusedTasks()

    @disposable.add atom.workspace.observeTextEditors (textEditor) =>
      @textEditors[textEditor.id] = new CompositeDisposable
      @textEditors[textEditor.id].add textEditor.onDidSave (event) =>
        if textEditor.getGrammar().packageName is 'language-babel'
          filePath = textEditor.getPath()
          lastSaveTime = @fileSaveTimes[filePath] ? 0
          @fileSaveTimes[filePath] = Date.now()
          if  (lastSaveTime < (@fileSaveTimes[filePath] - INTERFILESAVETIME))
            @transpiler.transpile(filePath, textEditor)
      @textEditors[textEditor.id].add textEditor.onDidDestroy () =>
        filePath = textEditor.getPath()
        if @fileSaveTimes[filePath]? then delete @fileSaveTimes[filePath]
        @textEditors[textEditor.id].dispose()
        delete @textEditors[textEditor.id]

  deactivate: ->
    @disposable.dispose()
    for id, disposeable of @textEditors
      disposeable.dispose()
    @transpiler.stopAllTranspilerTask()
