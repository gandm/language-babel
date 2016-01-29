{CompositeDisposable, File, Range, Point} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
autoCompleteJSX = require './auto-complete-jsx'
stripJsonComments = require 'strip-json-comments'
YAML = require 'js-yaml'
# regex to search for tag open/close tag and close tag
JSXREGEXP = /(<)([$_A-Za-z](?:[$_.:\-A-Za-z0-9])*)|(\/>)|(<\/)([$_A-Za-z](?:[$._:\-A-Za-z0-9])*)(>)|(>)|({)|(})/g

NO_TOKEN                = 0
JSXTAG_SELFCLOSE_START  = 1       # the <tag in <tag />
JSXTAG_SELFCLOSE_END    = 2       # the /> in <tag />
JSXTAG_OPEN             = 3       # the <tag in <tag></tag>
JSXTAG_CLOSE_ATTRS      = 4       # the 1st > in <tag></tag>
JSXTAG_CLOSE            = 5       # a </tag>
JSXBRACE_OPEN           = 6       # embedded expression brace start {
JSXBRACE_CLOSE          = 7       # embedded expression brace end }
BRACE_OPEN              = 8       # Javascript brace
BRACE_CLOSE             = 9       # Javascript brace

# eslint property values
TAGALIGNED    = 'tag-aligned'
LINEALIGNED   = 'line-aligned'
AFTERPROPS    = 'after-props'
PROPSALIGNED  = 'props-aligned'

module.exports =
class AutoIndent
  constructor: (@editor) ->
    # Eslint rules to use as default overidden by .eslintrc
    # N.B. that this is not the same as the eslint rules in that
    # the tab-spaces and 'tab's in eslintrc are converted to tabs based upon
    # the Atom editor tab spacing.
    # e.g. eslint indent [1,4] with an Atom tab spacing of 2 becomes indent [1,3]
    @eslintIndentOptions  =
      jsxClosingBracketLocation: [
        1,
        selfClosing: TAGALIGNED
        nonEmpty: TAGALIGNED
      ]
      jsxIndent: [1,1]            # 1 = enabled, 1=#tabs
      jsxIndentProps: [1,1]       # 1 = enabled, 1=#tabs
      indent: [1,1]               # 1 = enabled, 1=#tabs

    @autoJsx = true
    @mouseUp = true

    @disposables = new CompositeDisposable()
    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:auto-indent-react-jsx': (event) => @autoIndentJsxCommand()
    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:toggle-auto-indent-jsx': (event) =>  @autoJsx = not @autoJsx

    document.addEventListener 'mousedown', => @mouseUp = false
    document.addEventListener 'mouseup', => @mouseUp = true

    @disposables.add @editor.onDidChangeCursorPosition (event) => @changedCursorPosition(event)

    @atomTabLength = @editor.getTabLength()

    if @eslintrcFilename = @getEslintrcFilename()
      @eslintrcFilename = new File(@eslintrcFilename)
      @getEslintrcOptions(@eslintrcFilename.getPath())
      # watch eslintrc for changes
      @eslintrcFilename.onDidChange => @getEslintrcOptions(@eslintrcFilename.getPath())

  destroy: () ->
    @disposables.dispose()
    document.removeEventListener 'mousedown'
    document.removeEventListener 'mouseup'

  # command option to format line from a cursor position upwards to JSX start
  autoIndentJsxCommand: () ->
    #return if atom.workspace.getActiveTextEditor().id isnt @editor.id
    cursorPosition = @editor.getCursorBufferPosition()
    bufferRow = cursorPosition.row
    return if not @jsxInScope(bufferRow)
    endPointOfJsx = new Point bufferRow+1,0 # next row start
    startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, cursorPosition
    @editor.transact 300, =>
      @indentJSX new Range(startPointOfJsx, endPointOfJsx)

  # changed cursor position
  changedCursorPosition: (event) =>
    return unless @mouseUp
    return unless event.oldBufferPosition.row isnt event.newBufferPosition.row
    bufferRow = event.newBufferPosition.row
    # handle multiple cursors only trigger indent on one at the highest row
    if @editor.hasMultipleCursors()
      cursorPositions = @editor.getCursorBufferPositions()
      bufferRow = 0;
      for cursorPosition in cursorPositions
        if cursorPosition.row > bufferRow then bufferRow = cursorPosition.row
    else cursorPosition = event.newBufferPosition
    return if not @jsxInScope bufferRow
    endPointOfJsx = new Point bufferRow+1,0 # next row start
    startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, cursorPosition
    @editor.transact 300, =>
      indent = @indentJSX new Range(startPointOfJsx, endPointOfJsx)
      # columnToMoveTo = /\S|$/.exec(@editor.lineTextForBufferRow(bufferRow)).index
      # @editor.setCursorBufferPosition [bufferRow, columnToMoveTo]

  # is the jsx on this line in scope
  jsxInScope: (bufferRow) ->
    scopes = @editor.scopeDescriptorForBufferPosition([bufferRow, 0]).getScopesArray()
    #are we in an existing Jsx nest
    if 'meta.tag.jsx' not in scopes
      scopes = @editor.scopeDescriptorForBufferPosition([bufferRow-1, 0]).getScopesArray()
      # are we at the end of a jsx nest
      if 'meta.tag.jsx' not in scopes
        return false
    true

  # indent the JSX in the 'range'
  # This is designed to be a single parse indenter to reduce the package size
  # as no AST is used. It assumes the grammar has done its job adding scopes to
  # interesting tokens. Those are JSX <tag, >, </tag, />, emedded expressions
  # outside the tag starting { and ending } and javascript braces outside a tag { & }
  # it uses an array to hold tokens and a push/pop stack to hold tokens not closed
  # the very first jsx tag must be corretly indeted by the user as we don't have
  # knowledge of preceeding Javascript.
  indentJSX: (range) ->
    tokenStack = []
    idxOfToken = 0
    stackOfTokensStillOpen = [] # length equivalent to token depth
    indent = previousLineIndent = 0
    isFirstTagOfBlock = true
    isInsideTag = false
    # go back from start point of JSX until a char is found or start of line
    # we need to do this as the auto indent may want to outdent the initial line
    # and range checking would fail without this
    line = @editor.lineTextForBufferRow range.start.row
    for column in [range.start.column-1...0]
      if /\S/.test line.charAt(column)
        column++
        break
    range.start.column = column

    for row in [range.start.row..range.end.row]
      isFirstTokenOfLine = true
      tokenOnThisLine = false
      indentRecalc = true
      line = @editor.lineTextForBufferRow row

      # look for tokens in a buffer line
      while (( match = JSXREGEXP.exec(line)) isnt null )
        matchedType = ''
        matchColumn = match.index
        matchPointStart = new Point(row, matchColumn)
        matchPointEnd = new Point(row, matchColumn + match[0].length - 1)
        matchRange = new Range(matchPointStart, matchPointEnd)

        if range.intersectsWith(matchRange)
          continue unless token = @getToken(row, match)

          firstCharIndentation = (@editor.indentationForBufferRow row)
          # convert the matched column position into tab indents
          if @editor.getSoftTabs()
            tagIndentation = (matchColumn / @atomTabLength)
          else tagIndentation =
            do () ->
              hardTabsFound = 0
              for i in [0...matchColumn]
                hardTabsFound += ((line.substr i, 1) is '\t')
              hardTabsFound

          if isFirstTokenOfLine
              firstTagInLineIndentation =  tagIndentation

          # big switch statement follows for each token. If the line is reformated
          # then we recalculate the new position.
          switch (token)
            # tags starting <tag
            when JSXTAG_OPEN
              tokenOnThisLine = true
              # indent only on first token of a line
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                # isFirstTagOfBlock is used to mark the tag that starts the JSX but
                # also the first tag of blocks inside  embedded expressions. e.g.
                # <tbody> and <objectRow> are first tags
                # return (
                #       <tbody>
                #         {objects.map(function(object, i){
                #           return <ObjectRow obj={object} key={i} />;
                #         })}
                #       </tbody>
                #     )
                # but we don't position the <tbody> as we have no knowledge of the preceeding
                # js syntax
                if isFirstTagOfBlock and
                    parentTokenIdx? and
                    tokenStack[parentTokenIdx].type is BRACE_OPEN and
                    tokenStack[parentTokenIdx].row is ( row - 1)
                      # previous line started with a brace so use different indent rule
                      # based upon eslint indent not React/indent
                      tagIndentation = firstCharIndentation =
                        @getEslintIndent() + @getIndentOfPreviousRow row
                      @indentRow(row, firstCharIndentation)
                      line = @editor.lineTextForBufferRow row
                      JSXREGEXP.lastIndex = 0 #force regex to start again
                      indentRecalc = false
                      continue
                else if isFirstTagOfBlock and parentTokenIdx?
                  tagIndentation = firstCharIndentation = @getIndentOfPreviousRow row
                  @indentRow(row, firstCharIndentation, 1)
                  line = @editor.lineTextForBufferRow row
                  JSXREGEXP.lastIndex = 0 #force regex to start again
                  indentRecalc = false
                  continue
                else if parentTokenIdx?
                  @indentRow(row, tokenStack[parentTokenIdx].firstCharIndentation, 1 )
                  line = @editor.lineTextForBufferRow row
                  JSXREGEXP.lastIndex = 0 #force regex to start again
                  indentRecalc = false
                  continue

              isFirstTokenOfLine = false
              isFirstTagOfBlock = false

              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: JSXTAG_OPEN
                name: match[2]
                row: row
                firstTagInLineIndentation: firstTagInLineIndentation
                tagIndentation: tagIndentation
                firstCharIndentation: firstCharIndentation
                parentTokenIdx: parentTokenIdx
                termsThisTagsAttributesIdx: null  # ptr to > tag
                termsThisTagIdx: null             # ptr to </tag>

              stackOfTokensStillOpen.push idxOfToken
              idxOfToken++
              isInsideTag = true
              break;

            # tags ending </tag>
            when JSXTAG_CLOSE
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                @indentRow(row, tokenStack[parentTokenIdx].firstCharIndentation )
                line = @editor.lineTextForBufferRow row
                JSXREGEXP.lastIndex = 0 #force regex to start again
                indentRecalc = false
                continue

              isFirstTokenOfLine = false
              isFirstTagOfBlock = false

              parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: JSXTAG_CLOSE
                name: match[5]
                row: row
                parentTokenIdx: parentTokenIdx         # ptr to <tag
              if parentTokenIdx >=0 then tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken
              idxOfToken++
              isInsideTag = false
              break;

            # tags ending />
            when JSXTAG_SELFCLOSE_END
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                if firstTagInLineIndentation is firstCharIndentation
                  @indentForClosingBracket  row,
                    tokenStack[parentTokenIdx],
                    @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing
                else
                  @indentRow  row,
                    tokenStack[parentTokenIdx].firstTagInLineIndentation,0,1
                line = @editor.lineTextForBufferRow row
                JSXREGEXP.lastIndex = 0 #force regex to start again
                indentRecalc = false
                continue

              isFirstTagOfBlock = false
              isFirstTokenOfLine = false

              parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: JSXTAG_SELFCLOSE_END
                name: tokenStack[parentTokenIdx].name
                row: row
                parentTokenIdx: parentTokenIdx       # ptr to <tag
              if parentTokenIdx >= 0
                tokenStack[parentTokenIdx].termsThisTagsAttributesIdx = idxOfToken
                tokenStack[parentTokenIdx].type = JSXTAG_SELFCLOSE_START
                tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken
              idxOfToken++
              isInsideTag = false
              break;

            # tags ending >
            when JSXTAG_CLOSE_ATTRS
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                if firstTagInLineIndentation is firstCharIndentation
                  @indentForClosingBracket  row,
                    tokenStack[parentTokenIdx],
                    @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty
                else
                  @indentRow  row,
                    tokenStack[parentTokenIdx].firstTagInLineIndentation,0,1
                line = @editor.lineTextForBufferRow row
                JSXREGEXP.lastIndex = 0 #force regex to start again
                indentRecalc = false
                continue

              isFirstTagOfBlock = false
              isFirstTokenOfLine = false

              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: JSXTAG_CLOSE_ATTRS
                name: tokenStack[parentTokenIdx].name
                row: row
                parentTokenIdx: parentTokenIdx            # ptr to <tag
              if parentTokenIdx >= 0 then tokenStack[parentTokenIdx].termsThisTagsAttributesIdx = idxOfToken
              idxOfToken++
              isInsideTag = false
              break;

            # embeded expression start { but not inside a tag
            when JSXBRACE_OPEN
              break if isInsideTag
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                if parentTokenIdx?
                  @indentRow(row, tokenStack[parentTokenIdx].firstCharIndentation, 1 )
                  line = @editor.lineTextForBufferRow row
                  JSXREGEXP.lastIndex = 0 #force regex to start again
                  indentRecalc = false
                  continue

              isFirstTagOfBlock = true  # this may be the start of a new JSX block
              isFirstTokenOfLine = false

              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: JSXBRACE_OPEN
                name: ''
                row: row
                firstTagInLineIndentation: firstTagInLineIndentation
                tagIndentation: tagIndentation
                firstCharIndentation: firstCharIndentation
                parentTokenIdx: parentTokenIdx
                termsThisTagsAttributesIdx: null  # ptr to > tag
                termsThisTagIdx: null             # ptr to </tag>

              stackOfTokensStillOpen.push idxOfToken
              idxOfToken++
              break;

            # embeded expression end } but not inside a tag
            when JSXBRACE_CLOSE
              break if isInsideTag
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                @indentRow(row, tokenStack[parentTokenIdx].firstCharIndentation )
                line = @editor.lineTextForBufferRow row
                JSXREGEXP.lastIndex = 0 #force regex to start again
                indentRecalc = false
                continue

              isFirstTagOfBlock = false
              isFirstTokenOfLine = false

              parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: JSXBRACE_CLOSE
                name: ''
                row: row
                parentTokenIdx: parentTokenIdx         # ptr to <tag
              if parentTokenIdx >=0 then tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken
              idxOfToken++
              break;

            # Javascript brace Start {
            when BRACE_OPEN
              break if isInsideTag
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                if isFirstTagOfBlock and
                    parentTokenIdx? and
                    tokenStack[parentTokenIdx].type is BRACE_OPEN and
                    tokenStack[parentTokenIdx].row is ( row - 1)
                      # previous line started with a brace so use different indent rule
                      # based upon eslint indent not React/indent
                      tagIndentation = firstCharIndentation =
                        @getEslintIndent() + @getIndentOfPreviousRow row
                      @indentRow(row, firstCharIndentation)
                      line = @editor.lineTextForBufferRow row
                      JSXREGEXP.lastIndex = 0 #force regex to start again
                      indentRecalc = false
                      continue
                else if parentTokenIdx?
                  @indentRow(row, tokenStack[parentTokenIdx].firstCharIndentation, 1 )
                  line = @editor.lineTextForBufferRow row
                  JSXREGEXP.lastIndex = 0 #force regex to start again
                  indentRecalc = false
                  continue

              isFirstTokenOfLine = false

              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              tokenStack.push
                type: BRACE_OPEN
                name: ''
                row: row
                firstTagInLineIndentation: firstTagInLineIndentation
                tagIndentation: tagIndentation
                firstCharIndentation: firstCharIndentation
                parentTokenIdx: parentTokenIdx
                termsThisTagsAttributesIdx: null  # ptr to > tag
                termsThisTagIdx: null             # ptr to </tag>

              stackOfTokensStillOpen.push idxOfToken
              idxOfToken++
              break;

            # Javascript brace End }
            when BRACE_CLOSE
              break if isInsideTag
              tokenOnThisLine = true
              if isFirstTokenOfLine and indentRecalc
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                if parentTokenIdx?
                  @indentRow(row, tokenStack[parentTokenIdx].firstCharIndentation )
                  line = @editor.lineTextForBufferRow row
                  JSXREGEXP.lastIndex = 0 #force regex to start again
                  indentRecalc = false
                  continue

              isFirstTokenOfLine = false

              parentTokenIdx = stackOfTokensStillOpen.pop()
              if parentTokenIdx?
                tokenStack.push
                  type: BRACE_CLOSE
                  name: ''
                  row: row
                  parentTokenIdx: parentTokenIdx         # ptr to <tag
                if parentTokenIdx >=0 then tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken
                idxOfToken++
              break;

      if idxOfToken and not tokenOnThisLine and  row isnt range.end.row
        if not isInsideTag
          stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
          if parentTokenIdx?
            if tokenStack[parentTokenIdx].type is BRACE_OPEN and
              tokenStack[parentTokenIdx].row is ( row - 1)
                # indent based upon preceeding js brace
                @indentRow  row, tokenStack[parentTokenIdx].firstCharIndentation, @getEslintIndent()
            else
              @indentRow  row, @getIndentOfPreviousRow row
        else
          # component properties most likely
          @indentRow  row, tokenStack[idxOfToken-1].firstCharIndentation,0,1

      previousLineIndent = @editor.indentationForBufferRow row
      if row is range.end.row - 1 # the row that was inserted
        indent =  @editor.indentationForBufferRow row # will be returned
    return indent

  # get the token at the given match position or return truthy false
  getToken: (bufferRow, match) ->
    scope = @editor.scopeDescriptorForBufferPosition([bufferRow, match.index]).getScopesArray().pop()
    if 'punctuation.definition.tag.jsx' is scope
      if      match[1]? then return JSXTAG_OPEN
      else if match[3]? then return JSXTAG_SELFCLOSE_END
    else if 'JSXEndTagStart' is scope
      if match[4]? then return JSXTAG_CLOSE
    else if 'JSXStartTagEnd' is scope
      if match[7]? then return JSXTAG_CLOSE_ATTRS
    else if match[8]?
      if 'punctuation.section.embedded.begin.jsx' is scope
        return JSXBRACE_OPEN
      else if 'meta.brace.curly.js' is scope
        return BRACE_OPEN
    else if match[9]?
      if 'punctuation.section.embedded.end.jsx' is scope
        return JSXBRACE_CLOSE
      else if 'meta.brace.curly.js' is scope
        return BRACE_CLOSE
    return NO_TOKEN


  # get indent of the previous row with chars in it
  getIndentOfPreviousRow: (row) ->
    return 0 unless row
    for row in [row-1...0]
      line = @editor.lineTextForBufferRow row
      return @editor.indentationForBufferRow row if  /.*\S/.test line
    return 0

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
      fileContent = stripJsonComments(fs.readFileSync(eslintrcFile, 'utf8'))
      try
        eslintRules = (YAML.safeLoad fileContent).rules
      catch err
        atom.notifications.addError "LB: Error reading .eslintrc at #{eslintrcFile}",
          dismissable: true
          detail: "#{err.message}"
        return

      return if not eslintRules?

      rule = eslintRules['indent']
      if typeof rule is 'number'
        @eslintIndentOptions.indent[0] = rule
        @eslintIndentOptions.indent[1] = 4 / @atomTabLength
      else if typeof rule is 'object'
        @eslintIndentOptions.indent[0] = rule[0]
        if typeof rule[1] is 'number'
          @eslintIndentOptions.indent[1] = rule[1] / @atomTabLength
        else @eslintIndentOptions.indent[1] = 1

      rule = eslintRules['react/jsx-indent']
      if typeof rule is 'number'
        @eslintIndentOptions.jsxIndent[0] = rule
        @eslintIndentOptions.jsxIndent[1] = 4 / @atomTabLength
      else if typeof rule is 'object'
        @eslintIndentOptions.jsxIndent[0] = rule[0]
        if typeof rule[1] is 'number'
          @eslintIndentOptions.jsxIndent[1] = rule[1] / @atomTabLength
        else @eslintIndentOptions.jsxIndent[1] = 1

      rule = eslintRules['react/jsx-indent-props']
      if typeof rule is 'number'
        @eslintIndentOptions.jsxIndentProps[0] = rule
        @eslintIndentOptions.jsxIndentProps[1] = 4 / @atomTabLength
      else if typeof rule is 'object'
        @eslintIndentOptions.jsxIndentProps[0] = rule[0]
        if typeof rule[1] is 'number'
          @eslintIndentOptions.jsxIndentProps[1] = rule[1] / @atomTabLength
        else @eslintIndentOptions.jsxIndentProps[1] = 1

      rule = eslintRules['react/jsx-closing-bracket-location']
      @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing = TAGALIGNED
      @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty = TAGALIGNED
      if typeof rule is 'number'
        @eslintIndentOptions.jsxClosingBracketLocation[0] = rule
      else if typeof rule is 'object' # array
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

  # get tab indents from eslint indent
  getEslintIndent: () ->
    if @eslintIndentOptions.indent[0] then jsIndent = @eslintIndentOptions.indent[1]
    else jsIndent = 0
    jsIndent
