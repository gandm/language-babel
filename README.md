# language-babel

[![Build Status](https://travis-ci.org/gandm/language-babel.svg?branch=master)](https://travis-ci.org/gandm/language-babel)
[![Build Dependencies](https://david-dm.org/gandm/language-babel.svg)](https://david-dm.org/gandm/language-babel)

Language grammar for ES2015 JavaScript, [Facebook React JSX](http://facebook.github.io/react/index.html) syntax and [Facebook flow](http://flowtype.org/). The color of syntax is determined by the theme in use.

[Babel](http://babeljs.io/) transpiler support is baked in. Options in the
language-babel settings allow for compilation on save, plus full transpiler control and output.

## Installation

Install via ATOM or by using `apm install language-babel`

## Usage

By default the language-babel package will detect file types `.js`,`.babel`,`.jsx` and `es6`. Use the standard ATOM interface to enable it for other file types. This provides a grammar that scopes the file in order to colour the text in a meaningful way. If other JavaScript grammars are enabled these may take precedence over language-babel. Look at the bottom right status bar indicator to determine the language grammar of a file being edited. language-babel will be shown as `Babel ES6 JavaScript`

The package also supports the [Babel](http://babeljs.io/) transpiler. It is likely users of Babel will use a workflow ( grunt, gulp, Nuclide etc ) and will not want transpiled output saved. language-babel fully supports transpiled output, maps, .babelrc files and the setting of most Babel options. It is also possible to do a quick Babel transpile check on each save.

See the sections *"Use Cases"* and *"Package Settings"* for more information on Babel configuration options.

## Use Cases
* #### Pure JavaScript with no EcmaScript 2015 requirements.
  Just use the Grammar to color code the scripts and turn off the package setting `Transpile On Save`.

* #### Pure Babel EcmaScript 2015 environment.
  If you wish to check your code compiles correctly on each save turn on the package settings `Transpile On Save`. This setting runs the Babel compiler to do a syntax check but produces no output. Only files within the `Babel Source Path` tree of a project directory are considered candidates. As this is empty by default all source files in the any subdirectory of a project folder will be candidates.

  If you use another workflow to transpile code then turn off `Create Transpiled Code` and `Create Map`. These suppress any transpiler output.

  If you wish to use language-babel to generate output code and no `path` options are set then transpiled/maps output will be directed to the same directory within the project. If you are using `.js` names for your source Babel files you will need to configure your `paths` to point to your source file directory tree are as well as the directory tree for the transpiled and maps output. If you do not do this then the transpiler output will attempt to overwrite the source file. This eventuality is trapped by language-babel to save embarrassment. See other settings to configure output options.

* #### Mixed JavaScript and Babel EcmaScript 2015 environment.
   Keep pure `.js`  files in a separate directory tree from your Babel ES2015 files and/or use `.babelrc ignore`/`.babelrc only` flags.  Configure `Babel Source Paths` to point to the ES2015 file directory tree and the other `paths` to where output should be generated. Turn on `Suppress Source Path Messages` and then configure other settings as described in the Pure EcmaScript environment above. Optionally, you can turn on the `Disable When No Babelrc File In Path` option, which disables transpiles if no `.babelrc` files are found in the source file path.

## Package Settings

By using the ATOM settings panel for language-babel you can control many of the operations of the transpiler. The package settings provide global settings for all language-babel projects edited in Atom. From V0.14.0 many options can be controlled by providing `.languagebabel` JSON configuration file whose properties will overide the global settings. See *".languagebabel Configuration"*

* #### Transpile On Save
  On any file save of a language-babel enabled file the Babel transpiler  is called. Any errors and/or successful indications are notified by a ATOM pop-up.

  `.languagebabel property` `{"transpileOnSave": true|false}`

* #### Allow Local Override
  If set this allows `.languagebabel` file properties to be override the global package settings.

* #### Disable When No Babelrc File In Path
  Disables transpiler if no `.babelrc` files are found in the source file path.

  `.languagebabel property` `{"disableWhenNoBabelrcFileInPath": true|false}`

* #### Suppress Transpile On Save Messages
  Suppress all successful save messages. Errors are still notified.

  `.languagebabel property` `{"suppressTranspileOnSaveMessages": true|false}`

* #### Create Transpiled Code
  If enabled the transpile phase will output JavaScript code to a `.js` file with the same prefix as the original. By using the `path` options below it is possible to transpile to a different target directory.

  `.languagebabel property` `{"createTranspiledCode": true|false}`

* #### Create Map
  A source map can be generated as required. The source file name will be used with a new suffix of `.js.map`. To avoid any possible XSSI issues the map file is prefixed with `)]}`

  If `.babelrc` files use `sourceMaps: inline` or `sourceMaps both` options then turn this option off.

  `.languagebabel property` `{"createMap": true|false}`

* #### Babel Maps Add Url
  If a source map is created this allows a Url reference `//# sourceURL=originalBabelSourcefile` to be appended to the generated JavaScript file.  

  `.languagebabel property` `{"babelMapsAddUrl": true|false}`

* #### Babel Source Path, Babel Transpile Path and Babel Maps Path
  These a directories based on the project root. ATOM now supports more than one project root folder, so these paths are based on each project root folder.

  Only files found under the `project/babelsourcepath` will be candidates for transpilation. If multiple project root folders exist then `babelsourcepath` may exist in any or all folders.

  The Transpile and Maps paths allow different target directories to be specified. If multiple project root folders exist then they may exist in any or all folders.

  e.g. Two project root folders exist `/proj1` and `/proj2`. If Source Path is set to `babelSource`the Transpile Path is set to `babelTranspile` and the Maps Path is set to `babelMaps` then:-

  `/proj1/babelSource/foo.es6` ->`/proj1/babelTranspile/foo.js`,`/proj1/babelMaps/foo.js.map`

  `/proj2/babelSource/dirBar/foo.es6` -> `/proj2/babelTranspile/dirBar/foo.js`,`/proj2/babelMaps/dirBar/foo.js.map`

  `.languagebabel property`
  `{
    "babelSourcePath": "relPath",
    "babelTranspilePath": "relPath",
    "babelMapsPath": "relPath" }`

* #### Suppress Source Path Messages
  By default when a file is saved that is outside the `Babel Source Path` directory a message is generated. Enabling this disables these messages. This is particularly useful when you have mixed ES2015 and ES3-5 environment. ES2015 files can be placed inside a `Babel Source Path` where they will be transpiled and other files will not pop up annoying messages when being saved.

  `.languagebabel property` `{"suppressSourcePathMessages": true|false}`

* #### Create Target Directories
  When enabled any target directories that do not exist will be created prior to a transpilation.

  `.languagebabel property` `{"createTargetDirectories": true|false}`

* #### Babel Stage
  The ECMA standards stage to enforce. See [Babel Stages](http://babeljs.io/docs/usage/experimental/) for more information.

* #### External Helpers
  When enabled transpiled output will not include babel helper code.   Please refer to [Babel External Helpers](http://babeljs.io/docs/advanced/external-helpers/) for further information.

* #### Module Loader
  The module loader format to use. Either `common` to use CommonJS, `amd` to use Asynchronous Module Definition or `umd` to use Universal Module Definition   Please refer to [Babel Modules](http://babeljs.io/docs/usage/modules/) for further information.

* #### Transformer Options
  The remaining transformer options may contain comma separated lists of transformer names.
  Please refer to [Babel Transformers](http://babeljs.io/docs/advanced/transformers/) and [Babel Runtime](http://babeljs.io/docs/usage/runtime/) for further information.

## .languagebabel Configuration

`.languagebabel` JSON configuration files can exist in any directory of the path that contains a source file to be compiled. `.languagebabel` file properties override the Package Settings above. `.languagebabel` files if present are read and merged starting in the source files directory up to the project root directory. `.languagebabel` properties defined closest the source file take precedence.

To use this option please enable the `Allow Local Override` package setting.

A `.languagebabel` file may contain one or more of the following properties.

```
{
  "babelMapsPath":                    "relPath",
  "babelMapsAddUrl":                  true|false,
  "babelSourcePath":                   "relPath",
  "babelTranspilePath":               "relPath",
  "createMap":                        true|false,
  "createTargetDirectories":          true|false,
  "createTranspiledCode":             true|false,
  "disableWhenNoBabelrcFileInPath":   true|false,
  "suppressSourcePathMessages":       true|false,
  "suppressTranspileOnSaveMessages":  true|false,
  "transpileOnSave":                  true|false
}
```
