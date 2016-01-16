{CompositeDisposable, File, Range, Point} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
autoCompleteJSX = require './auto-complete-jsx'
JSON5 = require 'json5'
# regex to search for tag open/close tag and close tag
JSXREGEXP = /(<)([$_A-Za-z](?:[$.\-A-Za-z0-9])*)|(\/>)|(<\/)([$_A-Za-z](?:[$.\-A-Za-z0-9])*)(>)|(>)/g

JSXTAG_SELFCLOSE_START  = 0       # the <tag in <tag />
JSXTAG_SELFCLOSE_END    = 1       # the /> in <tag />
JSXTAG_OPEN             = 2       # the <tag in <tag></tag>
JSXTAG_CLOSE_ATTRS      = 3       # the 1st > in <tag></tag>
JSXTAG_CLOSE            = 4       # a </tag>
#jsxTagType = ['SELFCLOSE_START', 'SELFCLOSE_END', 'OPEN', 'CLOSE_ATTRS','CLOSE']

# eslint property values
TAGALIGNED    = 'tag-aligned'
LINEALIGNED   = 'line-aligned'
AFTERPROPS    = 'after-props'
PROPSALIGNED  = 'props-aligned'

module.exports =
class AutoIndent
  constructor: (@editor) ->
    # monkey patch the text @editor method autoIndentBufferRow
    # to get avoid the limitations of the increaseIndentPattern and decreaseIndentPattern
    # regex's
    # Actually, we patch the method in editor.languageMode as atom
    # doesn't always use the text @editor's stub method
    @atomAutoIndentBufferRow =
      @editor.languageMode.autoIndentBufferRow
    @editor.languageMode.autoIndentBufferRow =
      @autoIndentBufferRow
    #default options
    @eslintIndentOptions  =
      jsxClosingBracketLocation: [
        1,
        selfClosing: TAGALIGNED
        nonEmpty: TAGALIGNED
      ]
      jsxIndent: [1,1]            # 1 = enabled, 1=#tabs
      jsxIndentProps: [1,1]       # 1 = enabled, 1=#tabs

    @autoJsx = true
    @disposables = new CompositeDisposable()
    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:format-react-jsx': (event) => @formatJsxCommand()
    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:toggle-auto-jsx': (event) =>  @autoJsx = not @autoJsx

    @atomTabLength = @editor.getTabLength()

    if @eslintrcFilename = @getEslintrcFilename()
      @eslintrcFilename = new File(@eslintrcFilename)
      @getEslintrcOptions(@eslintrcFilename.getPath())
      # watch eslintrc for changes
      @eslintrcFilename.onDidChange => @getEslintrcOptions(@eslintrcFilename.getPath())

  # you know it makes sense
  destroy: () ->
    @editor.languageMode.autoIndentBufferRow = @atomAutoIndentBufferRow
    @disposables.dispose()

  # monkey patched code
  autoIndentBufferRow: (bufferRow, options) =>
    if not @autoJsx or not @jsxInScope(bufferRow)
      return @atomAutoIndentBufferRow.call(@editor.languageMode, bufferRow, options )
    # a new line has been added so what jsx is before it?
    endPointOfLine = new Point bufferRow-1, @editor.lineTextForBufferRow(bufferRow-1).length
    startOfJSX =  autoCompleteJSX.getStartOfJSX @editor, endPointOfLine
    endPointOfLine = new Point bufferRow+1, 0
    indent = @formatJSX new Range(startOfJSX, endPointOfLine)
    @editor.setIndentationForBufferRow bufferRow, indent, { preserveLeadingWhitespace: false}
    cursorPos = @editor.getCursorBufferPosition()
    if cursorPos.column is 0
      @editor.moveToEndOfLine()
    indent

  # command option to format line from a cursor position upwards to JSX start
  formatJsxCommand: () ->
    return if atom.workspace.getActiveTextEditor().id isnt @editor.id
    bufferRow = @editor.getCursorBufferPosition().row
    return if not @jsxInScope(bufferRow)
    endPointOfLine = new Point bufferRow, @editor.lineTextForBufferRow(bufferRow).length
    startOfJSX =  autoCompleteJSX.getStartOfJSX @editor, endPointOfLine
    @formatJSX new Range(startOfJSX, endPointOfLine)

  # is the jsx on this line in scope
  jsxInScope: (bufferRow) ->
    scopes = @editor.scopeDescriptorForBufferPosition([bufferRow, 0]).getScopesArray()
    #are we in an existing Jsx nest
    if 'meta.tag.jsx' not in scopes
      scopes = @editor.scopeDescriptorForBufferPosition([bufferRow-1, 0]).getScopesArray()
      # are we at the end of a jsx nest
      if 'meta.tag.jsx' not in scopes
        false
    true

  # build stack array of JSX opening & closing objects in Range.
  # open and closed tags are backward linked via index pointers
  # indents to the buffer are applied on the fly
  formatJSX: (range) ->
    tagStack = []
    idxOfTags = 0
    stackOfTagsStillOpen = [] # length equivalent to tag depth
    indent = previousLineIndent = 0

    for row in [range.start.row..range.end.row]
      isFirstTagOfLine = true
      line = @editor.lineTextForBufferRow row
      indentRecalc = true
      tagOnThisLine = false


      while (( match = JSXREGEXP.exec(line)) isnt null )
        tagOnThisLine = true
        matchColumn = match.index
        matchPointStart = new Point(row, matchColumn)
        matchPointEnd = new Point(row, matchColumn + match[0].length - 1)
        matchRange = new Range(matchPointStart, matchPointEnd)

        firstCharIndentation = (@editor.indentationForBufferRow row)
        if range.intersectsWith(matchRange)
          scopes = @editor.scopeDescriptorForBufferPosition([row, match.index]).getScopesArray()
          continue if 'punctuation.definition.tag.jsx' not in scopes

          if @editor.getSoftTabs()
            tagIndentation = (matchColumn / @atomTabLength)
          else tagIndentation =
            do () ->
              hardTabsFound = 0
              for i in [0...matchColumn]
                hardTabsFound += ((line.substr i, 1) is '\t')
              hardTabsFound

          if isFirstTagOfLine
            if row is range.start.row
              # line may start with something like return ( <jsx>
              # but we will treat this as the firstTagInLineIndentation
              firstTagInLineIndentation = firstCharIndentation
            else firstTagInLineIndentation = tagIndentation

          # capture group determines a tag to push onto stack
          if match[1]? # tags starting <tag
            if isFirstTagOfLine and indentRecalc
              stackOfTagsStillOpen.push parentTagIdx = stackOfTagsStillOpen.pop()
              if parentTagIdx?
                @indentRow(row, tagStack[parentTagIdx].firstTagInLineIndentation, 1 )
                line = @editor.lineTextForBufferRow row
                JSXREGEXP.test('') #force regex to start again
                indentRecalc = false
                continue

            stackOfTagsStillOpen.push parentTagIdx = stackOfTagsStillOpen.pop()
            if isFirstTagOfLine
              isFirstTagOfLine = false

            tagStack.push
              type: JSXTAG_OPEN
              name: match[2]
              tagDepth: stackOfTagsStillOpen.length
              row: row
              firstTagInLineIndentation: firstTagInLineIndentation
              tagIndentation: tagIndentation
              firstCharIndentation: firstCharIndentation
              parentTagIdx: parentTagIdx
              termsThisTagsAttributesIdx: null  # ptr to > tag
              termsThisTagIdx: null             # ptr to </tag>

            stackOfTagsStillOpen.push idxOfTags
            idxOfTags++

          else if match[4]? # tags ending </tag>
            if isFirstTagOfLine and indentRecalc
              stackOfTagsStillOpen.push parentTagIdx = stackOfTagsStillOpen.pop()
              @indentRow(row, tagStack[parentTagIdx].firstTagInLineIndentation )
              line = @editor.lineTextForBufferRow row
              JSXREGEXP.test('') #force regex to start again
              indentRecalc = false
              continue

            if isFirstTagOfLine
              isFirstTagOfLine = false

            parentTagIdx = stackOfTagsStillOpen.pop()
            tagStack.push
              type: JSXTAG_CLOSE
              name: match[5]
              row: row
              tagDepth: stackOfTagsStillOpen.length
              parentTagIdx: parentTagIdx         # ptr to <tag
            if parentTagIdx >=0 then tagStack[parentTagIdx].termsThisTagIdx = idxOfTags
            idxOfTags++

          else if match[3]? # tags ending />
            if isFirstTagOfLine and indentRecalc
              stackOfTagsStillOpen.push parentTagIdx = stackOfTagsStillOpen.pop()
              # work backwards on property rows
              if tagStack[parentTagIdx].row+1 <= ( row-1 )
                for propertyRow in [tagStack[parentTagIdx].row+1..row-1]
                  @indentRow  propertyRow,
                    tagStack[parentTagIdx].firstTagInLineIndentation,0,1
              @indentForClosingBracket  row,
                tagStack[parentTagIdx],
                @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing
              line = @editor.lineTextForBufferRow row
              JSXREGEXP.test('') #force regex to start again
              indentRecalc = false
              continue

            if isFirstTagOfLine
              isFirstTagOfLine = false
            parentTagIdx = stackOfTagsStillOpen.pop()

            tagStack.push
              type: JSXTAG_SELFCLOSE_END
              name: tagStack[parentTagIdx].name
              row: row
              tagDepth: stackOfTagsStillOpen.length
              parentTagIdx: parentTagIdx       # ptr to <tag
            if parentTagIdx >= 0
              tagStack[parentTagIdx].termsThisTagsAttributesIdx = idxOfTags
              tagStack[parentTagIdx].type = JSXTAG_SELFCLOSE_START
              tagStack[parentTagIdx].termsThisTagIdx = idxOfTags
            idxOfTags++


          else if match[7]? # tags ending >
            if isFirstTagOfLine and indentRecalc
              stackOfTagsStillOpen.push parentTagIdx = stackOfTagsStillOpen.pop()
              # work backwards on property rows if any exist
              if tagStack[parentTagIdx].row+1 <= ( row-1 )
                for propertyRow in [tagStack[parentTagIdx].row+1..row-1]
                  @indentRow  propertyRow,
                    tagStack[parentTagIdx].firstTagInLineIndentation,0,1
              @indentForClosingBracket  row,
                tagStack[parentTagIdx],
                @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty
              line = @editor.lineTextForBufferRow row
              JSXREGEXP.test('') #force regex to start again
              indentRecalc = false
              continue

            if isFirstTagOfLine
              isFirstTagOfLine = false

            stackOfTagsStillOpen.push parentTagIdx = stackOfTagsStillOpen.pop()
            tagStack.push
              type: JSXTAG_CLOSE_ATTRS
              name: tagStack[parentTagIdx].name
              row: row
              tagDepth: stackOfTagsStillOpen.length
              parentTagIdx: parentTagIdx            # ptr to <tag
            if parentTagIdx >= 0 then tagStack[parentTagIdx].termsThisTagsAttributesIdx = idxOfTags
            idxOfTags++

      if idxOfTags > 0 and not tagOnThisLine
        if tagStack[idxOfTags-1].type is JSXTAG_CLOSE_ATTRS or
          tagStack[idxOfTags-1].type is JSXTAG_CLOSE or
          tagStack[idxOfTags-1].type is JSXTAG_SELFCLOSE_END
            @indentRow  row, previousLineIndent
      previousLineIndent = @editor.indentationForBufferRow row
      if row is range.end.row - 1 # the row that was inserted
        indent =  @editor.indentationForBufferRow row - 1 # will be returned
    indent


  # allign nonEmpty and selfClosing tags based on eslint rules
  # row to be indented based upon a parentTags properties and a rule type
  indentForClosingBracket: ( row, parentTag, closingBracketRule ) ->
    if @eslintIndentOptions.jsxClosingBracketLocation[0]
      if closingBracketRule is TAGALIGNED
        @indentRow row, parentTag.tagIndentation
      else if closingBracketRule is LINEALIGNED
        @indentRow row,  parentTag.firstCharIndentation
      else if closingBracketRule is AFTERPROPS
        if @eslintIndentOptions.jsxIndentProps[0]
          @indentRow row, parentTag.tagIndentation,
            @eslintIndentOptions.jsxIndentProps[1]
        else
          @indentRow row, parentTag.tagIndentation
      else if closingBracketRule is PROPSALIGNED
        if @eslintIndentOptions.jsxIndentProps[0]
          @indentRow row, parentTag.firstTagInLineIndentation,0, 1
        else
          @indentRow row, parentTag.firstTagInLineIndentation

  # return text string of a project based .eslintrc file if one exists
  getEslintrcFilename: () ->
    projectContainingSource = atom.project.relativizePath @editor.getPath()
    # Is the sourceFile located inside an Atom project folder?
    if projectContainingSource[0]?
      path.join projectContainingSource[0], '.eslintrc'

  # use eslint react format described at http://tinyurl.com/p4mtatv
  # to create indents. We can read .eslintrc here but don't parse strictly
  # turn spaces into tab dimensions which can be decimal
  getEslintrcOptions: (eslintrcFile) ->
    # get local path overides
    if fs.existsSync eslintrcFile
      fileContent= fs.readFileSync eslintrcFile, 'utf8'
      try
        eslintRules = (JSON5.parse fileContent).rules
      catch err
        atom.notifications.addError "LB: Error reading .eslintrc at #{eslintrcFile}",
          dismissable: true
          detail: "#{err.message}"
        return
      if rule = eslintRules['react/jsx-indent']
        if rule[0]
          if typeof rule[1] is 'number'
            @eslintIndentOptions.jsxIndent[1] = rule[1] / @atomTabLength
        else @eslintIndentOptions.jsxIndent[0] = 1 # 'tab'

      if rule = eslintRules['react/jsx-indent-props']
        if rule[0]
          if typeof rule[1] is 'number'
            @eslintIndentOptions.jsxIndentProps[1] = rule[1] / @atomTabLength
        else @eslintIndentOptions.jsxIndentProps[0] = 1 # 'tab'

      if rule = eslintRules['react/jsx-closing-bracket-location']
        if typeof rule is 'number'
          @eslintIndentOptions.jsxClosingBracketLocation[0] = rule
        else # must be array!
          @eslintIndentOptions.jsxClosingBracketLocation[0] = rule[0]
          if typeof rule[1] is 'string'
            @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing =
              @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty =
                rule[1]
          else
            if rule[1].selfClosing?
              @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing = rule[1].selfClosing
            if rule[1].nonEmpty?
              @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty = rule[1].nonEmpty

  # indent a row by the addition of one or more indents
  # jsxBlockIndent is the indent to the start of this logical jsx block
  # other indents are the required indent based on eslint and are 0 or 1 or undefined
  indentRow: (row, jsxBlockIndent, jsxTagIndent, jsxPropsIndent) ->
    jsxIndentTabs = jsxBlockIndent
    if jsxTagIndent
      if @eslintIndentOptions.jsxIndent[0]
        if @eslintIndentOptions.jsxIndent[1]
          jsxIndentTabs += jsxTagIndent * @eslintIndentOptions.jsxIndent[1]
    if jsxPropsIndent
      if @eslintIndentOptions.jsxIndentProps[0]
        if @eslintIndentOptions.jsxIndentProps[1]
          jsxIndentTabs += jsxPropsIndent * @eslintIndentOptions.jsxIndentProps[1]
    @editor.setIndentationForBufferRow row, jsxIndentTabs, { preserveLeadingWhitespace: false }
