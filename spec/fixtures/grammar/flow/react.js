// SYNTAX TEST "source.js.jsx"

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the "flow" directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
/* React */

/**
 * Base class of all React classes, modeled as a polymorphic class whose type
 * parameters are D (= DefaultProps), P (= PropTypes), S (= State).
 */
declare class ReactComponent<D, P, S> {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                  support.type.declare.flowtype
//      ^^^^^                            storage.type.class.flowtype
//            ^^^^^^^^^^^^^^             entity.name.class.js
//                          ^       ^    punctutation.flowtype
//                           ^  ^  ^     support.type.class.flowtype
//                            ^  ^       punctuation.type.separator.flowtype
//                                    ^  punctuation.section.class.begin.js
  props: P;
//^^^^^^ ^^  meta.class.body.js
//^^^^^      variable.other.readwrite.js
//     ^     punctuation.type.flowtype
//       ^   support.type.class.flowtype
  state: S;
//^^^^^^ ^^  meta.class.body.js
//^^^^^      variable.other.readwrite.js
//     ^     punctuation.type.flowtype
//       ^   support.type.class.flowtype
  refs: any;
//^^^^^ ^^^^  meta.class.body.js
//^^^^        variable.other.readwrite.js
//    ^       punctuation.type.flowtype
//      ^^^   support.type.builtin.primitive.flowtype
  context: any;
//^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^^        variable.other.readwrite.js
//       ^       punctuation.type.flowtype
//         ^^^   support.type.builtin.primitive.flowtype

  getInitialState(): S;
//^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^ ^   meta.function.method.js
//^^^^^^^^^^^^^^^        entity.name.function.method.js
//               ^       punctuation.definition.parameters.begin.js
//                ^      punctuation.definition.parameters.end.js
//                 ^     punctuation.type.flowtype
//                   ^   support.type.class.flowtype
  getChildContext(): any;
//^^^^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^ ^^^   meta.function.method.js
//^^^^^^^^^^^^^^^          entity.name.function.method.js
//               ^         punctuation.definition.parameters.begin.js
//                ^        punctuation.definition.parameters.end.js
//                 ^       punctuation.type.flowtype
//                   ^^^   support.type.builtin.primitive.flowtype

  setProps(props: $Shape<P>, callback?: () => void): void;
//^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^                                                  entity.name.function.method.js
//        ^                             ^                   punctuation.definition.parameters.begin.js
//         ^^^^^             ^^^^^^^^                       variable.other.readwrite.js
//              ^                     ^            ^        punctuation.type.flowtype
//                ^^^^^^ ^                                  support.type.class.flowtype
//                      ^ ^                                 punctutation.flowtype
//                         ^                                meta.delimiter.comma.js
//                                   ^                      keyword.operator.optional.parameter.flowtype
//                                       ^        ^         punctuation.definition.parameters.end.js
//                                         ^^               storage.type.function.arrow.js
//                                            ^^^^   ^^^^   support.type.builtin.primitive.flowtype
  replaceProps(props: P, callback?: () => void): void;
//^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^                                          entity.name.function.method.js
//            ^                     ^                   punctuation.definition.parameters.begin.js
//             ^^^^^     ^^^^^^^^                       variable.other.readwrite.js
//                  ^             ^            ^        punctuation.type.flowtype
//                    ^                                 support.type.class.flowtype
//                     ^                                meta.delimiter.comma.js
//                               ^                      keyword.operator.optional.parameter.flowtype
//                                   ^        ^         punctuation.definition.parameters.end.js
//                                     ^^               storage.type.function.arrow.js
//                                        ^^^^   ^^^^   support.type.builtin.primitive.flowtype

  setState(state: $Shape<S>, callback?: () => void): void;
//^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^                                                  entity.name.function.method.js
//        ^                             ^                   punctuation.definition.parameters.begin.js
//         ^^^^^             ^^^^^^^^                       variable.other.readwrite.js
//              ^                     ^            ^        punctuation.type.flowtype
//                ^^^^^^ ^                                  support.type.class.flowtype
//                      ^ ^                                 punctutation.flowtype
//                         ^                                meta.delimiter.comma.js
//                                   ^                      keyword.operator.optional.parameter.flowtype
//                                       ^        ^         punctuation.definition.parameters.end.js
//                                         ^^               storage.type.function.arrow.js
//                                            ^^^^   ^^^^   support.type.builtin.primitive.flowtype
  replaceState(state: S, callback?: () => void): void;
//^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^                                          entity.name.function.method.js
//            ^                     ^                   punctuation.definition.parameters.begin.js
//             ^^^^^     ^^^^^^^^                       variable.other.readwrite.js
//                  ^             ^            ^        punctuation.type.flowtype
//                    ^                                 support.type.class.flowtype
//                     ^                                meta.delimiter.comma.js
//                               ^                      keyword.operator.optional.parameter.flowtype
//                                   ^        ^         punctuation.definition.parameters.end.js
//                                     ^^               storage.type.function.arrow.js
//                                        ^^^^   ^^^^   support.type.builtin.primitive.flowtype

  render(): ?ReactElement<any, any, any>;
//^^^^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^ ^^^^   meta.function.method.js
//^^^^^^                                   entity.name.function.method.js
//      ^                                  punctuation.definition.parameters.begin.js
//       ^                                 punctuation.definition.parameters.end.js
//        ^                                punctuation.type.flowtype
//          ^                              keyword.operator.maybe.flowtype
//           ^^^^^^^^^^^^                  support.type.class.flowtype
//                       ^             ^   punctutation.flowtype
//                        ^^^  ^^^  ^^^    support.type.builtin.primitive.flowtype
//                           ^    ^        punctuation.type.separator.flowtype

  forceUpdate(callback?: () => void): void;
//^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^                                entity.name.function.method.js
//           ^           ^                   punctuation.definition.parameters.begin.js
//            ^^^^^^^^                       variable.other.readwrite.js
//                    ^                      keyword.operator.optional.parameter.flowtype
//                     ^            ^        punctuation.type.flowtype
//                        ^        ^         punctuation.definition.parameters.end.js
//                          ^^               storage.type.function.arrow.js
//                             ^^^^   ^^^^   support.type.builtin.primitive.flowtype
  getDOMNode(): any;
//^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^^^^^^^^ ^^^   meta.function.method.js
//^^^^^^^^^^          entity.name.function.method.js
//          ^         punctuation.definition.parameters.begin.js
//           ^        punctuation.definition.parameters.end.js
//            ^       punctuation.type.flowtype
//              ^^^   support.type.builtin.primitive.flowtype
  componentWillMount(): void;
//^^^^^^^^^^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^^           entity.name.function.method.js
//                  ^          punctuation.definition.parameters.begin.js
//                   ^         punctuation.definition.parameters.end.js
//                    ^        punctuation.type.flowtype
//                      ^^^^   support.type.builtin.primitive.flowtype
  componentDidMount(component?: any): void;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^                          entity.name.function.method.js
//                 ^                         punctuation.definition.parameters.begin.js
//                  ^^^^^^^^^                variable.other.readwrite.js
//                           ^               keyword.operator.optional.parameter.flowtype
//                            ^     ^        punctuation.type.flowtype
//                              ^^^   ^^^^   support.type.builtin.primitive.flowtype
//                                 ^         punctuation.definition.parameters.end.js
  componentWillReceiveProps(nextProps: P, nextContext?: any): void;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^^^^^^^^^                                          entity.name.function.method.js
//                         ^                                         punctuation.definition.parameters.begin.js
//                          ^^^^^^^^^     ^^^^^^^^^^^                variable.other.readwrite.js
//                                   ^                ^     ^        punctuation.type.flowtype
//                                     ^                             support.type.class.flowtype
//                                      ^                            meta.delimiter.comma.js
//                                                   ^               keyword.operator.optional.parameter.flowtype
//                                                      ^^^   ^^^^   support.type.builtin.primitive.flowtype
//                                                         ^         punctuation.definition.parameters.end.js
  shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^^ ^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^^ ^^^^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^^^^^                                                          entity.name.function.method.js
//                     ^                                                         punctuation.definition.parameters.begin.js
//                      ^^^^^^^^^     ^^^^^^^^^     ^^^^^^^^^^^                  variable.other.readwrite.js
//                               ^             ^               ^     ^           punctuation.type.flowtype
//                                 ^             ^                               support.type.class.flowtype
//                                  ^             ^                              meta.delimiter.comma.js
//                                                               ^^^   ^^^^^^^   support.type.builtin.primitive.flowtype
//                                                                  ^            punctuation.definition.parameters.end.js
  componentWillUpdate(nextProps: P, nextState: S, nextContext: any): void;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^^^                                                       entity.name.function.method.js
//                   ^                                                      punctuation.definition.parameters.begin.js
//                    ^^^^^^^^^     ^^^^^^^^^     ^^^^^^^^^^^               variable.other.readwrite.js
//                             ^             ^               ^     ^        punctuation.type.flowtype
//                               ^             ^                            support.type.class.flowtype
//                                ^             ^                           meta.delimiter.comma.js
//                                                             ^^^   ^^^^   support.type.builtin.primitive.flowtype
//                                                                ^         punctuation.definition.parameters.end.js
  componentDidUpdate(nextProps: P, nextState: S, nextContext: any, component: any): void;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^ ^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^ ^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^^                                                                       entity.name.function.method.js
//                  ^                                                                      punctuation.definition.parameters.begin.js
//                   ^^^^^^^^^     ^^^^^^^^^     ^^^^^^^^^^^       ^^^^^^^^^               variable.other.readwrite.js
//                            ^             ^               ^               ^     ^        punctuation.type.flowtype
//                              ^             ^                                            support.type.class.flowtype
//                               ^             ^                 ^                         meta.delimiter.comma.js
//                                                            ^^^             ^^^   ^^^^   support.type.builtin.primitive.flowtype
//                                                                               ^         punctuation.definition.parameters.end.js
  componentWillUnmount(): void;
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^^^^^^^^^^^^           entity.name.function.method.js
//                    ^          punctuation.definition.parameters.begin.js
//                     ^         punctuation.definition.parameters.end.js
//                      ^        punctuation.type.flowtype
//                        ^^^^   support.type.builtin.primitive.flowtype
  isMounted(): bool;
//^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//^^^^^^^^^^^^ ^^^^   meta.function.method.js
//^^^^^^^^^           entity.name.function.method.js
//         ^          punctuation.definition.parameters.begin.js
//          ^         punctuation.definition.parameters.end.js
//           ^        punctuation.type.flowtype
//             ^^^^   support.type.primitive.flowtype

  static propTypes: $Subtype<{[_: $Keys<P>]: any}>; //object whose keys are in P
//^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^ ^^^^^^^^ ^^^^^ ^^^^ ^^^ ^^ ^  meta.class.body.js
//^^^^^^                                                                          storage.modifier.js
//       ^^^^^^^^^             ^                                                  variable.other.readwrite.js
//                ^             ^                                                 punctuation.type.flowtype
//                  ^^^^^^^^      ^^^^^ ^                                         support.type.class.flowtype
//                          ^          ^ ^       ^                                punctutation.flowtype
//                            ^                                                   meta.brace.square.open.flowtype
//                                        ^                                       meta.brace.square.end.flowtype
//                                         ^                                      punctuation.type.separator.flowtype
//                                           ^^^                                  support.type.builtin.primitive.flowtype
//                                                  ^^^^^^^^ ^^^^^ ^^^^ ^^^ ^^ ^  comment.line.double-slash.js
//                                                  ^^                            punctuation.definition.comment.js
  static contextTypes: any;
//^^^^^^ ^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^                     storage.modifier.js
//       ^^^^^^^^^^^^        variable.other.readwrite.js
//                   ^       punctuation.type.flowtype
//                     ^^^   support.type.builtin.primitive.flowtype
  static childContextTypes: any;
//^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//^^^^^^                          storage.modifier.js
//       ^^^^^^^^^^^^^^^^^        variable.other.readwrite.js
//                        ^       punctuation.type.flowtype
//                          ^^^   support.type.builtin.primitive.flowtype
  static displayName: string;
//^^^^^^ ^^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^                       storage.modifier.js
//       ^^^^^^^^^^^           variable.other.readwrite.js
//                  ^          punctuation.type.flowtype
//                    ^^^^^^   support.type.builtin.primitive.flowtype
  static defaultProps: D;
//^^^^^^ ^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                   storage.modifier.js
//       ^^^^^^^^^^^^      variable.other.readwrite.js
//                   ^     punctuation.type.flowtype
//                     ^   support.type.class.flowtype
}
// <- punctuation.section.class.end.js

/**
// <- comment.block.documentation.js punctuation.definition.comment.js
 // <- comment.block.documentation.js punctuation.definition.comment.js
//^  comment.block.documentation.js
//^  punctuation.definition.comment.js
 * Type of a React class (not to be confused with the type of instances of a
 // <- comment.block.documentation.js
// ^^^^ ^^ ^ ^^^^^ ^^^^^ ^^^^ ^^ ^^ ^^^^^^^^ ^^^^ ^^^ ^^^^ ^^ ^^^^^^^^^ ^^ ^  comment.block.documentation.js
 * React class, which is the React class itself). A React class is any subclass
 // <- comment.block.documentation.js
// ^^^^^ ^^^^^^ ^^^^^ ^^ ^^^ ^^^^^ ^^^^^ ^^^^^^^^ ^ ^^^^^ ^^^^^ ^^ ^^^ ^^^^^^^^  comment.block.documentation.js
 * of ReactComponent. We make the type of a React class polymorphic over the
 // <- comment.block.documentation.js
// ^^ ^^^^^^^^^^^^^^^ ^^ ^^^^ ^^^ ^^^^ ^^ ^ ^^^^^ ^^^^^ ^^^^^^^^^^^ ^^^^ ^^^  comment.block.documentation.js
 * same type parameters (D, P, S) as ReactComponent. The required constraints
 // <- comment.block.documentation.js
// ^^^^ ^^^^ ^^^^^^^^^^ ^^^ ^^ ^^ ^^ ^^^^^^^^^^^^^^^ ^^^ ^^^^^^^^ ^^^^^^^^^^^  comment.block.documentation.js
 * are set up using a "helper" type alias, that takes an additional type
 // <- comment.block.documentation.js
// ^^^ ^^^ ^^ ^^^^^ ^ ^^^^^^^^ ^^^^ ^^^^^^ ^^^^ ^^^^^ ^^ ^^^^^^^^^^ ^^^^  comment.block.documentation.js
 * parameter C representing the React class, which is then abstracted with an
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^ ^^^^^^^^^^^^ ^^^ ^^^^^ ^^^^^^ ^^^^^ ^^ ^^^^ ^^^^^^^^^^ ^^^^ ^^  comment.block.documentation.js
 * existential type (*). The * can be thought of as an "auto" instruction to the
 // <- comment.block.documentation.js
// ^^^^^^^^^^^ ^^^^ ^^^^ ^^^ ^ ^^^ ^^ ^^^^^^^ ^^ ^^ ^^ ^^^^^^ ^^^^^^^^^^^ ^^ ^^^  comment.block.documentation.js
 * typechecker, telling it to fill in the type from context.
 // <- comment.block.documentation.js
// ^^^^^^^^^^^^ ^^^^^^^ ^^ ^^ ^^^^ ^^ ^^^ ^^^^ ^^^^ ^^^^^^^^  comment.block.documentation.js
 */
 // <- comment.block.documentation.js punctuation.definition.comment.js
//^  comment.block.documentation.js
//^  punctuation.definition.comment.js
type ReactClass<D, P, S> = _ReactClass<D, P, S, *>;
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                                                 support.type.type.flowtype
//   ^^^^^^^^^^ ^  ^  ^    ^^^^^^^^^^^ ^  ^  ^       support.type.class.flowtype
//             ^       ^              ^          ^   punctutation.flowtype
//               ^  ^                   ^  ^  ^      punctuation.type.separator.flowtype
//                                              ^    kewyword.operator.existential.flowtype
type _ReactClass<D, P, S, C: ReactComponent<D, P, S>> = Class<C>;
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                                                               support.type.type.flowtype
//   ^^^^^^^^^^^ ^  ^  ^  ^  ^^^^^^^^^^^^^^ ^  ^  ^           ^    support.type.class.flowtype
//              ^                          ^       ^^              punctutation.flowtype
//                ^  ^  ^  ^                 ^  ^                  punctuation.type.separator.flowtype
//                                                      ^^^^^      support.type.builtin.class.flowtype
//                                                           ^ ^   punctuation.flowtype

/**
// <- comment.block.documentation.js punctuation.definition.comment.js
 // <- comment.block.documentation.js punctuation.definition.comment.js
//^  comment.block.documentation.js
//^  punctuation.definition.comment.js
 * Type of a React element. React elements are commonly created using JSX
 // <- comment.block.documentation.js
// ^^^^ ^^ ^ ^^^^^ ^^^^^^^^ ^^^^^ ^^^^^^^^ ^^^ ^^^^^^^^ ^^^^^^^ ^^^^^ ^^^  comment.block.documentation.js
 * literals, which desugar to React.createElement calls (see below).
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^ ^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^ ^^^^^^^  comment.block.documentation.js
 */
 // <- comment.block.documentation.js punctuation.definition.comment.js
//^  comment.block.documentation.js
//^  punctuation.definition.comment.js
declare class ReactElement<D, P, S> {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                support.type.declare.flowtype
//      ^^^^^                          storage.type.class.flowtype
//            ^^^^^^^^^^^^             entity.name.class.js
//                        ^       ^    punctutation.flowtype
//                         ^  ^  ^     support.type.class.flowtype
//                          ^  ^       punctuation.type.separator.flowtype
//                                  ^  punctuation.section.class.begin.js
    type: ReactClass<D, P, S>;
//  ^^^^^ ^^^^^^^^^^^^^ ^^ ^^^  meta.class.body.js
//  ^^^^                        variable.other.readwrite.js
//      ^                       punctuation.type.flowtype
//        ^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                  ^       ^   punctutation.flowtype
//                    ^  ^      punctuation.type.separator.flowtype
    props: P;
//  ^^^^^^ ^^  meta.class.body.js
//  ^^^^^      variable.other.readwrite.js
//       ^     punctuation.type.flowtype
//         ^   support.type.class.flowtype
    key: ?string;
//  ^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^            variable.other.readwrite.js
//     ^           punctuation.type.flowtype
//       ^         keyword.operator.maybe.flowtype
//        ^^^^^^   support.type.builtin.primitive.flowtype
    ref: any;
//  ^^^^ ^^^^  meta.class.body.js
//  ^^^        variable.other.readwrite.js
//     ^       punctuation.type.flowtype
//       ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

type ReactPropsCheckType = (
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                          support.type.type.flowtype
//   ^^^^^^^^^^^^^^^^^^^      support.type.class.flowtype
//                         ^  punctuation.definition.parameters.begin.js
  props:any,
//^^^^^       variable.other.readwrite.js
//     ^      punctuation.type.flowtype
//      ^^^   support.type.builtin.primitive.flowtype
//         ^  meta.delimiter.comma.js
  propName: string,
//^^^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
//                ^  meta.delimiter.comma.js
  componentName: string,
//^^^^^^^^^^^^^           variable.other.readwrite.js
//             ^          punctuation.type.flowtype
//               ^^^^^^   support.type.builtin.primitive.flowtype
//                     ^  meta.delimiter.comma.js
  href?: string) => ?Error;
//^^^^                       variable.other.readwrite.js
//    ^                      keyword.operator.optional.parameter.flowtype
//     ^                     punctuation.type.flowtype
//       ^^^^^^              support.type.builtin.primitive.flowtype
//             ^             punctuation.definition.parameters.end.js
//                  ^        keyword.operator.maybe.flowtype
//                   ^^^^^   support.type.builtin.class.flowtype

type ReactPropsChainableTypeChecker = {
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                                     support.type.type.flowtype
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      support.type.class.flowtype
//                                    ^  meta.brace.curly.js
  isRequired: ReactPropsCheckType;
//^^^^^^^^^^                        variable.other.readwrite.js
//          ^                       punctuation.type.flowtype
//            ^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  (props:any, propName: string, componentName: string, href?: string): ?Error;
//^                                                                             punctuation.definition.parameters.begin.js
// ^^^^^      ^^^^^^^^          ^^^^^^^^^^^^^          ^^^^                     variable.other.readwrite.js
//      ^             ^                      ^              ^        ^          punctuation.type.flowtype
//       ^^^            ^^^^^^                 ^^^^^^         ^^^^^^            support.type.builtin.primitive.flowtype
//          ^                 ^                      ^                          meta.delimiter.comma.js
//                                                         ^                    keyword.operator.optional.parameter.flowtype
//                                                                  ^           punctuation.definition.parameters.end.js
//                                                                     ^        keyword.operator.maybe.flowtype
//                                                                      ^^^^^   support.type.builtin.class.flowtype
};
// <- meta.brace.curly.js

type ReactPropTypes = {
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                     support.type.type.flowtype
//   ^^^^^^^^^^^^^^      support.type.class.flowtype
//                    ^  meta.brace.curly.js
  array: ReactPropsChainableTypeChecker;
//^^^^^                                   variable.other.readwrite.js
//     ^                                  punctuation.type.flowtype
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  bool: ReactPropsChainableTypeChecker;
//^^^^                                   variable.other.readwrite.js
//    ^                                  punctuation.type.flowtype
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  func: ReactPropsChainableTypeChecker;
//^^^^                                   variable.other.readwrite.js
//    ^                                  punctuation.type.flowtype
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  number: ReactPropsChainableTypeChecker;
//^^^^^^                                   variable.other.readwrite.js
//      ^                                  punctuation.type.flowtype
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  object: ReactPropsChainableTypeChecker;
//^^^^^^                                   variable.other.readwrite.js
//      ^                                  punctuation.type.flowtype
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  string: ReactPropsChainableTypeChecker;
//^^^^^^                                   variable.other.readwrite.js
//      ^                                  punctuation.type.flowtype
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype

  any: ReactPropsChainableTypeChecker;
//^^^                                   variable.other.readwrite.js
//   ^                                  punctuation.type.flowtype
//     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  arrayOf: (typeChecker: ReactPropsCheckType) => ReactPropsChainableTypeChecker;
//^^^^^^^   ^^^^^^^^^^^                                                           variable.other.readwrite.js
//       ^             ^                                                          punctuation.type.flowtype
//         ^                                                                      punctuation.definition.parameters.begin.js
//                       ^^^^^^^^^^^^^^^^^^^     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
//                                          ^                                     punctuation.definition.parameters.end.js
//                                            ^^                                  storage.type.function.arrow.js
  element: ReactPropsChainableTypeChecker;
//^^^^^^^                                   variable.other.readwrite.js
//       ^                                  punctuation.type.flowtype
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  instanceOf: (expectedClass: any) => ReactPropsChainableTypeChecker;
//^^^^^^^^^^   ^^^^^^^^^^^^^                                           variable.other.readwrite.js
//          ^               ^                                          punctuation.type.flowtype
//            ^                                                        punctuation.definition.parameters.begin.js
//                            ^^^                                      support.type.builtin.primitive.flowtype
//                               ^                                     punctuation.definition.parameters.end.js
//                                 ^^                                  storage.type.function.arrow.js
//                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  node: ReactPropsChainableTypeChecker;
//^^^^                                   variable.other.readwrite.js
//    ^                                  punctuation.type.flowtype
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  objectOf: (typeChecker: ReactPropsCheckType) => ReactPropsChainableTypeChecker;
//^^^^^^^^   ^^^^^^^^^^^                                                           variable.other.readwrite.js
//        ^             ^                                                          punctuation.type.flowtype
//          ^                                                                      punctuation.definition.parameters.begin.js
//                        ^^^^^^^^^^^^^^^^^^^     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
//                                           ^                                     punctuation.definition.parameters.end.js
//                                             ^^                                  storage.type.function.arrow.js
  oneOf: (expectedValues: Array<any>) => ReactPropsChainableTypeChecker;
//^^^^^   ^^^^^^^^^^^^^^                                                  variable.other.readwrite.js
//     ^                ^                                                 punctuation.type.flowtype
//       ^                                                                punctuation.definition.parameters.begin.js
//                        ^^^^^                                           support.type.builtin.class.flowtype
//                             ^   ^                                      punctuation.flowtype
//                              ^^^                                       support.type.builtin.primitive.flowtype
//                                  ^                                     punctuation.definition.parameters.end.js
//                                    ^^                                  storage.type.function.arrow.js
//                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
  oneOfType: (arrayOfTypeCheckers: Array<ReactPropsCheckType>) => ReactPropsChainableTypeChecker;
//^^^^^^^^^   ^^^^^^^^^^^^^^^^^^^                                                                  variable.other.readwrite.js
//         ^                     ^                                                                 punctuation.type.flowtype
//           ^                                                                                     punctuation.definition.parameters.begin.js
//                                 ^^^^^                                                           support.type.builtin.class.flowtype
//                                      ^                   ^                                      punctuation.flowtype
//                                       ^^^^^^^^^^^^^^^^^^^      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
//                                                           ^                                     punctuation.definition.parameters.end.js
//                                                             ^^                                  storage.type.function.arrow.js
  shape: (shapeTypes: { [key: string]: ReactPropsCheckType }) => ReactPropsChainableTypeChecker;
//^^^^^   ^^^^^^^^^^     ^^^                                                                      variable.other.readwrite.js
//     ^            ^       ^        ^                                                            punctuation.type.flowtype
//       ^                                                                                        punctuation.definition.parameters.begin.js
//                    ^                                                                           meta.brace.round.open.flowtype
//                      ^                                                                         meta.brace.square.open.flowtype
//                            ^^^^^^                                                              support.type.builtin.primitive.flowtype
//                                  ^                                                             meta.brace.square.end.flowtype
//                                     ^^^^^^^^^^^^^^^^^^^       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   support.type.class.flowtype
//                                                         ^                                      meta.brace.round.close.flowtype
//                                                          ^                                     punctuation.definition.parameters.end.js
//                                                            ^^                                  storage.type.function.arrow.js
}
// <- meta.brace.curly.js

declare module react {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                 support.type.declare.flowtype
//      ^^^^^^          support.type.object.module.js
//             ^^^^^    variable.other.readwrite.js
//                   ^  meta.group.braces.curly
//                   ^  meta.brace.curly.js
  declare var Children: any;
//^^^^^^^ ^^^ ^^^^^^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                     support.type.declare.flowtype
//        ^^^                 storage.type.var.js
//            ^^^^^^^^        variable.other.readwrite.js
//                    ^       punctuation.type.flowtype
//                      ^^^   support.type.builtin.primitive.flowtype
//                         ^  punctuation.terminator.statement.js
  declare var DOM: any;
//^^^^^^^ ^^^ ^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                support.type.declare.flowtype
//        ^^^            storage.type.var.js
//            ^^^        variable.other.readwrite.js
//               ^       punctuation.type.flowtype
//                 ^^^   support.type.builtin.primitive.flowtype
//                    ^  punctuation.terminator.statement.js
  declare var PropTypes: ReactPropTypes;
//^^^^^^^ ^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^^^  meta.group.braces.curly
//^^^^^^^                                 support.type.declare.flowtype
//        ^^^                             storage.type.var.js
//            ^^^^^^^^^                   variable.other.readwrite.js
//                     ^                  punctuation.type.flowtype
//                       ^^^^^^^^^^^^^^   support.type.class.flowtype
//                                     ^  punctuation.terminator.statement.js
  declare var version: string;
//^^^^^^^ ^^^ ^^^^^^^^ ^^^^^^^  meta.group.braces.curly
//^^^^^^^                       support.type.declare.flowtype
//        ^^^                   storage.type.var.js
//            ^^^^^^^           variable.other.readwrite.js
//                   ^          punctuation.type.flowtype
//                     ^^^^^^   support.type.builtin.primitive.flowtype
//                           ^  punctuation.terminator.statement.js

  declare function initializeTouchEvents(shouldUseTouch: boolean): void;
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^ ^^^^^  meta.group.braces.curly
//^^^^^^^                                                                 support.type.declare.flowtype
//        ^^^^^^^^                                                        storage.type.function.js
//                 ^^^^^^^^^^^^^^^^^^^^^                                  entity.name.function.js
//                                      ^                                 punctuation.definition.parameters.begin.js
//                                       ^^^^^^^^^^^^^^                   variable.other.readwrite.js
//                                                     ^         ^        punctuation.type.flowtype
//                                                       ^^^^^^^   ^^^^   support.type.builtin.primitive.flowtype
//                                                              ^         punctuation.definition.parameters.end.js

  // compiler magic
//^^ ^^^^^^^^ ^^^^^  meta.group.braces.curly
//^^ ^^^^^^^^ ^^^^^  comment.line.double-slash.js
//^^                 punctuation.definition.comment.js
  declare function createClass(spec: any): ReactClass<any, any, any>;
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^^  meta.group.braces.curly
//^^^^^^^                                                              support.type.declare.flowtype
//        ^^^^^^^^                                                     storage.type.function.js
//                 ^^^^^^^^^^^                                         entity.name.function.js
//                            ^                                        punctuation.definition.parameters.begin.js
//                             ^^^^                                    variable.other.readwrite.js
//                                 ^     ^                             punctuation.type.flowtype
//                                   ^^^              ^^^  ^^^  ^^^    support.type.builtin.primitive.flowtype
//                                      ^                              punctuation.definition.parameters.end.js
//                                         ^^^^^^^^^^                  support.type.class.flowtype
//                                                   ^             ^   punctutation.flowtype
//                                                       ^    ^        punctuation.type.separator.flowtype

  /**
//^^^  meta.group.braces.curly
//^^^  comment.block.documentation.js
//^^^  punctuation.definition.comment.js
   * Methods that take an `attributes` argument of type A (= Attributes),
// ^ ^^^^^^^ ^^^^ ^^^^ ^^ ^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^ ^ ^^ ^^^^^^^^^^^^  meta.group.braces.curly
// ^ ^^^^^^^ ^^^^ ^^^^ ^^ ^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^ ^ ^^ ^^^^^^^^^^^^  comment.block.documentation.js
   * describing objects whose properties must cover (at least) the difference
// ^ ^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^^ ^^^^^ ^^^ ^^^^^^ ^^^ ^^^^^^^^^^  meta.group.braces.curly
// ^ ^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^^ ^^^^^ ^^^ ^^^^^^ ^^^ ^^^^^^^^^^  comment.block.documentation.js
   * between the properties in P (Props) and the properties in D
// ^ ^^^^^^^ ^^^ ^^^^^^^^^^ ^^ ^ ^^^^^^^ ^^^ ^^^ ^^^^^^^^^^ ^^ ^  meta.group.braces.curly
// ^ ^^^^^^^ ^^^ ^^^^^^^^^^ ^^ ^ ^^^^^^^ ^^^ ^^^ ^^^^^^^^^^ ^^ ^  comment.block.documentation.js
   * (DefaultProps). This is intended to model what happens at run time: the
// ^ ^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^^^ ^^ ^^^^^ ^^^^ ^^^^^^^ ^^ ^^^ ^^^^^ ^^^  meta.group.braces.curly
// ^ ^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^^^ ^^ ^^^^^ ^^^^ ^^^^^^^ ^^ ^^^ ^^^^^ ^^^  comment.block.documentation.js
   * attributes are merged with the default props to obtain the props of a
// ^ ^^^^^^^^^^ ^^^ ^^^^^^ ^^^^ ^^^ ^^^^^^^ ^^^^^ ^^ ^^^^^^ ^^^ ^^^^^ ^^ ^  meta.group.braces.curly
// ^ ^^^^^^^^^^ ^^^ ^^^^^^ ^^^^ ^^^ ^^^^^^^ ^^^^^ ^^ ^^^^^^ ^^^ ^^^^^ ^^ ^  comment.block.documentation.js
   * ReactElement / ReactComponent instance.
// ^ ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^^^^^^^^  meta.group.braces.curly
// ^ ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^^^^^^^^  comment.block.documentation.js
   */
// ^^  meta.group.braces.curly
// ^^  comment.block.documentation.js
// ^^  punctuation.definition.comment.js
  declare function cloneElement<D, P, S, A: $Diff<P, D>> (
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^ ^^ ^^ ^^ ^^^^^^^^ ^^^ ^  meta.group.braces.curly
//^^^^^^^                                                   support.type.declare.flowtype
//        ^^^^^^^^                                          storage.type.function.js
//                 ^^^^^^^^^^^^                             entity.name.function.js
//                             ^                 ^    ^^    punctutation.flowtype
//                              ^  ^  ^  ^  ^^^^^ ^  ^      support.type.class.flowtype
//                               ^  ^  ^  ^        ^        punctuation.type.separator.flowtype
//                                                       ^  punctuation.definition.parameters.begin.js
    element: ReactElement<D, P, S>,
//  ^^^^^^^^ ^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//  ^^^^^^^                          variable.other.readwrite.js
//         ^                         punctuation.type.flowtype
//           ^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                       ^       ^   punctutation.flowtype
//                         ^  ^      punctuation.type.separator.flowtype
//                                ^  meta.delimiter.comma.js
    attributes: A,
//  ^^^^^^^^^^^ ^^  meta.group.braces.curly
//  ^^^^^^^^^^      variable.other.readwrite.js
//            ^     punctuation.type.flowtype
//              ^   support.type.class.flowtype
//               ^  meta.delimiter.comma.js
    children?: any
//  ^^^^^^^^^^ ^^^  meta.group.braces.curly
//  ^^^^^^^^        variable.other.readwrite.js
//          ^       keyword.operator.optional.parameter.flowtype
//           ^      punctuation.type.flowtype
//             ^^^  support.type.builtin.primitive.flowtype
  ): ReactElement<D, P, S>;
//^^ ^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^                          punctuation.definition.parameters.end.js
// ^                         punctuation.type.flowtype
//   ^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//               ^       ^   punctutation.flowtype
//                 ^  ^      punctuation.type.separator.flowtype

  // TODO: React DOM elements
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  meta.group.braces.curly
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  comment.line.double-slash.js
//^^                           punctuation.definition.comment.js
  declare function createElement<D, P, S, A: $Diff<P, D>>(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^ ^^ ^^ ^^ ^^^^^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                                                   support.type.declare.flowtype
//        ^^^^^^^^                                          storage.type.function.js
//                 ^^^^^^^^^^^^^                            entity.name.function.js
//                              ^                 ^    ^^   punctutation.flowtype
//                               ^  ^  ^  ^  ^^^^^ ^  ^     support.type.class.flowtype
//                                ^  ^  ^  ^        ^       punctuation.type.separator.flowtype
//                                                       ^  punctuation.definition.parameters.begin.js
    name: ReactClass<D, P, S>,
//  ^^^^^ ^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//  ^^^^                        variable.other.readwrite.js
//      ^                       punctuation.type.flowtype
//        ^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                  ^       ^   punctutation.flowtype
//                    ^  ^      punctuation.type.separator.flowtype
//                           ^  meta.delimiter.comma.js
    attributes: A,
//  ^^^^^^^^^^^ ^^  meta.group.braces.curly
//  ^^^^^^^^^^      variable.other.readwrite.js
//            ^     punctuation.type.flowtype
//              ^   support.type.class.flowtype
//               ^  meta.delimiter.comma.js
    children?: any
//  ^^^^^^^^^^ ^^^  meta.group.braces.curly
//  ^^^^^^^^        variable.other.readwrite.js
//          ^       keyword.operator.optional.parameter.flowtype
//           ^      punctuation.type.flowtype
//             ^^^  support.type.builtin.primitive.flowtype
  ): ReactElement<D, P, S>;
//^^ ^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^                          punctuation.definition.parameters.end.js
// ^                         punctuation.type.flowtype
//   ^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//               ^       ^   punctutation.flowtype
//                 ^  ^      punctuation.type.separator.flowtype

  // TODO: React DOM elements
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  meta.group.braces.curly
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  comment.line.double-slash.js
//^^                           punctuation.definition.comment.js
  declare function createFactory<D, P, S, A: $Diff<P, D>>(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^ ^^ ^^ ^^ ^^^^^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                                                   support.type.declare.flowtype
//        ^^^^^^^^                                          storage.type.function.js
//                 ^^^^^^^^^^^^^                            entity.name.function.js
//                              ^                 ^    ^^   punctutation.flowtype
//                               ^  ^  ^  ^  ^^^^^ ^  ^     support.type.class.flowtype
//                                ^  ^  ^  ^        ^       punctuation.type.separator.flowtype
//                                                       ^  punctuation.definition.parameters.begin.js
    name: ReactClass<D, P, S>
//  ^^^^^ ^^^^^^^^^^^^^ ^^ ^^  meta.group.braces.curly
//  ^^^^                       variable.other.readwrite.js
//      ^                      punctuation.type.flowtype
//        ^^^^^^^^^^ ^  ^  ^   support.type.class.flowtype
//                  ^       ^  punctutation.flowtype
//                    ^  ^     punctuation.type.separator.flowtype
  ): (attributes: A, children?: any) => ReactElement<D, P, S>;
//^^ ^^^^^^^^^^^^ ^^ ^^^^^^^^^^ ^^^^ ^^ ^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^                                ^                            punctuation.definition.parameters.end.js
// ^            ^             ^                                 punctuation.type.flowtype
//   ^                                                          punctuation.definition.parameters.begin.js
//    ^^^^^^^^^^     ^^^^^^^^                                   variable.other.readwrite.js
//                ^                     ^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                 ^                                            meta.delimiter.comma.js
//                           ^                                  keyword.operator.optional.parameter.flowtype
//                              ^^^                             support.type.builtin.primitive.flowtype
//                                   ^^                         storage.type.function.arrow.js
//                                                  ^       ^   punctutation.flowtype
//                                                    ^  ^      punctuation.type.separator.flowtype

  // TODO: React DOM elements
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  meta.group.braces.curly
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  comment.line.double-slash.js
//^^                           punctuation.definition.comment.js
  declare function constructAndRenderComponent<D, P, S, A: $Diff<P, D>>(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^ ^^ ^^^^^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                                                                 support.type.declare.flowtype
//        ^^^^^^^^                                                        storage.type.function.js
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^                            entity.name.function.js
//                                            ^                 ^    ^^   punctutation.flowtype
//                                             ^  ^  ^  ^  ^^^^^ ^  ^     support.type.class.flowtype
//                                              ^  ^  ^  ^        ^       punctuation.type.separator.flowtype
//                                                                     ^  punctuation.definition.parameters.begin.js
    name: ReactClass<D, P, S>,
//  ^^^^^ ^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//  ^^^^                        variable.other.readwrite.js
//      ^                       punctuation.type.flowtype
//        ^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                  ^       ^   punctutation.flowtype
//                    ^  ^      punctuation.type.separator.flowtype
//                           ^  meta.delimiter.comma.js
    attributes: A,
//  ^^^^^^^^^^^ ^^  meta.group.braces.curly
//  ^^^^^^^^^^      variable.other.readwrite.js
//            ^     punctuation.type.flowtype
//              ^   support.type.class.flowtype
//               ^  meta.delimiter.comma.js
    container: any
//  ^^^^^^^^^^ ^^^  meta.group.braces.curly
//  ^^^^^^^^^       variable.other.readwrite.js
//           ^      punctuation.type.flowtype
//             ^^^  support.type.builtin.primitive.flowtype
  ): ReactComponent<D, P, S>;
//^^ ^^^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^                            punctuation.definition.parameters.end.js
// ^                           punctuation.type.flowtype
//   ^^^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                 ^       ^   punctutation.flowtype
//                   ^  ^      punctuation.type.separator.flowtype

  // TODO: React DOM elements
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  meta.group.braces.curly
//^^ ^^^^^ ^^^^^ ^^^ ^^^^^^^^  comment.line.double-slash.js
//^^                           punctuation.definition.comment.js
  declare function constructAndRenderComponentByID<D, P, S, A: $Diff<P, D>>(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^ ^^ ^^^^^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                                                                     support.type.declare.flowtype
//        ^^^^^^^^                                                            storage.type.function.js
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                            entity.name.function.js
//                                                ^                 ^    ^^   punctutation.flowtype
//                                                 ^  ^  ^  ^  ^^^^^ ^  ^     support.type.class.flowtype
//                                                  ^  ^  ^  ^        ^       punctuation.type.separator.flowtype
//                                                                         ^  punctuation.definition.parameters.begin.js
    name: ReactClass<D, P, S>,
//  ^^^^^ ^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//  ^^^^                        variable.other.readwrite.js
//      ^                       punctuation.type.flowtype
//        ^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                  ^       ^   punctutation.flowtype
//                    ^  ^      punctuation.type.separator.flowtype
//                           ^  meta.delimiter.comma.js
    attributes: A,
//  ^^^^^^^^^^^ ^^  meta.group.braces.curly
//  ^^^^^^^^^^      variable.other.readwrite.js
//            ^     punctuation.type.flowtype
//              ^   support.type.class.flowtype
//               ^  meta.delimiter.comma.js
    id: string
//  ^^^ ^^^^^^  meta.group.braces.curly
//  ^^          variable.other.readwrite.js
//    ^         punctuation.type.flowtype
//      ^^^^^^  support.type.builtin.primitive.flowtype
  ): ReactComponent<D, P, S>;
//^^ ^^^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^                            punctuation.definition.parameters.end.js
// ^                           punctuation.type.flowtype
//   ^^^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                 ^       ^   punctutation.flowtype
//                   ^  ^      punctuation.type.separator.flowtype

  declare function findDOMNode(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^  meta.group.braces.curly
//^^^^^^^                        support.type.declare.flowtype
//        ^^^^^^^^               storage.type.function.js
//                 ^^^^^^^^^^^   entity.name.function.js
//                            ^  punctuation.definition.parameters.begin.js
    object: ReactComponent<any, any, any> | HTMLElement
//  ^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^ ^^^^ ^ ^^^^^^^^^^^  meta.group.braces.curly
//  ^^^^^^                                               variable.other.readwrite.js
//        ^                                              punctuation.type.flowtype
//          ^^^^^^^^^^^^^^                  ^^^^^^^^^^^  support.type.class.flowtype
//                        ^             ^                punctutation.flowtype
//                         ^^^  ^^^  ^^^                 support.type.builtin.primitive.flowtype
//                            ^    ^                     punctuation.type.separator.flowtype
//                                        ^              kewyword.operator.union.flowtype
  ): any;
//^^ ^^^^  meta.group.braces.curly
//^        punctuation.definition.parameters.end.js
// ^       punctuation.type.flowtype
//   ^^^   support.type.builtin.primitive.flowtype

  declare function render<D, P, S>(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^                            support.type.declare.flowtype
//        ^^^^^^^^                   storage.type.function.js
//                 ^^^^^^            entity.name.function.js
//                       ^       ^   punctutation.flowtype
//                        ^  ^  ^    support.type.class.flowtype
//                         ^  ^      punctuation.type.separator.flowtype
//                                ^  punctuation.definition.parameters.begin.js
    element: ReactElement<D, P, S>,
//  ^^^^^^^^ ^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//  ^^^^^^^                          variable.other.readwrite.js
//         ^                         punctuation.type.flowtype
//           ^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                       ^       ^   punctutation.flowtype
//                         ^  ^      punctuation.type.separator.flowtype
//                                ^  meta.delimiter.comma.js
    container: any
//  ^^^^^^^^^^ ^^^  meta.group.braces.curly
//  ^^^^^^^^^       variable.other.readwrite.js
//           ^      punctuation.type.flowtype
//             ^^^  support.type.builtin.primitive.flowtype
  ): ReactComponent<D, P, S>;
//^^ ^^^^^^^^^^^^^^^^^ ^^ ^^^  meta.group.braces.curly
//^                            punctuation.definition.parameters.end.js
// ^                           punctuation.type.flowtype
//   ^^^^^^^^^^^^^^ ^  ^  ^    support.type.class.flowtype
//                 ^       ^   punctutation.flowtype
//                   ^  ^      punctuation.type.separator.flowtype

  declare function renderToString(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^  meta.group.braces.curly
//^^^^^^^                           support.type.declare.flowtype
//        ^^^^^^^^                  storage.type.function.js
//                 ^^^^^^^^^^^^^^   entity.name.function.js
//                               ^  punctuation.definition.parameters.begin.js
    element: ReactElement<any, any, any>
//  ^^^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^ ^^^^  meta.group.braces.curly
//  ^^^^^^^                               variable.other.readwrite.js
//         ^                              punctuation.type.flowtype
//           ^^^^^^^^^^^^                 support.type.class.flowtype
//                       ^             ^  punctutation.flowtype
//                        ^^^  ^^^  ^^^   support.type.builtin.primitive.flowtype
//                           ^    ^       punctuation.type.separator.flowtype
  ): string;
//^^ ^^^^^^^  meta.group.braces.curly
//^           punctuation.definition.parameters.end.js
// ^          punctuation.type.flowtype
//   ^^^^^^   support.type.builtin.primitive.flowtype
  declare function renderToStaticMarkup(
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^  meta.group.braces.curly
//^^^^^^^                                 support.type.declare.flowtype
//        ^^^^^^^^                        storage.type.function.js
//                 ^^^^^^^^^^^^^^^^^^^^   entity.name.function.js
//                                     ^  punctuation.definition.parameters.begin.js
    element: ReactElement<any, any, any>
//  ^^^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^ ^^^^  meta.group.braces.curly
//  ^^^^^^^                               variable.other.readwrite.js
//         ^                              punctuation.type.flowtype
//           ^^^^^^^^^^^^                 support.type.class.flowtype
//                       ^             ^  punctutation.flowtype
//                        ^^^  ^^^  ^^^   support.type.builtin.primitive.flowtype
//                           ^    ^       punctuation.type.separator.flowtype
  ): string;
//^^ ^^^^^^^  meta.group.braces.curly
//^           punctuation.definition.parameters.end.js
// ^          punctuation.type.flowtype
//   ^^^^^^   support.type.builtin.primitive.flowtype

  declare function unmountComponentAtNode(container: any): boolean;
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^  meta.group.braces.curly
//^^^^^^^                                                            support.type.declare.flowtype
//        ^^^^^^^^                                                   storage.type.function.js
//                 ^^^^^^^^^^^^^^^^^^^^^^                            entity.name.function.js
//                                       ^                           punctuation.definition.parameters.begin.js
//                                        ^^^^^^^^^                  variable.other.readwrite.js
//                                                 ^     ^           punctuation.type.flowtype
//                                                   ^^^   ^^^^^^^   support.type.builtin.primitive.flowtype
//                                                      ^            punctuation.definition.parameters.end.js

  declare function isValidElement(element: any): boolean;
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^^^^  meta.group.braces.curly
//^^^^^^^                                                  support.type.declare.flowtype
//        ^^^^^^^^                                         storage.type.function.js
//                 ^^^^^^^^^^^^^^                          entity.name.function.js
//                               ^                         punctuation.definition.parameters.begin.js
//                                ^^^^^^^                  variable.other.readwrite.js
//                                       ^     ^           punctuation.type.flowtype
//                                         ^^^   ^^^^^^^   support.type.builtin.primitive.flowtype
//                                            ^            punctuation.definition.parameters.end.js
  declare function withContext(context: any, callback: () => void): any;
//^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^  meta.group.braces.curly
//^^^^^^^                                                                 support.type.declare.flowtype
//        ^^^^^^^^                                                        storage.type.function.js
//                 ^^^^^^^^^^^                                            entity.name.function.js
//                            ^                        ^                  punctuation.definition.parameters.begin.js
//                             ^^^^^^^       ^^^^^^^^                     variable.other.readwrite.js
//                                    ^              ^            ^       punctuation.type.flowtype
//                                      ^^^                  ^^^^   ^^^   support.type.builtin.primitive.flowtype
//                                         ^                              meta.delimiter.comma.js
//                                                      ^        ^        punctuation.definition.parameters.end.js
//                                                        ^^              storage.type.function.arrow.js

  declare var Component: typeof ReactComponent;
//^^^^^^^ ^^^ ^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^  meta.group.braces.curly
//^^^^^^^                                        support.type.declare.flowtype
//        ^^^                                    storage.type.var.js
//            ^^^^^^^^^                          variable.other.readwrite.js
//                     ^                         punctuation.type.flowtype
//                       ^^^^^^                  keyword.operator.flowtype
//                              ^^^^^^^^^^^^^^   support.type.class.flowtype
//                                            ^  punctuation.terminator.statement.js
  declare var Element: typeof ReactElement;
//^^^^^^^ ^^^ ^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^  meta.group.braces.curly
//^^^^^^^                                    support.type.declare.flowtype
//        ^^^                                storage.type.var.js
//            ^^^^^^^                        variable.other.readwrite.js
//                   ^                       punctuation.type.flowtype
//                     ^^^^^^                keyword.operator.flowtype
//                            ^^^^^^^^^^^^   support.type.class.flowtype
//                                        ^  punctuation.terminator.statement.js
}
// <- meta.group.braces.curly meta.brace.curly.js

// TODO Delete this once https://github.com/facebook/react/pull/3031 lands
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^ ^^^^^^ ^^^^ ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^  comment.line.double-slash.js
// and "react" becomes the standard name for this module
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^ ^^^^^^^ ^^^^^^^ ^^^ ^^^^^^^^ ^^^^ ^^^ ^^^^ ^^^^^^  comment.line.double-slash.js
declare module React {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                 support.type.declare.flowtype
//      ^^^^^^          support.type.object.module.js
//             ^^^^^    variable.other.readwrite.js
//                   ^  meta.group.braces.curly
//                   ^  meta.brace.curly.js
    declare var exports: $Exports<'react'>;
//  ^^^^^^^ ^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^  meta.group.braces.curly
//  ^^^^^^^                                  support.type.declare.flowtype
//          ^^^                              storage.type.var.js
//              ^^^^^^^                      variable.other.readwrite.js
//                     ^                     punctuation.type.flowtype
//                       ^^^^^^^^            support.type.class.flowtype
//                               ^       ^   punctutation.flowtype
//                                ^^^^^^^    string.quoted.single.js
//                                ^          punctuation.definition.string.begin.js
//                                      ^    punctuation.definition.string.end.js
//                                        ^  punctuation.terminator.statement.js
}
// <- meta.group.braces.curly meta.brace.curly.js

declare class SyntheticEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                         support.type.declare.flowtype
//      ^^^^^                   storage.type.class.flowtype
//            ^^^^^^^^^^^^^^    entity.name.class.js
//                           ^  punctuation.section.class.begin.js
    bubbles: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    cancelable: boolean;
//  ^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^            variable.other.readwrite.js
//            ^           punctuation.type.flowtype
//              ^^^^^^^   support.type.builtin.primitive.flowtype
    currentTarget: EventTarget;
//  ^^^^^^^^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^                variable.other.readwrite.js
//               ^               punctuation.type.flowtype
//                 ^^^^^^^^^^^   support.type.class.flowtype
    defaultPrevented: boolean;
//  ^^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^            variable.other.readwrite.js
//                  ^           punctuation.type.flowtype
//                    ^^^^^^^   support.type.builtin.primitive.flowtype
    eventPhase: number;
//  ^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^           variable.other.readwrite.js
//            ^          punctuation.type.flowtype
//              ^^^^^^   support.type.builtin.primitive.flowtype
    isTrusted: boolean;
//  ^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^            variable.other.readwrite.js
//           ^           punctuation.type.flowtype
//             ^^^^^^^   support.type.builtin.primitive.flowtype
    nativeEvent: Event;
//  ^^^^^^^^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^          variable.other.readwrite.js
//             ^         punctuation.type.flowtype
//               ^^^^^   support.type.class.flowtype
    preventDefault(): void;
//  ^^^^^^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^ ^^^^   meta.function.method.js
//  ^^^^^^^^^^^^^^           entity.name.function.method.js
//                ^          punctuation.definition.parameters.begin.js
//                 ^         punctuation.definition.parameters.end.js
//                  ^        punctuation.type.flowtype
//                    ^^^^   support.type.builtin.primitive.flowtype
    stopPropagation(): void;
//  ^^^^^^^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^ ^^^^   meta.function.method.js
//  ^^^^^^^^^^^^^^^           entity.name.function.method.js
//                 ^          punctuation.definition.parameters.begin.js
//                  ^         punctuation.definition.parameters.end.js
//                   ^        punctuation.type.flowtype
//                     ^^^^   support.type.builtin.primitive.flowtype
    target: EventTarget;
//  ^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^                variable.other.readwrite.js
//        ^               punctuation.type.flowtype
//          ^^^^^^^^^^^   support.type.class.flowtype
    timeStamp: number;
//  ^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^^^           variable.other.readwrite.js
//           ^          punctuation.type.flowtype
//             ^^^^^^   support.type.builtin.primitive.flowtype
    type: string;
//  ^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^           variable.other.readwrite.js
//      ^          punctuation.type.flowtype
//        ^^^^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticClipboardEvent extends SyntheticEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                         support.type.declare.flowtype
//      ^^^^^                                                   storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^    entity.name.class.js
//                                    ^^^^^^^                   storage.type.extends.flowtype
//                                                           ^  punctuation.section.class.begin.js
    clipboardData: any;
//  ^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^        variable.other.readwrite.js
//               ^       punctuation.type.flowtype
//                 ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticCompositionEvent extends SyntheticEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                           support.type.declare.flowtype
//      ^^^^^                                                     storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^    entity.name.class.js
//                                      ^^^^^^^                   storage.type.extends.flowtype
//                                                             ^  punctuation.section.class.begin.js
    data: any;
//  ^^^^^ ^^^^  meta.class.body.js
//  ^^^^        variable.other.readwrite.js
//      ^       punctuation.type.flowtype
//        ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticInputEvent extends SyntheticEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                     support.type.declare.flowtype
//      ^^^^^                                               storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^    entity.name.class.js
//                                ^^^^^^^                   storage.type.extends.flowtype
//                                                       ^  punctuation.section.class.begin.js
    data: any;
//  ^^^^^ ^^^^  meta.class.body.js
//  ^^^^        variable.other.readwrite.js
//      ^       punctuation.type.flowtype
//        ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticUIEvent extends SyntheticEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                  support.type.declare.flowtype
//      ^^^^^                                            storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^    entity.name.class.js
//                             ^^^^^^^                   storage.type.extends.flowtype
//                                                    ^  punctuation.section.class.begin.js
    detail: number;
//  ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
    view: any;
//  ^^^^^ ^^^^  meta.class.body.js
//  ^^^^        variable.other.readwrite.js
//      ^       punctuation.type.flowtype
//        ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticFocusEvent extends SyntheticUIEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                       support.type.declare.flowtype
//      ^^^^^                                                 storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^^^    entity.name.class.js
//                                ^^^^^^^                     storage.type.extends.flowtype
//                                                         ^  punctuation.section.class.begin.js
    relatedTarget: EventTarget;
//  ^^^^^^^^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^                variable.other.readwrite.js
//               ^               punctuation.type.flowtype
//                 ^^^^^^^^^^^   support.type.class.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticKeyboardEvent extends SyntheticUIEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                          support.type.declare.flowtype
//      ^^^^^                                                    storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^^^    entity.name.class.js
//                                   ^^^^^^^                     storage.type.extends.flowtype
//                                                            ^  punctuation.section.class.begin.js
    altKey: boolean;
//  ^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^            variable.other.readwrite.js
//        ^           punctuation.type.flowtype
//          ^^^^^^^   support.type.builtin.primitive.flowtype
    charCode: number;
//  ^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^^           variable.other.readwrite.js
//          ^          punctuation.type.flowtype
//            ^^^^^^   support.type.builtin.primitive.flowtype
    ctrlKey: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    getModifierState: any;
//  ^^^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^        variable.other.readwrite.js
//                  ^       punctuation.type.flowtype
//                    ^^^   support.type.builtin.primitive.flowtype
    key: string;
//  ^^^^ ^^^^^^^  meta.class.body.js
//  ^^^           variable.other.readwrite.js
//     ^          punctuation.type.flowtype
//       ^^^^^^   support.type.builtin.primitive.flowtype
    keyCode: number;
//  ^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^           variable.other.readwrite.js
//         ^          punctuation.type.flowtype
//           ^^^^^^   support.type.builtin.primitive.flowtype
    locale: string;
//  ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
    location: number;
//  ^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^^           variable.other.readwrite.js
//          ^          punctuation.type.flowtype
//            ^^^^^^   support.type.builtin.primitive.flowtype
    metaKey: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    repeat: boolean;
//  ^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^            variable.other.readwrite.js
//        ^           punctuation.type.flowtype
//          ^^^^^^^   support.type.builtin.primitive.flowtype
    shiftKey: boolean;
//  ^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^            variable.other.readwrite.js
//          ^           punctuation.type.flowtype
//            ^^^^^^^   support.type.builtin.primitive.flowtype
    which: number;
//  ^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^           variable.other.readwrite.js
//       ^          punctuation.type.flowtype
//         ^^^^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticMouseEvent extends SyntheticUIEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                       support.type.declare.flowtype
//      ^^^^^                                                 storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^^^    entity.name.class.js
//                                ^^^^^^^                     storage.type.extends.flowtype
//                                                         ^  punctuation.section.class.begin.js
    altKey: boolean;
//  ^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^            variable.other.readwrite.js
//        ^           punctuation.type.flowtype
//          ^^^^^^^   support.type.builtin.primitive.flowtype
    button: number;
//  ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
    buttons: number;
//  ^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^           variable.other.readwrite.js
//         ^          punctuation.type.flowtype
//           ^^^^^^   support.type.builtin.primitive.flowtype
    clientX: number;
//  ^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^           variable.other.readwrite.js
//         ^          punctuation.type.flowtype
//           ^^^^^^   support.type.builtin.primitive.flowtype
    clientY: number;
//  ^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^           variable.other.readwrite.js
//         ^          punctuation.type.flowtype
//           ^^^^^^   support.type.builtin.primitive.flowtype
    ctrlKey: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    getModifierState: any;
//  ^^^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^        variable.other.readwrite.js
//                  ^       punctuation.type.flowtype
//                    ^^^   support.type.builtin.primitive.flowtype
    metaKey: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    pageX: number;
//  ^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^           variable.other.readwrite.js
//       ^          punctuation.type.flowtype
//         ^^^^^^   support.type.builtin.primitive.flowtype
    pageY: number;
//  ^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^           variable.other.readwrite.js
//       ^          punctuation.type.flowtype
//         ^^^^^^   support.type.builtin.primitive.flowtype
    relatedTarget: EventTarget;
//  ^^^^^^^^^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^                variable.other.readwrite.js
//               ^               punctuation.type.flowtype
//                 ^^^^^^^^^^^   support.type.class.flowtype
    screenX: number;
//  ^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^           variable.other.readwrite.js
//         ^          punctuation.type.flowtype
//           ^^^^^^   support.type.builtin.primitive.flowtype
    screenY: number;
//  ^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^           variable.other.readwrite.js
//         ^          punctuation.type.flowtype
//           ^^^^^^   support.type.builtin.primitive.flowtype
    shiftKey: boolean;
//  ^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^            variable.other.readwrite.js
//          ^           punctuation.type.flowtype
//            ^^^^^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticDragEvent extends SyntheticMouseEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                         support.type.declare.flowtype
//      ^^^^^                                                   storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^^^^^^    entity.name.class.js
//                               ^^^^^^^                        storage.type.extends.flowtype
//                                                           ^  punctuation.section.class.begin.js
    dataTransfer: any;
//  ^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^        variable.other.readwrite.js
//              ^       punctuation.type.flowtype
//                ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticWheelEvent extends SyntheticMouseEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                          support.type.declare.flowtype
//      ^^^^^                                                    storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^^^^^^    entity.name.class.js
//                                ^^^^^^^                        storage.type.extends.flowtype
//                                                            ^  punctuation.section.class.begin.js
    deltaMode: number;
//  ^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^^^^           variable.other.readwrite.js
//           ^          punctuation.type.flowtype
//             ^^^^^^   support.type.builtin.primitive.flowtype
    deltaX: number;
//  ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
    deltaY: number;
//  ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
    deltaZ: number;
//  ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^^^^           variable.other.readwrite.js
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

declare class SyntheticTouchEvent extends SyntheticUIEvent {
// <- support.type.declare.flowtype
 // <- support.type.declare.flowtype
//^^^^^                                                       support.type.declare.flowtype
//      ^^^^^                                                 storage.type.class.flowtype
//            ^^^^^^^^^^^^^^^^^^^         ^^^^^^^^^^^^^^^^    entity.name.class.js
//                                ^^^^^^^                     storage.type.extends.flowtype
//                                                         ^  punctuation.section.class.begin.js
    altKey: boolean;
//  ^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^            variable.other.readwrite.js
//        ^           punctuation.type.flowtype
//          ^^^^^^^   support.type.builtin.primitive.flowtype
    changedTouches: any;
//  ^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^        variable.other.readwrite.js
//                ^       punctuation.type.flowtype
//                  ^^^   support.type.builtin.primitive.flowtype
    ctrlKey: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    getModifierState: any;
//  ^^^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^        variable.other.readwrite.js
//                  ^       punctuation.type.flowtype
//                    ^^^   support.type.builtin.primitive.flowtype
    metaKey: boolean;
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^            variable.other.readwrite.js
//         ^           punctuation.type.flowtype
//           ^^^^^^^   support.type.builtin.primitive.flowtype
    shiftKey: boolean;
//  ^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^            variable.other.readwrite.js
//          ^           punctuation.type.flowtype
//            ^^^^^^^   support.type.builtin.primitive.flowtype
    targetTouches: any;
//  ^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^        variable.other.readwrite.js
//               ^       punctuation.type.flowtype
//                 ^^^   support.type.builtin.primitive.flowtype
    touches: any;
//  ^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^        variable.other.readwrite.js
//         ^       punctuation.type.flowtype
//           ^^^   support.type.builtin.primitive.flowtype
}
// <- punctuation.section.class.end.js

// >> only:source.js.jsx
