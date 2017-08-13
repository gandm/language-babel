// SYNTAX TEST "source.js.jsx"
class Point {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^          meta.class.js
//^^^          storage.type.class.js
//    ^^^^^    entity.name.class.js
//          ^  punctuation.section.class.begin.js
  #x
//^^  meta.class.body.js
//^   keyword.operator.private.js
// ^  variable.other.readwrite.js
  #y
//^^  meta.class.body.js
//^   keyword.operator.private.js
// ^  variable.other.readwrite.js
  #x = 0,#y = 0
//^^ ^ ^^^^ ^ ^  meta.class.body.js
//^      ^       keyword.operator.private.js
// ^      ^      variable.other.readwrite.js
//   ^      ^    keyword.operator.assignment.js
//     ^      ^  constant.numeric.js
//      ^        meta.delimiter.comma.js
  static x = 1, #y, [a]
//^^^^^^ ^ ^ ^^ ^^^ ^^^  meta.class.body.js
//^^^^^^                 storage.modifier.js
//       ^       ^   ^   variable.other.readwrite.js
//         ^             keyword.operator.assignment.js
//           ^           constant.numeric.js
//            ^   ^      meta.delimiter.comma.js
//              ^        keyword.operator.private.js
//                  ^ ^  meta.brace.square.js
  z, #w = 2, [b]
//^^ ^^ ^ ^^ ^^^  meta.class.body.js
//^   ^       ^   variable.other.readwrite.js
// ^       ^      meta.delimiter.comma.js
//   ^            keyword.operator.private.js
//      ^         keyword.operator.assignment.js
//        ^       constant.numeric.js
//           ^ ^  meta.brace.square.js
  get #x() { return #xValue }
//^^^ ^^^^ ^ ^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^ ^^^^ ^ ^^^^^^ ^^^^^^^ ^  meta.accessor.js
//^^^                          storage.type.accessor.js
//    ^             ^          keyword.operator.private.js
//     ^                       entity.name.function.accessor.js
//      ^                      punctuation.definition.parameters.begin.js
//      ^^                     meta.brace.round.js
//       ^                     punctuation.definition.parameters.end.js
//         ^                ^  meta.brace.curly.js
//           ^^^^^^            keyword.control.flow.js
//                   ^^^^^^    variable.other.readwrite.js
  set #x(value) {
//^^^ ^^^^^^^^^ ^  meta.class.body.js
//^^^ ^^^^^^^^^ ^  meta.accessor.js
//^^^              storage.type.accessor.js
//    ^            keyword.operator.private.js
//     ^           entity.name.function.accessor.js
//      ^          punctuation.definition.parameters.begin.js
//      ^     ^    meta.brace.round.js
//       ^^^^^     meta.function.parameters.js
//       ^^^^^     variable.other.readwrite.js
//            ^    punctuation.definition.parameters.end.js
//              ^  meta.brace.curly.js
    this.#xValue = value
//  ^^^^^^^^^^^^ ^ ^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^ ^ ^^^^^  meta.accessor.js
//  ^^^^                  variable.language.this.js
//      ^                 keyword.operator.accessor.js
//       ^^^^^^^          meta.property.object.js
//       ^                keyword.operator.private.js
//        ^^^^^^          variable.other.property.js
//               ^        keyword.operator.assignment.js
//                 ^^^^^  variable.other.readwrite.js
    window.requestAnimationFrame(this.#render.bind(this))
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.accessor.js
//  ^^^^^^                                                 support.type.object.dom.js
//        ^                          ^       ^             keyword.operator.accessor.js
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//         ^^^^^^^^^^^^^^^^^^^^^              ^^^^         entity.name.function.js
//                              ^                 ^    ^^  meta.brace.round.js
//                               ^^^^              ^^^^    variable.language.this.js
//                                    ^^^^^^^              meta.property.object.js
//                                    ^                    keyword.operator.private.js
//                                     ^^^^^^              variable.other.property.js
  }
//^  meta.class.body.js
//^  meta.accessor.js
//^  meta.brace.curly.js
  #clicked() {
//^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^ ^  meta.function.method.js
//^             keyword.operator.private.js
// ^^^^^^^      entity.name.function.method.js
//        ^     punctuation.definition.parameters.begin.js
//        ^^    meta.brace.round.js
//         ^    punctuation.definition.parameters.end.js
//           ^  meta.brace.curly.js
    this.#x++
//  ^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^  meta.function.method.js
//  ^^^^       variable.language.this.js
//      ^      keyword.operator.accessor.js
//       ^^    meta.property.object.js
//       ^     keyword.operator.private.js
//        ^    variable.other.property.js
//         ^^  keyword.operator.arithmetic.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
  constructor() {
//^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^ ^  meta.function.method.js
//^^^^^^^^^^^      entity.name.function.method.js
//           ^     punctuation.definition.parameters.begin.js
//           ^^    meta.brace.round.js
//            ^    punctuation.definition.parameters.end.js
//              ^  meta.brace.curly.js
    super()
//  ^^^^^^^  meta.class.body.js
//  ^^^^^^^  meta.function.method.js
//  ^^^^^^^  meta.function-call.without-arguments.js
//  ^^^^^    entity.name.function.js
//       ^^  meta.brace.round.js
    this.onclick = this.#clicked.bind(this)
//  ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^           ^^^^               ^^^^   variable.language.this.js
//      ^              ^        ^            keyword.operator.accessor.js
//       ^^^^^^^        ^^^^^^^^             meta.property.object.js
//       ^^^^^^^         ^^^^^^^             variable.other.property.js
//               ^                           keyword.operator.assignment.js
//                      ^                    keyword.operator.private.js
//                               ^^^^^^^^^^  meta.method-call.with-arguments.js
//                               ^^^^        entity.name.function.js
//                                   ^    ^  meta.brace.round.js
    #x = +x
//  ^^ ^ ^^  meta.class.body.js
//  ^^ ^ ^^  meta.function.method.js
//  ^        keyword.operator.private.js
//   ^    ^  variable.other.readwrite.js
//     ^     keyword.operator.assignment.js
//       ^   keyword.operator.arithmetic.js
    #y = +y
//  ^^ ^ ^^  meta.class.body.js
//  ^^ ^ ^^  meta.function.method.js
//  ^        keyword.operator.private.js
//   ^    ^  variable.other.readwrite.js
//     ^     keyword.operator.assignment.js
//       ^   keyword.operator.arithmetic.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
  connectedCallback() { this.#render() }
//^^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^  meta.function.method.js
//^^^^^^^^^^^^^^^^^                       entity.name.function.method.js
//                 ^                      punctuation.definition.parameters.begin.js
//                 ^^               ^^    meta.brace.round.js
//                  ^                     punctuation.definition.parameters.end.js
//                    ^                ^  meta.brace.curly.js
//                      ^^^^              variable.language.this.js
//                          ^             keyword.operator.accessor.js
//                           ^^^^^^^^^    meta.method-call.without-arguments.js
//                           ^            keyword.operator.private.js
//                            ^^^^^^      entity.name.function.js
  #render() {
//^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^ ^  meta.function.method.js
//^            keyword.operator.private.js
// ^^^^^^      entity.name.function.method.js
//       ^     punctuation.definition.parameters.begin.js
//       ^^    meta.brace.round.js
//        ^    punctuation.definition.parameters.end.js
//          ^  meta.brace.curly.js
    this.textContent = this.#x.toString()
//  ^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^               ^^^^                variable.language.this.js
//      ^                  ^  ^            keyword.operator.accessor.js
//       ^^^^^^^^^^^        ^^             meta.property.object.js
//       ^^^^^^^^^^^         ^             variable.other.property.js
//                   ^                     keyword.operator.assignment.js
//                          ^              keyword.operator.private.js
//                             ^^^^^^^^^^  meta.method-call.without-arguments.js
//                             ^^^^^^^^    entity.name.function.js
//                                     ^^  meta.brace.round.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
  get x() { return #x }
//^^^ ^^^ ^ ^^^^^^ ^^ ^  meta.class.body.js
//^^^ ^^^ ^ ^^^^^^ ^^ ^  meta.accessor.js
//^^^                    storage.type.accessor.js
//    ^                  entity.name.function.accessor.js
//     ^                 punctuation.definition.parameters.begin.js
//     ^^                meta.brace.round.js
//      ^                punctuation.definition.parameters.end.js
//        ^           ^  meta.brace.curly.js
//          ^^^^^^       keyword.control.flow.js
//                 ^     keyword.operator.private.js
//                  ^    variable.other.readwrite.js
  set x(value) { #x = +value }
//^^^ ^^^^^^^^ ^ ^^ ^ ^^^^^^ ^  meta.class.body.js
//^^^ ^^^^^^^^ ^ ^^ ^ ^^^^^^ ^  meta.accessor.js
//^^^                           storage.type.accessor.js
//    ^                         entity.name.function.accessor.js
//     ^                        punctuation.definition.parameters.begin.js
//     ^     ^                  meta.brace.round.js
//      ^^^^^                   meta.function.parameters.js
//      ^^^^^     ^    ^^^^^    variable.other.readwrite.js
//           ^                  punctuation.definition.parameters.end.js
//             ^             ^  meta.brace.curly.js
//               ^              keyword.operator.private.js
//                  ^           keyword.operator.assignment.js
//                    ^         keyword.operator.arithmetic.js
  get y() { return #y }
//^^^ ^^^ ^ ^^^^^^ ^^ ^  meta.class.body.js
//^^^ ^^^ ^ ^^^^^^ ^^ ^  meta.accessor.js
//^^^                    storage.type.accessor.js
//    ^                  entity.name.function.accessor.js
//     ^                 punctuation.definition.parameters.begin.js
//     ^^                meta.brace.round.js
//      ^                punctuation.definition.parameters.end.js
//        ^           ^  meta.brace.curly.js
//          ^^^^^^       keyword.control.flow.js
//                 ^     keyword.operator.private.js
//                  ^    variable.other.readwrite.js
  set y(value) { #y = +value }
//^^^ ^^^^^^^^ ^ ^^ ^ ^^^^^^ ^  meta.class.body.js
//^^^ ^^^^^^^^ ^ ^^ ^ ^^^^^^ ^  meta.accessor.js
//^^^                           storage.type.accessor.js
//    ^                         entity.name.function.accessor.js
//     ^                        punctuation.definition.parameters.begin.js
//     ^     ^                  meta.brace.round.js
//      ^^^^^                   meta.function.parameters.js
//      ^^^^^     ^    ^^^^^    variable.other.readwrite.js
//           ^                  punctuation.definition.parameters.end.js
//             ^             ^  meta.brace.curly.js
//               ^              keyword.operator.private.js
//                  ^           keyword.operator.assignment.js
//                    ^         keyword.operator.arithmetic.js
  equals(p) { return #x === p.#x && #y === p.#y }
//^^^^^^^^^ ^ ^^^^^^ ^^ ^^^ ^^^^ ^^ ^^ ^^^ ^^^^ ^  meta.class.body.js
//^^^^^^^^^ ^ ^^^^^^ ^^ ^^^ ^^^^ ^^ ^^ ^^^ ^^^^ ^  meta.function.method.js
//^^^^^^                                           entity.name.function.method.js
//      ^                                          punctuation.definition.parameters.begin.js
//      ^ ^                                        meta.brace.round.js
//       ^                                         meta.function.parameters.js
//       ^            ^              ^             variable.other.readwrite.js
//        ^                                        punctuation.definition.parameters.end.js
//          ^                                   ^  meta.brace.curly.js
//            ^^^^^^                               keyword.control.flow.js
//                   ^        ^     ^        ^     keyword.operator.private.js
//                      ^^^            ^^^         keyword.operator.comparison.js
//                          ^              ^       variable.other.object.js
//                           ^              ^      keyword.operator.accessor.js
//                            ^^             ^^    meta.property.object.js
//                             ^              ^    variable.other.property.js
//                               ^^                keyword.operator.logical.js
  toString() { return `Point<${ #x },${ #y }>` }
//^^^^^^^^^^ ^ ^^^^^^ ^^^^^^^^^ ^^ ^^^^ ^^ ^^^ ^  meta.class.body.js
//^^^^^^^^^^ ^ ^^^^^^ ^^^^^^^^^ ^^ ^^^^ ^^ ^^^ ^  meta.function.method.js
//^^^^^^^^                                        entity.name.function.method.js
//        ^                                       punctuation.definition.parameters.begin.js
//        ^^                                      meta.brace.round.js
//         ^                                      punctuation.definition.parameters.end.js
//           ^                                 ^  meta.brace.curly.js
//             ^^^^^^                             keyword.control.flow.js
//                    ^^^^^^^^^ ^^ ^^^^ ^^ ^^^    string.quasi.js
//                    ^^^^^^^^^ ^^ ^^^^ ^^ ^^^    string.quoted.template.js
//                    ^                           punctuation.definition.quasi.begin.js
//                           ^^ ^^ ^ ^^ ^^ ^      entity.quasi.element.js
//                           ^^      ^^           punctuation.quasi.element.begin.js
//                              ^       ^         keyword.operator.private.js
//                               ^       ^        variable.other.readwrite.js
//                                 ^       ^      punctuation.quasi.element.end.js
//                                           ^    punctuation.definition.quasi.end.js
}
// <- punctuation.section.class.end.js

// >> only:(source.js.jsx)
