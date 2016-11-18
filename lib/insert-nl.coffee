module.exports =
class InsertNl
  constructor: (@editor) ->
    @adviseBefore(@editor, 'insertText', @insertText)

  # patched TextEditor::insertText
  insertText: (text, options) =>
    return true unless ( text is "\n" )
    return true if @editor.hasMultipleCursors() # for time being

    if !@insertNewlineBetweenJSXTags() then return false
    if !@insertNewlineAfterStyledComponentsBackTick() then return false
    true

  # if a newLine is entered between a JSX tag open and close marked_ <div>_</div>
  # then add another newLine and reposition cursor
  insertNewlineBetweenJSXTags: () ->
    cursorBufferPosition = @editor.getCursorBufferPosition()
    return true unless cursorBufferPosition.column > 0
    return true unless 'JSXEndTagStart' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().pop()
    cursorBufferPosition.column--
    return true unless 'JSXStartTagEnd' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().pop()
    indentLength = @editor.indentationForBufferRow(cursorBufferPosition.row)
    @editor.insertText("\n\n")
    @editor.setIndentationForBufferRow cursorBufferPosition.row+1, indentLength+1, { preserveLeadingWhitespace: false }
    @editor.setIndentationForBufferRow cursorBufferPosition.row+2, indentLength, { preserveLeadingWhitespace: false }
    @editor.moveUp()
    @editor.moveToEndOfLine()
    false

  # if a newline is entered after the opening styled component backtick
  # indent cursor and add a closing backtick
  insertNewlineAfterStyledComponentsBackTick: () ->
    cursorBufferPosition = @editor.getCursorBufferPosition()
    return true unless cursorBufferPosition.column > 0
    return true unless 'string.quoted.template.styled.start.js' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().pop()
    cursorBufferPosition.column--
    return true unless 'string.quoted.template.styled.start.js' is @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().pop()
    indentLength = @editor.indentationForBufferRow(cursorBufferPosition.row)
    @editor.insertText("\n\n`")
    @editor.setIndentationForBufferRow cursorBufferPosition.row+1, indentLength+1, { preserveLeadingWhitespace: false }
    @editor.setIndentationForBufferRow cursorBufferPosition.row+2, indentLength, { preserveLeadingWhitespace: false }
    @editor.moveUp()
    @editor.moveToEndOfLine()
    false


  # from https://github.com/atom/underscore-plus/blob/master/src/underscore-plus.coffee
  adviseBefore: (object, methodName, advice) ->
    original = object[methodName]
    object[methodName] = (args...) ->
      unless advice.apply(this, args) == false
        original.apply(this, args)
