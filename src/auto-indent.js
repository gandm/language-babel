var {
  CompositeDisposable,
  File,
  Range,
  Point
} = require("atom");

var fs = require("fs-plus");
var path = require("path");
var autoCompleteJSX = require("./auto-complete-jsx");
var InsertNlJsx = require("./insert-nl-jsx");
var stripJsonComments = require("strip-json-comments");
var YAML = require("js-yaml");
var NO_TOKEN = 0;
var JSXTAG_SELFCLOSE_START = 1;
var JSXTAG_SELFCLOSE_END = 2;
var JSXTAG_OPEN = 3;
var JSXTAG_CLOSE_ATTRS = 4;
var JSXTAG_CLOSE = 5;
var JSXBRACE_OPEN = 6;
var JSXBRACE_CLOSE = 7;
var BRACE_OPEN = 8;
var BRACE_CLOSE = 9;
var TERNARY_IF = 10;
var TERNARY_ELSE = 11;
var JS_IF = 12;
var JS_ELSE = 13;
var SWITCH_BRACE_OPEN = 14;
var SWITCH_BRACE_CLOSE = 15;
var SWITCH_CASE = 16;
var SWITCH_DEFAULT = 17;
var JS_RETURN = 18;
var TAGALIGNED = "tag-aligned";
var LINEALIGNED = "line-aligned";
var AFTERPROPS = "after-props";
var PROPSALIGNED = "props-aligned";

module.exports = class AutoIndent {
  constructor(editor) {
    this.changedCursorPosition = this.changedCursorPosition.bind(this);
    this.handleOnDidStopChanging = this.handleOnDidStopChanging.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.editor = editor;
    this.insertNlJsx = new InsertNlJsx(this.editor);
    this.autoJsx = atom.config.get("language-babel").autoIndentJSX;
    this.JSXREGEXP = /(<)([$_A-Za-z](?:[$_.:\-A-Za-z0-9])*)|(\/>)|(<\/)([$_A-Za-z](?:[$._:\-A-Za-z0-9])*)(>)|(>)|({)|(})|(\?)|(:)|(if)|(else)|(case)|(default)|(return)/g;
    this.mouseUp = true;
    this.multipleCursorTrigger = 1;
    this.disposables = new CompositeDisposable();
    this.eslintIndentOptions = this.getIndentOptions();

    this.disposables.add(atom.commands.add("atom-text-editor", {
      "language-babel:auto-indent-jsx-on": event => {
        this.autoJsx = true;
        return this.eslintIndentOptions = this.getIndentOptions();
      }
    }));

    this.disposables.add(atom.commands.add("atom-text-editor", {
      "language-babel:auto-indent-jsx-off": event => {
        return this.autoJsx = false;
      }
    }));

    this.disposables.add(atom.commands.add("atom-text-editor", {
      "language-babel:toggle-auto-indent-jsx": event => {
        this.autoJsx = !this.autoJsx;

        if (this.autoJsx) {
          return this.eslintIndentOptions = this.getIndentOptions();
        }
      }
    }));

    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("mouseup", this.onMouseUp);

    this.disposables.add(this.editor.onDidChangeCursorPosition(event => {
      return this.changedCursorPosition(event);
    }));

    this.handleOnDidStopChanging();
  }

  destroy() {
    this.disposables.dispose();
    this.onDidStopChangingHandler.dispose();
    document.removeEventListener("mousedown", this.onMouseDown);
    return document.removeEventListener("mouseup", this.onMouseUp);
  }

  changedCursorPosition(event) {
    var ref1;
    var ref;
    var blankLineEndPos;
    var cursorPositions;

    if (!this.autoJsx) {
      return;
    }

    if (!this.mouseUp) {
      return;
    }

    if (event.oldBufferPosition.row === event.newBufferPosition.row) {
      return;
    }

    var bufferRow = event.newBufferPosition.row;

    if (this.editor.hasMultipleCursors()) {
      cursorPositions = this.editor.getCursorBufferPositions();

      if (cursorPositions.length === this.multipleCursorTrigger) {
        this.multipleCursorTrigger = 1;
        bufferRow = 0;

        for (var cursorPosition of cursorPositions) {
          if (cursorPosition.row > bufferRow) {
            bufferRow = cursorPosition.row;
          }
        }
      } else {
        this.multipleCursorTrigger++;
        return;
      }
    } else {
      cursorPosition = event.newBufferPosition;
    }

    var previousRow = event.oldBufferPosition.row;

    if (this.jsxInScope(previousRow)) {
      blankLineEndPos = (ref = /^\s*$/.exec(this.editor.lineTextForBufferRow(previousRow))) != null ? ref[0].length : void 0;

      if (blankLineEndPos != null) {
        this.indentRow({
          row: previousRow,
          blockIndent: 0
        });
      }
    }

    if (!this.jsxInScope(bufferRow)) {
      return;
    }

    var endPointOfJsx = new Point(bufferRow, 0);
    var startPointOfJsx = autoCompleteJSX.getStartOfJSX(this.editor, cursorPosition);
    this.indentJSX(new Range(startPointOfJsx, endPointOfJsx));
    var columnToMoveTo = (ref1 = /^\s*$/.exec(this.editor.lineTextForBufferRow(bufferRow))) != null ? ref1[0].length : void 0;

    if (columnToMoveTo != null) {
      return this.editor.setCursorBufferPosition([bufferRow, columnToMoveTo]);
    }
  }

  didStopChanging() {
    var startPointOfJsx;
    var endPointOfJsx;

    if (!this.autoJsx) {
      return;
    }

    if (!this.mouseUp) {
      return;
    }

    var selectedRange = this.editor.getSelectedBufferRange();

    if (selectedRange.start.row === selectedRange.end.row && selectedRange.start.column === selectedRange.end.column && this.editor.scopeDescriptorForBufferPosition([selectedRange.start.row, selectedRange.start.column]).getScopesArray().includes("JSXStartTagEnd")) {
      return;
    }

    var highestRow = Math.max(selectedRange.start.row, selectedRange.end.row);
    var lowestRow = Math.min(selectedRange.start.row, selectedRange.end.row);
    this.onDidStopChangingHandler.dispose();

    while ((highestRow >= lowestRow)) {
      if (this.jsxInScope(highestRow)) {
        endPointOfJsx = new Point(highestRow, 0);
        startPointOfJsx = autoCompleteJSX.getStartOfJSX(this.editor, endPointOfJsx);
        this.indentJSX(new Range(startPointOfJsx, endPointOfJsx));
        highestRow = startPointOfJsx.row - 1;
      } else {
        highestRow = highestRow - 1;
      }
    }

    setTimeout(this.handleOnDidStopChanging, 300);
    return;
  }

  handleOnDidStopChanging() {
    return this.onDidStopChangingHandler = this.editor.onDidStopChanging(() => {
      return this.didStopChanging();
    });
  }

  jsxInScope(bufferRow) {
    var scopes = this.editor.scopeDescriptorForBufferPosition([bufferRow, 0]).getScopesArray();
    return scopes.includes("meta.tag.jsx");
  }

  indentJSX(range) {
    var tokenStack = [];
    var idxOfToken = 0;
    var stackOfTokensStillOpen = [];
    var indent = 0;
    var isFirstTagOfBlock = true;
    this.JSXREGEXP.lastIndex = 0;

    return (() => {
      var ref;
      var blankLineEndPos;
      var parentTokenIdx;
      var firstTagInLineIndentation;
      var tokenIndentation;
      var token;
      var match;

      for (var row of (function() {
        var ref1;
        var results = [];

        for (var i = ref1 = range.start.row, ref2 = range.end.row; (ref1 <= ref2 ? i <= ref2 : i >= ref2); (ref1 <= ref2 ? i++ : i--)) {
            results.push(i);
        }

        return results;
      }).apply(this)) {
        var isFirstTokenOfLine = true;
        var tokenOnThisLine = false;
        var indentRecalc = false;
        var line = this.editor.lineTextForBufferRow(row);

        while (((match = this.JSXREGEXP.exec(line)) !== null)) {
          var matchColumn = match.index;
          var matchPointStart = new Point(row, matchColumn);
          var matchPointEnd = new Point(row, matchColumn + match[0].length - 1);
          var matchRange = new Range(matchPointStart, matchPointEnd);

          if (!(token = this.getToken(row, match))) {
            continue;
          }

          var firstCharIndentation = (this.editor.indentationForBufferRow(row));

          if (this.editor.getSoftTabs()) {
            tokenIndentation = (matchColumn / this.editor.getTabLength());
          } else {
            tokenIndentation = function(editor) {
              var charsFound;
              this.editor = editor;
              var hardTabsFound = charsFound = 0;

              for (var i of (function() {
                  var results = [];

                  for (var i = 0; (0 <= matchColumn ? i < matchColumn : i > matchColumn); (0 <= matchColumn ? i++ : i--)) {
                      results.push(i);
                  }

                  return results;
              }).apply(this)) {
                if (((line.substr(i, 1)) === "\t")) {
                  hardTabsFound++;
                } else {
                  charsFound++;
                }
              }

              return hardTabsFound + (charsFound / this.editor.getTabLength());
            }(this.editor);
          }

          if (isFirstTokenOfLine) {
            firstTagInLineIndentation = tokenIndentation;
          }

          switch ((token)) {
          case JSXTAG_OPEN:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (isFirstTagOfBlock && (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) && tokenStack[parentTokenIdx].type === BRACE_OPEN && tokenStack[parentTokenIdx].row === (row - 1)) {
                tokenIndentation = firstCharIndentation = firstTagInLineIndentation = this.eslintIndentOptions.jsxIndent[1] + this.getIndentOfPreviousRow(row);

                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: firstCharIndentation
                });
              } else if (isFirstTagOfBlock && (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null)) {
                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: this.getIndentOfPreviousRow(row),
                  jsxIndent: 1
                });
              } else if (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) {
                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: tokenStack[parentTokenIdx].firstCharIndentation,
                  jsxIndent: 1
                });
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTokenOfLine = false;
            isFirstTagOfBlock = false;
            stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

            tokenStack.push({
              type: JSXTAG_OPEN,
              name: match[2],
              row: row,
              firstTagInLineIndentation: firstTagInLineIndentation,
              tokenIndentation: tokenIndentation,
              firstCharIndentation: firstCharIndentation,
              parentTokenIdx: parentTokenIdx,
              termsThisTagsAttributesIdx: null,
              termsThisTagIdx: null
            });

            stackOfTokensStillOpen.push(idxOfToken);
            idxOfToken++;
            break;
          case JSXTAG_CLOSE:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              indentRecalc = this.indentRow({
                row: row,
                blockIndent: tokenStack[parentTokenIdx].firstCharIndentation
              });
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTokenOfLine = false;
            isFirstTagOfBlock = false;
            parentTokenIdx = stackOfTokensStillOpen.pop();

            tokenStack.push({
              type: JSXTAG_CLOSE,
              name: match[5],
              row: row,
              parentTokenIdx: parentTokenIdx
            });

            if (parentTokenIdx >= 0) {
              tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken;
            }

            idxOfToken++;
            break;
          case JSXTAG_SELFCLOSE_END:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (firstTagInLineIndentation === firstCharIndentation) {
                indentRecalc = this.indentForClosingBracket(
                  row,
                  tokenStack[parentTokenIdx],
                  this.eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing
                );
              } else {
                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: tokenStack[parentTokenIdx].firstTagInLineIndentation,
                  jsxIndentProps: 1
                });
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTagOfBlock = false;
            isFirstTokenOfLine = false;
            parentTokenIdx = stackOfTokensStillOpen.pop();

            tokenStack.push({
              type: JSXTAG_SELFCLOSE_END,
              name: tokenStack[parentTokenIdx].name,
              row: row,
              parentTokenIdx: parentTokenIdx
            });

            if (parentTokenIdx >= 0) {
              tokenStack[parentTokenIdx].termsThisTagsAttributesIdx = idxOfToken;
              tokenStack[parentTokenIdx].type = JSXTAG_SELFCLOSE_START;
              tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken;
            }

            idxOfToken++;
            break;
          case JSXTAG_CLOSE_ATTRS:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (firstTagInLineIndentation === firstCharIndentation) {
                indentRecalc = this.indentForClosingBracket(
                  row,
                  tokenStack[parentTokenIdx],
                  this.eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty
                );
              } else {
                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: tokenStack[parentTokenIdx].firstTagInLineIndentation,
                  jsxIndentProps: 1
                });
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTagOfBlock = false;
            isFirstTokenOfLine = false;
            stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

            tokenStack.push({
              type: JSXTAG_CLOSE_ATTRS,
              name: tokenStack[parentTokenIdx].name,
              row: row,
              parentTokenIdx: parentTokenIdx
            });

            if (parentTokenIdx >= 0) {
              tokenStack[parentTokenIdx].termsThisTagsAttributesIdx = idxOfToken;
            }

            idxOfToken++;
            break;
          case JSXBRACE_OPEN:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) {
                if (tokenStack[parentTokenIdx].type === JSXTAG_OPEN && tokenStack[parentTokenIdx].termsThisTagsAttributesIdx === null) {
                  indentRecalc = this.indentRow({
                    row: row,
                    blockIndent: tokenStack[parentTokenIdx].firstCharIndentation,
                    jsxIndentProps: 1
                  });
                } else {
                  indentRecalc = this.indentRow({
                    row: row,
                    blockIndent: tokenStack[parentTokenIdx].firstCharIndentation,
                    jsxIndent: 1
                  });
                }
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTagOfBlock = true;
            isFirstTokenOfLine = false;
            stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

            tokenStack.push({
              type: JSXBRACE_OPEN,
              name: "",
              row: row,
              firstTagInLineIndentation: firstTagInLineIndentation,
              tokenIndentation: tokenIndentation,
              firstCharIndentation: firstCharIndentation,
              parentTokenIdx: parentTokenIdx,
              termsThisTagsAttributesIdx: null,
              termsThisTagIdx: null
            });

            stackOfTokensStillOpen.push(idxOfToken);
            idxOfToken++;
            break;
          case JSXBRACE_CLOSE:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              indentRecalc = this.indentRow({
                row: row,
                blockIndent: tokenStack[parentTokenIdx].firstCharIndentation
              });
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTagOfBlock = false;
            isFirstTokenOfLine = false;
            parentTokenIdx = stackOfTokensStillOpen.pop();

            tokenStack.push({
              type: JSXBRACE_CLOSE,
              name: "",
              row: row,
              parentTokenIdx: parentTokenIdx
            });

            if (parentTokenIdx >= 0) {
              tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken;
            }

            idxOfToken++;
            break;
          case BRACE_OPEN:
          case SWITCH_BRACE_OPEN:
            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (isFirstTagOfBlock && (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) && tokenStack[parentTokenIdx].type === token && tokenStack[parentTokenIdx].row === (row - 1)) {
                tokenIndentation = firstCharIndentation = this.eslintIndentOptions.jsxIndent[1] + this.getIndentOfPreviousRow(row);

                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: firstCharIndentation
                });
              } else if (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) {
                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: tokenStack[parentTokenIdx].firstCharIndentation,
                  jsxIndent: 1
                });
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTokenOfLine = false;
            stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

            tokenStack.push({
              type: token,
              name: "",
              row: row,
              firstTagInLineIndentation: firstTagInLineIndentation,
              tokenIndentation: tokenIndentation,
              firstCharIndentation: firstCharIndentation,
              parentTokenIdx: parentTokenIdx,
              termsThisTagsAttributesIdx: null,
              termsThisTagIdx: null
            });

            stackOfTokensStillOpen.push(idxOfToken);
            idxOfToken++;
            break;
          case BRACE_CLOSE:
          case SWITCH_BRACE_CLOSE:
            if (token === SWITCH_BRACE_CLOSE) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (tokenStack[parentTokenIdx].type === SWITCH_CASE || tokenStack[parentTokenIdx].type === SWITCH_DEFAULT) {
                stackOfTokensStillOpen.pop();
              }
            }

            tokenOnThisLine = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) {
                indentRecalc = this.indentRow({
                  row: row,
                  blockIndent: tokenStack[parentTokenIdx].firstCharIndentation
                });
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTokenOfLine = false;
            parentTokenIdx = stackOfTokensStillOpen.pop();

            if (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) {
              tokenStack.push({
                type: token,
                name: "",
                row: row,
                parentTokenIdx: parentTokenIdx
              });

              if (parentTokenIdx >= 0) {
                tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken;
              }

              idxOfToken++;
            }

            break;
          case SWITCH_CASE:
          case SWITCH_DEFAULT:
            tokenOnThisLine = true;
            isFirstTagOfBlock = true;

            if (isFirstTokenOfLine) {
              stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

              if (typeof parentTokenIdx !== "undefined" && parentTokenIdx !== null) {
                if (tokenStack[parentTokenIdx].type === SWITCH_CASE || tokenStack[parentTokenIdx].type === SWITCH_DEFAULT) {
                  indentRecalc = this.indentRow({
                    row: row,
                    blockIndent: tokenStack[parentTokenIdx].firstCharIndentation
                  });

                  stackOfTokensStillOpen.pop();
                } else if (tokenStack[parentTokenIdx].type === SWITCH_BRACE_OPEN) {
                  indentRecalc = this.indentRow({
                    row: row,
                    blockIndent: tokenStack[parentTokenIdx].firstCharIndentation,
                    jsxIndent: 1
                  });
                }
              }
            }

            if (indentRecalc) {
              line = this.editor.lineTextForBufferRow(row);
              this.JSXREGEXP.lastIndex = 0;
              continue;
            }

            isFirstTokenOfLine = false;
            stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());

            tokenStack.push({
              type: token,
              name: "",
              row: row,
              firstTagInLineIndentation: firstTagInLineIndentation,
              tokenIndentation: tokenIndentation,
              firstCharIndentation: firstCharIndentation,
              parentTokenIdx: parentTokenIdx,
              termsThisTagsAttributesIdx: null,
              termsThisTagIdx: null
            });

            stackOfTokensStillOpen.push(idxOfToken);
            idxOfToken++;
            break;
          case TERNARY_IF:
          case JS_IF:
          case JS_ELSE:
          case JS_RETURN:
            isFirstTagOfBlock = true;
          }
        }

        if (idxOfToken && !tokenOnThisLine) {
          if (row !== range.end.row) {
            blankLineEndPos = (ref = /^\s*$/.exec(this.editor.lineTextForBufferRow(row))) != null ? ref[0].length : void 0;

            if (blankLineEndPos != null) {
              this.indentRow({
                row: row,
                blockIndent: 0
              });
            } else {
              this.indentUntokenisedLine(row, tokenStack, stackOfTokensStillOpen);
            }
          } else {
            this.indentUntokenisedLine(row, tokenStack, stackOfTokensStillOpen);
          }
        }
      }
    })();
  }

  indentUntokenisedLine(row, tokenStack, stackOfTokensStillOpen) {
    var parentTokenIdx;
    stackOfTokensStillOpen.push(parentTokenIdx = stackOfTokensStillOpen.pop());
    var token = tokenStack[parentTokenIdx];

    switch (token.type) {
    case JSXTAG_OPEN:
    case JSXTAG_SELFCLOSE_START:
      if (token.termsThisTagsAttributesIdx === null) {
        return this.indentRow({
          row: row,
          blockIndent: token.firstCharIndentation,
          jsxIndentProps: 1
        });
      } else {
        return this.indentRow({
          row: row,
          blockIndent: token.firstCharIndentation,
          jsxIndent: 1
        });
      }

      break;
    case JSXBRACE_OPEN:
      return this.indentRow({
        row: row,
        blockIndent: token.firstCharIndentation,
        jsxIndent: 1
      });
    case BRACE_OPEN:
    case SWITCH_BRACE_OPEN:
      return this.indentRow({
        row: row,
        blockIndent: token.firstCharIndentation,
        jsxIndent: 1
      });
    case JSXTAG_SELFCLOSE_END:
    case JSXBRACE_CLOSE:
    case JSXTAG_CLOSE_ATTRS:
      return this.indentRow({
        row: row,
        blockIndent: tokenStack[token.parentTokenIdx].firstCharIndentation,
        jsxIndentProps: 1
      });
    case BRACE_CLOSE:
    case SWITCH_BRACE_CLOSE:
      return this.indentRow({
        row: row,
        blockIndent: tokenStack[token.parentTokenIdx].firstCharIndentation,
        jsxIndent: 1
      });
    case SWITCH_CASE:
    case SWITCH_DEFAULT:
      return this.indentRow({
        row: row,
        blockIndent: token.firstCharIndentation,
        jsxIndent: 1
      });
    }
  }

  getToken(bufferRow, match) {
    var scope = this.editor.scopeDescriptorForBufferPosition([bufferRow, match.index]).getScopesArray().pop();

    if ("punctuation.definition.tag.jsx" === scope) {
      if (match[1] != null) {
        return JSXTAG_OPEN;
      } else if (match[3] != null) {
        return JSXTAG_SELFCLOSE_END;
      }
    } else if ("JSXEndTagStart" === scope) {
      if (match[4] != null) {
        return JSXTAG_CLOSE;
      }
    } else if ("JSXStartTagEnd" === scope) {
      if (match[7] != null) {
        return JSXTAG_CLOSE_ATTRS;
      }
    } else if (match[8] != null) {
      if ("punctuation.section.embedded.begin.jsx" === scope) {
        return JSXBRACE_OPEN;
      } else if ("meta.brace.curly.switchStart.js" === scope) {
        return SWITCH_BRACE_OPEN;
      } else if ("meta.brace.curly.js" === scope) {
        return BRACE_OPEN;
      }
    } else if (match[9] != null) {
      if ("punctuation.section.embedded.end.jsx" === scope) {
        return JSXBRACE_CLOSE;
      } else if ("meta.brace.curly.switchEnd.js" === scope) {
        return SWITCH_BRACE_CLOSE;
      } else if ("meta.brace.curly.js" === scope) {
        return BRACE_CLOSE;
      }
    } else if (match[10] != null) {
      if ("keyword.operator.ternary.js" === scope) {
        return TERNARY_IF;
      }
    } else if (match[11] != null) {
      if ("keyword.operator.ternary.js" === scope) {
        return TERNARY_ELSE;
      }
    } else if (match[12] != null) {
      if ("keyword.control.conditional.js" === scope) {
        return JS_IF;
      }
    } else if (match[13] != null) {
      if ("keyword.control.conditional.js" === scope) {
        return JS_ELSE;
      }
    } else if (match[14] != null) {
      if ("keyword.control.switch.js" === scope) {
        return SWITCH_CASE;
      }
    } else if (match[15] != null) {
      if ("keyword.control.switch.js" === scope) {
        return SWITCH_DEFAULT;
      }
    } else if (match[16] != null) {
      if ("keyword.control.flow.js" === scope) {
        return JS_RETURN;
      }
    }

    return NO_TOKEN;
  }

  getIndentOfPreviousRow(row) {
    if (!row) {
      return 0;
    }

    for (var row of (function() {
      var ref;
      var results = [];

      for (var i = ref = row - 1; (ref <= 0 ? i < 0 : i > 0); (ref <= 0 ? i++ : i--)) {
          results.push(i);
      }

      return results;
    }).apply(this)) {
      var line = this.editor.lineTextForBufferRow(row);

      if (/.*\S/.test(line)) {
        return this.editor.indentationForBufferRow(row);
      }
    }

    return 0;
  }

  getIndentOptions() {
    var eslintrcFilename;

    if (!this.autoJsx) {
      return this.translateIndentOptions();
    }

    if (eslintrcFilename = this.getEslintrcFilename()) {
      eslintrcFilename = new File(eslintrcFilename);
      return this.translateIndentOptions(this.readEslintrcOptions(eslintrcFilename.getPath()));
    } else {
      return this.translateIndentOptions({});
    }
  }

  getEslintrcFilename() {
    var projectContainingSource = atom.project.relativizePath(this.editor.getPath());

    if (projectContainingSource[0] != null) {
      return path.join(projectContainingSource[0], ".eslintrc");
    }
  }

  onMouseDown() {
    return this.mouseUp = false;
  }

  onMouseUp() {
    return this.mouseUp = true;
  }

  readEslintrcOptions(eslintrcFile) {
    var fileContent;

    if (fs.existsSync(eslintrcFile)) {
      fileContent = stripJsonComments(fs.readFileSync(eslintrcFile, "utf8"));

      try {
        var eslintRules = (YAML.safeLoad(fileContent)).rules;

        if (eslintRules) {
          return eslintRules;
        }
      } catch (err) {
        atom.notifications.addError(("LB: Error reading .eslintrc at " + (eslintrcFile)), {
          dismissable: true,
          detail: ("" + (err.message))
        });
      }
    }

    return {};
  }

  translateIndentOptions(eslintRules) {
    var defaultIndent;

    var eslintIndentOptions = {
      jsxIndent: [1, 1],
      jsxIndentProps: [1, 1],

      jsxClosingBracketLocation: [1, {
        selfClosing: TAGALIGNED,
        nonEmpty: TAGALIGNED
      }]
    };

    if (typeof eslintRules !== "object") {
      return eslintIndentOptions;
    }

    var ES_DEFAULT_INDENT = 4;
    var rule = eslintRules["indent"];

    if (typeof rule === "number" || typeof rule === "string") {
      defaultIndent = ES_DEFAULT_INDENT / this.editor.getTabLength();
    } else if (typeof rule === "object") {
      if (typeof rule[1] === "number") {
        defaultIndent = rule[1] / this.editor.getTabLength();
      } else {
        defaultIndent = 1;
      }
    } else {
      defaultIndent = 1;
    }

    rule = eslintRules["react/jsx-indent"];

    if (typeof rule === "number" || typeof rule === "string") {
      eslintIndentOptions.jsxIndent[0] = rule;
      eslintIndentOptions.jsxIndent[1] = ES_DEFAULT_INDENT / this.editor.getTabLength();
    } else if (typeof rule === "object") {
      eslintIndentOptions.jsxIndent[0] = rule[0];

      if (typeof rule[1] === "number") {
        eslintIndentOptions.jsxIndent[1] = rule[1] / this.editor.getTabLength();
      } else {
        eslintIndentOptions.jsxIndent[1] = 1;
      }
    } else {
      eslintIndentOptions.jsxIndent[1] = defaultIndent;
    }

    rule = eslintRules["react/jsx-indent-props"];

    if (typeof rule === "number" || typeof rule === "string") {
      eslintIndentOptions.jsxIndentProps[0] = rule;
      eslintIndentOptions.jsxIndentProps[1] = ES_DEFAULT_INDENT / this.editor.getTabLength();
    } else if (typeof rule === "object") {
      eslintIndentOptions.jsxIndentProps[0] = rule[0];

      if (typeof rule[1] === "number") {
        eslintIndentOptions.jsxIndentProps[1] = rule[1] / this.editor.getTabLength();
      } else {
        eslintIndentOptions.jsxIndentProps[1] = 1;
      }
    } else {
      eslintIndentOptions.jsxIndentProps[1] = defaultIndent;
    }

    rule = eslintRules["react/jsx-closing-bracket-location"];
    eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing = TAGALIGNED;
    eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty = TAGALIGNED;

    if (typeof rule === "number" || typeof rule === "string") {
      eslintIndentOptions.jsxClosingBracketLocation[0] = rule;
    } else if (typeof rule === "object") {
      eslintIndentOptions.jsxClosingBracketLocation[0] = rule[0];

      if (typeof rule[1] === "string") {
        eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing = eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty = rule[1];
      } else {
        if (rule[1].selfClosing != null) {
          eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing = rule[1].selfClosing;
        }

        if (rule[1].nonEmpty != null) {
          eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty = rule[1].nonEmpty;
        }
      }
    }

    return eslintIndentOptions;
  }

  indentForClosingBracket(row, parentTag, closingBracketRule) {
    if (this.eslintIndentOptions.jsxClosingBracketLocation[0]) {
      if (closingBracketRule === TAGALIGNED) {
        return this.indentRow({
          row: row,
          blockIndent: parentTag.tokenIndentation
        });
      } else if (closingBracketRule === LINEALIGNED) {
        return this.indentRow({
          row: row,
          blockIndent: parentTag.firstCharIndentation
        });
      } else if (closingBracketRule === AFTERPROPS) {
        if (this.eslintIndentOptions.jsxIndentProps[0]) {
          return this.indentRow({
            row: row,
            blockIndent: parentTag.firstCharIndentation,
            jsxIndentProps: 1
          });
        } else {
          return this.indentRow({
            row: row,
            blockIndent: parentTag.firstCharIndentation
          });
        }
      } else if (closingBracketRule === PROPSALIGNED) {
        if (this.eslintIndentOptions.jsxIndentProps[0]) {
          return this.indentRow({
            row: row,
            blockIndent: parentTag.firstCharIndentation,
            jsxIndentProps: 1
          });
        } else {
          return this.indentRow({
            row: row,
            blockIndent: parentTag.firstCharIndentation
          });
        }
      }
    }
  }

  indentRow(options) {
    var {
      row,
      allowAdditionalIndents,
      blockIndent,
      jsxIndent,
      jsxIndentProps
    } = options;

    if (jsxIndent) {
      if (this.eslintIndentOptions.jsxIndent[0]) {
        if (this.eslintIndentOptions.jsxIndent[1]) {
          blockIndent += jsxIndent * this.eslintIndentOptions.jsxIndent[1];
        }
      }
    }

    if (jsxIndentProps) {
      if (this.eslintIndentOptions.jsxIndentProps[0]) {
        if (this.eslintIndentOptions.jsxIndentProps[1]) {
          blockIndent += jsxIndentProps * this.eslintIndentOptions.jsxIndentProps[1];
        }
      }
    }

    if (allowAdditionalIndents) {
      if (this.editor.indentationForBufferRow(row) < blockIndent) {
        this.editor.setIndentationForBufferRow(row, blockIndent, {
          preserveLeadingWhitespace: false
        });

        return true;
      }
    } else if (this.editor.indentationForBufferRow(row) !== blockIndent) {
      this.editor.setIndentationForBufferRow(row, blockIndent, {
        preserveLeadingWhitespace: false
      });

      return true;
    }

    return false;
  }
};