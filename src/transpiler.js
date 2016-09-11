var {
  Task,
  CompositeDisposable
} = require("atom");

var fs = require("fs-plus");
var path = require("path");
var pathIsInside = require("../node_modules/path-is-inside");

var languagebabelSchema = {
  type: "object",

  properties: {
    babelMapsPath: {
      type: "string"
    },

    babelMapsAddUrl: {
      type: "boolean"
    },

    babelSourcePath: {
      type: "string"
    },

    babelTranspilePath: {
      type: "string"
    },

    createMap: {
      type: "boolean"
    },

    createTargetDirectories: {
      type: "boolean"
    },

    createTranspiledCode: {
      type: "boolean"
    },

    disableWhenNoBabelrcFileInPath: {
      type: "boolean"
    },

    projectRoot: {
      type: "boolean"
    },

    suppressSourcePathMessages: {
      type: "boolean"
    },

    suppressTranspileOnSaveMessages: {
      type: "boolean"
    },

    transpileOnSave: {
      type: "boolean"
    }
  },

  additionalProperties: false
};

class Transpiler {
  constructor() {
    this.commandTranspileDirectory = this.commandTranspileDirectory.bind(this);
    this.commandTranspileDirectories = this.commandTranspileDirectories.bind(this);
    this.reqId = 0;
    this.babelTranspilerTasks = {};
    this.babelTransformerPath = require.resolve("./transpiler-task");
    this.transpileErrorNotifications = {};
    this.deprecateConfig();
    this.disposables = new CompositeDisposable();

    if (this.getConfig().transpileOnSave || this.getConfig().allowLocalOverride) {
      this.disposables.add(atom.contextMenu.add({
        ".tree-view .directory > .header > .name": [{
          label: "Language-Babel",

          submenu: [{
            label: "Transpile Directory ",
            command: "language-babel:transpile-directory"
          }, {
            label: "Transpile Directories",
            command: "language-babel:transpile-directories"
          }]
        }, {
          "type": "separator"
        }]
      }));

      this.disposables.add(atom.commands.add(
        ".tree-view .directory > .header > .name",
        "language-babel:transpile-directory",
        this.commandTranspileDirectory
      ));

      this.disposables.add(atom.commands.add(
        ".tree-view .directory > .header > .name",
        "language-babel:transpile-directories",
        this.commandTranspileDirectories
      ));
    }
  }

  transform(
    code,
    {
      filePath,
      sourceMap
    }) {
    var msgObject;
    var reqId;
    var config = this.getConfig();
    var pathTo = this.getPaths(filePath, config);
    this.createTask(pathTo.projectPath);

    var babelOptions = {
      filename: filePath,
      ast: false
    };

    if (sourceMap) {
      babelOptions.sourceMaps = sourceMap;
    }

    if (this.babelTranspilerTasks[pathTo.projectPath]) {
      reqId = this.reqId++;

      msgObject = {
        reqId: reqId,
        command: "transpileCode",
        pathTo: pathTo,
        code: code,
        babelOptions: babelOptions
      };
    }

    return new Promise((resolve, reject) => {
      try {
        this.babelTranspilerTasks[pathTo.projectPath].send(msgObject);
      } catch (err) {
        delete this.babelTranspilerTasks[pathTo.projectPath];

        reject(
          ("Error " + (err) + " sending to transpile task with PID " + (this.babelTranspilerTasks[pathTo.projectPath].childProcess.pid))
        );
      }

      return this.babelTranspilerTasks[pathTo.projectPath].once(("transpile:" + (reqId)), msgRet => {
        if (msgRet.err != null) {
          return reject(
            ("Babel v" + (msgRet.babelVersion) + "\n" + (msgRet.err.message) + "\n" + (msgRet.babelCoreUsed))
          );
        } else {
          msgRet.sourceMap = msgRet.map;
          return resolve(msgRet);
        }
      });
    });
  }

  commandTranspileDirectory(
    {
      target
    }) {
    return this.transpileDirectory({
      directory: target.dataset.path
    });
  }

  commandTranspileDirectories(
    {
      target
    }) {
    return this.transpileDirectory({
      directory: target.dataset.path,
      recursive: true
    });
  }

  transpileDirectory(options) {
    var directory = options.directory;
    var recursive = options.recursive || false;

    return fs.readdir(directory, (err, files) => {
      if (!(typeof err !== "undefined" && err !== null)) {
        return files.map(file => {
          var fqFileName = path.join(directory, file);

          return fs.stat(fqFileName, (err, stats) => {
            if (!(typeof err !== "undefined" && err !== null)) {
              if (stats.isFile()) {
                if (/\.min\.[a-z]+$/.test(fqFileName)) {
                  return;
                }

                if (/\.(js|jsx|es|es6|babel)$/.test(fqFileName)) {
                  return this.transpile(file, null, this.getConfigAndPathTo(fqFileName));
                }
              } else if (recursive && stats.isDirectory()) {
                return this.transpileDirectory({
                  directory: fqFileName,
                  recursive: true
                });
              }
            }
          });
        });
      }
    });
  }

  transpile(sourceFile, textEditor, configAndPathTo) {
    var msgObject;
    var reqId;

    var {
      config,
      pathTo
    };

    var {
      config,
      pathTo
    };

    if (typeof configAndPathTo !== "undefined" && configAndPathTo !== null) {
      {
        config,
        pathTo
      } = configAndPathTo;
    } else {
      {
        config,
        pathTo
      } = this.getConfigAndPathTo(sourceFile);
    }

    if (config.transpileOnSave !== true) {
      return;
    }

    if (config.disableWhenNoBabelrcFileInPath) {
      if (!this.isBabelrcInPath(pathTo.sourceFileDir)) {
        return;
      }
    }

    if (!pathIsInside(pathTo.sourceFile, pathTo.sourceRoot)) {
      if (!config.suppressSourcePathMessages) {
        atom.notifications.addWarning("LB: Babel file is not inside the \"Babel Source Path\" directory.", {
          dismissable: false,
          detail: ("No transpiled code output for file \n" + (pathTo.sourceFile) + " \n\nTo suppress these 'invalid source path' messages use language-babel package settings")
        });
      }

      return;
    }

    var babelOptions = this.getBabelOptions(config);
    this.cleanNotifications(pathTo);
    this.createTask(pathTo.projectPath);

    if (this.babelTranspilerTasks[pathTo.projectPath]) {
      reqId = this.reqId++;

      msgObject = {
        reqId: reqId,
        command: "transpile",
        pathTo: pathTo,
        babelOptions: babelOptions
      };

      try {
        this.babelTranspilerTasks[pathTo.projectPath].send(msgObject);
      } catch (err) {
        console.log(
          ("Error " + (err) + " sending to transpile task with PID " + (this.babelTranspilerTasks[pathTo.projectPath].childProcess.pid))
        );

        delete this.babelTranspilerTasks[pathTo.projectPath];
        this.createTask(pathTo.projectPath);

        console.log(
          ("Restarted transpile task with PID " + (this.babelTranspilerTasks[pathTo.projectPath].childProcess.pid))
        );

        this.babelTranspilerTasks[pathTo.projectPath].send(msgObject);
      }

      return this.babelTranspilerTasks[pathTo.projectPath].once(("transpile:" + (reqId)), msgRet => {
        var xssiProtection;
        var mapJson;
        var ref1;
        var ref2;
        var ref;

        if ((ref = msgRet.result) != null ? ref.ignored : void 0) {
          return;
        }

        if (msgRet.err) {
          if (msgRet.err.stack) {
            return this.transpileErrorNotifications[pathTo.sourceFile] = atom.notifications.addError("LB: Babel Transpiler Error", {
              dismissable: true,
              detail: ((msgRet.err.message) + "\n \n" + (msgRet.babelCoreUsed) + "\n \n" + (msgRet.err.stack))
            });
          } else {
            this.transpileErrorNotifications[pathTo.sourceFile] = atom.notifications.addError(("LB: Babel v" + (msgRet.babelVersion) + " Transpiler Error"), {
              dismissable: true,
              detail: ((msgRet.err.message) + "\n \n" + (msgRet.babelCoreUsed) + "\n \n" + (msgRet.err.codeFrame))
            });

            if ((((ref2 = msgRet.err.loc) != null ? ref2.line : void 0)) != null && ((typeof textEditor !== "undefined" && textEditor !== null ? textEditor.alive : void 0))) {
              return textEditor.setCursorBufferPosition([msgRet.err.loc.line - 1, msgRet.err.loc.column]);
            }
          }
        } else {
          if (!config.suppressTranspileOnSaveMessages) {
            atom.notifications.addInfo(("LB: Babel v" + (msgRet.babelVersion) + " Transpiler Success"), {
              detail: ((pathTo.sourceFile) + "\n \n" + (msgRet.babelCoreUsed))
            });
          }

          if (!config.createTranspiledCode) {
            if (!config.suppressTranspileOnSaveMessages) {
              atom.notifications.addInfo("LB: No transpiled output configured");
            }

            return;
          }

          if (pathTo.sourceFile === pathTo.transpiledFile) {
            atom.notifications.addWarning("LB: Transpiled file would overwrite source file. Aborted!", {
              dismissable: true,
              detail: pathTo.sourceFile
            });

            return;
          }

          if (config.createTargetDirectories) {
            fs.makeTreeSync(path.parse(pathTo.transpiledFile).dir);
          }

          if (config.babelMapsAddUrl) {
            msgRet.result.code = msgRet.result.code + "\n" + "//# sourceMappingURL=" + pathTo.mapFile;
          }

          fs.writeFileSync(pathTo.transpiledFile, msgRet.result.code);

          if (config.createMap && (((ref1 = msgRet.result.map) != null ? ref1.version : void 0))) {
            if (config.createTargetDirectories) {
              fs.makeTreeSync(path.parse(pathTo.mapFile).dir);
            }

            mapJson = {
              version: msgRet.result.map.version,
              sources: pathTo.sourceFile,
              file: pathTo.transpiledFile,
              sourceRoot: "",
              names: msgRet.result.map.names,
              mappings: msgRet.result.map.mappings
            };

            xssiProtection = ")]}\n";
            return fs.writeFileSync(pathTo.mapFile, xssiProtection + JSON.stringify(mapJson, null, " "));
          }
        }
      });
    }
  }

  cleanNotifications(pathTo) {
    if (this.transpileErrorNotifications[pathTo.sourceFile] != null) {
      this.transpileErrorNotifications[pathTo.sourceFile].dismiss();
      delete this.transpileErrorNotifications[pathTo.sourceFile];
    }

    for (var [sf, n] of Object.entries(this.transpileErrorNotifications)) {
      if (n.dismissed) {
        delete this.transpileErrorNotifications[sf];
      }
    }

    var i = atom.notifications.notifications.length - 1;

    return (() => {
      while (i >= 0) {
        if (atom.notifications.notifications[i].dismissed && atom.notifications.notifications[i].message.substring(0, 3) === "LB:") {
          atom.notifications.notifications.splice(i, 1);
        }

        i--;
      }
    })();
  }

  createTask(projectPath) {
    return (this.babelTranspilerTasks[projectPath] != null ? this.babelTranspilerTasks[projectPath] : this.babelTranspilerTasks[projectPath] = Task.once(this.babelTransformerPath, projectPath, () => {
      return delete this.babelTranspilerTasks[projectPath];
    }));
  }

  deprecateConfig() {
    if (atom.config.get("language-babel.supressTranspileOnSaveMessages") != null) {
      atom.config.set(
        "language-babel.suppressTranspileOnSaveMessages",
        atom.config.get("language-babel.supressTranspileOnSaveMessages")
      );
    }

    if (atom.config.get("language-babel.supressSourcePathMessages") != null) {
      atom.config.set(
        "language-babel.suppressSourcePathMessages",
        atom.config.get("language-babel.supressSourcePathMessages")
      );
    }

    atom.config.unset("language-babel.supressTranspileOnSaveMessages");
    atom.config.unset("language-babel.supressSourcePathMessages");
    atom.config.unset("language-babel.useInternalScanner");
    atom.config.unset("language-babel.stopAtProjectDirectory");
    atom.config.unset("language-babel.babelStage");
    atom.config.unset("language-babel.externalHelpers");
    atom.config.unset("language-babel.moduleLoader");
    atom.config.unset("language-babel.blacklistTransformers");
    atom.config.unset("language-babel.whitelistTransformers");
    atom.config.unset("language-babel.looseTransformers");
    atom.config.unset("language-babel.optionalTransformers");
    atom.config.unset("language-babel.plugins");
    atom.config.unset("language-babel.presets");
    return atom.config.unset("language-babel.formatJSX");
  }

  getBabelOptions(config) {
    var babelOptions = {
      code: true
    };

    if (config.createMap) {
      babelOptions.sourceMaps = config.createMap;
    }

    return babelOptions;
  }

  getConfigAndPathTo(sourceFile) {
    var localConfig;
    var config = this.getConfig();
    var pathTo = this.getPaths(sourceFile, config);

    if (config.allowLocalOverride) {
      if (!(this.jsonSchema != null)) {
        this.jsonSchema = (require("../node_modules/jjv"))();
        this.jsonSchema.addSchema("localConfig", languagebabelSchema);
      }

      localConfig = this.getLocalConfig(pathTo.sourceFileDir, pathTo.projectPath, {});
      this.merge(config, localConfig);
      pathTo = this.getPaths(sourceFile, config);
    }

    return {
      config: config,
      pathTo: pathTo
    };
  }

  getConfig() {
    return atom.config.get("language-babel");
  }

  getLocalConfig(fromDir, toDir, localConfig) {
    var isProjectRoot;
    var schemaErrors;
    var fileContent;
    var localConfigFile = ".languagebabel";
    var languageBabelCfgFile = path.join(fromDir, localConfigFile);

    if (fs.existsSync(languageBabelCfgFile)) {
      fileContent = fs.readFileSync(languageBabelCfgFile, "utf8");

      try {
        var jsonContent = JSON.parse(fileContent);
      } catch (err) {
        atom.notifications.addError(("LB: " + (localConfigFile) + " " + (err.message)), {
          dismissable: true,
          detail: ("File = " + (languageBabelCfgFile) + "\n\n" + (fileContent))
        });

        return;
      }

      schemaErrors = this.jsonSchema.validate("localConfig", jsonContent);

      if (schemaErrors) {
        atom.notifications.addError(("LB: " + (localConfigFile) + " configuration error"), {
          dismissable: true,
          detail: ("File = " + (languageBabelCfgFile) + "\n\n" + (fileContent))
        });
      } else {
        isProjectRoot = jsonContent.projectRoot;
        this.merge(jsonContent, localConfig);

        if (isProjectRoot) {
          jsonContent.projectRootDir = fromDir;
        }

        localConfig = jsonContent;
      }
    }

    if (fromDir !== toDir) {
      if (fromDir === path.dirname(fromDir)) {
        return localConfig;
      }

      if (isProjectRoot) {
        return localConfig;
      }

      return this.getLocalConfig(path.dirname(fromDir), toDir, localConfig);
    } else {
      return localConfig;
    }
  }

  getPaths(sourceFile, config) {
    var absProjectPath;
    var sourceFileInProject;
    var projectContainingSource = atom.project.relativizePath(sourceFile);

    if (projectContainingSource[0] === null) {
      sourceFileInProject = false;
    } else {
      sourceFileInProject = true;
    }

    if (config.projectRootDir != null) {
      absProjectPath = path.normalize(config.projectRootDir);
    } else if (projectContainingSource[0] === null) {
      absProjectPath = path.parse(sourceFile).root;
    } else {
      absProjectPath = path.normalize(path.join(projectContainingSource[0], "."));
    }

    var relSourcePath = path.normalize(config.babelSourcePath);
    var relTranspilePath = path.normalize(config.babelTranspilePath);
    var relMapsPath = path.normalize(config.babelMapsPath);
    var absSourceRoot = path.join(absProjectPath, relSourcePath);
    var absTranspileRoot = path.join(absProjectPath, relTranspilePath);
    var absMapsRoot = path.join(absProjectPath, relMapsPath);
    var parsedSourceFile = path.parse(sourceFile);
    var relSourceRootToSourceFile = path.relative(absSourceRoot, parsedSourceFile.dir);
    var absTranspiledFile = path.join(absTranspileRoot, relSourceRootToSourceFile, parsedSourceFile.name + ".js");
    var absMapFile = path.join(absMapsRoot, relSourceRootToSourceFile, parsedSourceFile.name + ".js.map");

    return {
      sourceFileInProject: sourceFileInProject,
      sourceFile: sourceFile,
      sourceFileDir: parsedSourceFile.dir,
      mapFile: absMapFile,
      transpiledFile: absTranspiledFile,
      sourceRoot: absSourceRoot,
      projectPath: absProjectPath
    };
  }

  isBabelrcInPath(fromDir) {
    var babelrc = ".babelrc";
    var babelrcFile = path.join(fromDir, babelrc);

    if (fs.existsSync(babelrcFile)) {
      return true;
    }

    if (fromDir !== path.dirname(fromDir)) {
      return this.isBabelrcInPath(path.dirname(fromDir));
    } else {
      return false;
    }
  }

  merge(targetObj, sourceObj) {
    return (() => {
      for (var [prop, val] of Object.entries(sourceObj)) {
        targetObj[prop] = val;
      }
    })();
  }

  stopTranspilerTask(projectPath) {
    var msgObject = {
      command: "stop"
    };

    return this.babelTranspilerTasks[projectPath].send(msgObject);
  }

  stopAllTranspilerTask() {
    return (() => {
      for (var [projectPath, v] of Object.entries(this.babelTranspilerTasks)) {
        this.stopTranspilerTask(projectPath);
      }
    })();
  }

  stopUnusedTasks() {
    var atomProjectPaths = atom.project.getPaths();

    return (() => {
      for (var [projectTaskPath, v] of Object.entries(this.babelTranspilerTasks)) {
        var isTaskInCurrentProject = false;

        for (var atomProjectPath of atomProjectPaths) {
          if (pathIsInside(projectTaskPath, atomProjectPath)) {
            isTaskInCurrentProject = true;
            break;
          }
        }

        if (!isTaskInCurrentProject) {
          this.stopTranspilerTask(projectTaskPath);
        }
      }
    })();
  }
}

Transpiler.prototype.fromGrammarName = "Babel ES6 JavaScript";
Transpiler.prototype.fromScopeName = "source.js.jsx";
Transpiler.prototype.toScopeName = "source.js.jsx";
module.exports = Transpiler;