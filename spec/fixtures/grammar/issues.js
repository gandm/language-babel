// SYNTAX TEST "source.js.jsx"

// ISSUE #184

meth({
  'first-prop'({arg1, arg2}) {
//^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^      meta.function-call.with-arguments.js
//^^^^^^^^^^^^^^^^^^^ ^^^^^^        meta.function.method.js
//^^^^^^^^^^^^                      entity.name.function.method.js
//            ^                     punctuation.definition.parameters.begin.js
//             ^          ^  ^      meta.brace.curly.js
//              ^^^^  ^^^^          variable.other.readwrite.js
//                  ^               meta.delimiter.comma.js
//                         ^        punctuation.definition.parameters.end.js
  },
  'second-prop'({arg1, arg2}) {
//^^^^^^^^^^^^^^^^^^^^ ^^^^^^ ^     meta.function-call.with-arguments.js
//^^^^^^^^^^^^^^^^^^^^ ^^^^^^       meta.function.method.js
//^^^^^^^^^^^^^                     entity.name.function.method.js
//             ^                    punctuation.definition.parameters.begin.js
//              ^          ^  ^     meta.brace.curly.js
//               ^^^^  ^^^^         variable.other.readwrite.js
//                   ^              meta.delimiter.comma.js
//                          ^       punctuation.definition.parameters.end.js
 }
})

// ISSUE #181

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

class A {
  // These will be converted to methods
  if () {}; for () {}; switch () {}
//^^ ^^ ^^^ ^^^ ^^ ^^^ ^^^^^^ ^^ ^^  meta.class.body.js
//^^ ^^     ^^^ ^^     ^^^^^^ ^^     meta.function.method.js
//^^        ^^^        ^^^^^^        entity.name.function.method.js
//   ^          ^             ^      punctuation.definition.parameters.begin.js
//    ^          ^             ^     punctuation.definition.parameters.end.js
//      ^^         ^^            ^^  meta.brace.curly.js
//        ^          ^               punctuation.terminator.statement.js
}


function a(state ) {
    // These will be converted to conditional/loops...
    if (a) {}; for (a;;) {}; switch (a) {}
//  ^^                                      keyword.control.conditional.js
//     ^ ^         ^   ^            ^ ^     meta.brace.round.js
//      ^           ^                ^      variable.other.readwrite.js
//         ^^            ^^             ^^  meta.brace.curly.js
//           ^       ^^    ^                punctuation.terminator.statement.js
//             ^^^ ^^^^^                    meta.for.js
//             ^^^                          keyword.control.loop.js
//                           ^^^^^^ ^^^ ^^  meta.switch.js
//                           ^^^^^^         keyword.control.switch.js
    switch (type) {
         case a: {
           for ( let item in payload )
//         ^^^ ^ ^^^ ^^^^ ^^ ^^^^^^^ ^  meta.switch.js
//         ^^^ ^ ^^^ ^^^^ ^^ ^^^^^^^ ^  meta.for.js
//         ^^^                          keyword.control.loop.js
//             ^                     ^  meta.brace.round.js
//               ^^^                    storage.type.js
//                   ^^^^    ^^^^^^^    variable.other.readwrite.js
//                        ^^            keyword.operator.js
                state.items = setItem( state.items, resolveRelations({ ...item }) )
            return state
        }
    }
}

// ISSUE #178

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
//^^ ^^^ ^^ ^^ ^^^^^^^ ^^ ^^ ^^^ ^^^^ ^^^^^^^ ^ ^^^^^^   meta.class.body.js
//^^ ^^^                                                 meta.function.method.js
//^^                                                     entity.name.function.method.js
//   ^                                                   punctuation.definition.parameters.begin.js
//    ^                                                  variable.other.readwrite.js
//     ^                                                 punctuation.definition.parameters.end.js
//       ^^                                              meta.brace.curly.js
//          ^^ ^^^^^^^ ^^ ^^ ^^^ ^^^^ ^^^^^^^ ^ ^^^^^^   comment.line.double-slash.js
//          ^^                                           punctuation.definition.comment.js
  method<T>(a: string): string { // This is a method
//^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^ ^ ^^ ^^^^ ^^ ^ ^^^^^^  meta.class.body.js
//^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^                        meta.function.method.js
//^^^^^^                                              entity.name.function.method.js
//      ^ ^                                           punctutation.flowtype
//       ^                                            support.type.class.flowtype
//         ^                                          punctuation.definition.parameters.begin.js
//          ^                                         variable.other.readwrite.js
//           ^        ^                               punctuation.type.flowtype
//             ^^^^^^   ^^^^^^                        support.type.builtin.primitive.flowtype
//                   ^                                punctuation.definition.parameters.end.js
//                             ^                      meta.brace.curly.js
//                               ^^ ^^^^ ^^ ^ ^^^^^^  comment.line.double-slash.js
//                               ^^                   punctuation.definition.comment.js
    if (a) {} // and this is a conditional keyword
//  ^^ ^^^ ^^ ^^ ^^^ ^^^^ ^^ ^ ^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^                                              keyword.control.conditional.js
//     ^ ^                                          meta.brace.round.js
//      ^                                           variable.other.readwrite.js
//         ^^                                       meta.brace.curly.js
//            ^^ ^^^ ^^^^ ^^ ^ ^^^^^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//            ^^                                    punctuation.definition.comment.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

// ISSUE #174

<button onClick={disabled ? false : function () {}}>Click me!</button>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^^^ ^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//                                                 ^         ^^      ^  punctuation.definition.tag.jsx
//^^^^^                                                                 entity.name.tag.open.jsx
//      ^^^^^^^                                                         entity.other.attribute-name.jsx
//             ^                                                        keyword.operator.assignment.jsx
//              ^^^^^^^^^ ^ ^^^^^ ^ ^^^^^^^^ ^^ ^^^                     meta.embedded.expression.js
//              ^                                                       punctuation.section.embedded.begin.jsx
//               ^^^^^^^^                                               variable.other.readwrite.js
//                        ^       ^                                     keyword.operator.ternary.js
//                          ^^^^^                                       constant.language.boolean.false.js
//                                  ^^^^^^^^ ^^                         meta.function.js
//                                  ^^^^^^^^                            storage.type.function.js
//                                           ^                          punctuation.definition.parameters.begin.js
//                                            ^                         punctuation.definition.parameters.end.js
//                                              ^^                      meta.brace.curly.js
//                                                ^                     punctuation.section.embedded.end.jsx
//                                                 ^                    JSXStartTagEnd
//                                                           ^^         JSXEndTagStart
//                                                             ^^^^^^   entity.name.tag.close.jsx
<button onClick={disabled ? () => null : () => onClick(val)}>Click me!</button>
// <- meta.tag.jsx punctuation.definition.tag.jsx
 // <- meta.tag.jsx entity.name.tag.open.jsx
//^^^^^ ^^^^^^^^^^^^^^^^^ ^ ^^ ^^ ^^^^ ^ ^^ ^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^  meta.tag.jsx
//                                                          ^         ^^      ^  punctuation.definition.tag.jsx
//^^^^^                                                                          entity.name.tag.open.jsx
//      ^^^^^^^                                                                  entity.other.attribute-name.jsx
//             ^                                                                 keyword.operator.assignment.jsx
//              ^^^^^^^^^ ^ ^^ ^^ ^^^^ ^ ^^ ^^ ^^^^^^^^^^^^^                     meta.embedded.expression.js
//              ^                                                                punctuation.section.embedded.begin.jsx
//               ^^^^^^^^                              ^^^                       variable.other.readwrite.js
//                        ^            ^                                         keyword.operator.ternary.js
//                          ^^ ^^        ^^ ^^                                   meta.function.arrow.js
//                          ^            ^                                       punctuation.definition.parameters.begin.js
//                           ^            ^                                      punctuation.definition.parameters.end.js
//                             ^^           ^^                                   storage.type.function.arrow.js
//                                ^^^^                                           constant.language.null.js
//                                             ^^^^^^^^^^^^                      meta.function-call.with-arguments.js
//                                             ^^^^^^^                           entity.name.function.js
//                                                    ^   ^                      meta.brace.round.js
//                                                         ^                     punctuation.section.embedded.end.jsx
//                                                          ^                    JSXStartTagEnd
//                                                                    ^^         JSXEndTagStart
//                                                                      ^^^^^^   entity.name.tag.close.jsx

// ISSUE: #171
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^^  comment.line.double-slash.js

function getObject() {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^^^    meta.function.js
//^^^^^^                storage.type.function.js
//       ^^^^^^^^^      entity.name.function.js
//                ^     punctuation.definition.parameters.begin.js
//                 ^    punctuation.definition.parameters.end.js
//                   ^  meta.brace.curly.js
  return {
//^^^^^^    keyword.control.flow.js
//       ^  meta.brace.curly.js
    async doStuff() {},
//  ^^^^^ ^^^^^^^^^      meta.function.method.js
//  ^^^^^                storage.type.js
//        ^^^^^^^        entity.name.function.method.js
//               ^       punctuation.definition.parameters.begin.js
//                ^      punctuation.definition.parameters.end.js
//                  ^^   meta.brace.curly.js
//                    ^  meta.delimiter.comma.js
    doDifferent: async function() {}
//  ^^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^     meta.function.json.js
//  ^^^^^^^^^^^                       entity.name.function.js
//             ^                      punctuation.separator.key-value.js
//               ^^^^^                storage.type.js
//                     ^^^^^^^^       storage.type.function.js
//                             ^      punctuation.definition.parameters.begin.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.brace.curly.js
    doElse: async () => {}
//  ^^^^^^^ ^^^^^ ^^ ^^     meta.function.json.arrow.js
//  ^^^^^^                  entity.name.function.js
//        ^                 punctuation.separator.key-value.js
//          ^^^^^           storage.type.js
//                ^         punctuation.definition.parameters.begin.js
//                 ^        punctuation.definition.parameters.end.js
//                   ^^     storage.type.function.arrow.js
//                      ^^  meta.brace.curly.js
  }
//^  meta.brace.curly.js
}
// <- meta.brace.curly.js

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
//  ^     meta.brace.curly.js
//    ^^  comment.line.double-slash.js
//    ^^  punctuation.definition.comment.js
  bar() {} //
//^^^^^ ^^ ^^  meta.function-call.with-arguments.js
//^^^^^        meta.function.method.js
//^^^          entity.name.function.method.js
//   ^         punctuation.definition.parameters.begin.js
//    ^        punctuation.definition.parameters.end.js
//      ^^     meta.brace.curly.js
//         ^^  comment.line.double-slash.js
//         ^^  punctuation.definition.comment.js
})
// <- meta.function-call.with-arguments.js meta.brace.curly.js
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
//                 ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//                 ^^^^^^^^    entity.name.function.js
//                         ^^  meta.group.braces.round.function.arguments.js
const double = td.function()
// <- storage.type.js
 // <- storage.type.js
//^^^                         storage.type.js
//    ^^^^^^                  variable.other.readwrite.js
//           ^                keyword.operator.assignment.js
//             ^^             variable.other.object.js
//               ^            keyword.operator.accessor.js
//                ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//                ^^^^^^^^    entity.name.function.js
//                        ^^  meta.group.braces.round.function.arguments.js
let a = {
// <- storage.type.js
 // <- storage.type.js
//^        storage.type.js
//  ^      variable.other.readwrite.js
//    ^    keyword.operator.assignment.js
//      ^  meta.brace.curly.js
  a: td.function()
//^^                constant.other.object.key.js
//^                 string.unquoted.js
// ^                punctuation.separator.key-value.js
//   ^^             variable.other.object.js
//     ^            keyword.operator.accessor.js
//      ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//      ^^^^^^^^    entity.name.function.js
//              ^^  meta.group.braces.round.function.arguments.js
  b: td.function()
//^^                constant.other.object.key.js
//^                 string.unquoted.js
// ^                punctuation.separator.key-value.js
//   ^^             variable.other.object.js
//     ^            keyword.operator.accessor.js
//      ^^^^^^^^^^  meta.function-call.method.without-arguments.js
//      ^^^^^^^^    entity.name.function.js
//              ^^  meta.group.braces.round.function.arguments.js
}
// <- meta.brace.curly.js
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
//                 ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//                 ^^^^^^^^     entity.name.function.js
//                         ^^   meta.group.braces.round.function.arguments.js
//                           ^  punctuation.terminator.statement.js
const double = td.function();
// <- storage.type.js
 // <- storage.type.js
//^^^                          storage.type.js
//    ^^^^^^                   variable.other.readwrite.js
//           ^                 keyword.operator.assignment.js
//             ^^              variable.other.object.js
//               ^             keyword.operator.accessor.js
//                ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//                ^^^^^^^^     entity.name.function.js
//                        ^^   meta.group.braces.round.function.arguments.js
//                          ^  punctuation.terminator.statement.js
let a = {
// <- storage.type.js
 // <- storage.type.js
//^        storage.type.js
//  ^      variable.other.readwrite.js
//    ^    keyword.operator.assignment.js
//      ^  meta.brace.curly.js
  a: td.function();
//^^                 constant.other.object.key.js
//^                  string.unquoted.js
// ^                 punctuation.separator.key-value.js
//   ^^              variable.other.object.js
//     ^             keyword.operator.accessor.js
//      ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//      ^^^^^^^^     entity.name.function.js
//              ^^   meta.group.braces.round.function.arguments.js
//                ^  punctuation.terminator.statement.js
  b: td.function();
//^^                 constant.other.object.key.js
//^                  string.unquoted.js
// ^                 punctuation.separator.key-value.js
//   ^^              variable.other.object.js
//     ^             keyword.operator.accessor.js
//      ^^^^^^^^^^   meta.function-call.method.without-arguments.js
//      ^^^^^^^^     entity.name.function.js
//              ^^   meta.group.braces.round.function.arguments.js
//                ^  punctuation.terminator.statement.js
}// <- meta.brace.curly.js
// <- meta.brace.curly.js
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
//        ^                        ^  meta.brace.curly.js
//          ^^ ^^ ^^                  meta.function.json.arrow.js
//          ^                         entity.name.function.js
//           ^                        punctuation.separator.key-value.js
//             ^           ^          punctuation.definition.parameters.begin.js
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
//             ^  meta.brace.curly.js
  async get() { return 1 },
//^^^^^ ^^^^^                meta.function.method.js
//^^^^^                      storage.type.js
//      ^^^                  entity.name.function.method.js
//         ^                 punctuation.definition.parameters.begin.js
//          ^                punctuation.definition.parameters.end.js
//            ^          ^   meta.brace.curly.js
//              ^^^^^^       keyword.control.flow.js
//                     ^     constant.numeric.js
//                        ^  meta.delimiter.comma.js
  get a() { return this._a },
//^^^ ^^^                      meta.accessor.js
//^^^                          storage.type.accessor.js
//    ^                        entity.name.accessor.js
//     ^                       punctuation.definition.parameters.begin.js
//      ^                      punctuation.definition.parameters.end.js
//        ^                ^   meta.brace.curly.js
//          ^^^^^^             keyword.control.flow.js
//                 ^^^^        variable.language.this.js
//                     ^       keyword.operator.accessor.js
//                      ^^     meta.property.object.js
//                      ^^     variable.other.property.js
//                          ^  meta.delimiter.comma.js
  set a(v) { this._a = v },
//^^^ ^^^^                   meta.accessor.js
//^^^                        storage.type.accessor.js
//    ^                      entity.name.accessor.js
//     ^                     punctuation.definition.parameters.begin.js
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
// <- meta.brace.curly.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
//^ ^^ ^^^^^^^^^^^^^^^^^^^  comment.line.double-slash.js
//^                         punctuation.definition.comment.js
