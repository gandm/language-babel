### 2.71.0
  - Add support to grammar for private class fields and methods defined at [TC39 ](https://github.com/tc39/proposal-class-fields)

### 2.70.2
  - Add commenting option to pipelined operators
  - Fix bad captures in 2.71.1

### 2.70.1
  - Fix JS keywords being parsed as pipeline functions.

### 2.70.0
  - Add support for |> [pipeline operator](https://github.com/tc39/proposal-pipeline-operator)

### 2.69.0
  - Add support for Flow's [opaque](https://flow.org/en/docs/types/opaque-types/#opaque-type-alias-syntax-a-classtoc-idtoc-opaque-type-alias-syntax-hreftoc-opaque-type-alias-syntaxa) keyword.
  - Fix Flow type objects in grammar - Issue #392
  - Fix highlighting/scopes for null arguments in the form `func?.()`

### 2.68.0
  - Add syntax support for null/existential/elvis `?` operator as defined at [tc39 chaining](https://github.com/tc39/proposal-optional-chaining)

### 2.67.2
  - Fix another bind :: parse error -Issue #390

### 2.67.1
  - Fix bind syntax :: not being parsed in certain cases - Issue #389

### 2.67.0
  - Add support for Styled Components internal API withConfig. PR #387
  - Assume some forms of <IDENT> are flow functions and not JSX. Issue #388

### 2.66.1
  - Stop autoIndentJSX tokenizing characters prior to actual JSX.

### 2.66.0
  - Add meta scope to flowtype objects to allow additional themeing - Issue #382
  - Existing editors instantiated using autoIndentJSX should observe the config for changes.

### 2.65.3
  - Fix incorrect closing tag position autoIndentJSX  

### 2.65.2
  - Fix scope on import/export to allow Atom's toggle quotes to work.
  - Fix way ternaries inside JSX were auto indented. Fixes [#369](https://github.com/gandm/language-babel/issues/369#issuecomment-308108180)

### 2.65.1
  - Fix how we handle unexpected flowtypes that changed in 2.64.0 - Issue #376

### 2.65.0
  - Add support for styled-components styled(Comp).attrs() form of template.

### 2.64.0
 - Change parsing of possible multiline arrow functions.

### 2.63.0
  - Changed format for shortcut commenting inside styled-components. Prettier used a template commenting format that was different to language-babel. We have agreed to use a common format that allows co-existence. i.e. \`{'' /&ast; color: red; &ast;/}\`. This will cause issues for already commented lines inside styled-component tags that need to be uncommented which is regrettable. Also prettier-atom has yet to be updated to have this new format.
  - Add support for styled-components V2.

### 2.62.0
  - Support interpolations inside css url(). #368
  - Allow backtick insertion to wrap selected text. #370

### 2.61.0
  - Add support for CSS grid [linename] values.
  - Fix 2.59.1

### 2.60.0
  - Allow non-css snippets inside styled-componenets tags.

### 2.59.1
  - Fix Flow function arrow parameters when on same line as declaration. Issue #361

### 2.59.0
  - Add class implements support for flow.

### 2.58.0
  - Add new template syntax for Relay.

### 2.57.7
  - ASI grammar also missing terminators for default.

### 2.57.6
  - ASI grammar was missing terminators for break and case keywords. Issue #354

### 2.57.5
  - Fixing grammar in 2.57.4 [commit](https://github.com/gandm/language-babel/commit/6db89e3c13415a17382962fe1aa5064a271725c7) caused some themes to highlight non-constant shorthand object keys as constants.

### 2.57.4
  - Flow type definition not highlighting arrow operator. Fixes #351

### 2.57.3
  - Grammar incorrectly parsed object key expression containing array. Fixes #349

### 2.57.2
  - Bump depedency to Atom 1.15 to fix fs-plus now on v3 needing Node 6. (#343)
  - PR #343 from AlexyRaspopov to support yield returning JSX expression.
  - Remove grammar regex detecting certain comment types inside JSX. Fixes #345 .

### 2.57.1
  - Fix multiline arrow functions containing flow types. Issue #342

### 2.57.0
  - Add support for SVG attributes used as CSS properties inside styled-components. Issue #339
  - Remove grammar 1000 character/line parsing restriction introduced in Atom 1.15 for this grammar. Issue #340

### 2.56.2
  - Allow tagged template grammar extension grammars to override object properties named template which are currently handled by language-mustache as no default Atom grammar exists for Angular.

### 2.56.1
  - Fix issue #337 closing backtick was assumed to be a escaped backtick if preceded by a escaped backslash

### 2.56.0
  - Allow autocomplete-plus to work inside styled-component css templates containing embedded JS. language-css stopped this from happening.

### 2.55.6
  - Add some missing scopes from JSDdoc parsing.

### 2.55.5
  - Scope Obj literal shorthand property keys with all uppercase as constants.

### 2.55.4
  - Wow! that was a bad release.

### 2.55.3
  - Read bracket-matcer config to determine how to complete backticks. Issue #330

### 2.55.2
  - Fix cases where lines following a flow polymorph were incorrectly indented. Fixes Issue #329

### 2.55.1
  - Fix insert newline/tab after starting back-tick. Issue #328

### 2.55.0
  - Improve support for JSDoc highlighting.
  - The Atom bracket-matcher package doesn't auto-close back-ticks following a function tag. This package now provides that functionality. This allows a more sensitive use of auto-indent when a new line is placed between consecutive back-ticks.
  - The package configuration schema is now inside package.json.

### 2.54.1
  - Fix incorrect generation of ttl grammars when using certain regex strings.

### 2.54.0
  - Add scope of meta.conmments.flowtype to flowtype comment style.
  - Use Oniguruma to parse taggedTemplateGrammar regex - allows use of backtracking.

### 2.53.0
  - Changed the status bar indicator to use a name of `Babel` rather than `Babel ES6 JavaScript`. Now ES2016 and ES2017 are being released it seems more appropriate and succinct. `Babel ES6 JavaScript` is still the internal grammar name as shown on the list of grammars to ensure compatibility with packages that use this keyword. e.g. atom-beautify.

### 2.52.2
  - Change styled-components auto-complete property values to position cursor after closing semi-colon.
  - Allow pseudo selectors to appear at top level of styled-components string without implicit parent. css `::pseudo-value`

### 2.52.0
  - Add support for auto-completing styled-components CSS.

### 2.51.0
  - Add support for the new flow shorthand for importing types in the same declaration that imports values: import {someValue, type someType, typeof someOtherValue} from 'foo'
  - Remove meta scope and tidy decorator support in grammar - Issue #320

### 2.50.1
  - Change regex for detecting flow type casts. Fixes Issue #317

### 2.50.0
  - Add support for TC39 dynamic import 'function'.
  - Add support for Relay to use graphql as a tagged template name.
  - Stop any autoIndentJSX from working inside embedded template literals.

### 2.49.4
  - Add additional closing space after auto-commenting styled-components. Issue #303
  - Fix incorrect scope names for methods/functions called witrh more than one object arg. Issue #299
  - Add additional scope name for start/end braces of object literals. Issue #301

### 2.49.3
  - Fix #296 Closing backtick terminates styled-component css property.
  - Fix #297 for...of and for...in loops with let|const|var property grammar parsing.
  - Fix #291 Add support for autoindenting and terminating styled-component backtick.

### 2.49.2
  - Fix styled componenet nested wrappper function tags Fixes #294
  - Fix handling unit types after interpolation closures. Fixes #295

### 2.49.1
  - Fix #290

### 2.49.0 (Atom >=1.13)
  - Add support for Atom 1.13

### 2.48.5
  - Fix #296 Closing backtick terminates styled-component css property.
  - Fix #297 for...of and for...in loops with let|const|var property grammar parsing.
  - Fix #291 Add support for autoindenting and terminating styled-component backtick.

### 2.48.4
  - Fix styled componenet nested wrappper function tags Fixes #294
  - Fix handling unit types after interpolation closures. Fixes #295

### 2.48.3
  - Fix #290 styled components interpolation.

### 2.48.2
  - Add support for indentation of paren blocks inside JSX as well as allowing addition indents on some contraints.

### 2.48.0 (Atom <=1.12)
  - Cease package support.
  - Remove auto indent option as default.
  - Add indent/outdent for Atom jsx
  - Add option to export type {name} from 'module'

### 2.47.0
  - Fix bad regression in arrow function detections that also impacted performance. [Fixes #281](https://github.com/gandm/language-babel/issues/281)
  - Change default autoIndentJSX to be on. See [PR #283](https://github.com/gandm/language-babel/issues/283)

### 2.46.0
  - Minor grammar improvements/fixes. Issues #272, #273, #274, #275, #276, #277 and #278
  - Change keyword shortcut commenting in styled-components to return empty string in interpolations.

### 2.45.0
  - Support [styled-components](https://github.com/styled-components/styled-components) with own grammar rather than hacked language-css.
  - Allow const uppercase variables to start with _ chars.

### 2.44.1
  - Fix issues with arrow functions caused by lost commit in 2.44.0!

### 2.44.0
  - Add styled components support.
  - Fix Issue [#260](https://github.com/gandm/language-babel/issues/260)
  - Fix Issue [#261](https://github.com/gandm/language-babel/issues/261)

### 2.43.0
  - Add ability to use a RegExp as a tagged template grammar extension.

### 2.42.3
  - Grammar object literals inside some arrays were incorrectly parsed as braced bodies [Fixes #257](https://github.com/gandm/language-babel/issues/257)

### 2.42.2
  - Fix grammar divide operator starting on a new line being treated as a RegExp. [Fixes #255](https://github.com/gandm/language-babel/issues/255)
  - Fix grammar nested object literals not being handled correctly. [Fixes #256](https://github.com/gandm/language-babel/issues/256)

### 2.42.0
  - Add support for embedding other grammars to highlight template literals. Please refer to [the README](https://github.com/gandm/language-babel#javascript-tagged-template-literal-grammar-extensions)

### 2.41.0
  - Add references in README to `language-graphql-lb` that supports `.graphql` and `.gql` files.

### 2.40.0
  - Add support for `/* GraphQL */` to be used as a prefix to templates literals enclosing GraphQL. See the README for more info.

### 2.39.0
  - Add internal support for GraphQL templates so as to better support it.

### 2.38.0
  - Change ES decorator support that conforms to the new spec and also better supports ASI syntax.

### 2.37.1
  - Add fixes for classes where public class fields mixed typed and non-typed implementations.
  - Add support for autoIndentJSX where a return statement becomes an implicit else statement.
  - Add scope for `|` in flow's object 'only' syntax `{| prop: string |}`

### 2.37.0
  - Add support for GraphQL template strings with tags of Relay.QL and gql. Also support # type comments
  - Add Additional scope class id for literal object shorthand properties. `.shorthandpropertyname`

### 2.36.3
  - Fix auto indent JSX when using hard tabs and certain eslint rules
  - Fix top most closing tag suggestions displaying wrong option when  multiple open tags were on line.

### 2.36.2
  - Change Indent JSX behaviour of ternary else. [Issue 241](https://github.com/gandm/language-babel/issues/241)

### 2.36.1
  - Change flow predicate syntax to use %checks rather than checks.
  - Fix class field property assignments causing following async keyword to be incorrectly highlighted  [Issue 238](https://github.com/gandm/language-babel/issues/238)
  - Fix certain keywords being interpreted as a tagname for template literals.  [Issue 240](https://github.com/gandm/language-babel/issues/240)

### 2.36.0
  - Add autoIndentJSX support to inline switch/case/default and for/while loops.
  - Refactor more grammar to use the more robust JS identifier regex.

### 2.35.0
  - Atom's reflow command expects whitespace prefixing a // comment to have a scopeName! [Issue 234](https://github.com/gandm/language-babel/issues/234)

### 2.34.0
  - Add autoIndentJSX support for inline IIFE that uses if/else. [Issue 230](https://github.com/gandm/language-babel/issues/230)
  - Allow void keyword as possible code that precedes JSX
  - Scope classname.methodcall() that use uppercase class as CONSTANT.methodcall(). [Issue 229](https://github.com/gandm/language-babel/issues/229)
  - Add const & var as implicit options on export grammar.

### 2.33.0
  - Add support for flow predicates using checks keyword.
  - Improve handling of flow declarations

### 2.32.4
  - Fix flow type vars holding functions that are defined with generics not parsing correctly in grammar.

### 2.32.3
  - Changed some grammar regex's that scoped prefixed space as part of following token.
  - Fixed JSX auto newline insertion/indent when used with hard tabs and without autoIndentJSX.

### 2.32.2
  - Allow comments inside import statement braces. Fixes [Issue 222](https://github.com/gandm/language-babel/issues/222)

### 2.32.1
  - Add white space to JSX comments.

### 2.32.0
  - Add reason to incompatible package notifications.

### 2.31.0
  - Allow JSX to be indented when a whole file is indented using the Atom Edit->Lines->Auto Indent command.
  - Modify arrow function grammar regex to allow for the Flow Comments style of typed notation.

### 2.30.1
  - Fix 2.23.0 not parsing flow keywords in flow comments.

### 2.30.0
  - Add support for highlighting flow typing inside comments starting `/*:`, `/*::` and `/*flow-include`. Read the [Flow blog](https://flowtype.org/blog/2015/02/20/Flow-Comments.html) for further information.

### 2.29.2
  - Fix type property detected as flow type alias. Fixes #211

### 2.29.1
  - Rephrase incompatible notification message.

### 2.29.0
  - Warn when potential incompatible packages are activated.
  - Additional check on textEditor is alive before positioning cursor on transpile failure.

### 2.28.0
  - Improve JSX commenting to allow nested objects that require // commenting. e.g. Attributes.

### 2.27.1
  - Tweak template regex

### 2.27.0
  - Patch issue where Atom 1.8 now returns a root project folder on Windows as c: and not c:\
  - Add scope support for tc39 stage 0 function bind syntax `::` Thanks @HyeonuPark
  - Treat object properties named `template` followed by a template literal as html.

  e.g. The template string below will be highlighted by Atom's `language-mustache` and `language-html`
  ```
  a.component('randomComponent', {
    template: `<div class="test">asdf</div>`,
  })
  ```

### 2.26.3
  - Fix for stack trace on missing argument on TextEditor close.

### 2.26.2
  - Fix transpile on save ignored .babelrc sourceMaps option.

### 2.26.1
  - Fix specs for 2.26.0

### 2.26.0
  - Add option to allow recursive directories to be transpiled.

### 2.25.1
  - Fix Automatic insertion between JSX tags when auto-indent is turned off

### 2.25.0
  - Automatic insertion of additional newline between JSX open/close tags.
  - Grammar support for TC39 proposal for  - export indentifier from "module"
  - JSX Auto-indent uses eslint "indent" rule, if found, to set defaults for "react/jsx-indent" and "react/jsx-indent-props"
  - Instantiates auto-indent for all language-babel text editor instances even if Auto Ident JSX is turned off in package settings. This allows the commands to turn on auto indent for individual files as required.

### 2.24.4
  - Remove white space from blank lines when moving out of JSX.
  - Supress auto-indent on a open tag's > to allow auto complete end tag to pop up.

### 2.24.3
  - Fix no suggestions for html JSX attributes when on separate lines. Again!
  - Remove possibility of repeated firing of onDidStopChanging.

### 2.24.2
  - Fix no suggestions for html JSX attributes when on separate lines.

### 2.24.1
  - Make JSX indent cursor move changes non-transactional.

### 2.24.0
  - Remove 're' filetype from Regex Grammar.

### 2.23.2
  - Fixes AutoIndentJSX which left blank lines with white space in JSX as an indentation. [Fixes #193](https://github.com/gandm/language-babel/issues/193)

### 2.23.0
  - Improve grammar for ES import & export.
  - Small readme changes.

### 2.22.0
  - Flow declare support for:
    - class extends and mixins keywords
    - module.exports: type keywords
    - declare type and declare interface
    - module names that may be quoted.

### 2.21.1
  - Allow flowtyped arrow function returns to have intersection (&) and array ([]) notation.

### 2.21.0
  - Allow $ chars to be treated as a word character by Atoms work skip keyboard shortcuts
  - Simplify Regex for trivial arrow functions with no argument parens.

### 2.20.10
  - Fix flow declare class methods named static being parsed as storage modifiers.
  - Fix flow declare class methods with no name being parsed incorrectly.

### 2.20.9
  - Fix class properties with flow keyword names - type, declare & interface being ignored.
  - Fix class property issues when used with ASI and flow.

### 2.20.8
  - Fix handling of let/var/const creation of arrow functions. [Fixes #181](https://github.com/gandm/language-babel/issues/181)
  - Fix function labels not allowing all possible characters. [Fixes #184](https://github.com/gandm/language-babel/issues/184)

### 2.20.7
  - Fix bad destructuring scopes in grammar.

### 2.20.6
  - Object literal prop:func-call mistakenly treated as prop:method-call.

### 2.20.5
  - Change JSX tag autocomplete snippet to only have a single anchor. [Fixes #180](https://github.com/gandm/language-babel/issues/180)

### 2.20.4
  - Fix Flow $JSXIntrinsics properties object being ignored in grammar.

### 2.20.3
  - Fix incorrect handling of case statement used as a return flow type [Fixes #179](https://github.com/gandm/language-babel/issues/179)

### 2.20.2
  - Refactored grammar regex reverted in 2.20.1

### 2.20.1
  - Revert small commit

### 2.20.0
  - Improve Flow and ASI support.

### 2.19.4
  - Regression JSX ignoring '-' chars as being valid in custom element names.

### 2.19.3
  - Added more cases as per 2.19.2 for function/arrow labels.

### 2.19.2
  - Parsing some ternaries as key/value arrow constants,

### 2.19.1
  - Incorrect JSX Start regex

### 2.19.0
  - Modified grammar scopes to highlight JSX components as classes. [Enhancement Request #173](https://github.com/gandm/language-babel/issues/173)

### 2.18.7
  - Add close brace and close array as let, var and const terminators.

### 2.18.6
  - Fix keys & values named type & declare being highlighted as js keywords. [Fixes #172 ](https://github.com/gandm/language-babel/issues/172)
  - Scope flow variant polymorph operators <+T,-V>

### 2.18.5
  - Grammar incorrectly parsed a returned object literal. [Fixes #171](https://github.com/gandm/language-babel/issues/171)

### 2.18.4
  - Make literal-object grammar recursive to fix nested object methods.

### 2.18.3
  - Improve detection of object literals. [Fixes #170](https://github.com/gandm/language-babel/issues/170)

### 2.18.2
  - Fix function call td.function() being interpreted as a function definition. [Fixes #169](https://github.com/gandm/language-babel/issues)

### 2.18.1
  - Incorrect scope for arrow function async keyword inside object literal. [Fixes](https://github.com/gandm/language-babel/issues/168)

### 2.18.0
  - Allow flow syntax to be used within files that use ASI.
  - Use two forms of scoping for interpolated strings. [Fixes](https://github.com/gandm/language-babel/issues/167)

### 2.17.3
  - [Fixes #166](https://github.com/gandm/language-babel/issues/166) Grammar for `async`, `get` and `set` on shorthand object functions

### 2.17.2
  - [Fixes #164](https://github.com/gandm/language-babel/issues/164) flow comment syntax breaks highlighting

### 2.17.1
  - Fix regression: single line comment not including language-todo
  - Fix export default <jsx></jsx> in grammar

#### 2.17.0
  - Add file tree `Babel Transpile` context menu. [Enhancement Request #160](https://github.com/gandm/language-babel/issues/160)
  - Add `.es` as grammar detected file type.
  - Grammar support for RegEx `u` flags.
  - Fix to allow uppercase literals in 0X,0E,0B,0O expressions.
  - Scope arrow symbol `=>` when unparsed. See [Issue #149](https://github.com/gandm/language-babel/issues/149)

#### 2.16.0
  - Refactor ::indentRow

#### 2.15.8
  - Fix autoIndentJSX for Ternary expressions and other issues.

#### 2.15.7
  - Fix autoIndentJSX for first tag of embedded expression.
  - Fix positioning on new JSX line.

#### 2.15.6
  - Remove scopes for nodejs support variables. [Fixes issue #152](https://github.com/gandm/language-babel/issues/152)
  - Fixed more JSX indenting issues.

#### 2.15.5
  - Fix colon in case missing scope [Fixes #145](https://github.com/gandm/language-babel/issues/145)
  - Fix move/paste JSX blocks not auto-indenting. [Fixes #150](https://github.com/gandm/language-babel/issues/150)
  - Add [atom-grammar-test](https://github.com/kevinastone/atom-grammar-test) package as grammar spec handler.

#### 2.15.4
  - Fix #144
  - Improve Auto indent JSX for embedded components within tags.

#### 2.15.3
  - Fix auto indent when JSX at end of file.

#### 2.15.2
  - Fix JSX auto indenting for multiple cursors.

#### 2.15.1
  - Missing a check for the auto indent toggle - Doesn't turn off indenting.

#### 2.15.0
  - Improve auto-indenting and formatting of JSX to allow for embedded expressions.
  - Remove monkey patching as not required.

#### 2.14.1
  - Fix specs

#### 2.14.0
  - Auto Indent JSX is now turned off by default as it is still experimental.

#### 2.13.0
  - Support namespaced JSX components.
  - Add readme information about the toggle comments feature inside JSX blocks.

#### 2.12.2
  - Fixes #138 Adds scope to semi-colon class property terminator.

#### 2.12.1
  - Fixes #137 Division with no spaces incorrectly scoped. e.g. var x = 1/123

#### 2.12.0
  - Babel transpiled code can be viewed in real-time in the editor. Requires the [source-preview](https://atom.io/packages/source-preview) package ^v.4.0.

#### 2.11.3
  - Improve Fix for 2.11.2
  - Improve cursor positioning after JSX new line insertion.

#### 2.11.2
  - Fix Non JSX trailing JSX insertion point was being indented. Fixes #136
  - Remove JSON5 dependency.

#### 2.11.1
  - Inadvertently removed JSON5!

#### 2.11.0
  - Support .eslintrc YAML files

#### 2.10.0
  - Change Atom's toggle comments to use `{/*  */}` when inside JSX blocks.

#### 2.9.5
  - Improved indenting

#### 2.9.4
  - Fixes #132

#### 2.9.3
  - Improve .eslintrc parsing

#### 2.9.2
  - Fixes #130 .eslintrc has no rules property.

#### 2.9.1
  - Fixes #126.

#### 2.9.0
  - Use JSON5 to parse .eslintrc

#### 2.8.3
  - incorrect filename reference when notifying a user about invalid JSON in .eslintrc

#### 2.8.2
  - Minor change

#### 2.8.1
  - Minor change

#### 2.8.0
  - Initial release of JSX auto formatting.

#### 2.7.4
  - Small fixes to grammar as per issues #123 and #125

#### 2.7.3
  - Fix Scope on $ variables - PR #121

#### 2.7.2
  - Fix 2.7.1 grammar!

#### 2.7.1
  - Add scope to commas - Fixes 119
  - Minor changes to JSX Autocomplete

#### 2.7.0
  - Added auto completion of React JSX start/end tags + HTML tag names & attributes

#### 2.6.3
  - Added more flow builtin types.
  - Fixes #118. Typo in scopename.

#### 2.6.2
  - Fixes 2.6.1 precedence!

#### 2.6.1
  - Fix issues when same file is displayed (split) into two or more panes.

#### 2.6.0
  - Add `.flow` as a supported file type. See http://flowtype.org/blog/2015/12/01/Version-0.19.0.html#declaration-files

#### 2.5.4
  - Fix babel error column position row indexed from 1 but column indexed from 0

#### 2.5.3
  - Added PID info when task goes missing for no recorded reason!

#### 2.5.2
  - Transpiler task goes missing so recover it. Issue #110 Maybe related to https://github.com/atom/atom/issues/9663

#### 2.5.1
  - Check that Babel returns a valid line/column for an error.

#### 2.5.0
  - Trap transpiler task stack traces.

#### 2.4.1
  - Remove console.log!

#### 2.4.0
  - Add new property `projectRoot` to ``.languagebabel` to allow for nested projects.

#### 2.3.1
  - Fixes #106 - prefixed whitespace before number scoped as part of it.

#### 2.3.0
  - Modified how sub tasks are closed.
  - Fixed issue for handling babel's ignored property.
  - Added info about the example project which shows some `.languagebabel` configs.

#### 2.2.0
  - The package now supports mixed Babel V5 & Babel V6 projects.

#### 2.1.0
  - Fix memory leak issues
  - Fix for growing listener pool
  - Fix for Atom issue never deleting memory for dismissed notifications

#### 2.0.2
  - babel-core and chai as dependencies not Dev.

#### 2.0.1
  - Whoops!!! Missing files.

#### 2.0.0
  - Babel V6 support is now provided for Project based development.

#### 1.0.0
  - Babel V6 is now supported with additional options for plugins and presets. See README.
  - Babel V5 support is removed together with options to configure stages, whitelists, etc.
  - Minor fixes in grammar.

#### 0.15.13
  - Fix for some < equality operators being seen as JSX.

#### 0.15.12
  - Avoid parsing lines over 1000 chars long. No point as it's a performance hit and ATOM has a token limit.

#### 0.15.11
  - Fix function call expressions.

#### 0.15.10
  - Fixes fat arrows being passed as function arguments.

#### 0.15.9
  - Fixes #95 - toggle-quotes not working.

#### 0.15.8
  - Add scopes for esc chars in template strings.
  - Fix for #93.

#### 0.15.7
  - Fix ternaries as in issue #91

#### 0.15.6
  - Fix for Issue #60.
  - Fix for ES7 decorators.

#### 0.15.5
  - Fix methods that have array/string forms.

#### 0.15.4
  - Removed lodash dependency & lazy load jjv.

#### 0.15.3
  - Fixes #86 JSX Attribute names not scoped when terminated by > or />

#### 0.15.2
  - Various non critical PR's
  - Change perceived package load time for language-babel.

#### 0.15.1
  - Support flowtype class mixins and multiple inheritance via interface extends
  - Various fixes.

#### 0.15.0
  - Added a new option `Allow Local Override` to enable the `.languagebabel` option.
  - Various other fixes in grammar.
  - Workaround to fix issues on Nuclide Remote Filesystems causing endless loop.

#### 0.14.0
  - BREAKING: `Transpile On Save` is now disabled by default. Please re-enable if required. [See Issue 64](https://github.com/gandm/language-babel/issues/64)
  - Local configuration of language-babel options via JSON configuration files - `.languagebabel` is now supported. Please [README](https://github.com/gandm/language-babel/blob/master/README.md) [See Issue 51](https://github.com/gandm/language-babel/issues/51)

#### 0.13.6
  - Small fixes in ternary handling
  - Fixes #63

#### 0.13.5
  - Changed scopenames for vars in func defs and calls to use variable...

#### 0.13.4
  - Fixes #61 Regression - Class not in first column no scoped.

#### 0.13.3
  - Fix issues with parens/braces not terminating scope.
  - Fix optional flowtype params and maybe type handling.
  - Change scope when 'constructor', 'super' and 'self' used as method names.

#### 0.13.2
  - Fixes #57. Highlighting breaks down.
  - Remove generators from arrow functions
  - Ternary/Typecast detection

#### 0.13.1
  - Fixes #55 missing scope on JSX self closing tags.

#### 0.13.0
  - Add jsduck documentation keywords.
  - Fixes #53 ternary operator being parsed as flow type.

#### 0.12.0
  - PR #50 Add simple JSDoc grammar.
  - Scope fixes.

#### 0.11.11
  - Fixes #49 incorrect handling of escapes within strings.

#### 0.11.10
  - Add flow typecast support as per [flowtype blog](http://flowtype.org/blog/2015/02/18/Typecasts.html)

#### 0.11.9
  - Various Fixes.

#### 0.11.8
  - Fix & symbol being treated as expression termination.

#### 0.11.7
  - Various Fixes
  - Adds flow type support for let, var and const. Read [limitations](https://github.com/gandm/language-babel/issues/46)

#### 0.11.6
  - Fixes #45 obj literal with key of type inferred as flow type keyword.
  - Revert to V10 scope name for function arg parens.

#### 0.11.5
  - Improvements to polymorphic type function & arrow function parsing.

#### 0.11.4
  - README fix to Issue #42
  - Various changes to flow type support.
  - Fix embedded escape back quote in Quasi Literal.
  - Change some scopes to affect colours.

#### 0.11.3
  - fixed polymorphs for functions.

#### 0.11.2
  - fix scopes for quoted literal-arrow-function-labels

#### 0.11.1
  - fix arrow functions

#### 0.11.0
  - Initial support for Facebook flow.

#### 0.10.5
  - Fixes #36 - Clarify grammar name to match standard and atom-preview package.
  - Fixes #37 Comment not calling TODO injectioin grammar

#### 0.10.4
  - Fixes #27 scope on ArrowFunctions
  - Checks for no map returned

#### 0.10.3
  - Fix various grammar issues reported/PR's
  - bump babel-core version in dependencies.

#### 0.10.2
  - PR to add additional module options for Babel #22
  - PR Removed label scope from "constant.other.object.key.js" grammar. #20

#### 0.10.1
  - Not checking for result.ignored flag correctly. fixes #21

#### 0.10.0
  - Clear transpile error messages automatically on next save. closes #16

#### 0.9.1
  - Bad deprecation code looses config settings

#### 0.9.0
  - Added new flag `disableWhenNoBabelrcFileInPath` to stop transpiles in absence of `.babelrc` fixes #15
  - Corrected misspelling of suppress - about time!

#### 0.8.1
  - extend suppress message flag to include no output config'd messages

#### 0.8.0
  - Removed Internal Scanner

#### 0.7.4
  - Future deprecation of internal scanner.

#### 0.7.3
  - Use Chai ^3.0.0
  - Fixes #10 - jsx tag punctuation incorrect

#### 0.7.2
  - Added dependency badge and small changes to readme.

#### 0.7.1
  - Fix bug where project is in root directory
  - Add new screen Image

#### 0.7.0
  - Errors that return row,column cause editor to jump to that position
  - Added option button to see babel options. Use internal Scanner for most benefit.
  - Added option to suppress transpile success messages
  - Added specs
  - Use Atom's fs-plus as replacement for nodes fs  
  - Removed dependency on mkdirp as fs-plus uses it anyway

#### 0.6.2
  - Reverted change as per issue 7

#### 0.6.1
  - Changes to readme
  - Cosmetic changes to transpiler
  - Added back case and default indentation as per issue 7

#### 0.6.0
  - Changes to augment handling of `.babelrc` files

#### 0.5.6
  - Applied pull request
  - Added babel-core version used in notification dialogs

#### 0.5.5
  - Fix scope Indent

#### 0.5.4
  - Fix scope styling

#### 0.5.3
  - Fix linter-eslint not working.

#### 0.5.2
  - Fixes Issue 4. Symbol view not working.

#### 0.5.1
  - Correct readme

#### 0.5.0
  - New suppress source message option.
  - Use Cases added to readme.

#### 0.4.4
  - patch not detecting </ in jsx terminating children

#### 0.4.3
  - patched JSX detecting attribute names with trailing invalid chars

#### 0.4.2
  - patched minor grammar, add package keywords

#### 0.4.0
  - stable enough to add .js as supported file types.
  - added new screen shots of source.

#### 0.3.9
  - added settings file to auto indent and outdent

#### 0.3.8
  - constant numeric not scoping. error moving babel-sublime regex to language-babel
  - forms Sound.play = arg => { } not scoping. error moving babel-sublime regex to language-babel

#### 0.3.7
  - Modified JSX spread attribute handling
  - Added trap for bad entity name
  - Added style for JSX attribute names to be italic

#### 0.3.6
  - closes https://github.com/gandm/language-babel/issues/2
  - closes https://github.com/gandm/language-babel/issues/3

#### 0.3.5
  - Permanent removal of invalid element name highlighting

#### 0.3.4
  - Grammar Changes
  - Disabled invalid JSX invalid element name highlight. Firing on < operator erroneously.

#### 0.3.3
  - Grammar Changes
  - Removed pure JSX syntax checking to remove options for namespaced names as per React JSX

#### 0.1.0
  - Intital Releases
