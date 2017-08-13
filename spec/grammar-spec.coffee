path = require 'path'
grammarTest = require 'atom-grammar-test'

describe 'Grammar', ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('language-babel')
    waitsForPromise ->
      atom.packages.activatePackage('language-todo')
    waitsForPromise ->
      atom.packages.activatePackage('language-hyperlink')
    waitsForPromise ->
      atom.packages.activatePackage('language-mustache')
    waitsForPromise ->
      atom.packages.activatePackage('language-html')

  # test private class fields and methods
  grammarTest path.join(__dirname, 'fixtures/grammar/private-fields.js')

  # babel-sublime test files
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/flow.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/js-class.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/js-functions.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/js-symbols.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/js-template-strings.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/jsx-attributes.jsx')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/jsx-es6.jsx')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/jsx-features.jsx')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/jsx-full-react-class.jsx')
  grammarTest path.join(__dirname, 'fixtures/grammar/babel-sublime/jsx-text.jsx')

  # flow declaration file
  grammarTest path.join(__dirname, 'fixtures/grammar/declare.js')

  # grammar test large files
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/browser-polyfill.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/jquery-2.1.4.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/bundle.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/jquery-2.1.4.min.js')

  # # es2015 check
  grammarTest path.join(__dirname, 'fixtures/grammar/everythingJs/es2015-module.js')

  # todo,jsdoc,...
  grammarTest path.join(__dirname, 'fixtures/grammar/doc-keywords.js')

  # flow predicates...
  grammarTest path.join(__dirname, 'fixtures/grammar/flow-predicates.js')

  # issues raised
  grammarTest path.join(__dirname, 'fixtures/grammar/issues.js')

  # misc Tests
  grammarTest path.join(__dirname, 'fixtures/grammar/misc.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/es6module.js')

  # graphql test
  grammarTest path.join(__dirname, 'fixtures/grammar/graphql.js')
