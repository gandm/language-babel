// SYNTAX TEST "source.js.jsx"

// tight greater-/less-than operations.

for (var i=1; i<table.rows.length; i++) {
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^ ^^^^ ^^^^ ^^^^^^^^^^^^^^^^^^^^ ^^^^    meta.for.js
//^                                        keyword.control.loop.js
//  ^                                 ^    meta.brace.round.js
//   ^^^                                   storage.type.js
//       ^    ^                    ^       variable.other.readwrite.js
//        ^                                keyword.operator.assignment.js
//         ^                               constant.numeric.js
//          ^                    ^         punctuation.terminator.statement.js
//             ^                           keyword.operator.relational.js
//              ^^^^^                      variable.other.object.js
//                   ^    ^                keyword.operator.accessor.js
//                    ^^^^ ^^^^^^          meta.property.object.js
//                    ^^^^ ^^^^^^          variable.other.property.js
//                                  ^^     keyword.operator.arithmetic.js
//                                      ^  meta.brace.curly.js
  var row = table.rows[i]
//^^^                      storage.type.js
//    ^^^              ^   variable.other.readwrite.js
//        ^                keyword.operator.assignment.js
//          ^^^^^          variable.other.object.js
//               ^         keyword.operator.accessor.js
//                ^^^^     meta.property.object.js
//                ^^^^     variable.other.property.js
//                    ^ ^  meta.brace.square.js
  var data = {}
//^^^            storage.type.js
//    ^^^^       variable.other.readwrite.js
//         ^     keyword.operator.assignment.js
//           ^^  meta.brace.curly.litobj.js
  for (var j=0; j<row.cells.length; j++) {
//^^^ ^^^^ ^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^    meta.for.js
//^^^                                       keyword.control.loop.js
//    ^                                ^    meta.brace.round.js
//     ^^^                                  storage.type.js
//         ^    ^                   ^       variable.other.readwrite.js
//          ^                               keyword.operator.assignment.js
//           ^                              constant.numeric.js
//            ^                   ^         punctuation.terminator.statement.js
//               ^                          keyword.operator.relational.js
//                ^^^                       variable.other.object.js
//                   ^     ^                keyword.operator.accessor.js
//                    ^^^^^ ^^^^^^          meta.property.object.js
//                    ^^^^^ ^^^^^^          variable.other.property.js
//                                   ^^     keyword.operator.arithmetic.js
//                                       ^  meta.brace.curly.js
    data[top[j]] = row.cells[j].innerHTML;
//  ^^^^ ^^^       ^^^                      variable.other.object.js
//      ^   ^ ^^            ^ ^             meta.brace.square.js
//           ^               ^              variable.other.readwrite.js
//               ^                          keyword.operator.assignment.js
//                    ^        ^            keyword.operator.accessor.js
//                     ^^^^^    ^^^^^^^^^   meta.property.object.js
//                     ^^^^^    ^^^^^^^^^   variable.other.property.js
//                                       ^  punctuation.terminator.statement.js
  }
//^  meta.brace.curly.js
  data.push(data)
//^^^^             variable.other.object.js
//    ^            keyword.operator.accessor.js
//     ^^^^        support.function.mutator.js
//         ^    ^  meta.brace.round.js
//          ^^^^   variable.other.readwrite.js
}
// <- meta.brace.curly.js

// comments between attributes,
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^ ^^^^^^^ ^^^^^^^^^^^  comment.line.double-slash.js
// namespaced components, and
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^^^ ^^^^^^^^^^^ ^^^  comment.line.double-slash.js
// non-alpha chars in tag/attribute names
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^^ ^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^  comment.line.double-slash.js

<div /* comment */ onClick={this.onClick}>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^ ^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//                                       ^  punctuation.definition.tag.jsx
//^^                                        entity.name.tag.open.jsx
//   ^^ ^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//   ^^ ^^^^^^^ ^^                          comment.block.js
//   ^^         ^^                          punctuation.definition.comment.js
//                 ^^^^^^^                  entity.other.attribute-name.jsx
//                        ^                 keyword.operator.assignment.jsx
//                         ^^^^^^^^^^^^^^   meta.embedded.expression.js
//                         ^                punctuation.section.embedded.begin.jsx
//                          ^^^^            variable.language.this.js
//                              ^           keyword.operator.accessor.js
//                               ^^^^^^^    meta.property.object.js
//                               ^^^^^^^    variable.other.property.js
//                                      ^   punctuation.section.embedded.end.jsx
//                                       ^  JSXStartTagEnd
  <Emoji.stuck_out_tongue />
//^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.tag.jsx
//^^^^^^^^^^^^^^^^^^^^^^^ ^^  JSXAttrs
//^^^^^^^^^^^^^^^^^^^^^^^ ^^  JSXNested
//^                       ^^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^^^^^^^^^     entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^^^^^^^^^     support.class.component.open.jsx
  <StyledForms.Input
//^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^^^^^^^^^^^^^^^^^^  JSXAttrs
//^^^^^^^^^^^^^^^^^^  JSXNested
//^                   punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^^^^  entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^^^^  support.class.component.open.jsx
    $parent={this}
//  ^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^  JSXNested
//  ^^^^^^^         entity.other.attribute-name.jsx
//         ^        keyword.operator.assignment.jsx
//          ^^^^^^  meta.embedded.expression.js
//          ^       punctuation.section.embedded.begin.jsx
//           ^^^^   variable.language.this.js
//               ^  punctuation.section.embedded.end.jsx
    has_emoji={true}
//  ^^^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^^^  JSXNested
//  ^^^^^^^^^         entity.other.attribute-name.jsx
//           ^        keyword.operator.assignment.jsx
//            ^^^^^^  meta.embedded.expression.js
//            ^       punctuation.section.embedded.begin.jsx
//             ^^^^   constant.language.boolean.true.js
//                 ^  punctuation.section.embedded.end.jsx
    /* here's another comment */
//  ^^ ^^^^^^ ^^^^^^^ ^^^^^^^ ^^  meta.tag.jsx
//  ^^ ^^^^^^ ^^^^^^^ ^^^^^^^ ^^  JSXAttrs
//  ^^ ^^^^^^ ^^^^^^^ ^^^^^^^ ^^  JSXNested
//  ^^ ^^^^^^ ^^^^^^^ ^^^^^^^ ^^  comment.block.js
//  ^^                        ^^  punctuation.definition.comment.js
    className='styled-input'>
//  ^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//  ^^^^^^^^^                  entity.other.attribute-name.jsx
//           ^                 keyword.operator.assignment.jsx
//            ^^^^^^^^^^^^^^   string.quoted.single.js
//            ^                punctuation.definition.string.begin.jsx
//                         ^   punctuation.definition.string.end.jsx
//                          ^  punctuation.definition.tag.jsx
//                          ^  JSXStartTagEnd
  </StyledForms.Input>
//^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//^^^^^^^^^^^^^^^^^^^^  JSXNested
//^^                 ^  punctuation.definition.tag.jsx
//^^                    JSXEndTagStart
//  ^^^^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//  ^^^^^^^^^^^^^^^^^   support.class.component.close.jsx
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx



// >> only:(source.js.jsx)
