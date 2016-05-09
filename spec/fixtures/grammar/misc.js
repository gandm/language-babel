// SYNTAX TEST "source.js.jsx"

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
