#language-babel

[![Build Status](https://travis-ci.org/gandm/language-babel.svg?branch=master)](https://travis-ci.org/gandm/language-babel)

Language grammar for ES2015 Javascript and Facebook React JSX syntax. The color of syntax is determined by the theme in use.

[Babel](http://babeljs.io/) ( previously known as 6to5 ) support is baked in. Options in the
language-babel settings allow for compilation on the fly, plus full transpiler control and output. language-babel adds additional support for `.babelrc` files.

##Installation

Install via ATOM `File -> settings-> + install`, or by using `apm install language-babel`

##Usage

By default the language-babel package will detect file types `.js`,`.babel`,`.jsx` and `es6`. Use the standard ATOM interface to enable it for other file types. This provides a grammar that scopes the file in order to highlight text in a meaningful way. If other JavaScript grammars are enabled these may take precedence over language-babel. Look at the bottom right status bar indicator to determine the language grammar of a file being edited.

By default the package also supports the [Babel](http://babeljs.io/) transpiler. Out of the box any file saved will be transpiled and any errors and/or successful completions notified in the ATOM workspace.

It is most likely many users of Babel will use a workflow ( grunt, gulp, etc ) and will not want transpiled output saved. However, language-babel fully supports transpiled output, maps, .babelrc files and the setting of most Babel options.

See the section *"Use Cases"*, *"Package Settings"* and *"Using .babelrc Files"* for more information on Babel configuration options.

##Screen Images

This shows language babel using the default atom-dark color scheme.

![Image inserted by Atom editor package auto-host-markdown-image](http://i.imgur.com/OPZwVv8.gif)

![Image inserted by Atom editor package auto-host-markdown-image](http://i.imgur.com/bMXR0i1.gif)

![Image inserted by Atom editor package auto-host-markdown-image](http://i.imgur.com/TAi2cAk.gif)

##Use Cases
* ####Pure JavaScript with no EcmaScript 2015 requirements.
  Just use the Grammar to color code the scripts and turn off the package setting `Transpile On Save`.

* ####Pure Babel EcmaScript 2015 environment.
  If you wish to check your code compiles correctly on each save turn on the package settings `Transpile On Save`. This setting runs the Babel compiler to do a syntax check but produces no output. Only files within the `Babel Source Path` tree of a project directory are considered candidates. As this is empty by default all source files in the any subdirectory of a project folder will be candidates.

  If you use another workflow to transpile code then turn off `Create Transpiled Code` and `Create Map`. These suppress any transpiler output.

  If you wish to use language-babel to generate output code and no `path` options are set then transpiled/maps output will be directed to the same directory within the project. If you are using `.js` names for your source Babel files you will need to configure your `paths` to point to your source file directory tree are as well as the directory tree for the transpiled and maps output. If you do not do this then the transpiler output will attempt to overwrite the source file. This eventuality is trapped by language-babel to save embarrassment. See other settings to configure output options.

  Please also read the section on *"Using .babelrc Files"*

* ####Mixed Javascript and Babel EcmaScript 2015 environment.
   Keep pure `.js`  files in a separate directory tree from your Babel ES2015 files. Configure `Babel Source Paths` to point to the ES2015 file directory tree and the other `paths` to where output should be generated. Turn on `Supress Source Path Messages` and then configure other settings as described in the Pure EcmaScript environment above.

##Package Settings

By using the ATOM settings panel for language-babel you can control many of the operations of the transpiler.

* ####Transpile On Save
  On any file save of a language-babel enabled file the Babel transpiler  is called. Any errors and/or successful indications are notified by a ATOM pop-up.

* ####Supress Transpile On Save Messages
  Suppress all successful save messages. Errors are still notified.

* ####Use Internal Scanner
  This option allows language-babel to read `.babelrc` files rather than using the one babel-core provides. Please refer to the section below *"Using babelrc Files"*.

* ####Stop at Project directory
  By default babel-core reads all directories from the source file to the root of the filesystem looking for `.babelrc` files. This flag overrides this behaviour to stop the traversal at the project root folder. This requires the `Internal Scanner` option be enabled.

* ####Create Transpiled Code
  If enabled the transpile phase will output Javascript code to a `.js` file with the same prefix as the original. By using the `path` options below it is possible to transpile to a different target directory.

* ####Create Map
  A source map can be generated as required. The source file name will be used with a new suffix of `.js.map`. To avoid any possible XSSI issues the map file is prefixed with `)]}`

  If `.babelrc` files use `sourceMaps: inline` or `sourceMaps both` options then either turn this option off or enable the `Internal Scanner`.  

* ####Babel Maps Add Url
  If a source map is created this allows a Url reference `//# sourceURL=originalBabelSourcefile` to be appended to the generated Javascript file.  

* ####Babel Source Path, Babel Transpile Path and Babel Maps Path
  These a directories based on the project root. ATOM now supports more than one project root folder, so these paths are based on each project root folder.

  Only files found under the `project/babelsourcepath` will be candidates for transpilation. If multiple project root folders exist then `babelsourcepath` may exist in any or all folders.

  The Transpile and Maps paths allow different target directories to be specified. If multiple project root folders exist then they may exist in any or all folders.

  e.g. Two project root folders exist `/proj1` and `/proj2`. If Source Path is set to `babelSource`the Transpile Path is set to `babelTranspile` and the Maps Path is set to `babelMaps` then:-

  `/proj1/babelSource/foo.es6` ->`/proj1/babelTranspile/foo.js`,`/proj1/babelMaps/foo.js.map`

  `/proj2/babelSource/dirBar/foo.es6` -> `/proj2/babelTranspile/dirBar/foo.js`,`/proj2/babelMaps/dirBar/foo.js.map`

* ####Supress Source Path Messages
  By default when a file is saved that is outside the `Babel Source Path` directory a message is generated. Enabling this disables these messages. This is particularly useful when you have mixed ES2015 and ES3-5 environment. ES2015 files can be placed inside a `Babel Source Path` where they will be transpiled and other files will not pop up annoying messages when being saved.

* ####Create Target Directories
  When enabled any target directories that do not exist will be created prior to a transpilation.

* ####Babel Stage
  The ECMA standards stage to enforce. The default is 2. See [Babel Stages](http://babeljs.io/docs/usage/experimental/) for more information.

* #### External Helpers
  When enabled transpiled output will not include babel helper code.   Please refer to [Babel External Helpers](http://babeljs.io/docs/advanced/external-helpers/) for further information.

* ####Module Loader
  The module loader format to use. Either `common` to use CommonJS, `amd` to use Asynchronous Module Definition or `umd` to use Universal Module Definition   Please refer to [Babel Modules](http://babeljs.io/docs/usage/modules/) for further information.

* ####Transformer Options
  The remaining transformer options may contain comma seperated lists of transformer names.
  Please refer to [Babel Transformers](http://babeljs.io/docs/advanced/transformers/) and [Babel Runtime](http://babeljs.io/docs/usage/runtime/) for further information.

###Using .babelrc Files
  babelrc files are described on the babel website [here](http://babeljs.io/docs/usage/babelrc/) Unless the `Internal Scanner` option described below is enabled babel-core will read all `.babelrc` files staring from the directory holding the project source file and continuing through all directories up to the root of the file system. The contents of these files are merged by babel-core. If a file containing
  ```
{
  "breakConfig": true
}
  ```
  is found the traversal stops. This is the standard babel behaviour but from language-babel's api viewpoint it is not possible to know what options were used and if the traversal was stopped by a `breakConfig`. Because language-babel cannot merge its options after the process described above, it must pass any transpilation options into the babel-core before the `.babelrc` files are read. Thus language-babel options may not be overridden by `.babelrc` files and become global overrides. This is particularly irksome with flags that always have options such as `Babel Stage` and `Module Loader`. Also, it is advisable to clear the `Create Map` option mappping option as language-babel cannot know what mapping options were set in `.babelrc` files. We also unaware whether a file was `ignored` in `.babelrc` or whether `sourceMaps` were set. Because of these multiple problems it is recommended to use the `Use Internal Scanner` option described below.

#####Using the Internal Scanner

  To avoid the issues described above a `Use Internal Scanner` option can be enabled that effectively replaces the babel-core scanner with one provided by language-babel. language-babel tries to mimic the process that babel uses. When a source file that is a candidate for transpilation is saved a `.babelrc` file is looked for in the same directory as the source file. If found, it's configuration is read. Language-babel then proceeds to traverse the directories above this one looking for further `.babelrc` files and merging their contents until either the root of the file system is found or the project root is found (this last option is a deviation from the norm and must be enabled with the `Stop At Project Directory` flag). If no `breakConfig` was found the options are then further merged with the language-babel's package configuration. Where the same option is in both the merged `.babelrc` files and language-babels config the `.babrlrc` files option takes precedence. The internal scanner is aware that maps are set to `truthy`, `inline` or `both` and can be saved accordingly. It is also aware that a file is `ignored` and shouldn't have maps saved for it. Thus the language-babel configuration options may be considered as global defaults, with `.babelrc` files applying changes down the directory tree.

  Like babel-core, language-babel's scanner supports `.babelrc` features such as using comments inside the JSON file contents. i.e. you can use // and /\* \*/ comments inside the files contrary to normal JSON practices. It also supports the use of environment variables `BABEL_ENV` and `NODE_ENV`

###About

The grammar for this package is based upon [Babel-Sublime](https://github.com/babel/babel-sublime). The JSX grammar has been reworked to allow for checking of balanced equal tag names plus other small changes.
