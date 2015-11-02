# language-babel

[![Build Status](https://travis-ci.org/gandm/language-babel.svg?branch=master)](https://travis-ci.org/gandm/language-babel)
[![Build Dependencies](https://david-dm.org/gandm/language-babel.svg)](https://david-dm.org/gandm/language-babel)

Language grammar for ES201x JavaScript, [Facebook React JSX](http://facebook.github.io/react/index.html) syntax and [Facebook flow](http://flowtype.org/). The colour of syntax is determined by the theme in use.

[Babel](http://babeljs.io/) V6 transpiler support is baked in. Options in the language-babel package settings or in `.languagebabel` JSON files allow for transpile validations to be carried out on a file save. Additional options to output transpiled files and source maps. `.babelrc` file support is implicit as the package uses `babel-core` which reads the files if found in the source file path.

## Installation

Install via ATOM or by using `apm install language-babel`   Please note `lanugage-babel` >=V1.0.0 supports Babel 6. Babel 6 is not compatible with Babel 5. If you still wish to use Babel 5 you will need to install a older version of `language-babel` via `apm install language-babel@0.15.13`

## Plugins and Presets  

Babel V6 makes extensive use of `presets` and `plugins` which are node packages to enable functionality. Presets are collections of plugins in a convenient packaged form. Either may be installed via `npm install` but for Atom this is not as straight forward as it should be. Babel V6 or more specifically `babel-core` typically `import` these `plugins` and `presets` starting from `nodes` current working directory path or `process.cwd()`. Depending on how Atom is launched ( shell, GUI ) this directory may be different so it is important to try to start Atom in the same way.

To install plugins first determine Atoms current working directory. Look at `language-babel` package settings and you will see the current working directory name in the description above the `plugins` or `presets` option. From a shell prompt change to this directory or one in the same path and install the chosen presets/plugins. e.g. `npm install es2015`. `babel-core` should now be able to find these.

As Atom is moving towards using ES2015+ over Coffee script the handling of plugins is in a state of flux.

## Usage

By default the language-babel package will detect file types `.js`,`.babel`,`.jsx` and `es6`. Use the standard ATOM interface to enable it for other file types. This provides a grammar that scopes the file in order to colour the text in a meaningful way. If other JavaScript grammars are enabled these may take precedence over language-babel. Look at the bottom right status bar indicator to determine the language grammar of a file being edited. language-babel will be shown as `Babel ES6 JavaScript`

The package also supports the [Babel](http://babeljs.io/) transpiler. It is likely users of Babel will use a workflow ( grunt, gulp, Nuclide etc ) and will not want transpiled output saved. language-babel fully supports transpiled output, maps, .babelrc files and the setting of most Babel options. It is also possible to do a quick Babel transpile check on each save.

See the sections *"Use Cases"* and *"Package Settings"* for more information on Babel configuration options.

## Package Settings

By using the ATOM settings panel for language-babel you can control many of the operations of the transpiler. The package settings provide global settings for all language-babel projects edited in Atom. Additionally, `.babelrc` and `.languagebabel` JSON configuration files can provide project based configuration settings.

* #### plugins
  A comma separated list of plugins used by Babel to transpile the source files. Used to augment any `plugins` found in `.babelrc` files.

* #### presets
  A comma separated list of presets used by Babel to transpile the source files. Used to augment any `presets` found in `.babelrc` files.

* #### Allow Local Override
  If set this allows `.languagebabel` file properties to be override the global package settings. See *".languagebabel Configuration"* below for more information.

* #### Transpile On Save
  On any file save of a language-babel enabled file the Babel transpiler  is called. No actual transpiled file is saved but any Babel errors and/or successful indicators are notified by an ATOM pop-up. Not all files are candidates for transpilation as other settings can affect this - See `Disable When No Babelrc File In Path` and `Babel Source Path` below.

  `.languagebabel property` `{"transpileOnSave": true|false}`

* #### Create Transpiled Code
  If enabled together with `Transpile On Save` this will output JavaScript code to a `.js` file with the same prefix as the original. By using the  `Babel Transpile Path` option below it is possible to transpile to a different target directory.

  `.languagebabel property` `{"createTranspiledCode": true|false}`

* #### Disable When No Babelrc File In Path
  Disables transpiler if no `.babelrc` files are found in the source file path.

  `.languagebabel property` `{"disableWhenNoBabelrcFileInPath": true|false}`

* #### Suppress Transpile On Save Messages
  Suppress all successful save messages. Errors are still notified.

  `.languagebabel property` `{"suppressTranspileOnSaveMessages": true|false}`

* #### Suppress Source Path Messages
  This is set by default so that when a file is saved that is outside the `Babel Source Path` directory no message is generated. This is particularly useful when you have mixed ES2015 and ES3-5 environment. ES2015 files can be placed inside a `Babel Source Path` where they will be transpiled and other files will not pop up annoying messages when being saved.

  `.languagebabel property` `{"suppressSourcePathMessages": true|false}`

* #### Create Map
  If transpiled output is being saved a separate source map can be also be saved. The source file name will be used with a new suffix of `.js.map` and sent to a directory specified in `Babel Maps Path`. To avoid any possible XSSI issues the map file is prefixed with `)]}`

  If `.babelrc` files use `sourceMaps: inline` or `sourceMaps both` options then turn this option off as the map data is stored as part of the source file.

  `.languagebabel property` `{"createMap": true|false}`

* #### Babel Maps Add Url
  If a source map is created using the `Create Map` option this allows a Url reference `//# sourceURL=originalBabelSourcefile` to be appended to the generated transpiled JavaScript file.  

  `.languagebabel property` `{"babelMapsAddUrl": true|false}`

* #### Babel Source Path, Babel Transpile Path and Babel Maps Path
  These a directories based on the project root. ATOM supports more than one project root folder, so these paths are relative to each project root folder.

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

* #### Create Target Directories
  When enabled any target directories that do not exist will be created prior to a transpilation.

  `.languagebabel property` `{"createTargetDirectories": true|false}`

## .languagebabel Configuration

`.languagebabel` JSON configuration files can exist in any directory of the path that contains a source file to be compiled. `.languagebabel` file properties override the Package Settings above. `.languagebabel` files if present are read and merged starting in the source files directory up to the project root directory. `.languagebabel` properties defined closest the source file take precedence.

To use this option please enable the `Allow Local Override` package setting.

A `.languagebabel` file may contain one or more of the following properties.

```
{
  "babelMapsPath":                    "relPath",
  "babelMapsAddUrl":                  true|false,
  "babelSourcePath":                  "relPath",
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
