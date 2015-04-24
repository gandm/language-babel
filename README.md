# language-babel

Language grammar for ES6 Javascript and Facebook React JSX syntax. The color of syntax is determined by the theme in use.

[Babel](http://babeljs.io/) ( previously known as 6to5 ) support is baked in. Options in the
language-babel settings allow for compilation on the fly, plus full transpiler control.

##Installation

Install via ATOM `File->settings->packages`, or by using `apm install language-babel`

##Useage

By default the language-babel package will detect filetypes `.babel`,`.jsx` and `es6`. Use the standard ATOM interface to enable it for other file types. This provides a grammar that scopes the file in order to highlight text in a meaningful way.

By default the package also support the [Babel](http://babeljs.io/) transpiler. Out of the box any file saved will be transpiled and any errors and/or successful completions will be popped up on the ATOM workspace.

It is most likely many users of Babel will use a workflow ( Grunt, Gulp, etc ) and will not want transpiled output saved. However, language-babel fully supports transpiled output, maps, and the setting of most Babel options. See Advanced Useage below for more information.

##Screen Images

This shows language babel using the default atom-dark color scheme.

![ScreenShot](/screen-images/Babel.gif)

![ScreenShot](/screen-images/BabelSettings.gif)



##Advanced Useage

By using the ATOM settings panel for language-babel you can control many of the operations of the transpiler.


###Transpile On Save
  On any file save of a language-babel enabled file the Babel transpiler  is called. Any errors and/or successful indications are notified by a ATOM pop-up.

###Create Transpiled Code
  If enabled the transpile phase will output Javascript code to a `.js` file with the same prefix as the original. By using the `path` options below it is possible to transpile to a different target directory.

###Create Map
  A source map can be generated as required. The source file name will be used with a new suffix of `.js.map`. To avoid any possible XSSI issues the map file is prefixed with `)]}`

###Babel Maps Add Url
  If a source map is created this allows a Url reference `//# sourceURL=originalBabelSourcefile` to be appended to the generated Javascript file.  

### Babel Source Path, Babel Transpile Path and Babel Maps Path
  These a directories based on the project root. ATOM now supports more than one project root folder, so these paths are based on each project root folder.

  Only files found under the `project/babelsourcepath` will be candidates for transpilation. If multiple root folders exist then `babelsourcepath` may exist in any or all folders.

  The Transpile and Maps paths allow different target directories to be specified. The same rules as above exist.

  e.g. Two project root folders exist `/proj1` and `/proj2`. Source Path is set to `/babelSource`, Transpile Path is set to `/babelTranspile`  and Maps Path is set to ``/babelMaps`

  `/proj1/babelSource/foo.es6` ->`/proj1/babelTranspile/foo.js`,`/proj1/babelMaps/foo.js.map`

  `/proj2/babelSource/dirBar/foo.es6` -> `/proj2/babelTranspile/dirBar/foo.js`,`/proj2/babelMaps/dirBar/foo.js.map`

###Create Target Directories
  When enabled (default) any target directories that do not exist will be created prior to a transpilation.

####....Other options
  Please refer to [Babel options](http://babeljs.io/docs/usage/options/) for further information.

###About

The grammar for this package is based upon [Babel-Sublime](https://github.com/babel/babel-sublime). The JSX component has been reworked.
