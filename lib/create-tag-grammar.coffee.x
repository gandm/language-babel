crypto = require 'crypto'
fs = require 'fs-plus'
path = require 'path'


module.exports =
class CreateTagGrammar

  constructor: () ->
    @disposables = atom.config.observe 'language-babel:templateTagHandlers', @observeTagConfig

  # create a new tag grammar file
  createTagGrammarFile: (tagFileName) ->
    tagFilenameAbsoulte = @grammarFileAbsolute() tagFileName

  # current tag filename based on a SHA256
  generateTagGrammarFilename: () ->
    "tags-"+@generateTagSHA256()

    # get full path to the language-babel grammar file dir
  getGrammarPath: () ->
    path.normalize path.resolve atom.packages.loadedPackages['language-babel'].path,'./grammars'

  # read configurations for tags
  getTagConfig: () ->
    debugger
    return atom.config.get('language-babel').templateTagHandlers

  # get an array of all language-babel grammar files
  getGrammarFiles: () ->
    fs.readdirSync @getGrammarPath()

  # get an array of grammar tag extension files
  getTagGrammarFiles: () ->
    regex = /tags-/
    @getGrammarFiles().filter (grammarFilename) ->
      return regex.test grammarFilename

  # generate a SHA256 for the tag grammar filenames based on the tag config
  generateTagSHA256: () ->
    hash = crypto.createHash('sha256')
    hash.update @getTagConfig().toString()
    hash.digest('hex')

  # observe tag configuration and act
  observeTagConfig: () =>
    # Do we already have a grammar for this tag definition
    tagFilename = @generateTagGrammarFilename()
    if not @grammarFileExists tagFilename then return
    @removeTagLanguageFiles @getTagGrammarFiles()
    @createTagGrammarFile tagFilename

  # remove all language files in tagGrammarFiles array
  removeTagLanguageFiles: (tagGrammarFiles) ->
    for tagGrammarFile in tagGrammarFiles
      tagGrammarFileAbsoulte = @grammarFileAbsolute tagGrammarFile
      if @grammarFileExists tagGrammarFileAbsoulte
        fs.unlinkSync tagGrammarFileAbsoulte

  # does a filename exist
  grammarFileExists: (tagFilename)  ->
    try
      fs.accessSync @grammarFileAbsolute(), fs.F_OK
      return true
    catch error
      return false

  # is a filename read/write
  isGrammarFileReadWrite: (tagFilename)  ->
    try
      fs.accessSync @grammarFileAbsolute(), fs.R_OK | fs.W_OK
      return true
    catch error
      return false

  # get a fully qualified filename
  grammarFileAbsolute: (tagFilename) ->
    path.resolve @getGrammarPath(), tagFilename
