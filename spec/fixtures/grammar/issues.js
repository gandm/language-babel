// SYNTAX TEST "source.js.jsx"

// Issue #397
let result = "hello"
// <- storage.type.js
 // <- storage.type.js
//^                   storage.type.js
//  ^^^^^^            variable.other.readwrite.js
//         ^          keyword.operator.assignment.js
//           ^^^^^^^  string.quoted.double.js
//           ^        punctuation.definition.string.begin.js
//                 ^  punctuation.definition.string.end.js
  |> someptr?.#doubleSay
//^^                      keyword.operator.pipeline.js
//   ^^^^^^^              variable.other.object.js
//          ^             keyword.operator.existential.js
//           ^            keyword.operator.accessor.js
//            ^           keyword.operator.private.js
//             ^^^^^^^^^  meta.method-call.without-arguments.js
//             ^^^^^^^^^  entity.name.function.js
  |> capitalize
//^^             keyword.operator.pipeline.js
//   ^^^^^^^^^^  meta.function-call.without-arguments.js
//   ^^^^^^^^^^  entity.name.function.js
  |> exclaim;
//^^           keyword.operator.pipeline.js
//   ^^^^^^^   meta.function-call.without-arguments.js
//   ^^^^^^^   entity.name.function.js
//          ^  punctuation.terminator.statement.js

let newScore = person.score
// <- storage.type.js
 // <- storage.type.js
//^                          storage.type.js
//  ^^^^^^^^                 variable.other.readwrite.js
//           ^               keyword.operator.assignment.js
//             ^^^^^^        variable.other.object.js
//                   ^       keyword.operator.accessor.js
//                    ^^^^^  meta.property.object.js
//                    ^^^^^  variable.other.property.js
  |> double
//^^         keyword.operator.pipeline.js
//   ^^^^^^  meta.function-call.without-arguments.js
//   ^^^^^^  entity.name.function.js
  |> _ => add(7, _)
//^^                 keyword.operator.pipeline.js
//   ^               meta.function-call.without-arguments.js
//   ^    ^^^        entity.name.function.js
//     ^^            storage.type.function.arrow.js
//        ^^^^^^ ^^  meta.function-call.with-arguments.js
//           ^    ^  meta.brace.round.js
//            ^      constant.numeric.js
//             ^     meta.delimiter.comma.js
//               ^   variable.other.readwrite.js
  |> _ => boundScore(0, 100, _);
//^^                              keyword.operator.pipeline.js
//   ^                            meta.function-call.without-arguments.js
//   ^    ^^^^^^^^^^              entity.name.function.js
//     ^^                         storage.type.function.arrow.js
//        ^^^^^^^^^^^^^ ^^^^ ^^   meta.function-call.with-arguments.js
//                  ^         ^   meta.brace.round.js
//                   ^  ^^^       constant.numeric.js
//                    ^    ^      meta.delimiter.comma.js
//                           ^    variable.other.readwrite.js
//                             ^  punctuation.terminator.statement.js

let newScore = person.score
// <- storage.type.js
 // <- storage.type.js
//^                          storage.type.js
//  ^^^^^^^^                 variable.other.readwrite.js
//           ^               keyword.operator.assignment.js
//             ^^^^^^        variable.other.object.js
//                   ^       keyword.operator.accessor.js
//                    ^^^^^  meta.property.object.js
//                    ^^^^^  variable.other.property.js
  |> double
//^^         keyword.operator.pipeline.js
//   ^^^^^^  meta.function-call.without-arguments.js
//   ^^^^^^  entity.name.function.js
  |> add.papp(7)
//^^              keyword.operator.pipeline.js
//   ^^^          variable.other.object.js
//      ^         keyword.operator.accessor.js
//       ^^^^^^^  meta.method-call.with-arguments.js
//       ^^^^     entity.name.function.js
//           ^ ^  meta.brace.round.js
//            ^   constant.numeric.js
  |> boundScore.papp(0, 100);
//^^                           keyword.operator.pipeline.js
//   ^^^^^^^^^^                variable.other.object.js
//             ^               keyword.operator.accessor.js
//              ^^^^^^^ ^^^^   meta.method-call.with-arguments.js
//              ^^^^           entity.name.function.js
//                  ^      ^   meta.brace.round.js
//                   ^  ^^^    constant.numeric.js
//                    ^        meta.delimiter.comma.js
//                          ^  punctuation.terminator.statement.js

getAllPlayers()
// <- meta.function-call.without-arguments.js entity.name.function.js
 // <- meta.function-call.without-arguments.js entity.name.function.js
//^^^^^^^^^^^^^  meta.function-call.without-arguments.js
//^^^^^^^^^^^    entity.name.function.js
//           ^^  meta.brace.round.js
  .filter( p => p.score > 100 )
//^              ^               keyword.operator.accessor.js
// ^^^^^^^ ^ ^^ ^^^^^^^ ^ ^^^ ^  meta.method-call.with-arguments.js
// ^^^^^^                        entity.name.function.js
//       ^                    ^  meta.brace.round.js
//         ^ ^^                  meta.function.arrow.js
//         ^                     meta.function.parameters.js
//         ^                     variable.other.readwrite.js
//           ^^                  storage.type.function.arrow.js
//              ^                variable.other.object.js
//                ^^^^^          meta.property.object.js
//                ^^^^^          variable.other.property.js
//                      ^        keyword.operator.relational.js
//                        ^^^    constant.numeric.js
  .sort()
//^        keyword.operator.accessor.js
// ^^^^    support.function.mutator.js
//     ^^  meta.brace.round.js
  |> _ => Lazy(_)
//^^               keyword.operator.pipeline.js
//   ^             meta.function-call.without-arguments.js
//   ^    ^^^^     entity.name.function.js
//     ^^          storage.type.function.arrow.js
//        ^^^^^^^  meta.function-call.with-arguments.js
//            ^ ^  meta.brace.round.js
//             ^   variable.other.readwrite.js
  .map( p => p.name )
//^           ^        keyword.operator.accessor.js
// ^^^^ ^ ^^ ^^^^^^ ^  meta.method-call.with-arguments.js
// ^^^                 entity.name.function.js
//    ^             ^  meta.brace.round.js
//      ^ ^^           meta.function.arrow.js
//      ^              meta.function.parameters.js
//      ^              variable.other.readwrite.js
//        ^^           storage.type.function.arrow.js
//           ^         variable.other.object.js
//             ^^^^    meta.property.object.js
//             ^^^^    variable.other.property.js
  .take(5)
//^         keyword.operator.accessor.js
// ^^^^^^^  meta.method-call.with-arguments.js
// ^^^^     entity.name.function.js
//     ^ ^  meta.brace.round.js
//      ^   constant.numeric.js
  |> _ => renderLeaderboard('#my-div', _);
//^^                                        keyword.operator.pipeline.js
//   ^                                      meta.function-call.without-arguments.js
//   ^    ^^^^^^^^^^^^^^^^^                 entity.name.function.js
//     ^^                                   storage.type.function.arrow.js
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^   meta.function-call.with-arguments.js
//                         ^            ^   meta.brace.round.js
//                          ^^^^^^^^^       string.quoted.single.js
//                          ^               punctuation.definition.string.begin.js
//                                  ^       punctuation.definition.string.end.js
//                                   ^      meta.delimiter.comma.js
//                                     ^    variable.other.readwrite.js
//                                       ^  punctuation.terminator.statement.js

// Issue 392
type a={}
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^       keyword.other.typedef.flowtype
//   ^     support.type.primitive.flowtype
//    ^    keyword.operator.assignment.js
//     ^^  meta.object.flowtype
//     ^^  meta.brace.curly.js
f()
// <- meta.function-call.without-arguments.js entity.name.function.js
 // <- meta.function-call.without-arguments.js meta.brace.round.js
//^  meta.function-call.without-arguments.js
//^  meta.brace.round.js
export type a={}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^            keyword.control.module.js
//     ^^^^       keyword.other.typedef.flowtype
//          ^     support.type.primitive.flowtype
//           ^    keyword.operator.assignment.js
//            ^^  meta.object.flowtype
//            ^^  meta.brace.curly.js
f()
// <- meta.function-call.without-arguments.js entity.name.function.js
 // <- meta.function-call.without-arguments.js meta.brace.round.js
//^  meta.function-call.without-arguments.js
//^  meta.brace.round.js

// Issue 390

let a = await a()
// <- storage.type.js
 // <- storage.type.js
//^                storage.type.js
//  ^              variable.other.readwrite.js
//    ^            keyword.operator.assignment.js
//      ^^^^^      keyword.control.flow.js
//            ^^^  meta.function-call.without-arguments.js
//            ^    entity.name.function.js
//             ^^  meta.brace.round.js
this::a()
// <- variable.language.this.js
 // <- variable.language.this.js
//^^       variable.language.this.js
//  ^^     keyword.operator.accessor.js
//    ^^^  meta.function-call.without-arguments.js
//    ^    entity.name.function.js
//     ^^  meta.brace.round.js

// Issue 389
function a(){
  this::hid().p = false
//^^^^^^^^^^^^^ ^ ^^^^^  meta.function.js
//^^^^                   variable.language.this.js
//    ^^     ^           keyword.operator.accessor.js
//      ^^^^^            meta.function-call.without-arguments.js
//      ^^^              entity.name.function.js
//         ^^            meta.brace.round.js
//            ^          meta.property.object.js
//            ^          variable.other.property.js
//              ^        keyword.operator.assignment.js
//                ^^^^^  constant.language.boolean.false.js
  this::hid().f = false
//^^^^^^^^^^^^^ ^ ^^^^^  meta.function.js
//^^^^                   variable.language.this.js
//    ^^     ^           keyword.operator.accessor.js
//      ^^^^^            meta.function-call.without-arguments.js
//      ^^^              entity.name.function.js
//         ^^            meta.brace.round.js
//            ^          meta.property.object.js
//            ^          variable.other.property.js
//              ^        keyword.operator.assignment.js
//                ^^^^^  constant.language.boolean.false.js
  this::hid().c = options.config || {}
//^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^ ^^  meta.function.js
//^^^^                                  variable.language.this.js
//    ^^     ^           ^              keyword.operator.accessor.js
//      ^^^^^                           meta.function-call.without-arguments.js
//      ^^^                             entity.name.function.js
//         ^^                           meta.brace.round.js
//            ^           ^^^^^^        meta.property.object.js
//            ^           ^^^^^^        variable.other.property.js
//              ^                       keyword.operator.assignment.js
//                ^^^^^^^               variable.other.object.js
//                               ^^     keyword.operator.logical.js
//                                  ^^  meta.brace.curly.js
  await this::dis('')
//^^^^^ ^^^^^^^^^^^^^  meta.function.js
//^^^^^                keyword.control.flow.js
//      ^^^^           variable.language.this.js
//          ^^         keyword.operator.accessor.js
//            ^^^^^^^  meta.function-call.with-arguments.js
//            ^^^      entity.name.function.js
//               ^  ^  meta.brace.round.js
//                ^^   string.quoted.single.js
//                ^    punctuation.definition.string.begin.js
//                 ^   punctuation.definition.string.end.js
  await this::dis('')
//^^^^^ ^^^^^^^^^^^^^  meta.function.js
//^^^^^                keyword.control.flow.js
//      ^^^^           variable.language.this.js
//          ^^         keyword.operator.accessor.js
//            ^^^^^^^  meta.function-call.with-arguments.js
//            ^^^      entity.name.function.js
//               ^  ^  meta.brace.round.js
//                ^^   string.quoted.single.js
//                ^    punctuation.definition.string.begin.js
//                 ^   punctuation.definition.string.end.js
}

// Issue 388
let a = <T>(
// <- storage.type.js
 // <- storage.type.js
//^           storage.type.js
//  ^         variable.other.readwrite.js
//    ^       keyword.operator.assignment.js
//      ^^^^  meta.function.arrow.js
//      ^ ^   punctuation.flowtype
//       ^    support.type.class.flowtype
//         ^  punctuation.definition.parameters.begin.js
//         ^  meta.brace.round.js
  somevar: T
//^^^^^^^^ ^  meta.function.arrow.js
//^^^^^^^^ ^  meta.function.parameters.js
//^^^^^^^     variable.other.readwrite.js
//       ^    punctuation.type.flowtype
//         ^  support.type.class.flowtype
) => {}
// <- meta.function.arrow.js punctuation.definition.parameters.end.js meta.brace.round.js
//^^ ^^  meta.function.arrow.js
//^^     storage.type.function.arrow.js
//   ^^  meta.brace.curly.js

// Issue 376
f(arg, arg1 => a >= b)
// <- meta.function-call.with-arguments.js entity.name.function.js
 // <- meta.function-call.with-arguments.js meta.brace.round.js
//^^^^ ^^^^ ^^ ^ ^^ ^^  meta.function-call.with-arguments.js
//                   ^  meta.brace.round.js
//^^^  ^^^^    ^    ^   variable.other.readwrite.js
//   ^                  meta.delimiter.comma.js
//     ^^^^ ^^          meta.function.arrow.js
//     ^^^^             meta.function.parameters.js
//          ^^          storage.type.function.arrow.js
//               ^^     keyword.operator.relational.js

// Issue 360
class Foo implements Serializable {}
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                                 meta.class.js
//^^^                                 storage.type.class.js
//    ^^^            ^^^^^^^^^^^^     entity.name.class.js
//        ^^^^^^^^^^                  meta.class.extends.js
//        ^^^^^^^^^^                  storage.type.implements.js
//                                ^   punctuation.section.class.begin.js
//                                 ^  punctuation.section.class.end.js

// Issue 349
let obj= {
  [a[1+2]]: { x: 'a' }
//^ ^   ^^              meta.brace.square.js
// ^                    variable.other.object.js
//   ^ ^                constant.numeric.js
//    ^                 keyword.operator.arithmetic.js
//        ^    ^        punctuation.separator.key-value.js
//          ^        ^  meta.brace.curly.litobj.js
//            ^         constant.other.object.key.js
//            ^         string.unquoted.js
//               ^^^    string.quoted.single.js
//               ^      punctuation.definition.string.begin.js
//                 ^    punctuation.definition.string.end.js
}

// ISSUE 342
const setShapeState = (
// <- storage.type.js
 // <- storage.type.js
//^^^                    storage.type.js
//    ^^^^^^^^^^^^^      variable.other.readwrite.js
//                  ^    keyword.operator.assignment.js
//                    ^  meta.brace.round.js
  state : ShapeDataState,
//^^^^^                    variable.other.readwrite.js
//        ^^^^^^^^^^^^^^   support.type.class.flowtype
//                      ^  meta.delimiter.comma.js
  newShapeData : ShapeData,
//^^^^^^^^^^^^               variable.other.readwrite.js
//               ^^^^^^^^^   support.type.class.flowtype
//                        ^  meta.delimiter.comma.js
) => ({
// <- meta.brace.round.js
//   ^   meta.brace.round.js
//^^     storage.type.function.arrow.js
//    ^  meta.brace.curly.litobj.js
  ...state,
//^^^        keyword.operator.spread.js
//   ^^^^^   meta.property.object.js
//   ^^^^^   variable.other.property.js
//        ^  meta.delimiter.comma.js
  [cId]: {
//^   ^     meta.brace.square.js
// ^^^      variable.other.readwrite.js
//     ^    punctuation.separator.key-value.js
//       ^  meta.brace.curly.litobj.js
    ...state[cId],
//  ^^^             keyword.operator.spread.js
//     ^^^^^        meta.property.object.js
//     ^^^^^        variable.other.property.js
//          ^   ^   meta.brace.square.js
//           ^^^    variable.other.readwrite.js
//               ^  meta.delimiter.comma.js
    [shapeId]: newShapeData,
//  ^       ^                 meta.brace.square.js
//   ^^^^^^^   ^^^^^^^^^^^^   variable.other.readwrite.js
//           ^                punctuation.separator.key-value.js
//                         ^  meta.delimiter.comma.js
  }
//^  meta.brace.curly.litobj.js
})
// <- meta.brace.curly.litobj.js
 // <- meta.brace.round.js

// ISSUE 332
const a={
// <- storage.type.js
 // <- storage.type.js
//^^^      storage.type.js
//    ^    variable.other.readwrite.js
//     ^   keyword.operator.assignment.js
//      ^  meta.brace.curly.litobj.js
  ABC: ABC,
//^^^        constant.other.object.key.js
//^^^        string.unquoted.js
//   ^       punctuation.separator.key-value.js
//     ^^^   variable.other.constant.js
//        ^  meta.delimiter.comma.js
  ABC,
//^^^   constant.other.object.key.js
//^^^   variable.other.constant.shorthandpropertyname.js
//   ^  meta.delimiter.comma.js
  abc: abc
//^^^       constant.other.object.key.js
//^^^       string.unquoted.js
//   ^      punctuation.separator.key-value.js
//     ^^^  variable.other.readwrite.js
  abc,
//^^^   variable.other.readwrite.shorthandpropertyname.js
//   ^  meta.delimiter.comma.js
}

// ISSUE 297

for (var prop:interator in obj) {}
for (var prop:interator of (CONST1?CONST2:CONST3)) {}


// ISSUE 281

const helloWorld = (): string => 'hello world';
// <- storage.type.js
 // <- storage.type.js
//^^^                                            storage.type.js
//    ^^^^^^^^^^ ^ ^^^ ^^^^^^ ^^                 meta.function.arrow.js
//    ^^^^^^^^^^                                 entity.name.function.js
//               ^                               keyword.operator.assignment.js
//                 ^                             punctuation.definition.parameters.begin.js
//                 ^^                            meta.brace.round.js
//                  ^                            punctuation.definition.parameters.end.js
//                   ^                           punctuation.type.flowtype
//                     ^^^^^^                    support.type.builtin.primitive.flowtype
//                            ^^                 storage.type.function.arrow.js
//                               ^^^^^^ ^^^^^^   string.quoted.single.js
//                               ^               punctuation.definition.string.begin.js
//                                           ^   punctuation.definition.string.end.js
//                                            ^  punctuation.terminator.statement.js

// ISSUE 278
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^  comment.line.double-slash.js

if (foo instanceof (Date)) return;
// <- keyword.control.conditional.js
 // <- keyword.control.conditional.js
// ^               ^    ^^          meta.brace.round.js
//  ^^^                             variable.other.readwrite.js
//      ^^^^^^^^^^                  keyword.operator.js
//                  ^^^^            support.class.builtin.js
//                         ^^^^^^   keyword.control.flow.js
//                               ^  punctuation.terminator.statement.js
delete(x)
// <- keyword.operator.js
 // <- keyword.operator.js
//^^^^     keyword.operator.js
//    ^ ^  meta.brace.round.js
//     ^   variable.other.readwrite.js
void (0)
// <- keyword.operator.js
 // <- keyword.operator.js
//^^      keyword.operator.js
//   ^ ^  meta.brace.round.js
//    ^   constant.numeric.js
function test() {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^  meta.function.js
//^^^^^^           storage.type.function.js
//       ^^^^      entity.name.function.js
//           ^     punctuation.definition.parameters.begin.js
//           ^^    meta.brace.round.js
//            ^    punctuation.definition.parameters.end.js
//              ^  meta.brace.curly.js
  if (foo instanceof (Date)) return;
//^^ ^^^^ ^^^^^^^^^^ ^^^^^^^ ^^^^^^^  meta.function.js
//^^                                  keyword.control.conditional.js
//   ^               ^    ^^          meta.brace.round.js
//    ^^^                             variable.other.readwrite.js
//        ^^^^^^^^^^                  keyword.operator.js
//                    ^^^^            support.class.builtin.js
//                           ^^^^^^   keyword.control.flow.js
//                                 ^  punctuation.terminator.statement.js
  delete(x)
//^^^^^^^^^  meta.function.js
//^^^^^^     keyword.operator.js
//      ^ ^  meta.brace.round.js
//       ^   variable.other.readwrite.js
  void (0)
//^^^^ ^^^  meta.function.js
//^^^^      keyword.operator.js
//     ^ ^  meta.brace.round.js
//      ^   constant.numeric.js
}
// <- meta.function.js meta.brace.curly.js
class a {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^      meta.class.js
//^^^      storage.type.class.js
//    ^    entity.name.class.js
//      ^  punctuation.section.class.begin.js
  if(a) {}
//^^^^^ ^^  meta.class.body.js
//^^^^^ ^^  meta.function.method.js
//^^        entity.name.function.method.js
//  ^       punctuation.definition.parameters.begin.js
//  ^ ^     meta.brace.round.js
//   ^      meta.function.parameters.js
//   ^      variable.other.readwrite.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.brace.curly.js
  delete() {}
//^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^ ^^  meta.function.method.js
//^^^^^^       entity.name.function.method.js
//      ^      punctuation.definition.parameters.begin.js
//      ^^     meta.brace.round.js
//       ^     punctuation.definition.parameters.end.js
//         ^^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js
let a= {
// <- storage.type.js
 // <- storage.type.js
//^       storage.type.js
//  ^     variable.other.readwrite.js
//   ^    keyword.operator.assignment.js
//     ^  meta.brace.curly.litobj.js
  if(a) {}
//^^^^^ ^^  meta.function.method.js
//^^        entity.name.function.method.js
//  ^       punctuation.definition.parameters.begin.js
//  ^ ^     meta.brace.round.js
//   ^      meta.function.parameters.js
//   ^      variable.other.readwrite.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.brace.curly.js
}
// <- meta.brace.curly.litobj.js

// ISSUE 275
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^  comment.line.double-slash.js

const async = require('aync')
// <- storage.type.js
 // <- storage.type.js
//^^^                          storage.type.js
//    ^^^^^                    variable.other.readwrite.js
//          ^                  keyword.operator.assignment.js
//            ^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//            ^^^^^^^          entity.name.function.js
//                   ^      ^  meta.brace.round.js
//                    ^^^^^^   string.quoted.single.js
//                    ^        punctuation.definition.string.begin.js
//                         ^   punctuation.definition.string.end.js

// ISSUES 271 & 272
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^ ^ ^^^  comment.line.double-slash.js

 _.CONST;CONST.CONST;Class.method;_;__;___CONST___;
 // <- variable.other.object.js
//^           ^           ^                          keyword.operator.accessor.js
// ^^^^^ ^^^^^ ^^^^^                   ^^^^^^^^^^^   variable.other.constant.js
//      ^           ^            ^ ^  ^           ^  punctuation.terminator.statement.js
//                   ^^^^^^^^^^^^                    meta.property.class.js
//                   ^^^^^                           variable.other.class.js
//                         ^^^^^^                    variable.other.property.static.js
//                                ^ ^^               variable.other.readwrite.js


// ISSUE 262
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^  comment.line.double-slash.js

const someComponent = (onClick) => <div onClick={onClick}>Blah</div>
// <- storage.type.js
 // <- storage.type.js
//^^^                                                                 storage.type.js
//    ^^^^^^^^^^^^^ ^ ^^^^^^^^^ ^^                                    meta.function.arrow.js
//    ^^^^^^^^^^^^^                                                   entity.name.function.js
//                  ^                                                 keyword.operator.assignment.js
//                    ^                                               punctuation.definition.parameters.begin.js
//                    ^       ^                                       meta.brace.round.js
//                     ^^^^^^^                                        meta.function.parameters.js
//                     ^^^^^^^                   ^^^^^^^              variable.other.readwrite.js
//                            ^                                       punctuation.definition.parameters.end.js
//                              ^^                                    storage.type.function.arrow.js
//                                 ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//                                 ^                     ^    ^^   ^  punctuation.definition.tag.jsx
//                                  ^^^                               entity.name.tag.open.jsx
//                                      ^^^^^^^^^^^^^^^^^^^^^^^^      JSXAttrs
//                                      ^^^^^^^                       entity.other.attribute-name.jsx
//                                             ^                      keyword.operator.assignment.jsx
//                                              ^^^^^^^^^             meta.embedded.expression.js
//                                              ^                     punctuation.section.embedded.begin.jsx
//                                                      ^             punctuation.section.embedded.end.jsx
//                                                       ^            JSXStartTagEnd
//                                                        ^^^^        JSXNested
//                                                            ^^      JSXEndTagStart
//                                                              ^^^   entity.name.tag.close.jsx

// ISSUE 261
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^  comment.line.double-slash.js

var arrayOfFunctions = [
// <- storage.type.js
 // <- storage.type.js
//^                       storage.type.js
//  ^^^^^^^^^^^^^^^^      variable.other.readwrite.js
//                   ^    keyword.operator.assignment.js
//                     ^  meta.brace.square.js
  function (callback) {
//^^^^^^^^ ^^^^^^^^^^ ^  meta.function.js
//^^^^^^^^               storage.type.function.js
//         ^             punctuation.definition.parameters.begin.js
//         ^        ^    meta.brace.round.js
//          ^^^^^^^^     meta.function.parameters.js
//          ^^^^^^^^     variable.other.readwrite.js
//                  ^    punctuation.definition.parameters.end.js
//                    ^  meta.brace.curly.js
    var num = 0;
//  ^^^ ^^^ ^ ^^  meta.function.js
//  ^^^           storage.type.js
//      ^^^       variable.other.readwrite.js
//          ^     keyword.operator.assignment.js
//            ^   constant.numeric.js
//             ^  punctuation.terminator.statement.js
    if (num <= 0) {
//  ^^ ^^^^ ^^ ^^ ^  meta.function.js
//  ^^               keyword.control.conditional.js
//     ^        ^    meta.brace.round.js
//      ^^^          variable.other.readwrite.js
//          ^^       keyword.operator.relational.js
//             ^     constant.numeric.js
//                ^  meta.brace.curly.js
      return callback(null);
//    ^^^^^^ ^^^^^^^^^^^^^^^  meta.function.js
//    ^^^^^^                  keyword.control.flow.js
//           ^^^^^^^^^^^^^^   meta.function-call.with-arguments.js
//           ^^^^^^^^         entity.name.function.js
//                   ^    ^   meta.brace.round.js
//                    ^^^^    constant.language.null.js
//                         ^  punctuation.terminator.statement.js
    }
//  ^  meta.function.js
//  ^  meta.brace.curly.js
    return callback(num);
//  ^^^^^^ ^^^^^^^^^^^^^^  meta.function.js
//  ^^^^^^                 keyword.control.flow.js
//         ^^^^^^^^^^^^^   meta.function-call.with-arguments.js
//         ^^^^^^^^        entity.name.function.js
//                 ^   ^   meta.brace.round.js
//                  ^^^    variable.other.readwrite.js
//                      ^  punctuation.terminator.statement.js
  },
//^   meta.function.js
//^   meta.brace.curly.js
// ^  meta.delimiter.comma.js
  function () { if (true) return 1;}
//^^^^^^^^ ^^ ^ ^^ ^^^^^^ ^^^^^^ ^^^  meta.function.js
//^^^^^^^^                            storage.type.function.js
//         ^                          punctuation.definition.parameters.begin.js
//         ^^      ^    ^             meta.brace.round.js
//          ^                         punctuation.definition.parameters.end.js
//            ^                    ^  meta.brace.curly.js
//              ^^                    keyword.control.conditional.js
//                  ^^^^              constant.language.boolean.true.js
//                        ^^^^^^      keyword.control.flow.js
//                               ^    constant.numeric.js
//                                ^   punctuation.terminator.statement.js
];
// <- meta.brace.square.js
 // <- punctuation.terminator.statement.js

// ISSUE #257
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js
let obj = [
// <- storage.type.js
 // <- storage.type.js
//^          storage.type.js
//  ^^^      variable.other.readwrite.js
//      ^    keyword.operator.assignment.js
//        ^  meta.brace.square.js
  {
//^  meta.brace.curly.litobj.js
    [
//  ^  meta.brace.square.js
      {
//    ^  meta.brace.curly.litobj.js
        async bar() {}
//      ^^^^^ ^^^^^ ^^  meta.function.method.js
//      ^^^^^           storage.type.js
//            ^^^       entity.name.function.method.js
//               ^      punctuation.definition.parameters.begin.js
//               ^^     meta.brace.round.js
//                ^     punctuation.definition.parameters.end.js
//                  ^^  meta.brace.curly.js
      }
//    ^  meta.brace.curly.litobj.js
    ]
//  ^  meta.brace.square.js
  }
//^  meta.brace.curly.litobj.js
]
// <- meta.brace.square.js

// ISSUE #256
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js
let obj = {
// <- storage.type.js
 // <- storage.type.js
//^          storage.type.js
//  ^^^      variable.other.readwrite.js
//      ^    keyword.operator.assignment.js
//        ^  meta.brace.curly.litobj.js
  nested: {
//^^^^^^     constant.other.object.key.js
//^^^^^^     string.unquoted.js
//      ^    punctuation.separator.key-value.js
//        ^  meta.brace.curly.litobj.js
    async bar() {
//  ^^^^^ ^^^^^ ^  meta.function.method.js
//  ^^^^^          storage.type.js
//        ^^^      entity.name.function.method.js
//           ^     punctuation.definition.parameters.begin.js
//           ^^    meta.brace.round.js
//            ^    punctuation.definition.parameters.end.js
//              ^  meta.brace.curly.js
      await 1;
//    ^^^^^ ^^  meta.function.method.js
//    ^^^^^     keyword.control.flow.js
//          ^   constant.numeric.js
//           ^  punctuation.terminator.statement.js
    }
//  ^  meta.function.method.js
//  ^  meta.brace.curly.js
  }
//^  meta.brace.curly.litobj.js
}
// <- meta.brace.curly.litobj.js

// ISSUE #255
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js
let a=1
// <- storage.type.js
 // <- storage.type.js
//^      storage.type.js
//  ^    variable.other.readwrite.js
//   ^   keyword.operator.assignment.js
//    ^  constant.numeric.js
 / 2
 // <- keyword.operator.arithmetic.js
// ^  constant.numeric.js

// ISSUE #234
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

 // Comment one a new line with some prefixed white space
 // <- comment.line.double-slash.js punctuation.definition.comment.js
//^ ^^^^^^^ ^^^ ^ ^^^ ^^^^ ^^^^ ^^^^ ^^^^^^^^ ^^^^^ ^^^^^  comment.line.double-slash.js
//^                                                        punctuation.definition.comment.js

// ISSUE #229
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

ACONSTNAME.method();ACONSTNAME.method(arg)
// <- meta.method-call.without-arguments.js variable.other.constant.js
 // <- meta.method-call.without-arguments.js variable.other.constant.js
//^^^^^^^^^^^^^^^^^                         meta.method-call.without-arguments.js
//^^^^^^^^          ^^^^^^^^^^              variable.other.constant.js
//        ^                   ^             keyword.operator.accessor.js
//         ^^^^^^              ^^^^^^       entity.name.function.js
//               ^^                  ^   ^  meta.brace.round.js
//                 ^                        punctuation.terminator.statement.js
//                  ^^^^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//                                    ^^^   variable.other.readwrite.js


// ISSUE #184
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

meth({
// <- meta.function-call.with-arguments.js entity.name.function.js
 // <- meta.function-call.with-arguments.js entity.name.function.js
//^^^^  meta.function-call.with-arguments.js
//^^    entity.name.function.js
//  ^   meta.brace.round.js
//   ^  meta.brace.curly.litobj.js
  'first-prop'({arg1, arg2}) {
//^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^  meta.function-call.with-arguments.js
//^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^  meta.function.method.js
//^^^^^^^^^^^^                  entity.name.function.method.js
//            ^                 punctuation.definition.parameters.begin.js
//            ^            ^    meta.brace.round.js
//             ^^^^^^ ^^^^^     meta.function.parameters.js
//             ^          ^     meta.brace.curly.litobj.js
//              ^^^^  ^^^^      variable.other.readwrite.shorthandpropertyname.js
//                  ^           meta.delimiter.comma.js
//                         ^    punctuation.definition.parameters.end.js
//                           ^  meta.brace.curly.js
  },
//^^  meta.function-call.with-arguments.js
//^   meta.function.method.js
//^   meta.brace.curly.js
// ^  meta.delimiter.comma.js
  'second-prop'({arg1, arg2}) {
//^^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^  meta.function-call.with-arguments.js
//^^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^  meta.function.method.js
//^^^^^^^^^^^^^                  entity.name.function.method.js
//             ^                 punctuation.definition.parameters.begin.js
//             ^            ^    meta.brace.round.js
//              ^^^^^^ ^^^^^     meta.function.parameters.js
//              ^          ^     meta.brace.curly.litobj.js
//               ^^^^  ^^^^      variable.other.readwrite.shorthandpropertyname.js
//                   ^           meta.delimiter.comma.js
//                          ^    punctuation.definition.parameters.end.js
//                            ^  meta.brace.curly.js
 }
 // <- meta.function-call.with-arguments.js meta.function.method.js meta.brace.curly.js
})
// <- meta.function-call.with-arguments.js meta.brace.curly.litobj.js
 // <- meta.function-call.with-arguments.js meta.brace.round.js

// ISSUE #181
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

const withStore  = store => Component => props =>
// <- storage.type.js
 // <- storage.type.js
//^^^                                              storage.type.js
//    ^^^^^^^^^  ^ ^^^^^ ^^ ^^^^^^^^^ ^^ ^^^^^ ^^  meta.function.arrow.js
//    ^^^^^^^^^                                    entity.name.function.js
//               ^                                 keyword.operator.assignment.js
//                 ^^^^^    ^^^^^^^^^    ^^^^^     variable.other.readwrite.js
//                       ^^           ^^       ^^  storage.type.function.arrow.js
  <Provider store={store}></Provider>
//^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^                      ^^^        ^  punctuation.definition.tag.jsx
// ^^^^^^^^                            entity.name.tag.open.jsx
// ^^^^^^^^                            support.class.component.open.jsx
//          ^^^^^^^^^^^^^^^^           JSXAttrs
//          ^^^^^                      entity.other.attribute-name.jsx
//               ^                     keyword.operator.assignment.jsx
//                ^^^^^^^              meta.embedded.expression.js
//                ^                    punctuation.section.embedded.begin.jsx
//                 ^^^^^               variable.other.readwrite.js
//                      ^              punctuation.section.embedded.end.jsx
//                       ^             JSXStartTagEnd
//                        ^^           JSXEndTagStart
//                          ^^^^^^^^   entity.name.tag.close.jsx
//                          ^^^^^^^^   support.class.component.close.jsx

// ISSUE #179
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

class A {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^      meta.class.js
//^^^      storage.type.class.js
//    ^    entity.name.class.js
//      ^  punctuation.section.class.begin.js
  // These will be converted to methods
//^^ ^^^^^ ^^^^ ^^ ^^^^^^^^^ ^^ ^^^^^^^  meta.class.body.js
//^^ ^^^^^ ^^^^ ^^ ^^^^^^^^^ ^^ ^^^^^^^  comment.line.double-slash.js
//^^                                     punctuation.definition.comment.js
  if () {}; for () {}; switch () {}
//^^ ^^ ^^^ ^^^ ^^ ^^^ ^^^^^^ ^^ ^^  meta.class.body.js
//^^ ^^ ^^  ^^^ ^^ ^^  ^^^^^^ ^^ ^^  meta.function.method.js
//^^        ^^^        ^^^^^^        entity.name.function.method.js
//   ^          ^             ^      punctuation.definition.parameters.begin.js
//   ^^         ^^            ^^     meta.brace.round.js
//    ^          ^             ^     punctuation.definition.parameters.end.js
//      ^^         ^^            ^^  meta.brace.curly.js
//        ^          ^               punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js


function a(state ) {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^ ^ ^  meta.function.js
//^^^^^^              storage.type.function.js
//       ^            entity.name.function.js
//        ^           punctuation.definition.parameters.begin.js
//        ^      ^    meta.brace.round.js
//         ^^^^^      meta.function.parameters.js
//         ^^^^^      variable.other.readwrite.js
//               ^    punctuation.definition.parameters.end.js
//                 ^  meta.brace.curly.js
    // These will be converted to conditional/loops...
//  ^^ ^^^^^ ^^^^ ^^ ^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^  meta.function.js
//  ^^ ^^^^^ ^^^^ ^^ ^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^  comment.line.double-slash.js
//  ^^                                                  punctuation.definition.comment.js
    if (a) {}; for (a;;) {}; switch (a) {}
//  ^^ ^^^ ^^^ ^^^ ^^^^^ ^^^ ^^^^^^ ^^^ ^^  meta.function.js
//  ^^                                      keyword.control.conditional.js
//     ^ ^         ^   ^            ^ ^     meta.brace.round.js
//      ^           ^                ^      variable.other.readwrite.js
//         ^^            ^^                 meta.brace.curly.js
//           ^       ^^    ^                punctuation.terminator.statement.js
//             ^^^ ^^^^^                    meta.for.js
//             ^^^                          keyword.control.loop.js
//                           ^^^^^^ ^^^ ^^  meta.switch.js
//                           ^^^^^^         keyword.control.switch.js
//                                      ^   meta.brace.curly.switchStart.js
//                                       ^  meta.brace.curly.switchEnd.js
    switch (type) {
//  ^^^^^^ ^^^^^^ ^  meta.function.js
//  ^^^^^^ ^^^^^^ ^  meta.switch.js
//  ^^^^^^           keyword.control.switch.js
//         ^    ^    meta.brace.round.js
//          ^^^^     variable.other.readwrite.js
//                ^  meta.brace.curly.switchStart.js
         case a: {
//       ^^^^ ^^ ^  meta.function.js
//       ^^^^ ^^ ^  meta.switch.js
//       ^^^^       keyword.control.switch.js
//            ^     variable.other.readwrite.js
//             ^    keyword.operator.js
//               ^  meta.brace.curly.js
           for ( let item in payload )
//         ^^^ ^ ^^^ ^^^^ ^^ ^^^^^^^ ^  meta.function.js
//         ^^^ ^ ^^^ ^^^^ ^^ ^^^^^^^ ^  meta.switch.js
//         ^^^ ^ ^^^ ^^^^ ^^ ^^^^^^^ ^  meta.for.js
//         ^^^                          keyword.control.loop.js
//             ^                     ^  meta.brace.round.js
//               ^^^                    storage.type.js
//                   ^^^^    ^^^^^^^    variable.other.readwrite.js
//                        ^^            keyword.operator.js
                state.items = setItem( state.items, resolveRelations({ ...item }) )
//              ^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^ ^  meta.function.js
//              ^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^ ^  meta.switch.js
//              ^^^^^                  ^^^^^                                         variable.other.object.js
//                   ^                      ^                                        keyword.operator.accessor.js
//                    ^^^^^                  ^^^^^                        ^^^^       meta.property.object.js
//                    ^^^^^                  ^^^^^                        ^^^^       variable.other.property.js
//                          ^                                                        keyword.operator.assignment.js
//                            ^^^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^ ^  meta.function-call.with-arguments.js
//                            ^^^^^^^               ^^^^^^^^^^^^^^^^                 entity.name.function.js
//                                   ^                              ^           ^ ^  meta.brace.round.js
//                                                ^                                  meta.delimiter.comma.js
//                                                                   ^         ^     meta.brace.curly.litobj.js
//                                                                     ^^^           keyword.operator.spread.js
            return state
//          ^^^^^^ ^^^^^  meta.function.js
//          ^^^^^^ ^^^^^  meta.switch.js
//          ^^^^^^        keyword.control.flow.js
//                 ^^^^^  variable.other.readwrite.js
        }
//      ^  meta.function.js
//      ^  meta.switch.js
//      ^  meta.brace.curly.js
    }
//  ^  meta.function.js
//  ^  meta.switch.js
//  ^  meta.brace.curly.switchEnd.js
}
// <- meta.function.js meta.brace.curly.js

// ISSUE #178
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

class A {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^      meta.class.js
//^^^      storage.type.class.js
//    ^    entity.name.class.js
//      ^  punctuation.section.class.begin.js
  static a: number | string = 1
//^^^^^^ ^^ ^^^^^^ ^ ^^^^^^ ^ ^  meta.class.body.js
//^^^^^^                         storage.modifier.js
//       ^                       variable.other.readwrite.js
//        ^                      punctuation.type.flowtype
//          ^^^^^^   ^^^^^^      support.type.builtin.primitive.flowtype
//                 ^             kewyword.operator.union.flowtype
//                          ^    keyword.operator.assignment.js
//                            ^  constant.numeric.js
  if (a) {} // believe it or not this becomes a method
//^^ ^^^ ^^ ^^ ^^^^^^^ ^^ ^^ ^^^ ^^^^ ^^^^^^^ ^ ^^^^^^  meta.class.body.js
//^^ ^^^ ^^                                             meta.function.method.js
//^^                                                    entity.name.function.method.js
//   ^                                                  punctuation.definition.parameters.begin.js
//   ^ ^                                                meta.brace.round.js
//    ^                                                 meta.function.parameters.js
//    ^                                                 variable.other.readwrite.js
//     ^                                                punctuation.definition.parameters.end.js
//       ^^                                             meta.brace.curly.js
//          ^^ ^^^^^^^ ^^ ^^ ^^^ ^^^^ ^^^^^^^ ^ ^^^^^^  comment.line.double-slash.js
//          ^^                                          punctuation.definition.comment.js
  method<T>(a: string): string { // This is a method
//^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^ ^ ^^ ^^^^ ^^ ^ ^^^^^^  meta.class.body.js
//^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^ ^ ^^ ^^^^ ^^ ^ ^^^^^^  meta.function.method.js
//^^^^^^                                              entity.name.function.method.js
//      ^ ^                                           punctuation.flowtype
//       ^                                            support.type.class.flowtype
//         ^                                          punctuation.definition.parameters.begin.js
//         ^         ^                                meta.brace.round.js
//          ^^ ^^^^^^                                 meta.function.parameters.js
//          ^                                         variable.other.readwrite.js
//           ^        ^                               punctuation.type.flowtype
//             ^^^^^^   ^^^^^^                        support.type.builtin.primitive.flowtype
//                   ^                                punctuation.definition.parameters.end.js
//                             ^                      meta.brace.curly.js
//                               ^^ ^^^^ ^^ ^ ^^^^^^  comment.line.double-slash.js
//                               ^^                   punctuation.definition.comment.js
    if (a) {} // and this is a conditional keyword
//  ^^ ^^^ ^^ ^^ ^^^ ^^^^ ^^ ^ ^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^ ^^^ ^^ ^^ ^^^ ^^^^ ^^ ^ ^^^^^^^^^^^ ^^^^^^^  meta.function.method.js
//  ^^                                              keyword.control.conditional.js
//     ^ ^                                          meta.brace.round.js
//      ^                                           variable.other.readwrite.js
//         ^^                                       meta.brace.curly.js
//            ^^ ^^^ ^^^^ ^^ ^ ^^^^^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//            ^^                                    punctuation.definition.comment.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

// ISSUE #174
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^  comment.line.double-slash.js

<button onClick={disabled ? false : function () {}}>Click me!</button>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^^^ ^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//                                                 ^         ^^      ^  punctuation.definition.tag.jsx
//^^^^^                                                                 entity.name.tag.open.jsx
//      ^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^         JSXAttrs
//      ^^^^^^^                                                         entity.other.attribute-name.jsx
//             ^                                                        keyword.operator.assignment.jsx
//              ^^^^^^^^^ ^ ^^^^^ ^ ^^^^^^^^ ^^ ^^^                     meta.embedded.expression.js
//              ^                                                       punctuation.section.embedded.begin.jsx
//               ^^^^^^^^                                               variable.other.readwrite.js
//                        ^       ^                                     keyword.operator.ternary.js
//                          ^^^^^                                       constant.language.boolean.false.js
//                                  ^^^^^^^^ ^^ ^^                      meta.function.js
//                                  ^^^^^^^^                            storage.type.function.js
//                                           ^                          punctuation.definition.parameters.begin.js
//                                           ^^                         meta.brace.round.js
//                                            ^                         punctuation.definition.parameters.end.js
//                                              ^^                      meta.brace.curly.js
//                                                ^                     punctuation.section.embedded.end.jsx
//                                                 ^                    JSXStartTagEnd
//                                                  ^^^^^ ^^^           JSXNested
//                                                           ^^         JSXEndTagStart
//                                                             ^^^^^^   entity.name.tag.close.jsx
<button onClick={disabled ? () => null : () => onClick(val)}>Click me!</button>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^^^ ^^^^^^^^^^^^^^^^^ ^ ^^ ^^ ^^^^ ^ ^^ ^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//                                                          ^         ^^      ^  punctuation.definition.tag.jsx
//^^^^^                                                                          entity.name.tag.open.jsx
//      ^^^^^^^^^^^^^^^^^ ^ ^^ ^^ ^^^^ ^ ^^ ^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^         JSXAttrs
//      ^^^^^^^                                                                  entity.other.attribute-name.jsx
//             ^                                                                 keyword.operator.assignment.jsx
//              ^^^^^^^^^ ^ ^^ ^^ ^^^^ ^ ^^ ^^ ^^^^^^^^^^^^^                     meta.embedded.expression.js
//              ^                                                                punctuation.section.embedded.begin.jsx
//               ^^^^^^^^                              ^^^                       variable.other.readwrite.js
//                        ^            ^                                         keyword.operator.ternary.js
//                          ^^ ^^        ^^ ^^                                   meta.function.arrow.js
//                          ^            ^                                       punctuation.definition.parameters.begin.js
//                          ^^           ^^           ^   ^                      meta.brace.round.js
//                           ^            ^                                      punctuation.definition.parameters.end.js
//                             ^^           ^^                                   storage.type.function.arrow.js
//                                ^^^^                                           constant.language.null.js
//                                             ^^^^^^^^^^^^                      meta.function-call.with-arguments.js
//                                             ^^^^^^^                           entity.name.function.js
//                                                         ^                     punctuation.section.embedded.end.jsx
//                                                          ^                    JSXStartTagEnd
//                                                           ^^^^^ ^^^           JSXNested
//                                                                    ^^         JSXEndTagStart
//                                                                      ^^^^^^   entity.name.tag.close.jsx

// ISSUE: #171
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^^  comment.line.double-slash.js

function getObject() {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^^^ ^  meta.function.js
//^^^^^^                storage.type.function.js
//       ^^^^^^^^^      entity.name.function.js
//                ^     punctuation.definition.parameters.begin.js
//                ^^    meta.brace.round.js
//                 ^    punctuation.definition.parameters.end.js
//                   ^  meta.brace.curly.js
  return {
//^^^^^^ ^  meta.function.js
//^^^^^^    keyword.control.flow.js
//       ^  meta.brace.curly.litobj.js
    async doStuff() {},
//  ^^^^^ ^^^^^^^^^ ^^^  meta.function.js
//  ^^^^^ ^^^^^^^^^ ^^   meta.function.method.js
//  ^^^^^                storage.type.js
//        ^^^^^^^        entity.name.function.method.js
//               ^       punctuation.definition.parameters.begin.js
//               ^^      meta.brace.round.js
//                ^      punctuation.definition.parameters.end.js
//                  ^^   meta.brace.curly.js
//                    ^  meta.delimiter.comma.js
    doDifferent: async function() {}
//  ^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^  meta.function.js
//  ^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^  meta.function.json.js
//  ^^^^^^^^^^^                       entity.name.function.js
//             ^                      punctuation.separator.key-value.js
//               ^^^^^                storage.type.js
//                     ^^^^^^^^       storage.type.function.js
//                             ^      punctuation.definition.parameters.begin.js
//                             ^^     meta.brace.round.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.brace.curly.js
    doElse: async () => {}
//  ^^^^^^^ ^^^^^ ^^ ^^ ^^  meta.function.js
//  ^^^^^^^ ^^^^^ ^^ ^^ ^^  meta.function.json.arrow.js
//  ^^^^^^                  entity.name.function.js
//        ^                 punctuation.separator.key-value.js
//          ^^^^^           storage.type.js
//                ^         punctuation.definition.parameters.begin.js
//                ^^        meta.brace.round.js
//                 ^        punctuation.definition.parameters.end.js
//                   ^^     storage.type.function.arrow.js
//                      ^^  meta.brace.curly.js
  }
//^  meta.function.js
//^  meta.brace.curly.litobj.js
}
// <- meta.function.js meta.brace.curly.js

// ISSUE: #170
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^^  comment.line.double-slash.js

foo({ //
// <- meta.function-call.with-arguments.js entity.name.function.js
 // <- meta.function-call.with-arguments.js entity.name.function.js
//^^^ ^^  meta.function-call.with-arguments.js
//^       entity.name.function.js
// ^      meta.brace.round.js
//  ^     meta.brace.curly.litobj.js
//    ^^  comment.line.double-slash.js
//    ^^  punctuation.definition.comment.js
  bar() {} //
//^^^^^ ^^ ^^  meta.function-call.with-arguments.js
//^^^^^ ^^     meta.function.method.js
//^^^          entity.name.function.method.js
//   ^         punctuation.definition.parameters.begin.js
//   ^^        meta.brace.round.js
//    ^        punctuation.definition.parameters.end.js
//      ^^     meta.brace.curly.js
//         ^^  comment.line.double-slash.js
//         ^^  punctuation.definition.comment.js
})
// <- meta.function-call.with-arguments.js meta.brace.curly.litobj.js
 // <- meta.function-call.with-arguments.js meta.brace.round.js

// ISSUE: 169
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^  comment.line.double-slash.js

let a: number = td.function()
// <- storage.type.js
 // <- storage.type.js
//^                            storage.type.js
//  ^                          variable.other.readwrite.js
//   ^                         punctuation.type.flowtype
//     ^^^^^^                  support.type.builtin.primitive.flowtype
//            ^                keyword.operator.assignment.js
//              ^^             variable.other.object.js
//                ^            keyword.operator.accessor.js
//                 ^^^^^^^^^^  meta.method-call.without-arguments.js
//                 ^^^^^^^^    entity.name.function.js
//                         ^^  meta.brace.round.js
const double = td.function()
// <- storage.type.js
 // <- storage.type.js
//^^^                         storage.type.js
//    ^^^^^^                  variable.other.readwrite.js
//           ^                keyword.operator.assignment.js
//             ^^             variable.other.object.js
//               ^            keyword.operator.accessor.js
//                ^^^^^^^^^^  meta.method-call.without-arguments.js
//                ^^^^^^^^    entity.name.function.js
//                        ^^  meta.brace.round.js
let a = {
// <- storage.type.js
 // <- storage.type.js
//^        storage.type.js
//  ^      variable.other.readwrite.js
//    ^    keyword.operator.assignment.js
//      ^  meta.brace.curly.litobj.js
  a: td.function()
//^                 constant.other.object.key.js
//^                 string.unquoted.js
// ^                punctuation.separator.key-value.js
//   ^^             variable.other.object.js
//     ^            keyword.operator.accessor.js
//      ^^^^^^^^^^  meta.method-call.without-arguments.js
//      ^^^^^^^^    entity.name.function.js
//              ^^  meta.brace.round.js
  b: td.function()
//^                 constant.other.object.key.js
//^                 string.unquoted.js
// ^                punctuation.separator.key-value.js
//   ^^             variable.other.object.js
//     ^            keyword.operator.accessor.js
//      ^^^^^^^^^^  meta.method-call.without-arguments.js
//      ^^^^^^^^    entity.name.function.js
//              ^^  meta.brace.round.js
}
// <- meta.brace.curly.litobj.js
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
//                 ^^^^^^^^^^   meta.method-call.without-arguments.js
//                 ^^^^^^^^     entity.name.function.js
//                         ^^   meta.brace.round.js
//                           ^  punctuation.terminator.statement.js
const double = td.function();
// <- storage.type.js
 // <- storage.type.js
//^^^                          storage.type.js
//    ^^^^^^                   variable.other.readwrite.js
//           ^                 keyword.operator.assignment.js
//             ^^              variable.other.object.js
//               ^             keyword.operator.accessor.js
//                ^^^^^^^^^^   meta.method-call.without-arguments.js
//                ^^^^^^^^     entity.name.function.js
//                        ^^   meta.brace.round.js
//                          ^  punctuation.terminator.statement.js
let a = {
// <- storage.type.js
 // <- storage.type.js
//^        storage.type.js
//  ^      variable.other.readwrite.js
//    ^    keyword.operator.assignment.js
//      ^  meta.brace.curly.litobj.js
  a: td.function();
//^                  constant.other.object.key.js
//^                  string.unquoted.js
// ^                 punctuation.separator.key-value.js
//   ^^              variable.other.object.js
//     ^             keyword.operator.accessor.js
//      ^^^^^^^^^^   meta.method-call.without-arguments.js
//      ^^^^^^^^     entity.name.function.js
//              ^^   meta.brace.round.js
//                ^  punctuation.terminator.statement.js
  b: td.function();
//^                  constant.other.object.key.js
//^                  string.unquoted.js
// ^                 punctuation.separator.key-value.js
//   ^^              variable.other.object.js
//     ^             keyword.operator.accessor.js
//      ^^^^^^^^^^   meta.method-call.without-arguments.js
//      ^^^^^^^^     entity.name.function.js
//              ^^   meta.brace.round.js
//                ^  punctuation.terminator.statement.js
}// <- meta.brace.curly.js
// <- meta.brace.curly.litobj.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
//^ ^^ ^^^^^^^^^^^^^^^^^^^  comment.line.double-slash.js
//^                         punctuation.definition.comment.js

// ISSUE: 168
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^  comment.line.double-slash.js

let obj = { a: () => async () => 1 }
// <- storage.type.js
 // <- storage.type.js
//^                  ^^^^^            storage.type.js
//  ^^^                               variable.other.readwrite.js
//      ^                             keyword.operator.assignment.js
//        ^                        ^  meta.brace.curly.litobj.js
//          ^^ ^^ ^^                  meta.function.json.arrow.js
//          ^                         entity.name.function.js
//           ^                        punctuation.separator.key-value.js
//             ^           ^          punctuation.definition.parameters.begin.js
//             ^^          ^^         meta.brace.round.js
//              ^           ^         punctuation.definition.parameters.end.js
//                ^^          ^^      storage.type.function.arrow.js
//                   ^^^^^ ^^ ^^      meta.function.arrow.js
//                               ^    constant.numeric.js

// ISSUE: 166
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^  comment.line.double-slash.js

export default {
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^    keyword.control.module.js
//             ^  meta.brace.curly.litobj.js
  async get() { return 1 },
//^^^^^ ^^^^^ ^ ^^^^^^ ^ ^   meta.function.method.js
//^^^^^                      storage.type.js
//      ^^^                  entity.name.function.method.js
//         ^                 punctuation.definition.parameters.begin.js
//         ^^                meta.brace.round.js
//          ^                punctuation.definition.parameters.end.js
//            ^          ^   meta.brace.curly.js
//              ^^^^^^       keyword.control.flow.js
//                     ^     constant.numeric.js
//                        ^  meta.delimiter.comma.js
  get a() { return this._a },
//^^^ ^^^ ^ ^^^^^^ ^^^^^^^ ^   meta.accessor.js
//^^^                          storage.type.accessor.js
//    ^                        entity.name.function.accessor.js
//     ^                       punctuation.definition.parameters.begin.js
//     ^^                      meta.brace.round.js
//      ^                      punctuation.definition.parameters.end.js
//        ^                ^   meta.brace.curly.js
//          ^^^^^^             keyword.control.flow.js
//                 ^^^^        variable.language.this.js
//                     ^       keyword.operator.accessor.js
//                      ^^     meta.property.object.js
//                      ^^     variable.other.property.js
//                          ^  meta.delimiter.comma.js
  set a(v) { this._a = v },
//^^^ ^^^^ ^ ^^^^^^^ ^ ^ ^   meta.accessor.js
//^^^                        storage.type.accessor.js
//    ^                      entity.name.function.accessor.js
//     ^                     punctuation.definition.parameters.begin.js
//     ^ ^                   meta.brace.round.js
//      ^                    meta.function.parameters.js
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
// <- meta.brace.curly.litobj.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
//^ ^^ ^^^^^^^^^^^^^^^^^^^  comment.line.double-slash.js
//^                         punctuation.definition.comment.js


// >> only:(source.js.jsx)
