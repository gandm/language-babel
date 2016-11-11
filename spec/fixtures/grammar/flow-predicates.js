// SYNTAX TEST "source.js.jsx"

// Predicates

declare function f(x: mixed): boolean %checks (x !== null);
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                                                      keyword.other.declare.flowtype
//      ^^^^^^^^ ^^^^ ^^^^^^^ ^^^^^^^ ^^^^^^^ ^^ ^^^ ^^^^^   meta.function.js
//      ^^^^^^^^                                             storage.type.function.js
//               ^                                           entity.name.function.js
//                ^                                          punctuation.definition.parameters.begin.js
//                ^        ^                  ^          ^   meta.brace.round.js
//                 ^^ ^^^^^                                  meta.function.parameters.js
//                 ^                           ^             variable.other.readwrite.js
//                  ^       ^                                punctuation.type.flowtype
//                    ^^^^^   ^^^^^^^                        support.type.builtin.primitive.flowtype
//                         ^                                 punctuation.definition.parameters.end.js
//                                    ^^^^^^^                entity.name.function.predicate.flowtype
//                                               ^^^         keyword.operator.comparison.js
//                                                   ^^^^    constant.language.null.js
//                                                        ^  punctuation.terminator.statement.js
function f7(x: mixed): %checks { return x !== null }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^ ^^^^^^^ ^^^^^^^ ^ ^^^^^^ ^ ^^^ ^^^^ ^  meta.function.js
//^^^^^^                                              storage.type.function.js
//       ^^                                           entity.name.function.js
//         ^                                          punctuation.definition.parameters.begin.js
//         ^        ^                                 meta.brace.round.js
//          ^^ ^^^^^                                  meta.function.parameters.js
//          ^                           ^             variable.other.readwrite.js
//           ^       ^                                punctuation.type.flowtype
//             ^^^^^                                  support.type.builtin.primitive.flowtype
//                  ^                                 punctuation.definition.parameters.end.js
//                     ^^^^^^^                        entity.name.function.predicate.flowtype
//                             ^                   ^  meta.brace.curly.js
//                               ^^^^^^               keyword.control.flow.js
//                                        ^^^         keyword.operator.comparison.js
//                                            ^^^^    constant.language.null.js
var a1 = (x: mixed): %checks => x !== null
// <- storage.type.js
 // <- storage.type.js
//^                                         storage.type.js
//  ^^ ^ ^^^ ^^^^^^^ ^^^^^^^ ^^             meta.function.arrow.js
//  ^^                                      entity.name.function.js
//     ^                                    keyword.operator.assignment.js
//       ^                                  punctuation.definition.parameters.begin.js
//       ^        ^                         meta.brace.round.js
//        ^^ ^^^^^                          meta.function.parameters.js
//        ^                     ^           variable.other.readwrite.js
//         ^       ^                        punctuation.type.flowtype
//           ^^^^^                          support.type.builtin.primitive.flowtype
//                ^                         punctuation.definition.parameters.end.js
//                   ^^^^^^^                entity.name.function.predicate.flowtype
//                           ^^             storage.type.function.arrow.js
//                                ^^^       keyword.operator.comparison.js
//                                    ^^^^  constant.language.null.js


// >> only:(source.js.jsx)
