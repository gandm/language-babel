// SYNTAX TEST "source.js.jsx"

// exitential forms

Sound?.play = function(arg1, arg2) { }
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^^^^ ^ ^  meta.function.static.js
//^^^                                   entity.name.class.js
//   ^                                  keyword.operator.existential.js
//    ^                                 keyword.operator.accessor.js
//     ^^^^                             entity.name.function.js
//          ^                           keyword.operator.assignment.js
//            ^^^^^^^^                  storage.type.function.js
//                    ^                 punctuation.definition.parameters.begin.js
//                    ^          ^      meta.brace.round.js
//                     ^^^^^ ^^^^       meta.function.parameters.js
//                     ^^^^  ^^^^       variable.other.readwrite.js
//                         ^            meta.delimiter.comma.js
//                               ^      punctuation.definition.parameters.end.js
//                                 ^ ^  meta.brace.curly.js
styled?.div``
// <- entity.name.tag.styledcss.js
 // <- entity.name.tag.styledcss.js
//^^^^  ^^^    entity.name.tag.styledcss.js
//    ^        keyword.operator.existential.js
//     ^       keyword.operator.accessor.js
//         ^   string.quoted.template.styled.start.js
//         ^   punctuation.definition.quasi.begin.js
//          ^  string.quoted.template.styled.end.js
//          ^  punctuation.definition.quasi.end.js
Button?.extend``
// <- variable.other.class.js
 // <- variable.other.class.js
//^^^^            variable.other.class.js
//    ^           keyword.operator.existential.js
//     ^          keyword.operator.accessor.js
//      ^^^^^^    entity.name.tag.styledcss.js
//            ^   string.quoted.template.styled.start.js
//            ^   punctuation.definition.quasi.begin.js
//             ^  string.quoted.template.styled.end.js
//             ^  punctuation.definition.quasi.end.js
Button?.withComponent()``
// <- variable.other.class.js
 // <- variable.other.class.js
//^^^^                     variable.other.class.js
//    ^                    keyword.operator.existential.js
//     ^                   keyword.operator.accessor.js
//      ^^^^^^^^^^^^^      entity.name.function.js
//                   ^^    meta.brace.round.js
//                     ^   string.quoted.template.styled.start.js
//                     ^   punctuation.definition.quasi.begin.js
//                      ^  string.quoted.template.styled.end.js
//                      ^  punctuation.definition.quasi.end.js
styled()?.attrs()``
// <- entity.name.function.js
 // <- entity.name.function.js
//^^^^    ^^^^^      entity.name.function.js
//    ^^       ^^    meta.brace.round.js
//      ^            keyword.operator.existential.js
//       ^           keyword.operator.accessor.js
//               ^   string.quoted.template.styled.start.js
//               ^   punctuation.definition.quasi.begin.js
//                ^  string.quoted.template.styled.end.js
//                ^  punctuation.definition.quasi.end.js
styled?.aaa?.attrs()``
// <- entity.name.tag.styledcss.js
 // <- entity.name.tag.styledcss.js
//^^^^  ^^^             entity.name.tag.styledcss.js
//    ^    ^            keyword.operator.existential.js
//     ^    ^           keyword.operator.accessor.js
//           ^^^^^      entity.name.function.js
//                ^^    meta.brace.round.js
//                  ^   string.quoted.template.styled.start.js
//                  ^   punctuation.definition.quasi.begin.js
//                   ^  string.quoted.template.styled.end.js
//                   ^  punctuation.definition.quasi.end.js
CONST?.method()
// <- meta.method-call.without-arguments.js variable.other.constant.js
 // <- meta.method-call.without-arguments.js variable.other.constant.js
//^^^^^^^^^^^^^  meta.method-call.without-arguments.js
//^^^            variable.other.constant.js
//   ^           keyword.operator.existential.js
//    ^          keyword.operator.accessor.js
//     ^^^^^^    entity.name.function.js
//           ^^  meta.brace.round.js
CONST?.method('')
// <- meta.method-call.with-arguments.js variable.other.constant.js
 // <- meta.method-call.with-arguments.js variable.other.constant.js
//^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//^^^              variable.other.constant.js
//   ^             keyword.operator.existential.js
//    ^            keyword.operator.accessor.js
//     ^^^^^^      entity.name.function.js
//           ^  ^  meta.brace.round.js
//            ^^   string.quoted.single.js
//            ^    punctuation.definition.string.begin.js
//             ^   punctuation.definition.string.end.js
Abc?.aaa()
// <- meta.method-call.without-arguments.js variable.other.class.js
 // <- meta.method-call.without-arguments.js variable.other.class.js
//^^^^^^^^  meta.method-call.without-arguments.js
//^         variable.other.class.js
// ^        keyword.operator.existential.js
//  ^       keyword.operator.accessor.js
//   ^^^    entity.name.function.js
//      ^^  meta.brace.round.js
Abc?.aaa('')
// <- meta.method-call.with-arguments.js variable.other.class.js
 // <- meta.method-call.with-arguments.js variable.other.class.js
//^^^^^^^^^^  meta.method-call.with-arguments.js
//^           variable.other.class.js
// ^          keyword.operator.existential.js
//  ^         keyword.operator.accessor.js
//   ^^^      entity.name.function.js
//      ^  ^  meta.brace.round.js
//       ^^   string.quoted.single.js
//       ^    punctuation.definition.string.begin.js
//        ^   punctuation.definition.string.end.js
Class?.prop = 1
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^^      meta.property.class.js
//^^^            variable.other.class.js
//   ^           keyword.operator.existential.js
//    ^          keyword.operator.accessor.js
//     ^^^^      variable.other.property.static.js
//          ^    keyword.operator.assignment.js
//            ^  constant.numeric.js
a?.aaa
// <- variable.other.readwrite.js
 // <- keyword.operator.existential.js
//^     keyword.operator.accessor.js
// ^^^  meta.property.object.js
// ^^^  variable.other.property.js
Sound?.prototype?.play = (args) => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^^^ ^ ^^^^^^ ^^ ^^  meta.prototype.function.arrow.js
//^^^                                  entity.name.class.js
//   ^          ^                      keyword.operator.existential.js
//    ^          ^                     keyword.operator.accessor.js
//     ^^^^^^^^^                       variable.language.prototype.js
//                ^^^^                 entity.name.function.js
//                     ^               keyword.operator.assignment.js
//                       ^             punctuation.definition.parameters.begin.js
//                       ^    ^        meta.brace.round.js
//                        ^^^^         meta.function.parameters.js
//                        ^^^^         variable.other.readwrite.js
//                            ^        punctuation.definition.parameters.end.js
//                              ^^     storage.type.function.arrow.js
//                                 ^^  meta.brace.curly.js
Sound?.prototype?.play = args => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^^^ ^ ^^^^ ^^     meta.prototype.function.arrow.js
//^^^                                entity.name.class.js
//   ^          ^                    keyword.operator.existential.js
//    ^          ^                   keyword.operator.accessor.js
//     ^^^^^^^^^                     variable.language.prototype.js
//                ^^^^               entity.name.function.js
//                     ^             keyword.operator.assignment.js
//                       ^^^^        variable.other.readwrite.js
//                            ^^     storage.type.function.arrow.js
//                               ^^  meta.brace.curly.js
Sound?.play = (args) => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^^ ^ ^^^^^^ ^^ ^^  meta.function.static.arrow.js
//^^^                       entity.name.class.js
//   ^                      keyword.operator.existential.js
//    ^                     keyword.operator.accessor.js
//     ^^^^                 entity.name.function.js
//          ^               keyword.operator.assignment.js
//            ^             punctuation.definition.parameters.begin.js
//            ^    ^        meta.brace.round.js
//             ^^^^         meta.function.parameters.js
//             ^^^^         variable.other.readwrite.js
//                 ^        punctuation.definition.parameters.end.js
//                   ^^     storage.type.function.arrow.js
//                      ^^  meta.brace.curly.js
Sound?.play = args => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^^ ^ ^^^^ ^^     meta.function.static.arrow.js
//^^^                     entity.name.class.js
//   ^                    keyword.operator.existential.js
//    ^                   keyword.operator.accessor.js
//     ^^^^               entity.name.function.js
//          ^             keyword.operator.assignment.js
//            ^^^^        variable.other.readwrite.js
//                 ^^     storage.type.function.arrow.js
//                    ^^  meta.brace.curly.js
func?.(...args)
// <- meta.function-call.with-arguments.js entity.name.function.js
 // <- meta.function-call.with-arguments.js entity.name.function.js
//^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//^^             entity.name.function.js
//  ^            keyword.operator.existential.js
//   ^           keyword.operator.accessor.js
//    ^       ^  meta.brace.round.js
//     ^^^       keyword.operator.spread.js
//        ^^^^   meta.property.object.js
//        ^^^^   variable.other.property.js

// Class and method decorator productions
@Decorator
// <- keyword.operator.decorator.js
 // <- entity.name.class.decorator.js
//^^^^^^^^  entity.name.class.decorator.js
.decorator_property
// <- keyword.operator.accessor.js
 // <- variable.other.property.decorator.js
//^^^^^^^^^^^^^^^^^  variable.other.property.decorator.js
.decorator-function
// <- keyword.operator.accessor.js
 // <- variable.other.property.decorator.js
//^^^^^^^^           variable.other.property.decorator.js
//        ^          keyword.operator.arithmetic.js
//         ^^^^^^^^  variable.other.readwrite.js
class DecoratedClass {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                   meta.class.js
//^^^                   storage.type.class.js
//    ^^^^^^^^^^^^^^    entity.name.class.js
//                   ^  punctuation.section.class.begin.js
  @observable varToWatch: boolean = true
//^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^ ^ ^^^^  meta.class.body.js
//^                                       keyword.operator.decorator.js
// ^^^^^^^^^^                             variable.other.readwrite.decorator.js
//            ^^^^^^^^^^                  variable.other.readwrite.js
//                      ^                 punctuation.type.flowtype
//                        ^^^^^^^         support.type.builtin.primitive.flowtype
//                                ^       keyword.operator.assignment.js
//                                  ^^^^  constant.language.boolean.true.js
  @SomeClassDecorartorLib.
//^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//^                         keyword.operator.decorator.js
// ^^^^^^^^^^^^^^^^^^^^^^   entity.name.class.decorator.js
//                       ^  keyword.operator.accessor.js
  someproperty
//^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^  variable.other.property.decorator.js
  . someDecorator("Some String",andAVar)
//^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^  meta.class.body.js
//^                                       keyword.operator.accessor.js
//  ^^^^^^^^^^^^^                         variable.other.property.decorator.js
//               ^                     ^  meta.brace.round.js
//                ^^^^^ ^^^^^^^           string.quoted.double.js
//                ^                       punctuation.definition.string.begin.js
//                            ^           punctuation.definition.string.end.js
//                             ^          meta.delimiter.comma.js
//                              ^^^^^^^   variable.other.readwrite.js
  aMethod() {
//^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^ ^  meta.function.method.js
//^^^^^^^      entity.name.function.method.js
//       ^     punctuation.definition.parameters.begin.js
//       ^^    meta.brace.round.js
//        ^    punctuation.definition.parameters.end.js
//          ^  meta.brace.curly.js

  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

// Support flow typing in comments
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^ ^^^^ ^^^^^^ ^^ ^^^^^^^^  comment.line.double-slash.js

function foo(bar /*:: ?*/) {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^ ^^^^ ^^^^ ^^  meta.function.js
//^^^^^^                       storage.type.function.js
//       ^^^                   entity.name.function.js
//          ^                  punctuation.definition.parameters.begin.js
//          ^            ^     meta.brace.round.js
//           ^^^ ^^^^ ^^^      meta.function.parameters.js
//           ^^^               variable.other.readwrite.js
//               ^^    ^^      punctuation.definition.comment.js
//                 ^^          punctuation.type.flowtype
//                    ^        keyword.operator.optional.parameter.flowtype
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.brace.curly.js
function foo2(bar /*:: ?: string*/) {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^ ^^^^ ^^ ^^^^^^^^^ ^^  meta.function.js
//^^^^^^                                storage.type.function.js
//       ^^^^                           entity.name.function.js
//           ^                          punctuation.definition.parameters.begin.js
//           ^                    ^     meta.brace.round.js
//            ^^^ ^^^^ ^^ ^^^^^^^^      meta.function.parameters.js
//            ^^^                       variable.other.readwrite.js
//                ^^            ^^      punctuation.definition.comment.js
//                  ^^  ^               punctuation.type.flowtype
//                     ^                keyword.operator.optional.parameter.flowtype
//                      ^ ^^^^^^        support.type.builtin.primitive.flowtype
//                                ^     punctuation.definition.parameters.end.js
//                                  ^^  meta.brace.curly.js
function foo(x /*: number*/) /*: string*/ {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^ ^^^ ^^^^^^^^^ ^^^ ^^^^^^^^ ^^  meta.function.js
//^^^^^^                                      storage.type.function.js
//       ^^^                                  entity.name.function.js
//          ^                                 punctuation.definition.parameters.begin.js
//          ^              ^                  meta.brace.round.js
//           ^ ^^^ ^^^^^^^^                   meta.function.parameters.js
//           ^                                variable.other.readwrite.js
//             ^^        ^^  ^^        ^^     punctuation.definition.comment.js
//               ^             ^              punctuation.type.flowtype
//                 ^^^^^^        ^^^^^^       support.type.builtin.primitive.flowtype
//                         ^                  punctuation.definition.parameters.end.js
//                                        ^^  meta.brace.curly.js
/*:: type B = {
// <- punctuation.definition.comment.js
 // <- punctuation.definition.comment.js
//^^             punctuation.type.flowtype
//   ^^^^        keyword.other.typedef.flowtype
//        ^      support.type.class.flowtype
//            ^  meta.brace.curly.js
  name: string;
//^^^^           variable.other.readwrite.js
//    ^          punctuation.type.flowtype
//      ^^^^^^   support.type.builtin.primitive.flowtype
};*/
// <- meta.brace.curly.js
//^^  punctuation.definition.comment.js
/*:: export type GraphQLFormattedError = number;*/
// <- punctuation.definition.comment.js
 // <- punctuation.definition.comment.js
//                                              ^^  punctuation.definition.comment.js
//^^                                                punctuation.type.flowtype
//   ^^^^^^                                         keyword.control.module.js
//          ^^^^                                    keyword.other.typedef.flowtype
//               ^^^^^^^^^^^^^^^^^^^^^              support.type.class.flowtype
//                                       ^^^^^^     support.type.builtin.primitive.flowtype
/*:: import type A, { B, C } from './types';*/
// <- punctuation.definition.comment.js
 // <- punctuation.definition.comment.js
//                                          ^^  punctuation.definition.comment.js
//^^                                            punctuation.type.flowtype
//   ^^^^^^                  ^^^^               keyword.control.module.js
//          ^^^^                                keyword.other.typedef.flowtype
//               ^    ^  ^                      variable.other.constant.js
//                ^    ^                        meta.delimiter.comma.js
//                  ^      ^                    meta.brace.curly.js
//                                ^             punctuation.definition.string.begin.js
//                                 ^^^^^^^      string.quoted.module.js
//                                        ^     punctuation.definition.string.end.js
/*:: import typeof D, { E, F } from './types';*/
// <- punctuation.definition.comment.js
 // <- punctuation.definition.comment.js
//                                            ^^  punctuation.definition.comment.js
//^^                                              punctuation.type.flowtype
//   ^^^^^^                    ^^^^               keyword.control.module.js
//          ^^^^^^                                keyword.other.typedef.flowtype
//                 ^    ^  ^                      variable.other.constant.js
//                  ^    ^                        meta.delimiter.comma.js
//                    ^      ^                    meta.brace.curly.js
//                                  ^             punctuation.definition.string.begin.js
//                                   ^^^^^^^      string.quoted.module.js
//                                          ^     punctuation.definition.string.end.js

// Calls language-mustache & language-html from a object template: backtick
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^ ^^^^ ^ ^^^^^^ ^^^^^^^^^ ^^^^^^^^  comment.line.double-slash.js

a.component('randomComponent', {
// <- variable.other.object.js
 // <- keyword.operator.accessor.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^  meta.method-call.with-arguments.js
//^^^^^^^^^                       entity.name.function.js
//         ^                      meta.brace.round.js
//          ^^^^^^^^^^^^^^^^^     string.quoted.single.js
//          ^                     punctuation.definition.string.begin.js
//                          ^     punctuation.definition.string.end.js
//                           ^    meta.delimiter.comma.js
//                             ^  meta.brace.curly.litobj.js
  template: `<div class="test">test</div>`,
//^^^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//^^^^^^^^                                   constant.other.object.key.js
//^^^^^^^^                                   string.unquoted.js
//        ^                                  punctuation.separator.key-value.js
//          ^                                punctuation.definition.quasi.begin.js
//           ^^^^ ^^^^^^^^^^^^^    ^^^^^^    meta.tag.block.any.html
//           ^                     ^^        punctuation.definition.tag.begin.html
//            ^^^                    ^^^     entity.name.tag.block.any.html
//                ^^^^^                      entity.other.attribute-name.html
//                      ^^^^^^               string.quoted.double.html
//                      ^                    punctuation.definition.string.begin.html
//                           ^               punctuation.definition.string.end.html
//                            ^         ^    punctuation.definition.tag.end.html
//                                       ^   punctuation.definition.quasi.end.js
//                                        ^  meta.delimiter.comma.js
})
// <- meta.method-call.with-arguments.js meta.brace.curly.litobj.js
 // <- meta.method-call.with-arguments.js meta.brace.round.js

// class fields, statics and methods
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^ ^^^^^^^ ^^^^^^^ ^^^ ^^^^^^^  comment.line.double-slash.js
class SomeClass {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^              meta.class.js
//^^^              storage.type.class.js
//    ^^^^^^^^^    entity.name.class.js
//              ^  punctuation.section.class.begin.js
  myProperty: string = 'some value'
//^^^^^^^^^^^ ^^^^^^ ^ ^^^^^ ^^^^^^  meta.class.body.js
//^^^^^^^^^^                         variable.other.readwrite.js
//          ^                        punctuation.type.flowtype
//            ^^^^^^                 support.type.builtin.primitive.flowtype
//                   ^               keyword.operator.assignment.js
//                     ^^^^^ ^^^^^^  string.quoted.single.js
//                     ^             punctuation.definition.string.begin.js
//                                ^  punctuation.definition.string.end.js
  xxx: number = 1
//^^^^ ^^^^^^ ^ ^  meta.class.body.js
//^^^              variable.other.readwrite.js
//   ^             punctuation.type.flowtype
//     ^^^^^^      support.type.builtin.primitive.flowtype
//            ^    keyword.operator.assignment.js
//              ^  constant.numeric.js
  declare = "aaaa"
//^^^^^^^ ^ ^^^^^^  meta.class.body.js
//^^^^^^^           variable.other.readwrite.js
//        ^         keyword.operator.assignment.js
//          ^^^^^^  string.quoted.double.js
//          ^       punctuation.definition.string.begin.js
//               ^  punctuation.definition.string.end.js
  static anamedVar
//^^^^^^ ^^^^^^^^^  meta.class.body.js
//^^^^^^            storage.modifier.js
//       ^^^^^^^^^  variable.other.readwrite.js
  anotherVar
//^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^  variable.other.readwrite.js
  [a]() {}
//^^^^^ ^^  meta.class.body.js
//^^^^^ ^^  meta.function.method.js
//^ ^       meta.brace.square.js
// ^        variable.other.readwrite.js
//   ^      punctuation.definition.parameters.begin.js
//   ^^     meta.brace.round.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.brace.curly.js
  'aaa'() {}
//^^^^^^^ ^^  meta.class.body.js
//^^^^^^^ ^^  meta.function.method.js
//^^^^^       entity.name.function.method.js
//     ^      punctuation.definition.parameters.begin.js
//     ^^     meta.brace.round.js
//      ^     punctuation.definition.parameters.end.js
//        ^^  meta.brace.curly.js
  type: (a)=>string = function() { return ('any' + ' ' + 'expression'); }
//^^^^^ ^^^^^^^^^^^ ^ ^^^^^^^^^^ ^ ^^^^^^ ^^^^^^ ^ ^ ^ ^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^                ^^^^^^^^                                             storage.type.function.js
//    ^                                                                    punctuation.type.flowtype
//      ^                     ^                                            punctuation.definition.parameters.begin.js
//      ^ ^                   ^^          ^                          ^     meta.brace.round.js
//       ^                                                                 meta.function.parameters.js
//       ^                                                                 variable.other.readwrite.js
//        ^                    ^                                           punctuation.definition.parameters.end.js
//         ^^                                                              storage.type.function.arrow.js
//           ^^^^^^                                                        support.type.builtin.primitive.flowtype
//                  ^                                                      keyword.operator.assignment.js
//                    ^^^^^^^^^^ ^ ^^^^^^ ^^^^^^ ^ ^ ^ ^ ^^^^^^^^^^^^^^ ^  meta.function.js
//                               ^                                      ^  meta.brace.curly.js
//                                 ^^^^^^                                  keyword.control.flow.js
//                                         ^^^^^   ^ ^   ^^^^^^^^^^^^      string.quoted.single.js
//                                         ^       ^     ^                 punctuation.definition.string.begin.js
//                                             ^     ^              ^      punctuation.definition.string.end.js
//                                               ^     ^                   keyword.operator.arithmetic.js
//                                                                    ^    punctuation.terminator.statement.js
}
// <- punctuation.section.class.end.js

// labels with function calls
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^^ ^^^^^^^^ ^^^^^  comment.line.double-slash.js
const foo = {
// <- storage.type.js
 // <- storage.type.js
//^^^          storage.type.js
//    ^^^      variable.other.readwrite.js
//        ^    keyword.operator.assignment.js
//          ^  meta.brace.curly.litobj.js
  bar: baz()
//^^^         constant.other.object.key.js
//^^^         string.unquoted.js
//   ^        punctuation.separator.key-value.js
//     ^^^^^  meta.function-call.without-arguments.js
//     ^^^    entity.name.function.js
//        ^^  meta.brace.round.js
};
// <- meta.brace.curly.litobj.js
 // <- punctuation.terminator.statement.js

// $JSXIntrinsics is special and magic.
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^^^^^^^ ^^ ^^^^^^^ ^^^ ^^^^^^  comment.line.double-slash.js
// This declares the types a `span`
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^ ^^^^^^^^ ^^^ ^^^^^ ^ ^^^^^^  comment.line.double-slash.js
type $JSXIntrinsics = {
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                     keyword.other.typedef.flowtype
//   ^^^^^^^^^^^^^^      support.type.class.flowtype
//                    ^  meta.brace.curly.js
  span: JSXHelper<{id: string, class: string}> };
//^^^^             ^^          ^^^^^               variable.other.readwrite.js
//    ^              ^              ^              punctuation.type.flowtype
//      ^^^^^^^^^                                  support.type.class.flowtype
//               ^                           ^     punctuation.flowtype
//                ^                                meta.brace.curly.open.flowtype
//                     ^^^^^^         ^^^^^^       support.type.builtin.primitive.flowtype
//                           ^                     meta.delimiter.comma.js
//                                          ^      meta.brace.curly.close.flowtype
//                                             ^   meta.brace.curly.js
//                                              ^  punctuation.terminator.statement.js


  // Some JSX
//^^ ^^^^ ^^^  comment.line.double-slash.js
//^^           punctuation.definition.comment.js

  <div>
//^^^^^  meta.tag.jsx
//^   ^  punctuation.definition.tag.jsx
// ^^^   entity.name.tag.open.jsx
//    ^  JSXAttrs
//    ^  JSXStartTagEnd
    <div />
//  ^^^^ ^^  meta.tag.jsx
//  ^^^^ ^^  JSXAttrs
//  ^^^^ ^^  JSXNested
//  ^    ^^  punctuation.definition.tag.jsx
//   ^^^     entity.name.tag.open.jsx
    <h1></h1>
//  ^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^  JSXNested
//  ^  ^^^  ^  punctuation.definition.tag.jsx
//   ^^        entity.name.tag.open.jsx
//     ^       JSXStartTagEnd
//      ^^     JSXEndTagStart
//        ^^   entity.name.tag.close.jsx
    <Component></Component>
//  ^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//  ^         ^^^         ^  punctuation.definition.tag.jsx
//   ^^^^^^^^^               entity.name.tag.open.jsx
//   ^^^^^^^^^               support.class.component.open.jsx
//            ^              JSXStartTagEnd
//             ^^            JSXEndTagStart
//               ^^^^^^^^^   entity.name.tag.close.jsx
//               ^^^^^^^^^   support.class.component.close.jsx
    <this.component></this.component>
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//  ^              ^^^              ^  punctuation.definition.tag.jsx
//   ^^^^^^^^^^^^^^                    entity.name.tag.open.jsx
//   ^^^^^^^^^^^^^^                    support.class.component.open.jsx
//                 ^                   JSXStartTagEnd
//                  ^^                 JSXEndTagStart
//                    ^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                    ^^^^^^^^^^^^^^   support.class.component.close.jsx
    <namespace:component></namespace:component>
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//  ^                   ^^^                   ^  punctuation.definition.tag.jsx
//   ^^^^^^^^^^^^^^^^^^^                         entity.name.tag.open.jsx
//   ^^^^^^^^^^^^^^^^^^^                         support.class.component.open.jsx
//                      ^                        JSXStartTagEnd
//                       ^^                      JSXEndTagStart
//                         ^^^^^^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                         ^^^^^^^^^^^^^^^^^^^   support.class.component.close.jsx
    <custom-element></custom-element>
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//  ^              ^^^              ^  punctuation.definition.tag.jsx
//   ^^^^^^^^^^^^^^                    entity.name.tag.open.jsx
//   ^^^^^^^^^^^^^^                    support.class.component.open.jsx
//                 ^                   JSXStartTagEnd
//                  ^^                 JSXEndTagStart
//                    ^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                    ^^^^^^^^^^^^^^   support.class.component.close.jsx
  </div>
//^^^^^^  meta.tag.jsx
//^^      JSXAttrs
//^^   ^  punctuation.definition.tag.jsx
//^^      JSXEndTagStart
//  ^^^   entity.name.tag.close.jsx

  // Some snippets from function-bind syntax proposal
//^^ ^^^^ ^^^^^^^^ ^^^^ ^^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^  comment.line.double-slash.js
//^^                                                   punctuation.definition.comment.js

  getPlayers()
//^^^^^^^^^^^^  meta.function-call.without-arguments.js
//^^^^^^^^^^    entity.name.function.js
//          ^^  meta.brace.round.js
  ::map(x => x.character());
//^^          ^               keyword.operator.accessor.js
//  ^^^^^ ^^ ^^^^^^^^^^^^^^   meta.function-call.with-arguments.js
//  ^^^        ^^^^^^^^^      entity.name.function.js
//     ^                ^^^   meta.brace.round.js
//      ^ ^^                  meta.function.arrow.js
//      ^                     variable.other.readwrite.js
//        ^^                  storage.type.function.arrow.js
//           ^                variable.other.object.js
//             ^^^^^^^^^^^    meta.method-call.without-arguments.js
//                         ^  punctuation.terminator.statement.js

  Promise.resolve(123).then(::console.log);
//^^^^^^^                                    support.class.builtin.js
//       ^            ^     ^^       ^       keyword.operator.accessor.js
//        ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^   meta.method-call.with-arguments.js
//        ^^^^^^^      ^^^^                  entity.name.function.js
//               ^   ^     ^             ^   meta.brace.round.js
//                ^^^                        constant.numeric.js
//                            ^^^^^^^        support.type.object.console.js
//                                    ^^^    support.function.console.js
//                                        ^  punctuation.terminator.statement.js


// >> only:(source.js.jsx)
