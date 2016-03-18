{CompositeDisposable, File, Range, Point} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
autoCompleteJSX = require './auto-complete-jsx'
stripJsonComments = require 'strip-json-comments'
YAML = require 'js-yaml'


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
TERNARY_IF              = 10      # Ternary ?
TERNARY_ELSE            = 11      # Ternary :

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
    # e.g. eslint indent [1,4] with an Atom tab spacing of 2 becomes indent [1,2]
    @eslintIndentOptions  =
      jsxClosingBracketLocation: [
        1,
        selfClosing: TAGALIGNED
        nonEmpty: TAGALIGNED
      ]
      jsxIndent: [1,1]            # 1 = enabled, 1=#tabs
      jsxIndentProps: [1,1]       # 1 = enabled, 1=#tabs
      indent: [1,1]               # 1 = enabled, 1=#tabs

    # regex to search for tag open/close tag and close tag
    @JSXREGEXP = /(<)([$_A-Za-z](?:[$_.:\-A-Za-z0-9])*)|(\/>)|(<\/)([$_A-Za-z](?:[$._:\-A-Za-z0-9])*)(>)|(>)|({)|(})|(\?)|(:)/g
    @autoJsx = true
    @mouseUp = true
    @multipleCursorTrigger = 1

    @disposables = new CompositeDisposable()
    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:auto-indent-react-jsx': (event) => @autoIndentJsxCommand()
    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:toggle-auto-indent-jsx': (event) =>  @autoJsx = not @autoJsx

    document.addEventListener 'mousedown', => @mouseUp = false
    document.addEventListener 'mouseup', => @mouseUp = true

    @disposables.add @editor.onDidChangeCursorPosition (event) => @changedCursorPosition(event)
    @disposables.add @editor.onDidStopChanging () => @didStopChanging()

    @atomTabLength = @editor.getTabLength()

    if @eslintrcFilename = @getEslintrcFilename()
      @eslintrcFilename = new File(@eslintrcFilename)
      @getEslintrcOptions(@eslintrcFilename.getPath())
      # watch eslintrc for changes
      @disposables.add @eslintrcFilename.onDidChange => @getEslintrcOptions(@eslintrcFilename.getPath())

  destroy: () ->
    @disposables.dispose()
    document.removeEventListener 'mousedown'
    document.removeEventListener 'mouseup'

  # command option to format line from a cursor position upwards to JSX start
  autoIndentJsxCommand: () ->
    cursorPosition = @editor.getCursorBufferPosition()
    bufferRow = cursorPosition.row
    return if not @jsxInScope(bufferRow)
    endPointOfJsx = new Point bufferRow,0 # next row start
    startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, cursorPosition
    @editor.transact 300, =>
      @indentJSX new Range(startPointOfJsx, endPointOfJsx)

  # changed cursor position
  changedCursorPosition: (event) =>
    return unless @mouseUp
    return unless event.oldBufferPosition.row isnt event.newBufferPosition.row
    return unless @autoJsx
    bufferRow = event.newBufferPosition.row
    # handle multiple cursors. only trigger indent on one change event
    # and then only at the highest row
    if @editor.hasMultipleCursors()
      cursorPositions = @editor.getCursorBufferPositions()
      if cursorPositions.length is @multipleCursorTrigger
        @multipleCursorTrigger = 1
        bufferRow = 0
        for cursorPosition in cursorPositions
          if cursorPosition.row > bufferRow then bufferRow = cursorPosition.row
      else
        @multipleCursorTrigger++
        return
    else cursorPosition = event.newBufferPosition
    return if not @jsxInScope bufferRow
    endPointOfJsx = new Point bufferRow+1,0 # next row start
    startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, cursorPosition
    @editor.transact 300, =>
      @indentJSX new Range(startPointOfJsx, endPointOfJsx)
    columnToMoveTo = /^\s*$/.exec(@editor.lineTextForBufferRow(bufferRow))?[0].length
    if columnToMoveTo? then @editor.setCursorBufferPosition [bufferRow, columnToMoveTo]

  # Buffer has stopped changing. Indent as required
  didStopChanging: () ->
    return unless @autoJsx
    selectedRange = @editor.getSelectedBufferRange()
    highestRow = Math.max selectedRange.start.row, selectedRange.end.row
    if highestRow isnt @highestSelectedRow
      @highestSelectedRow = highestRow
      scope = @editor.scopeDescriptorForBufferPosition([highestRow,0]).getScopesArray()
      if 'meta.tag.jsx' in scope
        endPointOfJsx = new Point highestRow,0
        startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, endPointOfJsx
        @editor.transact 300, =>
          @indentJSX new Range(startPointOfJsx, endPointOfJsx)

  # is the jsx on this line in scope
  jsxInScope: (bufferRow) ->
    scopes = @editor.scopeDescriptorForBufferPosition([bufferRow, 0]).getScopesArray()
    return 'meta.tag.jsx' in scopes

  # indent the JSX in the 'range' of rows
  # This is designed to be a single parse indenter to reduce the impact on the editor.
  # It assumes the grammar has done its job adding scopes to interesting tokens.
  # Those are JSX <tag, >, </tag, />, emedded expressions
  # outside the tag starting { and ending } and javascript braces outside a tag { & }
  # it uses an array to hold tokens and a push/pop stack to hold tokens not closed
  # the very first jsx tag must be corretly indeted by the user as we don't have
  # knowledge of preceeding Javascript.
  indentJSX: (range) ->
    tokenStack = []
    idxOfToken = 0
    stackOfTokensStillOpen = [] # length equivalent to token depth
    indent =  0
    isFirstTagOfBlock = true
    @JSXREGEXP.lastIndex = 0

    for row in [range.start.row..range.end.row]
      isFirstTokenOfLine = true
      tokenOnThisLine = false
      indentRecalc = false
      line = @editor.lineTextForBufferRow row

      # look for tokens in a buffer line
      while (( match = @JSXREGEXP.exec(line)) isnt null )
        matchColumn = match.index
        matchPointStart = new Point(row, matchColumn)
        matchPointEnd = new Point(row, matchColumn + match[0].length - 1)
        matchRange = new Range(matchPointStart, matchPointEnd)

        if not token =  @getToken(row, match) then continue

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
        # bit horrid but hopefully fast.
        switch (token)
          # tags starting <tag
          when JSXTAG_OPEN
            tokenOnThisLine = true
            # indent only on first token of a line
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              # isFirstTagOfBlock is used to mark the tag that starts the JSX but
              # also the first tag of blocks inside  embedded expressions. e.g.
              # <tbody>, <pComp> and <objectRow> are first tags
              # return (
              #       <tbody comp={<pComp property />}>
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
                    tagIndentation = firstCharIndentation = firstTagInLineIndentation =
                      @getEslintIndent() + @getIndentOfPreviousRow row
                    indentRecalc = @indentRow({row: row , blockIndent: firstCharIndentation })
              else if isFirstTagOfBlock and parentTokenIdx?
                indentRecalc = @indentRow({row: row , blockIndent: @getIndentOfPreviousRow(row), jsxIndent: 1})
              else if parentTokenIdx?
                indentRecalc = @indentRow({row: row , blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndent: 1})

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # tags ending </tag>
          when JSXTAG_CLOSE
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation } )

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # tags ending />
          when JSXTAG_SELFCLOSE_END
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if firstTagInLineIndentation is firstCharIndentation
                indentRecalc = @indentForClosingBracket  row,
                  tokenStack[parentTokenIdx],
                  @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing
              else
                indentRecalc = @indentRow({row: row
                  ,blockIndent: tokenStack[parentTokenIdx].firstTagInLineIndentation, jsxIndentProps: 1 } )

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # tags ending >
          when JSXTAG_CLOSE_ATTRS
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if firstTagInLineIndentation is firstCharIndentation
                indentRecalc = @indentForClosingBracket  row,
                  tokenStack[parentTokenIdx],
                  @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty
              else
                indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstTagInLineIndentation, jsxIndentProps: 1 })

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # embeded expression start {
          when JSXBRACE_OPEN
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if parentTokenIdx?
                if tokenStack[parentTokenIdx].type is JSXTAG_OPEN and tokenStack[parentTokenIdx].termsThisTagsAttributesIdx is null
                  indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndentProps: 1 })
                else
                  indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndent: 1 } )

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # embeded expression end }
          when JSXBRACE_CLOSE
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation })

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # Javascript brace Start {
          when BRACE_OPEN
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if isFirstTagOfBlock and
                  parentTokenIdx? and
                  tokenStack[parentTokenIdx].type is BRACE_OPEN and
                  tokenStack[parentTokenIdx].row is ( row - 1)
                    # previous line started with a brace so use different indent rule
                    # based upon eslint indent not React/indent
                    tagIndentation = firstCharIndentation =
                      @getEslintIndent() + @getIndentOfPreviousRow row
                    indentRecalc = @indentRow({row: row, blockIndent: firstCharIndentation})
              else if parentTokenIdx?
                indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndent: 1 } )

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # Javascript brace End }
          when BRACE_CLOSE
            tokenOnThisLine = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if parentTokenIdx?
                indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation })

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
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

          # Ternary operators
          when TERNARY_IF , TERNARY_ELSE
            isFirstTagOfBlock = true

      # handle lines with no token on them
      if idxOfToken and not tokenOnThisLine and row isnt range.end.row
        @indentUntokenisedLine row, tokenStack, stackOfTokensStillOpen

  # indent any lines that haven't any interesting tokens
  indentUntokenisedLine: (row, tokenStack, stackOfTokensStillOpen ) ->
    stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
    token = tokenStack[parentTokenIdx]
    switch token.type
      when JSXTAG_OPEN, JSXTAG_SELFCLOSE_START
        if  token.termsThisTagsAttributesIdx is null
          @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndentProps: 1 })
        else @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndent: 1 })
      when JSXBRACE_OPEN
        @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndent: 1 })
      when BRACE_OPEN
        @indentRow({row: row, blockIndent: token.firstCharIndentation, jsIndent: 1 })
      when JSXTAG_SELFCLOSE_END, JSXBRACE_CLOSE, JSXTAG_CLOSE_ATTRS
        @indentRow({row: row, blockIndent: tokenStack[token.parentTokenIdx].firstCharIndentation, jsxIndentProps: 1})
      when BRACE_CLOSE
        @indentRow({row: row, blockIndent: tokenStack[token.parentTokenIdx].firstCharIndentation, jsIndent: 1 })

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
    else if match[10]?
      if 'keyword.operator.ternary.js' is scope
        return TERNARY_IF
    else if match[11]?
      if 'keyword.operator.ternary.js' is scope
        return TERNARY_ELSE
    return NO_TOKEN


  # get indent of the previous row with chars in it
  getIndentOfPreviousRow: (row) ->
    return 0 unless row
    for row in [row-1...0]
      line = @editor.lineTextForBufferRow row
      return @editor.indentationForBufferRow row if  /.*\S/.test line
    return 0

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

  # get tab indents from eslint indent
  getEslintIndent: () ->
    if @eslintIndentOptions.indent[0] then jsIndent = @eslintIndentOptions.indent[1]
    else jsIndent = 0
    jsIndent

  # allign nonEmpty and selfClosing tags based on eslint rules
  # row to be indented based upon a parentTags properties and a rule type
  # returns indentRow's return value
  indentForClosingBracket: ( row, parentTag, closingBracketRule ) ->
    if @eslintIndentOptions.jsxClosingBracketLocation[0]
      if closingBracketRule is TAGALIGNED
        @indentRow({row: row, blockIndent: parentTag.tagIndentation})
      else if closingBracketRule is LINEALIGNED
        @indentRow({row: row, blockIndent: parentTag.firstCharIndentation })
      else if closingBracketRule is AFTERPROPS
        if @eslintIndentOptions.jsxIndentProps[0]
          @indentRow({row: row,  blockIndent: parentTag.tagIndentation, jsxIndentProps: 1 })
        else
          @indentRow({row: row,  blockIndent: parentTag.tagIndentation})
      else if closingBracketRule is PROPSALIGNED
        if @eslintIndentOptions.jsxIndentProps[0]
          @indentRow({row: row,  blockIndent: parentTag.firstTagInLineIndentation,jsxIndentProps: 1})
        else
          @indentRow({row: row,  blockIndent: parentTag.firstTagInLineIndentation})

  # indent a row by the addition of one or more indents.
  # returns false if no indent required as it is already correct
  # return true if indent was required
  # blockIndent is the indent to the start of this logical jsx block
  # other indents are the required indent based on eslint conditions for React
  # option contains row to indent and allowAdditionalIndents flag
  indentRow: (options) ->
    { row, allowAdditionalIndents, blockIndent, jsIndent, jsxIndent, jsxIndentProps } = options
    # calc overall indent
    if jsIndent
      if @eslintIndentOptions.indent[0]
        if @eslintIndentOptions.indent[1]
          blockIndent += jsIndent * @eslintIndentOptions.indent[1]
    if jsxIndent
      if @eslintIndentOptions.jsxIndent[0]
        if @eslintIndentOptions.jsxIndent[1]
          blockIndent += jsxIndent * @eslintIndentOptions.jsxIndent[1]
    if jsxIndentProps
      if @eslintIndentOptions.jsxIndentProps[0]
        if @eslintIndentOptions.jsxIndentProps[1]
          blockIndent += jsxIndentProps * @eslintIndentOptions.jsxIndentProps[1]
    # allowAdditionalIndents allows indents to be greater than the minimum
    # used where items are aligned but no eslint rules are applicable
    # so user has some discretion in adding more indents
    if allowAdditionalIndents
      if @editor.indentationForBufferRow(row) < blockIndent
        @editor.setIndentationForBufferRow row, blockIndent, { preserveLeadingWhitespace: false }
        return true
    else
      if @editor.indentationForBufferRow(row) isnt blockIndent
        @editor.setIndentationForBufferRow row, blockIndent, { preserveLeadingWhitespace: false }
        return true
    return false
