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
