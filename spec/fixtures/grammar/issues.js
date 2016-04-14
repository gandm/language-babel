// SYNTAX TEST "source.js.jsx"

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
//                                                                      ^  meta.group.braces.curly
//                                                                      ^  meta.brace.curly.js
  return {
//^^^^^^ ^  meta.group.braces.curly
//^^^^^^    keyword.control.flow.js
//       ^  meta.brace.curly.js
    bar
//  ^^^  meta.group.braces.curly
//  ^^^  variable.other.readwrite.js
  }
//^  meta.group.braces.curly
//^  meta.brace.curly.js
}
// <- meta.group.braces.curly meta.brace.curly.js

module.exports = exports = foo
// <- support.type.object.module.js keyword.operator.accessor.js
 // <- support.type.object.module.js keyword.operator.accessor.js
//^^^^^^^^^^^^   ^^^^^^^        support.type.object.module.js
//^^^^^^^^^^^^   ^^^^^^^        keyword.operator.accessor.js
//             ^         ^      keyword.operator.assignment.js
//                         ^^^  variable.other.readwrite.js
