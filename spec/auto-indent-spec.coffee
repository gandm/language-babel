# Tests for Auto Indenting JSX

{Range, Point} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
AutoIndent = require '../lib/auto-indent'

describe 'auto-indent', ->
  [autoIndent, editor, notifications, sourceCode, sourceCodeRange, indentJSXRange] = []

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('language-babel')

  beforeEach ->
    waitsForPromise ->
      atom.workspace.open('non-existent.js').then (o) -> editor = o

    runs ->
      autoIndent = new AutoIndent(editor)
      notifications = atom.notifications


  # :: constructor
  describe '::constructor', ->
    it ' should setup some valid indentation defaults', ->
      expectedResult =
        jsxIndent: [1,1]
        jsxIndentProps: [1,1]
        jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
      expect(autoIndent.eslintIndentOptions).toEqual(expectedResult)

  # ::getEslintrcFilename
  describe '::getEslintrcFilename', ->
    it 'returns a correct project path for the source file', ->
      expect(path.dirname(autoIndent.getEslintrcFilename())).toEqual(path.dirname(editor.getPath()))

    it 'returns a .eslintrc file name', ->
      expect(path.basename(autoIndent.getEslintrcFilename())).toEqual('.eslintrc')

  # ::readEslintrcOptions
  describe '::readEslintrcOptions', ->
    it 'returns an empty object on a missing .eslintrc', ->
      expect(autoIndent.readEslintrcOptions('.missing')).toEqual({})

    it 'returns and empty Object and a notification message on bad eslint', ->
      spyOn(fs, 'existsSync').andReturn(true)
      spyOn(fs, 'readFileSync').andReturn('{')
      spyOn(notifications, 'addError').andCallThrough()
      obj = autoIndent.readEslintrcOptions()
      expect(notifications.addError).toHaveBeenCalled()
      expect(obj).toEqual({})

    it 'returns an empty Object when eslint with no rules is read', ->
      spyOn(fs, 'existsSync').andReturn(true)
      spyOn(fs, 'readFileSync').andReturn('{}')
      spyOn(notifications, 'addError').andCallThrough()
      obj = autoIndent.readEslintrcOptions()
      expect(notifications.addError).not.toHaveBeenCalled()
      expect(obj).toEqual({})

    # ::translateIndentOptions
    describe '::translateIndentOptions', ->
      it 'should return expected defaults when no object is input', ->
        result = autoIndent.translateIndentOptions()
        expectedResult =
          jsxIndent: [1,1]
          jsxIndentProps: [1,1]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return expected defaults when no valid object is input', ->
        result = autoIndent.translateIndentOptions({})
        expectedResult =
          jsxIndent: [1,1]
          jsxIndentProps: [1,1]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return two tab markers for jsx and props when an indent of 4 spaces is found', ->
        rules =
          "indent": [1, 4]
        result = autoIndent.translateIndentOptions(rules)
        expectedResult =
          jsxIndent: [1,2]
          jsxIndentProps: [1,2]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return one tab markers for jsx and props when an indent "tab" is found', ->
        rules =
          "indent": [1, "tab"]
        result = autoIndent.translateIndentOptions(rules)
        expectedResult =
          jsxIndent: [1,1]
          jsxIndentProps: [1,1]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return jsxIndent of 2 tabs and jsxIndentProps of 3', ->
        rules =
          "indent": [1, 6]
          "react/jsx-indent": ["warn", 4]
        result = autoIndent.translateIndentOptions(rules)
        expectedResult =
          jsxIndent: ['warn', 2]
          jsxIndentProps: [1, 3]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return jsxIndent of 2 tabs and jsxIndentProps of 2', ->
        rules =
          "indent": [1, 6]
          "react/jsx-indent": ["warn", 4]
          "react/jsx-indent-props": [2, 4]
        result = autoIndent.translateIndentOptions(rules)
        expectedResult =
          jsxIndent: ['warn', 2]
          jsxIndentProps: [2, 2]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return jsxIndent of 2 tabs and jsxIndentProps of 2, line-aligned', ->
        rules =
          "indent": [1, 6]
          "react/jsx-indent": ["warn", 4]
          "react/jsx-indent-props": [2, 4]
          'react/jsx-closing-bracket-location': [1, 'line-aligned']
        result = autoIndent.translateIndentOptions(rules)
        expectedResult =
          jsxIndent: ['warn', 2]
          jsxIndentProps: [2, 2]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'line-aligned', nonEmpty: 'line-aligned'} ]
        expect(result).toEqual(expectedResult)

      it 'should return jsxIndent of 2 tabs and jsxIndentProps of 2, line-aligned and props-aligned', ->
        rules =
          "indent": [1, 6]
          "react/jsx-indent": ["warn", 4]
          "react/jsx-indent-props": [2, 4]
          "react/jsx-closing-bracket-location": [ 1,
            "nonEmpty": "props-aligned",
            "selfClosing": "line-aligned"
          ]
        result = autoIndent.translateIndentOptions(rules)
        expectedResult =
          jsxIndent: ['warn', 2]
          jsxIndentProps: [2, 2]
          jsxClosingBracketLocation: [ 1, { selfClosing: 'line-aligned', nonEmpty: 'props-aligned'} ]
        expect(result).toEqual(expectedResult)

    #: indentJSX
    describe '::indentJSX', ->

      beforeEach ->
        sourceCode = """
          <div className={rootClass}>
          {this._renderPlaceholder()}
          <div
          className={cx('DraftEditor/editorContainer')}
          key={'editor' + this.state.containerKey}
          ref="editorContainer"
          >
          <div
          aria-activedescendant={
          readOnly ? null : this.props.ariaActiveDescendantID
          }
          aria-autocomplete={readOnly ? null : this.props.ariaAutoComplete}
          >
          {this._renderPlaceholder()}
          <Component p1
          p2
          />
          </div>
          { // tests inline JSX
          trainerProfile.backgroundImageLink
          ? <Image style={styles.video} source={{uri: `${AppConfig.apiURL}${trainerProfile.backgroundImageLink}`}} />
          : <Image style={styles.video} source={{uri: `https://placehold.it/375x140`}} />
          }
          {
          cond ?
          <span/>:
          <span></span>
          }
          </div>
          </div>

          """
        editor.insertText(sourceCode)
        sourceCodeRange = new Range(new Point(0,0), new Point(31,0))
        indentJSXRange = new Range(new Point(0,0), new Point(30,1))

      it 'should indent JSX according to eslint rules', ->
        indentedCode = """
          <div className={rootClass}>
            {this._renderPlaceholder()}
            <div
              className={cx('DraftEditor/editorContainer')}
              key={'editor' + this.state.containerKey}
              ref="editorContainer"
            >
              <div
                aria-activedescendant={
                  readOnly ? null : this.props.ariaActiveDescendantID
                }
                aria-autocomplete={readOnly ? null : this.props.ariaAutoComplete}
              >
                {this._renderPlaceholder()}
                <Component p1
                  p2
                />
              </div>
              { // tests inline JSX
                trainerProfile.backgroundImageLink
                  ? <Image style={styles.video} source={{uri: `${AppConfig.apiURL}${trainerProfile.backgroundImageLink}`}} />
                  : <Image style={styles.video} source={{uri: `https://placehold.it/375x140`}} />
              }
              {
                cond ?
                  <span/>:
                  <span></span>
              }
            </div>
          </div>

          """
        # remember this is tabs based on atom default
        autoIndent.eslintIndentOptions =
          jsxIndent: [1, 1]
          jsxIndentProps: [1, 1]
          jsxClosingBracketLocation: [ 1,
           selfClosing: 'tag-aligned'
           nonEmpty: 'tag-aligned' ]
         autoIndent.autoJsx = true
         autoIndent.indentJSX(indentJSXRange)
         expect(editor.getTextInBufferRange(sourceCodeRange)).toEqual(indentedCode)

      it 'should indent JSX according to eslint rules and tag closing alignment', ->
        indentedCode = """
          <div className={rootClass}>
              {this._renderPlaceholder()}
              <div
                  className={cx('DraftEditor/editorContainer')}
                  key={'editor' + this.state.containerKey}
                  ref="editorContainer"
                  >
                  <div
                      aria-activedescendant={
                          readOnly ? null : this.props.ariaActiveDescendantID
                      }
                      aria-autocomplete={readOnly ? null : this.props.ariaAutoComplete}
                      >
                      {this._renderPlaceholder()}
                      <Component p1
                          p2
                          />
                  </div>
                  { // tests inline JSX
                      trainerProfile.backgroundImageLink
                          ? <Image style={styles.video} source={{uri: `${AppConfig.apiURL}${trainerProfile.backgroundImageLink}`}} />
                          : <Image style={styles.video} source={{uri: `https://placehold.it/375x140`}} />
                  }
                  {
                      cond ?
                          <span/>:
                          <span></span>
                  }
              </div>
          </div>

          """
        # remember this is tabs based on atom default
        autoIndent.eslintIndentOptions =
          jsxIndent: [1, 2]
          jsxIndentProps: [1, 2]
          jsxClosingBracketLocation: [ 1,
            selfClosing: 'props-aligned'
            nonEmpty: 'props-aligned' ]
         autoIndent.autoJsx = true
         autoIndent.indentJSX(indentJSXRange)
         expect(editor.getTextInBufferRange(sourceCodeRange)).toEqual(indentedCode)

    # test insert newline between opening closing JSX tags
    describe 'insert-nl-jsx', ->

      it 'should insert two new lines and position cursor between JSX tags', ->
        # remember this is tabs based on atom default
        autoIndent.eslintIndentOptions =
          jsxIndent: [1, 1]
          jsxIndentProps: [1, 1]
          jsxClosingBracketLocation: [ 1,
            selfClosing: 'tabs-aligned'
            nonEmpty: 'tabs-aligned' ]
        autoIndent.autoJsx = true
        editor.insertText('<div></div>')
        editor.setCursorBufferPosition([0,5])
        editor.insertText('\n')

        expect(editor.getTextInBufferRange([[0,0],[0,5]])).toEqual("<div>")
        expect(editor.getTextInBufferRange([[1,0],[1,2]])).toEqual("  ")
        expect(editor.getTextInBufferRange([[2,0],[2,6]])).toEqual("</div>")
        expect(editor.getCursorBufferPosition()).toEqual([1,2])
