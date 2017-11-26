/*global atom*/
"use babel";

const emmetExpand = require('@emmetio/expand-abbreviation').expand;

module.exports = {
  selector: '.source.inside-js.css.styled, .source.css.styled',
  disableForSelector:
    '.source.inside-js.css.styled .comment, .source.inside-js.css.styled .string, .source.inside-js.css.styled .entity.quasi.element.js, .source.css.styled .comment, .source.css.styled .string, .source.css.styled .entity.quasi.element.js',

  filterSuggestions: false,
  inclusionPriority: 10000,
  excludeLowerPriority: false,
  suggestionPriority: 100,

  getSuggestions({editor, bufferPosition}) {
    console.log(atom.config.get('language-babel.emmetCSSAutocomplete'));
    if (atom.config.get('language-babel.emmetCSSAutocomplete')) {
      const prefix = this.getPrefix(editor, bufferPosition);
      return this.emmetInsertSuggestion(prefix);
    }
    return null;
  },

  getPrefix(editor, bufferPosition) {
    const regex = /(^|\s|;)([\w0-9+-:@]+)$/;
    const line = editor.getTextInRange([
      [bufferPosition.row, 0],
      bufferPosition
    ]);
    return __guard__(line.match(regex), x => x[2]) || '';
  },

  emmetInsertSuggestion(prefix) {
    const completion = [];
    try {
      emmetAbbreviation = emmetExpand(prefix, {
        syntax: 'css',
        field: (index, placeholder) =>
          `\${${index}${placeholder ? ':' + placeholder : ''}}`
      });
      const emmetDisplayText =
        emmetAbbreviation.length > 28
          ? emmetAbbreviation.substr(0, 25) + '...'
          : emmetAbbreviation;
      completion.push({
        type: 'snippet',
        snippet: emmetAbbreviation,
        displayText: emmetDisplayText,
        leftLabel: 'emmet',
        description: 'language-babel emmet',
        descriptionMoreURL: 'https://docs.emmet.io/cheat-sheet/',
        replacementPrefix: prefix
      });
    } catch (err) {
    }
    return completion;
  }
};

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null
    ? transform(value)
    : undefined;
}
