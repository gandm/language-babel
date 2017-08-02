// SYNTAX TEST "source.js.jsx"

opaque type Alias: SuperType = Type
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                          keyword.other.typedef.flowtype
//          ^^^^^  ^^^^^^^^^   ^^^^  support.type.class.flowtype
//               ^                   punctuation.type.flowtype
//               ^                   support.type.builtin.primitive.flowtype
//                           ^       keyword.operator.assignment.js
opaque type StringAlias = string
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                       keyword.other.typedef.flowtype
//          ^^^^^^^^^^^           support.type.class.flowtype
//                      ^         keyword.operator.assignment.js
//                        ^^^^^^  support.type.builtin.primitive.flowtype
opaque type ObjectAlias = {
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                  keyword.other.typedef.flowtype
//          ^^^^^^^^^^^      support.type.class.flowtype
//                      ^    keyword.operator.assignment.js
//                        ^  meta.object.flowtype
//                        ^  meta.brace.curly.js
  property: string,
//^^^^^^^^^ ^^^^^^^  meta.object.flowtype
//^^^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
//                ^  meta.delimiter.comma.js
  method(): number,
//^^^^^^^^^ ^^^^^^^  meta.object.flowtype
//^^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^^^^             entity.name.function.method.js
//      ^            punctuation.definition.parameters.begin.js
//      ^^           meta.brace.round.js
//       ^           punctuation.definition.parameters.end.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
//                ^  meta.delimiter.comma.js
}
// <- meta.object.flowtype meta.brace.curly.js
opaque type UnionAlias = 1 | 2 | 3
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                         keyword.other.typedef.flowtype
//          ^^^^^^^^^^              support.type.class.flowtype
//                     ^            keyword.operator.assignment.js
//                       ^   ^   ^  constant.numeric.js
//                         ^   ^    kewyword.operator.union.flowtype
opaque type AliasAlias: ObjectAlias = ObjectAlias
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                                        keyword.other.typedef.flowtype
//          ^^^^^^^^^^  ^^^^^^^^^^^   ^^^^^^^^^^^  support.type.class.flowtype
//                    ^                            punctuation.type.flowtype
//                    ^                            support.type.builtin.primitive.flowtype
//                                  ^              keyword.operator.assignment.js
opaque type VeryOpaque: AliasAlias = ObjectAlias
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                                       keyword.other.typedef.flowtype
//          ^^^^^^^^^^  ^^^^^^^^^^   ^^^^^^^^^^^  support.type.class.flowtype
//                    ^                           punctuation.type.flowtype
//                    ^                           support.type.builtin.primitive.flowtype
//                                 ^              keyword.operator.assignment.js
export opaque type Good: {x: string} = {x: string, y: number}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                                         keyword.control.module.js
//     ^^^^^^ ^^^^                                             keyword.other.typedef.flowtype
//                 ^^^^                                        support.type.class.flowtype
//                     ^   ^             ^          ^          punctuation.type.flowtype
//                     ^     ^^^^^^        ^^^^^^     ^^^^^^   support.type.builtin.primitive.flowtype
//                       ^^^ ^^^^^^^   ^^^ ^^^^^^^ ^^ ^^^^^^^  meta.object.flowtype
//                       ^         ^   ^                    ^  meta.brace.curly.js
//                        ^             ^          ^           variable.other.readwrite.js
//                                   ^                         keyword.operator.assignment.js
//                                               ^             meta.delimiter.comma.js
opaque type MyObject<A, B, C>: { foo: A, bar: B } = {
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^^^ ^^^^                                            keyword.other.typedef.flowtype
//          ^^^^^^^^ ^  ^  ^          ^       ^        support.type.class.flowtype
//                  ^       ^                          punctuation.flowtype
//                    ^  ^             ^               meta.delimiter.comma.js
//                           ^      ^       ^          punctuation.type.flowtype
//                           ^                         support.type.builtin.primitive.flowtype
//                             ^ ^^^^ ^^ ^^^^ ^ ^   ^  meta.object.flowtype
//                             ^                ^   ^  meta.brace.curly.js
//                               ^^^     ^^^           variable.other.readwrite.js
//                                                ^    keyword.operator.assignment.js
  foo: A,
//^^^^ ^^  meta.object.flowtype
//^^^      variable.other.readwrite.js
//   ^     punctuation.type.flowtype
//     ^   support.type.class.flowtype
//      ^  meta.delimiter.comma.js
  bar: B,
//^^^^ ^^  meta.object.flowtype
//^^^      variable.other.readwrite.js
//   ^     punctuation.type.flowtype
//     ^   support.type.class.flowtype
//      ^  meta.delimiter.comma.js
  baz: C,
//^^^^ ^^  meta.object.flowtype
//^^^      variable.other.readwrite.js
//   ^     punctuation.type.flowtype
//     ^   support.type.class.flowtype
//      ^  meta.delimiter.comma.js
}
// <- meta.object.flowtype meta.brace.curly.js
declare opaque type Foo;
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                   keyword.other.declare.flowtype
//      ^^^^^^ ^^^^       keyword.other.typedef.flowtype
//                  ^^^   support.type.class.flowtype
//                     ^  punctuation.terminator.statement.js
declare opaque type PositiveNumber: number
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                                     keyword.other.declare.flowtype
//      ^^^^^^ ^^^^                         keyword.other.typedef.flowtype
//                  ^^^^^^^^^^^^^^          support.type.class.flowtype
//                                ^         punctuation.type.flowtype
//                                ^ ^^^^^^  support.type.builtin.primitive.flowtype

var a: any = 'some string';
// <- storage.type.js
 // <- storage.type.js
//^                          storage.type.js
//  ^                        variable.other.readwrite.js
//   ^                       punctuation.type.flowtype
//     ^^^                   support.type.builtin.primitive.flowtype
//         ^                 keyword.operator.assignment.js
//           ^^^^^ ^^^^^^^   string.quoted.single.js
//           ^               punctuation.definition.string.begin.js
//                       ^   punctuation.definition.string.end.js
//                        ^  punctuation.terminator.statement.js
var b: any = undefined;
// <- storage.type.js
 // <- storage.type.js
//^                      storage.type.js
//  ^                    variable.other.readwrite.js
//   ^                   punctuation.type.flowtype
//     ^^^               support.type.builtin.primitive.flowtype
//         ^             keyword.operator.assignment.js
//           ^^^^^^^^^   constant.language.undefined.js
//                    ^  punctuation.terminator.statement.js
var c: any = 42;
// <- storage.type.js
 // <- storage.type.js
//^               storage.type.js
//  ^             variable.other.readwrite.js
//   ^            punctuation.type.flowtype
//     ^^^        support.type.builtin.primitive.flowtype
//         ^      keyword.operator.assignment.js
//           ^^   constant.numeric.js
//             ^  punctuation.terminator.statement.js

function foo(): any { return 42; }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^ ^ ^^^^^^ ^^^ ^  meta.function.js
//^^^^^^                            storage.type.function.js
//       ^^^                        entity.name.function.js
//          ^                       punctuation.definition.parameters.begin.js
//          ^^                      meta.brace.round.js
//           ^                      punctuation.definition.parameters.end.js
//            ^                     punctuation.type.flowtype
//              ^^^                 support.type.builtin.primitive.flowtype
//                  ^            ^  meta.brace.curly.js
//                    ^^^^^^        keyword.control.flow.js
//                           ^^     constant.numeric.js
//                             ^    punctuation.terminator.statement.js
var d: string = foo();
// <- storage.type.js
 // <- storage.type.js
//^                     storage.type.js
//  ^                   variable.other.readwrite.js
//   ^                  punctuation.type.flowtype
//     ^^^^^^           support.type.builtin.primitive.flowtype
//            ^         keyword.operator.assignment.js
//              ^^^^^   meta.function-call.without-arguments.js
//              ^^^     entity.name.function.js
//                 ^^   meta.brace.round.js
//                   ^  punctuation.terminator.statement.js

var a: Array<number> = [42];
// <- storage.type.js
 // <- storage.type.js
//^                           storage.type.js
//  ^                         variable.other.readwrite.js
//   ^                        punctuation.type.flowtype
//     ^^^^^                  support.type.builtin.class.flowtype
//          ^      ^          punctuation.flowtype
//           ^^^^^^           support.type.builtin.primitive.flowtype
//                   ^        keyword.operator.assignment.js
//                     ^  ^   meta.brace.square.js
//                      ^^    constant.numeric.js
//                         ^  punctuation.terminator.statement.js
var b: Array<number> = ['some string'];
// <- storage.type.js
 // <- storage.type.js
//^                                      storage.type.js
//  ^                                    variable.other.readwrite.js
//   ^                                   punctuation.type.flowtype
//     ^^^^^                             support.type.builtin.class.flowtype
//          ^      ^                     punctuation.flowtype
//           ^^^^^^                      support.type.builtin.primitive.flowtype
//                   ^                   keyword.operator.assignment.js
//                     ^             ^   meta.brace.square.js
//                      ^^^^^ ^^^^^^^    string.quoted.single.js
//                      ^                punctuation.definition.string.begin.js
//                                  ^    punctuation.definition.string.end.js
//                                    ^  punctuation.terminator.statement.js
var c: Array<number> = [42, 'some string'];
// <- storage.type.js
 // <- storage.type.js
//^                                          storage.type.js
//  ^                                        variable.other.readwrite.js
//   ^                                       punctuation.type.flowtype
//     ^^^^^                                 support.type.builtin.class.flowtype
//          ^      ^                         punctuation.flowtype
//           ^^^^^^                          support.type.builtin.primitive.flowtype
//                   ^                       keyword.operator.assignment.js
//                     ^                 ^   meta.brace.square.js
//                      ^^                   constant.numeric.js
//                        ^                  meta.delimiter.comma.js
//                          ^^^^^ ^^^^^^^    string.quoted.single.js
//                          ^                punctuation.definition.string.begin.js
//                                      ^    punctuation.definition.string.end.js
//                                        ^  punctuation.terminator.statement.js

var myNumbers: Array<number> = [42];
// <- storage.type.js
 // <- storage.type.js
//^                                   storage.type.js
//  ^^^^^^^^^                         variable.other.readwrite.js
//           ^                        punctuation.type.flowtype
//             ^^^^^                  support.type.builtin.class.flowtype
//                  ^      ^          punctuation.flowtype
//                   ^^^^^^           support.type.builtin.primitive.flowtype
//                           ^        keyword.operator.assignment.js
//                             ^  ^   meta.brace.square.js
//                              ^^    constant.numeric.js
//                                 ^  punctuation.terminator.statement.js
var d: number = myNumbers[0];
// <- storage.type.js
 // <- storage.type.js
//^                            storage.type.js
//  ^                          variable.other.readwrite.js
//   ^                         punctuation.type.flowtype
//     ^^^^^^                  support.type.builtin.primitive.flowtype
//            ^                keyword.operator.assignment.js
//              ^^^^^^^^^      variable.other.object.js
//                       ^ ^   meta.brace.square.js
//                        ^    constant.numeric.js
//                          ^  punctuation.terminator.statement.js

var a: boolean = true;
// <- storage.type.js
 // <- storage.type.js
//^                     storage.type.js
//  ^                   variable.other.readwrite.js
//   ^                  punctuation.type.flowtype
//     ^^^^^^^          support.type.builtin.primitive.flowtype
//             ^        keyword.operator.assignment.js
//               ^^^^   constant.language.boolean.true.js
//                   ^  punctuation.terminator.statement.js
var b: boolean = false;
// <- storage.type.js
 // <- storage.type.js
//^                      storage.type.js
//  ^                    variable.other.readwrite.js
//   ^                   punctuation.type.flowtype
//     ^^^^^^^           support.type.builtin.primitive.flowtype
//             ^         keyword.operator.assignment.js
//               ^^^^^   constant.language.boolean.false.js
//                    ^  punctuation.terminator.statement.js
var c: boolean = 42;
// <- storage.type.js
 // <- storage.type.js
//^                   storage.type.js
//  ^                 variable.other.readwrite.js
//   ^                punctuation.type.flowtype
//     ^^^^^^^        support.type.builtin.primitive.flowtype
//             ^      keyword.operator.assignment.js
//               ^^   constant.numeric.js
//                 ^  punctuation.terminator.statement.js

var a: Function = function() {};
// <- storage.type.js
 // <- storage.type.js
//^                               storage.type.js
//  ^             ^^^^^^^^        storage.type.function.js
//   ^                            punctuation.type.flowtype
//     ^^^^^^^^                   support.type.builtin.class.flowtype
//              ^                 keyword.operator.assignment.js
//                ^^^^^^^^^^ ^^   meta.function.js
//                        ^       punctuation.definition.parameters.begin.js
//                        ^^      meta.brace.round.js
//                         ^      punctuation.definition.parameters.end.js
//                           ^^   meta.brace.curly.js
//                             ^  punctuation.terminator.statement.js
var b: Function = p => p;
// <- storage.type.js
 // <- storage.type.js
//^                        storage.type.js
//  ^                      storage.type.function.js
//   ^                     punctuation.type.flowtype
//     ^^^^^^^^            support.type.builtin.class.flowtype
//              ^          keyword.operator.assignment.js
//                ^ ^^     meta.function.arrow.js
//                ^        meta.function.parameters.js
//                ^    ^   variable.other.readwrite.js
//                  ^^     storage.type.function.arrow.js
//                      ^  punctuation.terminator.statement.js
var c: Function = 42;
// <- storage.type.js
 // <- storage.type.js
//^                    storage.type.js
//  ^                  storage.type.function.js
//   ^                 punctuation.type.flowtype
//     ^^^^^^^^        support.type.builtin.class.flowtype
//              ^      keyword.operator.assignment.js
//                ^^   constant.numeric.js
//                  ^  punctuation.terminator.statement.js

function foo(): Function {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^^ ^  meta.function.js
//^^^^^^                    storage.type.function.js
//       ^^^                entity.name.function.js
//          ^               punctuation.definition.parameters.begin.js
//          ^^              meta.brace.round.js
//           ^              punctuation.definition.parameters.end.js
//            ^             punctuation.type.flowtype
//              ^^^^^^^^    support.type.builtin.class.flowtype
//                       ^  meta.brace.curly.js
  return function(x: number): number { return x; }
//^^^^^^ ^^^^^^^^^^^ ^^^^^^^^ ^^^^^^ ^ ^^^^^^ ^^ ^  meta.function.js
//^^^^^^                               ^^^^^^       keyword.control.flow.js
//       ^^^^^^^^                                   storage.type.function.js
//               ^                                  punctuation.definition.parameters.begin.js
//               ^         ^                        meta.brace.round.js
//                ^^ ^^^^^^                         meta.function.parameters.js
//                ^                           ^     variable.other.readwrite.js
//                 ^        ^                       punctuation.type.flowtype
//                   ^^^^^^   ^^^^^^                support.type.builtin.primitive.flowtype
//                         ^                        punctuation.definition.parameters.end.js
//                                   ^           ^  meta.brace.curly.js
//                                             ^    punctuation.terminator.statement.js
}
// <- meta.function.js meta.brace.curly.js

var d: (str: string) => string = foo();
// <- storage.type.js
 // <- storage.type.js
//^                                      storage.type.js
//  ^                                    storage.type.function.js
//   ^     ^                             punctuation.type.flowtype
//     ^                                 punctuation.definition.parameters.begin.js
//     ^           ^                ^^   meta.brace.round.js
//      ^^^^ ^^^^^^                      meta.function.parameters.js
//      ^^^                              variable.other.readwrite.js
//           ^^^^^^     ^^^^^^           support.type.builtin.primitive.flowtype
//                 ^                     punctuation.definition.parameters.end.js
//                   ^^                  storage.type.function.arrow.js
//                             ^         keyword.operator.assignment.js
//                               ^^^^^   meta.function-call.without-arguments.js
//                               ^^^     entity.name.function.js
//                                    ^  punctuation.terminator.statement.js
var d: (str: string) => {str: string} = foo();
// <- storage.type.js
 // <- storage.type.js
//^                                             storage.type.js
//  ^                                           storage.type.function.js
//   ^     ^                ^                   punctuation.type.flowtype
//     ^                                        punctuation.definition.parameters.begin.js
//     ^           ^                       ^^   meta.brace.round.js
//      ^^^^ ^^^^^^                             meta.function.parameters.js
//      ^^^              ^^^                    variable.other.readwrite.js
//           ^^^^^^           ^^^^^^            support.type.builtin.primitive.flowtype
//                 ^                            punctuation.definition.parameters.end.js
//                   ^^                         storage.type.function.arrow.js
//                      ^^^^^ ^^^^^^^           meta.object.flowtype
//                      ^                       meta.brace.curly.open.flowtype
//                                  ^           meta.brace.curly.close.flowtype
//                                    ^         keyword.operator.assignment.js
//                                      ^^^^^   meta.function-call.without-arguments.js
//                                      ^^^     entity.name.function.js
//                                           ^  punctuation.terminator.statement.js
 var d: (str: string) => {|str: string|} = foo();
 // <- storage.type.js
//^^                                               storage.type.js
//   ^                                             storage.type.function.js
//    ^     ^                 ^                    punctuation.type.flowtype
//      ^                                          punctuation.definition.parameters.begin.js
//      ^           ^                         ^^   meta.brace.round.js
//       ^^^^ ^^^^^^                               meta.function.parameters.js
//       ^^^               ^^^                     variable.other.readwrite.js
//            ^^^^^^            ^^^^^^             support.type.builtin.primitive.flowtype
//                  ^                              punctuation.definition.parameters.end.js
//                    ^^                           storage.type.function.arrow.js
//                       ^^^^^^ ^^^^^^^^           meta.object.flowtype
//                       ^                         meta.brace.curly.open.flowtype
//                        ^           ^            kewyword.operator.only.flowtype
//                                     ^           meta.brace.curly.close.flowtype
//                                       ^         keyword.operator.assignment.js
//                                         ^^^^^   meta.function-call.without-arguments.js
//                                         ^^^     entity.name.function.js
//                                              ^  punctuation.terminator.statement.js
var f: (
// <- storage.type.js
 // <- storage.type.js
//^       storage.type.js
//  ^     storage.type.function.js
//   ^    punctuation.type.flowtype
//     ^  punctuation.definition.parameters.begin.js
//     ^  meta.brace.round.js
  ((x: Foo) => void) &
//^^^^ ^^^^ ^^ ^^^^^ ^  meta.function.parameters.js
//^^                    punctuation.definition.parameters.begin.js
//^^      ^        ^    meta.brace.round.js
//  ^                   variable.other.readwrite.js
//   ^                  punctuation.type.flowtype
//     ^^^              support.type.class.flowtype
//        ^        ^    punctuation.definition.parameters.end.js
//          ^^          storage.type.function.arrow.js
//             ^^^^     support.type.builtin.primitive.flowtype
//                   ^  kewyword.operator.intersection.flowtype
  ((x: Bar) => void)
//^^^^ ^^^^ ^^ ^^^^^  meta.function.parameters.js
//^^                  punctuation.definition.parameters.begin.js
//^^      ^        ^  meta.brace.round.js
//  ^                 variable.other.readwrite.js
//   ^                punctuation.type.flowtype
//     ^^^            support.type.class.flowtype
//        ^        ^  punctuation.definition.parameters.end.js
//          ^^        storage.type.function.arrow.js
//             ^^^^   support.type.builtin.primitive.flowtype
);
// <- punctuation.definition.parameters.end.js meta.brace.round.js
 // <- punctuation.terminator.statement.js

var a: mixed = 'some string';
// <- storage.type.js
 // <- storage.type.js
//^                            storage.type.js
//  ^                          variable.other.readwrite.js
//   ^                         punctuation.type.flowtype
//     ^^^^^                   support.type.builtin.primitive.flowtype
//           ^                 keyword.operator.assignment.js
//             ^^^^^ ^^^^^^^   string.quoted.single.js
//             ^               punctuation.definition.string.begin.js
//                         ^   punctuation.definition.string.end.js
//                          ^  punctuation.terminator.statement.js
var b: mixed = undefined;
// <- storage.type.js
 // <- storage.type.js
//^                        storage.type.js
//  ^                      variable.other.readwrite.js
//   ^                     punctuation.type.flowtype
//     ^^^^^               support.type.builtin.primitive.flowtype
//           ^             keyword.operator.assignment.js
//             ^^^^^^^^^   constant.language.undefined.js
//                      ^  punctuation.terminator.statement.js
var c: mixed = 42;
// <- storage.type.js
 // <- storage.type.js
//^                 storage.type.js
//  ^               variable.other.readwrite.js
//   ^              punctuation.type.flowtype
//     ^^^^^        support.type.builtin.primitive.flowtype
//           ^      keyword.operator.assignment.js
//             ^^   constant.numeric.js
//               ^  punctuation.terminator.statement.js

function foo(): mixed { return 42; }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^ ^ ^^^^^^ ^^^ ^  meta.function.js
//^^^^^^                              storage.type.function.js
//       ^^^                          entity.name.function.js
//          ^                         punctuation.definition.parameters.begin.js
//          ^^                        meta.brace.round.js
//           ^                        punctuation.definition.parameters.end.js
//            ^                       punctuation.type.flowtype
//              ^^^^^                 support.type.builtin.primitive.flowtype
//                    ^            ^  meta.brace.curly.js
//                      ^^^^^^        keyword.control.flow.js
//                             ^^     constant.numeric.js
//                               ^    punctuation.terminator.statement.js
var d: string = foo();
// <- storage.type.js
 // <- storage.type.js
//^                     storage.type.js
//  ^                   variable.other.readwrite.js
//   ^                  punctuation.type.flowtype
//     ^^^^^^           support.type.builtin.primitive.flowtype
//            ^         keyword.operator.assignment.js
//              ^^^^^   meta.function-call.without-arguments.js
//              ^^^     entity.name.function.js
//                 ^^   meta.brace.round.js
//                   ^  punctuation.terminator.statement.js

function foo(a: string, b: number): void { }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^ ^^ ^^^^^^^^ ^^^^ ^ ^  meta.function.js
//^^^^^^                                      storage.type.function.js
//       ^^^                                  entity.name.function.js
//          ^                                 punctuation.definition.parameters.begin.js
//          ^                    ^            meta.brace.round.js
//           ^^ ^^^^^^^ ^^ ^^^^^^             meta.function.parameters.js
//           ^          ^                     variable.other.readwrite.js
//            ^          ^        ^           punctuation.type.flowtype
//              ^^^^^^     ^^^^^^   ^^^^      support.type.builtin.primitive.flowtype
//                    ^                       meta.delimiter.comma.js
//                               ^            punctuation.definition.parameters.end.js
//                                       ^ ^  meta.brace.curly.js
var x: boolean = someBool;
// <- storage.type.js
 // <- storage.type.js
//^                         storage.type.js
//  ^            ^^^^^^^^   variable.other.readwrite.js
//   ^                      punctuation.type.flowtype
//     ^^^^^^^              support.type.builtin.primitive.flowtype
//             ^            keyword.operator.assignment.js
//                       ^  punctuation.terminator.statement.js
class Bar {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^        meta.class.js
//^^^        storage.type.class.js
//    ^^^    entity.name.class.js
//        ^  punctuation.section.class.begin.js
  y: string;
//^^ ^^^^^^^  meta.class.body.js
//^           variable.other.readwrite.js
// ^          punctuation.type.flowtype
//   ^^^^^^   support.type.builtin.primitive.flowtype
//         ^  punctuation.terminator.statement.js
  x: WeakMap;
//^^ ^^^^^^^^  meta.class.body.js
//^            variable.other.readwrite.js
// ^           punctuation.type.flowtype
//   ^^^^^^^   support.type.builtin.class.flowtype
//          ^  punctuation.terminator.statement.js
  z: MyObjact;
//^^ ^^^^^^^^^  meta.class.body.js
//^             variable.other.readwrite.js
// ^            punctuation.type.flowtype
//   ^^^^^^^^   support.type.class.flowtype
//           ^  punctuation.terminator.statement.js
  someMethod(a: number): string { }
//^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^ ^ ^  meta.class.body.js
//^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^ ^ ^  meta.function.method.js
//^^^^^^^^^^                         entity.name.function.method.js
//          ^                        punctuation.definition.parameters.begin.js
//          ^         ^              meta.brace.round.js
//           ^^ ^^^^^^               meta.function.parameters.js
//           ^                       variable.other.readwrite.js
//            ^        ^             punctuation.type.flowtype
//              ^^^^^^   ^^^^^^      support.type.builtin.primitive.flowtype
//                    ^              punctuation.definition.parameters.end.js
//                              ^ ^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

var a = [1, 2, 3];
// <- storage.type.js
 // <- storage.type.js
//^                 storage.type.js
//  ^               variable.other.readwrite.js
//    ^             keyword.operator.assignment.js
//      ^       ^   meta.brace.square.js
//       ^  ^  ^    constant.numeric.js
//        ^  ^      meta.delimiter.comma.js
//               ^  punctuation.terminator.statement.js
var b: Array<number> = a.map(function(x) { return x + 1; });
// <- storage.type.js
 // <- storage.type.js
//^                                                           storage.type.js
//  ^                                 ^           ^           variable.other.readwrite.js
//   ^                                                        punctuation.type.flowtype
//     ^^^^^                                                  support.type.builtin.class.flowtype
//          ^      ^                                          punctuation.flowtype
//           ^^^^^^                                           support.type.builtin.primitive.flowtype
//                   ^                                        keyword.operator.assignment.js
//                     ^                                      variable.other.object.js
//                      ^                                     keyword.operator.accessor.js
//                       ^^^^^^^^^^^^^^^ ^ ^^^^^^ ^ ^ ^^ ^^   meta.method-call.with-arguments.js
//                       ^^^                                  entity.name.function.js
//                          ^        ^ ^                  ^   meta.brace.round.js
//                           ^^^^^^^^^^^ ^ ^^^^^^ ^ ^ ^^ ^    meta.function.js
//                           ^^^^^^^^                         storage.type.function.js
//                                   ^                        punctuation.definition.parameters.begin.js
//                                    ^                       meta.function.parameters.js
//                                     ^                      punctuation.definition.parameters.end.js
//                                       ^               ^    meta.brace.curly.js
//                                         ^^^^^^             keyword.control.flow.js
//                                                  ^         keyword.operator.arithmetic.js
//                                                    ^       constant.numeric.js
//                                                     ^   ^  punctuation.terminator.statement.js

function c([b: number]) {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^ ^^^^^^^^ ^^  meta.function.js
//^^^^^^                    storage.type.function.js
//       ^                  entity.name.function.js
//        ^                 punctuation.definition.parameters.begin.js
//        ^           ^     meta.brace.round.js
//         ^^^ ^^^^^^^      meta.function.parameters.js
//         ^                meta.brace.square.open.flowtype
//          ^               variable.other.readwrite.js
//           ^              punctuation.type.flowtype
//             ^^^^^^       support.type.builtin.primitive.flowtype
//                   ^      meta.brace.square.end.flowtype
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.brace.curly.js

class CA {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^       meta.class.js
//^^^       storage.type.class.js
//    ^^    entity.name.class.js
//       ^  punctuation.section.class.begin.js
  x: string;
//^^ ^^^^^^^  meta.class.body.js
//^           variable.other.readwrite.js
// ^          punctuation.type.flowtype
//   ^^^^^^   support.type.builtin.primitive.flowtype
//         ^  punctuation.terminator.statement.js
  y: number;
//^^ ^^^^^^^  meta.class.body.js
//^           variable.other.readwrite.js
// ^          punctuation.type.flowtype
//   ^^^^^^   support.type.builtin.primitive.flowtype
//         ^  punctuation.terminator.statement.js
  constructor(x) { this.x = x; }
//^^^^^^^^^^^^^^ ^ ^^^^^^ ^ ^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^ ^ ^^^^^^ ^ ^^ ^  meta.function.method.js
//^^^^^^^^^^^                     entity.name.function.method.js
//           ^                    punctuation.definition.parameters.begin.js
//           ^ ^                  meta.brace.round.js
//            ^                   meta.function.parameters.js
//            ^             ^     variable.other.readwrite.js
//             ^                  punctuation.definition.parameters.end.js
//               ^             ^  meta.brace.curly.js
//                 ^^^^           variable.language.this.js
//                     ^          keyword.operator.accessor.js
//                      ^         meta.property.object.js
//                      ^         variable.other.property.js
//                        ^       keyword.operator.assignment.js
//                           ^    punctuation.terminator.statement.js
  foo(x: number): void { this.x = x; }
//^^^^^^ ^^^^^^^^ ^^^^ ^ ^^^^^^ ^ ^^ ^  meta.class.body.js
//^^^^^^ ^^^^^^^^ ^^^^ ^ ^^^^^^ ^ ^^ ^  meta.function.method.js
//^^^                                   entity.name.function.method.js
//   ^                                  punctuation.definition.parameters.begin.js
//   ^         ^                        meta.brace.round.js
//    ^^ ^^^^^^                         meta.function.parameters.js
//    ^                           ^     variable.other.readwrite.js
//     ^        ^                       punctuation.type.flowtype
//       ^^^^^^   ^^^^                  support.type.builtin.primitive.flowtype
//             ^                        punctuation.definition.parameters.end.js
//                     ^             ^  meta.brace.curly.js
//                       ^^^^           variable.language.this.js
//                           ^          keyword.operator.accessor.js
//                            ^         meta.property.object.js
//                            ^         variable.other.property.js
//                              ^       keyword.operator.assignment.js
//                                 ^    punctuation.terminator.statement.js
  bar() { return this.x; }
//^^^^^ ^ ^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^ ^ ^^^^^^ ^^^^^^^ ^  meta.function.method.js
//^^^                       entity.name.function.method.js
//   ^                      punctuation.definition.parameters.begin.js
//   ^^                     meta.brace.round.js
//    ^                     punctuation.definition.parameters.end.js
//      ^                ^  meta.brace.curly.js
//        ^^^^^^            keyword.control.flow.js
//               ^^^^       variable.language.this.js
//                   ^      keyword.operator.accessor.js
//                    ^     meta.property.object.js
//                    ^     variable.other.property.js
//                     ^    punctuation.terminator.statement.js
  bar(): number { return this.x; }
//^^^^^^ ^^^^^^ ^ ^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^^ ^^^^^^ ^ ^^^^^^ ^^^^^^^ ^  meta.function.method.js
//^^^                               entity.name.function.method.js
//   ^                              punctuation.definition.parameters.begin.js
//   ^^                             meta.brace.round.js
//    ^                             punctuation.definition.parameters.end.js
//     ^                            punctuation.type.flowtype
//       ^^^^^^                     support.type.builtin.primitive.flowtype
//              ^                ^  meta.brace.curly.js
//                ^^^^^^            keyword.control.flow.js
//                       ^^^^       variable.language.this.js
//                           ^      keyword.operator.accessor.js
//                            ^     meta.property.object.js
//                            ^     variable.other.property.js
//                             ^    punctuation.terminator.statement.js
  static qux(): D { return new D(); }
//^^^^^^ ^^^^^^ ^ ^ ^^^^^^ ^^^ ^^^^ ^  meta.class.body.js
//^^^^^^ ^^^^^^ ^ ^ ^^^^^^ ^^^ ^^^^ ^  meta.function.method.js
//^^^^^^                               storage.modifier.js
//       ^^^                           entity.name.function.method.js
//          ^                          punctuation.definition.parameters.begin.js
//          ^^                  ^^     meta.brace.round.js
//           ^                         punctuation.definition.parameters.end.js
//            ^                        punctuation.type.flowtype
//              ^                      support.type.class.flowtype
//                ^                 ^  meta.brace.curly.js
//                  ^^^^^^             keyword.control.flow.js
//                         ^^^         keyword.operator.js
//                             ^^^     meta.function-call.without-arguments.js
//                             ^       entity.name.function.js
//                                ^    punctuation.terminator.statement.js
  [x+y+z]<U>(a, b) { return null; }
//^^^^^^^^^^^^^ ^^ ^ ^^^^^^ ^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^ ^^ ^ ^^^^^^ ^^^^^ ^  meta.function.method.js
//^     ^                            meta.brace.square.js
// ^ ^ ^     ^  ^                    variable.other.readwrite.js
//  ^ ^                              keyword.operator.arithmetic.js
//       ^ ^                         punctuation.flowtype
//        ^                          support.type.class.flowtype
//          ^                        punctuation.definition.parameters.begin.js
//          ^    ^                   meta.brace.round.js
//           ^^ ^                    meta.function.parameters.js
//            ^                      meta.delimiter.comma.js
//               ^                   punctuation.definition.parameters.end.js
//                 ^              ^  meta.brace.curly.js
//                   ^^^^^^          keyword.control.flow.js
//                          ^^^^     constant.language.null.js
//                              ^    punctuation.terminator.statement.js
  map<U>(f: (x: T) => U): List<U> { }
//^^^^^^^^^ ^^^ ^^ ^^ ^^^ ^^^^^^^ ^ ^  meta.class.body.js
//^^^^^^^^^ ^^^ ^^ ^^ ^^^ ^^^^^^^ ^ ^  meta.function.method.js
//^^^                                  entity.name.function.method.js
//   ^ ^                      ^ ^      punctuation.flowtype
//    ^         ^     ^   ^^^^ ^       support.type.class.flowtype
//      ^   ^                          punctuation.definition.parameters.begin.js
//      ^   ^    ^     ^               meta.brace.round.js
//       ^^ ^^^ ^^ ^^ ^                meta.function.parameters.js
//       ^                             storage.type.function.js
//        ^   ^         ^              punctuation.type.flowtype
//           ^                         variable.other.readwrite.js
//               ^     ^               punctuation.definition.parameters.end.js
//                 ^^                  storage.type.function.arrow.js
//                                ^ ^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

class CB<X> {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^          meta.class.js
//^^^          storage.type.class.js
//    ^^       entity.name.class.js
//      ^ ^    punctuation.flowtype
//       ^     support.type.class.flowtype
//          ^  punctuation.section.class.begin.js
  x: X;
//^^ ^^  meta.class.body.js
//^      variable.other.readwrite.js
// ^     punctuation.type.flowtype
//   ^   support.type.class.flowtype
//    ^  punctuation.terminator.statement.js
  foo(x: X) { this.x = x; }
//^^^^^^ ^^ ^ ^^^^^^ ^ ^^ ^  meta.class.body.js
//^^^^^^ ^^ ^ ^^^^^^ ^ ^^ ^  meta.function.method.js
//^^^                        entity.name.function.method.js
//   ^                       punctuation.definition.parameters.begin.js
//   ^    ^                  meta.brace.round.js
//    ^^ ^                   meta.function.parameters.js
//    ^                ^     variable.other.readwrite.js
//     ^                     punctuation.type.flowtype
//       ^                   support.type.class.flowtype
//        ^                  punctuation.definition.parameters.end.js
//          ^             ^  meta.brace.curly.js
//            ^^^^           variable.language.this.js
//                ^          keyword.operator.accessor.js
//                 ^         meta.property.object.js
//                 ^         variable.other.property.js
//                   ^       keyword.operator.assignment.js
//                      ^    punctuation.terminator.statement.js
  bar(): X { return this.x; }
//^^^^^^ ^ ^ ^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^^ ^ ^ ^^^^^^ ^^^^^^^ ^  meta.function.method.js
//^^^                          entity.name.function.method.js
//   ^                         punctuation.definition.parameters.begin.js
//   ^^                        meta.brace.round.js
//    ^                        punctuation.definition.parameters.end.js
//     ^                       punctuation.type.flowtype
//       ^                     support.type.class.flowtype
//         ^                ^  meta.brace.curly.js
//           ^^^^^^            keyword.control.flow.js
//                  ^^^^       variable.language.this.js
//                      ^      keyword.operator.accessor.js
//                       ^     meta.property.object.js
//                       ^     variable.other.property.js
//                        ^    punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

class A<T: void> extends B<T: void> {}
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                                   meta.class.js
//^^^                                   storage.type.class.js
//    ^                  ^              entity.name.class.js
//     ^       ^          ^       ^     punctuation.flowtype
//      ^                  ^            support.type.class.flowtype
//       ^                  ^           punctuation.type.flowtype
//       ^ ^^^^             ^ ^^^^      support.type.builtin.primitive.flowtype
//               ^^^^^^^                meta.class.extends.js
//               ^^^^^^^                storage.type.extends.js
//                                  ^   punctuation.section.class.begin.js
//                                   ^  punctuation.section.class.end.js

class D extends C<number> {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                        meta.class.js
//^^^                        storage.type.class.js
//    ^         ^            entity.name.class.js
//      ^^^^^^^              meta.class.extends.js
//      ^^^^^^^              storage.type.extends.js
//               ^      ^    punctuation.flowtype
//                ^^^^^^     support.type.builtin.primitive.flowtype
//                        ^  punctuation.section.class.begin.js
  bar(): number {
//^^^^^^ ^^^^^^ ^  meta.class.body.js
//^^^^^^ ^^^^^^ ^  meta.function.method.js
//^^^              entity.name.function.method.js
//   ^             punctuation.definition.parameters.begin.js
//   ^^            meta.brace.round.js
//    ^            punctuation.definition.parameters.end.js
//     ^           punctuation.type.flowtype
//       ^^^^^^    support.type.builtin.primitive.flowtype
//              ^  meta.brace.curly.js
    this.x = super.bar() + 1;
//  ^^^^^^ ^ ^^^^^^^^^^^ ^ ^^  meta.class.body.js
//  ^^^^^^ ^ ^^^^^^^^^^^ ^ ^^  meta.function.method.js
//  ^^^^                       variable.language.this.js
//      ^         ^            keyword.operator.accessor.js
//       ^                     meta.property.object.js
//       ^                     variable.other.property.js
//         ^                   keyword.operator.assignment.js
//           ^^^^^             variable.language.super.js
//                 ^^^^^       meta.method-call.without-arguments.js
//                 ^^^         entity.name.function.js
//                    ^^       meta.brace.round.js
//                       ^     keyword.operator.arithmetic.js
//                         ^   constant.numeric.js
//                          ^  punctuation.terminator.statement.js
    return this.x;
//  ^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^ ^^^^^^^  meta.function.method.js
//  ^^^^^^          keyword.control.flow.js
//         ^^^^     variable.language.this.js
//             ^    keyword.operator.accessor.js
//              ^   meta.property.object.js
//              ^   variable.other.property.js
//               ^  punctuation.terminator.statement.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
  static qux(): D { return new D(); }
//^^^^^^ ^^^^^^ ^ ^ ^^^^^^ ^^^ ^^^^ ^  meta.class.body.js
//^^^^^^ ^^^^^^ ^ ^ ^^^^^^ ^^^ ^^^^ ^  meta.function.method.js
//^^^^^^                               storage.modifier.js
//       ^^^                           entity.name.function.method.js
//          ^                          punctuation.definition.parameters.begin.js
//          ^^                  ^^     meta.brace.round.js
//           ^                         punctuation.definition.parameters.end.js
//            ^                        punctuation.type.flowtype
//              ^                      support.type.class.flowtype
//                ^                 ^  meta.brace.curly.js
//                  ^^^^^^             keyword.control.flow.js
//                         ^^^         keyword.operator.js
//                             ^^^     meta.function-call.without-arguments.js
//                             ^       entity.name.function.js
//                                ^    punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

var obj: {a: boolean; b: string; c: Foo} = {a: true, b: "Hi", c: new Foo()};
// <- storage.type.js
 // <- storage.type.js
//^                                                                           storage.type.js
//  ^^^   ^           ^          ^                                            variable.other.readwrite.js
//     ^   ^           ^          ^                                           punctuation.type.flowtype
//       ^^^ ^^^^^^^^ ^^ ^^^^^^^ ^^ ^^^^                                      meta.object.flowtype
//       ^                                                                    meta.brace.curly.open.flowtype
//           ^^^^^^^     ^^^^^^                                               support.type.builtin.primitive.flowtype
//                                  ^^^                                       support.type.class.flowtype
//                                     ^                                      meta.brace.curly.close.flowtype
//                                       ^                                    keyword.operator.assignment.js
//                                         ^                              ^   meta.brace.curly.litobj.js
//                                          ^        ^        ^               constant.other.object.key.js
//                                          ^        ^        ^               string.unquoted.js
//                                           ^        ^        ^              punctuation.separator.key-value.js
//                                             ^^^^                           constant.language.boolean.true.js
//                                                 ^        ^                 meta.delimiter.comma.js
//                                                      ^^^^                  string.quoted.double.js
//                                                      ^                     punctuation.definition.string.begin.js
//                                                         ^                  punctuation.definition.string.end.js
//                                                               ^^^          keyword.operator.js
//                                                                   ^^^^^    meta.function-call.without-arguments.js
//                                                                   ^^^      entity.name.function.js
//                                                                      ^^    meta.brace.round.js
//                                                                         ^  punctuation.terminator.statement.js

type MyType = {message: string; isAwesome: boolean};
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                                                  keyword.other.typedef.flowtype
//   ^^^^^^                                           support.type.class.flowtype
//          ^                                         keyword.operator.assignment.js
//            ^^^^^^^^^ ^^^^^^^ ^^^^^^^^^^ ^^^^^^^^   meta.object.flowtype
//            ^                                   ^   meta.brace.curly.js
//             ^^^^^^^          ^^^^^^^^^             variable.other.readwrite.js
//                    ^                  ^            punctuation.type.flowtype
//                      ^^^^^^             ^^^^^^^    support.type.builtin.primitive.flowtype
//                                                 ^  punctuation.terminator.statement.js

var obj: { a: string; b?: number } = { a: "hello" };
// <- storage.type.js
 // <- storage.type.js
//^                                                   storage.type.js
//  ^^^    ^          ^                               variable.other.readwrite.js
//     ^    ^           ^                             punctuation.type.flowtype
//       ^ ^^ ^^^^^^^ ^^^ ^^^^^^ ^                    meta.object.flowtype
//       ^                                            meta.brace.curly.open.flowtype
//            ^^^^^^      ^^^^^^                      support.type.builtin.primitive.flowtype
//                     ^                              keyword.operator.optional.parameter.flowtype
//                               ^                    meta.brace.curly.close.flowtype
//                                 ^                  keyword.operator.assignment.js
//                                   ^            ^   meta.brace.curly.litobj.js
//                                     ^              constant.other.object.key.js
//                                     ^              string.unquoted.js
//                                      ^             punctuation.separator.key-value.js
//                                        ^^^^^^^     string.quoted.double.js
//                                        ^           punctuation.definition.string.begin.js
//                                              ^     punctuation.definition.string.end.js
//                                                 ^  punctuation.terminator.statement.js

function foo(x, y = false) { }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^ ^ ^^^^^^ ^ ^  meta.function.js
//^^^^^^                        storage.type.function.js
//       ^^^                    entity.name.function.js
//          ^                   punctuation.definition.parameters.begin.js
//          ^            ^      meta.brace.round.js
//           ^^ ^ ^ ^^^^^       meta.function.parameters.js
//           ^  ^               variable.other.readwrite.js
//            ^                 meta.delimiter.comma.js
//                ^             keyword.operator.assignment.js
//                  ^^^^^       constant.language.boolean.false.js
//                       ^      punctuation.definition.parameters.end.js
//                         ^ ^  meta.brace.curly.js
function bar(z, ...w) { }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^ ^ ^  meta.function.js
//^^^^^^                   storage.type.function.js
//       ^^^               entity.name.function.js
//          ^              punctuation.definition.parameters.begin.js
//          ^       ^      meta.brace.round.js
//           ^^ ^^^^       meta.function.parameters.js
//           ^             variable.other.readwrite.js
//            ^            meta.delimiter.comma.js
//              ^^^        keyword.operator.spread.js
//                 ^       meta.property.object.js
//                 ^       variable.other.property.js
//                  ^      punctuation.definition.parameters.end.js
//                    ^ ^  meta.brace.curly.js

function foo<X>(x: X): X { return x; }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^ ^^^ ^ ^ ^^^^^^ ^^ ^  meta.function.js
//^^^^^^                                storage.type.function.js
//       ^^^                            entity.name.function.js
//          ^ ^                         punctuation.flowtype
//           ^     ^   ^                support.type.class.flowtype
//             ^                        punctuation.definition.parameters.begin.js
//             ^    ^                   meta.brace.round.js
//              ^^ ^                    meta.function.parameters.js
//              ^                 ^     variable.other.readwrite.js
//               ^   ^                  punctuation.type.flowtype
//                  ^                   punctuation.definition.parameters.end.js
//                       ^           ^  meta.brace.curly.js
//                         ^^^^^^       keyword.control.flow.js
//                                 ^    punctuation.terminator.statement.js

class List<T> {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^            meta.class.js
//^^^            storage.type.class.js
//    ^^^^       entity.name.class.js
//        ^ ^    punctuation.flowtype
//         ^     support.type.class.flowtype
//            ^  punctuation.section.class.begin.js
  map<U>(f: (x: T) => U): List<U> { }
//^^^^^^^^^ ^^^ ^^ ^^ ^^^ ^^^^^^^ ^ ^  meta.class.body.js
//^^^^^^^^^ ^^^ ^^ ^^ ^^^ ^^^^^^^ ^ ^  meta.function.method.js
//^^^                                  entity.name.function.method.js
//   ^ ^                      ^ ^      punctuation.flowtype
//    ^         ^     ^   ^^^^ ^       support.type.class.flowtype
//      ^   ^                          punctuation.definition.parameters.begin.js
//      ^   ^    ^     ^               meta.brace.round.js
//       ^^ ^^^ ^^ ^^ ^                meta.function.parameters.js
//       ^                             storage.type.function.js
//        ^   ^         ^              punctuation.type.flowtype
//           ^                         variable.other.readwrite.js
//               ^     ^               punctuation.definition.parameters.end.js
//                 ^^                  storage.type.function.arrow.js
//                                ^ ^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

var o: ?string = null;
// <- storage.type.js
 // <- storage.type.js
//^                     storage.type.js
//  ^                   variable.other.readwrite.js
//   ^                  punctuation.type.flowtype
//     ^                keyword.operator.maybe.flowtype
//      ^^^^^^          support.type.builtin.primitive.flowtype
//             ^        keyword.operator.assignment.js
//               ^^^^   constant.language.null.js
//                   ^  punctuation.terminator.statement.js

var x: number | string = 0;
// <- storage.type.js
 // <- storage.type.js
//^                          storage.type.js
//  ^                        variable.other.readwrite.js
//   ^                       punctuation.type.flowtype
//     ^^^^^^   ^^^^^^       support.type.builtin.primitive.flowtype
//            ^              kewyword.operator.union.flowtype
//                     ^     keyword.operator.assignment.js
//                       ^   constant.numeric.js
//                        ^  punctuation.terminator.statement.js
declare var f: ((x: number) => void) & ((x: string) => void);
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                                                        keyword.other.declare.flowtype
//      ^^^                                                    storage.type.js
//          ^    ^                       ^                     variable.other.readwrite.js
//           ^    ^                       ^                    punctuation.type.flowtype
//             ^^                      ^^                      punctuation.definition.parameters.begin.js
//             ^^         ^        ^   ^^         ^        ^   meta.brace.round.js
//              ^^^ ^^^^^^^ ^^ ^^^^     ^^^ ^^^^^^^ ^^ ^^^^    meta.function.parameters.js
//                  ^^^^^^     ^^^^         ^^^^^^     ^^^^    support.type.builtin.primitive.flowtype
//                        ^        ^              ^        ^   punctuation.definition.parameters.end.js
//                          ^^                      ^^         storage.type.function.arrow.js
//                                   ^                         kewyword.operator.intersection.flowtype
//                                                          ^  punctuation.terminator.statement.js

var x: A | B | number | C = new C();
// <- storage.type.js
 // <- storage.type.js
//^                                   storage.type.js
//  ^                                 variable.other.readwrite.js
//   ^                                punctuation.type.flowtype
//     ^   ^            ^             support.type.class.flowtype
//       ^   ^        ^               kewyword.operator.union.flowtype
//             ^^^^^^                 support.type.builtin.primitive.flowtype
//                        ^           keyword.operator.assignment.js
//                          ^^^       keyword.operator.js
//                              ^^^   meta.function-call.without-arguments.js
//                              ^     entity.name.function.js
//                               ^^   meta.brace.round.js
//                                 ^  punctuation.terminator.statement.js

declare var f: ((x: Foo) => void) & ((x: Bar) => void);
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                                                  keyword.other.declare.flowtype
//      ^^^                                              storage.type.js
//          ^    ^                    ^                  variable.other.readwrite.js
//           ^    ^                    ^                 punctuation.type.flowtype
//             ^^                   ^^                   punctuation.definition.parameters.begin.js
//             ^^      ^        ^   ^^      ^        ^   meta.brace.round.js
//              ^^^ ^^^^ ^^ ^^^^     ^^^ ^^^^ ^^ ^^^^    meta.function.parameters.js
//                  ^^^                  ^^^             support.type.class.flowtype
//                     ^        ^           ^        ^   punctuation.definition.parameters.end.js
//                       ^^                   ^^         storage.type.function.arrow.js
//                          ^^^^                 ^^^^    support.type.builtin.primitive.flowtype
//                                ^                      kewyword.operator.intersection.flowtype
//                                                    ^  punctuation.terminator.statement.js

function foo(a: ?string, b: any): Array<number> {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^^ ^^ ^^^^^ ^^^^^^^^^^^^^ ^^  meta.function.js
//^^^^^^                                            storage.type.function.js
//       ^^^                                        entity.name.function.js
//          ^                                       punctuation.definition.parameters.begin.js
//          ^                  ^                    meta.brace.round.js
//           ^^ ^^^^^^^^ ^^ ^^^                     meta.function.parameters.js
//           ^           ^                          variable.other.readwrite.js
//            ^           ^     ^                   punctuation.type.flowtype
//              ^                                   keyword.operator.maybe.flowtype
//               ^^^^^^     ^^^         ^^^^^^      support.type.builtin.primitive.flowtype
//                     ^                            meta.delimiter.comma.js
//                             ^                    punctuation.definition.parameters.end.js
//                                ^^^^^             support.type.builtin.class.flowtype
//                                     ^      ^     punctuation.flowtype
//                                              ^^  meta.brace.curly.js

function fooStillBad(obj: { x: number }): (str: string) => {a: string} {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^^^^^^^^ ^ ^^ ^^^^^^ ^^^ ^^^^^ ^^^^^^^ ^^ ^^^ ^^^^^^^ ^  meta.function.js
//^^^^^^                                                                  storage.type.function.js
//       ^^^^^^^^^^^                                                      entity.name.function.js
//                  ^                     ^                               punctuation.definition.parameters.begin.js
//                  ^                  ^  ^           ^                   meta.brace.round.js
//                   ^^^^ ^ ^^ ^^^^^^ ^    ^^^^ ^^^^^^                    meta.function.parameters.js
//                   ^^^    ^              ^^^              ^             variable.other.readwrite.js
//                      ^    ^          ^     ^              ^            punctuation.type.flowtype
//                        ^ ^^ ^^^^^^ ^                    ^^^ ^^^^^^^    meta.object.flowtype
//                        ^                                ^              meta.brace.curly.open.flowtype
//                             ^^^^^^           ^^^^^^         ^^^^^^     support.type.builtin.primitive.flowtype
//                                    ^                              ^    meta.brace.curly.close.flowtype
//                                     ^              ^                   punctuation.definition.parameters.end.js
//                                                      ^^                storage.type.function.arrow.js
//                                                                     ^  meta.brace.curly.js
  console.log(Math.abs(obj.x));
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function.js
//^^^^^^^                        support.type.object.console.js
//       ^        ^       ^      keyword.operator.accessor.js
//        ^^^                    support.function.console.js
//           ^        ^     ^^   meta.brace.round.js
//            ^^^^               support.class.builtin.js
//                 ^^^^^^^^^^    meta.method-call.with-arguments.js
//                 ^^^           entity.name.function.js
//                     ^^^       variable.other.object.js
//                         ^     meta.property.object.js
//                         ^     variable.other.property.js
//                            ^  punctuation.terminator.statement.js
  return obj;
//^^^^^^ ^^^^  meta.function.js
//^^^^^^       keyword.control.flow.js
//       ^^^   variable.other.readwrite.js
//          ^  punctuation.terminator.statement.js
}
// <- meta.function.js meta.brace.curly.js


type T = number;
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^              keyword.other.typedef.flowtype
//   ^            support.type.class.flowtype
//     ^          keyword.operator.assignment.js
//       ^^^^^^   support.type.builtin.primitive.flowtype
//             ^  punctuation.terminator.statement.js
type T = Array<string>;
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                     keyword.other.typedef.flowtype
//   ^                   support.type.class.flowtype
//     ^                 keyword.operator.assignment.js
//       ^^^^^           support.type.builtin.class.flowtype
//            ^      ^   punctuation.flowtype
//             ^^^^^^    support.type.builtin.primitive.flowtype
//                    ^  punctuation.terminator.statement.js
var x: T = [];
// <- storage.type.js
 // <- storage.type.js
//^             storage.type.js
//  ^           variable.other.readwrite.js
//   ^          punctuation.type.flowtype
//     ^        support.type.class.flowtype
//       ^      keyword.operator.assignment.js
//         ^^   meta.brace.square.js
//           ^  punctuation.terminator.statement.js

function foo<X: ?number, Y:x>(f: F<X, Y>, x: X): Y { return f(x); }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^ ^^^ ^ ^ ^^^^^^ ^^^^^ ^  meta.function.js
//^^^^^^                                                             storage.type.function.js
//       ^^^                                                ^        entity.name.function.js
//          ^               ^     ^    ^                             punctuation.flowtype
//           ^           ^       ^ ^  ^      ^   ^                   support.type.class.flowtype
//            ^           ^    ^           ^   ^                     punctuation.type.flowtype
//            ^  ^^^^^^   ^                                          support.type.builtin.primitive.flowtype
//              ^                                                    keyword.operator.maybe.flowtype
//                     ^            ^   ^                            meta.delimiter.comma.js
//                         ^                                         support.type.primitive.flowtype
//                           ^                                       punctuation.definition.parameters.begin.js
//                           ^                ^              ^ ^     meta.brace.round.js
//                            ^^ ^^^^ ^^^ ^^ ^                       meta.function.parameters.js
//                            ^           ^                   ^      variable.other.readwrite.js
//                                            ^                      punctuation.definition.parameters.end.js
//                                                 ^              ^  meta.brace.curly.js
//                                                   ^^^^^^          keyword.control.flow.js
//                                                          ^^^^     meta.function-call.with-arguments.js
//                                                              ^    punctuation.terminator.statement.js

var b: { f: typeof Foo } = { f : Foo };
// <- storage.type.js
 // <- storage.type.js
//^                                      storage.type.js
//  ^    ^                       ^^^     variable.other.readwrite.js
//   ^    ^                              punctuation.type.flowtype
//     ^ ^^ ^^^^^^ ^^^ ^                 meta.object.flowtype
//     ^                                 meta.brace.curly.open.flowtype
//          ^^^^^^                       keyword.operator.flowtype
//                 ^^^                   support.type.class.flowtype
//                     ^                 meta.brace.curly.close.flowtype
//                       ^               keyword.operator.assignment.js
//                         ^         ^   meta.brace.curly.litobj.js
//                           ^           constant.other.object.key.js
//                           ^           string.unquoted.js
//                             ^         punctuation.separator.key-value.js
//                                    ^  punctuation.terminator.statement.js

function foo(x: string | number | boolean): string { }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^ ^ ^^^^^^ ^ ^^^^^^^^^ ^^^^^^ ^ ^  meta.function.js
//^^^^^^                                                storage.type.function.js
//       ^^^                                            entity.name.function.js
//          ^                                           punctuation.definition.parameters.begin.js
//          ^                            ^              meta.brace.round.js
//           ^^ ^^^^^^ ^ ^^^^^^ ^ ^^^^^^^               meta.function.parameters.js
//           ^                                          variable.other.readwrite.js
//            ^                           ^             punctuation.type.flowtype
//              ^^^^^^   ^^^^^^   ^^^^^^^   ^^^^^^      support.type.builtin.primitive.flowtype
//                     ^        ^                       kewyword.operator.union.flowtype
//                                       ^              punctuation.definition.parameters.end.js
//                                                 ^ ^  meta.brace.curly.js

function foo(x: { y: ?string }): string { return; }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^ ^^ ^^^^^^^ ^^^ ^^^^^^ ^ ^^^^^^^ ^  meta.function.js
//^^^^^^                                             storage.type.function.js
//       ^^^                                         entity.name.function.js
//          ^                                        punctuation.definition.parameters.begin.js
//          ^                 ^                      meta.brace.round.js
//           ^^ ^ ^^ ^^^^^^^ ^                       meta.function.parameters.js
//           ^    ^                                  variable.other.readwrite.js
//            ^    ^           ^                     punctuation.type.flowtype
//              ^ ^^ ^^^^^^^ ^                       meta.object.flowtype
//              ^                                    meta.brace.curly.open.flowtype
//                   ^                               keyword.operator.maybe.flowtype
//                    ^^^^^^     ^^^^^^              support.type.builtin.primitive.flowtype
//                           ^                       meta.brace.curly.close.flowtype
//                            ^                      punctuation.definition.parameters.end.js
//                                      ^         ^  meta.brace.curly.js
//                                        ^^^^^^     keyword.control.flow.js
//                                              ^    punctuation.terminator.statement.js

declare function something(): void;
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                              keyword.other.declare.flowtype
//      ^^^^^^^^ ^^^^^^^^^^^^ ^^^^   meta.function.js
//      ^^^^^^^^                     storage.type.function.js
//               ^^^^^^^^^           entity.name.function.js
//                        ^          punctuation.definition.parameters.begin.js
//                        ^^         meta.brace.round.js
//                         ^         punctuation.definition.parameters.end.js
//                          ^        punctuation.type.flowtype
//                            ^^^^   support.type.builtin.primitive.flowtype
//                                ^  punctuation.terminator.statement.js

declare class CC {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^             keyword.other.declare.flowtype
//      ^^^^^       storage.type.class.flowtype
//            ^^    entity.name.class.js
//               ^  punctuation.section.class.begin.js
  x: string;
//^^ ^^^^^^^  meta.class.body.js
//^           variable.other.readwrite.js
// ^          punctuation.type.flowtype
//   ^^^^^^   support.type.builtin.primitive.flowtype
//         ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

declare module M {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^             keyword.other.declare.flowtype
//      ^^^^^^      storage.type.module.flowtype
//             ^    entity.name.class.js
//               ^  punctuation.section.class.begin.js
  declare function foo(c: C): void;
//^^^^^^^ ^^^^^^^^ ^^^^^^ ^^^ ^^^^^  meta.class.body.js
//^^^^^^^                            keyword.other.declare.flowtype
//        ^^^^^^^^ ^^^^^^ ^^^ ^^^^   meta.function.js
//        ^^^^^^^^                   storage.type.function.js
//                 ^^^               entity.name.function.js
//                    ^              punctuation.definition.parameters.begin.js
//                    ^    ^         meta.brace.round.js
//                     ^^ ^          meta.function.parameters.js
//                     ^             variable.other.readwrite.js
//                      ^   ^        punctuation.type.flowtype
//                        ^          support.type.class.flowtype
//                         ^         punctuation.definition.parameters.end.js
//                            ^^^^   support.type.builtin.primitive.flowtype
//                                ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

function foo(a: ?string, b: any): Array<number> {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^^ ^^ ^^^^^ ^^^^^^^^^^^^^ ^^  meta.function.js
//^^^^^^                                            storage.type.function.js
//       ^^^                                        entity.name.function.js
//          ^                                       punctuation.definition.parameters.begin.js
//          ^                  ^                    meta.brace.round.js
//           ^^ ^^^^^^^^ ^^ ^^^                     meta.function.parameters.js
//           ^           ^                          variable.other.readwrite.js
//            ^           ^     ^                   punctuation.type.flowtype
//              ^                                   keyword.operator.maybe.flowtype
//               ^^^^^^     ^^^         ^^^^^^      support.type.builtin.primitive.flowtype
//                     ^                            meta.delimiter.comma.js
//                             ^                    punctuation.definition.parameters.end.js
//                                ^^^^^             support.type.builtin.class.flowtype
//                                     ^      ^     punctuation.flowtype
//                                              ^^  meta.brace.curly.js

import type {ClassFoo4, ClassFoo5} from "./ExportCJSNamed_Class";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                             ^^^^                            keyword.control.module.js
//     ^^^^                                                        keyword.other.typedef.flowtype
//          ^                    ^                                 meta.brace.curly.js
//           ^^^^^^^^^  ^^^^^^^^^                                  variable.other.readwrite.js
//                    ^                                            meta.delimiter.comma.js
//                                      ^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.module.js
//                                      ^                          punctuation.definition.string.begin.js
//                                                             ^   punctuation.definition.string.end.js
//                                                              ^  punctuation.terminator.statement.js
import typeof {ClassFoo4, ClassFoo5} from "./ExportCJSNamed_Class";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                               ^^^^                            keyword.control.module.js
//     ^^^^^^                                                        keyword.other.typedef.flowtype
//            ^                    ^                                 meta.brace.curly.js
//             ^^^^^^^^^  ^^^^^^^^^                                  variable.other.readwrite.js
//                      ^                                            meta.delimiter.comma.js
//                                        ^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.module.js
//                                        ^                          punctuation.definition.string.begin.js
//                                                               ^   punctuation.definition.string.end.js
//                                                                ^  punctuation.terminator.statement.js
import {foo4Inst, foo5Inst} from "./ExportCJSNamed_Class";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                      ^^^^                            keyword.control.module.js
//     ^                  ^                                 meta.brace.curly.js
//      ^^^^^^^^  ^^^^^^^^                                  variable.other.readwrite.js
//              ^                                           meta.delimiter.comma.js
//                               ^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.module.js
//                               ^                          punctuation.definition.string.begin.js
//                                                      ^   punctuation.definition.string.end.js
//                                                       ^  punctuation.terminator.statement.js
import type ClassFoo6 from "./issue-359";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                ^^^^                 keyword.control.module.js
//     ^^^^                                keyword.other.typedef.flowtype
//          ^^^^^^^^^                      variable.other.readwrite.js
//                         ^^^^^^^^^^^^^   string.quoted.module.js
//                         ^               punctuation.definition.string.begin.js
//                                     ^   punctuation.definition.string.end.js
//                                      ^  punctuation.terminator.statement.js
import typeof ClassFoo6 from "./issue-359";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                  ^^^^                 keyword.control.module.js
//     ^^^^^^                                keyword.other.typedef.flowtype
//            ^^^^^^^^^                      variable.other.readwrite.js
//                           ^^^^^^^^^^^^^   string.quoted.module.js
//                           ^               punctuation.definition.string.begin.js
//                                       ^   punctuation.definition.string.end.js
//                                        ^  punctuation.terminator.statement.js

export type AliasFoo3 = {
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                     keyword.control.module.js
//     ^^^^                keyword.other.typedef.flowtype
//          ^^^^^^^^^      support.type.class.flowtype
//                    ^    keyword.operator.assignment.js
//                      ^  meta.object.flowtype
//                      ^  meta.brace.curly.js
  givesANum(): number
//^^^^^^^^^^^^ ^^^^^^  meta.object.flowtype
//^^^^^^^^^^^^ ^^^^^^  meta.function.method.js
//^^^^^^^^^            entity.name.function.method.js
//         ^           punctuation.definition.parameters.begin.js
//         ^^          meta.brace.round.js
//          ^          punctuation.definition.parameters.end.js
//           ^         punctuation.type.flowtype
//             ^^^^^^  support.type.builtin.primitive.flowtype
};
// <- meta.object.flowtype meta.brace.curly.js
 // <- punctuation.terminator.statement.js


declare class Object {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                 keyword.other.declare.flowtype
//      ^^^^^           storage.type.class.flowtype
//            ^^^^^^    entity.name.class.js
//                   ^  punctuation.section.class.begin.js
  static (o: string): String;
//^^^^^^ ^^^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^^^^                       entity.name.function.method.js
//       ^                     punctuation.definition.parameters.begin.js
//       ^         ^           meta.brace.round.js
//        ^^ ^^^^^^            meta.function.parameters.js
//        ^                    variable.other.readwrite.js
//         ^        ^          punctuation.type.flowtype
//           ^^^^^^            support.type.builtin.primitive.flowtype
//                 ^           punctuation.definition.parameters.end.js
//                    ^^^^^^   support.type.builtin.class.flowtype
//                          ^  punctuation.terminator.statement.js
  static (o: ?void): {[key: any]: any};
//^^^^^^ ^^^ ^^^^^^^ ^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^^ ^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^                                 entity.name.function.method.js
//       ^                               punctuation.definition.parameters.begin.js
//       ^        ^                      meta.brace.round.js
//        ^^ ^^^^^                       meta.function.parameters.js
//        ^            ^^^               variable.other.readwrite.js
//         ^       ^      ^     ^        punctuation.type.flowtype
//           ^                           keyword.operator.maybe.flowtype
//            ^^^^          ^^^   ^^^    support.type.builtin.primitive.flowtype
//                ^                      punctuation.definition.parameters.end.js
//                   ^^^^^^ ^^^^^ ^^^^   meta.object.flowtype
//                   ^                   meta.brace.curly.open.flowtype
//                    ^                  meta.brace.square.open.flowtype
//                             ^         meta.brace.square.end.flowtype
//                                   ^   meta.brace.curly.close.flowtype
//                                    ^  punctuation.terminator.statement.js
  static <T: Object>(o: T): T;
//^^^^^^ ^^^ ^^^^^^^^^^ ^^^ ^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^^^^^ ^^^ ^   meta.function.method.js
//^^^^^^                        entity.name.function.method.js
//       ^         ^            punctuation.flowtype
//        ^             ^   ^   support.type.class.flowtype
//         ^          ^   ^     punctuation.type.flowtype
//         ^                    support.type.builtin.primitive.flowtype
//           ^^^^^^             support.type.builtin.class.flowtype
//                  ^           punctuation.definition.parameters.begin.js
//                  ^    ^      meta.brace.round.js
//                   ^^ ^       meta.function.parameters.js
//                   ^          variable.other.readwrite.js
//                       ^      punctuation.definition.parameters.end.js
//                           ^  punctuation.terminator.statement.js
  static create(o: any, properties?: any): any; // compiler magic
//^^^^^^ ^^^^^^^^^ ^^^^ ^^^^^^^^^^^^ ^^^^^ ^^^^ ^^ ^^^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^ ^^^^ ^^^^^^^^^^^^ ^^^^^ ^^^                     meta.function.method.js
//^^^^^^                                                           storage.modifier.js
//       ^^^^^^                                                    entity.name.function.method.js
//             ^                                                   punctuation.definition.parameters.begin.js
//             ^                        ^                          meta.brace.round.js
//              ^^ ^^^^ ^^^^^^^^^^^^ ^^^                           meta.function.parameters.js
//              ^       ^^^^^^^^^^                                 variable.other.readwrite.js
//               ^                 ^     ^                         punctuation.type.flowtype
//                 ^^^               ^^^   ^^^                     support.type.builtin.primitive.flowtype
//                    ^                                            meta.delimiter.comma.js
//                                ^                                keyword.operator.optional.parameter.flowtype
//                                      ^                          punctuation.definition.parameters.end.js
//                                            ^                    punctuation.terminator.statement.js
//                                              ^^ ^^^^^^^^ ^^^^^  comment.line.double-slash.js
//                                              ^^                 punctuation.definition.comment.js
  static assign(target: any, ...sources: Array<any>): any;
//^^^^^^ ^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^   meta.function.method.js
//^^^^^^                                                    storage.modifier.js
//       ^^^^^^                                             entity.name.function.method.js
//             ^                                            punctuation.definition.parameters.begin.js
//             ^                                   ^        meta.brace.round.js
//              ^^^^^^^ ^^^^ ^^^^^^^^^^^ ^^^^^^^^^^         meta.function.parameters.js
//              ^^^^^^          ^^^^^^^                     variable.other.readwrite.js
//                    ^                ^            ^       punctuation.type.flowtype
//                      ^^^                    ^^^    ^^^   support.type.builtin.primitive.flowtype
//                         ^                                meta.delimiter.comma.js
//                           ^^^                            keyword.operator.spread.js
//                                       ^^^^^              support.type.builtin.class.flowtype
//                                            ^   ^         punctuation.flowtype
//                                                 ^        punctuation.definition.parameters.end.js
//                                                       ^  punctuation.terminator.statement.js
  [key:any]: any;
//^^^^^^^^^^ ^^^^  meta.class.body.js
//^       ^        meta.brace.square.js
// ^^^             variable.other.readwrite.js
//     ^^^   ^^^   support.type.builtin.primitive.flowtype
//         ^       punctuation.type.flowtype
//              ^  punctuation.terminator.statement.js
  apply(thisArg: any, argArray?: any): any;
//^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^ ^^^^^ ^^^^  meta.class.body.js
//^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^ ^^^^^ ^^^   meta.function.method.js
//^^^^^                                      entity.name.function.method.js
//     ^                                     punctuation.definition.parameters.begin.js
//     ^                            ^        meta.brace.round.js
//      ^^^^^^^^ ^^^^ ^^^^^^^^^^ ^^^         meta.function.parameters.js
//      ^^^^^^^       ^^^^^^^^               variable.other.readwrite.js
//             ^               ^     ^       punctuation.type.flowtype
//               ^^^             ^^^   ^^^   support.type.builtin.primitive.flowtype
//                  ^                        meta.delimiter.comma.js
//                            ^              keyword.operator.optional.parameter.flowtype
//                                  ^        punctuation.definition.parameters.end.js
//                                        ^  punctuation.terminator.statement.js
  call(thisArg: any, ...argArray: Array<any>): any;
//^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^   meta.function.method.js
//^^^^                                               entity.name.function.method.js
//    ^                                              punctuation.definition.parameters.begin.js
//    ^                                     ^        meta.brace.round.js
//     ^^^^^^^^ ^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^         meta.function.parameters.js
//     ^^^^^^^          ^^^^^^^^                     variable.other.readwrite.js
//            ^                 ^            ^       punctuation.type.flowtype
//              ^^^                     ^^^    ^^^   support.type.builtin.primitive.flowtype
//                 ^                                 meta.delimiter.comma.js
//                   ^^^                             keyword.operator.spread.js
//                                ^^^^^              support.type.builtin.class.flowtype
//                                     ^   ^         punctuation.flowtype
//                                          ^        punctuation.definition.parameters.end.js
//                                                ^  punctuation.terminator.statement.js
  arguments: any;
//^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^^^^        variable.other.readwrite.js
//         ^       punctuation.type.flowtype
//           ^^^   support.type.builtin.primitive.flowtype
//              ^  punctuation.terminator.statement.js
  caller: Function;
//^^^^^^^ ^^^^^^^^^  meta.class.body.js
//^^^^^^             storage.type.function.js
//      ^            punctuation.type.flowtype
//        ^^^^^^^^   support.type.builtin.class.flowtype
//                ^  punctuation.terminator.statement.js
  max(...values: Array<number>): number;
//^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^                                     entity.name.function.method.js
//   ^                                    punctuation.definition.parameters.begin.js
//   ^                        ^           meta.brace.round.js
//    ^^^^^^^^^^ ^^^^^^^^^^^^^            meta.function.parameters.js
//    ^^^                                 keyword.operator.spread.js
//       ^^^^^^                           variable.other.readwrite.js
//             ^               ^          punctuation.type.flowtype
//               ^^^^^                    support.type.builtin.class.flowtype
//                    ^      ^            punctuation.flowtype
//                     ^^^^^^    ^^^^^^   support.type.builtin.primitive.flowtype
//                            ^           punctuation.definition.parameters.end.js
//                                     ^  punctuation.terminator.statement.js
  pow(x: number, y: number): number;
//^^^^^^ ^^^^^^^ ^^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^ ^^ ^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^                                 entity.name.function.method.js
//   ^                                punctuation.definition.parameters.begin.js
//   ^                    ^           meta.brace.round.js
//    ^^ ^^^^^^^ ^^ ^^^^^^            meta.function.parameters.js
//    ^          ^                    variable.other.readwrite.js
//     ^          ^        ^          punctuation.type.flowtype
//       ^^^^^^     ^^^^^^   ^^^^^^   support.type.builtin.primitive.flowtype
//             ^                      meta.delimiter.comma.js
//                        ^           punctuation.definition.parameters.end.js
//                                 ^  punctuation.terminator.statement.js
  @@iterator(): Iterator<T>;
//^^^^^^^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^   meta.function.method.js
//  ^^^^^^^^                  entity.name.function.method.js
//          ^                 punctuation.definition.parameters.begin.js
//          ^^                meta.brace.round.js
//           ^                punctuation.definition.parameters.end.js
//            ^               punctuation.type.flowtype
//              ^^^^^^^^ ^    support.type.class.flowtype
//                      ^ ^   punctuation.flowtype
//                         ^  punctuation.terminator.statement.js
  toLocaleString(): string;
//^^^^^^^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^^^^^^^^^^^^             entity.name.function.method.js
//              ^            punctuation.definition.parameters.begin.js
//              ^^           meta.brace.round.js
//               ^           punctuation.definition.parameters.end.js
//                ^          punctuation.type.flowtype
//                  ^^^^^^   support.type.builtin.primitive.flowtype
//                        ^  punctuation.terminator.statement.js
  // concat creates a new array
//^^ ^^^^^^ ^^^^^^^ ^ ^^^ ^^^^^  meta.class.body.js
//^^ ^^^^^^ ^^^^^^^ ^ ^^^ ^^^^^  comment.line.double-slash.js
//^^                             punctuation.definition.comment.js
  concat<S>(...items: Array<Array<S> | S>): Array<T | S>;
//^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^ ^ ^^^^ ^^^^^^^ ^ ^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^ ^ ^^^^ ^^^^^^^ ^ ^^   meta.function.method.js
//^^^^^^                                                   entity.name.function.method.js
//      ^ ^                ^     ^ ^    ^        ^     ^   punctuation.flowtype
//       ^                        ^    ^          ^   ^    support.type.class.flowtype
//         ^                                               punctuation.definition.parameters.begin.js
//         ^                             ^                 meta.brace.round.js
//          ^^^^^^^^^ ^^^^^^^^^^^^^^ ^ ^^                  meta.function.parameters.js
//          ^^^                                            keyword.operator.spread.js
//             ^^^^^                                       variable.other.readwrite.js
//                  ^                     ^                punctuation.type.flowtype
//                    ^^^^^ ^^^^^           ^^^^^          support.type.builtin.class.flowtype
//                                   ^              ^      kewyword.operator.union.flowtype
//                                       ^                 punctuation.definition.parameters.end.js
//                                                      ^  punctuation.terminator.statement.js
    reduceRight<U>(
//  ^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^^^^^^^^      entity.name.function.method.js
//             ^ ^   punctuation.flowtype
//              ^    support.type.class.flowtype
//                ^  punctuation.definition.parameters.begin.js
//                ^  meta.brace.round.js
    callbackfn: (previousValue: T|U, currentValue: T, currentIndex: number, array: Array<T>) => U
//  ^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^^ ^^^^^^^^^ ^^ ^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^^ ^^^^^^^^^ ^^ ^  meta.function.method.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^^ ^^^^^^^^^ ^^ ^  meta.function.parameters.js
//  ^^^^^^^^^^                                                                                     storage.type.function.js
//            ^               ^                  ^                ^              ^                 punctuation.type.flowtype
//              ^                                                                                  punctuation.definition.parameters.begin.js
//              ^                                                                          ^       meta.brace.round.js
//               ^^^^^^^^^^^^^       ^^^^^^^^^^^^     ^^^^^^^^^^^^          ^^^^^                  variable.other.readwrite.js
//                              ^ ^                ^                                     ^      ^  support.type.class.flowtype
//                               ^                                                                 kewyword.operator.union.flowtype
//                                 ^                ^                     ^                        meta.delimiter.comma.js
//                                                                  ^^^^^^                         support.type.builtin.primitive.flowtype
//                                                                                 ^^^^^           support.type.builtin.class.flowtype
//                                                                                      ^ ^        punctuation.flowtype
//                                                                                         ^       punctuation.definition.parameters.end.js
//                                                                                           ^^    storage.type.function.arrow.js
  ): U;
//^^ ^^  meta.class.body.js
//^^ ^   meta.function.method.js
//^      punctuation.definition.parameters.end.js
//^      meta.brace.round.js
// ^     punctuation.type.flowtype
//   ^   support.type.class.flowtype
//    ^  punctuation.terminator.statement.js
  length: number;
//^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^           variable.other.readwrite.js
//      ^          punctuation.type.flowtype
//        ^^^^^^   support.type.builtin.primitive.flowtype
//              ^  punctuation.terminator.statement.js
  static (...values:Array<any>): Array<any>;
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^   meta.function.method.js
//^^^^^^                                      entity.name.function.method.js
//       ^                                    punctuation.definition.parameters.begin.js
//       ^                    ^               meta.brace.round.js
//        ^^^^^^^^^^^^^^^^^^^^                meta.function.parameters.js
//        ^^^                                 keyword.operator.spread.js
//           ^^^^^^                           variable.other.readwrite.js
//                 ^           ^              punctuation.type.flowtype
//                  ^^^^^        ^^^^^        support.type.builtin.class.flowtype
//                       ^   ^        ^   ^   punctuation.flowtype
//                        ^^^          ^^^    support.type.builtin.primitive.flowtype
//                            ^               punctuation.definition.parameters.end.js
//                                         ^  punctuation.terminator.statement.js
  static isArray(obj: any): bool;
//^^^^^^ ^^^^^^^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^                           storage.modifier.js
//       ^^^^^^^                   entity.name.function.method.js
//              ^                  punctuation.definition.parameters.begin.js
//              ^        ^         meta.brace.round.js
//               ^^^^ ^^^          meta.function.parameters.js
//               ^^^               variable.other.readwrite.js
//                  ^     ^        punctuation.type.flowtype
//                    ^^^          support.type.builtin.primitive.flowtype
//                       ^         punctuation.definition.parameters.end.js
//                          ^^^^   support.type.primitive.flowtype
//                              ^  punctuation.terminator.statement.js
  static from<A, B>(arrayLike: any, mapFn?: ?(elem: A, index: number) => B, thisArg?: ?any): Array<B>;
//^^^^^^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^ ^^^^^^^ ^^^^^^^ ^^ ^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^^^^^ ^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^ ^^^^^^^ ^^^^^^^ ^^ ^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^^^^^ ^^^^^^^^   meta.function.method.js
//^^^^^^                                                                                                storage.modifier.js
//       ^^^^                                                                                           entity.name.function.method.js
//           ^    ^                                                                               ^ ^   punctuation.flowtype
//            ^  ^                                  ^                    ^                         ^    support.type.class.flowtype
//             ^                  ^                  ^                    ^                             meta.delimiter.comma.js
//                 ^                         ^                                                          punctuation.definition.parameters.begin.js
//                 ^                         ^                      ^                     ^             meta.brace.round.js
//                  ^^^^^^^^^^ ^^^^ ^^^^^^^ ^^^^^^^ ^^ ^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^^^              meta.function.parameters.js
//                  ^^^^^^^^^       ^^^^^     ^^^^     ^^^^^                ^^^^^^^                     variable.other.readwrite.js
//                           ^            ^       ^         ^                       ^      ^            punctuation.type.flowtype
//                             ^^^                            ^^^^^^                   ^^^              support.type.builtin.primitive.flowtype
//                                       ^                                         ^                    keyword.operator.optional.parameter.flowtype
//                                          ^                                         ^                 keyword.operator.maybe.flowtype
//                                                                  ^                     ^             punctuation.definition.parameters.end.js
//                                                                    ^^                                storage.type.function.arrow.js
//                                                                                           ^^^^^      support.type.builtin.class.flowtype
//                                                                                                   ^  punctuation.terminator.statement.js
  replace(searchValue: string | RegExp, replaceValue: string | (substring: string, ...args: Array<any>) => string): string;
//^^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^^^^^ ^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^ ^^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^^^^^ ^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^ ^^ ^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^^^^^                                                                                                                    entity.name.function.method.js
//       ^                                                     ^                                                             punctuation.definition.parameters.begin.js
//       ^                                                     ^                                      ^          ^           meta.brace.round.js
//        ^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^^^^^ ^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^ ^^ ^^^^^^            meta.function.parameters.js
//        ^^^^^^^^^^^                   ^^^^^^^^^^^^            ^^^^^^^^^             ^^^^                                   variable.other.readwrite.js
//                   ^                              ^                    ^                ^                       ^          punctuation.type.flowtype
//                     ^^^^^^                         ^^^^^^               ^^^^^^                 ^^^      ^^^^^^   ^^^^^^   support.type.builtin.primitive.flowtype
//                            ^                              ^                                                               kewyword.operator.union.flowtype
//                              ^^^^^^                                                      ^^^^^                            support.type.builtin.class.flowtype
//                                    ^                                          ^                                           meta.delimiter.comma.js
//                                                                                 ^^^                                       keyword.operator.spread.js
//                                                                                               ^   ^                       punctuation.flowtype
//                                                                                                    ^          ^           punctuation.definition.parameters.end.js
//                                                                                                      ^^                   storage.type.function.arrow.js
//                                                                                                                        ^  punctuation.terminator.statement.js
  search(regexp: string | RegExp): number;
//^^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^^ ^^^^^^   meta.function.method.js
//^^^^^^                                    entity.name.function.method.js
//      ^                                   punctuation.definition.parameters.begin.js
//      ^                       ^           meta.brace.round.js
//       ^^^^^^^ ^^^^^^ ^ ^^^^^^            meta.function.parameters.js
//       ^^^^^^                             variable.other.readwrite.js
//             ^                 ^          punctuation.type.flowtype
//               ^^^^^^            ^^^^^^   support.type.builtin.primitive.flowtype
//                      ^                   kewyword.operator.union.flowtype
//                        ^^^^^^            support.type.builtin.class.flowtype
//                              ^           punctuation.definition.parameters.end.js
//                                       ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

type IteratorResult<Yield,Return> = {
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                                   keyword.other.typedef.flowtype
//   ^^^^^^^^^^^^^^ ^^^^^ ^^^^^^       support.type.class.flowtype
//                 ^            ^      punctuation.flowtype
//                       ^             meta.delimiter.comma.js
//                                ^    keyword.operator.assignment.js
//                                  ^  meta.object.flowtype
//                                  ^  meta.brace.curly.js
  done: true,
//^^^^^ ^^^^^  meta.object.flowtype
//^^^^         variable.other.readwrite.js
//    ^        punctuation.type.flowtype
//      ^^^^   support.type.primitive.flowtype
//          ^  meta.delimiter.comma.js
  value?: Return,
//^^^^^^^ ^^^^^^^  meta.object.flowtype
//^^^^^            variable.other.readwrite.js
//     ^           keyword.operator.optional.parameter.flowtype
//      ^          punctuation.type.flowtype
//        ^^^^^^   support.type.class.flowtype
//              ^  meta.delimiter.comma.js
} | {
// <- meta.object.flowtype meta.brace.curly.js
//  ^  meta.object.flowtype
//  ^  meta.brace.curly.js
//^    kewyword.operator.union.flowtype
  done: false,
//^^^^^ ^^^^^^  meta.object.flowtype
//^^^^          variable.other.readwrite.js
//    ^         punctuation.type.flowtype
//      ^^^^^   support.type.primitive.flowtype
//           ^  meta.delimiter.comma.js
  value: Yield,
//^^^^^^ ^^^^^^  meta.object.flowtype
//^^^^^          variable.other.readwrite.js
//     ^         punctuation.type.flowtype
//       ^^^^^   support.type.class.flowtype
//            ^  meta.delimiter.comma.js
};
// <- meta.object.flowtype meta.brace.curly.js
 // <- punctuation.terminator.statement.js

interface $Iterator<Yield,Return,Next> {
// <- keyword.other.interface.flowtype
 // <- keyword.other.interface.flowtype
//^^^^^^^                                 keyword.other.interface.flowtype
//        ^^^^^^^^^                       support.type.class.interface.js
//                 ^                 ^    punctuation.flowtype
//                  ^^^^^ ^^^^^^ ^^^^     support.type.class.flowtype
//                       ^      ^         meta.delimiter.comma.js
//                                     ^  punctuation.section.class.begin.js
    @@iterator(): $Iterator<Yield,Return,Next>;
//  ^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.function.method.js
//    ^^^^^^^^                                   entity.name.function.method.js
//            ^                                  punctuation.definition.parameters.begin.js
//            ^^                                 meta.brace.round.js
//             ^                                 punctuation.definition.parameters.end.js
//              ^                                punctuation.type.flowtype
//                ^^^^^^^^^ ^^^^^ ^^^^^^ ^^^^    support.type.class.flowtype
//                         ^                 ^   punctuation.flowtype
//                               ^      ^        meta.delimiter.comma.js
//                                            ^  punctuation.terminator.statement.js
    next(value?: Next): IteratorResult<Yield,Return>;
//  ^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.function.method.js
//  ^^^^                                               entity.name.function.method.js
//      ^                                              punctuation.definition.parameters.begin.js
//      ^            ^                                 meta.brace.round.js
//       ^^^^^^^ ^^^^                                  meta.function.parameters.js
//       ^^^^^                                         variable.other.readwrite.js
//            ^                                        keyword.operator.optional.parameter.flowtype
//             ^      ^                                punctuation.type.flowtype
//               ^^^^   ^^^^^^^^^^^^^^ ^^^^^ ^^^^^^    support.type.class.flowtype
//                   ^                                 punctuation.definition.parameters.end.js
//                                    ^            ^   punctuation.flowtype
//                                          ^          meta.delimiter.comma.js
//                                                  ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js
type Iterator<T> = $Iterator<T,void,void>;
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                                        keyword.other.typedef.flowtype
//   ^^^^^^^^ ^    ^^^^^^^^^ ^              support.type.class.flowtype
//           ^ ^            ^           ^   punctuation.flowtype
//               ^                          keyword.operator.assignment.js
//                            ^    ^        meta.delimiter.comma.js
//                             ^^^^ ^^^^    support.type.builtin.primitive.flowtype
//                                       ^  punctuation.terminator.statement.js

interface $Iterable<Yield,Return,Next> {
// <- keyword.other.interface.flowtype
 // <- keyword.other.interface.flowtype
//^^^^^^^                                 keyword.other.interface.flowtype
//        ^^^^^^^^^                       support.type.class.interface.js
//                 ^                 ^    punctuation.flowtype
//                  ^^^^^ ^^^^^^ ^^^^     support.type.class.flowtype
//                       ^      ^         meta.delimiter.comma.js
//                                     ^  punctuation.section.class.begin.js
    @@iterator(): $Iterator<Yield,Return,Next>;
//  ^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.function.method.js
//    ^^^^^^^^                                   entity.name.function.method.js
//            ^                                  punctuation.definition.parameters.begin.js
//            ^^                                 meta.brace.round.js
//             ^                                 punctuation.definition.parameters.end.js
//              ^                                punctuation.type.flowtype
//                ^^^^^^^^^ ^^^^^ ^^^^^^ ^^^^    support.type.class.flowtype
//                         ^                 ^   punctuation.flowtype
//                               ^      ^        meta.delimiter.comma.js
//                                            ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js
type Iterable<T> = $Iterable<T,void,void>;
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                                        keyword.other.typedef.flowtype
//   ^^^^^^^^ ^    ^^^^^^^^^ ^              support.type.class.flowtype
//           ^ ^            ^           ^   punctuation.flowtype
//               ^                          keyword.operator.assignment.js
//                            ^    ^        meta.delimiter.comma.js
//                             ^^^^ ^^^^    support.type.builtin.primitive.flowtype
//                                       ^  punctuation.terminator.statement.js

/* Generators */
// <- comment.block.js punctuation.definition.comment.js
 // <- comment.block.js punctuation.definition.comment.js
// ^^^^^^^^^^ ^^  comment.block.js
//            ^^  punctuation.definition.comment.js
interface Generator<Yield,Return,Next> {
// <- keyword.other.interface.flowtype
 // <- keyword.other.interface.flowtype
//^^^^^^^                                 keyword.other.interface.flowtype
//        ^^^^^^^^^                       support.type.class.interface.js
//                 ^                 ^    punctuation.flowtype
//                  ^^^^^ ^^^^^^ ^^^^     support.type.class.flowtype
//                       ^      ^         meta.delimiter.comma.js
//                                     ^  punctuation.section.class.begin.js
  @@iterator(): $Iterator<Yield,Return,Next>;
//^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.function.method.js
//  ^^^^^^^^                                   entity.name.function.method.js
//          ^                                  punctuation.definition.parameters.begin.js
//          ^^                                 meta.brace.round.js
//           ^                                 punctuation.definition.parameters.end.js
//            ^                                punctuation.type.flowtype
//              ^^^^^^^^^ ^^^^^ ^^^^^^ ^^^^    support.type.class.flowtype
//                       ^                 ^   punctuation.flowtype
//                             ^      ^        meta.delimiter.comma.js
//                                          ^  punctuation.terminator.statement.js
  next(value?: Next): IteratorResult<Yield,Return>;
//^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.function.method.js
//^^^^                                               entity.name.function.method.js
//    ^                                              punctuation.definition.parameters.begin.js
//    ^            ^                                 meta.brace.round.js
//     ^^^^^^^ ^^^^                                  meta.function.parameters.js
//     ^^^^^                                         variable.other.readwrite.js
//          ^                                        keyword.operator.optional.parameter.flowtype
//           ^      ^                                punctuation.type.flowtype
//             ^^^^   ^^^^^^^^^^^^^^ ^^^^^ ^^^^^^    support.type.class.flowtype
//                 ^                                 punctuation.definition.parameters.end.js
//                                  ^            ^   punctuation.flowtype
//                                        ^          meta.delimiter.comma.js
//                                                ^  punctuation.terminator.statement.js
  return<R>(value: R): { done: true, value: R };
//^^^^^^^^^^^^^^^^ ^^^ ^ ^^^^^ ^^^^^ ^^^^^^ ^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^ ^^^ ^ ^^^^^ ^^^^^ ^^^^^^ ^ ^   meta.function.method.js
//^^^^^^                                          entity.name.function.method.js
//      ^ ^                                       punctuation.flowtype
//       ^         ^                        ^     support.type.class.flowtype
//         ^                                      punctuation.definition.parameters.begin.js
//         ^        ^                             meta.brace.round.js
//          ^^^^^^ ^                              meta.function.parameters.js
//          ^^^^^        ^^^^        ^^^^^        variable.other.readwrite.js
//               ^   ^       ^            ^       punctuation.type.flowtype
//                  ^                             punctuation.definition.parameters.end.js
//                     ^ ^^^^^ ^^^^^ ^^^^^^ ^ ^   meta.object.flowtype
//                     ^                          meta.brace.curly.open.flowtype
//                             ^^^^               support.type.primitive.flowtype
//                                 ^              meta.delimiter.comma.js
//                                            ^   meta.brace.curly.close.flowtype
//                                             ^  punctuation.terminator.statement.js
  throw(error?: any): IteratorResult<Yield,Return>;
//^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.function.method.js
//^^^^^                                              entity.name.function.method.js
//     ^                                             punctuation.definition.parameters.begin.js
//     ^           ^                                 meta.brace.round.js
//      ^^^^^^^ ^^^                                  meta.function.parameters.js
//      ^^^^^                                        variable.other.readwrite.js
//           ^                                       keyword.operator.optional.parameter.flowtype
//            ^     ^                                punctuation.type.flowtype
//              ^^^                                  support.type.builtin.primitive.flowtype
//                 ^                                 punctuation.definition.parameters.end.js
//                    ^^^^^^^^^^^^^^ ^^^^^ ^^^^^^    support.type.class.flowtype
//                                  ^            ^   punctuation.flowtype
//                                        ^          meta.delimiter.comma.js
//                                                ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

var a: number = 123,
// <- storage.type.js
 // <- storage.type.js
//^                   storage.type.js
//  ^                 variable.other.readwrite.js
//   ^                punctuation.type.flowtype
//     ^^^^^^         support.type.builtin.primitive.flowtype
//            ^       keyword.operator.assignment.js
//              ^^^   constant.numeric.js
//                 ^  punctuation.terminator.statement.js
    b: void = (x,y,z) => {};
//  ^          ^ ^ ^          variable.other.readwrite.js
//   ^                        punctuation.type.flowtype
//     ^^^^                   support.type.builtin.primitive.flowtype
//          ^                 keyword.operator.assignment.js
//            ^^^^^^^ ^^ ^^   meta.function.arrow.js
//            ^               punctuation.definition.parameters.begin.js
//            ^     ^         meta.brace.round.js
//             ^^^^^          meta.function.parameters.js
//              ^ ^           meta.delimiter.comma.js
//                  ^         punctuation.definition.parameters.end.js
//                    ^^      storage.type.function.arrow.js
//                       ^^   meta.brace.curly.js
//                         ^  punctuation.terminator.statement.js

for (var len: number; len < arr.length; i++) {
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^ ^^^^ ^^^^ ^^^^^^^ ^^^ ^ ^^^^^^^^^^^ ^^^^    meta.for.js
//^                                             keyword.control.loop.js
//  ^                                      ^    meta.brace.round.js
//   ^^^                                        storage.type.js
//       ^^^          ^^^               ^       variable.other.readwrite.js
//          ^                                   punctuation.type.flowtype
//            ^^^^^^                            support.type.builtin.primitive.flowtype
//                  ^                 ^         punctuation.terminator.statement.js
//                        ^                     keyword.operator.relational.js
//                          ^^^                 variable.other.object.js
//                             ^                keyword.operator.accessor.js
//                              ^^^^^^          meta.property.object.js
//                              ^^^^^^          variable.other.property.js
//                                       ^^     keyword.operator.arithmetic.js
//                                           ^  meta.brace.curly.js

}
// <- meta.brace.curly.js

declare class Map<K, V> {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                    keyword.other.declare.flowtype
//      ^^^^^              storage.type.class.flowtype
//            ^^^          support.type.builtin.class.flowtype
//               ^    ^    punctuation.flowtype
//                ^  ^     support.type.class.flowtype
//                 ^       meta.delimiter.comma.js
//                      ^  punctuation.section.class.begin.js
  @@iterator(): Iterator<[K, V]>;
//^^^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^^ ^^^   meta.function.method.js
//  ^^^^^^^^                       entity.name.function.method.js
//          ^                      punctuation.definition.parameters.begin.js
//          ^^                     meta.brace.round.js
//           ^                     punctuation.definition.parameters.end.js
//            ^                    punctuation.type.flowtype
//              ^^^^^^^^           support.type.class.flowtype
//                      ^      ^   punctuation.flowtype
//                       ^         meta.brace.square.open.flowtype
//                        ^  ^     variable.other.constant.js
//                         ^       meta.delimiter.comma.js
//                            ^    meta.brace.square.end.flowtype
//                              ^  punctuation.terminator.statement.js
  <Key, Value>(): Map<Key, Value>;
//^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//^          ^       ^          ^   punctuation.flowtype
// ^^^  ^^^^^         ^^^  ^^^^^    support.type.class.flowtype
//    ^                  ^          meta.delimiter.comma.js
//            ^                     punctuation.definition.parameters.begin.js
//            ^^                    meta.brace.round.js
//             ^                    punctuation.definition.parameters.end.js
//              ^                   punctuation.type.flowtype
//                ^^^               support.type.builtin.class.flowtype
//                               ^  punctuation.terminator.statement.js
  <Key, Value>(iterable: Iterable<[Key, Value]>): Map<Key, Value>;
//^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//^          ^                   ^            ^      ^          ^   punctuation.flowtype
// ^^^  ^^^^^            ^^^^^^^^                     ^^^  ^^^^^    support.type.class.flowtype
//    ^                               ^                  ^          meta.delimiter.comma.js
//            ^                                                     punctuation.definition.parameters.begin.js
//            ^                                ^                    meta.brace.round.js
//             ^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^                     meta.function.parameters.js
//             ^^^^^^^^            ^^^  ^^^^^                       variable.other.readwrite.js
//                     ^                        ^                   punctuation.type.flowtype
//                                ^                                 meta.brace.square.open.flowtype
//                                           ^                      meta.brace.square.end.flowtype
//                                             ^                    punctuation.definition.parameters.end.js
//                                                ^^^               support.type.builtin.class.flowtype
//                                                               ^  punctuation.terminator.statement.js
  entries(): Iterator<[K, V]>;
//^^^^^^^^^^ ^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^^^^^ ^^^^^^^^^^^^ ^^^   meta.function.method.js
//^^^^^^^                       entity.name.function.method.js
//       ^                      punctuation.definition.parameters.begin.js
//       ^^                     meta.brace.round.js
//        ^                     punctuation.definition.parameters.end.js
//         ^                    punctuation.type.flowtype
//           ^^^^^^^^           support.type.class.flowtype
//                   ^      ^   punctuation.flowtype
//                    ^         meta.brace.square.open.flowtype
//                     ^  ^     variable.other.constant.js
//                      ^       meta.delimiter.comma.js
//                         ^    meta.brace.square.end.flowtype
//                           ^  punctuation.terminator.statement.js
  forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
//^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^ ^^^^^^ ^^ ^^^^ ^^^^^^ ^^^ ^^ ^^^^^ ^^^^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^ ^^^^^^ ^^ ^^^^ ^^^^^^ ^^^ ^^ ^^^^^ ^^^^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^^                                                                                  entity.name.function.method.js
//       ^            ^                                                                    punctuation.definition.parameters.begin.js
//       ^            ^                                  ^                       ^         meta.brace.round.js
//        ^^^^^^^^^^^ ^^^^^^^ ^^ ^^^^^^ ^^ ^^^^ ^^^^^^ ^^^ ^^ ^^^^^ ^^^^^^^^^ ^^^          meta.function.parameters.js
//        ^^^^^^^^^^                                                                       storage.type.function.js
//                  ^       ^         ^       ^                             ^     ^        punctuation.type.flowtype
//                     ^^^^^     ^^^^^     ^^^                      ^^^^^^^                variable.other.readwrite.js
//                            ^         ^           ^  ^                                   support.type.class.flowtype
//                             ^         ^           ^            ^                        meta.delimiter.comma.js
//                                              ^^^                                        support.type.builtin.class.flowtype
//                                                 ^    ^                                  punctuation.flowtype
//                                                       ^                       ^         punctuation.definition.parameters.end.js
//                                                         ^^                              storage.type.function.arrow.js
//                                                            ^^^^            ^^^   ^^^^   support.type.builtin.primitive.flowtype
//                                                                         ^               keyword.operator.optional.parameter.flowtype
//                                                                                      ^  punctuation.terminator.statement.js
  keys(): Iterator<K>;
//^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^ ^^^^^^^^^^^   meta.function.method.js
//^^^^                  entity.name.function.method.js
//    ^                 punctuation.definition.parameters.begin.js
//    ^^                meta.brace.round.js
//     ^                punctuation.definition.parameters.end.js
//      ^               punctuation.type.flowtype
//        ^^^^^^^^ ^    support.type.class.flowtype
//                ^ ^   punctuation.flowtype
//                   ^  punctuation.terminator.statement.js
  set(key: K, value?: V): Map<K, V>;
//^^^^^^^^ ^^ ^^^^^^^ ^^^ ^^^^^^ ^^^  meta.class.body.js
//^^^^^^^^ ^^ ^^^^^^^ ^^^ ^^^^^^ ^^   meta.function.method.js
//^^^                                 entity.name.function.method.js
//   ^                                punctuation.definition.parameters.begin.js
//   ^                 ^              meta.brace.round.js
//    ^^^^ ^^ ^^^^^^^ ^               meta.function.parameters.js
//    ^^^     ^^^^^                   variable.other.readwrite.js
//       ^          ^   ^             punctuation.type.flowtype
//         ^          ^       ^  ^    support.type.class.flowtype
//          ^                  ^      meta.delimiter.comma.js
//                 ^                  keyword.operator.optional.parameter.flowtype
//                     ^              punctuation.definition.parameters.end.js
//                        ^^^         support.type.builtin.class.flowtype
//                           ^    ^   punctuation.flowtype
//                                 ^  punctuation.terminator.statement.js
  size: number;
//^^^^^ ^^^^^^^  meta.class.body.js
//^^^^           variable.other.readwrite.js
//    ^          punctuation.type.flowtype
//      ^^^^^^   support.type.builtin.primitive.flowtype
//            ^  punctuation.terminator.statement.js
  values(): Iterator<V>;
//^^^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^ ^^^^^^^^^^^   meta.function.method.js
//^^^^^^                  entity.name.function.method.js
//      ^                 punctuation.definition.parameters.begin.js
//      ^^                meta.brace.round.js
//       ^                punctuation.definition.parameters.end.js
//        ^               punctuation.type.flowtype
//          ^^^^^^^^ ^    support.type.class.flowtype
//                  ^ ^   punctuation.flowtype
//                     ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

declare class Promise<R> {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                     keyword.other.declare.flowtype
//      ^^^^^               storage.type.class.flowtype
//            ^^^^^^^       support.type.builtin.class.flowtype
//                   ^ ^    punctuation.flowtype
//                    ^     support.type.class.flowtype
//                       ^  punctuation.section.class.begin.js
  constructor(callback: (
//^^^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^ ^  meta.function.method.js
//^^^^^^^^^^^              entity.name.function.method.js
//           ^          ^  punctuation.definition.parameters.begin.js
//           ^          ^  meta.brace.round.js
//            ^^^^^^^^^ ^  meta.function.parameters.js
//            ^^^^^^^^     storage.type.function.js
//                    ^    punctuation.type.flowtype
    resolve: (result: Promise<R> | R) => void,
//  ^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^ ^ ^^ ^^ ^^^^^  meta.class.body.js
//  ^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^ ^ ^^ ^^ ^^^^^  meta.function.method.js
//  ^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^ ^ ^^ ^^ ^^^^^  meta.function.parameters.js
//  ^^^^^^^                                     storage.type.function.js
//         ^        ^                           punctuation.type.flowtype
//           ^                                  punctuation.definition.parameters.begin.js
//           ^                      ^           meta.brace.round.js
//            ^^^^^^                            variable.other.readwrite.js
//                    ^^^^^^^                   support.type.builtin.class.flowtype
//                           ^ ^                punctuation.flowtype
//                            ^    ^            support.type.class.flowtype
//                               ^              kewyword.operator.union.flowtype
//                                  ^           punctuation.definition.parameters.end.js
//                                    ^^        storage.type.function.arrow.js
//                                       ^^^^   support.type.builtin.primitive.flowtype
//                                           ^  meta.delimiter.comma.js
    reject:  (error: any) => void
//  ^^^^^^^  ^^^^^^^ ^^^^ ^^ ^^^^  meta.class.body.js
//  ^^^^^^^  ^^^^^^^ ^^^^ ^^ ^^^^  meta.function.method.js
//  ^^^^^^^  ^^^^^^^ ^^^^ ^^ ^^^^  meta.function.parameters.js
//  ^^^^^^                         storage.type.function.js
//        ^        ^               punctuation.type.flowtype
//           ^                     punctuation.definition.parameters.begin.js
//           ^          ^          meta.brace.round.js
//            ^^^^^                variable.other.readwrite.js
//                   ^^^     ^^^^  support.type.builtin.primitive.flowtype
//                      ^          punctuation.definition.parameters.end.js
//                        ^^       storage.type.function.arrow.js
  ) => void): void;
//^ ^^ ^^^^^^ ^^^^^  meta.class.body.js
//^ ^^ ^^^^^^ ^^^^   meta.function.method.js
//^ ^^ ^^^^          meta.function.parameters.js
//^        ^         punctuation.definition.parameters.end.js
//^        ^         meta.brace.round.js
//  ^^               storage.type.function.arrow.js
//     ^^^^   ^^^^   support.type.builtin.primitive.flowtype
//          ^        punctuation.type.flowtype
//                ^  punctuation.terminator.statement.js

  then<U>(
//^^^^^^^^  meta.class.body.js
//^^^^^^^^  meta.function.method.js
//^^^^      entity.name.function.method.js
//    ^ ^   punctuation.flowtype
//     ^    support.type.class.flowtype
//       ^  punctuation.definition.parameters.begin.js
//       ^  meta.brace.round.js
    onFulfill?: (value: R) => Promise<U> | U,
//  ^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^^ ^ ^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^^ ^ ^^  meta.function.method.js
//  ^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^^ ^ ^^  meta.function.parameters.js
//  ^^^^^^^^^                                  storage.type.function.js
//           ^                                 keyword.operator.optional.parameter.flowtype
//            ^       ^                        punctuation.type.flowtype
//              ^                              punctuation.definition.parameters.begin.js
//              ^        ^                     meta.brace.round.js
//               ^^^^^                         variable.other.readwrite.js
//                      ^             ^    ^   support.type.class.flowtype
//                       ^                     punctuation.definition.parameters.end.js
//                         ^^                  storage.type.function.arrow.js
//                            ^^^^^^^          support.type.builtin.class.flowtype
//                                   ^ ^       punctuation.flowtype
//                                       ^     kewyword.operator.union.flowtype
//                                          ^  meta.delimiter.comma.js
    onReject?: (error: any) => Promise<U> | U
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^^ ^ ^  meta.class.body.js
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^^ ^ ^  meta.function.method.js
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^^ ^ ^  meta.function.parameters.js
//  ^^^^^^^^                                   storage.type.function.js
//          ^                                  keyword.operator.optional.parameter.flowtype
//           ^       ^                         punctuation.type.flowtype
//             ^                               punctuation.definition.parameters.begin.js
//             ^          ^                    meta.brace.round.js
//              ^^^^^                          variable.other.readwrite.js
//                     ^^^                     support.type.builtin.primitive.flowtype
//                        ^                    punctuation.definition.parameters.end.js
//                          ^^                 storage.type.function.arrow.js
//                             ^^^^^^^         support.type.builtin.class.flowtype
//                                    ^ ^      punctuation.flowtype
//                                     ^    ^  support.type.class.flowtype
//                                        ^    kewyword.operator.union.flowtype
  ): Promise<U>;
//^^ ^^^^^^^^^^^  meta.class.body.js
//^^ ^^^^^^^^^^   meta.function.method.js
//^               punctuation.definition.parameters.end.js
//^               meta.brace.round.js
// ^              punctuation.type.flowtype
//   ^^^^^^^      support.type.builtin.class.flowtype
//          ^ ^   punctuation.flowtype
//           ^    support.type.class.flowtype
//             ^  punctuation.terminator.statement.js

  catch<U>(
//^^^^^^^^^  meta.class.body.js
//^^^^^^^^^  meta.function.method.js
//^^^^^      entity.name.function.method.js
//     ^ ^   punctuation.flowtype
//      ^    support.type.class.flowtype
//        ^  punctuation.definition.parameters.begin.js
//        ^  meta.brace.round.js
    onReject?: (error: any) => ?Promise<U> | U
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^^^ ^ ^  meta.class.body.js
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^^^ ^ ^  meta.function.method.js
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^^^ ^ ^  meta.function.parameters.js
//  ^^^^^^^^                                    storage.type.function.js
//          ^                                   keyword.operator.optional.parameter.flowtype
//           ^       ^                          punctuation.type.flowtype
//             ^                                punctuation.definition.parameters.begin.js
//             ^          ^                     meta.brace.round.js
//              ^^^^^                           variable.other.readwrite.js
//                     ^^^                      support.type.builtin.primitive.flowtype
//                        ^                     punctuation.definition.parameters.end.js
//                          ^^                  storage.type.function.arrow.js
//                             ^                keyword.operator.maybe.flowtype
//                              ^^^^^^^         support.type.builtin.class.flowtype
//                                     ^ ^      punctuation.flowtype
//                                      ^    ^  support.type.class.flowtype
//                                         ^    kewyword.operator.union.flowtype
  ): Promise<U>;
//^^ ^^^^^^^^^^^  meta.class.body.js
//^^ ^^^^^^^^^^   meta.function.method.js
//^               punctuation.definition.parameters.end.js
//^               meta.brace.round.js
// ^              punctuation.type.flowtype
//   ^^^^^^^      support.type.builtin.class.flowtype
//          ^ ^   punctuation.flowtype
//           ^    support.type.class.flowtype
//             ^  punctuation.terminator.statement.js

  static resolve<T>(object?: Promise<T> | T): Promise<T>;
//^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^ ^^^ ^^^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^ ^^^ ^^^^^^^^^^   meta.function.method.js
//^^^^^^                                                   storage.modifier.js
//       ^^^^^^^                                           entity.name.function.method.js
//              ^ ^                 ^ ^              ^ ^   punctuation.flowtype
//               ^                   ^    ^           ^    support.type.class.flowtype
//                 ^                                       punctuation.definition.parameters.begin.js
//                 ^                       ^               meta.brace.round.js
//                  ^^^^^^^^ ^^^^^^^^^^ ^ ^                meta.function.parameters.js
//                  ^^^^^^                                 variable.other.readwrite.js
//                        ^                                keyword.operator.optional.parameter.flowtype
//                         ^                ^              punctuation.type.flowtype
//                           ^^^^^^^          ^^^^^^^      support.type.builtin.class.flowtype
//                                      ^                  kewyword.operator.union.flowtype
//                                         ^               punctuation.definition.parameters.end.js
//                                                      ^  punctuation.terminator.statement.js
  static reject<T>(error?: any): Promise<T>;
//^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^   meta.function.method.js
//^^^^^^                                      storage.modifier.js
//       ^^^^^^                               entity.name.function.method.js
//             ^ ^                      ^ ^   punctuation.flowtype
//              ^                        ^    support.type.class.flowtype
//                ^                           punctuation.definition.parameters.begin.js
//                ^           ^               meta.brace.round.js
//                 ^^^^^^^ ^^^                meta.function.parameters.js
//                 ^^^^^                      variable.other.readwrite.js
//                      ^                     keyword.operator.optional.parameter.flowtype
//                       ^     ^              punctuation.type.flowtype
//                         ^^^                support.type.builtin.primitive.flowtype
//                            ^               punctuation.definition.parameters.end.js
//                               ^^^^^^^      support.type.builtin.class.flowtype
//                                         ^  punctuation.terminator.statement.js
  static all<T>(promises: Array<Promise<T>>): Promise<Array<T>>;
//^^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^   meta.function.method.js
//^^^^^^                                                          storage.modifier.js
//       ^^^                                                      entity.name.function.method.js
//          ^ ^                ^       ^ ^^          ^     ^ ^^   punctuation.flowtype
//           ^                          ^                   ^     support.type.class.flowtype
//             ^                                                  punctuation.definition.parameters.begin.js
//             ^                           ^                      meta.brace.round.js
//              ^^^^^^^^^ ^^^^^^^^^^^^^^^^^                       meta.function.parameters.js
//              ^^^^^^^^                                          variable.other.readwrite.js
//                      ^                   ^                     punctuation.type.flowtype
//                        ^^^^^ ^^^^^^^       ^^^^^^^ ^^^^^       support.type.builtin.class.flowtype
//                                         ^                      punctuation.definition.parameters.end.js
//                                                             ^  punctuation.terminator.statement.js
  static race<T>(promises: Array<Promise<T>>): Promise<T>;
//^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^   meta.function.method.js
//^^^^^^                                                    storage.modifier.js
//       ^^^^                                               entity.name.function.method.js
//           ^ ^                ^       ^ ^^          ^ ^   punctuation.flowtype
//            ^                          ^             ^    support.type.class.flowtype
//              ^                                           punctuation.definition.parameters.begin.js
//              ^                           ^               meta.brace.round.js
//               ^^^^^^^^^ ^^^^^^^^^^^^^^^^^                meta.function.parameters.js
//               ^^^^^^^^                                   variable.other.readwrite.js
//                       ^                   ^              punctuation.type.flowtype
//                         ^^^^^ ^^^^^^^       ^^^^^^^      support.type.builtin.class.flowtype
//                                          ^               punctuation.definition.parameters.end.js
//                                                       ^  punctuation.terminator.statement.js

// Non-standard APIs common in some libraries
// <- meta.class.body.js comment.line.double-slash.js punctuation.definition.comment.js
 // <- meta.class.body.js comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^^^^^ ^^^^ ^^^^^^ ^^ ^^^^ ^^^^^^^^^  meta.class.body.js
// ^^^^^^^^^^^^ ^^^^ ^^^^^^ ^^ ^^^^ ^^^^^^^^^  comment.line.double-slash.js

  done<U>(
//^^^^^^^^  meta.class.body.js
//^^^^^^^^  meta.function.method.js
//^^^^      entity.name.function.method.js
//    ^ ^   punctuation.flowtype
//     ^    support.type.class.flowtype
//       ^  punctuation.definition.parameters.begin.js
//       ^  meta.brace.round.js
    onFulfill?: (value: R) => void,
//  ^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^  meta.function.method.js
//  ^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^^  meta.function.parameters.js
//  ^^^^^^^^^                        storage.type.function.js
//           ^                       keyword.operator.optional.parameter.flowtype
//            ^       ^              punctuation.type.flowtype
//              ^                    punctuation.definition.parameters.begin.js
//              ^        ^           meta.brace.round.js
//               ^^^^^               variable.other.readwrite.js
//                      ^            support.type.class.flowtype
//                       ^           punctuation.definition.parameters.end.js
//                         ^^        storage.type.function.arrow.js
//                            ^^^^   support.type.builtin.primitive.flowtype
//                                ^  meta.delimiter.comma.js
    onReject?: (error: any) => void
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^  meta.function.method.js
//  ^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^  meta.function.parameters.js
//  ^^^^^^^^                         storage.type.function.js
//          ^                        keyword.operator.optional.parameter.flowtype
//           ^       ^               punctuation.type.flowtype
//             ^                     punctuation.definition.parameters.begin.js
//             ^          ^          meta.brace.round.js
//              ^^^^^                variable.other.readwrite.js
//                     ^^^     ^^^^  support.type.builtin.primitive.flowtype
//                        ^          punctuation.definition.parameters.end.js
//                          ^^       storage.type.function.arrow.js
  ): void;
//^^ ^^^^^  meta.class.body.js
//^^ ^^^^   meta.function.method.js
//^         punctuation.definition.parameters.end.js
//^         meta.brace.round.js
// ^        punctuation.type.flowtype
//   ^^^^   support.type.builtin.primitive.flowtype
//       ^  punctuation.terminator.statement.js

  static cast<T>(object?: T): Promise<T>;
//^^^^^^ ^^^^^^^^^^^^^^^^ ^^^ ^^^^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^ ^^^ ^^^^^^^^^^   meta.function.method.js
//^^^^^^                                   storage.modifier.js
//       ^^^^                              entity.name.function.method.js
//           ^ ^                     ^ ^   punctuation.flowtype
//            ^           ^           ^    support.type.class.flowtype
//              ^                          punctuation.definition.parameters.begin.js
//              ^          ^               meta.brace.round.js
//               ^^^^^^^^ ^                meta.function.parameters.js
//               ^^^^^^                    variable.other.readwrite.js
//                     ^                   keyword.operator.optional.parameter.flowtype
//                      ^   ^              punctuation.type.flowtype
//                         ^               punctuation.definition.parameters.end.js
//                            ^^^^^^^      support.type.builtin.class.flowtype
//                                      ^  punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js
