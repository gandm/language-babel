module.exports =
class DidInsertText
  constructor: (@editor) ->
    @adviseBefore(@editor, 'insertText', @insertText)

  # patched TextEditor::insertText
  insertText: (text, options) =>
    return true if @editor.hasMultipleCursors() # for time being

    if ( text is "\n")
      if !@insertNewlineBetweenJSXTags() then return false
      if !@insertNewlineAfterBacktick() then return false
    else if ( text is "`")
      if !@insertBackTick() then return false
    true

  # check bracket-matcher package config to determine backtick insertion
  bracketMatcherBackticks: () ->
    return atom.packages.isPackageActive("bracket-matcher") and
      atom.config.get("bracket-matcher.autocompleteBrackets") and
      "``" in atom.config.get("bracket-matcher.autocompleteCharacters")

  # if a newLine is entered between a JSX tag open and close marked_ <div>_</div>
  # then add another newLine and reposition cursor
  insertNewlineBetweenJSXTags: () ->
    cursorBufferPosition = @editor.getCursorBufferPosition()
    return true unless cursorBufferPosition.column > 0
    return true unless 'JSXEndTagStart' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().slice(-1).toString()
    cursorBufferPosition.column--
    return true unless 'JSXStartTagEnd' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().slice(-1).toString()
    indentLength = @editor.indentationForBufferRow(cursorBufferPosition.row)
    @editor.insertText("\n\n")
    @editor.setIndentationForBufferRow cursorBufferPosition.row+1, indentLength+1, { preserveLeadingWhitespace: false }
    @editor.setIndentationForBufferRow cursorBufferPosition.row+2, indentLength, { preserveLeadingWhitespace: false }
    @editor.moveUp()
    @editor.moveToEndOfLine()
    false

  # if a newline is entered after the opening backtick
  # indent cursor and add a closing backtick
  insertNewlineAfterBacktick: () ->
    cursorBufferPosition = @editor.getCursorBufferPosition()
    return true unless cursorBufferPosition.column > 0
    betweenBackTicks = 'punctuation.definition.quasi.end.js' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().slice(-1).toString()
    cursorBufferPosition.column--
    return true unless 'punctuation.definition.quasi.begin.js' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().slice(-1).toString()
    indentLength = @editor.indentationForBufferRow(cursorBufferPosition.row)
    return true unless @bracketMatcherBackticks()
    if (betweenBackTicks)
      @editor.insertText("\n\n")
      @editor.setIndentationForBufferRow cursorBufferPosition.row+1, indentLength+1, { preserveLeadingWhitespace: false }
      @editor.setIndentationForBufferRow cursorBufferPosition.row+2, indentLength, { preserveLeadingWhitespace: false }
      @editor.moveUp()
      @editor.moveToEndOfLine()
    else
      @editor.insertText("\n\t")
      @editor.setIndentationForBufferRow cursorBufferPosition.row+1, indentLength+1, { preserveLeadingWhitespace: false }
    false

  # the atom bracket matcher doesn't currently ( v1.15) add a closing backtick when the opening
  # backtick appears after a word character as is the case in a tagname`` sequence
  # this remedies that
  insertBackTick: () ->
    return true unless @bracketMatcherBackticks()
    cursorBufferPosition = @editor.getCursorBufferPosition()
    return true if 'punctuation.definition.quasi.begin.js' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().slice(-1).toString()
    selectedText = @editor.getSelectedText()
    cursorPosition = @editor.getCursorBufferPosition()
    @editor.insertText("`" + selectedText + "`")
    @editor.setCursorBufferPosition(cursorPosition)
    @editor.moveRight()
    false


  # from https://github.com/atom/underscore-plus/blob/master/src/underscore-plus.coffee
  adviseBefore: (object, methodName, advice) ->
    original = object[methodName]
    object[methodName] = (args...) ->
      unless advice.apply(this, args) == false
        original.apply(this, args)
