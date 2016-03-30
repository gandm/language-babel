path = require 'path'
grammarTest = require 'atom-grammar-test'

LB = 'language-babel'

describe 'Grammar', ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage(LB)

  # es2015 check
  grammarTest path.join(__dirname, 'fixtures/grammar/everythingJs/es2015-module.js')
