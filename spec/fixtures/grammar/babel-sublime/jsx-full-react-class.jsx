// SYNTAX TEST "source.js.jsx"

import React from 'react';
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^       ^^^^           keyword.control.module.js
//     ^^^^^                variable.other.readwrite.js
//                ^         punctuation.definition.string.begin.js
//                 ^^^^^    string.quoted.module.js
//                      ^   punctuation.definition.string.end.js
//                       ^  punctuation.terminator.statement.js
import { InputsMixin } from './Forms';
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                 ^^^^             keyword.control.module.js
//     ^             ^                  meta.brace.curly.js
//       ^^^^^^^^^^^                    variable.other.readwrite.js
//                          ^           punctuation.definition.string.begin.js
//                           ^^^^^^^    string.quoted.module.js
//                                  ^   punctuation.definition.string.end.js
//                                   ^  punctuation.terminator.statement.js

export default React.createClass({
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^                      keyword.control.module.js
//             ^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//             ^^^^^                variable.other.class.js
//                  ^               keyword.operator.accessor.js
//                   ^^^^^^^^^^^    entity.name.function.js
//                              ^   meta.brace.round.js
//                               ^  meta.brace.curly.litobj.js

  mixins: [InputsMixin],
//^^^^^^^ ^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//^^^^^^                  constant.other.object.key.js
//^^^^^^                  string.unquoted.js
//      ^                 punctuation.separator.key-value.js
//        ^           ^   meta.brace.square.js
//         ^^^^^^^^^^^    variable.other.readwrite.js
//                     ^  meta.delimiter.comma.js

  submit() {
//^^^^^^^^ ^  meta.method-call.with-arguments.js
//^^^^^^^^ ^  meta.function.method.js
//^^^^^^      entity.name.function.method.js
//      ^     punctuation.definition.parameters.begin.js
//      ^^    meta.brace.round.js
//       ^    punctuation.definition.parameters.end.js
//         ^  meta.brace.curly.js
    var {email, question} = this.state;
//  ^^^ ^^^^^^^ ^^^^^^^^^ ^ ^^^^^^^^^^^  meta.method-call.with-arguments.js
//  ^^^ ^^^^^^^ ^^^^^^^^^ ^ ^^^^^^^^^^^  meta.function.method.js
//  ^^^                                  storage.type.js
//      ^               ^                meta.brace.curly.js
//       ^^^^^  ^^^^^^^^                 variable.other.readwrite.js
//            ^                          meta.delimiter.comma.js
//                        ^              keyword.operator.assignment.js
//                          ^^^^         variable.language.this.js
//                              ^        keyword.operator.accessor.js
//                               ^^^^^   meta.property.object.js
//                               ^^^^^   variable.other.property.js
//                                    ^  punctuation.terminator.statement.js
    request
//  ^^^^^^^  meta.method-call.with-arguments.js
//  ^^^^^^^  meta.function.method.js
//  ^^^^^^^  variable.other.readwrite.js
      .post(`${API_BASE}/askform`)
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function.method.js
//    ^                             keyword.operator.accessor.js
//     ^^^^                         entity.name.function.js
//         ^                     ^  meta.brace.round.js
//          ^^^^^^^^^^^^^^^^^^^^^   string.quasi.js
//          ^                       punctuation.definition.quasi.begin.js
//          ^^^^^^^^^^^^^^^^^^^^^   string.quoted.template.js
//           ^^^^^^^^^^^            entity.quasi.element.js
//           ^^                     punctuation.quasi.element.begin.js
//             ^^^^^^^^             variable.other.constant.js
//                     ^            punctuation.quasi.element.end.js
//                              ^   punctuation.definition.quasi.end.js
      .send({email, question})
//    ^^^^^^^^^^^^^ ^^^^^^^^^^  meta.method-call.with-arguments.js
//    ^^^^^^^^^^^^^ ^^^^^^^^^^  meta.function.method.js
//    ^                         keyword.operator.accessor.js
//     ^^^^                     entity.name.function.js
//         ^                 ^  meta.brace.round.js
//          ^               ^   meta.brace.curly.litobj.js
//           ^^^^^  ^^^^^^^^    variable.other.readwrite.shorthandpropertyname.js
//                ^             meta.delimiter.comma.js
      .end((err, res) =>
//    ^^^^^^^^^^ ^^^^ ^^  meta.method-call.with-arguments.js
//    ^^^^^^^^^^ ^^^^ ^^  meta.function.method.js
//    ^                   keyword.operator.accessor.js
//     ^^^                entity.name.function.js
//        ^^        ^     meta.brace.round.js
//         ^^^^^ ^^^^ ^^  meta.function.arrow.js
//         ^              punctuation.definition.parameters.begin.js
//          ^^^^ ^^^      meta.function.parameters.js
//          ^^^  ^^^      variable.other.readwrite.js
//             ^          meta.delimiter.comma.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  storage.type.function.arrow.js
        this.setState({isValid: !err}));
//      ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.method-call.with-arguments.js
//      ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.function.method.js
//      ^^^^                              variable.language.this.js
//          ^                             keyword.operator.accessor.js
//           ^^^^^^^^                     entity.name.function.js
//                   ^               ^^   meta.brace.round.js
//                    ^             ^     meta.brace.curly.litobj.js
//                     ^^^^^^^            constant.other.object.key.js
//                     ^^^^^^^            string.unquoted.js
//                            ^           punctuation.separator.key-value.js
//                              ^         keyword.operator.logical.js
//                               ^^^      variable.other.readwrite.js
//                                     ^  punctuation.terminator.statement.js
  },
//^^  meta.method-call.with-arguments.js
//^   meta.function.method.js
//^   meta.brace.curly.js
// ^  meta.delimiter.comma.js

  render() {
//^^^^^^^^ ^  meta.method-call.with-arguments.js
//^^^^^^^^ ^  meta.function.method.js
//^^^^^^      entity.name.function.method.js
//      ^     punctuation.definition.parameters.begin.js
//      ^^    meta.brace.round.js
//       ^    punctuation.definition.parameters.end.js
//         ^  meta.brace.curly.js
    var {email} = this.state;
//  ^^^ ^^^^^^^ ^ ^^^^^^^^^^^  meta.method-call.with-arguments.js
//  ^^^ ^^^^^^^ ^ ^^^^^^^^^^^  meta.function.method.js
//  ^^^                        storage.type.js
//      ^     ^                meta.brace.curly.js
//       ^^^^^                 variable.other.readwrite.js
//              ^              keyword.operator.assignment.js
//                ^^^^         variable.language.this.js
//                    ^        keyword.operator.accessor.js
//                     ^^^^^   meta.property.object.js
//                     ^^^^^   variable.other.property.js
//                          ^  punctuation.terminator.statement.js
    return (
//  ^^^^^^ ^  meta.method-call.with-arguments.js
//  ^^^^^^ ^  meta.function.method.js
//  ^^^^^^    keyword.control.flow.js
//         ^  meta.brace.round.js
      <div {...this.props}>
//    ^^^^ ^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//    ^^^^ ^^^^^^^^^^^^^^^^  meta.function.method.js
//    ^^^^ ^^^^^^^^^^^^^^^^  meta.tag.jsx
//    ^                   ^  punctuation.definition.tag.jsx
//     ^^^                   entity.name.tag.open.jsx
//         ^^^^^^^^^^^^^^^^  JSXAttrs
//         ^^^^^^^^^^^^^^^   meta.embedded.expression.js
//         ^                 punctuation.section.embedded.begin.jsx
//          ^^^              keyword.operator.spread.jsx
//             ^^^^          variable.language.this.js
//                 ^         keyword.operator.accessor.js
//                  ^^^^^    meta.property.object.js
//                  ^^^^^    variable.other.property.js
//                       ^   punctuation.section.embedded.end.jsx
//                        ^  JSXStartTagEnd
        <input
//      ^^^^^^  meta.method-call.with-arguments.js
//      ^^^^^^  meta.function.method.js
//      ^^^^^^  meta.tag.jsx
//      ^^^^^^  JSXAttrs
//      ^^^^^^  JSXNested
//      ^       punctuation.definition.tag.jsx
//       ^^^^^  entity.name.tag.open.jsx
          value={email}
//        ^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//        ^^^^^^^^^^^^^  meta.function.method.js
//        ^^^^^^^^^^^^^  meta.tag.jsx
//        ^^^^^^^^^^^^^  JSXAttrs
//        ^^^^^^^^^^^^^  JSXNested
//        ^^^^^          entity.other.attribute-name.jsx
//             ^         keyword.operator.assignment.jsx
//              ^^^^^^^  meta.embedded.expression.js
//              ^        punctuation.section.embedded.begin.jsx
//               ^^^^^   variable.other.readwrite.js
//                    ^  punctuation.section.embedded.end.jsx
          onChange={this.onChange}
//        ^^^^^^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//        ^^^^^^^^^^^^^^^^^^^^^^^^  meta.function.method.js
//        ^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//        ^^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//        ^^^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//        ^^^^^^^^                  entity.other.attribute-name.jsx
//                ^                 keyword.operator.assignment.jsx
//                 ^^^^^^^^^^^^^^^  meta.embedded.expression.js
//                 ^                punctuation.section.embedded.begin.jsx
//                  ^^^^            variable.language.this.js
//                      ^           keyword.operator.accessor.js
//                       ^^^^^^^^   meta.property.object.js
//                       ^^^^^^^^   variable.other.property.js
//                               ^  punctuation.section.embedded.end.jsx
          onClick={this.onClick}
//        ^^^^^^^^^^^^^^^^^^^^^^  meta.method-call.with-arguments.js
//        ^^^^^^^^^^^^^^^^^^^^^^  meta.function.method.js
//        ^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//        ^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//        ^^^^^^^^^^^^^^^^^^^^^^  JSXNested
//        ^^^^^^^                 entity.other.attribute-name.jsx
//               ^                keyword.operator.assignment.jsx
//                ^^^^^^^^^^^^^^  meta.embedded.expression.js
//                ^               punctuation.section.embedded.begin.jsx
//                 ^^^^           variable.language.this.js
//                     ^          keyword.operator.accessor.js
//                      ^^^^^^^   meta.property.object.js
//                      ^^^^^^^   variable.other.property.js
//                             ^  punctuation.section.embedded.end.jsx
          required />
//        ^^^^^^^^ ^^  meta.method-call.with-arguments.js
//        ^^^^^^^^ ^^  meta.function.method.js
//        ^^^^^^^^ ^^  meta.tag.jsx
//        ^^^^^^^^ ^^  JSXAttrs
//        ^^^^^^^^ ^^  JSXNested
//        ^^^^^^^^     entity.other.attribute-name.jsx
//                 ^^  punctuation.definition.tag.jsx
      </div>
//    ^^^^^^  meta.method-call.with-arguments.js
//    ^^^^^^  meta.function.method.js
//    ^^^^^^  meta.tag.jsx
//    ^^      JSXAttrs
//    ^^   ^  punctuation.definition.tag.jsx
//    ^^      JSXEndTagStart
//      ^^^   entity.name.tag.close.jsx
    );
//  ^^  meta.method-call.with-arguments.js
//  ^^  meta.function.method.js
//  ^   meta.brace.round.js
//   ^  punctuation.terminator.statement.js
  }
//^  meta.method-call.with-arguments.js
//^  meta.function.method.js
//^  meta.brace.curly.js
});
// <- meta.method-call.with-arguments.js meta.brace.curly.litobj.js
 // <- meta.method-call.with-arguments.js meta.brace.round.js
//^  punctuation.terminator.statement.js

// With ES7+ Property Initializers
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^ ^^^^ ^^^^^^^^ ^^^^^^^^^^^^  comment.line.double-slash.js

export class Counter extends React.Component {
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                          keyword.control.module.js
//     ^^^^^                                    meta.class.js
//     ^^^^^                                    storage.type.class.js
//           ^^^^^^^         ^^^^^              entity.name.class.js
//                   ^^^^^^^                    meta.class.extends.js
//                   ^^^^^^^                    storage.type.extends.js
//                                ^             keyword.operator.accessor.js
//                                 ^^^^^^^^^    meta.property.object.js
//                                 ^^^^^^^^^    variable.other.property.js
//                                           ^  punctuation.section.class.begin.js
  static propTypes = { initialCount: React.PropTypes.number };
//^^^^^^ ^^^^^^^^^ ^ ^ ^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                                                        storage.modifier.js
//       ^^^^^^^^^                                              variable.other.readwrite.js
//                 ^                                            keyword.operator.assignment.js
//                   ^                                      ^   meta.brace.curly.litobj.js
//                     ^^^^^^^^^^^^                             constant.other.object.key.js
//                     ^^^^^^^^^^^^                             string.unquoted.js
//                                 ^                            punctuation.separator.key-value.js
//                                   ^^^^^^^^^^^^^^^            meta.property.class.js
//                                   ^^^^^                      variable.other.class.js
//                                        ^         ^           keyword.operator.accessor.js
//                                         ^^^^^^^^^            variable.other.property.static.js
//                                                   ^^^^^^     meta.property.object.js
//                                                   ^^^^^^     variable.other.property.js
//                                                           ^  punctuation.terminator.statement.js
  static defaultProps = { initialCount: 0 };
//^^^^^^ ^^^^^^^^^^^^ ^ ^ ^^^^^^^^^^^^^ ^ ^^  meta.class.body.js
//^^^^^^                                      storage.modifier.js
//       ^^^^^^^^^^^^                         variable.other.readwrite.js
//                    ^                       keyword.operator.assignment.js
//                      ^                 ^   meta.brace.curly.litobj.js
//                        ^^^^^^^^^^^^        constant.other.object.key.js
//                        ^^^^^^^^^^^^        string.unquoted.js
//                                    ^       punctuation.separator.key-value.js
//                                      ^     constant.numeric.js
//                                         ^  punctuation.terminator.statement.js
  static childContextTypes = () => {
//^^^^^^ ^^^^^^^^^^^^^^^^^ ^ ^^ ^^ ^  meta.class.body.js
//^^^^^^                              storage.modifier.js
//       ^^^^^^^^^^^^^^^^^ ^ ^^ ^^ ^  meta.function.arrow.js
//       ^^^^^^^^^^^^^^^^^            entity.name.function.js
//                         ^          keyword.operator.assignment.js
//                           ^        punctuation.definition.parameters.begin.js
//                           ^^       meta.brace.round.js
//                            ^       punctuation.definition.parameters.end.js
//                              ^^    storage.type.function.arrow.js
//                                 ^  meta.brace.curly.js
    return {
//  ^^^^^^ ^  meta.class.body.js
//  ^^^^^^ ^  meta.function.arrow.js
//  ^^^^^^    keyword.control.flow.js
//         ^  meta.brace.curly.litobj.js
      app: React.PropTypes.instanceOf(App).isRequired
//    ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function.arrow.js
//    ^^^                                              constant.other.object.key.js
//    ^^^                                              string.unquoted.js
//       ^                                             punctuation.separator.key-value.js
//         ^^^^^^^^^^^^^^^                             meta.property.class.js
//         ^^^^^                                       variable.other.class.js
//              ^         ^               ^            keyword.operator.accessor.js
//               ^^^^^^^^^                             variable.other.property.static.js
//                         ^^^^^^^^^^^^^^^             meta.method-call.with-arguments.js
//                         ^^^^^^^^^^                  entity.name.function.js
//                                   ^   ^             meta.brace.round.js
//                                    ^^^              variable.other.readwrite.js
//                                         ^^^^^^^^^^  meta.property.object.js
//                                         ^^^^^^^^^^  variable.other.property.js
    }
//  ^  meta.class.body.js
//  ^  meta.function.arrow.js
//  ^  meta.brace.curly.litobj.js
  };
//^^  meta.class.body.js
//^   meta.function.arrow.js
//^   meta.brace.curly.js
// ^  punctuation.terminator.statement.js
  getChildContext = makeGetChildContext();
//^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^                           variable.other.readwrite.js
//                ^                         keyword.operator.assignment.js
//                  ^^^^^^^^^^^^^^^^^^^^^   meta.function-call.without-arguments.js
//                  ^^^^^^^^^^^^^^^^^^^     entity.name.function.js
//                                     ^^   meta.brace.round.js
//                                       ^  punctuation.terminator.statement.js
  state = { count: this.props.initialCount };
//^^^^^ ^ ^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^                                        variable.other.readwrite.js
//      ^                                      keyword.operator.assignment.js
//        ^                                ^   meta.brace.curly.litobj.js
//          ^^^^^                              constant.other.object.key.js
//          ^^^^^                              string.unquoted.js
//               ^                             punctuation.separator.key-value.js
//                 ^^^^                        variable.language.this.js
//                     ^     ^                 keyword.operator.accessor.js
//                      ^^^^^ ^^^^^^^^^^^^     meta.property.object.js
//                      ^^^^^ ^^^^^^^^^^^^     variable.other.property.js
//                                          ^  punctuation.terminator.statement.js
  tick() {
//^^^^^^ ^  meta.class.body.js
//^^^^^^ ^  meta.function.method.js
//^^^^      entity.name.function.method.js
//    ^     punctuation.definition.parameters.begin.js
//    ^^    meta.brace.round.js
//     ^    punctuation.definition.parameters.end.js
//       ^  meta.brace.curly.js
    this.setState({ count: this.state.count + 1 });
//  ^^^^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^ ^ ^ ^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^ ^ ^ ^^^  meta.function.method.js
//  ^^^^                   ^^^^                      variable.language.this.js
//      ^                      ^     ^               keyword.operator.accessor.js
//       ^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^ ^ ^ ^^   meta.method-call.with-arguments.js
//       ^^^^^^^^                                    entity.name.function.js
//               ^                               ^   meta.brace.round.js
//                ^                             ^    meta.brace.curly.litobj.js
//                  ^^^^^                            constant.other.object.key.js
//                  ^^^^^                            string.unquoted.js
//                       ^                           punctuation.separator.key-value.js
//                              ^^^^^ ^^^^^          meta.property.object.js
//                              ^^^^^ ^^^^^          variable.other.property.js
//                                          ^        keyword.operator.arithmetic.js
//                                            ^      constant.numeric.js
//                                                ^  punctuation.terminator.statement.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
  render() {
//^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^ ^  meta.function.method.js
//^^^^^^      entity.name.function.method.js
//      ^     punctuation.definition.parameters.begin.js
//      ^^    meta.brace.round.js
//       ^    punctuation.definition.parameters.end.js
//         ^  meta.brace.curly.js
    return (
//  ^^^^^^ ^  meta.class.body.js
//  ^^^^^^ ^  meta.function.method.js
//  ^^^^^^    keyword.control.flow.js
//         ^  meta.brace.round.js
      <div onClick={this.tick.bind(this)}>
//    ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function.method.js
//    ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//    ^                                  ^  punctuation.definition.tag.jsx
//     ^^^                                  entity.name.tag.open.jsx
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  JSXAttrs
//         ^^^^^^^                          entity.other.attribute-name.jsx
//                ^                         keyword.operator.assignment.jsx
//                 ^^^^^^^^^^^^^^^^^^^^^^   meta.embedded.expression.js
//                 ^                        punctuation.section.embedded.begin.jsx
//                  ^^^^           ^^^^     variable.language.this.js
//                      ^    ^              keyword.operator.accessor.js
//                       ^^^^               meta.property.object.js
//                       ^^^^               variable.other.property.js
//                            ^^^^^^^^^^    meta.method-call.with-arguments.js
//                            ^^^^          entity.name.function.js
//                                ^    ^    meta.brace.round.js
//                                      ^   punctuation.section.embedded.end.jsx
//                                       ^  JSXStartTagEnd
        Clicks: {this.state.count}
//      ^^^^^^^ ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//      ^^^^^^^ ^^^^^^^^^^^^^^^^^^  meta.function.method.js
//      ^^^^^^^ ^^^^^^^^^^^^^^^^^^  meta.tag.jsx
//      ^^^^^^^ ^^^^^^^^^^^^^^^^^^  JSXAttrs
//      ^^^^^^^ ^^^^^^^^^^^^^^^^^^  JSXNested
//              ^^^^^^^^^^^^^^^^^^  meta.embedded.expression.js
//              ^                   punctuation.section.embedded.begin.jsx
//               ^^^^               variable.language.this.js
//                   ^     ^        keyword.operator.accessor.js
//                    ^^^^^ ^^^^^   meta.property.object.js
//                    ^^^^^ ^^^^^   variable.other.property.js
//                               ^  punctuation.section.embedded.end.jsx
      </div>
//    ^^^^^^  meta.class.body.js
//    ^^^^^^  meta.function.method.js
//    ^^^^^^  meta.tag.jsx
//    ^^      JSXAttrs
//    ^^   ^  punctuation.definition.tag.jsx
//    ^^      JSXEndTagStart
//      ^^^   entity.name.tag.close.jsx
    );
//  ^^  meta.class.body.js
//  ^^  meta.function.method.js
//  ^   meta.brace.round.js
//   ^  punctuation.terminator.statement.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js


// >> only:(source.js.jsx)
