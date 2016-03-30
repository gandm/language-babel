path = require 'path'
grammarTest = require 'atom-grammar-test'

LB = 'language-babel'

describe 'Grammar', ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage(LB)

  # grammar test large files
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/browser-polyfill.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/jquery-2.1.4.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/bundle.js')
  grammarTest path.join(__dirname, 'fixtures/grammar/large files/jquery-2.1.4.min.js')
