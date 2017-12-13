/*global atom*/
"use babel";

module.exports = {
  selector: '.source.inside-js.css.styled, .source.css.styled',
  disableForSelector:
    '.source.inside-js.css.styled .comment, .source.inside-js.css.styled .string, .source.inside-js.css.styled .entity.quasi.element.js, .source.css.styled .comment, .source.css.styled .string, .source.css.styled .entity.quasi.element.js',

  filterSuggestions: false,
  inclusionPriority: 10000,
  excludeLowerPriority: false,
  suggestionPriority: 100,

  getSuggestions({editor, bufferPosition}) {
    if (atom.config.get('language-babel.emmetCSSAutocomplete')) {
      const prefix = this.getPrefix(editor, bufferPosition);
      return this.emmetSuggestion(prefix);
    }
    return null;
  },

  getPrefix(editor, bufferPosition) {
    const regex = /(^|;)(?:\s*)([\w\s0-9+-:@!#]+)$/g;
    const line = editor.getTextInRange([
      [bufferPosition.row, 0],
      bufferPosition
    ]);
    const match = regex.exec(line);
    return match ? match[2] : '';
  },

  emmetSuggestion(prefix) {
    const completion = [];
    try {
      // Expensive dependency: use a lazy require.
      const {expand} = require('@emmetio/expand-abbreviation');
      const emmetAbbreviation = expand(prefix, {
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
