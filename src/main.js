var {
  CompositeDisposable
} = require("atom");

var autoCompleteJSX = require("./auto-complete-jsx");
var AutoIndent = require("./auto-indent");
var INTERFILESAVETIME = 1000;
var LB = "language-babel";

module.exports = {
  config: require("./config"),

  activate: function(state) {
    (this.transpiler != null ? this.transpiler : this.transpiler = new (require("./transpiler"))());
    this.disposable = new CompositeDisposable();
    this.textEditors = {};
    this.fileSaveTimes = {};
    this.disposable.add(atom.packages.onDidActivatePackage(this.isPackageCompatible));

    this.disposable.add(atom.project.onDidChangePaths(() => {
      return this.transpiler.stopUnusedTasks();
    }));

    return this.disposable.add(atom.workspace.observeTextEditors(textEditor => {
      this.textEditors[textEditor.id] = new CompositeDisposable();

      this.textEditors[textEditor.id].add(textEditor.observeGrammar(grammar => {
        var ref2;
        var ref1;
        var ref;

        if (textEditor.getGrammar().packageName === LB) {
          return this.textEditors[textEditor.id].autoIndent = new AutoIndent(textEditor);
        } else {
          (ref = this.textEditors[textEditor.id]) != null ? ((ref1 = ref.autoIndent) != null ? ref1.destroy() : void 0) : void 0;
          return delete ((((ref2 = this.textEditors[textEditor.id]) != null ? ref2.autoIndent : void 0)) != null);
        }
      }));

      this.textEditors[textEditor.id].add(textEditor.onDidSave(event => {
        var ref;
        var lastSaveTime;
        var filePath;

        if (textEditor.getGrammar().packageName === LB) {
          filePath = textEditor.getPath();
          lastSaveTime = (ref = this.fileSaveTimes[filePath]) != null ? ref : 0;
          this.fileSaveTimes[filePath] = Date.now();

          if ((lastSaveTime < (this.fileSaveTimes[filePath] - INTERFILESAVETIME))) {
            return this.transpiler.transpile(filePath, textEditor);
          }
        }
      }));

      return this.textEditors[textEditor.id].add(textEditor.onDidDestroy(() => {
        var ref2;
        var ref1;
        var ref;
        (ref = this.textEditors[textEditor.id]) != null ? ((ref1 = ref.autoIndent) != null ? ref1.destroy() : void 0) : void 0;
        delete ((((ref2 = this.textEditors[textEditor.id]) != null ? ref2.autoIndent : void 0)) != null);
        var filePath = textEditor.getPath();

        if (this.fileSaveTimes[filePath] != null) {
          delete this.fileSaveTimes[filePath];
        }

        this.textEditors[textEditor.id].dispose();
        return delete this.textEditors[textEditor.id];
      }));
    }));
  },

  deactivate: function() {
    this.disposable.dispose();

    for (var [id, disposeable] of Object.entries(this.textEditors)) {
      if (this.textEditors[id].autoIndent != null) {
        this.textEditors[id].autoIndent.destroy();
        delete this.textEditors[id].autoIndent;
      }

      disposeable.dispose();
    }

    this.transpiler.stopAllTranspilerTask();
    return this.transpiler.disposables.dispose();
  },

  isPackageCompatible: function(activatedPackage) {
    var incompatiblePackages = {
      "source-preview-babel": "Both vie to preview the same file.",
      "source-preview-react": "Both vie to preview the same file.",
      "react": "The Atom community package 'react' (not to be confused \nwith Facebook React) monkey patches the atom methods \nthat provide autoindent features for JSX. \nAs it detects JSX scopes without regard to the grammar being used, \nit tries to auto indent JSX that is highlighted by language-babel. \nAs language-babel also attempts to do auto indentation using \nstandard atom API's, this creates a potential conflict."
    };

    return (() => {
      for (var [incompatiblePackage, reason] of Object.entries(incompatiblePackages)) {
        if (activatedPackage.name === incompatiblePackage) {
          atom.notifications.addInfo("Incompatible Package Detected", {
            dismissable: true,
            detail: ("language-babel has detected the presence of an incompatible Atom package named '" + (activatedPackage.name) + "'. \n \nIt is recommended that you disable either '" + (activatedPackage.name) + "' or language-babel \n \nReason:\n \n" + (reason))
          });
        }
      }
    })();
  },

  JSXCompleteProvider: function() {
    return autoCompleteJSX;
  },

  provide: function() {
    return this.transpiler;
  }
};