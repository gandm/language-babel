path = require 'path'
grammarTest = require 'atom-grammar-test'

describe 'Grammar', ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('language-babel')
    waitsForPromise ->
      atom.packages.activatePackage('language-todo')

  # flow declaration file
  grammarTest path.join(__dirname, 'fixtures/grammar/flow/react.js')

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

  # grammar test large files
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/browser-polyfill.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/jquery-2.1.4.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/bundle.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/jquery-2.1.4.min.js')

  # es2015 check
  grammarTest path.join(__dirname, 'fixtures/grammar/everythingJs/es2015-module.js')

  # todo,jsdoc,...
  grammarTest path.join(__dirname, 'fixtures/grammar/doc-keywords.js')
