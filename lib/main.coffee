{CompositeDisposable} = require 'atom'
autoCompleteJSX = require './auto-complete-jsx'
AutoIndent = require './auto-indent'
ttlGrammar = require './create-ttl-grammar'

INTERFILESAVETIME = 1000
LB = 'language-babel'

module.exports =
  config: require './config'

  activate: (state) ->
    @transpiler ?= new (require './transpiler')
    @ttlGrammar = new ttlGrammar(true)
    # track any file save events and transpile if babel
    @disposable = new CompositeDisposable
    @textEditors = {}
    @fileSaveTimes = {}

    @disposable.add atom.packages.onDidActivatePackage @isPackageCompatible

    @disposable.add atom.project.onDidChangePaths =>
      @transpiler.stopUnusedTasks()

    @disposable.add atom.workspace.observeTextEditors (textEditor) =>
      @textEditors[textEditor.id] = new CompositeDisposable

      @textEditors[textEditor.id].add textEditor.observeGrammar (grammar) =>
        # Instantiate indentor for language-babel files
        if textEditor.getGrammar().packageName is LB
          @textEditors[textEditor.id].autoIndent = new AutoIndent(textEditor)
        else
          @textEditors[textEditor.id]?.autoIndent?.destroy()
          delete @textEditors[textEditor.id]?.autoIndent?

      @textEditors[textEditor.id].add textEditor.onDidSave (event) =>
        if textEditor.getGrammar().packageName is LB
          filePath = textEditor.getPath()
          lastSaveTime = @fileSaveTimes[filePath] ? 0
          @fileSaveTimes[filePath] = Date.now()
          if  (lastSaveTime < (@fileSaveTimes[filePath] - INTERFILESAVETIME))
            @transpiler.transpile(filePath, textEditor)

      @textEditors[textEditor.id].add textEditor.onDidDestroy () =>
        @textEditors[textEditor.id]?.autoIndent?.destroy()
        delete @textEditors[textEditor.id]?.autoIndent?
        filePath = textEditor.getPath()
        if @fileSaveTimes[filePath]? then delete @fileSaveTimes[filePath]
        @textEditors[textEditor.id].dispose()
        delete @textEditors[textEditor.id]

  deactivate: ->
    @disposable.dispose()
    for id, disposeable of @textEditors
      if @textEditors[id].autoIndent?
        @textEditors[id].autoIndent.destroy()
        delete @textEditors[id].autoIndent
      disposeable.dispose()
    @transpiler.stopAllTranspilerTask()
    @transpiler.disposables.dispose()
    @ttlGrammar.destroy()

  # warns if an activated package is on the incompatible list
  isPackageCompatible: (activatedPackage) ->
    incompatiblePackages = {
      'source-preview-babel':
        "Both vie to preview the same file."
      'source-preview-react':
        "Both vie to preview the same file."
      'react':
        "The Atom community package 'react' (not to be confused
        \nwith Facebook React) monkey patches the atom methods
        \nthat provide autoindent features for JSX.
        \nAs it detects JSX scopes without regard to the grammar being used,
        \nit tries to auto indent JSX that is highlighted by language-babel.
        \nAs language-babel also attempts to do auto indentation using
        \nstandard atom API's, this creates a potential conflict."
    }

    for incompatiblePackage, reason of incompatiblePackages
      if activatedPackage.name is incompatiblePackage
        atom.notifications.addInfo 'Incompatible Package Detected',
          dismissable: true
          detail: "language-babel has detected the presence of an
                  incompatible Atom package named '#{activatedPackage.name}'.
                  \n \nIt is recommended that you disable either '#{activatedPackage.name}' or language-babel
                  \n \nReason:\n \n#{reason}"

  JSXCompleteProvider: ->
    autoCompleteJSX

  provide:->
    @transpiler
