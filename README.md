# language-babel

[![Build Status](https://travis-ci.org/gandm/language-babel.svg?branch=master)](https://travis-ci.org/gandm/language-babel)
[![Build status](https://ci.appveyor.com/api/projects/status/ef32qrj8iplnbqm2/branch/master?svg=true)](https://ci.appveyor.com/project/gandm/language-babel/branch/master)
[![Build Dependencies](https://david-dm.org/gandm/language-babel.svg)](https://david-dm.org/gandm/language-babel)

Language grammar for all versions of JavaScript including  ES2016 and ESNext,  JSX syntax as used by [Facebook React](http://facebook.github.io/react/index.html),  [Atom's etch](https://github.com/atom/etch) and others, as well as optional typed JavaScript using [Facebook flow](http://flowtype.org/). This package also supports highlighting of [GraphQL](https://github.com/gandm/language-babel#graphql-code-highlighting) language constructs when inside certain JavaScript template strings. For `.graphql` and `.gql` file support please see [language-graphql](https://atom.io/packages/language-graphql) . The colour of syntax is determined by the theme in use.

The package also provides

 - [automatic indentation](https://github.com/gandm/language-babel#automatic-indenting-of-jsx) of JSX.
 - [JSX tag closure and JSX html element completion suggestions](https://github.com/gandm/language-babel#auto-completion-of-jsx-tags-elements-and-attributes).
 - Context aware [commenting out of JSX elements](https://github.com/gandm/language-babel#commenting-out-jsx-elements).
 - Additional [newline insertion between JSX tag pairs](https://github.com/gandm/language-babel#automatic-insertion-between-jsx-tags).
 - Babel [transpilation on file saves](https://github.com/gandm/language-babel#interface-to-babel-v6--v5) (optional).
 - Babel transpile of all files in a directory or directories.
 - Babel transpiled [code preview](https://github.com/gandm/language-babel#interface-to-babel-v6--v5).
 - Support for [styled-components](https://github.com/styled-components/styled-components) CSS inside tagged template strings including auto-completion.
 - Support for [GraphQL code highlighting](https://github.com/gandm/language-babel#graphql-code-highlighting)
 - [Support for adding other language grammars to highlight code inside template literal strings](https://github.com/gandm/language-babel#javascript-tagged-template-literal-grammar-extensions).

By default the language-babel package will detect file types `.js`,`.babel`,`.jsx`, `es`, `es6` and `.flow`. Use the standard ATOM interface to enable it for other file types. This provides a grammar that scopes the file in order to colour the text in a meaningful way. If other JavaScript grammars are enabled these may take precedence over language-babel. Look at the bottom right status bar indicator to determine the language grammar of a file being edited. language-babel will be shown as either `Babel` or `Babel ES6 JavaScript`. Clicking the name will allow the grammar for a file to be changed.

language-babel provides [Babel](http://babeljs.io/) V6 & V5 transpiler support. If you only require grammar/syntax highlighting ensure that the package settings `Transpile On Save` and `Allow Local Override` are both off.

## Installation

Install via ATOM or by using `apm install language-babel`. If you only need to use the provided grammar read no further!

## Auto Completion of JSX tags, elements and attributes

JSX tag closures are provided as auto-complete options. In addition, common HTML elements and their associated properties are displayed as auto-complete lists. Those supported by language-babel are described [here](http://facebook.github.io/react/docs/tags-and-attributes.html)

![autoclose](https://cloud.githubusercontent.com/assets/2313237/12352348/218348b6-bb7d-11e5-9245-bd0d1467d71d.gif)

## Commenting out JSX elements

JSX elements cannot be commented out by using standard `//` or `/* */` commenting. Normally `{/* */}` is used instead. language-babel changes the Atom toggle comments behaviour when inside a JSX block to support this behaviour. Nested elements within JSX that require a // form of commenting will be detected automatically.

![autoclose](https://cloud.githubusercontent.com/assets/2313237/12441752/4d672be6-bf42-11e5-8e20-33a96a81db66.gif)

## Automatic insertion between JSX tags

When a newline is inserted between a matched open/close pair of JSX tags, language-babel inserts an additional line and positions the cursor. If Auto Indent is also turned on then the cursor is correctly indented.

![autoclose](https://cloud.githubusercontent.com/assets/2313237/15736961/1cbaa780-289b-11e6-9cd3-48f749a91f98.gif)

## Automatic Indenting of JSX

The package setting `Auto Indent JSX` if enabled will auto-indent any JSX code typed or moved across using suitable Atom defaults. There are also three commands - `language-babel:toggle-auto-indent-jsx`, `language-babel:auto-indent-jsx-on` and `language-babel:auto-indent-jsx-off` that override the default behaviour. These can be mapped to keyboard shortcuts if needed.

Auto-Indenting will also attempt to read the `.eslintrc` file associated with an edited file's project for the presence of four properties whose defaults are shown below. These rules, which are part of the [ESLint-plugin-React](https://github.com/yannickcr/eslint-plugin-react) EsLint plugin, are then used to determine the alignment and tab/spaces spacing of JSX elements. For more information on the options for these rules see [Closing bracket](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md), [Indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md) and [Indent Props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md).

Please note that no attempt is currently made to read eslint settings in any other file. e.g. `package.json`, `eslint.js`, `extends...`, etc.

```json
{
  "rules": {
    "indent": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-indent-props": 1,
    "react/jsx-indent": 1
  }
}
```
When moving around a JSX block  language-babel reformats the preceding JSX lines automatically. Lines following the cursor are not indented. This is to protect the source code following incomplete JSX from being processed. The user should correctly position the first JSX element as auto-indenting will not do this.



You may also turn off automatic indenting for all files by setting the package option `Auto Indent JSX`

![indent](https://cloud.githubusercontent.com/assets/2313237/12700780/4074271e-c7e8-11e5-91d7-774f7808bc1d.gif)

## Interface to Babel V6 & V5

language-babel fully supports the Babel JavaScript transpiler versions 5 and 6.

Options in the language-babel package settings and/or in `.languagebabel` project based JSON files allow for Babel validations to be carried out on a file saves using `.babelrc` options. A file tree context menu - `Language-Babel` - is also provided that allows whole directories to be transpiled obeying any `.babelrc` and `.languagebabel` settings. Even if using a workflow such as gulp, webpack, etc, this can be very useful. Additional options allow the output from Babel (transpiled code and maps ) to be output to other directories.

It is also possible to preview any source file as Babel would output it.

#### Previewing

Babel v5 and Babel v6 code can be previewed as shown below. Source mapping keeps the ES201x file's cursor in step with the transpiled code's cursor. This feature requires the Atom package [source-preview](https://atom.io/packages/source-preview) in which `language-babel`becomes a provider of transpiled output which `source-preview` consumes.

**Please note** that the following two packages should be disabled or uninstalled to stop multiple packages contending for the same transpile - [source-preview-babel](https://atom.io/packages/source-preview-babel) and [source-preview-react](https://atom.io/packages/source-preview-react).

`source-preview` provides a keyboard toggle to view the current file. As with transpiling described below, a project must have the relevant `.babelrc`, `package.json` and `node_modules`

![example](https://cloud.githubusercontent.com/assets/2313237/12490818/7535fc50-c06f-11e5-8752-ec0878c5205c.gif)

#### Transpiling

This package works by using the concept of a project folder which we assume contains a project or even nested projects any of which may contain a Babel project.  In a Babel project, we expect to see one or more `.babelrc` files,  `node_modules` folders at the root's of the project containing an optional `babel-core` (either v5 or v6)  and other babel plugins/presets as determined by the project's `package.json` file. In addition, we may expect to see one or more `.languagebabel` files in the project. Projects are either implicit (an Atom project folder) or explicit (denoted by a `.languagebabel` property of `"projectRoot": true`). If no `babel-core` is found in the project then a version will be provided by the package but this will be a Babel Version 6 instance. Plugins and presets will not be provided by the package.

A trivial example project that shows examples of using `.languagebabel` and `.babelrc` files may be found [here](https://github.com/gandm/example-language-babel).

![example](https://cloud.githubusercontent.com/assets/2313237/11145720/18bf0f52-8a00-11e5-82f0-3f474aeefcb7.gif)

Multiple projects may be open at any time inside Atom and `language-babel` must allow the use of differing `babel-core` versions and associated plugins when transpiling. It does this by using background tasks - one per Babel project. When a `language-babel` grammar enabled file is saved the package settings and optionally any `.languagebabel` configuration files are read to determine if the file should be transpiled and what to do with the output. These settings and `.languagebabel` options are described below.

It is very easy to ensure that language-babel does not transpile files that are not needed. Just turn off the global package setting `Transpile On Save` and turn on `Allow Local Override`. Apart from grammar highlighting only projects having a `.languagebabel` in the file path will then be affected by this package. Further granularity is easy too.

If `.babelrc` and/or `package.json` files contain Babel properties that are environment specific these environments should be created before Atom is started. In particular, Babel assumes a `development` environment by default, whereas Atom assumes a `production` environment by default.

e.g.

Windows
```
set NODE_ENV="development"
atom
```
OSX/Unix
```
NODE_ENV="development"
atom
```

## Package Settings

For most projects, it is better to configure `language-babel` via project-based `.languagebabel` file properties which will override the package settings below. See *".langeuagebabel Configuration"* for more information on this behaviour.

* #### Allow Local Override
  If set this allows `.languagebabel` file properties to override the global package settings.

* #### Transpile On Save
  On any file save of a `language-babel` grammar enabled file the Babel transpiler is called. No actual transpiled file is saved but any Babel errors and/or successful indicators are notified by an ATOM pop-up. Not all files are candidates for transpilation as other settings can affect this. For example see `Disable When No Babelrc File In Path` and `Babel Source Path` below.

  ```json
  {"transpileOnSave": true} or
  {"transpileOnSave": false}
  ```

* #### Create Transpiled Code
  If enabled together with `Transpile On Save` this will output JavaScript code to a `.js` file with the same prefix as the original. By using the  `Babel Transpile Path` options it is possible to transpile to a different target directory. Not all files are candidates for transpilation as other settings can affect this.

  ```json
  {"createTranspiledCode": true} or
  {"createTranspiledCode": false}
  ```

* #### Disable When No Babelrc File In Path
  Disables transpiler if no `.babelrc` files are found in the source file path.

  ```json
  {"disableWhenNoBabelrcFileInPath": true} or
  {"disableWhenNoBabelrcFileInPath": false}
  ```

* #### Suppress Transpile On Save Messages
  Suppress all successful save messages. Errors are still notified.

  ```json
  {"suppressTranspileOnSaveMessages": true} or
  {"suppressTranspileOnSaveMessages": false}
  ```

* #### Suppress Source Path Messages
  This is set by default so that when a file is saved that is outside the `Babel Source Path` directory no message is generated. This is particularly useful when you have mixed ES2015 and ES3-5 environment. ES2015 files can be placed inside a `Babel Source Path` where they will be transpiled and other files will not pop up annoying messages when being saved.

  ```json
  {"suppressSourcePathMessages": true} or
  {"suppressSourcePathMessages": false}
  ```

* #### Create Map
  If transpiled output is being saved a separate source map can be also be saved. The source file name will be used with a new suffix of `.js.map` and sent to a directory specified in `Babel Maps Path`. To avoid any possible XSSI issues the map file is prefixed with `)]}`

  If `.babelrc` files use `sourceMaps: inline` or `sourceMaps both` options then turn this option off as the map data is stored as part of the source file.

  ```json
  {"createMap": true} or
  {"createMap": false}
  ```

* #### Babel Maps Add Url
  If a source map is created using the `Create Map` option this allows a Url reference `//# sourceURL=originalBabelSourcefile` to be appended to the generated transpiled JavaScript file.  

  ```json
  {"babelMapsAddUrl": true} or
  {"babelMapsAddUrl": false}
  ```

* #### Project Root ( only present in `.languagebabel` files)

  A `.languagebabel` property that defines this directory is a project root. A project root would contain a `node_modules` folder with an optional `babel-core` as well as any plugins required.

  ```json
  {"projectRoot": true} or
  {"projectRoot": false}
  ```

* #### Babel Source Path, Babel Transpile Path and Babel Maps Path
  These a directories based on the project root. A project root is either implicit ( based on an Atom folders root directory) or explicit ( based upon the root defined in the nearest `.languagebabel` file with a property `"projectRoot": true` )

  Only files found under the `project/babelsourcepath` will be candidates for transpilation. If multiple project root folders exist then `babelsourcepath` may exist in any or all folders.

  The Transpile and Maps paths allow different target directories to be specified. If multiple project root folders exist then they may exist in any or all folders.

  e.g. Two project root folders exist `/proj1` and `/proj2`. If Source Path is set to `babelSource`the Transpile Path is set to `babelTranspile` and the Maps Path is set to `babelMaps` then:-

  `/proj1/babelSource/foo.es6` ->`/proj1/babelTranspile/foo.js`,`/proj1/babelMaps/foo.js.map`

  ```json
  {
    "projectRoot":  true,    
    "babelSourcePath": "babelSource",
    "babelTranspilePath": "babelTranspile",
    "babelMapsPath": "babelMaps"
  }
  ```

  `/proj2/babelSource/dirBar/foo.es6` -> `/proj2/lib/foo.js`,`/proj2/lib/foo.js.map`

  ```json
  {
    "projectRoot":  true,
    "babelSourcePath": "babelSource/dirBar",
    "babelTranspilePath": "lib",
    "babelMapsPath": "lib"
  }
  ```

* #### Create Target Directories
  When enabled any target directories that do not exist will be created prior to a transpilation.
  ```json
  {"createTargetDirectories": true} or
  {"createTargetDirectories": false}
  ```

* #### Auto Indent JSX
  Enables automatic indenting of JSX.

* #### JavaScript Tagged Template Literal Grammar Extensions

	This package setting allows language-babel to include third party grammars to highlight code inside template literal strings. These may be tagged template literals, [described here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), or where no appropriate function tag exists, another form of tag marking that signifies the templates nature. e.g. A comment string.

  For example you may wish to highlight templates prefixed with ``/* @html */`<div></div>` `` as HTML, and  maybe `` sql`select * from table foo` `` as SQL. The latter assumes a tagged function named sql exists in the code.

	In order to do this, you need to find a language package that supports the highlighting of the template code. This language package should then be installed into Atom. You then need to find the scope name for that grammar. This can be done in a number of ways, but if you view the grammars JSON/CSON file and look for the `scopeName` property field, this indicates the scope name for that grammar.

	If we use the Atom provided languages [language-css](https://atom.io/packages/language-css), [language-html](https://atom.io/packages/language-html) and [language-sql](https://atom.io/packages/language-sql) in our example above to highlight the template code, then this field would look like.

  ```"(?:css\.(?:[a-z])+)":source.css, /* @html */:text.html.basic, sql:source.sql```

	In other words, the package settings for this field is an array of strings, with each string in the form of `template-prefix:grammar-scopename#optional-include`.

  where:
    - `template-prefix` is a literal string or an Oniguruma regular expression ( Oniguruma is the regular expression engine for TextMate grammars used by Atom) that comes before the opening back-tick of a template. A literal string may contain any characters except a comma but including colons. A regular expression is denoted by being enclosed by double quote marks `"RegExp Here"`. **Most importantly, a regular expression should create no capturing groups.**
    - `:`The last colon in the string signifies the start of the embedded grammars scopeName.
    - `grammar-scopename` is the scopeName of the grammar used to highlight the template.
    - `#optional-include` if present, will use that include block in the grammars repository.

  **Please note:** As language-babel passes off highlighting of the template to another grammar, it cannot highlight any interpolated code. Actually, that's not strictly correct, as it does highlight interpolated JavaScript code but only at the top most rule stack of the embedded grammar, but this is unlikely to be useful with most grammars. Also note that there is a delay of 10 seconds between the last character being entered into this field and a new extension grammar being generated.


## .languagebabel Configuration

`.languagebabel` JSON configuration files can exist in any directory of the path that contains a source file to be compiled. The properties in this file override the global package settings above. If `.languagebabel` files are present, they read and merged starting in the source files directory up to the project root directory. Properties defined closest the source file take precedence.

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
  "projectRoot":                      true|false,  
  "suppressSourcePathMessages":       true|false,
  "suppressTranspileOnSaveMessages":  true|false,
  "transpileOnSave":                  true|false
}
```

## GraphQL Code Highlighting

language-babel supports highlighting of GraphQL code within JavaScript files. For highlighting `.graphql` and `.gql` files see its sister grammar - [language-graphql](https://atom.io/packages/language-graphql).

 Inside JavaScript, GraphQL enclosed in back-ticks, a.k.a. Quasi or template strings are highlighted. Other GraphQL structures, notably types, are supported by the Flow component of this package.

 Strings that have one of three prefixes/tags are parsed by the grammar to highlight the code enclosed.

 ```
 Relay.QL`This is how Relay uses template strings`

 graphql`This is how Relay will use template strings`

 gql`This is how Apollo for GraphQL uses template strings`

 /* GraphQL */`For cases where no template tag function is available`
 ```

 An example of using the third method for highlighting code using `/* GraphQL */`

 ```
 var { graphql, buildSchema } = require('graphql');

 var schema = buildSchema(/* GraphQL */`
   type Query {
     hello: String
   }
 `);
 ```
