// SYNTAX TEST "source.js.jsx"
class MyClass {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^            meta.class.js
//^^^            storage.type.class.js
//    ^^^^^^^    entity.name.class.js
//            ^  punctuation.section.class.begin.js
  regularMethod() {}
//^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^     meta.function.method.js
//^^^^^^^^^^^^^       entity.name.function.method.js
//             ^      punctuation.definition.parameters.begin.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
  *generatorMethod() {}
//^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^     meta.function.method.js
//^                      keyword.generator.asterisk.js
// ^^^^^^^^^^^^^^^       entity.name.function.method.js
//                ^      punctuation.definition.parameters.begin.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js
  static staticRegularMethod() {}
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                           storage.modifier.js
//       ^^^^^^^^^^^^^^^^^^^^^     meta.function.method.js
//       ^^^^^^^^^^^^^^^^^^^       entity.name.function.method.js
//                          ^      punctuation.definition.parameters.begin.js
//                           ^     punctuation.definition.parameters.end.js
//                             ^^  meta.group.braces.curly
//                             ^^  meta.brace.curly.js
  static get staticGetterMethod() {}
//^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                              storage.modifier.js
//       ^^^ ^^^^^^^^^^^^^^^^^^^^     meta.accessor.js
//       ^^^                          storage.type.accessor.js
//           ^^^^^^^^^^^^^^^^^^       entity.name.accessor.js
//                             ^      punctuation.definition.parameters.begin.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.group.braces.curly
//                                ^^  meta.brace.curly.js
  static set staticSetterMethod(arg) {}
//^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                                 storage.modifier.js
//       ^^^ ^^^^^^^^^^^^^^^^^^^^^^^     meta.accessor.js
//       ^^^                             storage.type.accessor.js
//           ^^^^^^^^^^^^^^^^^^          entity.name.accessor.js
//                             ^         punctuation.definition.parameters.begin.js
//                              ^^^      variable.other.readwrite.js
//                                 ^     punctuation.definition.parameters.end.js
//                                   ^^  meta.group.braces.curly
//                                   ^^  meta.brace.curly.js
  static *staticGeneratorMethod() {}
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                              storage.modifier.js
//       ^^^^^^^^^^^^^^^^^^^^^^^^     meta.function.method.js
//       ^                            keyword.generator.asterisk.js
//        ^^^^^^^^^^^^^^^^^^^^^       entity.name.function.method.js
//                             ^      punctuation.definition.parameters.begin.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.group.braces.curly
//                                ^^  meta.brace.curly.js
  static async staticAsyncMethod() {}
//^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                               storage.modifier.js
//       ^^^^^ ^^^^^^^^^^^^^^^^^^^     meta.function.method.js
//       ^^^^^                         storage.type.js
//             ^^^^^^^^^^^^^^^^^       entity.name.function.method.js
//                              ^      punctuation.definition.parameters.begin.js
//                               ^     punctuation.definition.parameters.end.js
//                                 ^^  meta.group.braces.curly
//                                 ^^  meta.brace.curly.js
  async asyncMethod() {}
//^^^^^ ^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^^^^^^     meta.function.method.js
//^^^^^                   storage.type.js
//      ^^^^^^^^^^^       entity.name.function.method.js
//                 ^      punctuation.definition.parameters.begin.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
  [computedMethod()]() {}
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^     meta.function.method.js
//^                        meta.brace.square.open.flowtype
// ^^^^^^^^^^^^^^^^        meta.function-call.without-arguments.js
// ^^^^^^^^^^^^^^          entity.name.function.js
//               ^  ^      punctuation.definition.parameters.begin.js
//                ^  ^     punctuation.definition.parameters.end.js
//                 ^       meta.brace.square.end.flowtype
//                     ^^  meta.group.braces.curly
//                     ^^  meta.brace.curly.js
  ["computedString"]() {}
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^     meta.function.method.js
//^                        meta.brace.square.open.flowtype
// ^^^^^^^^^^^^^^^^        string.quoted.double.js
// ^                       punctuation.definition.string.begin.js
//                ^        punctuation.definition.string.end.js
//                 ^       meta.brace.square.end.flowtype
//                  ^      punctuation.definition.parameters.begin.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.group.braces.curly
//                     ^^  meta.brace.curly.js
  ["computed" + "String"]() {}
//^^^^^^^^^^^ ^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^ ^ ^^^^^^^^^^^     meta.function.method.js
//^                             meta.brace.square.open.flowtype
// ^^^^^^^^^^   ^^^^^^^^        string.quoted.double.js
// ^            ^               punctuation.definition.string.begin.js
//          ^          ^        punctuation.definition.string.end.js
//            ^                 keyword.operator.arithmetic.js
//                      ^       meta.brace.square.end.flowtype
//                       ^      punctuation.definition.parameters.begin.js
//                        ^     punctuation.definition.parameters.end.js
//                          ^^  meta.group.braces.curly
//                          ^^  meta.brace.curly.js
  *[Symbol.iterator]() {}
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^     meta.function.method.js
//^                        keyword.generator.asterisk.js
// ^                       meta.brace.square.open.flowtype
//  ^^^^^^^^^^^^^^^        meta.property.class.js
//  ^^^^^^                 variable.other.class.js
//        ^                keyword.operator.accessor.js
//         ^^^^^^^^        variable.other.property.static.js
//                 ^       meta.brace.square.end.flowtype
//                  ^      punctuation.definition.parameters.begin.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.group.braces.curly
//                     ^^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

// >> only:source.js.jsx
