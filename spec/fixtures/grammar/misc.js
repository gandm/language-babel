// SYNTAX TEST "source.js.jsx"

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
</div>
// <- meta.tag.jsx punctuation.definition.tag.jsx JSXEndTagStart
 // <- meta.tag.jsx punctuation.definition.tag.jsx JSXEndTagStart
//^^^^  meta.tag.jsx
//   ^  punctuation.definition.tag.jsx
//^^^   entity.name.tag.close.jsx
