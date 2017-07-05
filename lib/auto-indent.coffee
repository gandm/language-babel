{CompositeDisposable, File, Range, Point} = require 'atom'
fs = require 'fs-plus'
path = require 'path'
autoCompleteJSX = require './auto-complete-jsx'
DidInsertText = require './did-insert-text'
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
JS_IF                   = 12      # JS IF
JS_ELSE                 = 13      # JS ELSE
SWITCH_BRACE_OPEN       = 14      # opening brace in switch { }
SWITCH_BRACE_CLOSE      = 15      # closing brace in switch { }
SWITCH_CASE             = 16      # switch case statement
SWITCH_DEFAULT          = 17      # switch default statement
JS_RETURN               = 18      # JS return
PAREN_OPEN              = 19      # paren open (
PAREN_CLOSE             = 20      # paren close )
TEMPLATE_START          = 21      # ` back-tick start
TEMPLATE_END            = 22      # ` back-tick end

# eslint property values
TAGALIGNED    = 'tag-aligned'
LINEALIGNED   = 'line-aligned'
AFTERPROPS    = 'after-props'
PROPSALIGNED  = 'props-aligned'

module.exports =
class AutoIndent
  constructor: (@editor) ->
    @DidInsertText = new DidInsertText(@editor)
    @autoJsx = atom.config.get('language-babel').autoIndentJSX
    # regex to search for tag open/close tag and close tag
    @JSXREGEXP = /(<)([$_A-Za-z](?:[$_.:\-A-Za-z0-9])*)|(\/>)|(<\/)([$_A-Za-z](?:[$._:\-A-Za-z0-9])*)(>)|(>)|({)|(})|(\?)|(:)|(if)|(else)|(case)|(default)|(return)|(\()|(\))|(`)/g
    @mouseUp = true
    @multipleCursorTrigger = 1
    @disposables = new CompositeDisposable()
    @eslintIndentOptions = @getIndentOptions()
    @templateDepth = 0 # track depth of any embedded back-tick templates

    # Observe autoIndentJSX for existing editors
    @disposables.add atom.config.observe 'language-babel.autoIndentJSX',
      (value) => @autoJsx = value

    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:auto-indent-jsx-on': (event) =>
        @autoJsx = true
        @eslintIndentOptions = @getIndentOptions()

    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:auto-indent-jsx-off': (event) =>  @autoJsx = false

    @disposables.add atom.commands.add 'atom-text-editor',
      'language-babel:toggle-auto-indent-jsx': (event) =>
        @autoJsx = not @autoJsx
        if @autoJsx then @eslintIndentOptions = @getIndentOptions()

    document.addEventListener 'mousedown', @onMouseDown
    document.addEventListener 'mouseup', @onMouseUp

    @disposables.add @editor.onDidChangeCursorPosition (event) => @changedCursorPosition(event)
    @handleOnDidStopChanging()

  destroy: () ->
    @disposables.dispose()
    @onDidStopChangingHandler.dispose()
    document.removeEventListener 'mousedown', @onMouseDown
    document.removeEventListener 'mouseup', @onMouseUp

  # changed cursor position
  changedCursorPosition: (event) =>
    return unless @autoJsx
    return unless @mouseUp
    return unless event.oldBufferPosition.row isnt event.newBufferPosition.row
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

    # remove any blank lines from where cursor was previously
    previousRow = event.oldBufferPosition.row
    if @jsxInScope(previousRow)
      blankLineEndPos = /^\s*$/.exec(@editor.lineTextForBufferRow(previousRow))?[0].length
      if blankLineEndPos?
        @indentRow({row: previousRow , blockIndent: 0 })

    return if not @jsxInScope bufferRow

    endPointOfJsx = new Point bufferRow,0 # next row start
    startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, cursorPosition
    @indentJSX new Range(startPointOfJsx, endPointOfJsx)
    columnToMoveTo = /^\s*$/.exec(@editor.lineTextForBufferRow(bufferRow))?[0].length
    if columnToMoveTo? then @editor.setCursorBufferPosition [bufferRow, columnToMoveTo]


  # Buffer has stopped changing. Indent as required
  didStopChanging: () ->
    return unless @autoJsx
    return unless @mouseUp
    selectedRange = @editor.getSelectedBufferRange()
    # if this is a tag start's end > or </ then don't auto indent
    # this ia fix to allow for the auto complete tag time to pop up
    if selectedRange.start.row is selectedRange.end.row and
      selectedRange.start.column is selectedRange.end.column
        return if 'JSXStartTagEnd' in @editor.scopeDescriptorForBufferPosition([selectedRange.start.row, selectedRange.start.column]).getScopesArray()
        return if 'JSXEndTagStart' in @editor.scopeDescriptorForBufferPosition([selectedRange.start.row, selectedRange.start.column]).getScopesArray()

    highestRow = Math.max selectedRange.start.row, selectedRange.end.row
    lowestRow = Math.min selectedRange.start.row, selectedRange.end.row

    # remove the handler for didStopChanging to avoid this change causing a new event
    @onDidStopChangingHandler.dispose()

    # work backwards through buffer rows indenting JSX as needed
    while ( highestRow >= lowestRow )
      if @jsxInScope(highestRow)
        endPointOfJsx = new Point highestRow,0
        startPointOfJsx =  autoCompleteJSX.getStartOfJSX @editor, endPointOfJsx
        @indentJSX new Range(startPointOfJsx, endPointOfJsx)
        highestRow = startPointOfJsx.row - 1
      else highestRow = highestRow - 1

    # renable this event handler after 300ms as per the default timeout for change events
    # to avoid this method being recalled!
    setTimeout(@handleOnDidStopChanging, 300)
    return

  handleOnDidStopChanging: =>
    @onDidStopChangingHandler = @editor.onDidStopChanging () => @didStopChanging()

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
    @templateDepth = 0

    for row in [range.start.row..range.end.row]
      isFirstTokenOfLine = true
      tokenOnThisLine = false
      indentRecalc = false
      firstTagInLineIndentation =  0
      line = @editor.lineTextForBufferRow row

      # look for tokens in a buffer line
      while (( match = @JSXREGEXP.exec(line)) isnt null )
        matchColumn = match.index
        matchPointStart = new Point(row, matchColumn)
        matchPointEnd = new Point(row, matchColumn + match[0].length - 1)
        matchRange = new Range(matchPointStart, matchPointEnd)

        if row is range.start.row and matchColumn < range.start.column then continue
        if not token =  @getToken(row, match) then continue

        firstCharIndentation = (@editor.indentationForBufferRow row)
        # convert the matched column position into tab indents
        if @editor.getSoftTabs()
          tokenIndentation = (matchColumn / @editor.getTabLength())
        else tokenIndentation =
          do (@editor) ->
            hardTabsFound = charsFound = 0
            for i in [0...matchColumn]
              if ((line.substr i, 1) is '\t')
                hardTabsFound++
              else
                charsFound++
            return hardTabsFound + ( charsFound / @editor.getTabLength() )

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
                  ( tokenStack[parentTokenIdx].type is BRACE_OPEN or
                  tokenStack[parentTokenIdx].type is JSXBRACE_OPEN )
                    firstTagInLineIndentation =  tokenIndentation
                    firstCharIndentation =
                      @eslintIndentOptions.jsxIndent[1] + tokenStack[parentTokenIdx].firstCharIndentation
                    indentRecalc = @indentRow({row: row , blockIndent: firstCharIndentation })
              else if isFirstTagOfBlock and parentTokenIdx?
                indentRecalc = @indentRow({row: row , blockIndent: @getIndentOfPreviousRow(row), jsxIndent: 1})
              else if parentTokenIdx? and @ternaryTerminatesPreviousLine(row)
                firstTagInLineIndentation =  tokenIndentation
                firstCharIndentation = @getIndentOfPreviousRow(row)
                indentRecalc = @indentRow({row: row , blockIndent: firstCharIndentation })
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
              tokenIndentation: tokenIndentation
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
              #if firstTagInLineIndentation is firstCharIndentation
              indentRecalc = @indentForClosingBracket  row,
                tokenStack[parentTokenIdx],
                @eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing

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
              #if tokenStack[parentTokenIdx].firstTagInLineIndentation is firstCharIndentation
              indentRecalc = @indentForClosingBracket  row,
                tokenStack[parentTokenIdx],
                @eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty

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
                  indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndentProps: 1})
                else
                  indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndent: 1} )

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
              continue

            isFirstTagOfBlock = true  # this may be the start of a new JSX block
            isFirstTokenOfLine = false

            stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
            tokenStack.push
              type: token
              name: ''
              row: row
              firstTagInLineIndentation: firstTagInLineIndentation
              tokenIndentation: tokenIndentation
              firstCharIndentation: firstCharIndentation
              parentTokenIdx: parentTokenIdx
              termsThisTagsAttributesIdx: null  # ptr to > tag
              termsThisTagIdx: null             # ptr to </tag>

            stackOfTokensStillOpen.push idxOfToken
            idxOfToken++

          # ternary start
          when TERNARY_IF
            tokenOnThisLine = true
            if isFirstTokenOfLine
              # is this ternary starting a new line
              if firstCharIndentation is tokenIndentation
                indentRecalc = @indentRow({row: row, blockIndent: @getIndentOfPreviousRow(row), jsxIndent: 1})
              else
                stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
                if parentTokenIdx?
                  if tokenStack[parentTokenIdx].type is JSXTAG_OPEN and tokenStack[parentTokenIdx].termsThisTagsAttributesIdx is null
                    indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndentProps: 1})
                  else
                    indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndent: 1} )


            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
              continue

            isFirstTagOfBlock = true  # this may be the start of a new JSX block
            isFirstTokenOfLine = false

            stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
            tokenStack.push
              type: token
              name: ''
              row: row
              firstTagInLineIndentation: firstTagInLineIndentation
              tokenIndentation: tokenIndentation
              firstCharIndentation: firstCharIndentation
              parentTokenIdx: parentTokenIdx
              termsThisTagsAttributesIdx: null  # ptr to > tag
              termsThisTagIdx: null             # ptr to </tag>

            stackOfTokensStillOpen.push idxOfToken
            idxOfToken++

          # embeded expression end }
          when JSXBRACE_CLOSE, TERNARY_ELSE
            tokenOnThisLine = true

            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation })

            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
              continue

            isFirstTagOfBlock = false
            isFirstTokenOfLine = false

            parentTokenIdx = stackOfTokensStillOpen.pop()
            tokenStack.push
              type: token
              name: ''
              row: row
              parentTokenIdx: parentTokenIdx         # ptr to opening token

            if parentTokenIdx >=0 then tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken
            idxOfToken++

          # Javascript brace Start { or switch brace start { or paren ( or back-tick `start
          when BRACE_OPEN, SWITCH_BRACE_OPEN, PAREN_OPEN, TEMPLATE_START
            tokenOnThisLine = true
            if token is TEMPLATE_START then @templateDepth++
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if isFirstTagOfBlock and
                  parentTokenIdx? and
                  tokenStack[parentTokenIdx].type is token and
                  tokenStack[parentTokenIdx].row is ( row - 1)
                    tokenIndentation = firstCharIndentation =
                      @eslintIndentOptions.jsxIndent[1] + @getIndentOfPreviousRow row
                    indentRecalc = @indentRow({row: row, blockIndent: firstCharIndentation})
              else if parentTokenIdx? and @ternaryTerminatesPreviousLine(row)
                firstTagInLineIndentation =  tokenIndentation
                firstCharIndentation = @getIndentOfPreviousRow(row)
                indentRecalc = @indentRow({row: row , blockIndent: firstCharIndentation })
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
              type: token
              name: ''
              row: row
              firstTagInLineIndentation: firstTagInLineIndentation
              tokenIndentation: tokenIndentation
              firstCharIndentation: firstCharIndentation
              parentTokenIdx: parentTokenIdx
              termsThisTagsAttributesIdx: null  # ptr to > tag
              termsThisTagIdx: null             # ptr to </tag>

            stackOfTokensStillOpen.push idxOfToken
            idxOfToken++

          # Javascript brace End } or switch brace end } or paren close ) or back-tick ` end
          when BRACE_CLOSE, SWITCH_BRACE_CLOSE, PAREN_CLOSE, TEMPLATE_END

            if token is SWITCH_BRACE_CLOSE
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if tokenStack[parentTokenIdx].type is SWITCH_CASE or tokenStack[parentTokenIdx].type is SWITCH_DEFAULT
                # we only allow a single case/default stack element per switch instance
                # so now we are at the switch's close brace we pop off any case/default tokens
                stackOfTokensStillOpen.pop()

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
                type: token
                name: ''
                row: row
                parentTokenIdx: parentTokenIdx         # ptr to <tag
              if parentTokenIdx >=0 then tokenStack[parentTokenIdx].termsThisTagIdx = idxOfToken
              idxOfToken++

            if token is TEMPLATE_END then @templateDepth--

          # case, default statement of switch
          when SWITCH_CASE, SWITCH_DEFAULT
            tokenOnThisLine = true
            isFirstTagOfBlock = true
            if isFirstTokenOfLine
              stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
              if parentTokenIdx?
                if tokenStack[parentTokenIdx].type is SWITCH_CASE or tokenStack[parentTokenIdx].type is SWITCH_DEFAULT
                  # we only allow a single case/default stack element per switch instance
                  # so position new case/default to the last ones position and then pop the last's
                  # off the stack.
                  indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation })
                  stackOfTokensStillOpen.pop()
                else if tokenStack[parentTokenIdx].type is SWITCH_BRACE_OPEN
                  indentRecalc = @indentRow({row: row, blockIndent: tokenStack[parentTokenIdx].firstCharIndentation, jsxIndent: 1 })

            # re-parse line if indent did something to it
            if indentRecalc
              line = @editor.lineTextForBufferRow row
              @JSXREGEXP.lastIndex = 0 #force regex to start again
              continue

            isFirstTokenOfLine = false

            stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()

            tokenStack.push
              type: token
              name: ''
              row: row
              firstTagInLineIndentation: firstTagInLineIndentation
              tokenIndentation: tokenIndentation
              firstCharIndentation: firstCharIndentation
              parentTokenIdx: parentTokenIdx
              termsThisTagsAttributesIdx: null  # ptr to > tag
              termsThisTagIdx: null             # ptr to </tag>

            stackOfTokensStillOpen.push idxOfToken
            idxOfToken++

          # Ternary and conditional if/else operators
          when JS_IF, JS_ELSE, JS_RETURN
            isFirstTagOfBlock = true

      # handle lines with no token on them
      if idxOfToken and not tokenOnThisLine
        # indent lines but remove any blank lines with white space except the last row
        if row isnt range.end.row
          blankLineEndPos = /^\s*$/.exec(@editor.lineTextForBufferRow(row))?[0].length
          if blankLineEndPos?
            @indentRow({row: row , blockIndent: 0 })
          else
            @indentUntokenisedLine row, tokenStack, stackOfTokensStillOpen
        else
          @indentUntokenisedLine row, tokenStack, stackOfTokensStillOpen


  # indent any lines that haven't any interesting tokens
  indentUntokenisedLine: (row, tokenStack, stackOfTokensStillOpen ) ->
    stackOfTokensStillOpen.push parentTokenIdx = stackOfTokensStillOpen.pop()
    return if not parentTokenIdx?
    token = tokenStack[parentTokenIdx]
    switch token.type
      when JSXTAG_OPEN, JSXTAG_SELFCLOSE_START
        if  token.termsThisTagsAttributesIdx is null
          @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndentProps: 1 })
        else @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndent: 1 })
      when JSXBRACE_OPEN, TERNARY_IF
        @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndent: 1, allowAdditionalIndents: true})
      when BRACE_OPEN, SWITCH_BRACE_OPEN, PAREN_OPEN
        @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndent: 1, allowAdditionalIndents: true})
      when JSXTAG_SELFCLOSE_END, JSXBRACE_CLOSE, JSXTAG_CLOSE_ATTRS, TERNARY_ELSE
        @indentRow({row: row, blockIndent: tokenStack[token.parentTokenIdx].firstCharIndentation, jsxIndentProps: 1})
      when BRACE_CLOSE, SWITCH_BRACE_CLOSE, PAREN_CLOSE
        @indentRow({row: row, blockIndent: tokenStack[token.parentTokenIdx].firstCharIndentation, jsxIndent: 1, allowAdditionalIndents: true})
      when SWITCH_CASE, SWITCH_DEFAULT
        @indentRow({row: row, blockIndent: token.firstCharIndentation, jsxIndent: 1 })
      when TEMPLATE_START, TEMPLATE_END
        return; # don't touch templates

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
      else if 'meta.brace.curly.switchStart.js' is scope
        return SWITCH_BRACE_OPEN
      else if 'meta.brace.curly.js' is scope or
        'meta.brace.curly.litobj.js' is scope
          return BRACE_OPEN
    else if match[9]?
      if 'punctuation.section.embedded.end.jsx' is scope
        return JSXBRACE_CLOSE
      else if 'meta.brace.curly.switchEnd.js' is scope
        return SWITCH_BRACE_CLOSE
      else if 'meta.brace.curly.js' is scope or
        'meta.brace.curly.litobj.js' is scope
          return BRACE_CLOSE
    else if match[10]?
      if 'keyword.operator.ternary.js' is scope
        return TERNARY_IF
    else if match[11]?
      if 'keyword.operator.ternary.js' is scope
        return TERNARY_ELSE
    else if match[12]?
      if 'keyword.control.conditional.js' is scope
        return JS_IF
    else if match[13]?
      if 'keyword.control.conditional.js' is scope
        return JS_ELSE
    else if match[14]?
      if 'keyword.control.switch.js' is scope
        return SWITCH_CASE
    else if match[15]?
      if 'keyword.control.switch.js' is scope
        return SWITCH_DEFAULT
    else if match[16]?
      if 'keyword.control.flow.js' is scope
        return JS_RETURN
    else if match[17]?
      if 'meta.brace.round.js' is scope or
       'meta.brace.round.graphql' is scope or
       'meta.brace.round.directive.graphql' is scope
          return PAREN_OPEN
    else if match[18]?
      if 'meta.brace.round.js' is scope or
       'meta.brace.round.graphql' is scope or
       'meta.brace.round.directive.graphql' is scope
          return PAREN_CLOSE
    else if match[19]?
      if 'punctuation.definition.quasi.begin.js' is scope
        return TEMPLATE_START
      if 'punctuation.definition.quasi.end.js' is scope
        return TEMPLATE_END

    return NO_TOKEN


  # get indent of the previous row with chars in it
  getIndentOfPreviousRow: (row) ->
    return 0 unless row
    for row in [row-1...0]
      line = @editor.lineTextForBufferRow row
      return @editor.indentationForBufferRow row if  /.*\S/.test line
    return 0

  # get eslint translated indent options
  getIndentOptions: () ->
    if not @autoJsx then return @translateIndentOptions()
    if eslintrcFilename = @getEslintrcFilename()
      eslintrcFilename = new File(eslintrcFilename)
      @translateIndentOptions(@readEslintrcOptions(eslintrcFilename.getPath()))
    else
      @translateIndentOptions({}) # get defaults

  # return text string of a project based .eslintrc file if one exists
  getEslintrcFilename: () ->
    projectContainingSource = atom.project.relativizePath @editor.getPath()
    # Is the sourceFile located inside an Atom project folder?
    if projectContainingSource[0]?
      path.join projectContainingSource[0], '.eslintrc'

  # mouse state
  onMouseDown: () =>
    @mouseUp = false

  # mouse state
  onMouseUp: () =>
    @mouseUp = true

  # to create indents. We can read and return the rules properties or undefined
  readEslintrcOptions: (eslintrcFile) ->
    # get local path overides
    if fs.existsSync eslintrcFile
      fileContent = stripJsonComments(fs.readFileSync(eslintrcFile, 'utf8'))
      try
        eslintRules = (YAML.safeLoad fileContent).rules
        if eslintRules then return eslintRules
      catch err
        atom.notifications.addError "LB: Error reading .eslintrc at #{eslintrcFile}",
          dismissable: true
          detail: "#{err.message}"
    return {}

  # use eslint react format described at http://tinyurl.com/p4mtatv
  # turn spaces into tab dimensions which can be decimal
  # a empty object argument parses back the default settings
  translateIndentOptions: (eslintRules) ->
    # Eslint rules to use as default overidden by .eslintrc
    # N.B. that this is not the same as the eslint rules in that
    # the tab-spaces and 'tab's in eslintrc are converted to tabs based upon
    # the Atom editor tab spacing.
    # e.g. eslint indent [1,4] with an Atom tab spacing of 2 becomes indent [1,2]
    eslintIndentOptions  =
      jsxIndent: [1,1]            # 1 = enabled, 1=#tabs
      jsxIndentProps: [1,1]       # 1 = enabled, 1=#tabs
      jsxClosingBracketLocation: [
        1,
        selfClosing: TAGALIGNED
        nonEmpty: TAGALIGNED
      ]

    return eslintIndentOptions unless typeof eslintRules is "object"

    ES_DEFAULT_INDENT = 4 # default eslint indent as spaces

    # read indent if it exists and use it as the default indent for JSX
    rule = eslintRules['indent']
    if typeof rule is 'number' or typeof rule is 'string'
      defaultIndent  = ES_DEFAULT_INDENT / @editor.getTabLength()
    else if typeof rule is 'object'
      if typeof rule[1] is 'number'
        defaultIndent  = rule[1] / @editor.getTabLength()
      else defaultIndent  = 1
    else defaultIndent  = 1

    rule = eslintRules['react/jsx-indent']
    if typeof rule is 'number' or typeof rule is 'string'
      eslintIndentOptions.jsxIndent[0] = rule
      eslintIndentOptions.jsxIndent[1] = ES_DEFAULT_INDENT / @editor.getTabLength()
    else if typeof rule is 'object'
      eslintIndentOptions.jsxIndent[0] = rule[0]
      if typeof rule[1] is 'number'
        eslintIndentOptions.jsxIndent[1] = rule[1] / @editor.getTabLength()
      else eslintIndentOptions.jsxIndent[1] = 1
    else eslintIndentOptions.jsxIndent[1] = defaultIndent

    rule = eslintRules['react/jsx-indent-props']
    if typeof rule is 'number' or typeof rule is 'string'
      eslintIndentOptions.jsxIndentProps[0] = rule
      eslintIndentOptions.jsxIndentProps[1] = ES_DEFAULT_INDENT / @editor.getTabLength()
    else if typeof rule is 'object'
      eslintIndentOptions.jsxIndentProps[0] = rule[0]
      if typeof rule[1] is 'number'
        eslintIndentOptions.jsxIndentProps[1] = rule[1] / @editor.getTabLength()
      else eslintIndentOptions.jsxIndentProps[1] = 1
    else eslintIndentOptions.jsxIndentProps[1] = defaultIndent

    rule = eslintRules['react/jsx-closing-bracket-location']
    if typeof rule is 'number' or typeof rule is 'string'
      eslintIndentOptions.jsxClosingBracketLocation[0] = rule
    else if typeof rule is 'object' # array
      eslintIndentOptions.jsxClosingBracketLocation[0] = rule[0]
      if typeof rule[1] is 'string'
        eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing =
          eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty =
            rule[1]
      else
        if rule[1].selfClosing?
          eslintIndentOptions.jsxClosingBracketLocation[1].selfClosing = rule[1].selfClosing
        if rule[1].nonEmpty?
          eslintIndentOptions.jsxClosingBracketLocation[1].nonEmpty = rule[1].nonEmpty

    return eslintIndentOptions

  # does the previous line terminate with a ternary else :
  ternaryTerminatesPreviousLine: (row) ->
    row--
    return false unless row >=0
    line = @editor.lineTextForBufferRow row
    match = /:\s*$/.exec(line)
    return false if match is null
    scope = @editor.scopeDescriptorForBufferPosition([row, match.index]).getScopesArray().pop()
    return false if scope isnt 'keyword.operator.ternary.js'
    return true

  # allign nonEmpty and selfClosing tags based on eslint rules
  # row to be indented based upon a parentTags properties and a rule type
  # returns indentRow's return value
  indentForClosingBracket: ( row, parentTag, closingBracketRule ) ->
    if @eslintIndentOptions.jsxClosingBracketLocation[0]
      if closingBracketRule is TAGALIGNED
        @indentRow({row: row, blockIndent: parentTag.tokenIndentation})
      else if closingBracketRule is LINEALIGNED
        @indentRow({row: row, blockIndent: parentTag.firstCharIndentation })
      else if closingBracketRule is AFTERPROPS
        # this really isn't valid as this tag shouldn't be on a line by itself
        # but I don't reformat lines just indent!
        # indent to make it look OK although it will fail eslint
        if @eslintIndentOptions.jsxIndentProps[0]
          @indentRow({row: row,  blockIndent: parentTag.firstCharIndentation, jsxIndentProps: 1 })
        else
          @indentRow({row: row,  blockIndent: parentTag.firstCharIndentation})
      else if closingBracketRule is PROPSALIGNED
        if @eslintIndentOptions.jsxIndentProps[0]
          @indentRow({row: row,  blockIndent: parentTag.tokenIndentation,jsxIndentProps: 1})
        else
          @indentRow({row: row,  blockIndent: parentTag.tokenIndentation})

  # indent a row by the addition of one or more indents.
  # returns false if no indent required as it is already correct
  # return true if indent was required
  # blockIndent is the indent to the start of this logical jsx block
  # other indents are the required indent based on eslint conditions for React
  # option contains row to indent and allowAdditionalIndents flag
  indentRow: (options) ->
    { row, allowAdditionalIndents, blockIndent, jsxIndent, jsxIndentProps } = options
    if @templateDepth > 0 then return false # don't indent inside a template
    # calc overall indent
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
      if @editor.indentationForBufferRow(row) < blockIndent or
        @editor.indentationForBufferRow(row) > blockIndent + allowAdditionalIndents
          @editor.setIndentationForBufferRow row, blockIndent, { preserveLeadingWhitespace: false }
          return true
    else
      if @editor.indentationForBufferRow(row) isnt blockIndent
        @editor.setIndentationForBufferRow row, blockIndent, { preserveLeadingWhitespace: false }
        return true
    return false
