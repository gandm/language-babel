### 2.9.0
  - Use JSON5 to parse .eslintrc
  
### 2.8.3
  - incorrect filename reference when notifying a user about invalid JSON in .eslintrc

### 2.8.2
  - Minor change

### 2.8.1
  - Minor change

### 2.8.0
  - Initial release of JSX auto formatting.

### 2.7.4
  - Small fixes to grammar as per issues #123 and #125

### 2.7.3
  - Fix Scope on $ variables - PR #121

### 2.7.2
  - Fix 2.7.1 grammar!

### 2.7.1
  - Add scope to commas - Fixes 119
  - Minor changes to JSX Autocomplete

### 2.7.0
  - Added auto completion of React JSX start/end tags + HTML tag names & attributes

### 2.6.3
  - Added more flow builtin types.
  - Fixes #118. Typo in scopename.

### 2.6.2
  - Fixes 2.6.1 precedence!

### 2.6.1
  - Fix issues when same file is displayed (split) into two or more panes.

### 2.6.0
  - Add `.flow` as a supported file type. See http://flowtype.org/blog/2015/12/01/Version-0.19.0.html#declaration-files

### 2.5.4
  - Fix babel error column position row indexed from 1 but column indexed from 0

### 2.5.3
  - Added PID info when task goes missing for no recorded reason!

### 2.5.2
  - Transpiler task goes missing so recover it. Issue #110 Maybe related to https://github.com/atom/atom/issues/9663

### 2.5.1
  - Check that Babel returns a valid line/column for an error.

### 2.5.0
  - Trap transpiler task stack traces.

### 2.4.1
  - Remove console.log!

### 2.4.0
  - Add new property `projectRoot` to ``.languagebabel` to allow for nested projects.

### 2.3.1
  - Fixes #106 - prefixed whitespace before number scoped as part of it.

### 2.3.0
  - Modified how sub tasks are closed.
  - Fixed issue for handling babel's ignored property.
  - Added info about the example project which shows some `.languagebabel` configs.

### 2.2.0
  - The package now supports mixed Babel V5 & Babel V6 projects.

### 2.1.0
  - Fix memory leak issues
  - Fix for growing listener pool
  - Fix for Atom issue never deleting memory for dismissed notifications

### 2.0.2
  - babel-core and chai as dependencies not Dev.

### 2.0.1
  - Whoops!!! Missing files.

### 2.0.0
  - Babel V6 support is now provided for Project based development.

### 1.0.0
  - Babel V6 is now supported with additional options for plugins and presets. See README.
  - Babel V5 support is removed together with options to configure stages, whitelists, etc.
  - Minor fixes in grammar.

### 0.15.13
  - Fix for some < equality operators being seen as JSX.

### 0.15.12
  - Avoid parsing lines over 1000 chars long. No point as it's a performance hit and ATOM has a token limit.

### 0.15.11
  - Fix function call expressions.

### 0.15.10
  - Fixes fat arrows being passed as function arguments.

### 0.15.9
  - Fixes #95 - toggle-quotes not working.

### 0.15.8
  - Add scopes for esc chars in template strings.
  - Fix for #93.

### 0.15.7
  - Fix ternaries as in issue #91

### 0.15.6
  - Fix for Issue #60.
  - Fix for ES7 decorators.

### 0.15.5
  - Fix methods that have array/string forms.

### 0.15.4
  - Removed lodash dependency & lazy load jjv.

### 0.15.3
  - Fixes #86 JSX Attribute names not scoped when terminated by > or />

### 0.15.2
  - Various non critical PR's
  - Change perceived package load time for language-babel.

### 0.15.1
  - Support flowtype class mixins and multiple inheritance via interface extends
  - Various fixes.

### 0.15.0
  - Added a new option `Allow Local Override` to enable the `.languagebabel` option.
  - Various other fixes in grammar.
  - Workaround to fix issues on Nuclide Remote Filesystems causing endless loop.

### 0.14.0
  - BREAKING: `Transpile On Save` is now disabled by default. Please re-enable if required. [See Issue 64](https://github.com/gandm/language-babel/issues/64)
  - Local configuration of language-babel options via JSON configuration files - `.languagebabel` is now supported. Please [README](https://github.com/gandm/language-babel/blob/master/README.md) [See Issue 51](https://github.com/gandm/language-babel/issues/51)

### 0.13.6
  - Small fixes in ternary handling
  - Fixes #63

### 0.13.5
  - Changed scopenames for vars in func defs and calls to use variable...

### 0.13.4
  - Fixes #61 Regression - Class not in first column no scoped.

### 0.13.3
  - Fix issues with parens/braces not terminating scope.
  - Fix optional flowtype params and maybe type handling.
  - Change scope when 'constructor', 'super' and 'self' used as method names.

### 0.13.2
  - Fixes #57. Highlighting breaks down.
  - Remove generators from arrow functions
  - Ternary/Typecast detection

### 0.13.1
  - Fixes #55 missing scope on JSX self closing tags.

### 0.13.0
  - Add jsduck documentation keywords.
  - Fixes #53 ternary operator being parsed as flow type.

### 0.12.0
  - PR #50 Add simple JSDoc grammar.
  - Scope fixes.

### 0.11.11
  - Fixes #49 incorrect handling of escapes within strings.

### 0.11.10
  - Add flow typecast support as per [flowtype blog](http://flowtype.org/blog/2015/02/18/Typecasts.html)

### 0.11.9
  - Various Fixes.

### 0.11.8
  - Fix & symbol being treated as expression termination.

### 0.11.7
  - Various Fixes
  - Adds flow type support for let, var and const. Read [limitations](https://github.com/gandm/language-babel/issues/46)

### 0.11.6
  - Fixes #45 obj literal with key of type inferred as flow type keyword.
  - Revert to V10 scope name for function arg parens.

### 0.11.5
  - Improvements to polymorphic type function & arrow function parsing.

### 0.11.4
  - README fix to Issue #42
  - Various changes to flow type support.
  - Fix embedded escape back quote in Quasi Literal.
  - Change some scopes to affect colours.

### 0.11.3
  - fixed polymorphs for functions.

### 0.11.2
  - fix scopes for quoted literal-arrow-function-labels

### 0.11.1
  - fix arrow functions

### 0.11.0
  - Initial support for Facebook flow.

### 0.10.5
  - Fixes #36 - Clarify grammar name to match standard and atom-preview package.
  - Fixes #37 Comment not calling TODO injectioin grammar

### 0.10.4
  - Fixes #27 scope on ArrowFunctions
  - Checks for no map returned

### 0.10.3
  - Fix various grammar issues reported/PR's
  - bump babel-core version in dependencies.

### 0.10.2
  - PR to add additional module options for Babel #22
  - PR Removed label scope from "constant.other.object.key.js" grammar. #20

### 0.10.1
  - Not checking for result.ignored flag correctly. fixes #21

### 0.10.0
  - Clear transpile error messages automatically on next save. closes #16

### 0.9.1
  - Bad deprecation code looses config settings

### 0.9.0
  - Added new flag `disableWhenNoBabelrcFileInPath` to stop transpiles in absence of `.babelrc` fixes #15
  - Corrected misspelling of suppress - about time!

### 0.8.1
  - extend suppress message flag to include no output config'd messages

### 0.8.0
  - Removed Internal Scanner

### 0.7.4
  - Future deprecation of internal scanner.

### 0.7.3
  - Use Chai ^3.0.0
  - Fixes #10 - jsx tag punctuation incorrect

### 0.7.2
  - Added dependency badge and small changes to readme.

### 0.7.1
  - Fix bug where project is in root directory
  - Add new screen Image

### 0.7.0
  - Errors that return row,column cause editor to jump to that position
  - Added option button to see babel options. Use internal Scanner for most benefit.
  - Added option to suppress transpile success messages
  - Added specs
  - Use Atom's fs-plus as replacement for nodes fs  
  - Removed dependency on mkdirp as fs-plus uses it anyway

### 0.6.2
  - Reverted change as per issue 7

### 0.6.1
  - Changes to readme
  - Cosmetic changes to transpiler
  - Added back case and default indentation as per issue 7

### 0.6.0
  - Changes to augment handling of `.babelrc` files

### 0.5.6
  - Applied pull request
  - Added babel-core version used in notification dialogs

### 0.5.5
  - Fix scope Indent

### 0.5.4
  - Fix scope styling

### 0.5.3
  - Fix linter-eslint not working.

### 0.5.2
  - Fixes Issue 4. Symbol view not working.

### 0.5.1
  - Correct readme

### 0.5.0
  - New suppress source message option.
  - Use Cases added to readme.

### 0.4.4
  - patch not detecting </ in jsx terminating children

### 0.4.3
  - patched JSX detecting attribute names with trailing invalid chars

### 0.4.2
  - patched minor grammar, add package keywords

### 0.4.0
  - stable enough to add .js as supported file types.
  - added new screen shots of source.

### 0.3.9
  - added settings file to auto indent and outdent

### 0.3.8
  - constant numeric not scoping. error moving babel-sublime regex to language-babel
  - forms Sound.play = arg => { } not scoping. error moving babel-sublime regex to language-babel

### 0.3.7
  - Modified JSX spread attribute handling
  - Added trap for bad entity name
  - Added style for JSX attribute names to be italic

### 0.3.6
  - closes https://github.com/gandm/language-babel/issues/2
  - closes https://github.com/gandm/language-babel/issues/3

### 0.3.5
  - Permanent removal of invalid element name highlighting

### 0.3.4
  - Grammar Changes
  - Disabled invalid JSX invalid element name highlight. Firing on < operator erroneously.

### 0.3.3
  - Grammar Changes
  - Removed pure JSX syntax checking to remove options for namespaced names as per React JSX

### 0.1.0
  - Intital Releases
