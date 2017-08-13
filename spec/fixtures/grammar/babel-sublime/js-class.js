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
//^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^^^^^^^^^^^^^       entity.name.function.method.js
//             ^      punctuation.definition.parameters.begin.js
//             ^^     meta.brace.round.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.brace.curly.js
  *generatorMethod() {}
//^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^                      keyword.generator.asterisk.js
// ^^^^^^^^^^^^^^^       entity.name.function.method.js
//                ^      punctuation.definition.parameters.begin.js
//                ^^     meta.brace.round.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.brace.curly.js
  static staticRegularMethod() {}
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^^^^^^                           storage.modifier.js
//       ^^^^^^^^^^^^^^^^^^^       entity.name.function.method.js
//                          ^      punctuation.definition.parameters.begin.js
//                          ^^     meta.brace.round.js
//                           ^     punctuation.definition.parameters.end.js
//                             ^^  meta.brace.curly.js
  static get staticGetterMethod() {}
//^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^ ^^  meta.accessor.js
//^^^^^^                              storage.modifier.js
//       ^^^                          storage.type.accessor.js
//           ^^^^^^^^^^^^^^^^^^       entity.name.function.accessor.js
//                             ^      punctuation.definition.parameters.begin.js
//                             ^^     meta.brace.round.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.brace.curly.js
  static set staticSetterMethod(arg) {}
//^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.accessor.js
//^^^^^^                                 storage.modifier.js
//       ^^^                             storage.type.accessor.js
//           ^^^^^^^^^^^^^^^^^^          entity.name.function.accessor.js
//                             ^         punctuation.definition.parameters.begin.js
//                             ^   ^     meta.brace.round.js
//                              ^^^      meta.function.parameters.js
//                              ^^^      variable.other.readwrite.js
//                                 ^     punctuation.definition.parameters.end.js
//                                   ^^  meta.brace.curly.js
  static *staticGeneratorMethod() {}
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^^^^^^                              storage.modifier.js
//       ^                            keyword.generator.asterisk.js
//        ^^^^^^^^^^^^^^^^^^^^^       entity.name.function.method.js
//                             ^      punctuation.definition.parameters.begin.js
//                             ^^     meta.brace.round.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.brace.curly.js
  static async staticAsyncMethod() {}
//^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^ ^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^^^^^^                               storage.modifier.js
//       ^^^^^                         storage.type.js
//             ^^^^^^^^^^^^^^^^^       entity.name.function.method.js
//                              ^      punctuation.definition.parameters.begin.js
//                              ^^     meta.brace.round.js
//                               ^     punctuation.definition.parameters.end.js
//                                 ^^  meta.brace.curly.js
  async asyncMethod() {}
//^^^^^ ^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^^^^^^ ^^  meta.function.method.js
//^^^^^                   storage.type.js
//      ^^^^^^^^^^^       entity.name.function.method.js
//                 ^      punctuation.definition.parameters.begin.js
//                 ^^     meta.brace.round.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.brace.curly.js
  [computedMethod()]() {}
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^                ^       meta.brace.square.js
// ^^^^^^^^^^^^^^^^        meta.function-call.without-arguments.js
// ^^^^^^^^^^^^^^          entity.name.function.js
//               ^^ ^^     meta.brace.round.js
//                  ^      punctuation.definition.parameters.begin.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.brace.curly.js
  ["computedString"]() {}
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^                ^       meta.brace.square.js
// ^^^^^^^^^^^^^^^^        string.quoted.double.js
// ^                       punctuation.definition.string.begin.js
//                ^        punctuation.definition.string.end.js
//                  ^      punctuation.definition.parameters.begin.js
//                  ^^     meta.brace.round.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.brace.curly.js
  ["computed" + "String"]() {}
//^^^^^^^^^^^ ^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^ ^ ^^^^^^^^^^^ ^^  meta.function.method.js
//^                     ^       meta.brace.square.js
// ^^^^^^^^^^   ^^^^^^^^        string.quoted.double.js
// ^            ^               punctuation.definition.string.begin.js
//          ^          ^        punctuation.definition.string.end.js
//            ^                 keyword.operator.arithmetic.js
//                       ^      punctuation.definition.parameters.begin.js
//                       ^^     meta.brace.round.js
//                        ^     punctuation.definition.parameters.end.js
//                          ^^  meta.brace.curly.js
  *[Symbol.iterator]() {}
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^ ^^  meta.function.method.js
//^                        keyword.generator.asterisk.js
// ^               ^       meta.brace.square.js
//  ^^^^^^                 support.class.builtin.js
//        ^                keyword.operator.accessor.js
//         ^^^^^^^^        meta.property.object.js
//         ^^^^^^^^        variable.other.property.js
//                  ^      punctuation.definition.parameters.begin.js
//                  ^^     meta.brace.round.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js


// >> only:(source.js.jsx)
