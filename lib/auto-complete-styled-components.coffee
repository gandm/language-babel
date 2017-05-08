# This code was based upon https://github.com/atom/autocomplete-css but has been modified to allow it to be used
# for styled-componenets. The completions.json file used to auto complete is a copy of the one used by the atom
# package. That package, provided as an Atom base package, has tools to update the completions.json file from the web.
# See that package for more info and just copy the completions.json to this files directory when a refresh is needed.

fs = require 'fs'
path = require 'path'

firstInlinePropertyNameWithColonPattern = /{\s*(\S+)\s*:/ # .example { display: }
inlinePropertyNameWithColonPattern = /(?:;.+?)*;\s*(\S+)\s*:/ # .example { display: block; float: left; color: } (match the last one)
propertyNameWithColonPattern = /^\s*(\S+)\s*:/ # display:
propertyNamePrefixPattern = /[a-zA-Z]+[-a-zA-Z]*$/
pesudoSelectorPrefixPattern = /:(:)?([a-z]+[a-z-]*)?$/
tagSelectorPrefixPattern = /(^|\s|,)([a-z]+)?$/
importantPrefixPattern = /(![a-z]+)$/
cssDocsURL = "https://developer.mozilla.org/en-US/docs/Web/CSS"

module.exports =
  selector: '.source.inside-js.css.styled, .source.css.styled'
  disableForSelector: ".source.inside-js.css.styled .comment, .source.inside-js.css.styled .string, .source.inside-js.css.styled .entity.quasi.element.js, .source.css.styled .comment, .source.css.styled .string, .source.css.styled .entity.quasi.element.js"

  filterSuggestions: true
  inclusionPriority: 10000
  excludeLowerPriority: false

  getSuggestions: (request) ->
    completions = null
    scopes = request.scopeDescriptor.getScopesArray()

    if @isCompletingValue(request)
      completions = @getPropertyValueCompletions(request)
    else if @isCompletingPseudoSelector(request)
      completions = @getPseudoSelectorCompletions(request)
    else
      if @isCompletingName(request)
        completions = @getPropertyNameCompletions(request)
      else if @isCompletingNameOrTag(request)
        completions = @getPropertyNameCompletions(request)
          .concat(@getTagCompletions(request))

    return completions

  onDidInsertSuggestion: ({editor, suggestion}) ->
    setTimeout(@triggerAutocomplete.bind(this, editor), 1) if suggestion.type is 'property'

  triggerAutocomplete: (editor) ->
    atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', {activatedManually: false})

  loadProperties: ->
    @properties = {}
    fs.readFile path.resolve(__dirname, 'completions.json'), (error, content) =>
      {@pseudoSelectors, @properties, @tags} = JSON.parse(content) unless error?

      return

  isCompletingValue: ({scopeDescriptor, bufferPosition, prefix, editor}) ->
    scopes = scopeDescriptor.getScopesArray()

    beforePrefixBufferPosition = [bufferPosition.row, Math.max(0, bufferPosition.column - prefix.length - 1)]
    beforePrefixScopes = editor.scopeDescriptorForBufferPosition(beforePrefixBufferPosition)
    beforePrefixScopesArray = beforePrefixScopes.getScopesArray()

    return (hasScope(scopes, 'meta.property-values.css')) or
      (hasScope(beforePrefixScopesArray , 'meta.property-values.css'))

  isCompletingName: ({scopeDescriptor, bufferPosition, editor}) ->
    scope = scopeDescriptor.getScopesArray().slice(-1)
    prefix = @getPropertyNamePrefix(bufferPosition, editor)
    return @isPropertyNamePrefix(prefix) and (scope[0] is 'meta.property-list.css')

  isCompletingNameOrTag: ({scopeDescriptor, bufferPosition, editor}) ->
    scope = scopeDescriptor.getScopesArray().slice(-1)
    prefix = @getPropertyNamePrefix(bufferPosition, editor)
    return @isPropertyNamePrefix(prefix) and
     ((scope[0] is 'meta.property-list.css') or
      (scope[0] is 'source.css.styled') or
      (scope[0] is 'entity.name.tag.css') or
      (scope[0] is 'source.inside-js.css.styled'))

  isCompletingPseudoSelector: ({editor, scopeDescriptor, bufferPosition}) ->
    scope = scopeDescriptor.getScopesArray().slice(-1)
    return ( ( scope[0] is 'constant.language.pseudo.prefixed.css') or
      ( scope[0] is 'keyword.operator.pseudo.css') )

  isPropertyValuePrefix: (prefix) ->
    prefix = prefix.trim()
    prefix.length > 0 and prefix isnt ':'

  isPropertyNamePrefix: (prefix) ->
    return false unless prefix?
    prefix = prefix.trim()
    prefix.match(/^[a-zA-Z-]+$/)

  getImportantPrefix: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    importantPrefixPattern.exec(line)?[1]

  getPreviousPropertyName: (bufferPosition, editor) ->
    {row} = bufferPosition
    while row >= 0
      line = editor.lineTextForBufferRow(row)
      propertyName = inlinePropertyNameWithColonPattern.exec(line)?[1]
      propertyName ?= firstInlinePropertyNameWithColonPattern.exec(line)?[1]
      propertyName ?= propertyNameWithColonPattern.exec(line)?[1]
      return propertyName if propertyName
      row--
    return

  getPropertyValueCompletions: ({bufferPosition, editor, prefix, scopeDescriptor}) ->
    property = @getPreviousPropertyName(bufferPosition, editor)
    values = @properties[property]?.values
    return null unless values?

    scopes = scopeDescriptor.getScopesArray()
    addSemicolon = not lineEndsWithSemicolon(bufferPosition, editor)

    completions = []
    if @isPropertyValuePrefix(prefix)
      for value in values when firstCharsEqual(value, prefix)
        completions.push(@buildPropertyValueCompletion(value, property, addSemicolon))
    else
      for value in values
        completions.push(@buildPropertyValueCompletion(value, property, addSemicolon))

    if importantPrefix = @getImportantPrefix(editor, bufferPosition)
      completions.push
        type: 'keyword'
        text: '!important'
        displayText: '!important'
        replacementPrefix: importantPrefix
        description: "Forces this property to override any other declaration of the same property. Use with caution."
        descriptionMoreURL: "#{cssDocsURL}/Specificity#The_!important_exception"

    completions

  buildPropertyValueCompletion: (value, propertyName, addSemicolon) ->
    text = value
    text += ';' if addSemicolon
    text = makeSnippet(text)

    {
      type: 'value'
      snippet: text
      displayText: value
      description: "#{value} value for the #{propertyName} property"
      descriptionMoreURL: "#{cssDocsURL}/#{propertyName}#Values"
    }

  getPropertyNamePrefix: (bufferPosition, editor) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    propertyNamePrefixPattern.exec(line)?[0]

  getPropertyNameCompletions: ({bufferPosition, editor, scopeDescriptor, activatedManually}) ->
    scopes = scopeDescriptor.getScopesArray()
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])

    prefix = @getPropertyNamePrefix(bufferPosition, editor)
    return [] unless activatedManually or prefix

    completions = []
    for property, options of @properties when not prefix or firstCharsEqual(property, prefix)
      completions.push(@buildPropertyNameCompletion(property, prefix, options))
    completions

  buildPropertyNameCompletion: (propertyName, prefix, {description}) ->
    type: 'property'
    text: "#{propertyName}: "
    displayText: propertyName
    replacementPrefix: prefix
    description: description
    descriptionMoreURL: "#{cssDocsURL}/#{propertyName}"

  getPseudoSelectorPrefix: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    line.match(pesudoSelectorPrefixPattern)?[0]

  getPseudoSelectorCompletions: ({bufferPosition, editor}) ->
    prefix = @getPseudoSelectorPrefix(editor, bufferPosition)
    return null unless prefix

    completions = []
    for pseudoSelector, options of @pseudoSelectors when firstCharsEqual(pseudoSelector, prefix)
      completions.push(@buildPseudoSelectorCompletion(pseudoSelector, prefix, options))
    completions

  buildPseudoSelectorCompletion: (pseudoSelector, prefix, {argument, description}) ->
    completion =
      type: 'pseudo-selector'
      replacementPrefix: prefix
      description: description
      descriptionMoreURL: "#{cssDocsURL}/#{pseudoSelector}"

    if argument?
      completion.snippet = "#{pseudoSelector}(${1:#{argument}})"
    else
      completion.text = pseudoSelector
    completion

  getTagSelectorPrefix: (editor, bufferPosition) ->
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    tagSelectorPrefixPattern.exec(line)?[2]

  getTagCompletions: ({bufferPosition, editor, prefix}) ->
    completions = []
    if prefix
      for tag in @tags when firstCharsEqual(tag, prefix)
        completions.push(@buildTagCompletion(tag))
    completions

  buildTagCompletion: (tag) ->
    type: 'tag'
    text: tag
    description: "Selector for <#{tag}> elements"

lineEndsWithSemicolon = (bufferPosition, editor) ->
  {row} = bufferPosition
  line = editor.lineTextForBufferRow(row)
  /;\s*$/.test(line)

hasScope = (scopesArray, scope) ->
  scopesArray.indexOf(scope) isnt -1

firstCharsEqual = (str1, str2) ->
  str1[0].toLowerCase() is str2[0].toLowerCase()

# looks at a string and replaces consecutive () with incrementing snippet positions ($n)
# It also adds a trailing $n at end of text
# e.g translate() becomes translate($1)$2
makeSnippet = (text)  ->
  snippetNumber = 0
  while text.includes('()')
    text = text.replace('()', "($#{++snippetNumber})")
  text = text + "$#{++snippetNumber}"
  return text
