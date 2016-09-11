var {
  Range,
  Point
} = require("atom");

var {
  filter,
  score
} = require("fuzzaldrin");

var JSXSTARTTAGEND = 0;
var JSXENDTAGSTART = 1;
var JSXTAG = 2;
var JSXATTRIBUTE = 3;
var JSXREGEXP = /(?:(<)|(<\/))([$_A-Za-z](?:[$._:\-a-zA-Z0-9])*)|(?:(\/>)|(>))/g;
var TAGREGEXP = /<([$_a-zA-Z][$._:\-a-zA-Z0-9]*)($|\s|\/>|>)/g;
var COMPLETIONS = require("./completions-jsx");
var REACTURL = "http://facebook.github.io/react/docs/tags-and-attributes.html";

module.exports = {
  selector: ".meta.tag.jsx",
  inclusionPriority: 10000,
  excludeLowerPriority: false,

  getSuggestions: function(opts) {
    var filteredAttributes;
    var htmlElements;
    var tagName;
    var tagNameStack;
    var jsxRange;
    var startOfJSX;

    var {
      editor,
      bufferPosition,
      scopeDescriptor,
      prefix
    } = opts;

    if (editor.getGrammar().packageName !== "language-babel") {
      return;
    }

    var jsxTag = this.getTriggerTag(editor, bufferPosition);

    if (!(jsxTag != null)) {
      return;
    }

    var suggestions = [];

    if (jsxTag === JSXSTARTTAGEND) {
      startOfJSX = this.getStartOfJSX(editor, bufferPosition);
      jsxRange = new Range(startOfJSX, bufferPosition);
      tagNameStack = this.buildTagStack(editor, jsxRange);

      while ((tagName = tagNameStack.pop()) != null) {
        suggestions.push({
          snippet: ("$1</" + (tagName) + ">"),
          type: "tag",
          description: "language-babel tag closer"
        });
      }
    } else if (jsxTag === JSXENDTAGSTART) {
      startOfJSX = this.getStartOfJSX(editor, bufferPosition);
      jsxRange = new Range(startOfJSX, bufferPosition);
      tagNameStack = this.buildTagStack(editor, jsxRange);

      while ((tagName = tagNameStack.pop()) != null) {
        suggestions.push({
          snippet: ((tagName) + ">"),
          type: "tag",
          description: "language-babel tag closer"
        });
      }
    } else if (jsxTag === JSXTAG) {
      if (!/^[a-z]/g.exec(prefix)) {
        return;
      }

      htmlElements = filter(COMPLETIONS.htmlElements, prefix, {
        key: "name"
      });

      for (var htmlElement of htmlElements) {
        if (score(htmlElement.name, prefix) < 0.07) {
          continue;
        }

        suggestions.push({
          snippet: htmlElement.name,
          type: "tag",
          description: "language-babel JSX supported elements",
          descriptionMoreURL: REACTURL
        });
      }
    } else if (jsxTag === JSXATTRIBUTE) {
      tagName = this.getThisTagName(editor, bufferPosition);

      if (!(tagName != null)) {
        return;
      }

      for (var elementObj of COMPLETIONS.htmlElements) {
        if (elementObj.name === tagName) {
          break;
        }
      }

      elementObj.attributes = elementObj.attributes.concat(COMPLETIONS.globalAttributes);
      elementObj.attributes = elementObj.attributes.concat(COMPLETIONS.events);

      filteredAttributes = filter(elementObj.attributes, prefix, {
        key: "name"
      });

      for (var attribute of filteredAttributes) {
        if (score(attribute.name, prefix) < 0.07) {
          continue;
        }

        suggestions.push({
          snippet: attribute.name,
          type: "attribute",
          rightLabel: ("<" + (tagName) + ">"),
          description: "language-babel JSXsupported attributes/events",
          descriptionMoreURL: REACTURL
        });
      }
    } else {
      return;
    }

    return suggestions;
  },

  getThisTagName: function(editor, bufferPosition) {
    var row = bufferPosition.row;
    var column = null;

    return (() => {
      var match;

      while (row >= 0) {
        var rowText = editor.lineTextForBufferRow(row);

        if (!(column != null)) {
          rowText = rowText.substr(0, column = bufferPosition.column);
        }

        var matches = [];

        while (((match = TAGREGEXP.exec(rowText)) !== null)) {
          var scopes = editor.scopeDescriptorForBufferPosition([row, match.index + 1]).getScopesArray();

          if (scopes.includes("entity.name.tag.open.jsx")) {
            matches.push(match[1]);
          }
        }

        if (matches.length) {
          return matches.pop();
        } else {
          row--;
        }
      }
    })();
  },

  getTriggerTag: function(editor, bufferPosition) {
    var scopes;
    var column = bufferPosition.column - 1;

    if (column >= 0) {
      scopes = editor.scopeDescriptorForBufferPosition([bufferPosition.row, column]).getScopesArray();

      if (scopes.includes("entity.other.attribute-name.jsx")) {
        return JSXATTRIBUTE;
      }

      if (scopes.includes("entity.name.tag.open.jsx")) {
        return JSXTAG;
      }

      if (scopes.includes("JSXStartTagEnd")) {
        return JSXSTARTTAGEND;
      }

      if (scopes.includes("JSXEndTagStart")) {
        return JSXENDTAGSTART;
      }
    }
  },

  getStartOfJSX: function(editor, bufferPosition) {
    var row = bufferPosition.row;

    while (row >= 0) {
      if (!editor.scopeDescriptorForBufferPosition([row, 0]).getScopesArray().includes("meta.tag.jsx")) {
        break;
      }

      row--;
    }

    if (row < 0) {
      row = 0;
    }

    var columnLen = editor.lineTextForBufferRow(row).length;
    var column = 0;

    while (column < columnLen) {
      if (editor.scopeDescriptorForBufferPosition([row, column]).getScopesArray().includes("meta.tag.jsx")) {
        break;
      }

      column++;
    }

    if (column === columnLen) {
      row++;
      column = 0;
    }

    return new Point(row, column);
  },

  buildTagStack: function(editor, range) {
    var closedtag;
    var scopes;
    var match;
    var tagNameStack = [];
    var row = range.start.row;

    while (row <= range.end.row) {
      var line = editor.lineTextForBufferRow(row);

      if (row === range.end.row) {
        line = line.substr(0, range.end.column);
      }

      while (((match = JSXREGEXP.exec(line)) !== null)) {
        var matchColumn = match.index;
        var matchPointStart = new Point(row, matchColumn);
        var matchPointEnd = new Point(row, matchColumn + match[0].length - 1);
        var matchRange = new Range(matchPointStart, matchPointEnd);

        if (range.intersectsWith(matchRange)) {
          scopes = editor.scopeDescriptorForBufferPosition([row, match.index]).getScopesArray();

          if (!scopes.includes("punctuation.definition.tag.jsx")) {
            continue;
          }

          if (match[1] != null) {
            tagNameStack.push(match[3]);
          } else if (match[2] != null) {
            closedtag = tagNameStack.pop();

            if (closedtag !== match[3]) {
              tagNameStack.push(closedtag);
            }
          } else if (match[4] != null) {
            tagNameStack.pop();
          }
        }
      }

      row++;
    }

    return tagNameStack;
  }
};