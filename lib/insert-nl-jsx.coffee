module.exports =
class InsertNlJsx
  constructor: (@editor) ->
    @adviseBefore(@editor, 'insertText', @insertText)

  # patched TextEditor::insertText
  # if a newLine is entered between a JSX tag open and close marked_ <div>_</div>
  # then add another newLine and reposition cursor
  insertText: (text, options) =>
    return true unless ( text is "\n" )
    return true if @editor.hasMultipleCursors() # for time being

    cursorBufferPosition = @editor.getCursorBufferPosition()
    return true unless cursorBufferPosition.column > 0
    return true unless 'JSXEndTagStart' in @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray()
    cursorBufferPosition.column--
    return true unless 'JSXStartTagEnd' in @editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray()
    indentLength = /^\s*\S/.exec(@editor.lineTextForBufferRow(cursorBufferPosition.row))?[0].length
    pad = new Array(indentLength).join(' ')
    @editor.insertText("\n#{pad}#{@editor.getTabText()}\n#{pad}")
    @editor.moveUp()
    @editor.moveToEndOfLine()
    false

  # from https://github.com/atom/underscore-plus/blob/master/src/underscore-plus.coffee
  adviseBefore: (object, methodName, advice) ->
    original = object[methodName]
    object[methodName] = (args...) ->
      unless advice.apply(this, args) == false
        original.apply(this, args)
