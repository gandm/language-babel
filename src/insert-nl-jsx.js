module.exports = class InsertNlJsx {
  constructor(editor) {
    this.insertText = this.insertText.bind(this);
    this.editor = editor;
    this.adviseBefore(this.editor, "insertText", this.insertText);
  }

  insertText(text, options) {
    if (!(text === "\n")) {
      return true;
    }

    if (this.editor.hasMultipleCursors()) {
      return true;
    }

    var cursorBufferPosition = this.editor.getCursorBufferPosition();

    if (!(cursorBufferPosition.column > 0)) {
      return true;
    }

    if ("JSXEndTagStart" !== this.editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().pop()) {
      return true;
    }

    cursorBufferPosition.column--;

    if ("JSXStartTagEnd" !== this.editor.scopeDescriptorForBufferPosition(cursorBufferPosition).getScopesArray().pop()) {
      return true;
    }

    var indentLength = this.editor.indentationForBufferRow(cursorBufferPosition.row);
    this.editor.insertText("\n\n");

    this.editor.setIndentationForBufferRow(cursorBufferPosition.row + 1, indentLength + 1, {
      preserveLeadingWhitespace: false
    });

    this.editor.setIndentationForBufferRow(cursorBufferPosition.row + 2, indentLength, {
      preserveLeadingWhitespace: false
    });

    this.editor.moveUp();
    this.editor.moveToEndOfLine();
    return false;
  }

  adviseBefore(object, methodName, advice) {
    var original = object[methodName];

    return object[methodName] = function(...args) {
      if (advice.apply(this, args) !== false) {
        return original.apply(this, args);
      }
    };
  }
};