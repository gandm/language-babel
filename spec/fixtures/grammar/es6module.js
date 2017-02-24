// SYNTAX TEST "source.js.jsx"

import(moduleSpecifier).then(someModule => someModule.foo());
// <- meta.function-call.with-arguments.js keyword.control.module.js
 // <- meta.function-call.with-arguments.js keyword.control.module.js
//^^^^^^^^^^^^^^^^^^^^^                                        meta.function-call.with-arguments.js
//^^^^                                                         keyword.control.module.js
//    ^               ^     ^                            ^^^   meta.brace.round.js
//     ^^^^^^^^^^^^^^^       ^^^^^^^^^^                        variable.other.readwrite.js
//                     ^                             ^         keyword.operator.accessor.js
//                      ^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^   meta.method-call.with-arguments.js
//                      ^^^^                          ^^^      entity.name.function.js
//                           ^^^^^^^^^^ ^^                     meta.function.arrow.js
//                                      ^^                     storage.type.function.arrow.js
//                                         ^^^^^^^^^^          variable.other.object.js
//                                                    ^^^^^    meta.method-call.without-arguments.js
//                                                          ^  punctuation.terminator.statement.js

import defaultMember from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^               ^^^^                keyword.control.module.js
//     ^^^^^^^^^^^^^                     variable.other.readwrite.js
//                        ^              punctuation.definition.string.begin.js
//                         ^^^^^^^^^^^   string.quoted.module.js
//                                    ^  punctuation.definition.string.end.js
import * as name from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^           ^^^^                keyword.control.module.js
//     ^                             keyword.operator.module.all.js
//       ^^                          keyword.control.module.reference.js
//          ^^^^                     variable.other.readwrite.js
//                    ^              punctuation.definition.string.begin.js
//                     ^^^^^^^^^^^   string.quoted.module.js
//                                ^  punctuation.definition.string.end.js
import { member } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^            ^^^^                keyword.control.module.js
//     ^        ^                     meta.brace.curly.js
//       ^^^^^^                       variable.other.readwrite.js
//                     ^              punctuation.definition.string.begin.js
//                      ^^^^^^^^^^^   string.quoted.module.js
//                                 ^  punctuation.definition.string.end.js
import { member as alias } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                     ^^^^                keyword.control.module.js
//     ^                 ^                     meta.brace.curly.js
//       ^^^^^^    ^^^^^                       variable.other.readwrite.js
//              ^^                             keyword.control.module.reference.js
//                              ^              punctuation.definition.string.begin.js
//                               ^^^^^^^^^^^   string.quoted.module.js
//                                          ^  punctuation.definition.string.end.js
import { member1 , member2 } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                       ^^^^                keyword.control.module.js
//     ^                   ^                     meta.brace.curly.js
//       ^^^^^^^   ^^^^^^^                       variable.other.readwrite.js
//               ^                               meta.delimiter.comma.js
//                                ^              punctuation.definition.string.begin.js
//                                 ^^^^^^^^^^^   string.quoted.module.js
//                                            ^  punctuation.definition.string.end.js
import { member1 , member2 as alias2 , [] } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                      ^^^^                keyword.control.module.js
//     ^                                  ^                     meta.brace.curly.js
//       ^^^^^^^   ^^^^^^^    ^^^^^^                            variable.other.readwrite.js
//               ^                   ^                          meta.delimiter.comma.js
//                         ^^                                   keyword.control.module.reference.js
//                                     ^^                       meta.brace.square.js
//                                               ^              punctuation.definition.string.begin.js
//                                                ^^^^^^^^^^^   string.quoted.module.js
//                                                           ^  punctuation.definition.string.end.js
import defaultMember, { member [ , [] ] } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                    ^^^^                keyword.control.module.js
//     ^^^^^^^^^^^^^                                          variable.other.readwrite.js
//                  ^            ^                            meta.delimiter.comma.js
//                    ^                 ^                     meta.brace.curly.js
//                      ^^^^^^                                variable.other.object.js
//                             ^   ^^ ^                       meta.brace.square.js
//                                             ^              punctuation.definition.string.begin.js
//                                              ^^^^^^^^^^^   string.quoted.module.js
//                                                         ^  punctuation.definition.string.end.js
import defaultMember, * as name from "module-name";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                          ^^^^                 keyword.control.module.js
//     ^^^^^^^^^^^^^       ^^^^                      variable.other.readwrite.js
//                  ^                                meta.delimiter.comma.js
//                    ^                              keyword.operator.module.all.js
//                      ^^                           keyword.control.module.reference.js
//                                   ^               punctuation.definition.string.begin.js
//                                    ^^^^^^^^^^^    string.quoted.module.js
//                                               ^   punctuation.definition.string.end.js
//                                                ^  punctuation.terminator.statement.js
import "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                keyword.control.module.js
//     ^              punctuation.definition.string.begin.js
//      ^^^^^^^^^^^   string.quoted.module.js
//                 ^  punctuation.definition.string.end.js
import type {UserID, User} , typeof something from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                        ^^^^                keyword.control.module.js
//     ^^^^                  ^^^^^^                               keyword.other.typedef.flowtype
//          ^            ^                                        meta.brace.curly.js
//           ^^^^^^  ^^^^           ^^^^^^^^^                     variable.other.readwrite.js
//                 ^       ^                                      meta.delimiter.comma.js
//                                                 ^              punctuation.definition.string.begin.js
//                                                  ^^^^^^^^^^^   string.quoted.module.js
//                                                             ^  punctuation.definition.string.end.js

import {someValue, type someType, typeof someOtherValue} from 'foo'
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                                   ^^^^        keyword.control.module.js
//     ^                                               ^             meta.brace.curly.js
//      ^^^^^^^^^       ^^^^^^^^         ^^^^^^^^^^^^^^              variable.other.readwrite.js
//               ^              ^                                    meta.delimiter.comma.js
//                 ^^^^           ^^^^^^                             keyword.other.typedef.flowtype
//                                                            ^      punctuation.definition.string.begin.js
//                                                             ^^^   string.quoted.module.js
//                                                                ^  punctuation.definition.string.end.js

import defaultMember
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                keyword.control.module.js
//     ^^^^^^^^^^^^^  variable.other.readwrite.js
 , * as name
 // <- meta.delimiter.comma.js
// ^          keyword.operator.module.all.js
//   ^^       keyword.control.module.reference.js
//      ^^^^  variable.other.readwrite.js
 , { member }
 // <- meta.delimiter.comma.js
// ^        ^  meta.brace.curly.js
//   ^^^^^^    variable.other.readwrite.js
 , { member as alias }
 // <- meta.delimiter.comma.js
// ^                 ^  meta.brace.curly.js
//   ^^^^^^    ^^^^^    variable.other.readwrite.js
//          ^^          keyword.control.module.reference.js
 , { member1 , member2 }
 // <- meta.delimiter.comma.js
//           ^            meta.delimiter.comma.js
// ^                   ^  meta.brace.curly.js
//   ^^^^^^^   ^^^^^^^    variable.other.readwrite.js
 , { member1 , member2 as alias2 , [...] }
 // <- meta.delimiter.comma.js
//           ^                   ^          meta.delimiter.comma.js
// ^                                     ^  meta.brace.curly.js
//   ^^^^^^^   ^^^^^^^    ^^^^^^            variable.other.readwrite.js
//                     ^^                   keyword.control.module.reference.js
//                                 ^   ^    meta.brace.square.js
 , defaultMember, { member [ , [...] ] }
 // <- meta.delimiter.comma.js
//              ^            ^            meta.delimiter.comma.js
// ^^^^^^^^^^^^^                          variable.other.readwrite.js
//                ^                    ^  meta.brace.curly.js
//                  ^^^^^^                variable.other.object.js
//                         ^   ^   ^ ^    meta.brace.square.js
 , defaultMember, * as name
 // <- meta.delimiter.comma.js
//              ^            meta.delimiter.comma.js
// ^^^^^^^^^^^^^       ^^^^  variable.other.readwrite.js
//                ^          keyword.operator.module.all.js
//                  ^^       keyword.control.module.reference.js
 , type aaa from "aaaa"
 // <- meta.delimiter.comma.js
// ^^^^                  keyword.other.typedef.flowtype
//      ^^^              variable.other.readwrite.js
//          ^^^^         keyword.control.module.js
//               ^       punctuation.definition.string.begin.js
//                ^^^^   string.quoted.module.js
//                    ^  punctuation.definition.string.end.js


export { name1, name2, nameN }
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                          keyword.control.module.js
//     ^                     ^  meta.brace.curly.js
//       ^^^^^  ^^^^^  ^^^^^    variable.other.readwrite.js
//            ^      ^          meta.delimiter.comma.js
export { variable1 as name1, variable2 as name2, nameN }
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                                    keyword.control.module.js
//     ^                                               ^  meta.brace.curly.js
//       ^^^^^^^^^    ^^^^^  ^^^^^^^^^    ^^^^^  ^^^^^    variable.other.readwrite.js
//                 ^^                  ^^                 keyword.control.module.reference.js
//                         ^                   ^          meta.delimiter.comma.js
export let name1, name2, nameN
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                          keyword.control.module.js
//     ^^^                      storage.type.js
//         ^^^^^  ^^^^^  ^^^^^  variable.other.readwrite.js
//              ^      ^        punctuation.terminator.statement.js
export let name1: {a: string} = {a: "aaa"}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                      keyword.control.module.js
//     ^^^                                  storage.type.js
//         ^^^^^   ^                        variable.other.readwrite.js
//              ^   ^                       punctuation.type.flowtype
//                ^                         meta.brace.curly.open.flowtype
//                    ^^^^^^                support.type.builtin.primitive.flowtype
//                          ^               meta.brace.curly.close.flowtype
//                            ^             keyword.operator.assignment.js
//                              ^        ^  meta.brace.curly.litobj.js
//                               ^          constant.other.object.key.js
//                               ^          string.unquoted.js
//                                ^         punctuation.separator.key-value.js
//                                  ^^^^^   string.quoted.double.js
//                                  ^       punctuation.definition.string.begin.js
//                                      ^   punctuation.definition.string.end.js
export default expression
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^             keyword.control.module.js
//             ^^^^^^^^^^  variable.other.readwrite.js
export default function () {}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^                 keyword.control.module.js
//             ^^^^^^^^ ^^ ^^  meta.function.js
//             ^^^^^^^^        storage.type.function.js
//                      ^      punctuation.definition.parameters.begin.js
//                      ^^     meta.brace.round.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.brace.curly.js
export default function name1() {}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^                      keyword.control.module.js
//             ^^^^^^^^ ^^^^^^^ ^^  meta.function.js
//             ^^^^^^^^             storage.type.function.js
//                      ^^^^^       entity.name.function.js
//                           ^      punctuation.definition.parameters.begin.js
//                           ^^     meta.brace.round.js
//                            ^     punctuation.definition.parameters.end.js
//                              ^^  meta.brace.curly.js
export { name1 as default }
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^            ^^^^^^^    keyword.control.module.js
//     ^                  ^  meta.brace.curly.js
//       ^^^^^               variable.other.readwrite.js
//             ^^            keyword.control.module.reference.js
export * from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^   ^^^^                keyword.control.module.js
//     ^                     keyword.operator.module.all.js
//            ^              punctuation.definition.string.begin.js
//             ^^^^^^^^^^^   string.quoted.module.js
//                        ^  punctuation.definition.string.end.js
export { name1, name2, nameN } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                         ^^^^                keyword.control.module.js
//     ^                     ^                     meta.brace.curly.js
//       ^^^^^  ^^^^^  ^^^^^                       variable.other.readwrite.js
//            ^      ^                             meta.delimiter.comma.js
//                                  ^              punctuation.definition.string.begin.js
//                                   ^^^^^^^^^^^   string.quoted.module.js
//                                              ^  punctuation.definition.string.end.js
export { import1 as name1, import2 as name2, nameN } from "module-name"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                               ^^^^                keyword.control.module.js
//     ^                                           ^                     meta.brace.curly.js
//       ^^^^^^^    ^^^^^  ^^^^^^^    ^^^^^  ^^^^^                       variable.other.readwrite.js
//               ^^                ^^                                    keyword.control.module.reference.js
//                       ^                 ^                             meta.delimiter.comma.js
//                                                        ^              punctuation.definition.string.begin.js
//                                                         ^^^^^^^^^^^   string.quoted.module.js
//                                                                    ^  punctuation.definition.string.end.js
export someIdentifier from "someModule"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                ^^^^               keyword.control.module.js
//     ^^^^^^^^^^^^^^                    variable.other.readwrite.js
//                         ^             punctuation.definition.string.begin.js
//                          ^^^^^^^^^^   string.quoted.module.js
//                                    ^  punctuation.definition.string.end.js
export someIdentifier, { namedIdentifier } from "someModule"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                     ^^^^               keyword.control.module.js
//     ^^^^^^^^^^^^^^    ^^^^^^^^^^^^^^^                      variable.other.readwrite.js
//                   ^                                        meta.delimiter.comma.js
//                     ^                 ^                    meta.brace.curly.js
//                                              ^             punctuation.definition.string.begin.js
//                                               ^^^^^^^^^^   string.quoted.module.js
//                                                         ^  punctuation.definition.string.end.js

export type User = {
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                keyword.control.module.js
//     ^^^^           keyword.other.typedef.flowtype
//          ^^^^      support.type.class.flowtype
//                 ^  meta.brace.curly.js
  id: UserID,
//^^           variable.other.readwrite.js
//  ^          punctuation.type.flowtype
//    ^^^^^^   support.type.class.flowtype
//          ^  meta.delimiter.comma.js
  name: string,
//^^^^           variable.other.readwrite.js
//    ^          punctuation.type.flowtype
//      ^^^^^^   support.type.builtin.primitive.flowtype
//            ^  meta.delimiter.comma.js
};
// <- meta.brace.curly.js
 // <- punctuation.terminator.statement.js

 import {
 // <- keyword.control.module.js
//^^^^^    keyword.control.module.js
//      ^  meta.brace.curly.js
   amodule, // this is a comment
// ^^^^^^^                        variable.other.readwrite.js
//        ^                       meta.delimiter.comma.js
//          ^^ ^^^^ ^^ ^ ^^^^^^^  comment.line.double-slash.js
//          ^^                    punctuation.definition.comment.js
   another module // this is a comment
// ^^^^^^^ ^^^^^^                       variable.other.readwrite.js
//                ^^ ^^^^ ^^ ^ ^^^^^^^  comment.line.double-slash.js
//                ^^                    punctuation.definition.comment.js
 } from "aaaa"
 // <- meta.brace.curly.js
// ^^^^         keyword.control.module.js
//      ^       punctuation.definition.string.begin.js
//       ^^^^   string.quoted.module.js
//           ^  punctuation.definition.string.end.js

import FOO as CONSTANT from "foo";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                 ^^^^         keyword.control.module.js
//     ^^^    ^^^^^^^^              variable.other.constant.js
//         ^^                       keyword.control.module.reference.js
//                          ^       punctuation.definition.string.begin.js
//                           ^^^    string.quoted.module.js
//                              ^   punctuation.definition.string.end.js
//                               ^  punctuation.terminator.statement.js
import {FOO as CONSTANT} from "foo";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                   ^^^^         keyword.control.module.js
//     ^               ^              meta.brace.curly.js
//      ^^^    ^^^^^^^^               variable.other.constant.js
//          ^^                        keyword.control.module.reference.js
//                            ^       punctuation.definition.string.begin.js
//                             ^^^    string.quoted.module.js
//                                ^   punctuation.definition.string.end.js
//                                 ^  punctuation.terminator.statement.js
