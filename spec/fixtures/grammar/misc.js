// SYNTAX TEST "source.js.jsx"

// Calls language-mustache & language-html from a object template: backtick

a.component('randomComponent', {
// <- variable.other.object.js
 // <- keyword.operator.accessor.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^  meta.function-call.method.with-arguments.js
//^^^^^^^^^                       entity.name.function.js
//         ^                      meta.brace.round.js
//          ^^^^^^^^^^^^^^^^^     string.quoted.single.js
//          ^                     punctuation.definition.string.begin.js
//                          ^     punctuation.definition.string.end.js
//                           ^    meta.delimiter.comma.js
//                             ^  meta.brace.curly.js
  template: `<div class="test">test</div>`,
//^^^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.method.with-arguments.js
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
// <- meta.function-call.method.with-arguments.js meta.brace.curly.js
 // <- meta.function-call.method.with-arguments.js meta.brace.round.js

// class fields, statics and methods
class SomeClass {
  myProperty: string = 'some value'
//^^^^^^^^^^^ ^^^^^^ ^ ^^^^^ ^^^^^^             meta.class.body.js
//^^^^^^^^^^                                    variable.other.readwrite.js
//          ^                                   punctuation.type.flowtype
//            ^^^^^^                            support.type.builtin.primitive.flowtype
//                   ^                          keyword.operator.assignment.js
//                     ^^^^^ ^^^^^^             string.quoted.single.js
//                     ^                        punctuation.definition.string.begin.js
//                                ^             punctuation.definition.string.end.js
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
//^^^^^     meta.function.method.js
//^ ^       meta.brace.square.js
// ^        variable.other.readwrite.js
//   ^      punctuation.definition.parameters.begin.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.brace.curly.js
  'aaa'() {}
//^^^^^^^ ^^  meta.class.body.js
//^^^^^^^     meta.function.method.js
//^^^^^       entity.name.function.method.js
//     ^      punctuation.definition.parameters.begin.js
//      ^     punctuation.definition.parameters.end.js
//        ^^  meta.brace.curly.js
  type: (a)=>string = function() { return ('any' + ' ' + 'expression'); }
//^^^^^ ^^^^^^^^^^^ ^ ^^^^^^^^^^ ^ ^^^^^^ ^^^^^^ ^ ^ ^ ^ ^^^^^^^^^^^^^^ ^    meta.class.body.js
//^^^^                ^^^^^^^^                                               storage.type.function.js
//    ^                                                                      punctuation.type.flowtype
//      ^                     ^                                              punctuation.definition.parameters.begin.js
//       ^                                                                   variable.other.readwrite.js
//        ^                    ^                                             punctuation.definition.parameters.end.js
//         ^^                                                                storage.type.function.arrow.js
//           ^^^^^^                                                          support.type.builtin.primitive.flowtype
//                  ^                                                        keyword.operator.assignment.js
//                    ^^^^^^^^^^                                             meta.function.js
//                               ^                                      ^    meta.brace.curly.js
//                                 ^^^^^^                                    keyword.control.flow.js
//                                        ^                          ^       meta.brace.round.js
//                                         ^^^^^   ^ ^   ^^^^^^^^^^^^        string.quoted.single.js
//                                         ^       ^     ^                   punctuation.definition.string.begin.js
//                                             ^     ^              ^        punctuation.definition.string.end.js
//                                               ^     ^                     keyword.operator.arithmetic.js
//                                                                    ^      punctuation.terminator.statement.js
}

// labels with function calls
const foo = {
  bar: baz()
//^^^^         constant.other.object.key.js
//^^^          string.unquoted.js
//   ^         punctuation.separator.key-value.js
//     ^^^^^   meta.function-call.without-arguments.js
//     ^^^     entity.name.function.js
//        ^^   meta.brace.round.js
};

// $JSXIntrinsics is special and magic.
// This declares the types a `span`
type $JSXIntrinsics = {
  span: JSXHelper<{id: string, class: string}> };
//^^^^                                             variable.other.readwrite.js
//    ^              ^              ^              punctuation.type.flowtype
//      ^^^^^^^^^                                  support.type.class.flowtype
//               ^                           ^     punctutation.flowtype
//                ^                                meta.brace.round.open.flowtype
//                 ^^          ^^^^^               variable.other.property.flowtype
//                     ^^^^^^         ^^^^^^       support.type.builtin.primitive.flowtype
//                           ^                     meta.delimiter.comma.js
//                                          ^      meta.brace.round.close.flowtype
//                                             ^   meta.brace.curly.js
//                                              ^  punctuation.object.end.flowtype


// Some JSX

<div>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^  meta.tag.jsx
//  ^  punctuation.definition.tag.jsx
//^^   entity.name.tag.open.jsx
//  ^  JSXStartTagEnd
  <div />
//^^^^ ^^  meta.tag.jsx
//^    ^^  punctuation.definition.tag.jsx
// ^^^     entity.name.tag.open.jsx
  <h1></h1>
//^^^^^^^^^  meta.tag.jsx
//^  ^^^  ^  punctuation.definition.tag.jsx
// ^^        entity.name.tag.open.jsx
//   ^       JSXStartTagEnd
//    ^^     JSXEndTagStart
//      ^^   entity.name.tag.close.jsx
  <Component></Component>
//^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^         ^^^         ^  punctuation.definition.tag.jsx
// ^^^^^^^^^               entity.name.tag.open.jsx
// ^^^^^^^^^               support.class.component.open.jsx
//          ^              JSXStartTagEnd
//           ^^            JSXEndTagStart
//             ^^^^^^^^^   entity.name.tag.close.jsx
//             ^^^^^^^^^   support.class.component.close.jsx
  <this.component></this.component>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^              ^^^              ^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^                    entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^                    support.class.component.open.jsx
//               ^                   JSXStartTagEnd
//                ^^                 JSXEndTagStart
//                  ^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                  ^^^^^^^^^^^^^^   support.class.component.close.jsx
  <namespace:component></namespace:component>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^                   ^^^                   ^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^^^^^^                         entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^^^^^^                         support.class.component.open.jsx
//                    ^                        JSXStartTagEnd
//                     ^^                      JSXEndTagStart
//                       ^^^^^^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                       ^^^^^^^^^^^^^^^^^^^   support.class.component.close.jsx
  <custom-element></custom-element>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//^              ^^^              ^  punctuation.definition.tag.jsx
// ^^^^^^^^^^^^^^                    entity.name.tag.open.jsx
// ^^^^^^^^^^^^^^                    support.class.component.open.jsx
//               ^                   JSXStartTagEnd
//                ^^                 JSXEndTagStart
//                  ^^^^^^^^^^^^^^   entity.name.tag.close.jsx
//                  ^^^^^^^^^^^^^^   support.class.component.close.jsx
</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx

// Some snippets from function-bind syntax proposal

getPlayers()
// <- meta.function-call.without-arguments.js entity.name.function.js
 // <- meta.function-call.without-arguments.js entity.name.function.js
//^^^^^^^^^^  meta.function-call.without-arguments.js
//^^^^^^^^    entity.name.function.js
//        ^^  meta.brace.round.js
  ::map(x => x.character());
//^^          ^               keyword.operator.accessor.js
//  ^^^^^ ^^ ^^^^^^^^^^^^^^   meta.function-call.with-arguments.js
//  ^^^        ^^^^^^^^^      entity.name.function.js
//     ^                  ^   meta.brace.round.js
//      ^ ^^                  meta.function.arrow.js
//      ^                     variable.other.readwrite.js
//        ^^                  storage.type.function.arrow.js
//           ^                variable.other.object.js
//             ^^^^^^^^^^^    meta.function-call.method.without-arguments.js
//                      ^^    meta.group.braces.round.function.arguments.js
//                         ^  punctuation.terminator.statement.js

Promise.resolve(123).then(::console.log);
// <- support.class.builtin.js
 // <- support.class.builtin.js
//^^^^^                                    support.class.builtin.js
//     ^            ^     ^^       ^       keyword.operator.accessor.js
//      ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^   meta.function-call.method.with-arguments.js
//      ^^^^^^^      ^^^^                  entity.name.function.js
//             ^   ^     ^             ^   meta.brace.round.js
//              ^^^                        constant.numeric.js
//                          ^^^^^^^        support.type.object.console.js
//                                  ^^^    support.function.console.js
//                                      ^  punctuation.terminator.statement.js
