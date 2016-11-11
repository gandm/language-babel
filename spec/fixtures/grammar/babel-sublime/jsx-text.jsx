// SYNTAX TEST "source.js.jsx"
<div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^  meta.tag.jsx
//  ^  punctuation.definition.tag.jsx
//^^   entity.name.tag.open.jsx
//  ^  JSXAttrs
//  ^  JSXStartTagEnd
  {'it\'s with text inside'}
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.tag.jsx
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXAttrs
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXNested
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.embedded.expression.js
//^                           punctuation.section.embedded.begin.jsx
// ^^^^^^ ^^^^ ^^^^ ^^^^^^^   string.quoted.single.js
// ^                          punctuation.definition.string.begin.jsx
//                        ^   punctuation.definition.string.end.jsx
//                         ^  punctuation.section.embedded.end.jsx
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div>{'it\'s with text inside'}</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^^^  meta.tag.jsx
//  ^                          ^^   ^  punctuation.definition.tag.jsx
//^^                                   entity.name.tag.open.jsx
//  ^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^      JSXAttrs
//  ^                                  JSXStartTagEnd
//   ^^^^^^^ ^^^^ ^^^^ ^^^^^^^^        JSXNested
//   ^^^^^^^ ^^^^ ^^^^ ^^^^^^^^        meta.embedded.expression.js
//   ^                                 punctuation.section.embedded.begin.jsx
//    ^^^^^^ ^^^^ ^^^^ ^^^^^^^         string.quoted.single.js
//    ^                                punctuation.definition.string.begin.jsx
//                           ^         punctuation.definition.string.end.jsx
//                            ^        punctuation.section.embedded.end.jsx
//                             ^^      JSXEndTagStart
//                               ^^^   entity.name.tag.close.jsx

<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr=''>
//^^^^^^^^  meta.tag.jsx
//^^^^^^^^  JSXAttrs
//^^^^      entity.other.attribute-name.jsx
//    ^     keyword.operator.assignment.jsx
//     ^^   string.quoted.single.js
//     ^    punctuation.definition.string.begin.jsx
//      ^   punctuation.definition.string.end.jsx
//       ^  punctuation.definition.tag.jsx
//       ^  JSXStartTagEnd
  {'it\'s with text inside'}
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.tag.jsx
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXAttrs
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXNested
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.embedded.expression.js
//^                           punctuation.section.embedded.begin.jsx
// ^^^^^^ ^^^^ ^^^^ ^^^^^^^   string.quoted.single.js
// ^                          punctuation.definition.string.begin.jsx
//                        ^   punctuation.definition.string.end.jsx
//                         ^  punctuation.section.embedded.end.jsx
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div attr="">{'it\'s with text inside'}</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^^^  meta.tag.jsx
//          ^                          ^^   ^  punctuation.definition.tag.jsx
//^^                                           entity.name.tag.open.jsx
//   ^^^^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^      JSXAttrs
//   ^^^^                                      entity.other.attribute-name.jsx
//       ^                                     keyword.operator.assignment.jsx
//        ^^                                   string.quoted.double.js
//        ^   ^                                punctuation.definition.string.begin.jsx
//         ^                         ^         punctuation.definition.string.end.jsx
//          ^                                  JSXStartTagEnd
//           ^^^^^^^ ^^^^ ^^^^ ^^^^^^^^        JSXNested
//           ^^^^^^^ ^^^^ ^^^^ ^^^^^^^^        meta.embedded.expression.js
//           ^                                 punctuation.section.embedded.begin.jsx
//            ^^^^^^ ^^^^ ^^^^ ^^^^^^^         string.quoted.single.js
//                                    ^        punctuation.section.embedded.end.jsx
//                                     ^^      JSXEndTagStart
//                                       ^^^   entity.name.tag.close.jsx
<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr="">
//^^^^^^^^  meta.tag.jsx
//^^^^^^^^  JSXAttrs
//^^^^      entity.other.attribute-name.jsx
//    ^     keyword.operator.assignment.jsx
//     ^^   string.quoted.double.js
//     ^    punctuation.definition.string.begin.jsx
//      ^   punctuation.definition.string.end.jsx
//       ^  punctuation.definition.tag.jsx
//       ^  JSXStartTagEnd
  {"it's with text inside"}
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.tag.jsx
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXAttrs
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXNested
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.embedded.expression.js
//^                          punctuation.section.embedded.begin.jsx
// ^^^^^ ^^^^ ^^^^ ^^^^^^^   string.quoted.double.js
// ^                         punctuation.definition.string.begin.jsx
//                       ^   punctuation.definition.string.end.jsx
//                        ^  punctuation.section.embedded.end.jsx
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div attr={}>{"it's with text inside"}</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^^^  meta.tag.jsx
//          ^                         ^^   ^  punctuation.definition.tag.jsx
//^^                                          entity.name.tag.open.jsx
//   ^^^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^      JSXAttrs
//   ^^^^                                     entity.other.attribute-name.jsx
//       ^                                    keyword.operator.assignment.jsx
//        ^^ ^^^^^^ ^^^^ ^^^^ ^^^^^^^^        meta.embedded.expression.js
//        ^  ^                                punctuation.section.embedded.begin.jsx
//         ^                         ^        punctuation.section.embedded.end.jsx
//          ^                                 JSXStartTagEnd
//           ^^^^^^ ^^^^ ^^^^ ^^^^^^^^        JSXNested
//            ^^^^^ ^^^^ ^^^^ ^^^^^^^         string.quoted.double.js
//            ^                               punctuation.definition.string.begin.jsx
//                                  ^         punctuation.definition.string.end.jsx
//                                    ^^      JSXEndTagStart
//                                      ^^^   entity.name.tag.close.jsx
<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr={}>
//^^^^^^^^  meta.tag.jsx
//^^^^^^^^  JSXAttrs
//^^^^      entity.other.attribute-name.jsx
//    ^     keyword.operator.assignment.jsx
//     ^^   meta.embedded.expression.js
//     ^    punctuation.section.embedded.begin.jsx
//      ^   punctuation.section.embedded.end.jsx
//       ^  punctuation.definition.tag.jsx
//       ^  JSXStartTagEnd
  {"it's with text inside"}
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.tag.jsx
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXAttrs
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  JSXNested
//^^^^^^ ^^^^ ^^^^ ^^^^^^^^  meta.embedded.expression.js
//^                          punctuation.section.embedded.begin.jsx
// ^^^^^ ^^^^ ^^^^ ^^^^^^^   string.quoted.double.js
// ^                         punctuation.definition.string.begin.jsx
//                       ^   punctuation.definition.string.end.jsx
//                        ^  punctuation.section.embedded.end.jsx
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^  meta.tag.jsx
//  ^  punctuation.definition.tag.jsx
//^^   entity.name.tag.open.jsx
//  ^  JSXAttrs
//  ^  JSXStartTagEnd
  it's with text inside
//^^^^ ^^^^ ^^^^ ^^^^^^  meta.tag.jsx
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXAttrs
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXNested
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div>it's with text inside</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//  ^                     ^^   ^  punctuation.definition.tag.jsx
//^^                              entity.name.tag.open.jsx
//  ^^^^^ ^^^^ ^^^^ ^^^^^^^^      JSXAttrs
//  ^                             JSXStartTagEnd
//   ^^^^ ^^^^ ^^^^ ^^^^^^        JSXNested
//                        ^^      JSXEndTagStart
//                          ^^^   entity.name.tag.close.jsx

<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr=''>
//^^^^^^^^  meta.tag.jsx
//^^^^^^^^  JSXAttrs
//^^^^      entity.other.attribute-name.jsx
//    ^     keyword.operator.assignment.jsx
//     ^^   string.quoted.single.js
//     ^    punctuation.definition.string.begin.jsx
//      ^   punctuation.definition.string.end.jsx
//       ^  punctuation.definition.tag.jsx
//       ^  JSXStartTagEnd
  it's with text inside
//^^^^ ^^^^ ^^^^ ^^^^^^  meta.tag.jsx
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXAttrs
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXNested
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div attr="">it's with text inside</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//          ^                     ^^   ^  punctuation.definition.tag.jsx
//^^                                      entity.name.tag.open.jsx
//   ^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^      JSXAttrs
//   ^^^^                                 entity.other.attribute-name.jsx
//       ^                                keyword.operator.assignment.jsx
//        ^^                              string.quoted.double.js
//        ^                               punctuation.definition.string.begin.jsx
//         ^                              punctuation.definition.string.end.jsx
//          ^                             JSXStartTagEnd
//           ^^^^ ^^^^ ^^^^ ^^^^^^        JSXNested
//                                ^^      JSXEndTagStart
//                                  ^^^   entity.name.tag.close.jsx
<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr="">
//^^^^^^^^  meta.tag.jsx
//^^^^^^^^  JSXAttrs
//^^^^      entity.other.attribute-name.jsx
//    ^     keyword.operator.assignment.jsx
//     ^^   string.quoted.double.js
//     ^    punctuation.definition.string.begin.jsx
//      ^   punctuation.definition.string.end.jsx
//       ^  punctuation.definition.tag.jsx
//       ^  JSXStartTagEnd
  it's with text inside
//^^^^ ^^^^ ^^^^ ^^^^^^  meta.tag.jsx
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXAttrs
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXNested
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div attr={}>it's with text inside</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//          ^                     ^^   ^  punctuation.definition.tag.jsx
//^^                                      entity.name.tag.open.jsx
//   ^^^^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^      JSXAttrs
//   ^^^^                                 entity.other.attribute-name.jsx
//       ^                                keyword.operator.assignment.jsx
//        ^^                              meta.embedded.expression.js
//        ^                               punctuation.section.embedded.begin.jsx
//         ^                              punctuation.section.embedded.end.jsx
//          ^                             JSXStartTagEnd
//           ^^^^ ^^^^ ^^^^ ^^^^^^        JSXNested
//                                ^^      JSXEndTagStart
//                                  ^^^   entity.name.tag.close.jsx
<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr={}>
//^^^^^^^^  meta.tag.jsx
//^^^^^^^^  JSXAttrs
//^^^^      entity.other.attribute-name.jsx
//    ^     keyword.operator.assignment.jsx
//     ^^   meta.embedded.expression.js
//     ^    punctuation.section.embedded.begin.jsx
//      ^   punctuation.section.embedded.end.jsx
//       ^  punctuation.definition.tag.jsx
//       ^  JSXStartTagEnd
  it's with text inside
//^^^^ ^^^^ ^^^^ ^^^^^^  meta.tag.jsx
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXAttrs
//^^^^ ^^^^ ^^^^ ^^^^^^  JSXNested
</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

<div attr>it's with text inside</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^ ^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//       ^                     ^^   ^  punctuation.definition.tag.jsx
//^^                                   entity.name.tag.open.jsx
//   ^^^^^^^^^ ^^^^ ^^^^ ^^^^^^^^      JSXAttrs
//   ^^^^                              entity.other.attribute-name.jsx
//       ^                             JSXStartTagEnd
//        ^^^^ ^^^^ ^^^^ ^^^^^^        JSXNested
//                             ^^      JSXEndTagStart
//                               ^^^   entity.name.tag.close.jsx

<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
>it's with text inside</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXStartTagEnd
 // <- meta.tag.jsx JSXAttrs JSXNested
//^^^ ^^^^ ^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//^^^ ^^^^ ^^^^ ^^^^^^^^      JSXAttrs
//                    ^^   ^  punctuation.definition.tag.jsx
//^^^ ^^^^ ^^^^ ^^^^^^        JSXNested
//                    ^^      JSXEndTagStart
//                      ^^^   entity.name.tag.close.jsx

<div
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^  meta.tag.jsx
//^^  entity.name.tag.open.jsx
  attr={}
//^^^^^^^  meta.tag.jsx
//^^^^^^^  JSXAttrs
//^^^^     entity.other.attribute-name.jsx
//    ^    keyword.operator.assignment.jsx
//     ^^  meta.embedded.expression.js
//     ^   punctuation.section.embedded.begin.jsx
//      ^  punctuation.section.embedded.end.jsx
>it's with text inside</div>
// <- meta.tag.jsx JSXAttrs punctuation.definition.tag.jsx JSXStartTagEnd
 // <- meta.tag.jsx JSXAttrs JSXNested
//^^^ ^^^^ ^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//^^^ ^^^^ ^^^^ ^^^^^^^^      JSXAttrs
//                    ^^   ^  punctuation.definition.tag.jsx
//^^^ ^^^^ ^^^^ ^^^^^^        JSXNested
//                    ^^      JSXEndTagStart
//                      ^^^   entity.name.tag.close.jsx
