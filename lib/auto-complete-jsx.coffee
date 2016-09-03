{Range, Point} = require "atom"
{filter, score} = require "fuzzaldrin"

# tags we are interested in are marked by the grammar
JSXSTARTTAGEND = 0
JSXENDTAGSTART = 1
JSXTAG = 2
JSXATTRIBUTE = 3
# regex to search for tag open/close tag and close tag
JSXREGEXP = /(?:(<)|(<\/))([$_A-Za-z](?:[$._:\-a-zA-Z0-9])*)|(?:(\/>)|(>))/g
TAGREGEXP =  /<([$_a-zA-Z][$._:\-a-zA-Z0-9]*)($|\s|\/>|>)/g
COMPLETIONS = require "./completions-jsx"
REACTURL = "http://facebook.github.io/react/docs/tags-and-attributes.html"

module.exports =
  selector: ".meta.tag.jsx"
  inclusionPriority: 10000
  excludeLowerPriority: false


  getSuggestions: (opts) ->
    {editor, bufferPosition, scopeDescriptor, prefix} = opts
    return if editor.getGrammar().packageName isnt "language-babel"

    jsxTag = @getTriggerTag editor, bufferPosition
    return if not jsxTag?

    # build autocomplete list
    suggestions = []

    if jsxTag is JSXSTARTTAGEND
      startOfJSX = @getStartOfJSX editor, bufferPosition
      jsxRange = new Range(startOfJSX, bufferPosition)
      tagNameStack = @buildTagStack(editor, jsxRange)
      while ( tagName = tagNameStack.pop())?
        suggestions.push
          snippet: "$1</#{tagName}>"
          type: "tag"
          description: "language-babel tag closer"

    else if  jsxTag is JSXENDTAGSTART
      startOfJSX = @getStartOfJSX editor, bufferPosition
      jsxRange = new Range(startOfJSX, bufferPosition)
      tagNameStack = @buildTagStack(editor, jsxRange)
      while ( tagName = tagNameStack.pop())?
        suggestions.push
          snippet: "#{tagName}>"
          type: "tag"
          description: "language-babel tag closer"

    else if jsxTag is JSXTAG
      return if not /^[a-z]/g.exec(prefix)
      htmlElements = filter(COMPLETIONS.htmlElements, prefix, {key: "name"})
      for htmlElement in htmlElements
        if score(htmlElement.name, prefix) < 0.07 then continue
        suggestions.push
          snippet: htmlElement.name
          type: "tag"
          description: "language-babel JSX supported elements"
          descriptionMoreURL: REACTURL

    else if jsxTag is JSXATTRIBUTE
      tagName = @getThisTagName editor, bufferPosition
      return if not tagName?
      for elementObj in COMPLETIONS.htmlElements
        if elementObj.name is tagName then break
      elementObj.attributes = elementObj.attributes.concat COMPLETIONS.globalAttributes
      elementObj.attributes = elementObj.attributes.concat COMPLETIONS.events
      filteredAttributes = filter(elementObj.attributes, prefix, {key: "name"})
      for attribute in filteredAttributes
        if score(attribute.name, prefix) < 0.07 then continue
        suggestions.push
          snippet: attribute.name
          type: "attribute"
          rightLabel: "<#{tagName}>"
          description: "language-babel JSXsupported attributes/events"
          descriptionMoreURL: REACTURL

    else return
    suggestions

  # get tagname for this attribute
  getThisTagName: ( editor, bufferPosition) ->
    row = bufferPosition.row
    column = null
    while row >= 0
      rowText = editor.lineTextForBufferRow(row)
      if not column?
        rowText = rowText.substr 0, column = bufferPosition.column
      matches = []
      while (( match = TAGREGEXP.exec(rowText)) isnt null )
        # save this match if it a valid tag
        scopes = editor.scopeDescriptorForBufferPosition([row, match.index+1]).getScopesArray()
        if "entity.name.tag.open.jsx" in scopes then matches.push match[1]
      # return the tag that is the last one found
      if matches.length
        return matches.pop()
      else row--


  getTriggerTag: (editor, bufferPosition) ->
    # JSX tag scopes we are interested in may already closed once typed
    # so we have to backtrack by one char to see if they were typed
    column = bufferPosition.column-1
    if column >= 0
      scopes = editor.scopeDescriptorForBufferPosition([bufferPosition.row, column]).getScopesArray()
      if "entity.other.attribute-name.jsx" in scopes then return JSXATTRIBUTE
      if "entity.name.tag.open.jsx" in scopes then return JSXTAG
      if "JSXStartTagEnd" in scopes then return JSXSTARTTAGEND
      if "JSXEndTagStart" in scopes then return JSXENDTAGSTART


  # find beggining of JSX in buffer and return Point
  getStartOfJSX: (editor, bufferPosition) ->
    row = bufferPosition.row
    # find previous start of row that has no jsx tag
    while row >= 0
      break if "meta.tag.jsx" not in editor.scopeDescriptorForBufferPosition([row, 0]).getScopesArray()
      row--
    if row < 0 then row = 0
    # maybe jsx appaears later in row
    columnLen = editor.lineTextForBufferRow(row).length
    column = 0
    while column < columnLen
      break if "meta.tag.jsx" in editor.scopeDescriptorForBufferPosition([row, column]).getScopesArray()
      column++
    # adjust row column if jsx not in this row at all
    if column is columnLen
      row++
      column = 0
    new Point(row, column)

  # build stack of tagnames opened but not closed in Range
  buildTagStack: (editor, range) ->
    tagNameStack = []
    row = range.start.row
    while row <= range.end.row
      line = editor.lineTextForBufferRow row
      if row is range.end.row
        line = line.substr 0, range.end.column
      while (( match = JSXREGEXP.exec(line)) isnt null )
        matchColumn = match.index
        matchPointStart = new Point(row, matchColumn)
        matchPointEnd = new Point(row, matchColumn + match[0].length - 1)
        matchRange = new Range(matchPointStart, matchPointEnd)
        if range.intersectsWith(matchRange)
          scopes = editor.scopeDescriptorForBufferPosition([row, match.index]).getScopesArray()
          continue if "punctuation.definition.tag.jsx" not in scopes
          #check capture groups
          if match[1]? # tags starting <tag
            tagNameStack.push match[3]
          else if match[2]? # tags ending </tag
            closedtag = tagNameStack.pop()
            if closedtag isnt match[3]
              tagNameStack.push closedtag
          else if match[4]? # tags ending />
            tagNameStack.pop()
      row++
    tagNameStack
