// SYNTAX TEST "source.js.jsx"
let Sound = {
// <- storage.type.js
 // <- storage.type.js
//^            storage.type.js
//  ^^^^^      variable.other.readwrite.js
//        ^    keyword.operator.assignment.js
//          ^  meta.group.braces.curly
//          ^  meta.brace.curly.js
  get() {},
//^^^^^ ^^^  meta.group.braces.curly
//^^^^^      meta.function-call.without-arguments.js
//^^^        entity.name.function.js
//   ^       punctuation.definition.parameters.begin.js
//    ^      punctuation.definition.parameters.end.js
//      ^^   meta.brace.curly.js
//        ^  meta.delimiter.comma.js
  get(arg) {},
//^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^^      meta.function-call.with-arguments.js
//^^^           entity.name.function.js
//   ^          punctuation.definition.parameters.begin.js
//    ^^^       variable.other.readwrite.js
//       ^      punctuation.definition.parameters.end.js
//         ^^   meta.brace.curly.js
//           ^  meta.delimiter.comma.js
  set() {},
//^^^^^ ^^^  meta.group.braces.curly
//^^^^^      meta.function-call.without-arguments.js
//^^^        entity.name.function.js
//   ^       punctuation.definition.parameters.begin.js
//    ^      punctuation.definition.parameters.end.js
//      ^^   meta.brace.curly.js
//        ^  meta.delimiter.comma.js
  set(arg) {},
//^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^^      meta.function-call.with-arguments.js
//^^^           entity.name.function.js
//   ^          punctuation.definition.parameters.begin.js
//    ^^^       variable.other.readwrite.js
//       ^      punctuation.definition.parameters.end.js
//         ^^   meta.brace.curly.js
//           ^  meta.delimiter.comma.js
  play() {},
//^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^      meta.function-call.without-arguments.js
//^^^^        entity.name.function.js
//    ^       punctuation.definition.parameters.begin.js
//     ^      punctuation.definition.parameters.end.js
//       ^^   meta.brace.curly.js
//         ^  meta.delimiter.comma.js
  play(arg) {},
//^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^^^      meta.function-call.with-arguments.js
//^^^^           entity.name.function.js
//    ^          punctuation.definition.parameters.begin.js
//     ^^^       variable.other.readwrite.js
//        ^      punctuation.definition.parameters.end.js
//          ^^   meta.brace.curly.js
//            ^  meta.delimiter.comma.js
  'play'() {},
//^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^        string.quoted.single.js
//^             punctuation.definition.string.begin.js
//     ^        punctuation.definition.string.end.js
//      ^^      meta.group.braces.round
//      ^^      meta.brace.round.js
//         ^^   meta.brace.curly.js
//           ^  meta.delimiter.comma.js
  'play'(arg) {},
//^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^           string.quoted.single.js
//^                punctuation.definition.string.begin.js
//     ^           punctuation.definition.string.end.js
//      ^^^^^      meta.group.braces.round
//      ^   ^      meta.brace.round.js
//       ^^^       variable.other.readwrite.js
//            ^^   meta.brace.curly.js
//              ^  meta.delimiter.comma.js
  *play() {},
//^^^^^^^ ^^^  meta.group.braces.curly
//^            keyword.operator.arithmetic.js
// ^^^^^^      meta.function-call.without-arguments.js
// ^^^^        entity.name.function.js
//     ^       punctuation.definition.parameters.begin.js
//      ^      punctuation.definition.parameters.end.js
//        ^^   meta.brace.curly.js
//          ^  meta.delimiter.comma.js
  *play(arg) {},
//^^^^^^^^^^ ^^^  meta.group.braces.curly
//^               keyword.operator.arithmetic.js
// ^^^^^^^^^      meta.function-call.with-arguments.js
// ^^^^           entity.name.function.js
//     ^          punctuation.definition.parameters.begin.js
//      ^^^       variable.other.readwrite.js
//         ^      punctuation.definition.parameters.end.js
//           ^^   meta.brace.curly.js
//             ^  meta.delimiter.comma.js
  async play() {},
//^^^^^ ^^^^^^ ^^^  meta.group.braces.curly
//^^^^^             variable.other.readwrite.js
//      ^^^^^^      meta.function-call.without-arguments.js
//      ^^^^        entity.name.function.js
//          ^       punctuation.definition.parameters.begin.js
//           ^      punctuation.definition.parameters.end.js
//             ^^   meta.brace.curly.js
//               ^  meta.delimiter.comma.js
  async play(arg) {},
//^^^^^ ^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^      ^^^       variable.other.readwrite.js
//      ^^^^^^^^^      meta.function-call.with-arguments.js
//      ^^^^           entity.name.function.js
//          ^          punctuation.definition.parameters.begin.js
//              ^      punctuation.definition.parameters.end.js
//                ^^   meta.brace.curly.js
//                  ^  meta.delimiter.comma.js
  get play() {},
//^^^ ^^^^^^ ^^^  meta.group.braces.curly
//^^^             variable.other.readwrite.js
//    ^^^^^^      meta.function-call.without-arguments.js
//    ^^^^        entity.name.function.js
//        ^       punctuation.definition.parameters.begin.js
//         ^      punctuation.definition.parameters.end.js
//           ^^   meta.brace.curly.js
//             ^  meta.delimiter.comma.js
  set play(arg) {},
//^^^ ^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^      ^^^       variable.other.readwrite.js
//    ^^^^^^^^^      meta.function-call.with-arguments.js
//    ^^^^           entity.name.function.js
//        ^          punctuation.definition.parameters.begin.js
//            ^      punctuation.definition.parameters.end.js
//              ^^   meta.brace.curly.js
//                ^  meta.delimiter.comma.js
  *'play'() {},
//^^^^^^^^^ ^^^  meta.group.braces.curly
//^              keyword.operator.arithmetic.js
// ^^^^^^        string.quoted.single.js
// ^             punctuation.definition.string.begin.js
//      ^        punctuation.definition.string.end.js
//       ^^      meta.group.braces.round
//       ^^      meta.brace.round.js
//          ^^   meta.brace.curly.js
//            ^  meta.delimiter.comma.js
  *'play'(arg) {},
//^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^                 keyword.operator.arithmetic.js
// ^^^^^^           string.quoted.single.js
// ^                punctuation.definition.string.begin.js
//      ^           punctuation.definition.string.end.js
//       ^^^^^      meta.group.braces.round
//       ^   ^      meta.brace.round.js
//        ^^^       variable.other.readwrite.js
//             ^^   meta.brace.curly.js
//               ^  meta.delimiter.comma.js
  async 'play'() {},
//^^^^^ ^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^               variable.other.readwrite.js
//      ^^^^^^        string.quoted.single.js
//      ^             punctuation.definition.string.begin.js
//           ^        punctuation.definition.string.end.js
//            ^^      meta.group.braces.round
//            ^^      meta.brace.round.js
//               ^^   meta.brace.curly.js
//                 ^  meta.delimiter.comma.js
  async 'play'(arg) {},
//^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^        ^^^       variable.other.readwrite.js
//      ^^^^^^           string.quoted.single.js
//      ^                punctuation.definition.string.begin.js
//           ^           punctuation.definition.string.end.js
//            ^^^^^      meta.group.braces.round
//            ^   ^      meta.brace.round.js
//                  ^^   meta.brace.curly.js
//                    ^  meta.delimiter.comma.js
  get 'play'() {},
//^^^ ^^^^^^^^ ^^^  meta.group.braces.curly
//^^^               variable.other.readwrite.js
//    ^^^^^^        string.quoted.single.js
//    ^             punctuation.definition.string.begin.js
//         ^        punctuation.definition.string.end.js
//          ^^      meta.group.braces.round
//          ^^      meta.brace.round.js
//             ^^   meta.brace.curly.js
//               ^  meta.delimiter.comma.js
  set 'play'(arg) {},
//^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^        ^^^       variable.other.readwrite.js
//    ^^^^^^           string.quoted.single.js
//    ^                punctuation.definition.string.begin.js
//         ^           punctuation.definition.string.end.js
//          ^^^^^      meta.group.braces.round
//          ^   ^      meta.brace.round.js
//                ^^   meta.brace.curly.js
//                  ^  meta.delimiter.comma.js
  [Play.name()]() {},
//^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
//^                    meta.brace.square.open.flowtype
// ^^^^^^^^^^^         meta.function-call.static.without-arguments.js
// ^^^^                variable.other.class.js
//     ^               keyword.operator.accessor.js
//      ^^^^           entity.name.function.js
//          ^^         meta.group.braces.round.function.arguments.js
//            ^        meta.brace.square.end.flowtype
//             ^       punctuation.definition.parameters.begin.js
//              ^      punctuation.definition.parameters.end.js
//                ^^   meta.brace.curly.js
//                  ^  meta.delimiter.comma.js
  [Play.name()[]](arg) {},
//^^^^^^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
//^           ^             meta.brace.square.open.flowtype
// ^^^^^^^^^^^              meta.function-call.static.without-arguments.js
// ^^^^                     variable.other.class.js
//     ^                    keyword.operator.accessor.js
//      ^^^^                entity.name.function.js
//          ^^              meta.group.braces.round.function.arguments.js
//             ^^           meta.brace.square.end.flowtype
//               ^          punctuation.definition.parameters.begin.js
//                ^^^       variable.other.readwrite.js
//                   ^      punctuation.definition.parameters.end.js
//                     ^^   meta.brace.curly.js
//                       ^  meta.delimiter.comma.js
  *[Play.name()]() {},
//^^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^                     keyword.operator.arithmetic.js
// ^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
// ^                    meta.brace.square.open.flowtype
//  ^^^^^^^^^^^         meta.function-call.static.without-arguments.js
//  ^^^^                variable.other.class.js
//      ^               keyword.operator.accessor.js
//       ^^^^           entity.name.function.js
//           ^^         meta.group.braces.round.function.arguments.js
//             ^        meta.brace.square.end.flowtype
//              ^       punctuation.definition.parameters.begin.js
//               ^      punctuation.definition.parameters.end.js
//                 ^^   meta.brace.curly.js
//                   ^  meta.delimiter.comma.js
  *[Play.name()](arg) {},
//^^^^^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^                        keyword.operator.arithmetic.js
// ^^^^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
// ^                       meta.brace.square.open.flowtype
//  ^^^^^^^^^^^            meta.function-call.static.without-arguments.js
//  ^^^^                   variable.other.class.js
//      ^                  keyword.operator.accessor.js
//       ^^^^              entity.name.function.js
//           ^^            meta.group.braces.round.function.arguments.js
//             ^           meta.brace.square.end.flowtype
//              ^          punctuation.definition.parameters.begin.js
//               ^^^       variable.other.readwrite.js
//                  ^      punctuation.definition.parameters.end.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  async [Play.name()]() {},
//^^^^^ ^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^                      variable.other.object.js
//      ^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
//      ^                    meta.brace.square.open.flowtype
//       ^^^^^^^^^^^         meta.function-call.static.without-arguments.js
//       ^^^^                variable.other.class.js
//           ^               keyword.operator.accessor.js
//            ^^^^           entity.name.function.js
//                ^^         meta.group.braces.round.function.arguments.js
//                  ^        meta.brace.square.end.flowtype
//                   ^       punctuation.definition.parameters.begin.js
//                    ^      punctuation.definition.parameters.end.js
//                      ^^   meta.brace.curly.js
//                        ^  meta.delimiter.comma.js
  async [Play.name()](arg) {},
//^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^                         variable.other.object.js
//      ^^^^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
//      ^                       meta.brace.square.open.flowtype
//       ^^^^^^^^^^^            meta.function-call.static.without-arguments.js
//       ^^^^                   variable.other.class.js
//           ^                  keyword.operator.accessor.js
//            ^^^^              entity.name.function.js
//                ^^            meta.group.braces.round.function.arguments.js
//                  ^           meta.brace.square.end.flowtype
//                   ^          punctuation.definition.parameters.begin.js
//                    ^^^       variable.other.readwrite.js
//                       ^      punctuation.definition.parameters.end.js
//                         ^^   meta.brace.curly.js
//                           ^  meta.delimiter.comma.js
  get [Play.name()]() {},
//^^^ ^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^                      variable.other.object.js
//    ^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
//    ^                    meta.brace.square.open.flowtype
//     ^^^^^^^^^^^         meta.function-call.static.without-arguments.js
//     ^^^^                variable.other.class.js
//         ^               keyword.operator.accessor.js
//          ^^^^           entity.name.function.js
//              ^^         meta.group.braces.round.function.arguments.js
//                ^        meta.brace.square.end.flowtype
//                 ^       punctuation.definition.parameters.begin.js
//                  ^      punctuation.definition.parameters.end.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  set [Play.name()](arg) {},
//^^^ ^^^^^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^                         variable.other.object.js
//    ^^^^^^^^^^^^^^^^^^      meta.function-call.without-arguments.js
//    ^                       meta.brace.square.open.flowtype
//     ^^^^^^^^^^^            meta.function-call.static.without-arguments.js
//     ^^^^                   variable.other.class.js
//         ^                  keyword.operator.accessor.js
//          ^^^^              entity.name.function.js
//              ^^            meta.group.braces.round.function.arguments.js
//                ^           meta.brace.square.end.flowtype
//                 ^          punctuation.definition.parameters.begin.js
//                  ^^^       variable.other.readwrite.js
//                     ^      punctuation.definition.parameters.end.js
//                       ^^   meta.brace.curly.js
//                         ^  meta.delimiter.comma.js
  0() {},
//^^^ ^^^  meta.group.braces.curly
//^        constant.numeric.js
// ^^      meta.group.braces.round
// ^^      meta.brace.round.js
//    ^^   meta.brace.curly.js
//      ^  meta.delimiter.comma.js
  0(arg) {},
//^^^^^^ ^^^  meta.group.braces.curly
//^           constant.numeric.js
// ^^^^^      meta.group.braces.round
// ^   ^      meta.brace.round.js
//  ^^^       variable.other.readwrite.js
//       ^^   meta.brace.curly.js
//         ^  meta.delimiter.comma.js
  *0() {},
//^^^^ ^^^  meta.group.braces.curly
//^         keyword.operator.arithmetic.js
// ^        constant.numeric.js
//  ^^      meta.group.braces.round
//  ^^      meta.brace.round.js
//     ^^   meta.brace.curly.js
//       ^  meta.delimiter.comma.js
  *0(arg) {},
//^^^^^^^ ^^^  meta.group.braces.curly
//^            keyword.operator.arithmetic.js
// ^           constant.numeric.js
//  ^^^^^      meta.group.braces.round
//  ^   ^      meta.brace.round.js
//   ^^^       variable.other.readwrite.js
//        ^^   meta.brace.curly.js
//          ^  meta.delimiter.comma.js
  async 0() {},
//^^^^^ ^^^ ^^^  meta.group.braces.curly
//^^^^^          variable.other.readwrite.js
//      ^        constant.numeric.js
//       ^^      meta.group.braces.round
//       ^^      meta.brace.round.js
//          ^^   meta.brace.curly.js
//            ^  meta.delimiter.comma.js
  async 0(arg) {},
//^^^^^ ^^^^^^ ^^^  meta.group.braces.curly
//^^^^^   ^^^       variable.other.readwrite.js
//      ^           constant.numeric.js
//       ^^^^^      meta.group.braces.round
//       ^   ^      meta.brace.round.js
//             ^^   meta.brace.curly.js
//               ^  meta.delimiter.comma.js
  get 0() {},
//^^^ ^^^ ^^^  meta.group.braces.curly
//^^^          variable.other.readwrite.js
//    ^        constant.numeric.js
//     ^^      meta.group.braces.round
//     ^^      meta.brace.round.js
//        ^^   meta.brace.curly.js
//          ^  meta.delimiter.comma.js
  set 0(arg) {},
//^^^ ^^^^^^ ^^^  meta.group.braces.curly
//^^^   ^^^       variable.other.readwrite.js
//    ^           constant.numeric.js
//     ^^^^^      meta.group.braces.round
//     ^   ^      meta.brace.round.js
//           ^^   meta.brace.curly.js
//             ^  meta.delimiter.comma.js
  play: function() {},
//^^^^^ ^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^^^^^^      meta.function.json.js
//^^^^                  entity.name.function.js
//    ^                 punctuation.separator.key-value.js
//      ^^^^^^^^        storage.type.function.js
//              ^       punctuation.definition.parameters.begin.js
//               ^      punctuation.definition.parameters.end.js
//                 ^^   meta.brace.curly.js
//                   ^  meta.delimiter.comma.js
  play: function(arg) {},
//^^^^^ ^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^^^^^^^^^      meta.function.json.js
//^^^^                     entity.name.function.js
//    ^                    punctuation.separator.key-value.js
//      ^^^^^^^^           storage.type.function.js
//              ^          punctuation.definition.parameters.begin.js
//               ^^^       variable.other.readwrite.js
//                  ^      punctuation.definition.parameters.end.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  play: function*() {},
//^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^^^^^^^      meta.function.json.js
//^^^^                   entity.name.function.js
//    ^                  punctuation.separator.key-value.js
//      ^^^^^^^^         storage.type.function.js
//              ^        keyword.generator.asterisk.js
//               ^       punctuation.definition.parameters.begin.js
//                ^      punctuation.definition.parameters.end.js
//                  ^^   meta.brace.curly.js
//                    ^  meta.delimiter.comma.js
  play: function*(arg) {},
//^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^^^^^^^^^^      meta.function.json.js
//^^^^                      entity.name.function.js
//    ^                     punctuation.separator.key-value.js
//      ^^^^^^^^            storage.type.function.js
//              ^           keyword.generator.asterisk.js
//               ^          punctuation.definition.parameters.begin.js
//                ^^^       variable.other.readwrite.js
//                   ^      punctuation.definition.parameters.end.js
//                     ^^   meta.brace.curly.js
//                       ^  meta.delimiter.comma.js
  play: async function() {},
//^^^^^ ^^^^^ ^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^^^^^^^^^      meta.function.json.js
//^^^^                        entity.name.function.js
//    ^                       punctuation.separator.key-value.js
//      ^^^^^                 storage.type.js
//            ^^^^^^^^        storage.type.function.js
//                    ^       punctuation.definition.parameters.begin.js
//                     ^      punctuation.definition.parameters.end.js
//                       ^^   meta.brace.curly.js
//                         ^  meta.delimiter.comma.js
  play: async function(arg) {},
//^^^^^ ^^^^^ ^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^^^^^^^^^^^^      meta.function.json.js
//^^^^                           entity.name.function.js
//    ^                          punctuation.separator.key-value.js
//      ^^^^^                    storage.type.js
//            ^^^^^^^^           storage.type.function.js
//                    ^          punctuation.definition.parameters.begin.js
//                     ^^^       variable.other.readwrite.js
//                        ^      punctuation.definition.parameters.end.js
//                          ^^   meta.brace.curly.js
//                            ^  meta.delimiter.comma.js
  play: async function*() {},
//^^^^^ ^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^^^^^^^^^^      meta.function.json.js
//^^^^                         entity.name.function.js
//    ^                        punctuation.separator.key-value.js
//      ^^^^^                  storage.type.js
//            ^^^^^^^^         storage.type.function.js
//                    ^        keyword.generator.asterisk.js
//                     ^       punctuation.definition.parameters.begin.js
//                      ^      punctuation.definition.parameters.end.js
//                        ^^   meta.brace.curly.js
//                          ^  meta.delimiter.comma.js
  play: async function*(arg) {},
//^^^^^ ^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^^^^^^^^^^^^^      meta.function.json.js
//^^^^                            entity.name.function.js
//    ^                           punctuation.separator.key-value.js
//      ^^^^^                     storage.type.js
//            ^^^^^^^^            storage.type.function.js
//                    ^           keyword.generator.asterisk.js
//                     ^          punctuation.definition.parameters.begin.js
//                      ^^^       variable.other.readwrite.js
//                         ^      punctuation.definition.parameters.end.js
//                           ^^   meta.brace.curly.js
//                             ^  meta.delimiter.comma.js
  play: async () => {},
//^^^^^ ^^^^^ ^^ ^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^ ^^      meta.function.json.arrow.js
//^^^^                   entity.name.function.js
//    ^                  punctuation.separator.key-value.js
//      ^^^^^            storage.type.js
//            ^          punctuation.definition.parameters.begin.js
//             ^         punctuation.definition.parameters.end.js
//               ^^      storage.type.function.arrow.js
//                  ^^   meta.brace.curly.js
//                    ^  meta.delimiter.comma.js
  play: async (arg) => {},
//^^^^^ ^^^^^ ^^^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^^^^ ^^      meta.function.json.arrow.js
//^^^^                      entity.name.function.js
//    ^                     punctuation.separator.key-value.js
//      ^^^^^               storage.type.js
//            ^             punctuation.definition.parameters.begin.js
//             ^^^          variable.other.readwrite.js
//                ^         punctuation.definition.parameters.end.js
//                  ^^      storage.type.function.arrow.js
//                     ^^   meta.brace.curly.js
//                       ^  meta.delimiter.comma.js
  play: async arg => {},
//^^^^^ ^^^^^ ^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^^ ^^      meta.function.json.arrow.js
//^^^^                    entity.name.function.js
//    ^                   punctuation.separator.key-value.js
//      ^^^^^             storage.type.js
//            ^^^         variable.other.readwrite.js
//                ^^      storage.type.function.arrow.js
//                   ^^   meta.brace.curly.js
//                     ^  meta.delimiter.comma.js
  play: () => {},
//^^^^^ ^^ ^^ ^^^  meta.group.braces.curly
//^^^^^ ^^ ^^      meta.function.json.arrow.js
//^^^^             entity.name.function.js
//    ^            punctuation.separator.key-value.js
//      ^          punctuation.definition.parameters.begin.js
//       ^         punctuation.definition.parameters.end.js
//         ^^      storage.type.function.arrow.js
//            ^^   meta.brace.curly.js
//              ^  meta.delimiter.comma.js
  play: (arg) => {},
//^^^^^ ^^^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^^^ ^^      meta.function.json.arrow.js
//^^^^                entity.name.function.js
//    ^               punctuation.separator.key-value.js
//      ^             punctuation.definition.parameters.begin.js
//       ^^^          variable.other.readwrite.js
//          ^         punctuation.definition.parameters.end.js
//            ^^      storage.type.function.arrow.js
//               ^^   meta.brace.curly.js
//                 ^  meta.delimiter.comma.js
  play: arg => {},
//^^^^^ ^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^ ^^^ ^^      meta.function.json.arrow.js
//^^^^              entity.name.function.js
//    ^             punctuation.separator.key-value.js
//      ^^^         variable.other.readwrite.js
//          ^^      storage.type.function.arrow.js
//             ^^   meta.brace.curly.js
//               ^  meta.delimiter.comma.js
  "play": function() {},
//^^^^^^^ ^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^^^^^^      meta.function.json.js
//^^^^^^                  string.quoted.js
//^                       punctuation.definition.string.begin.js
// ^^^^                   entity.name.function.js
//     ^                  punctuation.definition.string.end.js
//      ^                 punctuation.separator.key-value.js
//        ^^^^^^^^        storage.type.function.js
//                ^       punctuation.definition.parameters.begin.js
//                 ^      punctuation.definition.parameters.end.js
//                   ^^   meta.brace.curly.js
//                     ^  meta.delimiter.comma.js
  "play": function(arg) {},
//^^^^^^^ ^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^^^^^^^^^      meta.function.json.js
//^^^^^^                     string.quoted.js
//^                          punctuation.definition.string.begin.js
// ^^^^                      entity.name.function.js
//     ^                     punctuation.definition.string.end.js
//      ^                    punctuation.separator.key-value.js
//        ^^^^^^^^           storage.type.function.js
//                ^          punctuation.definition.parameters.begin.js
//                 ^^^       variable.other.readwrite.js
//                    ^      punctuation.definition.parameters.end.js
//                      ^^   meta.brace.curly.js
//                        ^  meta.delimiter.comma.js
  "play": function*() {},
//^^^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^^^^^^^      meta.function.json.js
//^^^^^^                   string.quoted.js
//^                        punctuation.definition.string.begin.js
// ^^^^                    entity.name.function.js
//     ^                   punctuation.definition.string.end.js
//      ^                  punctuation.separator.key-value.js
//        ^^^^^^^^         storage.type.function.js
//                ^        keyword.generator.asterisk.js
//                 ^       punctuation.definition.parameters.begin.js
//                  ^      punctuation.definition.parameters.end.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  "play": function*(arg) {},
//^^^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^^^^^^^^^^      meta.function.json.js
//^^^^^^                      string.quoted.js
//^                           punctuation.definition.string.begin.js
// ^^^^                       entity.name.function.js
//     ^                      punctuation.definition.string.end.js
//      ^                     punctuation.separator.key-value.js
//        ^^^^^^^^            storage.type.function.js
//                ^           keyword.generator.asterisk.js
//                 ^          punctuation.definition.parameters.begin.js
//                  ^^^       variable.other.readwrite.js
//                     ^      punctuation.definition.parameters.end.js
//                       ^^   meta.brace.curly.js
//                         ^  meta.delimiter.comma.js
  "play": async function() {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^^^^^^^^^      meta.function.json.js
//^^^^^^                        string.quoted.js
//^                             punctuation.definition.string.begin.js
// ^^^^                         entity.name.function.js
//     ^                        punctuation.definition.string.end.js
//      ^                       punctuation.separator.key-value.js
//        ^^^^^                 storage.type.js
//              ^^^^^^^^        storage.type.function.js
//                      ^       punctuation.definition.parameters.begin.js
//                       ^      punctuation.definition.parameters.end.js
//                         ^^   meta.brace.curly.js
//                           ^  meta.delimiter.comma.js
  "play": async function(arg) {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^^^^^^^^^^^^      meta.function.json.js
//^^^^^^                           string.quoted.js
//^                                punctuation.definition.string.begin.js
// ^^^^                            entity.name.function.js
//     ^                           punctuation.definition.string.end.js
//      ^                          punctuation.separator.key-value.js
//        ^^^^^                    storage.type.js
//              ^^^^^^^^           storage.type.function.js
//                      ^          punctuation.definition.parameters.begin.js
//                       ^^^       variable.other.readwrite.js
//                          ^      punctuation.definition.parameters.end.js
//                            ^^   meta.brace.curly.js
//                              ^  meta.delimiter.comma.js
  "play": async function*() {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^^^^^^^^^^      meta.function.json.js
//^^^^^^                         string.quoted.js
//^                              punctuation.definition.string.begin.js
// ^^^^                          entity.name.function.js
//     ^                         punctuation.definition.string.end.js
//      ^                        punctuation.separator.key-value.js
//        ^^^^^                  storage.type.js
//              ^^^^^^^^         storage.type.function.js
//                      ^        keyword.generator.asterisk.js
//                       ^       punctuation.definition.parameters.begin.js
//                        ^      punctuation.definition.parameters.end.js
//                          ^^   meta.brace.curly.js
//                            ^  meta.delimiter.comma.js
  "play": async function*(arg) {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^      meta.function.json.js
//^^^^^^                            string.quoted.js
//^                                 punctuation.definition.string.begin.js
// ^^^^                             entity.name.function.js
//     ^                            punctuation.definition.string.end.js
//      ^                           punctuation.separator.key-value.js
//        ^^^^^                     storage.type.js
//              ^^^^^^^^            storage.type.function.js
//                      ^           keyword.generator.asterisk.js
//                       ^          punctuation.definition.parameters.begin.js
//                        ^^^       variable.other.readwrite.js
//                           ^      punctuation.definition.parameters.end.js
//                             ^^   meta.brace.curly.js
//                               ^  meta.delimiter.comma.js
  "play": async () => {},
//^^^^^^^ ^^^^^ ^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^ ^^      meta.function.json.arrow.js
//^^^^^^                   string.quoted.js
//^                        punctuation.definition.string.begin.js
// ^^^^                    entity.name.function.js
//     ^                   punctuation.definition.string.end.js
//      ^                  punctuation.separator.key-value.js
//        ^^^^^            storage.type.js
//              ^          punctuation.definition.parameters.begin.js
//               ^         punctuation.definition.parameters.end.js
//                 ^^      storage.type.function.arrow.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  "play": async (arg) => {},
//^^^^^^^ ^^^^^ ^^^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^^^^ ^^      meta.function.json.arrow.js
//^^^^^^                      string.quoted.js
//^                           punctuation.definition.string.begin.js
// ^^^^                       entity.name.function.js
//     ^                      punctuation.definition.string.end.js
//      ^                     punctuation.separator.key-value.js
//        ^^^^^               storage.type.js
//              ^             punctuation.definition.parameters.begin.js
//               ^^^          variable.other.readwrite.js
//                  ^         punctuation.definition.parameters.end.js
//                    ^^      storage.type.function.arrow.js
//                       ^^   meta.brace.curly.js
//                         ^  meta.delimiter.comma.js
  "play": async arg => {},
//^^^^^^^ ^^^^^ ^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^^ ^^      meta.function.json.arrow.js
//^^^^^^                    string.quoted.js
//^                         punctuation.definition.string.begin.js
// ^^^^                     entity.name.function.js
//     ^                    punctuation.definition.string.end.js
//      ^                   punctuation.separator.key-value.js
//        ^^^^^             storage.type.js
//              ^^^         variable.other.readwrite.js
//                  ^^      storage.type.function.arrow.js
//                     ^^   meta.brace.curly.js
//                       ^  meta.delimiter.comma.js
  "play": () => {},
//^^^^^^^ ^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^ ^^      meta.function.json.arrow.js
//^^^^^^             string.quoted.js
//^                  punctuation.definition.string.begin.js
// ^^^^              entity.name.function.js
//     ^             punctuation.definition.string.end.js
//      ^            punctuation.separator.key-value.js
//        ^          punctuation.definition.parameters.begin.js
//         ^         punctuation.definition.parameters.end.js
//           ^^      storage.type.function.arrow.js
//              ^^   meta.brace.curly.js
//                ^  meta.delimiter.comma.js
  "play": (arg) => {},
//^^^^^^^ ^^^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^^^ ^^      meta.function.json.arrow.js
//^^^^^^                string.quoted.js
//^                     punctuation.definition.string.begin.js
// ^^^^                 entity.name.function.js
//     ^                punctuation.definition.string.end.js
//      ^               punctuation.separator.key-value.js
//        ^             punctuation.definition.parameters.begin.js
//         ^^^          variable.other.readwrite.js
//            ^         punctuation.definition.parameters.end.js
//              ^^      storage.type.function.arrow.js
//                 ^^   meta.brace.curly.js
//                   ^  meta.delimiter.comma.js
  "play": arg => {},
//^^^^^^^ ^^^ ^^ ^^^  meta.group.braces.curly
//^^^^^^^ ^^^ ^^      meta.function.json.arrow.js
//^^^^^^              string.quoted.js
//^                   punctuation.definition.string.begin.js
// ^^^^               entity.name.function.js
//     ^              punctuation.definition.string.end.js
//      ^             punctuation.separator.key-value.js
//        ^^^         variable.other.readwrite.js
//            ^^      storage.type.function.arrow.js
//               ^^   meta.brace.curly.js
//                 ^  meta.delimiter.comma.js
  [play]: function() {},
//^^^^^^^ ^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                  meta.brace.square.js
// ^^^^                   variable.other.readwrite.js
//      ^                 punctuation.separator.key-value.js
//        ^^^^^^^^^^      meta.function.js
//        ^^^^^^^^        storage.type.function.js
//                ^       punctuation.definition.parameters.begin.js
//                 ^      punctuation.definition.parameters.end.js
//                   ^^   meta.brace.curly.js
//                     ^  meta.delimiter.comma.js
  [play]: function(arg) {},
//^^^^^^^ ^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                     meta.brace.square.js
// ^^^^            ^^^       variable.other.readwrite.js
//      ^                    punctuation.separator.key-value.js
//        ^^^^^^^^^^^^^      meta.function.js
//        ^^^^^^^^           storage.type.function.js
//                ^          punctuation.definition.parameters.begin.js
//                    ^      punctuation.definition.parameters.end.js
//                      ^^   meta.brace.curly.js
//                        ^  meta.delimiter.comma.js
  [play]: function*() {},
//^^^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                   meta.brace.square.js
// ^^^^                    variable.other.readwrite.js
//      ^                  punctuation.separator.key-value.js
//        ^^^^^^^^^^^      meta.function.js
//        ^^^^^^^^         storage.type.function.js
//                ^        keyword.generator.asterisk.js
//                 ^       punctuation.definition.parameters.begin.js
//                  ^      punctuation.definition.parameters.end.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  [play]: function*(arg) {},
//^^^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                      meta.brace.square.js
// ^^^^             ^^^       variable.other.readwrite.js
//      ^                     punctuation.separator.key-value.js
//        ^^^^^^^^^^^^^^      meta.function.js
//        ^^^^^^^^            storage.type.function.js
//                ^           keyword.generator.asterisk.js
//                 ^          punctuation.definition.parameters.begin.js
//                     ^      punctuation.definition.parameters.end.js
//                       ^^   meta.brace.curly.js
//                         ^  meta.delimiter.comma.js
  [play]: async function() {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                        meta.brace.square.js
// ^^^^                         variable.other.readwrite.js
//      ^                       punctuation.separator.key-value.js
//        ^^^^^ ^^^^^^^^^^      meta.function.js
//        ^^^^^                 storage.type.js
//              ^^^^^^^^        storage.type.function.js
//                      ^       punctuation.definition.parameters.begin.js
//                       ^      punctuation.definition.parameters.end.js
//                         ^^   meta.brace.curly.js
//                           ^  meta.delimiter.comma.js
  [play]: async function(arg) {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                           meta.brace.square.js
// ^^^^                  ^^^       variable.other.readwrite.js
//      ^                          punctuation.separator.key-value.js
//        ^^^^^ ^^^^^^^^^^^^^      meta.function.js
//        ^^^^^                    storage.type.js
//              ^^^^^^^^           storage.type.function.js
//                      ^          punctuation.definition.parameters.begin.js
//                          ^      punctuation.definition.parameters.end.js
//                            ^^   meta.brace.curly.js
//                              ^  meta.delimiter.comma.js
  [play]: async function*() {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                         meta.brace.square.js
// ^^^^                          variable.other.readwrite.js
//      ^                        punctuation.separator.key-value.js
//        ^^^^^ ^^^^^^^^^^^      meta.function.js
//        ^^^^^                  storage.type.js
//              ^^^^^^^^         storage.type.function.js
//                      ^        keyword.generator.asterisk.js
//                       ^       punctuation.definition.parameters.begin.js
//                        ^      punctuation.definition.parameters.end.js
//                          ^^   meta.brace.curly.js
//                            ^  meta.delimiter.comma.js
  [play]: async function*(arg) {},
//^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.group.braces.curly
//^    ^                            meta.brace.square.js
// ^^^^                   ^^^       variable.other.readwrite.js
//      ^                           punctuation.separator.key-value.js
//        ^^^^^ ^^^^^^^^^^^^^^      meta.function.js
//        ^^^^^                     storage.type.js
//              ^^^^^^^^            storage.type.function.js
//                      ^           keyword.generator.asterisk.js
//                       ^          punctuation.definition.parameters.begin.js
//                           ^      punctuation.definition.parameters.end.js
//                             ^^   meta.brace.curly.js
//                               ^  meta.delimiter.comma.js
  [play]: async () => {},
//^^^^^^^ ^^^^^ ^^ ^^ ^^^  meta.group.braces.curly
//^    ^                   meta.brace.square.js
// ^^^^                    variable.other.readwrite.js
//      ^                  punctuation.separator.key-value.js
//        ^^^^^ ^^ ^^      meta.function.arrow.js
//        ^^^^^            storage.type.js
//              ^          punctuation.definition.parameters.begin.js
//               ^         punctuation.definition.parameters.end.js
//                 ^^      storage.type.function.arrow.js
//                    ^^   meta.brace.curly.js
//                      ^  meta.delimiter.comma.js
  [play]: async (arg) => {},
//^^^^^^^ ^^^^^ ^^^^^ ^^ ^^^  meta.group.braces.curly
//^    ^                      meta.brace.square.js
// ^^^^          ^^^          variable.other.readwrite.js
//      ^                     punctuation.separator.key-value.js
//        ^^^^^ ^^^^^ ^^      meta.function.arrow.js
//        ^^^^^               storage.type.js
//              ^             punctuation.definition.parameters.begin.js
//                  ^         punctuation.definition.parameters.end.js
//                    ^^      storage.type.function.arrow.js
//                       ^^   meta.brace.curly.js
//                         ^  meta.delimiter.comma.js
  [play]: async arg => {},
//^^^^^^^ ^^^^^ ^^^ ^^ ^^^  meta.group.braces.curly
//^    ^                    meta.brace.square.js
// ^^^^         ^^^         variable.other.readwrite.js
//      ^                   punctuation.separator.key-value.js
//        ^^^^^ ^^^ ^^      meta.function.arrow.js
//        ^^^^^             storage.type.js
//                  ^^      storage.type.function.arrow.js
//                     ^^   meta.brace.curly.js
//                       ^  meta.delimiter.comma.js
  [play]: () => {},
//^^^^^^^ ^^ ^^ ^^^  meta.group.braces.curly
//^    ^             meta.brace.square.js
// ^^^^              variable.other.readwrite.js
//      ^            punctuation.separator.key-value.js
//        ^^ ^^      meta.function.arrow.js
//        ^          punctuation.definition.parameters.begin.js
//         ^         punctuation.definition.parameters.end.js
//           ^^      storage.type.function.arrow.js
//              ^^   meta.brace.curly.js
//                ^  meta.delimiter.comma.js
  [play]: (arg) => {},
//^^^^^^^ ^^^^^ ^^ ^^^  meta.group.braces.curly
//^    ^                meta.brace.square.js
// ^^^^    ^^^          variable.other.readwrite.js
//      ^               punctuation.separator.key-value.js
//        ^^^^^ ^^      meta.function.arrow.js
//        ^             punctuation.definition.parameters.begin.js
//            ^         punctuation.definition.parameters.end.js
//              ^^      storage.type.function.arrow.js
//                 ^^   meta.brace.curly.js
//                   ^  meta.delimiter.comma.js
  [play]: arg => {}
//^^^^^^^ ^^^ ^^ ^^  meta.group.braces.curly
//^    ^             meta.brace.square.js
// ^^^^   ^^^        variable.other.readwrite.js
//      ^            punctuation.separator.key-value.js
//        ^^^ ^^     meta.function.arrow.js
//            ^^     storage.type.function.arrow.js
//               ^^  meta.brace.curly.js
}
// <- meta.group.braces.curly meta.brace.curly.js

class Sound<T, T> extends Model<T, T> {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                                    meta.class.js
//^^^                                    storage.type.class.js
//    ^^^^^               ^^^^^          entity.name.class.js
//         ^    ^              ^    ^    punctutation.flowtype
//          ^  ^                ^  ^     support.type.class.flowtype
//           ^                   ^       punctuation.type.separator.flowtype
//                ^^^^^^^                meta.class.extends.js
//                ^^^^^^^                storage.type.extends.js
//                                    ^  punctuation.section.class.begin.js
  get() {}
//^^^^^ ^^  meta.class.body.js
//^^^^^     meta.function.method.js
//^^^       entity.name.function.method.js
//   ^      punctuation.definition.parameters.begin.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.group.braces.curly
//      ^^  meta.brace.curly.js
  get(arg) {}
//^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^     meta.function.method.js
//^^^          entity.name.function.method.js
//   ^         punctuation.definition.parameters.begin.js
//    ^^^      variable.other.readwrite.js
//       ^     punctuation.definition.parameters.end.js
//         ^^  meta.group.braces.curly
//         ^^  meta.brace.curly.js
  set() {}
//^^^^^ ^^  meta.class.body.js
//^^^^^     meta.function.method.js
//^^^       entity.name.function.method.js
//   ^      punctuation.definition.parameters.begin.js
//    ^     punctuation.definition.parameters.end.js
//      ^^  meta.group.braces.curly
//      ^^  meta.brace.curly.js
  set(arg) {}
//^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^     meta.function.method.js
//^^^          entity.name.function.method.js
//   ^         punctuation.definition.parameters.begin.js
//    ^^^      variable.other.readwrite.js
//       ^     punctuation.definition.parameters.end.js
//         ^^  meta.group.braces.curly
//         ^^  meta.brace.curly.js
  *get() {}
//^^^^^^ ^^  meta.class.body.js
//^^^^^^     meta.function.method.js
//^          keyword.generator.asterisk.js
// ^^^       entity.name.function.method.js
//    ^      punctuation.definition.parameters.begin.js
//     ^     punctuation.definition.parameters.end.js
//       ^^  meta.group.braces.curly
//       ^^  meta.brace.curly.js
  *get(arg) {}
//^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^     meta.function.method.js
//^             keyword.generator.asterisk.js
// ^^^          entity.name.function.method.js
//    ^         punctuation.definition.parameters.begin.js
//     ^^^      variable.other.readwrite.js
//        ^     punctuation.definition.parameters.end.js
//          ^^  meta.group.braces.curly
//          ^^  meta.brace.curly.js
  *set() {}
//^^^^^^ ^^  meta.class.body.js
//^^^^^^     meta.function.method.js
//^          keyword.generator.asterisk.js
// ^^^       entity.name.function.method.js
//    ^      punctuation.definition.parameters.begin.js
//     ^     punctuation.definition.parameters.end.js
//       ^^  meta.group.braces.curly
//       ^^  meta.brace.curly.js
  *set(arg) {}
//^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^     meta.function.method.js
//^             keyword.generator.asterisk.js
// ^^^          entity.name.function.method.js
//    ^         punctuation.definition.parameters.begin.js
//     ^^^      variable.other.readwrite.js
//        ^     punctuation.definition.parameters.end.js
//          ^^  meta.group.braces.curly
//          ^^  meta.brace.curly.js
  async get() {}
//^^^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^     meta.function.method.js
//^^^^^           storage.type.js
//      ^^^       entity.name.function.method.js
//         ^      punctuation.definition.parameters.begin.js
//          ^     punctuation.definition.parameters.end.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js
  async get(arg) {}
//^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^     meta.function.method.js
//^^^^^              storage.type.js
//      ^^^          entity.name.function.method.js
//         ^         punctuation.definition.parameters.begin.js
//          ^^^      variable.other.readwrite.js
//             ^     punctuation.definition.parameters.end.js
//               ^^  meta.group.braces.curly
//               ^^  meta.brace.curly.js
  async set() {}
//^^^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^     meta.function.method.js
//^^^^^           storage.type.js
//      ^^^       entity.name.function.method.js
//         ^      punctuation.definition.parameters.begin.js
//          ^     punctuation.definition.parameters.end.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js
  async set(arg) {}
//^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^     meta.function.method.js
//^^^^^              storage.type.js
//      ^^^          entity.name.function.method.js
//         ^         punctuation.definition.parameters.begin.js
//          ^^^      variable.other.readwrite.js
//             ^     punctuation.definition.parameters.end.js
//               ^^  meta.group.braces.curly
//               ^^  meta.brace.curly.js
  static get() {}
//^^^^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^^           storage.modifier.js
//       ^^^^^     meta.function.method.js
//       ^^^       entity.name.function.method.js
//          ^      punctuation.definition.parameters.begin.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  static get(arg) {}
//^^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^              storage.modifier.js
//       ^^^^^^^^     meta.function.method.js
//       ^^^          entity.name.function.method.js
//          ^         punctuation.definition.parameters.begin.js
//           ^^^      variable.other.readwrite.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
  static set() {}
//^^^^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^^           storage.modifier.js
//       ^^^^^     meta.function.method.js
//       ^^^       entity.name.function.method.js
//          ^      punctuation.definition.parameters.begin.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  static set(arg) {}
//^^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^              storage.modifier.js
//       ^^^^^^^^     meta.function.method.js
//       ^^^          entity.name.function.method.js
//          ^         punctuation.definition.parameters.begin.js
//           ^^^      variable.other.readwrite.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
  static *get() {}
//^^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^            storage.modifier.js
//       ^^^^^^     meta.function.method.js
//       ^          keyword.generator.asterisk.js
//        ^^^       entity.name.function.method.js
//           ^      punctuation.definition.parameters.begin.js
//            ^     punctuation.definition.parameters.end.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
  static *get(arg) {}
//^^^^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^               storage.modifier.js
//       ^^^^^^^^^     meta.function.method.js
//       ^             keyword.generator.asterisk.js
//        ^^^          entity.name.function.method.js
//           ^         punctuation.definition.parameters.begin.js
//            ^^^      variable.other.readwrite.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
  static *set() {}
//^^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^            storage.modifier.js
//       ^^^^^^     meta.function.method.js
//       ^          keyword.generator.asterisk.js
//        ^^^       entity.name.function.method.js
//           ^      punctuation.definition.parameters.begin.js
//            ^     punctuation.definition.parameters.end.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
  static *set(arg) {}
//^^^^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^               storage.modifier.js
//       ^^^^^^^^^     meta.function.method.js
//       ^             keyword.generator.asterisk.js
//        ^^^          entity.name.function.method.js
//           ^         punctuation.definition.parameters.begin.js
//            ^^^      variable.other.readwrite.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
  static async get() {}
//^^^^^^ ^^^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^^                 storage.modifier.js
//       ^^^^^ ^^^^^     meta.function.method.js
//       ^^^^^           storage.type.js
//             ^^^       entity.name.function.method.js
//                ^      punctuation.definition.parameters.begin.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js
  static async get(arg) {}
//^^^^^^ ^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                    storage.modifier.js
//       ^^^^^ ^^^^^^^^     meta.function.method.js
//       ^^^^^              storage.type.js
//             ^^^          entity.name.function.method.js
//                ^         punctuation.definition.parameters.begin.js
//                 ^^^      variable.other.readwrite.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
  static async set() {}
//^^^^^^ ^^^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^^                 storage.modifier.js
//       ^^^^^ ^^^^^     meta.function.method.js
//       ^^^^^           storage.type.js
//             ^^^       entity.name.function.method.js
//                ^      punctuation.definition.parameters.begin.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js
  static async set(arg) {}
//^^^^^^ ^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                    storage.modifier.js
//       ^^^^^ ^^^^^^^^     meta.function.method.js
//       ^^^^^              storage.type.js
//             ^^^          entity.name.function.method.js
//                ^         punctuation.definition.parameters.begin.js
//                 ^^^      variable.other.readwrite.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
  static get get() {}
//^^^^^^ ^^^ ^^^^^ ^^  meta.class.body.js
//^^^^^^               storage.modifier.js
//       ^^^ ^^^^^     meta.accessor.js
//       ^^^           storage.type.accessor.js
//           ^^^       entity.name.accessor.js
//              ^      punctuation.definition.parameters.begin.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
  static set set(arg) {}
//^^^^^^ ^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                  storage.modifier.js
//       ^^^ ^^^^^^^^     meta.accessor.js
//       ^^^              storage.type.accessor.js
//           ^^^          entity.name.accessor.js
//              ^         punctuation.definition.parameters.begin.js
//               ^^^      variable.other.readwrite.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
  play() {}
//^^^^^^ ^^  meta.class.body.js
//^^^^^^     meta.function.method.js
//^^^^       entity.name.function.method.js
//    ^      punctuation.definition.parameters.begin.js
//     ^     punctuation.definition.parameters.end.js
//       ^^  meta.group.braces.curly
//       ^^  meta.brace.curly.js
  play(arg) {}
//^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^     meta.function.method.js
//^^^^          entity.name.function.method.js
//    ^         punctuation.definition.parameters.begin.js
//     ^^^      variable.other.readwrite.js
//        ^     punctuation.definition.parameters.end.js
//          ^^  meta.group.braces.curly
//          ^^  meta.brace.curly.js
  'play'() {}
//^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^     meta.function.method.js
//^^^^^^       string.quoted.single.js
//^            punctuation.definition.string.begin.js
//     ^       punctuation.definition.string.end.js
//      ^      punctuation.definition.parameters.begin.js
//       ^     punctuation.definition.parameters.end.js
//         ^^  meta.group.braces.curly
//         ^^  meta.brace.curly.js
  'play'(arg) {}
//^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^     meta.function.method.js
//^^^^^^          string.quoted.single.js
//^               punctuation.definition.string.begin.js
//     ^          punctuation.definition.string.end.js
//      ^         punctuation.definition.parameters.begin.js
//       ^^^      variable.other.readwrite.js
//          ^     punctuation.definition.parameters.end.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js
  *play() {}
//^^^^^^^ ^^  meta.class.body.js
//^^^^^^^     meta.function.method.js
//^           keyword.generator.asterisk.js
// ^^^^       entity.name.function.method.js
//     ^      punctuation.definition.parameters.begin.js
//      ^     punctuation.definition.parameters.end.js
//        ^^  meta.group.braces.curly
//        ^^  meta.brace.curly.js
  *play(arg) {}
//^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^     meta.function.method.js
//^              keyword.generator.asterisk.js
// ^^^^          entity.name.function.method.js
//     ^         punctuation.definition.parameters.begin.js
//      ^^^      variable.other.readwrite.js
//         ^     punctuation.definition.parameters.end.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
  *'play'() {}
//^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^     meta.function.method.js
//^             keyword.generator.asterisk.js
// ^^^^^^       string.quoted.single.js
// ^            punctuation.definition.string.begin.js
//      ^       punctuation.definition.string.end.js
//       ^      punctuation.definition.parameters.begin.js
//        ^     punctuation.definition.parameters.end.js
//          ^^  meta.group.braces.curly
//          ^^  meta.brace.curly.js
  *'play'(arg) {}
//^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^     meta.function.method.js
//^                keyword.generator.asterisk.js
// ^^^^^^          string.quoted.single.js
// ^               punctuation.definition.string.begin.js
//      ^          punctuation.definition.string.end.js
//       ^         punctuation.definition.parameters.begin.js
//        ^^^      variable.other.readwrite.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  async play() {}
//^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^     meta.function.method.js
//^^^^^            storage.type.js
//      ^^^^       entity.name.function.method.js
//          ^      punctuation.definition.parameters.begin.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  async play(arg) {}
//^^^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^^     meta.function.method.js
//^^^^^               storage.type.js
//      ^^^^          entity.name.function.method.js
//          ^         punctuation.definition.parameters.begin.js
//           ^^^      variable.other.readwrite.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
  get play() {}
//^^^ ^^^^^^ ^^  meta.class.body.js
//^^^ ^^^^^^     meta.accessor.js
//^^^            storage.type.accessor.js
//    ^^^^       entity.name.accessor.js
//        ^      punctuation.definition.parameters.begin.js
//         ^     punctuation.definition.parameters.end.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
  set play(arg) {}
//^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^ ^^^^^^^^^     meta.accessor.js
//^^^               storage.type.accessor.js
//    ^^^^          entity.name.accessor.js
//        ^         punctuation.definition.parameters.begin.js
//         ^^^      variable.other.readwrite.js
//            ^     punctuation.definition.parameters.end.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
  static play() {}
//^^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^            storage.modifier.js
//       ^^^^^^     meta.function.method.js
//       ^^^^       entity.name.function.method.js
//           ^      punctuation.definition.parameters.begin.js
//            ^     punctuation.definition.parameters.end.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
  static play(arg) {}
//^^^^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^               storage.modifier.js
//       ^^^^^^^^^     meta.function.method.js
//       ^^^^          entity.name.function.method.js
//           ^         punctuation.definition.parameters.begin.js
//            ^^^      variable.other.readwrite.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
  static *play() {}
//^^^^^^ ^^^^^^^ ^^  meta.class.body.js
//^^^^^^             storage.modifier.js
//       ^^^^^^^     meta.function.method.js
//       ^           keyword.generator.asterisk.js
//        ^^^^       entity.name.function.method.js
//            ^      punctuation.definition.parameters.begin.js
//             ^     punctuation.definition.parameters.end.js
//               ^^  meta.group.braces.curly
//               ^^  meta.brace.curly.js
  static *play(arg) {}
//^^^^^^ ^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                storage.modifier.js
//       ^^^^^^^^^^     meta.function.method.js
//       ^              keyword.generator.asterisk.js
//        ^^^^          entity.name.function.method.js
//            ^         punctuation.definition.parameters.begin.js
//             ^^^      variable.other.readwrite.js
//                ^     punctuation.definition.parameters.end.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js
  static async play() {}
//^^^^^^ ^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^                  storage.modifier.js
//       ^^^^^ ^^^^^^     meta.function.method.js
//       ^^^^^            storage.type.js
//             ^^^^       entity.name.function.method.js
//                 ^      punctuation.definition.parameters.begin.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
  static async play(arg) {}
//^^^^^^ ^^^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                     storage.modifier.js
//       ^^^^^ ^^^^^^^^^     meta.function.method.js
//       ^^^^^               storage.type.js
//             ^^^^          entity.name.function.method.js
//                 ^         punctuation.definition.parameters.begin.js
//                  ^^^      variable.other.readwrite.js
//                     ^     punctuation.definition.parameters.end.js
//                       ^^  meta.group.braces.curly
//                       ^^  meta.brace.curly.js
  static get play() {}
//^^^^^^ ^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^                storage.modifier.js
//       ^^^ ^^^^^^     meta.accessor.js
//       ^^^            storage.type.accessor.js
//           ^^^^       entity.name.accessor.js
//               ^      punctuation.definition.parameters.begin.js
//                ^     punctuation.definition.parameters.end.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js
  static set play(arg) {}
//^^^^^^ ^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                   storage.modifier.js
//       ^^^ ^^^^^^^^^     meta.accessor.js
//       ^^^               storage.type.accessor.js
//           ^^^^          entity.name.accessor.js
//               ^         punctuation.definition.parameters.begin.js
//                ^^^      variable.other.readwrite.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.group.braces.curly
//                     ^^  meta.brace.curly.js
  0() {}
//^^^ ^^  meta.class.body.js
//^       constant.numeric.js
// ^^     meta.group.braces.round
// ^^     meta.brace.round.js
//    ^^  meta.group.braces.curly
//    ^^  meta.brace.curly.js
  0(arg) {}
//^^^^^^ ^^  meta.class.body.js
//^          constant.numeric.js
// ^^^^^     meta.group.braces.round
// ^   ^     meta.brace.round.js
//  ^^^      variable.other.readwrite.js
//       ^^  meta.group.braces.curly
//       ^^  meta.brace.curly.js
  *0() {}
//^^^^ ^^  meta.class.body.js
//^        keyword.operator.arithmetic.js
// ^       constant.numeric.js
//  ^^     meta.group.braces.round
//  ^^     meta.brace.round.js
//     ^^  meta.group.braces.curly
//     ^^  meta.brace.curly.js
  *0(arg) {}
//^^^^^^^ ^^  meta.class.body.js
//^           keyword.operator.arithmetic.js
// ^          constant.numeric.js
//  ^^^^^     meta.group.braces.round
//  ^   ^     meta.brace.round.js
//   ^^^      variable.other.readwrite.js
//        ^^  meta.group.braces.curly
//        ^^  meta.brace.curly.js
  async 0() {}
//^^^^^ ^^^ ^^  meta.class.body.js
//^^^^^         variable.other.readwrite.js
//      ^       constant.numeric.js
//       ^^     meta.group.braces.round
//       ^^     meta.brace.round.js
//          ^^  meta.group.braces.curly
//          ^^  meta.brace.curly.js
  async 0(arg) {}
//^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^   ^^^      variable.other.readwrite.js
//      ^          constant.numeric.js
//       ^^^^^     meta.group.braces.round
//       ^   ^     meta.brace.round.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  get 0() {}
//^^^ ^^^ ^^  meta.class.body.js
//^^^         variable.other.readwrite.js
//    ^       constant.numeric.js
//     ^^     meta.group.braces.round
//     ^^     meta.brace.round.js
//        ^^  meta.group.braces.curly
//        ^^  meta.brace.curly.js
  set 0(arg) {}
//^^^ ^^^^^^ ^^  meta.class.body.js
//^^^   ^^^      variable.other.readwrite.js
//    ^          constant.numeric.js
//     ^^^^^     meta.group.braces.round
//     ^   ^     meta.brace.round.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
  static 0() {}
//^^^^^^ ^^^ ^^  meta.class.body.js
//^^^^^^         storage.modifier.js
//       ^       constant.numeric.js
//        ^^     meta.group.braces.round
//        ^^     meta.brace.round.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
  static 0(arg) {}
//^^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^            storage.modifier.js
//       ^          constant.numeric.js
//        ^^^^^     meta.group.braces.round
//        ^   ^     meta.brace.round.js
//         ^^^      variable.other.readwrite.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
  static *0() {}
//^^^^^^ ^^^^ ^^  meta.class.body.js
//^^^^^^          storage.modifier.js
//       ^        keyword.operator.arithmetic.js
//        ^       constant.numeric.js
//         ^^     meta.group.braces.round
//         ^^     meta.brace.round.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js
  static *0(arg) {}
//^^^^^^ ^^^^^^^ ^^  meta.class.body.js
//^^^^^^             storage.modifier.js
//       ^           keyword.operator.arithmetic.js
//        ^          constant.numeric.js
//         ^^^^^     meta.group.braces.round
//         ^   ^     meta.brace.round.js
//          ^^^      variable.other.readwrite.js
//               ^^  meta.group.braces.curly
//               ^^  meta.brace.curly.js
  static async 0() {}
//^^^^^^ ^^^^^ ^^^ ^^  meta.class.body.js
//^^^^^^               storage.modifier.js
//       ^^^^^         variable.other.readwrite.js
//             ^       constant.numeric.js
//              ^^     meta.group.braces.round
//              ^^     meta.brace.round.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
  static async 0(arg) {}
//^^^^^^ ^^^^^ ^^^^^^ ^^  meta.class.body.js
//^^^^^^                  storage.modifier.js
//       ^^^^^   ^^^      variable.other.readwrite.js
//             ^          constant.numeric.js
//              ^^^^^     meta.group.braces.round
//              ^   ^     meta.brace.round.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
  [play]() {}
//^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^     meta.function.method.js
//^            meta.brace.square.open.flowtype
// ^^^^        variable.other.readwrite.js
//     ^       meta.brace.square.end.flowtype
//      ^      punctuation.definition.parameters.begin.js
//       ^     punctuation.definition.parameters.end.js
//         ^^  meta.group.braces.curly
//         ^^  meta.brace.curly.js
  [play](arg) {}
//^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^     meta.function.method.js
//^               meta.brace.square.open.flowtype
// ^^^^  ^^^      variable.other.readwrite.js
//     ^          meta.brace.square.end.flowtype
//      ^         punctuation.definition.parameters.begin.js
//          ^     punctuation.definition.parameters.end.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js
  *[play]() {}
//^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^     meta.function.method.js
//^             keyword.generator.asterisk.js
// ^            meta.brace.square.open.flowtype
//  ^^^^        variable.other.readwrite.js
//      ^       meta.brace.square.end.flowtype
//       ^      punctuation.definition.parameters.begin.js
//        ^     punctuation.definition.parameters.end.js
//          ^^  meta.group.braces.curly
//          ^^  meta.brace.curly.js
  *[play](arg) {}
//^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^^^^^^^     meta.function.method.js
//^                keyword.generator.asterisk.js
// ^               meta.brace.square.open.flowtype
//  ^^^^  ^^^      variable.other.readwrite.js
//      ^          meta.brace.square.end.flowtype
//       ^         punctuation.definition.parameters.begin.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  async [play]() {}
//^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^     meta.function.method.js
//^^^^^              storage.type.js
//      ^            meta.brace.square.open.flowtype
//       ^^^^        variable.other.readwrite.js
//           ^       meta.brace.square.end.flowtype
//            ^      punctuation.definition.parameters.begin.js
//             ^     punctuation.definition.parameters.end.js
//               ^^  meta.group.braces.curly
//               ^^  meta.brace.curly.js
  async [play](arg) {}
//^^^^^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^ ^^^^^^^^^^^     meta.function.method.js
//^^^^^                 storage.type.js
//      ^               meta.brace.square.open.flowtype
//       ^^^^  ^^^      variable.other.readwrite.js
//           ^          meta.brace.square.end.flowtype
//            ^         punctuation.definition.parameters.begin.js
//                ^     punctuation.definition.parameters.end.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js
  get [play]() {}
//^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^ ^^^^^^^^     meta.accessor.js
//^^^              storage.type.accessor.js
//    ^            meta.brace.square.open.flowtype
//     ^^^^        variable.other.readwrite.js
//         ^       meta.brace.square.end.flowtype
//          ^      punctuation.definition.parameters.begin.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.group.braces.curly
//             ^^  meta.brace.curly.js
  set [play](arg) {}
//^^^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^ ^^^^^^^^^^^     meta.accessor.js
//^^^                 storage.type.accessor.js
//    ^               meta.brace.square.open.flowtype
//     ^^^^  ^^^      variable.other.readwrite.js
//         ^          meta.brace.square.end.flowtype
//          ^         punctuation.definition.parameters.begin.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
  static [play]() {}
//^^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^              storage.modifier.js
//       ^^^^^^^^     meta.function.method.js
//       ^            meta.brace.square.open.flowtype
//        ^^^^        variable.other.readwrite.js
//            ^       meta.brace.square.end.flowtype
//             ^      punctuation.definition.parameters.begin.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
  static [play](arg) {}
//^^^^^^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                 storage.modifier.js
//       ^^^^^^^^^^^     meta.function.method.js
//       ^               meta.brace.square.open.flowtype
//        ^^^^  ^^^      variable.other.readwrite.js
//            ^          meta.brace.square.end.flowtype
//             ^         punctuation.definition.parameters.begin.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js
  static *[play]() {}
//^^^^^^ ^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^               storage.modifier.js
//       ^^^^^^^^^     meta.function.method.js
//       ^             keyword.generator.asterisk.js
//        ^            meta.brace.square.open.flowtype
//         ^^^^        variable.other.readwrite.js
//             ^       meta.brace.square.end.flowtype
//              ^      punctuation.definition.parameters.begin.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
  static *[play](arg) {}
//^^^^^^ ^^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                  storage.modifier.js
//       ^^^^^^^^^^^^     meta.function.method.js
//       ^                keyword.generator.asterisk.js
//        ^               meta.brace.square.open.flowtype
//         ^^^^  ^^^      variable.other.readwrite.js
//             ^          meta.brace.square.end.flowtype
//              ^         punctuation.definition.parameters.begin.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
  static async [play]() {}
//^^^^^^ ^^^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                    storage.modifier.js
//       ^^^^^ ^^^^^^^^     meta.function.method.js
//       ^^^^^              storage.type.js
//             ^            meta.brace.square.open.flowtype
//              ^^^^        variable.other.readwrite.js
//                  ^       meta.brace.square.end.flowtype
//                   ^      punctuation.definition.parameters.begin.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
  static async [play](arg) {}
//^^^^^^ ^^^^^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                       storage.modifier.js
//       ^^^^^ ^^^^^^^^^^^     meta.function.method.js
//       ^^^^^                 storage.type.js
//             ^               meta.brace.square.open.flowtype
//              ^^^^  ^^^      variable.other.readwrite.js
//                  ^          meta.brace.square.end.flowtype
//                   ^         punctuation.definition.parameters.begin.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.group.braces.curly
//                         ^^  meta.brace.curly.js
  static get [play]() {}
//^^^^^^ ^^^ ^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                  storage.modifier.js
//       ^^^ ^^^^^^^^     meta.accessor.js
//       ^^^              storage.type.accessor.js
//           ^            meta.brace.square.open.flowtype
//            ^^^^        variable.other.readwrite.js
//                ^       meta.brace.square.end.flowtype
//                 ^      punctuation.definition.parameters.begin.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
  static set [play](arg) {}
//^^^^^^ ^^^ ^^^^^^^^^^^ ^^  meta.class.body.js
//^^^^^^                     storage.modifier.js
//       ^^^ ^^^^^^^^^^^     meta.accessor.js
//       ^^^                 storage.type.accessor.js
//           ^               meta.brace.square.open.flowtype
//            ^^^^  ^^^      variable.other.readwrite.js
//                ^          meta.brace.square.end.flowtype
//                 ^         punctuation.definition.parameters.begin.js
//                     ^     punctuation.definition.parameters.end.js
//                       ^^  meta.group.braces.curly
//                       ^^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

Sound
// <- variable.other.readwrite.js
 // <- variable.other.readwrite.js
//^^^  variable.other.readwrite.js
Sound()
// <- meta.function-call.without-arguments.js entity.name.function.js
 // <- meta.function-call.without-arguments.js entity.name.function.js
//^^^^^  meta.function-call.without-arguments.js
//^^^    entity.name.function.js
//   ^   punctuation.definition.parameters.begin.js
//    ^  punctuation.definition.parameters.end.js
Sound = {}
// <- variable.other.readwrite.js
 // <- variable.other.readwrite.js
//^^^       variable.other.readwrite.js
//    ^     keyword.operator.assignment.js
//      ^^  meta.group.braces.curly
//      ^^  meta.brace.curly.js
Sound.play
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^  meta.property.class.js
//^^^       variable.other.class.js
//   ^      keyword.operator.accessor.js
//    ^^^^  variable.other.property.static.js
Sound[play]
// <- variable.other.object.js
 // <- variable.other.object.js
//^^^        variable.other.object.js
//   ^^^^^^  meta.group.braces.square
//   ^    ^  meta.brace.square.js
//    ^^^^   variable.other.readwrite.js
Sound.play()
// <- meta.function-call.static.without-arguments.js variable.other.class.js
 // <- meta.function-call.static.without-arguments.js variable.other.class.js
//^^^^^^^^^^  meta.function-call.static.without-arguments.js
//^^^         variable.other.class.js
//   ^        keyword.operator.accessor.js
//    ^^^^    entity.name.function.js
//        ^^  meta.group.braces.round.function.arguments.js
Sound[play]()
// <- variable.other.object.js
 // <- variable.other.object.js
//^^^          variable.other.object.js
//   ^^^^^^^^  meta.function-call.without-arguments.js
//   ^         meta.brace.square.open.flowtype
//    ^^^^     variable.other.readwrite.js
//        ^    meta.brace.square.end.flowtype
//         ^   punctuation.definition.parameters.begin.js
//          ^  punctuation.definition.parameters.end.js
Sound.play = {}
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^       meta.property.class.js
//^^^            variable.other.class.js
//   ^           keyword.operator.accessor.js
//    ^^^^       variable.other.property.static.js
//         ^     keyword.operator.assignment.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
Sound[play] = {}
// <- variable.other.object.js
 // <- variable.other.object.js
//^^^             variable.other.object.js
//   ^^^^^^       meta.group.braces.square
//   ^    ^       meta.brace.square.js
//    ^^^^        variable.other.readwrite.js
//          ^     keyword.operator.assignment.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js
Sound.prototype
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^  meta.prototype.access.js
//^^^            entity.name.class.js
//   ^           keyword.operator.accessor.js
//    ^^^^^^^^^  variable.language.prototype.js
Sound.prototype()
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^    meta.prototype.access.js
//^^^              entity.name.class.js
//   ^             keyword.operator.accessor.js
//    ^^^^^^^^^    variable.language.prototype.js
//             ^^  meta.group.braces.round
//             ^^  meta.brace.round.js
Sound.prototype = {}
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^       meta.prototype.access.js
//^^^                 entity.name.class.js
//   ^                keyword.operator.accessor.js
//    ^^^^^^^^^       variable.language.prototype.js
//              ^     keyword.operator.assignment.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
Sound.prototype.play
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^       meta.prototype.access.js
//^^^                 entity.name.class.js
//   ^         ^      keyword.operator.accessor.js
//    ^^^^^^^^^       variable.language.prototype.js
//              ^^^^  meta.property.object.js
//              ^^^^  variable.other.property.js
Sound.prototype.play()
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^         meta.prototype.access.js
//^^^                   entity.name.class.js
//   ^         ^        keyword.operator.accessor.js
//    ^^^^^^^^^         variable.language.prototype.js
//              ^^^^^^  meta.function-call.method.without-arguments.js
//              ^^^^    entity.name.function.js
//                  ^^  meta.group.braces.round.function.arguments.js
Sound.prototype[play]()
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^          meta.prototype.access.js
//^^^                    entity.name.class.js
//   ^                   keyword.operator.accessor.js
//    ^^^^^^^^^          variable.language.prototype.js
//             ^^^^^^^^  meta.function-call.without-arguments.js
//             ^         meta.brace.square.open.flowtype
//              ^^^^     variable.other.readwrite.js
//                  ^    meta.brace.square.end.flowtype
//                   ^   punctuation.definition.parameters.begin.js
//                    ^  punctuation.definition.parameters.end.js
Sound.prototype.play =
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^         meta.prototype.access.js
//^^^                   entity.name.class.js
//   ^         ^        keyword.operator.accessor.js
//    ^^^^^^^^^         variable.language.prototype.js
//              ^^^^    meta.property.object.js
//              ^^^^    variable.other.property.js
//                   ^  keyword.operator.assignment.js
Sound.prototype[play] =
// <- meta.prototype.access.js entity.name.class.js
 // <- meta.prototype.access.js entity.name.class.js
//^^^^^^^^^^^^^          meta.prototype.access.js
//^^^                    entity.name.class.js
//   ^                   keyword.operator.accessor.js
//    ^^^^^^^^^          variable.language.prototype.js
//             ^^^^^^    meta.group.braces.square
//             ^    ^    meta.brace.square.js
//              ^^^^     variable.other.readwrite.js
//                    ^  keyword.operator.assignment.js
Sound.play.repeat
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^         meta.property.class.js
//^^^              variable.other.class.js
//   ^    ^        keyword.operator.accessor.js
//    ^^^^         variable.other.property.static.js
//         ^^^^^^  meta.property.object.js
//         ^^^^^^  variable.other.property.js
Sound[play].repeat
// <- variable.other.object.js
 // <- variable.other.object.js
//^^^               variable.other.object.js
//   ^^^^^^         meta.group.braces.square
//   ^    ^         meta.brace.square.js
//    ^^^^          variable.other.readwrite.js
//         ^        keyword.operator.accessor.js
//          ^^^^^^  meta.property.object.js
//          ^^^^^^  variable.other.property.js
Sound.play.repeat()
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^           meta.property.class.js
//^^^                variable.other.class.js
//   ^    ^          keyword.operator.accessor.js
//    ^^^^           variable.other.property.static.js
//         ^^^^^^^^  meta.function-call.method.without-arguments.js
//         ^^^^^^    entity.name.function.js
//               ^^  meta.group.braces.round.function.arguments.js
Sound[play].repeat()
// <- variable.other.object.js
 // <- variable.other.object.js
//^^^                 variable.other.object.js
//   ^^^^^^           meta.group.braces.square
//   ^    ^           meta.brace.square.js
//    ^^^^            variable.other.readwrite.js
//         ^          keyword.operator.accessor.js
//          ^^^^^^^^  meta.function-call.method.without-arguments.js
//          ^^^^^^    entity.name.function.js
//                ^^  meta.group.braces.round.function.arguments.js
Sound.play.repeat = {}
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^              meta.property.class.js
//^^^                   variable.other.class.js
//   ^    ^             keyword.operator.accessor.js
//    ^^^^              variable.other.property.static.js
//         ^^^^^^       meta.property.object.js
//         ^^^^^^       variable.other.property.js
//                ^     keyword.operator.assignment.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js
Sound[play].repeat = {}
// <- variable.other.object.js
 // <- variable.other.object.js
//^^^                    variable.other.object.js
//   ^^^^^^              meta.group.braces.square
//   ^    ^              meta.brace.square.js
//    ^^^^               variable.other.readwrite.js
//         ^             keyword.operator.accessor.js
//          ^^^^^^       meta.property.object.js
//          ^^^^^^       variable.other.property.js
//                 ^     keyword.operator.assignment.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js

Sound.prototype.play = function() {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^     meta.prototype.function.js
//^^^                                 entity.name.class.js
//   ^         ^                      keyword.operator.accessor.js
//    ^^^^^^^^^                       variable.language.prototype.js
//              ^^^^                  entity.name.function.js
//                   ^                keyword.operator.assignment.js
//                     ^^^^^^^^       storage.type.function.js
//                             ^      punctuation.definition.parameters.begin.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.group.braces.curly
//                                ^^  meta.brace.curly.js
Sound.prototype.play = function(arg) {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^     meta.prototype.function.js
//^^^                                    entity.name.class.js
//   ^         ^                         keyword.operator.accessor.js
//    ^^^^^^^^^                          variable.language.prototype.js
//              ^^^^                     entity.name.function.js
//                   ^                   keyword.operator.assignment.js
//                     ^^^^^^^^          storage.type.function.js
//                             ^         punctuation.definition.parameters.begin.js
//                              ^^^      variable.other.readwrite.js
//                                 ^     punctuation.definition.parameters.end.js
//                                   ^^  meta.group.braces.curly
//                                   ^^  meta.brace.curly.js
Sound.prototype.play = function*() {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^     meta.prototype.function.js
//^^^                                  entity.name.class.js
//   ^         ^                       keyword.operator.accessor.js
//    ^^^^^^^^^                        variable.language.prototype.js
//              ^^^^                   entity.name.function.js
//                   ^                 keyword.operator.assignment.js
//                     ^^^^^^^^        storage.type.function.js
//                             ^       keyword.generator.asterisk.js
//                              ^      punctuation.definition.parameters.begin.js
//                               ^     punctuation.definition.parameters.end.js
//                                 ^^  meta.group.braces.curly
//                                 ^^  meta.brace.curly.js
Sound.prototype.play = function*(arg) {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^     meta.prototype.function.js
//^^^                                     entity.name.class.js
//   ^         ^                          keyword.operator.accessor.js
//    ^^^^^^^^^                           variable.language.prototype.js
//              ^^^^                      entity.name.function.js
//                   ^                    keyword.operator.assignment.js
//                     ^^^^^^^^           storage.type.function.js
//                             ^          keyword.generator.asterisk.js
//                              ^         punctuation.definition.parameters.begin.js
//                               ^^^      variable.other.readwrite.js
//                                  ^     punctuation.definition.parameters.end.js
//                                    ^^  meta.group.braces.curly
//                                    ^^  meta.brace.curly.js
Sound.prototype.play = async function() {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^     meta.prototype.function.js
//^^^                                       entity.name.class.js
//   ^         ^                            keyword.operator.accessor.js
//    ^^^^^^^^^                             variable.language.prototype.js
//              ^^^^                        entity.name.function.js
//                   ^                      keyword.operator.assignment.js
//                     ^^^^^                storage.type.js
//                           ^^^^^^^^       storage.type.function.js
//                                   ^      punctuation.definition.parameters.begin.js
//                                    ^     punctuation.definition.parameters.end.js
//                                      ^^  meta.group.braces.curly
//                                      ^^  meta.brace.curly.js
Sound.prototype.play = async function(arg) {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^^^^     meta.prototype.function.js
//^^^                                          entity.name.class.js
//   ^         ^                               keyword.operator.accessor.js
//    ^^^^^^^^^                                variable.language.prototype.js
//              ^^^^                           entity.name.function.js
//                   ^                         keyword.operator.assignment.js
//                     ^^^^^                   storage.type.js
//                           ^^^^^^^^          storage.type.function.js
//                                   ^         punctuation.definition.parameters.begin.js
//                                    ^^^      variable.other.readwrite.js
//                                       ^     punctuation.definition.parameters.end.js
//                                         ^^  meta.group.braces.curly
//                                         ^^  meta.brace.curly.js
Sound.prototype.play = async function*() {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^^     meta.prototype.function.js
//^^^                                        entity.name.class.js
//   ^         ^                             keyword.operator.accessor.js
//    ^^^^^^^^^                              variable.language.prototype.js
//              ^^^^                         entity.name.function.js
//                   ^                       keyword.operator.assignment.js
//                     ^^^^^                 storage.type.js
//                           ^^^^^^^^        storage.type.function.js
//                                   ^       keyword.generator.asterisk.js
//                                    ^      punctuation.definition.parameters.begin.js
//                                     ^     punctuation.definition.parameters.end.js
//                                       ^^  meta.group.braces.curly
//                                       ^^  meta.brace.curly.js
Sound.prototype.play = async function*(arg) {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^^^^^     meta.prototype.function.js
//^^^                                           entity.name.class.js
//   ^         ^                                keyword.operator.accessor.js
//    ^^^^^^^^^                                 variable.language.prototype.js
//              ^^^^                            entity.name.function.js
//                   ^                          keyword.operator.assignment.js
//                     ^^^^^                    storage.type.js
//                           ^^^^^^^^           storage.type.function.js
//                                   ^          keyword.generator.asterisk.js
//                                    ^         punctuation.definition.parameters.begin.js
//                                     ^^^      variable.other.readwrite.js
//                                        ^     punctuation.definition.parameters.end.js
//                                          ^^  meta.group.braces.curly
//                                          ^^  meta.brace.curly.js
Sound.prototype.play = async () => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^ ^^     meta.prototype.function.arrow.js
//^^^                                  entity.name.class.js
//   ^         ^                       keyword.operator.accessor.js
//    ^^^^^^^^^                        variable.language.prototype.js
//              ^^^^                   entity.name.function.js
//                   ^                 keyword.operator.assignment.js
//                     ^^^^^           storage.type.js
//                           ^         punctuation.definition.parameters.begin.js
//                            ^        punctuation.definition.parameters.end.js
//                              ^^     storage.type.function.arrow.js
//                                 ^^  meta.group.braces.curly
//                                 ^^  meta.brace.curly.js
Sound.prototype.play = async (arg) => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^^^^ ^^     meta.prototype.function.arrow.js
//^^^                                     entity.name.class.js
//   ^         ^                          keyword.operator.accessor.js
//    ^^^^^^^^^                           variable.language.prototype.js
//              ^^^^                      entity.name.function.js
//                   ^                    keyword.operator.assignment.js
//                     ^^^^^              storage.type.js
//                           ^            punctuation.definition.parameters.begin.js
//                            ^^^         variable.other.readwrite.js
//                               ^        punctuation.definition.parameters.end.js
//                                 ^^     storage.type.function.arrow.js
//                                    ^^  meta.group.braces.curly
//                                    ^^  meta.brace.curly.js
Sound.prototype.play = async arg => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^^ ^^     meta.prototype.function.arrow.js
//^^^                                   entity.name.class.js
//   ^         ^                        keyword.operator.accessor.js
//    ^^^^^^^^^                         variable.language.prototype.js
//              ^^^^                    entity.name.function.js
//                   ^                  keyword.operator.assignment.js
//                     ^^^^^            storage.type.js
//                           ^^^        variable.other.readwrite.js
//                               ^^     storage.type.function.arrow.js
//                                  ^^  meta.group.braces.curly
//                                  ^^  meta.brace.curly.js
Sound.prototype.play = () => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^ ^^     meta.prototype.function.arrow.js
//^^^                            entity.name.class.js
//   ^         ^                 keyword.operator.accessor.js
//    ^^^^^^^^^                  variable.language.prototype.js
//              ^^^^             entity.name.function.js
//                   ^           keyword.operator.assignment.js
//                     ^         punctuation.definition.parameters.begin.js
//                      ^        punctuation.definition.parameters.end.js
//                        ^^     storage.type.function.arrow.js
//                           ^^  meta.group.braces.curly
//                           ^^  meta.brace.curly.js
Sound.prototype.play = (arg) => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^^^ ^^     meta.prototype.function.arrow.js
//^^^                               entity.name.class.js
//   ^         ^                    keyword.operator.accessor.js
//    ^^^^^^^^^                     variable.language.prototype.js
//              ^^^^                entity.name.function.js
//                   ^              keyword.operator.assignment.js
//                     ^            punctuation.definition.parameters.begin.js
//                      ^^^         variable.other.readwrite.js
//                         ^        punctuation.definition.parameters.end.js
//                           ^^     storage.type.function.arrow.js
//                              ^^  meta.group.braces.curly
//                              ^^  meta.brace.curly.js
Sound.prototype.play = arg => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js entity.name.class.js
//^^^^^^^^^^^^^^^^^^ ^ ^^^ ^^     meta.prototype.function.arrow.js
//^^^                             entity.name.class.js
//   ^         ^                  keyword.operator.accessor.js
//    ^^^^^^^^^                   variable.language.prototype.js
//              ^^^^              entity.name.function.js
//                   ^            keyword.operator.assignment.js
//                     ^^^        variable.other.readwrite.js
//                         ^^     storage.type.function.arrow.js
//                            ^^  meta.group.braces.curly
//                            ^^  meta.brace.curly.js

Sound.play = function() {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^^^^^^     meta.function.static.js
//^^^                       entity.name.class.js
//   ^                      keyword.operator.accessor.js
//    ^^^^                  entity.name.function.js
//         ^                keyword.operator.assignment.js
//           ^^^^^^^^       storage.type.function.js
//                   ^      punctuation.definition.parameters.begin.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
Sound.play = function(arg) {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^^^^^^^^^     meta.function.static.js
//^^^                          entity.name.class.js
//   ^                         keyword.operator.accessor.js
//    ^^^^                     entity.name.function.js
//         ^                   keyword.operator.assignment.js
//           ^^^^^^^^          storage.type.function.js
//                   ^         punctuation.definition.parameters.begin.js
//                    ^^^      variable.other.readwrite.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.group.braces.curly
//                         ^^  meta.brace.curly.js
Sound.play = function*() {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^^^^^^^     meta.function.static.js
//^^^                        entity.name.class.js
//   ^                       keyword.operator.accessor.js
//    ^^^^                   entity.name.function.js
//         ^                 keyword.operator.assignment.js
//           ^^^^^^^^        storage.type.function.js
//                   ^       keyword.generator.asterisk.js
//                    ^      punctuation.definition.parameters.begin.js
//                     ^     punctuation.definition.parameters.end.js
//                       ^^  meta.group.braces.curly
//                       ^^  meta.brace.curly.js
Sound.play = function*(arg) {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^^^^^^^^^^     meta.function.static.js
//^^^                           entity.name.class.js
//   ^                          keyword.operator.accessor.js
//    ^^^^                      entity.name.function.js
//         ^                    keyword.operator.assignment.js
//           ^^^^^^^^           storage.type.function.js
//                   ^          keyword.generator.asterisk.js
//                    ^         punctuation.definition.parameters.begin.js
//                     ^^^      variable.other.readwrite.js
//                        ^     punctuation.definition.parameters.end.js
//                          ^^  meta.group.braces.curly
//                          ^^  meta.brace.curly.js
Sound.play = async function() {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^     meta.function.static.js
//^^^                             entity.name.class.js
//   ^                            keyword.operator.accessor.js
//    ^^^^                        entity.name.function.js
//         ^                      keyword.operator.assignment.js
//           ^^^^^                storage.type.js
//                 ^^^^^^^^       storage.type.function.js
//                         ^      punctuation.definition.parameters.begin.js
//                          ^     punctuation.definition.parameters.end.js
//                            ^^  meta.group.braces.curly
//                            ^^  meta.brace.curly.js
Sound.play = async function(arg) {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^^^^     meta.function.static.js
//^^^                                entity.name.class.js
//   ^                               keyword.operator.accessor.js
//    ^^^^                           entity.name.function.js
//         ^                         keyword.operator.assignment.js
//           ^^^^^                   storage.type.js
//                 ^^^^^^^^          storage.type.function.js
//                         ^         punctuation.definition.parameters.begin.js
//                          ^^^      variable.other.readwrite.js
//                             ^     punctuation.definition.parameters.end.js
//                               ^^  meta.group.braces.curly
//                               ^^  meta.brace.curly.js
Sound.play = async function*() {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^^     meta.function.static.js
//^^^                              entity.name.class.js
//   ^                             keyword.operator.accessor.js
//    ^^^^                         entity.name.function.js
//         ^                       keyword.operator.assignment.js
//           ^^^^^                 storage.type.js
//                 ^^^^^^^^        storage.type.function.js
//                         ^       keyword.generator.asterisk.js
//                          ^      punctuation.definition.parameters.begin.js
//                           ^     punctuation.definition.parameters.end.js
//                             ^^  meta.group.braces.curly
//                             ^^  meta.brace.curly.js
Sound.play = async function*(arg) {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^^^^^^^^^^^^^     meta.function.static.js
//^^^                                 entity.name.class.js
//   ^                                keyword.operator.accessor.js
//    ^^^^                            entity.name.function.js
//         ^                          keyword.operator.assignment.js
//           ^^^^^                    storage.type.js
//                 ^^^^^^^^           storage.type.function.js
//                         ^          keyword.generator.asterisk.js
//                          ^         punctuation.definition.parameters.begin.js
//                           ^^^      variable.other.readwrite.js
//                              ^     punctuation.definition.parameters.end.js
//                                ^^  meta.group.braces.curly
//                                ^^  meta.brace.curly.js
Sound.play = async () => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^ ^^     meta.function.static.arrow.js
//^^^                        entity.name.class.js
//   ^                       keyword.operator.accessor.js
//    ^^^^                   entity.name.function.js
//         ^                 keyword.operator.assignment.js
//           ^^^^^           storage.type.js
//                 ^         punctuation.definition.parameters.begin.js
//                  ^        punctuation.definition.parameters.end.js
//                    ^^     storage.type.function.arrow.js
//                       ^^  meta.group.braces.curly
//                       ^^  meta.brace.curly.js
Sound.play = async (arg) => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^^^^ ^^     meta.function.static.arrow.js
//^^^                           entity.name.class.js
//   ^                          keyword.operator.accessor.js
//    ^^^^                      entity.name.function.js
//         ^                    keyword.operator.assignment.js
//           ^^^^^              storage.type.js
//                 ^            punctuation.definition.parameters.begin.js
//                  ^^^         variable.other.readwrite.js
//                     ^        punctuation.definition.parameters.end.js
//                       ^^     storage.type.function.arrow.js
//                          ^^  meta.group.braces.curly
//                          ^^  meta.brace.curly.js
Sound.play = async arg => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^^ ^^     meta.function.static.arrow.js
//^^^                         entity.name.class.js
//   ^                        keyword.operator.accessor.js
//    ^^^^                    entity.name.function.js
//         ^                  keyword.operator.assignment.js
//           ^^^^^            storage.type.js
//                 ^^^        variable.other.readwrite.js
//                     ^^     storage.type.function.arrow.js
//                        ^^  meta.group.braces.curly
//                        ^^  meta.brace.curly.js
Sound.play = () => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^ ^ ^^ ^^     meta.function.static.arrow.js
//^^^                  entity.name.class.js
//   ^                 keyword.operator.accessor.js
//    ^^^^             entity.name.function.js
//         ^           keyword.operator.assignment.js
//           ^         punctuation.definition.parameters.begin.js
//            ^        punctuation.definition.parameters.end.js
//              ^^     storage.type.function.arrow.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
Sound.play = (arg) => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^ ^ ^^^^^ ^^     meta.function.static.arrow.js
//^^^                     entity.name.class.js
//   ^                    keyword.operator.accessor.js
//    ^^^^                entity.name.function.js
//         ^              keyword.operator.assignment.js
//           ^            punctuation.definition.parameters.begin.js
//            ^^^         variable.other.readwrite.js
//               ^        punctuation.definition.parameters.end.js
//                 ^^     storage.type.function.arrow.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
Sound.play = arg => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js entity.name.class.js
//^^^^^^^^ ^ ^^^ ^^     meta.function.static.arrow.js
//^^^                   entity.name.class.js
//   ^                  keyword.operator.accessor.js
//    ^^^^              entity.name.function.js
//         ^            keyword.operator.assignment.js
//           ^^^        variable.other.readwrite.js
//               ^^     storage.type.function.arrow.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js

play = function() {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^^^^^^     meta.function.js
//^^                  entity.name.function.js
//   ^                keyword.operator.assignment.js
//     ^^^^^^^^       storage.type.function.js
//             ^      punctuation.definition.parameters.begin.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
play = function(arg) {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^^^^^^^^^     meta.function.js
//^^                     entity.name.function.js
//   ^                   keyword.operator.assignment.js
//     ^^^^^^^^          storage.type.function.js
//             ^         punctuation.definition.parameters.begin.js
//              ^^^      variable.other.readwrite.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js
play = function*() {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^^^^^^^     meta.function.js
//^^                   entity.name.function.js
//   ^                 keyword.operator.assignment.js
//     ^^^^^^^^        storage.type.function.js
//             ^       keyword.generator.asterisk.js
//              ^      punctuation.definition.parameters.begin.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
play = function*(arg) {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^^^^^^^^^^     meta.function.js
//^^                      entity.name.function.js
//   ^                    keyword.operator.assignment.js
//     ^^^^^^^^           storage.type.function.js
//             ^          keyword.generator.asterisk.js
//              ^         punctuation.definition.parameters.begin.js
//               ^^^      variable.other.readwrite.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
play = async function() {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^ ^^^^^^^^^^     meta.function.js
//^^                        entity.name.function.js
//   ^                      keyword.operator.assignment.js
//     ^^^^^                storage.type.js
//           ^^^^^^^^       storage.type.function.js
//                   ^      punctuation.definition.parameters.begin.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
play = async function(arg) {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^ ^^^^^^^^^^^^^     meta.function.js
//^^                           entity.name.function.js
//   ^                         keyword.operator.assignment.js
//     ^^^^^                   storage.type.js
//           ^^^^^^^^          storage.type.function.js
//                   ^         punctuation.definition.parameters.begin.js
//                    ^^^      variable.other.readwrite.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.group.braces.curly
//                         ^^  meta.brace.curly.js
play = async function*() {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^ ^^^^^^^^^^^     meta.function.js
//^^                         entity.name.function.js
//   ^                       keyword.operator.assignment.js
//     ^^^^^                 storage.type.js
//           ^^^^^^^^        storage.type.function.js
//                   ^       keyword.generator.asterisk.js
//                    ^      punctuation.definition.parameters.begin.js
//                     ^     punctuation.definition.parameters.end.js
//                       ^^  meta.group.braces.curly
//                       ^^  meta.brace.curly.js
play = async function*(arg) {}
// <- meta.function.js entity.name.function.js
 // <- meta.function.js entity.name.function.js
//^^ ^ ^^^^^ ^^^^^^^^^^^^^^     meta.function.js
//^^                            entity.name.function.js
//   ^                          keyword.operator.assignment.js
//     ^^^^^                    storage.type.js
//           ^^^^^^^^           storage.type.function.js
//                   ^          keyword.generator.asterisk.js
//                    ^         punctuation.definition.parameters.begin.js
//                     ^^^      variable.other.readwrite.js
//                        ^     punctuation.definition.parameters.end.js
//                          ^^  meta.group.braces.curly
//                          ^^  meta.brace.curly.js
play = async () => {}
// <- meta.function.arrow.js entity.name.function.js
 // <- meta.function.arrow.js entity.name.function.js
//^^ ^ ^^^^^ ^^ ^^     meta.function.arrow.js
//^^                   entity.name.function.js
//   ^                 keyword.operator.assignment.js
//     ^^^^^           storage.type.js
//           ^         punctuation.definition.parameters.begin.js
//            ^        punctuation.definition.parameters.end.js
//              ^^     storage.type.function.arrow.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
play = async (arg) => {}
// <- meta.function.arrow.js entity.name.function.js
 // <- meta.function.arrow.js entity.name.function.js
//^^ ^ ^^^^^ ^^^^^ ^^     meta.function.arrow.js
//^^                      entity.name.function.js
//   ^                    keyword.operator.assignment.js
//     ^^^^^              storage.type.js
//           ^            punctuation.definition.parameters.begin.js
//            ^^^         variable.other.readwrite.js
//               ^        punctuation.definition.parameters.end.js
//                 ^^     storage.type.function.arrow.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
play = async arg => {}
// <- meta.function.arrow.js entity.name.function.js
 // <- meta.function.arrow.js entity.name.function.js
//^^ ^ ^^^^^ ^^^ ^^     meta.function.arrow.js
//^^                    entity.name.function.js
//   ^                  keyword.operator.assignment.js
//     ^^^^^            storage.type.js
//           ^^^        variable.other.readwrite.js
//               ^^     storage.type.function.arrow.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js
play = () => {}
// <- meta.function.arrow.js entity.name.function.js
 // <- meta.function.arrow.js entity.name.function.js
//^^ ^ ^^ ^^     meta.function.arrow.js
//^^             entity.name.function.js
//   ^           keyword.operator.assignment.js
//     ^         punctuation.definition.parameters.begin.js
//      ^        punctuation.definition.parameters.end.js
//        ^^     storage.type.function.arrow.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
play = (arg) => {}
// <- meta.function.arrow.js entity.name.function.js
 // <- meta.function.arrow.js entity.name.function.js
//^^ ^ ^^^^^ ^^     meta.function.arrow.js
//^^                entity.name.function.js
//   ^              keyword.operator.assignment.js
//     ^            punctuation.definition.parameters.begin.js
//      ^^^         variable.other.readwrite.js
//         ^        punctuation.definition.parameters.end.js
//           ^^     storage.type.function.arrow.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
play = arg => {}
// <- meta.function.arrow.js entity.name.function.js
 // <- meta.function.arrow.js entity.name.function.js
//^^ ^ ^^^ ^^     meta.function.arrow.js
//^^              entity.name.function.js
//   ^            keyword.operator.assignment.js
//     ^^^        variable.other.readwrite.js
//         ^^     storage.type.function.arrow.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js

return function() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                keyword.control.flow.js
//     ^^^^^^^^^^     meta.function.js
//     ^^^^^^^^       storage.type.function.js
//             ^      punctuation.definition.parameters.begin.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.group.braces.curly
//                ^^  meta.brace.curly.js
return function(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                   keyword.control.flow.js
//     ^^^^^^^^^^^^^     meta.function.js
//     ^^^^^^^^          storage.type.function.js
//             ^         punctuation.definition.parameters.begin.js
//              ^^^      variable.other.readwrite.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.group.braces.curly
//                   ^^  meta.brace.curly.js
return function*() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                 keyword.control.flow.js
//     ^^^^^^^^^^^     meta.function.js
//     ^^^^^^^^        storage.type.function.js
//             ^       keyword.generator.asterisk.js
//              ^      punctuation.definition.parameters.begin.js
//               ^     punctuation.definition.parameters.end.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
return function*(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                    keyword.control.flow.js
//     ^^^^^^^^^^^^^^     meta.function.js
//     ^^^^^^^^           storage.type.function.js
//             ^          keyword.generator.asterisk.js
//              ^         punctuation.definition.parameters.begin.js
//               ^^^      variable.other.readwrite.js
//                  ^     punctuation.definition.parameters.end.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
return async function() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                      keyword.control.flow.js
//     ^^^^^ ^^^^^^^^^^     meta.function.js
//     ^^^^^                storage.type.js
//           ^^^^^^^^       storage.type.function.js
//                   ^      punctuation.definition.parameters.begin.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
return async function(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                         keyword.control.flow.js
//     ^^^^^ ^^^^^^^^^^^^^     meta.function.js
//     ^^^^^                   storage.type.js
//           ^^^^^^^^          storage.type.function.js
//                   ^         punctuation.definition.parameters.begin.js
//                    ^^^      variable.other.readwrite.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.group.braces.curly
//                         ^^  meta.brace.curly.js
return async function*() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                       keyword.control.flow.js
//     ^^^^^ ^^^^^^^^^^^     meta.function.js
//     ^^^^^                 storage.type.js
//           ^^^^^^^^        storage.type.function.js
//                   ^       keyword.generator.asterisk.js
//                    ^      punctuation.definition.parameters.begin.js
//                     ^     punctuation.definition.parameters.end.js
//                       ^^  meta.group.braces.curly
//                       ^^  meta.brace.curly.js
return async function*(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                          keyword.control.flow.js
//     ^^^^^ ^^^^^^^^^^^^^^     meta.function.js
//     ^^^^^                    storage.type.js
//           ^^^^^^^^           storage.type.function.js
//                   ^          keyword.generator.asterisk.js
//                    ^         punctuation.definition.parameters.begin.js
//                     ^^^      variable.other.readwrite.js
//                        ^     punctuation.definition.parameters.end.js
//                          ^^  meta.group.braces.curly
//                          ^^  meta.brace.curly.js
return async () => {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                 keyword.control.flow.js
//     ^^^^^ ^^ ^^     meta.function.arrow.js
//     ^^^^^           storage.type.js
//           ^         punctuation.definition.parameters.begin.js
//            ^        punctuation.definition.parameters.end.js
//              ^^     storage.type.function.arrow.js
//                 ^^  meta.group.braces.curly
//                 ^^  meta.brace.curly.js
return async (arg) => {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                    keyword.control.flow.js
//     ^^^^^ ^^^^^ ^^     meta.function.arrow.js
//     ^^^^^              storage.type.js
//           ^            punctuation.definition.parameters.begin.js
//            ^^^         variable.other.readwrite.js
//               ^        punctuation.definition.parameters.end.js
//                 ^^     storage.type.function.arrow.js
//                    ^^  meta.group.braces.curly
//                    ^^  meta.brace.curly.js
return async arg => {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                  keyword.control.flow.js
//     ^^^^^ ^^^ ^^     meta.function.arrow.js
//     ^^^^^            storage.type.js
//           ^^^        variable.other.readwrite.js
//               ^^     storage.type.function.arrow.js
//                  ^^  meta.group.braces.curly
//                  ^^  meta.brace.curly.js
return () => {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^           keyword.control.flow.js
//     ^^ ^^     meta.function.arrow.js
//     ^         punctuation.definition.parameters.begin.js
//      ^        punctuation.definition.parameters.end.js
//        ^^     storage.type.function.arrow.js
//           ^^  meta.group.braces.curly
//           ^^  meta.brace.curly.js
return (arg) => {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^              keyword.control.flow.js
//     ^^^^^ ^^     meta.function.arrow.js
//     ^            punctuation.definition.parameters.begin.js
//      ^^^         variable.other.readwrite.js
//         ^        punctuation.definition.parameters.end.js
//           ^^     storage.type.function.arrow.js
//              ^^  meta.group.braces.curly
//              ^^  meta.brace.curly.js
return arg => {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^            keyword.control.flow.js
//     ^^^ ^^     meta.function.arrow.js
//     ^^^        variable.other.readwrite.js
//         ^^     storage.type.function.arrow.js
//            ^^  meta.group.braces.curly
//            ^^  meta.brace.curly.js

return function play() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                     keyword.control.flow.js
//     ^^^^^^^^ ^^^^^^     meta.function.js
//     ^^^^^^^^            storage.type.function.js
//              ^^^^       entity.name.function.js
//                  ^      punctuation.definition.parameters.begin.js
//                   ^     punctuation.definition.parameters.end.js
//                     ^^  meta.group.braces.curly
//                     ^^  meta.brace.curly.js
return function play(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                        keyword.control.flow.js
//     ^^^^^^^^ ^^^^^^^^^     meta.function.js
//     ^^^^^^^^               storage.type.function.js
//              ^^^^          entity.name.function.js
//                  ^         punctuation.definition.parameters.begin.js
//                   ^^^      variable.other.readwrite.js
//                      ^     punctuation.definition.parameters.end.js
//                        ^^  meta.group.braces.curly
//                        ^^  meta.brace.curly.js
return function* play() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                      keyword.control.flow.js
//     ^^^^^^^^^ ^^^^^^     meta.function.js
//     ^^^^^^^^             storage.type.function.js
//             ^            keyword.generator.asterisk.js
//               ^^^^       entity.name.function.js
//                   ^      punctuation.definition.parameters.begin.js
//                    ^     punctuation.definition.parameters.end.js
//                      ^^  meta.group.braces.curly
//                      ^^  meta.brace.curly.js
return function* play(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                         keyword.control.flow.js
//     ^^^^^^^^^ ^^^^^^^^^     meta.function.js
//     ^^^^^^^^                storage.type.function.js
//             ^               keyword.generator.asterisk.js
//               ^^^^          entity.name.function.js
//                   ^         punctuation.definition.parameters.begin.js
//                    ^^^      variable.other.readwrite.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.group.braces.curly
//                         ^^  meta.brace.curly.js
return async function play() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                           keyword.control.flow.js
//     ^^^^^ ^^^^^^^^ ^^^^^^     meta.function.js
//     ^^^^^                     storage.type.js
//           ^^^^^^^^            storage.type.function.js
//                    ^^^^       entity.name.function.js
//                        ^      punctuation.definition.parameters.begin.js
//                         ^     punctuation.definition.parameters.end.js
//                           ^^  meta.group.braces.curly
//                           ^^  meta.brace.curly.js
return async function play(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                              keyword.control.flow.js
//     ^^^^^ ^^^^^^^^ ^^^^^^^^^     meta.function.js
//     ^^^^^                        storage.type.js
//           ^^^^^^^^               storage.type.function.js
//                    ^^^^          entity.name.function.js
//                        ^         punctuation.definition.parameters.begin.js
//                         ^^^      variable.other.readwrite.js
//                            ^     punctuation.definition.parameters.end.js
//                              ^^  meta.group.braces.curly
//                              ^^  meta.brace.curly.js
return async function* play() {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                            keyword.control.flow.js
//     ^^^^^ ^^^^^^^^^ ^^^^^^     meta.function.js
//     ^^^^^                      storage.type.js
//           ^^^^^^^^             storage.type.function.js
//                   ^            keyword.generator.asterisk.js
//                     ^^^^       entity.name.function.js
//                         ^      punctuation.definition.parameters.begin.js
//                          ^     punctuation.definition.parameters.end.js
//                            ^^  meta.group.braces.curly
//                            ^^  meta.brace.curly.js
return async function* play(arg) {}
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                               keyword.control.flow.js
//     ^^^^^ ^^^^^^^^^ ^^^^^^^^^     meta.function.js
//     ^^^^^                         storage.type.js
//           ^^^^^^^^                storage.type.function.js
//                   ^               keyword.generator.asterisk.js
//                     ^^^^          entity.name.function.js
//                         ^         punctuation.definition.parameters.begin.js
//                          ^^^      variable.other.readwrite.js
//                             ^     punctuation.definition.parameters.end.js
//                               ^^  meta.group.braces.curly
//                               ^^  meta.brace.curly.js

yield genfunc;
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^           keyword.control.flow.js
//    ^^^^^^^   variable.other.readwrite.js
//           ^  punctuation.terminator.statement.js
yield* genfunc;
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^           keyword.control.flow.js
//   ^           keyword.generator.asterisk.js
//     ^^^^^^^   variable.other.readwrite.js
//            ^  punctuation.terminator.statement.js

// >> only:source.js.jsx
