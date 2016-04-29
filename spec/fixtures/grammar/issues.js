// SYNTAX TEST "source.js.jsx"

// ISSUE: #171

function getObject() {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^^^      meta.function.js
//^^^^^^                  storage.type.function.js
//       ^^^^^^^^^        entity.name.function.js
//                ^       punctuation.definition.parameters.begin.js
//                 ^      punctuation.definition.parameters.end.js
//                   ^    meta.brace.curly.js
  return {
//^^^^^^    keyword.control.flow.js
//       ^  meta.brace.curly.js
    async doStuff() {},
//  ^^^^^ ^^^^^^^^^      meta.function.method.js
//  ^^^^^                storage.type.js
//        ^^^^^^^        entity.name.function.method.js
//               ^       punctuation.definition.parameters.begin.js
//                ^      punctuation.definition.parameters.end.js
//                  ^^   meta.brace.curly.js
//                    ^  meta.delimiter.comma.js
    doDifferent: async function() {}
//  ^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^     meta.function.json.js
//  ^^^^^^^^^^^                       entity.name.function.js
//             ^                      punctuation.separator.key-value.js
//               ^^^^^                storage.type.js
//                     ^^^^^^^^       storage.type.function.js
//                             ^      punctuation.definition.parameters.begin.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.brace.curly.js
    doElse: async () => {}
//  ^^^^^^^ ^^^^^ ^^ ^^     meta.function.json.arrow.js
//  ^^^^^^                  entity.name.function.js
//        ^                 punctuation.separator.key-value.js
//          ^^^^^           storage.type.js
//                ^         punctuation.definition.parameters.begin.js
//                 ^        punctuation.definition.parameters.end.js
//                   ^^     storage.type.function.arrow.js
//                      ^^  meta.brace.curly.js
  }
//^  meta.brace.curly.js
}
// <- meta.brace.curly.js

// ISSUE: #170

foo({ //
// <- meta.function-call.with-arguments.js entity.name.function.js
 // <- meta.function-call.with-arguments.js entity.name.function.js
//^^^ ^^   meta.function-call.with-arguments.js
//^        entity.name.function.js
// ^       punctuation.definition.parameters.begin.js
//  ^      meta.brace.curly.js
//    ^^   comment.line.double-slash.js
//    ^^   punctuation.definition.comment.js
  bar() {} //
//^^^^^ ^^ ^^   meta.function-call.with-arguments.js
//^^^^^         meta.function.method.js
//^^^           entity.name.function.method.js
//   ^          punctuation.definition.parameters.begin.js
//    ^         punctuation.definition.parameters.end.js
//      ^^      meta.brace.curly.js
//         ^^   comment.line.double-slash.js
//         ^^   punctuation.definition.comment.js
})
// <- meta.function-call.with-arguments.js meta.brace.curly.js
 // <- meta.function-call.with-arguments.js punctuation.definition.parameters.end.js

// ISSUE: 169
let a: number = td.function()
// <- storage.type.js
 // <- storage.type.js
//^                             storage.type.js
//  ^                           variable.other.readwrite.js
//   ^                          punctuation.type.flowtype
//     ^^^^^^                   support.type.builtin.primitive.flowtype
//            ^                 keyword.operator.assignment.js
//              ^^              variable.other.object.js
//                ^             keyword.operator.accessor.js
//                 ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//                 ^^^^^^^^     entity.name.function.js
//                         ^^   meta.group.braces.round.function.arguments.js
const double = td.function()
// <- storage.type.js
 // <- storage.type.js
//^^^                         storage.type.js
//    ^^^^^^                  variable.other.readwrite.js
//           ^                keyword.operator.assignment.js
//             ^^             variable.other.object.js
//               ^            keyword.operator.accessor.js
//                ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//                ^^^^^^^^    entity.name.function.js
//                        ^^  meta.group.braces.round.function.arguments.js
let a = {
// <- storage.type.js
 // <- storage.type.js
//^        storage.type.js
//  ^      variable.other.readwrite.js
//    ^    keyword.operator.assignment.js
//      ^  meta.brace.curly.js
  a: td.function()
//^^                constant.other.object.key.js
//^                 string.unquoted.js
// ^                punctuation.separator.key-value.js
//   ^^             variable.other.object.js
//     ^            keyword.operator.accessor.js
//      ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//      ^^^^^^^^    entity.name.function.js
//              ^^  meta.group.braces.round.function.arguments.js
  b: td.function()
//^^                constant.other.object.key.js
//^                 string.unquoted.js
// ^                punctuation.separator.key-value.js
//   ^^             variable.other.object.js
//     ^            keyword.operator.accessor.js
//      ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//      ^^^^^^^^    entity.name.function.js
//              ^^  meta.group.braces.round.function.arguments.js
}
// <- meta.brace.curly.js
let a: number = td.function();
// <- storage.type.js
 // <- storage.type.js
//^                             storage.type.js
//  ^                           variable.other.readwrite.js
//   ^                          punctuation.type.flowtype
//     ^^^^^^                   support.type.builtin.primitive.flowtype
//            ^                 keyword.operator.assignment.js
//              ^^              variable.other.object.js
//                ^             keyword.operator.accessor.js
//                 ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//                 ^^^^^^^^     entity.name.function.js
//                         ^^   meta.group.braces.round.function.arguments.js
//                           ^  punctuation.terminator.statement.js
const double = td.function();
// <- storage.type.js
 // <- storage.type.js
//^^^                          storage.type.js
//    ^^^^^^                   variable.other.readwrite.js
//           ^                 keyword.operator.assignment.js
//             ^^              variable.other.object.js
//               ^             keyword.operator.accessor.js
//                ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//                ^^^^^^^^     entity.name.function.js
//                        ^^   meta.group.braces.round.function.arguments.js
//                          ^  punctuation.terminator.statement.js
let a = {
// <- storage.type.js
 // <- storage.type.js
//^        storage.type.js
//  ^      variable.other.readwrite.js
//    ^    keyword.operator.assignment.js
//      ^  meta.brace.curly.js
  a: td.function();
//^^                 constant.other.object.key.js
//^                  string.unquoted.js
// ^                 punctuation.separator.key-value.js
//   ^^              variable.other.object.js
//     ^             keyword.operator.accessor.js
//      ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//      ^^^^^^^^     entity.name.function.js
//              ^^   meta.group.braces.round.function.arguments.js
//                ^  punctuation.terminator.statement.js
  b: td.function();
//^^                 constant.other.object.key.js
//^                  string.unquoted.js
// ^                 punctuation.separator.key-value.js
//   ^^              variable.other.object.js
//     ^             keyword.operator.accessor.js
//      ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//      ^^^^^^^^     entity.name.function.js
//              ^^   meta.group.braces.round.function.arguments.js
//                ^  punctuation.terminator.statement.js
}// <- meta.brace.curly.js

// ISSUE: 168
let obj = { a: () => async () => 1 }
// <- storage.type.js
 // <- storage.type.js
//^                  ^^^^^            storage.type.js
//  ^^^                               variable.other.readwrite.js
//      ^                             keyword.operator.assignment.js
//        ^                        ^  meta.brace.curly.js
//          ^^ ^^ ^^                  meta.function.json.arrow.js
//          ^                         entity.name.function.js
//           ^                        punctuation.separator.key-value.js
//             ^           ^          punctuation.definition.parameters.begin.js
//              ^           ^         punctuation.definition.parameters.end.js
//                ^^          ^^      storage.type.function.arrow.js
//                   ^^^^^ ^^ ^^      meta.function.arrow.js
//                               ^    constant.numeric.js

// ISSUE: 166
export default {
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^    keyword.control.module.js
//             ^  meta.brace.curly.js
  async get() { return 1 },
//^^^^^ ^^^^^                meta.function.method.js
//^^^^^                      storage.type.js
//      ^^^                  entity.name.function.method.js
//         ^                 punctuation.definition.parameters.begin.js
//          ^                punctuation.definition.parameters.end.js
//            ^          ^   meta.brace.curly.js
//              ^^^^^^       keyword.control.flow.js
//                     ^     constant.numeric.js
//                        ^  meta.delimiter.comma.js
  get a() { return this._a },
//^^^ ^^^                      meta.accessor.js
//^^^                          storage.type.accessor.js
//    ^                        entity.name.accessor.js
//     ^                       punctuation.definition.parameters.begin.js
//      ^                      punctuation.definition.parameters.end.js
//        ^                ^   meta.brace.curly.js
//          ^^^^^^             keyword.control.flow.js
//                 ^^^^        variable.language.this.js
//                     ^       keyword.operator.accessor.js
//                      ^^     meta.property.object.js
//                      ^^     variable.other.property.js
//                          ^  meta.delimiter.comma.js
  set a(v) { this._a = v },
//^^^ ^^^^                   meta.accessor.js
//^^^                        storage.type.accessor.js
//    ^                      entity.name.accessor.js
//     ^                     punctuation.definition.parameters.begin.js
//      ^              ^     variable.other.readwrite.js
//       ^                   punctuation.definition.parameters.end.js
//         ^             ^   meta.brace.curly.js
//           ^^^^            variable.language.this.js
//               ^           keyword.operator.accessor.js
//                ^^         meta.property.object.js
//                ^^         variable.other.property.js
//                   ^       keyword.operator.assignment.js
//                        ^  meta.delimiter.comma.js
}// <- meta.brace.curly.js
// <- meta.brace.curly.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
//^ ^^ ^^^^^^^^^^^^^^^^^^^  comment.line.double-slash.js
//^                         punctuation.definition.comment.js

// ISSUE: 164
const foo = function foo(a /* : string*/) /* {[key: string]: string} */ {
// <- storage.type.js
 // <- storage.type.js
//^^^                                                                      storage.type.js
//    ^^^ ^ ^^^^^^^^ ^^^^^ ^^ ^ ^^^^^^^^^ ^^ ^^^^^^ ^^^^^^^^ ^^^^^^^ ^^    meta.function.js
//    ^^^            ^^^                                                   entity.name.function.js
//        ^                                                                keyword.operator.assignment.js
//          ^^^^^^^^                                                       storage.type.function.js
//                      ^                                                  punctuation.definition.parameters.begin.js
//                       ^                                                 variable.other.readwrite.js
//                         ^^ ^ ^^^^^^^^  ^^ ^^^^^^ ^^^^^^^^ ^^^^^^^ ^^    comment.block.js
//                         ^^         ^^  ^^                         ^^    punctuation.definition.comment.js
//                                      ^                                  punctuation.definition.parameters.end.js
//                                                                      ^  meta.brace.curly.js
  return {
//^^^^^^    keyword.control.flow.js
//       ^  meta.brace.curly.js
    bar
//  ^^^  variable.other.readwrite.js
  }
//^  meta.brace.curly.js
}
// <- meta.brace.curly.js

module.exports = exports = foo
// <- support.type.object.module.js keyword.operator.accessor.js
 // <- support.type.object.module.js keyword.operator.accessor.js
//^^^^^^^^^^^^   ^^^^^^^        support.type.object.module.js
//^^^^^^^^^^^^   ^^^^^^^        keyword.operator.accessor.js
//             ^         ^      keyword.operator.assignment.js
//                         ^^^  variable.other.readwrite.js

// >> only:source.js.jsx
