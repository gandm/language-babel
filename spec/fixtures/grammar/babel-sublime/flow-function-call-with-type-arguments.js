// SYNTAX TEST "source.js.jsx"

new MyInstance();
// <- meta.new-class.without-arguments.js keyword.operator.new.js
 // <- meta.new-class.without-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^  meta.new-class.without-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.without-arguments.js
//            ^^  meta.brace.round.js
//              ^ punctuation.terminator.statement.js

new MyInstance<string>();
// <- meta.new-class.without-arguments.js keyword.operator.new.js
 // <- meta.new-class.without-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^^^^^  meta.new-class.without-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.without-arguments.js
//            ^^^^^^^^ meta.type-arguments.flowtype
//            ^ punctuation.flowtype
//             ^^^^^^ support.type.builtin.primitive.flowtype
//                   ^ punctuation.flowtype
//                    ^^  meta.brace.round.js
//                      ^ punctuation.terminator.statement.js

new MyInstance < string > ();
// <- meta.new-class.without-arguments.js keyword.operator.new.js
 // <- meta.new-class.without-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^^^^^  meta.new-class.without-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.without-arguments.js
//             ^^^^^^^^^^ meta.type-arguments.flowtype
//             ^        ^ punctuation.flowtype
//               ^^^^^^ support.type.builtin.primitive.flowtype
//                        ^^  meta.brace.round.js
//                          ^ punctuation.terminator.statement.js

new MyInstance<Baz<string>, number>();
// <- meta.new-class.without-arguments.js keyword.operator.new.js
 // <- meta.new-class.without-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.new-class.without-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.without-arguments.js
//            ^^^^^^^^^^^^^^^^^^^^^ meta.type-arguments.flowtype
//            ^                   ^ punctuation.flowtype
//             ^^^ support.type.class.flowtype
//                ^      ^ punctuation.flowtype
//                 ^^^^^^ support.type.builtin.primitive.flowtype
//                        ^ meta.delimiter.comma.js
//                          ^^^^^^ support.type.builtin.primitive.flowtype
//                                 ^^  meta.brace.round.js
//                                   ^ punctuation.terminator.statement.js

new MyInstance("hi");
// <- meta.new-class.with-arguments.js keyword.operator.new.js
 // <- meta.new-class.with-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^  meta.new-class.with-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.with-arguments.js
//            ^  meta.brace.round.js
//                 ^  meta.brace.round.js
//                  ^ punctuation.terminator.statement.js

new MyInstance<string>("hi");
// <- meta.new-class.with-arguments.js keyword.operator.new.js
 // <- meta.new-class.with-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^  meta.new-class.with-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.with-arguments.js
//            ^^^^^^^^ meta.type-arguments.flowtype
//            ^ punctuation.flowtype
//             ^^^^^^ support.type.builtin.primitive.flowtype
//                   ^ punctuation.flowtype
//                    ^  meta.brace.round.js
//                         ^  meta.brace.round.js
//                          ^ punctuation.terminator.statement.js

new MyInstance < string > ("hi");
// <- meta.new-class.with-arguments.js keyword.operator.new.js
 // <- meta.new-class.with-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^  meta.new-class.with-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.with-arguments.js
//             ^^^^^^^^^^ meta.type-arguments.flowtype
//             ^        ^ punctuation.flowtype
//               ^^^^^^ support.type.builtin.primitive.flowtype
//                        ^    ^ meta.brace.round.js
//                              ^ punctuation.terminator.statement.js

new MyInstance<Baz<string>, number>("hi");
// <- meta.new-class.with-arguments.js keyword.operator.new.js
 // <- meta.new-class.with-arguments.js keyword.operator.new.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.new-class.with-arguments.js
//  ^^^^^^^^^^ entity.name.type.instance.js
//  ^^^^^^^^^^ meta.function-call.with-arguments.js
//            ^^^^^^^^^^^^^^^^^^^^^ meta.type-arguments.flowtype
//            ^                   ^ punctuation.flowtype
//             ^^^ support.type.class.flowtype
//                ^      ^ punctuation.flowtype
//                 ^^^^^^ support.type.builtin.primitive.flowtype
//                        ^ meta.delimiter.comma.js
//                          ^^^^^^ support.type.builtin.primitive.flowtype
//                                 ^    ^  meta.brace.round.js
//                                       ^ punctuation.terminator.statement.js

myFunction();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^  meta.function-call.without-arguments.js
//  ^^^^^^ entity.name.function.js
//        ^^  meta.brace.round.js
//          ^ punctuation.terminator.statement.js

myFunction<string>();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//  ^^^^^^ entity.name.function.js
//  ^^^^^^ meta.function-call.without-arguments.js
//        ^^^^^^^^ meta.type-arguments.flowtype
//        ^ punctuation.flowtype
//         ^^^^^^ support.type.builtin.primitive.flowtype
//               ^ punctuation.flowtype
//                ^^  meta.brace.round.js
//                  ^ punctuation.terminator.statement.js

myFunction < string > ();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//  ^^^^^^ entity.name.function.js
//  ^^^^^^ meta.function-call.without-arguments.js
//         ^^^^^^^^^^ meta.type-arguments.flowtype
//         ^        ^ punctuation.flowtype
//           ^^^^^^ support.type.builtin.primitive.flowtype
//                    ^^  meta.brace.round.js
//                      ^ punctuation.terminator.statement.js

myFunction<Baz<string>, number>();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//  ^^^^^^ entity.name.function.js
//  ^^^^^^ meta.function-call.without-arguments.js
//        ^^^^^^^^^^^^^^^^^^^^^ meta.type-arguments.flowtype
//        ^                   ^ punctuation.flowtype
//         ^^^ support.type.class.flowtype
//            ^      ^ punctuation.flowtype
//             ^^^^^^ support.type.builtin.primitive.flowtype
//                    ^ meta.delimiter.comma.js
//                      ^^^^^^ support.type.builtin.primitive.flowtype
//                            ^ punctuation.flowtype
//                             ^^  meta.brace.round.js
//                               ^ punctuation.terminator.statement.js

myObject[myProp]();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//              ^^ meta.brace.round.js
//                ^ punctuation.terminator.statement.js

myObject[myProp]<string>();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//              ^      ^ punctuation.flowtype
//               ^^^^^^ support.type.builtin.primitive.flowtype
//                      ^^ meta.brace.round.js
//                        ^ punctuation.terminator.statement.js

myObject[myProp] < string > ();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//               ^        ^ punctuation.flowtype
//                 ^^^^^^ support.type.builtin.primitive.flowtype
//                          ^^ meta.brace.round.js
//                            ^ punctuation.terminator.statement.js

myObject[myProp]<Baz<string>, number>();
// <- meta.function-call.without-arguments.js
 // <- meta.function-call.without-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//              ^                   ^ punctuation.flowtype
//               ^^^ support.type.class.flowtype
//                  ^      ^ punctuation.flowtype
//                   ^^^^^^ support.type.builtin.primitive.flowtype
//                          ^ meta.delimiter.comma.js
//                            ^^^^^^ support.type.builtin.primitive.flowtype
//                                   ^^ meta.brace.round.js
//                                     ^ punctuation.terminator.statement.js

myFunction("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^  meta.function-call.with-arguments.js
//  ^^^^^^ entity.name.function.js
//        ^    ^  meta.brace.round.js
//              ^ punctuation.terminator.statement.js

myFunction<string>("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//  ^^^^^^ entity.name.function.js
//        ^      ^ punctuation.flowtype
//         ^^^^^^ support.type.builtin.primitive.flowtype
//                ^    ^  meta.brace.round.js
//                      ^ punctuation.terminator.statement.js

myFunction < string > ("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//  ^^^^^^ entity.name.function.js
//         ^        ^ punctuation.flowtype
//           ^^^^^^ support.type.builtin.primitive.flowtype
//                    ^    ^  meta.brace.round.js
//                          ^ punctuation.terminator.statement.js

myFunction<Baz<number>, string>("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//  ^^^^^^ entity.name.function.js
//        ^                   ^ punctuation.flowtype
//         ^^^ support.type.class.flowtype
//            ^      ^ punctuation.flowtype
//             ^^^^^^ support.type.builtin.primitive.flowtype
//                    ^ meta.delimiter.comma.js
//                      ^^^^^^ support.type.builtin.primitive.flowtype
//                             ^    ^  meta.brace.round.js
//                                   ^ punctuation.terminator.statement.js

myObject[myProp]("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//              ^    ^ meta.brace.round.js
//                    ^ punctuation.terminator.statement.js

myObject[myProp]<string>("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//              ^      ^ punctuation.flowtype
//               ^^^^^^ support.type.builtin.primitive.flowtype
//                      ^    ^ meta.brace.round.js
//                            ^ punctuation.terminator.statement.js

myObject[myProp] < string > ("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//               ^        ^ punctuation.flowtype
//                 ^^^^^^ support.type.builtin.primitive.flowtype
//                          ^    ^ meta.brace.round.js
//                                ^ punctuation.terminator.statement.js

myObject[myProp]<Baz<string>, number>("hi");
// <- meta.function-call.with-arguments.js
 // <- meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//      ^      ^ meta.brace.square.js
//       ^^^^^^ variable.other.readwrite.js
//              ^                   ^ punctuation.flowtype
//               ^^^ support.type.class.flowtype
//                  ^      ^ punctuation.flowtype
//                   ^^^^^^ support.type.builtin.primitive.flowtype
//                          ^ meta.delimiter.comma.js
//                            ^^^^^^ support.type.builtin.primitive.flowtype
//                                   ^    ^ meta.brace.round.js
//                                         ^ punctuation.terminator.statement.js

new MyInstance<Baz<string>, number>() < 123;
new MyInstance<Baz<string>, number>("hi") < 123;
myFunction<Baz<string>, number>() < 123;
myObject[myProp]<Baz<string>, number>() < 123;
myObject<Baz<string>, number>("hi") < 123;

// >> only:(source.js.jsx)
