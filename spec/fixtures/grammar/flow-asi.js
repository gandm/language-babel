// SYNTAX TEST "source.js.jsx"
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^ ^^^^ ^^^^^^^^^^^^^^^  comment.line.double-slash.js


import * as context from "../../../api/node"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                        keyword.control.module.js
//     ^                                      keyword.operator.arithmetic.js
//       ^^         ^^^^                      keyword.control.module.reference.js
//          ^^^^^^^                           variable.other.readwrite.js
//                       ^^^^^^^^^^^^^^^^^^^  string.quoted.double.js
//                       ^                    punctuation.definition.string.begin.js
//                                         ^  punctuation.definition.string.end.js
import type Logger from "../logger"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                               keyword.control.module.js
//     ^^^^                          support.type.type.flowtype
//          ^^^^^^                   variable.other.readwrite.js
//                 ^^^^              keyword.control.module.reference.js
//                      ^^^^^^^^^^^  string.quoted.double.js
//                      ^            punctuation.definition.string.begin.js
//                                ^  punctuation.definition.string.end.js
import Plugin from "../../plugin"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                             keyword.control.module.js
//     ^^^^^^                      variable.other.readwrite.js
//            ^^^^                 keyword.control.module.reference.js
//                 ^^^^^^^^^^^^^^  string.quoted.double.js
//                 ^               punctuation.definition.string.begin.js
//                              ^  punctuation.definition.string.end.js
import * as messages from "babel-messages"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                      keyword.control.module.js
//     ^                                    keyword.operator.arithmetic.js
//       ^^          ^^^^                   keyword.control.module.reference.js
//          ^^^^^^^^                        variable.other.readwrite.js
//                        ^^^^^^^^^^^^^^^^  string.quoted.double.js
//                        ^                 punctuation.definition.string.begin.js
//                                       ^  punctuation.definition.string.end.js
import { normaliseOptions } from "./index"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                      keyword.control.module.js
//     ^                  ^                 meta.brace.curly.js
//       ^^^^^^^^^^^^^^^^                   variable.other.readwrite.js
//                          ^^^^            keyword.control.module.reference.js
//                               ^^^^^^^^^  string.quoted.double.js
//                               ^          punctuation.definition.string.begin.js
//                                       ^  punctuation.definition.string.end.js
import resolve from "../../../helpers/resolve"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                          keyword.control.module.js
//     ^^^^^^^                                  variable.other.readwrite.js
//             ^^^^                             keyword.control.module.reference.js
//                  ^^^^^^^^^^^^^^^^^^^^^^^^^^  string.quoted.double.js
//                  ^                           punctuation.definition.string.begin.js
//                                           ^  punctuation.definition.string.end.js
import json5 from "json5"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                     keyword.control.module.js
//     ^^^^^               variable.other.readwrite.js
//           ^^^^          keyword.control.module.reference.js
//                ^^^^^^^  string.quoted.double.js
//                ^        punctuation.definition.string.begin.js
//                      ^  punctuation.definition.string.end.js
import isAbsolute from "path-is-absolute"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                     keyword.control.module.js
//     ^^^^^^^^^^                          variable.other.readwrite.js
//                ^^^^                     keyword.control.module.reference.js
//                     ^^^^^^^^^^^^^^^^^^  string.quoted.double.js
//                     ^                   punctuation.definition.string.begin.js
//                                      ^  punctuation.definition.string.end.js
import pathExists from "path-exists"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                keyword.control.module.js
//     ^^^^^^^^^^                     variable.other.readwrite.js
//                ^^^^                keyword.control.module.reference.js
//                     ^^^^^^^^^^^^^  string.quoted.double.js
//                     ^              punctuation.definition.string.begin.js
//                                 ^  punctuation.definition.string.end.js
import cloneDeep from "lodash/lang/cloneDeep"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                         keyword.control.module.js
//     ^^^^^^^^^                               variable.other.readwrite.js
//               ^^^^                          keyword.control.module.reference.js
//                    ^^^^^^^^^^^^^^^^^^^^^^^  string.quoted.double.js
//                    ^                        punctuation.definition.string.begin.js
//                                          ^  punctuation.definition.string.end.js
import clone from "lodash/lang/clone"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                 keyword.control.module.js
//     ^^^^^                           variable.other.readwrite.js
//           ^^^^                      keyword.control.module.reference.js
//                ^^^^^^^^^^^^^^^^^^^  string.quoted.double.js
//                ^                    punctuation.definition.string.begin.js
//                                  ^  punctuation.definition.string.end.js
import merge from "../../../helpers/merge"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                                      keyword.control.module.js
//     ^^^^^                                variable.other.readwrite.js
//           ^^^^                           keyword.control.module.reference.js
//                ^^^^^^^^^^^^^^^^^^^^^^^^  string.quoted.double.js
//                ^                         punctuation.definition.string.begin.js
//                                       ^  punctuation.definition.string.end.js
import config from "./config"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                         keyword.control.module.js
//     ^^^^^^                  variable.other.readwrite.js
//            ^^^^             keyword.control.module.reference.js
//                 ^^^^^^^^^^  string.quoted.double.js
//                 ^           punctuation.definition.string.begin.js
//                          ^  punctuation.definition.string.end.js
import removed from "./removed"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                           keyword.control.module.js
//     ^^^^^^^                   variable.other.readwrite.js
//             ^^^^              keyword.control.module.reference.js
//                  ^^^^^^^^^^^  string.quoted.double.js
//                  ^            punctuation.definition.string.begin.js
//                            ^  punctuation.definition.string.end.js
import path from "path"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                   keyword.control.module.js
//     ^^^^              variable.other.readwrite.js
//          ^^^^         keyword.control.module.reference.js
//               ^^^^^^  string.quoted.double.js
//               ^       punctuation.definition.string.begin.js
//                    ^  punctuation.definition.string.end.js
import fs from "fs"
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^               keyword.control.module.js
//     ^^            variable.other.readwrite.js
//        ^^^^       keyword.control.module.reference.js
//             ^^^^  string.quoted.double.js
//             ^     punctuation.definition.string.begin.js
//                ^  punctuation.definition.string.end.js

let existsCache = {}
// <- storage.type.js
 // <- storage.type.js
//^                   storage.type.js
//  ^^^^^^^^^^^       variable.other.readwrite.js
//              ^     keyword.operator.assignment.js
//                ^^  meta.brace.curly.js
let jsonCache   = {}
// <- storage.type.js
 // <- storage.type.js
//^                   storage.type.js
//  ^^^^^^^^^         variable.other.readwrite.js
//              ^     keyword.operator.assignment.js
//                ^^  meta.brace.curly.js

const BABELIGNORE_FILENAME = ".babelignore"
// <- storage.type.js
 // <- storage.type.js
//^^^                                        storage.type.js
//    ^^^^^^^^^^^^^^^^^^^^                   variable.other.constant.js
//                         ^                 keyword.operator.assignment.js
//                           ^^^^^^^^^^^^^^  string.quoted.double.js
//                           ^               punctuation.definition.string.begin.js
//                                        ^  punctuation.definition.string.end.js
const BABELRC_FILENAME     = ".babelrc"
// <- storage.type.js
 // <- storage.type.js
//^^^                                    storage.type.js
//    ^^^^^^^^^^^^^^^^                   variable.other.constant.js
//                         ^             keyword.operator.assignment.js
//                           ^^^^^^^^^^  string.quoted.double.js
//                           ^           punctuation.definition.string.begin.js
//                                    ^  punctuation.definition.string.end.js
const PACKAGE_FILENAME     = "package.json"
// <- storage.type.js
 // <- storage.type.js
//^^^                                        storage.type.js
//    ^^^^^^^^^^^^^^^^                       variable.other.constant.js
//                         ^                 keyword.operator.assignment.js
//                           ^^^^^^^^^^^^^^  string.quoted.double.js
//                           ^               punctuation.definition.string.begin.js
//                                        ^  punctuation.definition.string.end.js

function exists(filename) {
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^^^^^^^^    meta.function.js
//^^^^^^                     storage.type.function.js
//       ^^^^^^              entity.name.function.js
//             ^             punctuation.definition.parameters.begin.js
//              ^^^^^^^^     variable.other.readwrite.js
//                      ^    punctuation.definition.parameters.end.js
//                        ^  meta.brace.curly.js
  let cached = existsCache[filename]
//^^^                                 storage.type.js
//    ^^^^^^               ^^^^^^^^   variable.other.readwrite.js
//           ^                        keyword.operator.assignment.js
//             ^^^^^^^^^^^            variable.other.object.js
//                        ^        ^  meta.brace.square.js
  if (cached == null) {
//^^                     keyword.control.conditional.js
//   ^              ^    meta.brace.round.js
//    ^^^^^^             variable.other.readwrite.js
//           ^^          keyword.operator.comparison.js
//              ^^^^     constant.language.null.js
//                    ^  meta.brace.curly.js
    return existsCache[filename] = pathExists.sync(filename)
//  ^^^^^^                                                    keyword.control.flow.js
//         ^^^^^^^^^^^             ^^^^^^^^^^                 variable.other.object.js
//                    ^        ^                              meta.brace.square.js
//                     ^^^^^^^^                    ^^^^^^^^   variable.other.readwrite.js
//                               ^                            keyword.operator.assignment.js
//                                           ^                keyword.operator.accessor.js
//                                            ^^^^            meta.function-call.method.with-arguments.js
//                                            ^^^^            entity.name.function.js
//                                                ^        ^  meta.brace.round.js
  } else {
//^      ^  meta.brace.curly.js
//  ^^^^    keyword.control.conditional.js
    return cached
//  ^^^^^^         keyword.control.flow.js
//         ^^^^^^  variable.other.readwrite.js
  }
//^  meta.brace.curly.js
}
// <- meta.brace.curly.js

type PluginObject = {
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                   support.type.type.flowtype
//   ^^^^^^^^^^^^      support.type.class.flowtype
//                  ^  meta.brace.curly.js
  pre?: Function
//^^^             variable.other.readwrite.js
//   ^            keyword.operator.optional.parameter.flowtype
//    ^           punctuation.type.flowtype
//      ^^^^^^^^  support.type.builtin.class.flowtype
  post?: Function
//^^^^             variable.other.readwrite.js
//    ^            keyword.operator.optional.parameter.flowtype
//     ^           punctuation.type.flowtype
//       ^^^^^^^^  support.type.builtin.class.flowtype
  manipulateOptions?: Function
//^^^^^^^^^^^^^^^^^             variable.other.readwrite.js
//                 ^            keyword.operator.optional.parameter.flowtype
//                  ^           punctuation.type.flowtype
//                    ^^^^^^^^  support.type.builtin.class.flowtype

  visitor: ?{
//^^^^^^^      variable.other.readwrite.js
//       ^     punctuation.type.flowtype
//         ^   keyword.operator.maybe.flowtype
//          ^  meta.brace.round.open.flowtype
    [key: string]: Function | {
//  ^                            meta.brace.square.open.flowtype
//   ^^^                         variable.other.readwrite.js
//      ^        ^               punctuation.type.flowtype
//        ^^^^^^                 support.type.builtin.primitive.flowtype
//              ^                meta.brace.square.end.flowtype
//                 ^^^^^^^^      support.type.builtin.class.flowtype
//                          ^    kewyword.operator.union.flowtype
//                            ^  meta.brace.round.open.flowtype
      enter?: Function | Array<Function>
//    ^^^^^                               variable.other.property.flowtype
//         ^                              keyword.operator.optional.parameter.flowtype
//          ^                             punctuation.type.flowtype
//            ^^^^^^^^   ^^^^^ ^^^^^^^^   support.type.builtin.class.flowtype
//                     ^                  kewyword.operator.union.flowtype
//                            ^        ^  punctuation.flowtype
      exit?: Function | Array<Function>
//    ^^^^                               variable.other.property.flowtype
//        ^                              keyword.operator.optional.parameter.flowtype
//         ^                             punctuation.type.flowtype
//           ^^^^^^^^   ^^^^^ ^^^^^^^^   support.type.builtin.class.flowtype
//                    ^                  kewyword.operator.union.flowtype
//                           ^        ^  punctuation.flowtype
    }
//  ^  meta.brace.round.close.flowtype
  }
//^  meta.brace.round.close.flowtype
}
// <- meta.brace.curly.js

type MergeOptions = {
// <- support.type.type.flowtype
 // <- support.type.type.flowtype
//^^                   support.type.type.flowtype
//   ^^^^^^^^^^^^      support.type.class.flowtype
//                  ^  meta.brace.curly.js
  options?: Object,
//^^^^^^^            variable.other.readwrite.js
//       ^           keyword.operator.optional.parameter.flowtype
//        ^          punctuation.type.flowtype
//          ^^^^^^   support.type.builtin.class.flowtype
//                ^  meta.delimiter.comma.js
  extending?: Object,
//^^^^^^^^^            variable.other.readwrite.js
//         ^           keyword.operator.optional.parameter.flowtype
//          ^          punctuation.type.flowtype
//            ^^^^^^   support.type.builtin.class.flowtype
//                  ^  meta.delimiter.comma.js
  alias: string,
//^^^^^           variable.other.readwrite.js
//     ^          punctuation.type.flowtype
//       ^^^^^^   support.type.builtin.primitive.flowtype
//             ^  meta.delimiter.comma.js
  loc?: string,
//^^^            variable.other.readwrite.js
//   ^           keyword.operator.optional.parameter.flowtype
//    ^          punctuation.type.flowtype
//      ^^^^^^   support.type.builtin.primitive.flowtype
//            ^  meta.delimiter.comma.js
  dirname?: string
//^^^^^^^           variable.other.readwrite.js
//       ^          keyword.operator.optional.parameter.flowtype
//        ^         punctuation.type.flowtype
//          ^^^^^^  support.type.builtin.primitive.flowtype
}
// <- meta.brace.curly.js

export default class OptionManager {
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^                        keyword.control.module.js
//             ^^^^^                  meta.class.js
//             ^^^^^                  storage.type.class.js
//                   ^^^^^^^^^^^^^    entity.name.class.js
//                                 ^  punctuation.section.class.begin.js
  constructor(log?: Logger) {
//^^^^^^^^^^^^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^ ^^^^^^^    meta.function.method.js
//^^^^^^^^^^^                  entity.name.function.method.js
//           ^                 punctuation.definition.parameters.begin.js
//            ^^^              variable.other.readwrite.js
//               ^             keyword.operator.optional.parameter.flowtype
//                ^            punctuation.type.flowtype
//                  ^^^^^^     support.type.class.flowtype
//                        ^    punctuation.definition.parameters.end.js
//                          ^  meta.brace.curly.js
    this.resolvedConfigs = []
//  ^^^^^^^^^^^^^^^^^^^^ ^ ^^  meta.class.body.js
//  ^^^^                       variable.language.this.js
//      ^                      keyword.operator.accessor.js
//       ^^^^^^^^^^^^^^^       meta.property.object.js
//       ^^^^^^^^^^^^^^^       variable.other.property.js
//                       ^     keyword.operator.assignment.js
//                         ^^  meta.brace.square.js
    this.options = OptionManager.createBareOptions()
//  ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                                              variable.language.this.js
//      ^                       ^                     keyword.operator.accessor.js
//       ^^^^^^^                                      meta.property.object.js
//       ^^^^^^^                                      variable.other.property.js
//               ^                                    keyword.operator.assignment.js
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.static.without-arguments.js
//                 ^^^^^^^^^^^^^                      variable.other.class.js
//                               ^^^^^^^^^^^^^^^^^    entity.name.function.js
//                                                ^^  meta.group.braces.round.function.arguments.js
    this.log = log
//  ^^^^^^^^ ^ ^^^  meta.class.body.js
//  ^^^^            variable.language.this.js
//      ^           keyword.operator.accessor.js
//       ^^^        meta.property.object.js
//       ^^^        variable.other.property.js
//           ^      keyword.operator.assignment.js
//             ^^^  variable.other.readwrite.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  resolvedConfigs: Array<string>
//^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^^                 variable.other.readwrite.js
//               ^                punctuation.type.flowtype
//                 ^^^^^          support.type.builtin.class.flowtype
//                      ^      ^  punctuation.flowtype
//                       ^^^^^^   support.type.builtin.primitive.flowtype
  options: Object
//^^^^^^^^ ^^^^^^  meta.class.body.js
//^^^^^^^          variable.other.readwrite.js
//       ^         punctuation.type.flowtype
//         ^^^^^^  support.type.builtin.class.flowtype
  log: ?Logger
//^^^^ ^^^^^^^  meta.class.body.js
//^^^           variable.other.readwrite.js
//   ^          punctuation.type.flowtype
//     ^        keyword.operator.maybe.flowtype
//      ^^^^^^  support.type.class.flowtype

  static memoisedPlugins: Array<{
//^^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^                           storage.modifier.js
//       ^^^^^^^^^^^^^^^           variable.other.readwrite.js
//                      ^          punctuation.type.flowtype
//                        ^^^^^    support.type.builtin.class.flowtype
//                             ^   punctuation.flowtype
    container: Function
//  ^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^            support.type.primitive.flowtype
//           ^           punctuation.type.separator.flowtype
//             ^^^^^^^^  support.type.builtin.class.flowtype
    plugin: Plugin
//  ^^^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^^^          support.type.primitive.flowtype
//        ^         punctuation.type.separator.flowtype
//          ^^^^^^  support.type.class.flowtype
  }>
//^^  meta.class.body.js
// ^  punctuation.flowtype

  static memoisePluginContainer(fn, loc, i, alias)  {
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^  ^  meta.class.body.js
//^^^^^^                                               storage.modifier.js
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^     meta.function.method.js
//       ^^^^^^^^^^^^^^^^^^^^^^                        entity.name.function.method.js
//                             ^                       punctuation.definition.parameters.begin.js
//                              ^^  ^^^  ^  ^^^^^      variable.other.readwrite.js
//                                ^    ^  ^            meta.delimiter.comma.js
//                                               ^     punctuation.definition.parameters.end.js
//                                                  ^  meta.brace.curly.js
    for (let cache of (OptionManager.memoisedPlugins: Array<Object>)) {
//  ^^^ ^^^^ ^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^^ ^^^^ ^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^    meta.for.js
//  ^^^                                                                  keyword.control.loop.js
//      ^                                                           ^    meta.brace.round.js
//       ^^^                                                             storage.type.js
//           ^^^^^     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                     variable.other.readwrite.js
//                 ^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^     meta.function-call.with-arguments.js
//                 ^^                                                    entity.name.function.js
//                    ^                                                  punctuation.definition.parameters.begin.js
//                                                  ^                    punctuation.type.flowtype
//                                                    ^^^^^ ^^^^^^       support.type.builtin.class.flowtype
//                                                         ^      ^      punctuation.flowtype
//                                                                 ^     punctuation.definition.parameters.end.js
//                                                                    ^  meta.brace.curly.js
      if (cache.container === fn) return cache.plugin
//    ^^ ^^^^^^^^^^^^^^^^ ^^^ ^^^ ^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//    ^^                                               keyword.control.conditional.js
//       ^                      ^                      meta.brace.round.js
//        ^^^^^                          ^^^^^         variable.other.object.js
//             ^                              ^        keyword.operator.accessor.js
//              ^^^^^^^^^                      ^^^^^^  meta.property.object.js
//              ^^^^^^^^^                      ^^^^^^  variable.other.property.js
//                        ^^^                          keyword.operator.comparison.js
//                            ^^                       variable.other.readwrite.js
//                                ^^^^^^               keyword.control.flow.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    let obj: PluginObject;
//  ^^^ ^^^^ ^^^^^^^^^^^^^  meta.class.body.js
//  ^^^                     storage.type.js
//      ^^^                 variable.other.readwrite.js
//         ^                punctuation.type.flowtype
//           ^^^^^^^^^^^^   support.type.class.flowtype
//                       ^  punctuation.terminator.statement.js

    if (typeof fn === "function") {
//  ^^ ^^^^^^^ ^^ ^^^ ^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                               keyword.control.conditional.js
//     ^                        ^    meta.brace.round.js
//      ^^^^^^                       keyword.operator.js
//             ^^                    variable.other.readwrite.js
//                ^^^                keyword.operator.comparison.js
//                    ^^^^^^^^^^     string.quoted.double.js
//                    ^              punctuation.definition.string.begin.js
//                             ^     punctuation.definition.string.end.js
//                                ^  meta.brace.curly.js
      obj = fn(context)
//    ^^^ ^ ^^^^^^^^^^^  meta.class.body.js
//    ^^^      ^^^^^^^   variable.other.readwrite.js
//        ^              keyword.operator.assignment.js
//          ^^^^^^^^^^^  meta.function-call.with-arguments.js
//          ^^           entity.name.function.js
//            ^          punctuation.definition.parameters.begin.js
//                    ^  punctuation.definition.parameters.end.js
    } else {
//  ^ ^^^^ ^  meta.class.body.js
//  ^      ^  meta.brace.curly.js
//    ^^^^    keyword.control.conditional.js
      obj = fn
//    ^^^ ^ ^^  meta.class.body.js
//    ^^^   ^^  variable.other.readwrite.js
//        ^     keyword.operator.assignment.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    if (typeof obj === "object") {
//  ^^ ^^^^^^^ ^^^ ^^^ ^^^^^^^^^ ^  meta.class.body.js
//  ^^                              keyword.control.conditional.js
//     ^                       ^    meta.brace.round.js
//      ^^^^^^                      keyword.operator.js
//             ^^^                  variable.other.readwrite.js
//                 ^^^              keyword.operator.comparison.js
//                     ^^^^^^^^     string.quoted.double.js
//                     ^            punctuation.definition.string.begin.js
//                            ^     punctuation.definition.string.end.js
//                               ^  meta.brace.curly.js
      let plugin = new Plugin(obj, alias)
//    ^^^ ^^^^^^ ^ ^^^ ^^^^^^^^^^^ ^^^^^^  meta.class.body.js
//    ^^^                                  storage.type.js
//        ^^^^^^              ^^^  ^^^^^   variable.other.readwrite.js
//               ^                         keyword.operator.assignment.js
//                 ^^^ ^^^^^^^^^^^ ^^^^^^  meta.function-call.with-arguments.js
//                 ^^^                     keyword.operator.js
//                     ^^^^^^              entity.name.function.js
//                           ^             punctuation.definition.parameters.begin.js
//                               ^         meta.delimiter.comma.js
//                                      ^  punctuation.definition.parameters.end.js
      OptionManager.memoisedPlugins.push({
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^         meta.property.class.js
//    ^^^^^^^^^^^^^                         variable.other.class.js
//                 ^               ^        keyword.operator.accessor.js
//                  ^^^^^^^^^^^^^^^         variable.other.property.static.js
//                                  ^^^^    support.function.mutator.js
//                                      ^   meta.brace.round.js
//                                       ^  meta.brace.curly.js
        container: fn,
//      ^^^^^^^^^^ ^^^  meta.class.body.js
//      ^^^^^^^^^^      constant.other.object.key.js
//      ^^^^^^^^^       string.unquoted.js
//               ^      punctuation.separator.key-value.js
//                 ^^   variable.other.readwrite.js
//                   ^  meta.delimiter.comma.js
        plugin: plugin
//      ^^^^^^^ ^^^^^^  meta.class.body.js
//      ^^^^^^^         constant.other.object.key.js
//      ^^^^^^          string.unquoted.js
//            ^         punctuation.separator.key-value.js
//              ^^^^^^  variable.other.readwrite.js
      })
//    ^^  meta.class.body.js
//    ^   meta.brace.curly.js
//     ^  meta.brace.round.js
      return plugin
//    ^^^^^^ ^^^^^^  meta.class.body.js
//    ^^^^^^         keyword.control.flow.js
//           ^^^^^^  variable.other.readwrite.js
    } else {
//  ^ ^^^^ ^  meta.class.body.js
//  ^      ^  meta.brace.curly.js
//    ^^^^    keyword.control.conditional.js
      throw new TypeError(messages.get("pluginNotObject", loc, i, typeof obj) + loc + i)
//    ^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^ ^^^^ ^ ^^^ ^ ^^  meta.class.body.js
//    ^^^^^                                                                               keyword.control.trycatch.js
//          ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^ ^^^^ ^ ^^^ ^ ^^  meta.function-call.with-arguments.js
//          ^^^                                                   ^^^^^^                  keyword.operator.js
//              ^^^^^^^^^          ^^^                                                    entity.name.function.js
//                       ^            ^                                                   punctuation.definition.parameters.begin.js
//                        ^^^^^^^^                                                        variable.other.object.js
//                                ^                                                       keyword.operator.accessor.js
//                                 ^^^                                                    meta.function-call.method.with-arguments.js
//                                     ^^^^^^^^^^^^^^^^^                                  string.quoted.double.js
//                                     ^                                                  punctuation.definition.string.begin.js
//                                                     ^                                  punctuation.definition.string.end.js
//                                                      ^    ^  ^                         meta.delimiter.comma.js
//                                                        ^^^  ^         ^^^    ^^^   ^   variable.other.readwrite.js
//                                                                          ^          ^  punctuation.definition.parameters.end.js
//                                                                            ^     ^     keyword.operator.arithmetic.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js
    let obj: Array
//  ^^^ ^^^^ ^^^^^  meta.class.body.js
//  ^^^             storage.type.js
//      ^^^         variable.other.readwrite.js
//         ^        punctuation.type.flowtype
//           ^^^^^  support.type.class.flowtype
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

   static createBareOptions() {
// ^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
// ^^^^^^                        storage.modifier.js
//        ^^^^^^^^^^^^^^^^^^^    meta.function.method.js
//        ^^^^^^^^^^^^^^^^^      entity.name.function.method.js
//                         ^     punctuation.definition.parameters.begin.js
//                          ^    punctuation.definition.parameters.end.js
//                            ^  meta.brace.curly.js
    let opts = {}
//  ^^^ ^^^^ ^ ^^  meta.class.body.js
//  ^^^            storage.type.js
//      ^^^^       variable.other.readwrite.js
//           ^     keyword.operator.assignment.js
//             ^^  meta.brace.curly.js

    for (let key in config) {
//  ^^^ ^^^^ ^^^ ^^ ^^^^^^^ ^  meta.class.body.js
//  ^^^ ^^^^ ^^^ ^^ ^^^^^^^    meta.for.js
//  ^^^                        keyword.control.loop.js
//      ^                 ^    meta.brace.round.js
//       ^^^                   storage.type.js
//           ^^^    ^^^^^^     variable.other.readwrite.js
//               ^^            keyword.operator.js
//                          ^  meta.brace.curly.js
      let opt = config[key]
//    ^^^ ^^^ ^ ^^^^^^^^^^^  meta.class.body.js
//    ^^^                    storage.type.js
//        ^^^          ^^^   variable.other.readwrite.js
//            ^              keyword.operator.assignment.js
//              ^^^^^^       variable.other.object.js
//                    ^   ^  meta.brace.square.js
      opts[key] = clone(opt.default)
//    ^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^              ^^^           variable.other.object.js
//        ^   ^                       meta.brace.square.js
//         ^^^                        variable.other.readwrite.js
//              ^                     keyword.operator.assignment.js
//                ^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//                ^^^^^               entity.name.function.js
//                     ^              punctuation.definition.parameters.begin.js
//                         ^          keyword.operator.accessor.js
//                          ^^^^^^^   meta.property.object.js
//                          ^^^^^^^   variable.other.property.js
//                                 ^  punctuation.definition.parameters.end.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    return opts
//  ^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^       keyword.control.flow.js
//         ^^^^  variable.other.readwrite.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  static normalisePlugin(plugin, loc, i, alias) {
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^ ^  meta.class.body.js
//^^^^^^                                           storage.modifier.js
//       ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^    meta.function.method.js
//       ^^^^^^^^^^^^^^^                           entity.name.function.method.js
//                      ^                          punctuation.definition.parameters.begin.js
//                       ^^^^^^  ^^^  ^  ^^^^^     variable.other.readwrite.js
//                             ^    ^  ^           meta.delimiter.comma.js
//                                            ^    punctuation.definition.parameters.end.js
//                                              ^  meta.brace.curly.js
    plugin = plugin.__esModule ? plugin.default : plugin
//  ^^^^^^ ^ ^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^ ^^^^^^  meta.class.body.js
//  ^^^^^^                                        ^^^^^^  variable.other.readwrite.js
//         ^                                              keyword.operator.assignment.js
//           ^^^^^^              ^^^^^^                   variable.other.object.js
//                 ^                   ^                  keyword.operator.accessor.js
//                  ^^^^^^^^^^          ^^^^^^^           meta.property.object.js
//                  ^^^^^^^^^^          ^^^^^^^           variable.other.property.js
//                             ^                ^         keyword.operator.ternary.js

    if (!(plugin instanceof Plugin)) {
//  ^^ ^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^ ^  meta.class.body.js
//  ^^                                  keyword.control.conditional.js
//     ^ ^                        ^^    meta.brace.round.js
//      ^                               keyword.operator.logical.js
//        ^^^^^^            ^^^^^^      variable.other.readwrite.js
//               ^^^^^^^^^^             keyword.operator.js
//                                   ^  meta.brace.curly.js
      // allow plugin containers to be specified so they don't have to manually require
//    ^^ ^^^^^ ^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^ ^^^^ ^^^^^ ^^^^ ^^ ^^^^^^^^ ^^^^^^^  meta.class.body.js
//    ^^ ^^^^^ ^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^ ^^^^ ^^^^^ ^^^^ ^^ ^^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//    ^^                                                                                 punctuation.definition.comment.js
      if (typeof plugin === "function" || typeof plugin === "object") {
//    ^^ ^^^^^^^ ^^^^^^ ^^^ ^^^^^^^^^^ ^^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^^^^ ^  meta.class.body.js
//    ^^                                                                 keyword.control.conditional.js
//       ^                                                          ^    meta.brace.round.js
//        ^^^^^^                          ^^^^^^                         keyword.operator.js
//               ^^^^^^                          ^^^^^^                  variable.other.readwrite.js
//                      ^^^                             ^^^              keyword.operator.comparison.js
//                          ^^^^^^^^^^                      ^^^^^^^^     string.quoted.double.js
//                          ^                               ^            punctuation.definition.string.begin.js
//                                   ^                             ^     punctuation.definition.string.end.js
//                                     ^^                                keyword.operator.logical.js
//                                                                    ^  meta.brace.curly.js
        plugin = OptionManager.memoisePluginContainer(plugin, loc, i, alias)
//      ^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^  meta.class.body.js
//      ^^^^^^                                        ^^^^^^  ^^^  ^  ^^^^^   variable.other.readwrite.js
//             ^                                                              keyword.operator.assignment.js
//               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                         meta.function-call.static.with-arguments.js
//               ^^^^^^^^^^^^^                                                variable.other.class.js
//                            ^                                               keyword.operator.accessor.js
//                             ^^^^^^^^^^^^^^^^^^^^^^                         entity.name.function.js
//                                                   ^                     ^  meta.brace.round.js
//                                                          ^    ^  ^         meta.delimiter.comma.js
      } else {
//    ^ ^^^^ ^  meta.class.body.js
//    ^      ^  meta.brace.curly.js
//      ^^^^    keyword.control.conditional.js
        throw new TypeError(messages.get("pluginNotFunction", loc, i, typeof plugin))
//      ^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^ ^^^^^^^^  meta.class.body.js
//      ^^^^^                                                                          keyword.control.trycatch.js
//            ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^ ^^^^^^^^  meta.function-call.with-arguments.js
//            ^^^                                                     ^^^^^^           keyword.operator.js
//                ^^^^^^^^^          ^^^                                               entity.name.function.js
//                         ^            ^                                              punctuation.definition.parameters.begin.js
//                          ^^^^^^^^                                                   variable.other.object.js
//                                  ^                                                  keyword.operator.accessor.js
//                                   ^^^                                               meta.function-call.method.with-arguments.js
//                                       ^^^^^^^^^^^^^^^^^^^                           string.quoted.double.js
//                                       ^                                             punctuation.definition.string.begin.js
//                                                         ^                           punctuation.definition.string.end.js
//                                                          ^    ^  ^                  meta.delimiter.comma.js
//                                                            ^^^  ^         ^^^^^^    variable.other.readwrite.js
//                                                                                 ^^  punctuation.definition.parameters.end.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    plugin.init(loc, i)
//  ^^^^^^^^^^^^^^^^ ^^  meta.class.body.js
//  ^^^^^^               variable.other.object.js
//        ^              keyword.operator.accessor.js
//         ^^^^          meta.function-call.method.with-arguments.js
//         ^^^^          entity.name.function.js
//             ^      ^  meta.brace.round.js
//              ^^^  ^   variable.other.readwrite.js
//                 ^     meta.delimiter.comma.js

    return plugin
//  ^^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^^^         keyword.control.flow.js
//         ^^^^^^  variable.other.readwrite.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  static normalisePlugins(loc, dirname, plugins) {
//^^^^^^ ^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^ ^  meta.class.body.js
//^^^^^^                                            storage.modifier.js
//       ^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^    meta.function.method.js
//       ^^^^^^^^^^^^^^^^                           entity.name.function.method.js
//                       ^                          punctuation.definition.parameters.begin.js
//                        ^^^  ^^^^^^^  ^^^^^^^     variable.other.readwrite.js
//                           ^        ^             meta.delimiter.comma.js
//                                             ^    punctuation.definition.parameters.end.js
//                                               ^  meta.brace.curly.js
    return plugins.map(function (val, i) {
//  ^^^^^^ ^^^^^^^^^^^^^^^^^^^^ ^^^^^ ^^ ^  meta.class.body.js
//  ^^^^^^                                  keyword.control.flow.js
//         ^^^^^^^                          variable.other.object.js
//                ^                         keyword.operator.accessor.js
//                 ^^^                      meta.function-call.method.with-arguments.js
//                 ^^^                      entity.name.function.js
//                    ^                     meta.brace.round.js
//                     ^^^^^^^^ ^^^^^ ^^    meta.function.js
//                     ^^^^^^^^             storage.type.function.js
//                              ^           punctuation.definition.parameters.begin.js
//                               ^^^  ^     variable.other.readwrite.js
//                                  ^       meta.delimiter.comma.js
//                                     ^    punctuation.definition.parameters.end.js
//                                       ^  meta.brace.curly.js
      let plugin, options
//    ^^^ ^^^^^^^ ^^^^^^^  meta.class.body.js
//    ^^^                  storage.type.js
//        ^^^^^^  ^^^^^^^  variable.other.readwrite.js
//              ^          meta.delimiter.comma.js

      if (!val) {
//    ^^ ^^^^^^ ^  meta.class.body.js
//    ^^           keyword.control.conditional.js
//       ^    ^    meta.brace.round.js
//        ^        keyword.operator.logical.js
//         ^^^     variable.other.readwrite.js
//              ^  meta.brace.curly.js
        throw new TypeError("Falsy value found in plugins")
//      ^^^^^ ^^^ ^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^ ^^ ^^^^^^^^^  meta.class.body.js
//      ^^^^^                                                keyword.control.trycatch.js
//            ^^^ ^^^^^^^^^^^^^^^^ ^^^^^ ^^^^^ ^^ ^^^^^^^^^  meta.function-call.with-arguments.js
//            ^^^                                            keyword.operator.js
//                ^^^^^^^^^                                  entity.name.function.js
//                         ^                                 punctuation.definition.parameters.begin.js
//                          ^^^^^^ ^^^^^ ^^^^^ ^^ ^^^^^^^^   string.quoted.double.js
//                          ^                                punctuation.definition.string.begin.js
//                                                       ^   punctuation.definition.string.end.js
//                                                        ^  punctuation.definition.parameters.end.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js

      // destructure plugins
//    ^^ ^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//    ^^ ^^^^^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//    ^^                      punctuation.definition.comment.js
      if (Array.isArray(val)) {
//    ^^ ^^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//    ^^                         keyword.control.conditional.js
//       ^             ^   ^^    meta.brace.round.js
//        ^^^^^                  support.class.builtin.js
//             ^                 keyword.operator.accessor.js
//              ^^^^^^^          meta.function-call.method.with-arguments.js
//              ^^^^^^^          entity.name.function.js
//                      ^^^      variable.other.readwrite.js
//                            ^  meta.brace.curly.js
        [plugin, options] = val
//      ^^^^^^^^ ^^^^^^^^ ^ ^^^  meta.class.body.js
//      ^               ^        meta.brace.square.js
//       ^^^^^^  ^^^^^^^    ^^^  variable.other.readwrite.js
//             ^                 meta.delimiter.comma.js
//                        ^      keyword.operator.assignment.js
      } else {
//    ^ ^^^^ ^  meta.class.body.js
//    ^      ^  meta.brace.curly.js
//      ^^^^    keyword.control.conditional.js
        plugin = val
//      ^^^^^^ ^ ^^^  meta.class.body.js
//      ^^^^^^   ^^^  variable.other.readwrite.js
//             ^      keyword.operator.assignment.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js

      let alias = typeof plugin === "string" ? plugin : `${loc}$${i}`
//    ^^^ ^^^^^ ^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^^^ ^ ^^^^^^ ^ ^^^^^^^^^^^^^  meta.class.body.js
//    ^^^                                                              storage.type.js
//        ^^^^^          ^^^^^^                ^^^^^^      ^^^    ^    variable.other.readwrite.js
//              ^                                                      keyword.operator.assignment.js
//                ^^^^^^                                               keyword.operator.js
//                              ^^^                                    keyword.operator.comparison.js
//                                  ^^^^^^^^                           string.quoted.double.js
//                                  ^                                  punctuation.definition.string.begin.js
//                                         ^                           punctuation.definition.string.end.js
//                                           ^        ^                keyword.operator.ternary.js
//                                                      ^^^^^^^^^^^^^  string.quasi.js
//                                                      ^              punctuation.definition.quasi.begin.js
//                                                      ^^^^^^^^^^^^^  string.quoted.template.js
//                                                       ^^^^^^ ^^^^   entity.quasi.element.js
//                                                       ^^     ^^     punctuation.quasi.element.begin.js
//                                                            ^    ^   punctuation.quasi.element.end.js
//                                                                  ^  punctuation.definition.quasi.end.js

      // allow plugins to be specified as strings
//    ^^ ^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^ ^^^^^^^  meta.class.body.js
//    ^^ ^^^^^ ^^^^^^^ ^^ ^^ ^^^^^^^^^ ^^ ^^^^^^^  comment.line.double-slash.js
//    ^^                                           punctuation.definition.comment.js
      if (typeof plugin === "string") {
//    ^^ ^^^^^^^ ^^^^^^ ^^^ ^^^^^^^^^ ^  meta.class.body.js
//    ^^                                 keyword.control.conditional.js
//       ^                          ^    meta.brace.round.js
//        ^^^^^^                         keyword.operator.js
//               ^^^^^^                  variable.other.readwrite.js
//                      ^^^              keyword.operator.comparison.js
//                          ^^^^^^^^     string.quoted.double.js
//                          ^            punctuation.definition.string.begin.js
//                                 ^     punctuation.definition.string.end.js
//                                    ^  meta.brace.curly.js
        let pluginLoc = resolve(`babel-plugin-${plugin}`, dirname) || resolve(plugin, dirname)
//      ^^^ ^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//      ^^^                                                                                     storage.type.js
//          ^^^^^^^^^                           ^^^^^^    ^^^^^^^             ^^^^^^  ^^^^^^^   variable.other.readwrite.js
//                    ^                                                                         keyword.operator.assignment.js
//                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^    ^^^^^^^^^^^^^^^ ^^^^^^^^  meta.function-call.with-arguments.js
//                      ^^^^^^^                                       ^^^^^^^                   entity.name.function.js
//                             ^                                             ^                  punctuation.definition.parameters.begin.js
//                              ^^^^^^^^^^^^^^^^^^^^^^^^                                        string.quasi.js
//                              ^                                                               punctuation.definition.quasi.begin.js
//                              ^^^^^^^^^^^^^^^^^^^^^^^^                                        string.quoted.template.js
//                                            ^^^^^^^^^                                         entity.quasi.element.js
//                                            ^^                                                punctuation.quasi.element.begin.js
//                                                    ^                                         punctuation.quasi.element.end.js
//                                                     ^                                        punctuation.definition.quasi.end.js
//                                                      ^                           ^           meta.delimiter.comma.js
//                                                               ^                           ^  punctuation.definition.parameters.end.js
//                                                                 ^^                           keyword.operator.logical.js
        if (pluginLoc) {
//      ^^ ^^^^^^^^^^^ ^  meta.class.body.js
//      ^^                keyword.control.conditional.js
//         ^         ^    meta.brace.round.js
//          ^^^^^^^^^     variable.other.readwrite.js
//                     ^  meta.brace.curly.js
          plugin = require(pluginLoc)
//        ^^^^^^ ^ ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^^^           ^^^^^^^^^   variable.other.readwrite.js
//               ^                     keyword.operator.assignment.js
//                 ^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//                 ^^^^^^^             entity.name.function.js
//                        ^            punctuation.definition.parameters.begin.js
//                                  ^  punctuation.definition.parameters.end.js
        } else {
//      ^ ^^^^ ^  meta.class.body.js
//      ^      ^  meta.brace.curly.js
//        ^^^^    keyword.control.conditional.js
          throw new ReferenceError(messages.get("pluginUnknown", plugin, loc, i, dirname))
//        ^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^  meta.class.body.js
//        ^^^^^                                                                             keyword.control.trycatch.js
//              ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^  meta.function-call.with-arguments.js
//              ^^^                                                                         keyword.operator.js
//                  ^^^^^^^^^^^^^^          ^^^                                             entity.name.function.js
//                                ^            ^                                            punctuation.definition.parameters.begin.js
//                                 ^^^^^^^^                                                 variable.other.object.js
//                                         ^                                                keyword.operator.accessor.js
//                                          ^^^                                             meta.function-call.method.with-arguments.js
//                                              ^^^^^^^^^^^^^^^                             string.quoted.double.js
//                                              ^                                           punctuation.definition.string.begin.js
//                                                            ^                             punctuation.definition.string.end.js
//                                                             ^       ^    ^  ^            meta.delimiter.comma.js
//                                                               ^^^^^^  ^^^  ^  ^^^^^^^    variable.other.readwrite.js
//                                                                                      ^^  punctuation.definition.parameters.end.js
        }
//      ^  meta.class.body.js
//      ^  meta.brace.curly.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js

      plugin = OptionManager.normalisePlugin(plugin, loc, i, alias)
//    ^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^  meta.class.body.js
//    ^^^^^^                                 ^^^^^^  ^^^  ^  ^^^^^   variable.other.readwrite.js
//           ^                                                       keyword.operator.assignment.js
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                         meta.function-call.static.with-arguments.js
//             ^^^^^^^^^^^^^                                         variable.other.class.js
//                          ^                                        keyword.operator.accessor.js
//                           ^^^^^^^^^^^^^^^                         entity.name.function.js
//                                          ^                     ^  meta.brace.round.js
//                                                 ^    ^  ^         meta.delimiter.comma.js

      return [plugin, options]
//    ^^^^^^ ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//    ^^^^^^                    keyword.control.flow.js
//           ^               ^  meta.brace.square.js
//            ^^^^^^  ^^^^^^^   variable.other.readwrite.js
//                  ^           meta.delimiter.comma.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  addConfig(loc: string, key?: string, json = json5): boolean {
//^^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^ ^^^^ ^ ^^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^ ^^^^ ^ ^^^^^^^ ^^^^^^^    meta.function.method.js
//^^^^^^^^^                                                      entity.name.function.method.js
//         ^                                                     punctuation.definition.parameters.begin.js
//          ^^^          ^^^           ^^^^   ^^^^^              variable.other.readwrite.js
//             ^             ^                      ^            punctuation.type.flowtype
//               ^^^^^^        ^^^^^^                 ^^^^^^^    support.type.builtin.primitive.flowtype
//                     ^             ^                           meta.delimiter.comma.js
//                          ^                                    keyword.operator.optional.parameter.flowtype
//                                          ^                    keyword.operator.assignment.js
//                                                 ^             punctuation.definition.parameters.end.js
//                                                            ^  meta.brace.curly.js
    if (this.resolvedConfigs.indexOf(loc) >= 0) {
//  ^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^ ^  meta.class.body.js
//  ^^                                             keyword.control.conditional.js
//     ^                            ^   ^     ^    meta.brace.round.js
//      ^^^^                                       variable.language.this.js
//          ^               ^                      keyword.operator.accessor.js
//           ^^^^^^^^^^^^^^^                       meta.property.object.js
//           ^^^^^^^^^^^^^^^                       variable.other.property.js
//                           ^^^^^^^               meta.function-call.method.with-arguments.js
//                           ^^^^^^^               entity.name.function.js
//                                   ^^^           variable.other.readwrite.js
//                                        ^^       keyword.operator.relational.js
//                                           ^     constant.numeric.js
//                                              ^  meta.brace.curly.js
      return false
//    ^^^^^^ ^^^^^  meta.class.body.js
//    ^^^^^^        keyword.control.flow.js
//           ^^^^^  constant.language.boolean.false.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    let content = fs.readFileSync(loc, "utf8")
//  ^^^ ^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^                                         storage.type.js
//      ^^^^^^^                   ^^^           variable.other.readwrite.js
//              ^                               keyword.operator.assignment.js
//                ^^                            variable.other.object.js
//                  ^                           keyword.operator.accessor.js
//                   ^^^^^^^^^^^^               meta.function-call.method.with-arguments.js
//                   ^^^^^^^^^^^^               entity.name.function.js
//                               ^           ^  meta.brace.round.js
//                                   ^          meta.delimiter.comma.js
//                                     ^^^^^^   string.quoted.double.js
//                                     ^        punctuation.definition.string.begin.js
//                                          ^   punctuation.definition.string.end.js
    let opts
//  ^^^ ^^^^  meta.class.body.js
//  ^^^       storage.type.js
//      ^^^^  variable.other.readwrite.js

    try {
//  ^^^ ^  meta.class.body.js
//  ^^^    keyword.control.trycatch.js
//      ^  meta.brace.curly.js
      opts = jsonCache[content] = jsonCache[content] || json.parse(content)
//    ^^^^ ^ ^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^             ^^^^^^^              ^^^^^^^                ^^^^^^^   variable.other.readwrite.js
//         ^                    ^                                            keyword.operator.assignment.js
//           ^^^^^^^^^            ^^^^^^^^^             ^^^^                 variable.other.object.js
//                    ^       ^            ^       ^                         meta.brace.square.js
//                                                   ^^                      keyword.operator.logical.js
//                                                          ^                keyword.operator.accessor.js
//                                                           ^^^^^           meta.function-call.method.with-arguments.js
//                                                           ^^^^^           entity.name.function.js
//                                                                ^       ^  meta.brace.round.js
      if (key) opts = opts[key]
//    ^^ ^^^^^ ^^^^ ^ ^^^^^^^^^  meta.class.body.js
//    ^^                         keyword.control.conditional.js
//       ^   ^                   meta.brace.round.js
//        ^^^  ^^^^        ^^^   variable.other.readwrite.js
//                  ^            keyword.operator.assignment.js
//                    ^^^^       variable.other.object.js
//                        ^   ^  meta.brace.square.js
    } catch (err) {
//  ^ ^^^^^ ^^^^^ ^  meta.class.body.js
//  ^             ^  meta.brace.curly.js
//    ^^^^^          keyword.control.trycatch.js
//          ^   ^    meta.brace.round.js
//           ^^^     variable.other.readwrite.js
      err.message = `${loc}: Error while parsing JSON - ${err.message}`
//    ^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^ ^^^^^ ^^^^^^^ ^^^^ ^ ^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^                                                 ^^^            variable.other.object.js
//       ^                                                   ^           keyword.operator.accessor.js
//        ^^^^^^^                                             ^^^^^^^    meta.property.object.js
//        ^^^^^^^                                             ^^^^^^^    variable.other.property.js
//                ^                                                      keyword.operator.assignment.js
//                  ^^^^^^^^ ^^^^^ ^^^^^ ^^^^^^^ ^^^^ ^ ^^^^^^^^^^^^^^^  string.quasi.js
//                  ^                                                    punctuation.definition.quasi.begin.js
//                  ^^^^^^^^ ^^^^^ ^^^^^ ^^^^^^^ ^^^^ ^ ^^^^^^^^^^^^^^^  string.quoted.template.js
//                   ^^^^^^                             ^^^^^^^^^^^^^^   entity.quasi.element.js
//                   ^^                                 ^^               punctuation.quasi.element.begin.js
//                     ^^^                                               variable.other.readwrite.js
//                        ^                                          ^   punctuation.quasi.element.end.js
//                                                                    ^  punctuation.definition.quasi.end.js
      throw err
//    ^^^^^ ^^^  meta.class.body.js
//    ^^^^^      keyword.control.trycatch.js
//          ^^^  variable.other.readwrite.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    this.mergeOptions({
//  ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                 variable.language.this.js
//      ^                keyword.operator.accessor.js
//       ^^^^^^^^^^^^    meta.function-call.method.with-arguments.js
//       ^^^^^^^^^^^^    entity.name.function.js
//                   ^   meta.brace.round.js
//                    ^  meta.brace.curly.js
      options: opts,
//    ^^^^^^^^ ^^^^^  meta.class.body.js
//    ^^^^^^^^        constant.other.object.key.js
//    ^^^^^^^         string.unquoted.js
//           ^        punctuation.separator.key-value.js
//             ^^^^   variable.other.readwrite.js
//                 ^  meta.delimiter.comma.js
      alias: loc,
//    ^^^^^^ ^^^^  meta.class.body.js
//    ^^^^^^       constant.other.object.key.js
//    ^^^^^        string.unquoted.js
//         ^       punctuation.separator.key-value.js
//           ^^^   variable.other.readwrite.js
//              ^  meta.delimiter.comma.js
      dirname: path.dirname(loc)
//    ^^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^^                    constant.other.object.key.js
//    ^^^^^^^                     string.unquoted.js
//           ^                    punctuation.separator.key-value.js
//             ^^^^               variable.other.object.js
//                 ^              keyword.operator.accessor.js
//                  ^^^^^^^       meta.function-call.method.with-arguments.js
//                  ^^^^^^^       entity.name.function.js
//                         ^   ^  meta.brace.round.js
//                          ^^^   variable.other.readwrite.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js
    this.resolvedConfigs.push(loc)
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                            variable.language.this.js
//      ^               ^           keyword.operator.accessor.js
//       ^^^^^^^^^^^^^^^            meta.property.object.js
//       ^^^^^^^^^^^^^^^            variable.other.property.js
//                       ^^^^       support.function.mutator.js
//                           ^   ^  meta.brace.round.js
//                            ^^^   variable.other.readwrite.js

    return !!opts
//  ^^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^^^         keyword.control.flow.js
//         ^^      keyword.operator.logical.js
//           ^^^^  variable.other.readwrite.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  mergeOptions({
//^^^^^^^^^^^^^^  meta.class.body.js
//^^^^^^^^^^^^^^  meta.function.method.js
//^^^^^^^^^^^^    entity.name.function.method.js
//            ^   punctuation.definition.parameters.begin.js
//             ^  meta.brace.curly.js
    options: rawOpts,
//  ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//  ^^^^^^^^ ^^^^^^^^  meta.function.method.js
//  ^^^^^^^^           constant.other.object.key.js
//  ^^^^^^^            string.unquoted.js
//         ^           punctuation.separator.key-value.js
//           ^^^^^^^   variable.other.readwrite.js
//                  ^  meta.delimiter.comma.js
    extending: extendingOpts,
//  ^^^^^^^^^^ ^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^ ^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^^^^^^^                 constant.other.object.key.js
//  ^^^^^^^^^                  string.unquoted.js
//           ^                 punctuation.separator.key-value.js
//             ^^^^^^^^^^^^^   variable.other.readwrite.js
//                          ^  meta.delimiter.comma.js
    alias,
//  ^^^^^^  meta.class.body.js
//  ^^^^^^  meta.function.method.js
//  ^^^^^   variable.other.readwrite.js
//       ^  meta.delimiter.comma.js
    loc,
//  ^^^^  meta.class.body.js
//  ^^^^  meta.function.method.js
//  ^^^   variable.other.readwrite.js
//     ^  meta.delimiter.comma.js
    dirname
//  ^^^^^^^  meta.class.body.js
//  ^^^^^^^  meta.function.method.js
//  ^^^^^^^  variable.other.readwrite.js
  }: MergeOptions) {
//^^ ^^^^^^^^^^^^^ ^  meta.class.body.js
//^^ ^^^^^^^^^^^^^    meta.function.method.js
//^                ^  meta.brace.curly.js
// ^                  punctuation.type.flowtype
//   ^^^^^^^^^^^^     support.type.class.flowtype
//               ^    punctuation.definition.parameters.end.js
    alias = alias || "foreign"
//  ^^^^^ ^ ^^^^^ ^^ ^^^^^^^^^  meta.class.body.js
//  ^^^^^   ^^^^^               variable.other.readwrite.js
//        ^                     keyword.operator.assignment.js
//                ^^            keyword.operator.logical.js
//                   ^^^^^^^^^  string.quoted.double.js
//                   ^          punctuation.definition.string.begin.js
//                           ^  punctuation.definition.string.end.js
    if (!rawOpts) return
//  ^^ ^^^^^^^^^^ ^^^^^^  meta.class.body.js
//  ^^                    keyword.control.conditional.js
//     ^        ^         meta.brace.round.js
//      ^                 keyword.operator.logical.js
//       ^^^^^^^          variable.other.readwrite.js
//                ^^^^^^  keyword.control.flow.js

    //
//  ^^  meta.class.body.js
//  ^^  comment.line.double-slash.js
//  ^^  punctuation.definition.comment.js
    if (typeof rawOpts !== "object" || Array.isArray(rawOpts)) {
//  ^^ ^^^^^^^ ^^^^^^^ ^^^ ^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                                                            keyword.control.conditional.js
//     ^                                            ^       ^^    meta.brace.round.js
//      ^^^^^^                                                    keyword.operator.js
//             ^^^^^^^                               ^^^^^^^      variable.other.readwrite.js
//                     ^^^                                        keyword.operator.comparison.js
//                         ^^^^^^^^                               string.quoted.double.js
//                         ^                                      punctuation.definition.string.begin.js
//                                ^                               punctuation.definition.string.end.js
//                                  ^^                            keyword.operator.logical.js
//                                     ^^^^^                      support.class.builtin.js
//                                          ^                     keyword.operator.accessor.js
//                                           ^^^^^^^              meta.function-call.method.with-arguments.js
//                                           ^^^^^^^              entity.name.function.js
//                                                             ^  meta.brace.curly.js
      this.log.error(`Invalid options type for ${alias}`, TypeError)
//    ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^^^^^^^^^ ^^^^^^^^^^  meta.class.body.js
//    ^^^^                                                            variable.language.this.js
//        ^   ^                                                       keyword.operator.accessor.js
//         ^^^                                                        meta.property.object.js
//         ^^^                                                        variable.other.property.js
//             ^^^^^                                                  meta.function-call.method.with-arguments.js
//             ^^^^^                                                  entity.name.function.js
//                  ^                                              ^  meta.brace.round.js
//                   ^^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^^^^^^^^              string.quasi.js
//                   ^                                                punctuation.definition.quasi.begin.js
//                   ^^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^^^^^^^^              string.quoted.template.js
//                                             ^^^^^^^^               entity.quasi.element.js
//                                             ^^                     punctuation.quasi.element.begin.js
//                                               ^^^^^                variable.other.readwrite.js
//                                                    ^               punctuation.quasi.element.end.js
//                                                     ^              punctuation.definition.quasi.end.js
//                                                      ^             meta.delimiter.comma.js
//                                                        ^^^^^^^^^   support.class.error.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    //
//  ^^  meta.class.body.js
//  ^^  comment.line.double-slash.js
//  ^^  punctuation.definition.comment.js
    let opts = cloneDeep(rawOpts, (val) => {
//  ^^^ ^^^^ ^ ^^^^^^^^^^^^^^^^^^ ^^^^^ ^^ ^  meta.class.body.js
//  ^^^                                       storage.type.js
//      ^^^^             ^^^^^^^   ^^^        variable.other.readwrite.js
//           ^                                keyword.operator.assignment.js
//             ^^^^^^^^^^^^^^^^^^ ^^^^^ ^^ ^  meta.function-call.with-arguments.js
//             ^^^^^^^^^                      entity.name.function.js
//                      ^         ^           punctuation.definition.parameters.begin.js
//                              ^             meta.delimiter.comma.js
//                                    ^       punctuation.definition.parameters.end.js
//                                      ^^    storage.type.function.arrow.js
//                                         ^  meta.brace.curly.js
      if (val instanceof Plugin) {
//    ^^ ^^^^ ^^^^^^^^^^ ^^^^^^^ ^  meta.class.body.js
//    ^^ ^^^^ ^^^^^^^^^^ ^^^^^^^ ^  meta.function-call.with-arguments.js
//    ^^                            keyword.control.conditional.js
//       ^                     ^    meta.brace.round.js
//        ^^^            ^^^^^^     variable.other.readwrite.js
//            ^^^^^^^^^^            keyword.operator.js
//                               ^  meta.brace.curly.js
        return val
//      ^^^^^^ ^^^  meta.class.body.js
//      ^^^^^^ ^^^  meta.function-call.with-arguments.js
//      ^^^^^^      keyword.control.flow.js
//             ^^^  variable.other.readwrite.js
      }
//    ^  meta.class.body.js
//    ^  meta.function-call.with-arguments.js
//    ^  meta.brace.curly.js
    })
//  ^^  meta.class.body.js
//  ^^  meta.function-call.with-arguments.js
//  ^   meta.brace.curly.js
//   ^  punctuation.definition.parameters.end.js

    //
//  ^^  meta.class.body.js
//  ^^  comment.line.double-slash.js
//  ^^  punctuation.definition.comment.js
    dirname = dirname || process.cwd()
//  ^^^^^^^ ^ ^^^^^^^ ^^ ^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^   ^^^^^^^                   variable.other.readwrite.js
//          ^                           keyword.operator.assignment.js
//                    ^^                keyword.operator.logical.js
//                       ^^^^^^^        support.type.object.process.js
//                              ^       keyword.operator.accessor.js
//                               ^^^^^  meta.function-call.method.without-arguments.js
//                               ^^^    entity.name.function.js
//                                  ^^  meta.group.braces.round.function.arguments.js
    loc = loc || alias
//  ^^^ ^ ^^^ ^^ ^^^^^  meta.class.body.js
//  ^^^   ^^^    ^^^^^  variable.other.readwrite.js
//      ^               keyword.operator.assignment.js
//            ^^        keyword.operator.logical.js

    for (let key in opts) {
//  ^^^ ^^^^ ^^^ ^^ ^^^^^ ^  meta.class.body.js
//  ^^^ ^^^^ ^^^ ^^ ^^^^^    meta.for.js
//  ^^^                      keyword.control.loop.js
//      ^               ^    meta.brace.round.js
//       ^^^                 storage.type.js
//           ^^^    ^^^^     variable.other.readwrite.js
//               ^^          keyword.operator.js
//                        ^  meta.brace.curly.js
      let option = config[key]
//    ^^^ ^^^^^^ ^ ^^^^^^^^^^^  meta.class.body.js
//    ^^^                       storage.type.js
//        ^^^^^^          ^^^   variable.other.readwrite.js
//               ^              keyword.operator.assignment.js
//                 ^^^^^^       variable.other.object.js
//                       ^   ^  meta.brace.square.js
      // check for an unknown option
//    ^^ ^^^^^ ^^^ ^^ ^^^^^^^ ^^^^^^  meta.class.body.js
//    ^^ ^^^^^ ^^^ ^^ ^^^^^^^ ^^^^^^  comment.line.double-slash.js
//    ^^                              punctuation.definition.comment.js
      if (!option && this.log) {
//    ^^ ^^^^^^^^ ^^ ^^^^^^^^^ ^  meta.class.body.js
//    ^^                          keyword.control.conditional.js
//       ^                   ^    meta.brace.round.js
//        ^       ^^              keyword.operator.logical.js
//         ^^^^^^                 variable.other.readwrite.js
//                   ^^^^         variable.language.this.js
//                       ^        keyword.operator.accessor.js
//                        ^^^     meta.property.object.js
//                        ^^^     variable.other.property.js
//                             ^  meta.brace.curly.js
        let pluginOptsInfo = "Check out http://babeljs.io/docs/usage/options/ for more info"
//      ^^^ ^^^^^^^^^^^^^^ ^ ^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^ ^^^^ ^^^^^  meta.class.body.js
//      ^^^                                                                                   storage.type.js
//          ^^^^^^^^^^^^^^                                                                    variable.other.readwrite.js
//                         ^                                                                  keyword.operator.assignment.js
//                           ^^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^ ^^^^ ^^^^^  string.quoted.double.js
//                           ^                                                                punctuation.definition.string.begin.js
//                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                 markup.underline.link.http.hyperlink
//                                                                                         ^  punctuation.definition.string.end.js

        if (removed[key]) {
//      ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//      ^^                   keyword.control.conditional.js
//         ^            ^    meta.brace.round.js
//          ^^^^^^^          variable.other.object.js
//                 ^   ^     meta.brace.square.js
//                  ^^^      variable.other.readwrite.js
//                        ^  meta.brace.curly.js
          this.log.error(`Using removed Babel 5 option: ${alias}.${key} - ${removed[key].message}`, ReferenceError)
//        ^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^ ^^^^^^^ ^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^                                                                                                       variable.language.this.js
//            ^   ^                                                                     ^                            keyword.operator.accessor.js
//             ^^^                                                                       ^^^^^^^                     meta.property.object.js
//             ^^^                                                                       ^^^^^^^                     variable.other.property.js
//                 ^^^^^                                                                                             meta.function-call.method.with-arguments.js
//                 ^^^^^                                                                                             entity.name.function.js
//                      ^                                                                                         ^  meta.brace.round.js
//                       ^^^^^^ ^^^^^^^ ^^^^^ ^ ^^^^^^^ ^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^                   string.quasi.js
//                       ^                                                                                           punctuation.definition.quasi.begin.js
//                       ^^^^^^ ^^^^^^^ ^^^^^ ^ ^^^^^^^ ^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^                   string.quoted.template.js
//                                                      ^^^^^^^^ ^^^^^^   ^^^^^^^^^^^^^^^^^^^^^^^                    entity.quasi.element.js
//                                                      ^^       ^^       ^^                                         punctuation.quasi.element.begin.js
//                                                        ^^^^^    ^^^              ^^^                              variable.other.readwrite.js
//                                                             ^      ^                         ^                    punctuation.quasi.element.end.js
//                                                                          ^^^^^^^                                  variable.other.object.js
//                                                                                 ^   ^                             meta.brace.square.js
//                                                                                               ^                   punctuation.definition.quasi.end.js
//                                                                                                ^                  meta.delimiter.comma.js
//                                                                                                  ^^^^^^^^^^^^^^   support.class.error.js
        } else {
//      ^ ^^^^ ^  meta.class.body.js
//      ^      ^  meta.brace.curly.js
//        ^^^^    keyword.control.conditional.js
          this.log.error(`Unknown option: ${alias}.${key}. ${pluginOptsInfo}`, ReferenceError)
//        ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^                                                                                  variable.language.this.js
//            ^   ^                                                                             keyword.operator.accessor.js
//             ^^^                                                                              meta.property.object.js
//             ^^^                                                                              variable.other.property.js
//                 ^^^^^                                                                        meta.function-call.method.with-arguments.js
//                 ^^^^^                                                                        entity.name.function.js
//                      ^                                                                    ^  meta.brace.round.js
//                       ^^^^^^^^ ^^^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^                   string.quasi.js
//                       ^                                                                      punctuation.definition.quasi.begin.js
//                       ^^^^^^^^ ^^^^^^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^                   string.quoted.template.js
//                                        ^^^^^^^^ ^^^^^^  ^^^^^^^^^^^^^^^^^                    entity.quasi.element.js
//                                        ^^       ^^      ^^                                   punctuation.quasi.element.begin.js
//                                          ^^^^^    ^^^     ^^^^^^^^^^^^^^                     variable.other.readwrite.js
//                                               ^      ^                  ^                    punctuation.quasi.element.end.js
//                                                                          ^                   punctuation.definition.quasi.end.js
//                                                                           ^                  meta.delimiter.comma.js
//                                                                             ^^^^^^^^^^^^^^   support.class.error.js
        }
//      ^  meta.class.body.js
//      ^  meta.brace.curly.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // normalise options
//  ^^ ^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^ ^^^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//  ^^                    punctuation.definition.comment.js
    normaliseOptions(opts)
//  ^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//  ^^^^^^^^^^^^^^^^        entity.name.function.js
//                  ^       punctuation.definition.parameters.begin.js
//                   ^^^^   variable.other.readwrite.js
//                       ^  punctuation.definition.parameters.end.js

    // resolve plugins
//  ^^ ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^ ^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//  ^^                  punctuation.definition.comment.js
    if (opts.plugins) {
//  ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                   keyword.control.conditional.js
//     ^            ^    meta.brace.round.js
//      ^^^^             variable.other.object.js
//          ^            keyword.operator.accessor.js
//           ^^^^^^^     meta.property.object.js
//           ^^^^^^^     variable.other.property.js
//                    ^  meta.brace.curly.js
      opts.plugins = OptionManager.normalisePlugins(loc, dirname, opts.plugins)
//    ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^                                                        ^^^^           variable.other.object.js
//        ^                       ^                                   ^          keyword.operator.accessor.js
//         ^^^^^^^                                                     ^^^^^^^   meta.property.object.js
//         ^^^^^^^                                                     ^^^^^^^   variable.other.property.js
//                 ^                                                             keyword.operator.assignment.js
//                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                              meta.function-call.static.with-arguments.js
//                   ^^^^^^^^^^^^^                                               variable.other.class.js
//                                 ^^^^^^^^^^^^^^^^                              entity.name.function.js
//                                                 ^                          ^  meta.brace.round.js
//                                                  ^^^  ^^^^^^^                 variable.other.readwrite.js
//                                                     ^        ^                meta.delimiter.comma.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // add extends clause
//  ^^ ^^^ ^^^^^^^ ^^^^^^  meta.class.body.js
//  ^^ ^^^ ^^^^^^^ ^^^^^^  comment.line.double-slash.js
//  ^^                     punctuation.definition.comment.js
    if (opts.extends) {
//  ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                   keyword.control.conditional.js
//     ^            ^    meta.brace.round.js
//      ^^^^             variable.other.object.js
//          ^            keyword.operator.accessor.js
//           ^^^^^^^     meta.property.object.js
//           ^^^^^^^     variable.other.property.js
//                    ^  meta.brace.curly.js
      let extendsLoc = resolve(opts.extends, dirname)
//    ^^^ ^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//    ^^^                                              storage.type.js
//        ^^^^^^^^^^                         ^^^^^^^   variable.other.readwrite.js
//                   ^                                 keyword.operator.assignment.js
//                     ^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.function-call.with-arguments.js
//                     ^^^^^^^                         entity.name.function.js
//                            ^                        punctuation.definition.parameters.begin.js
//                             ^^^^                    variable.other.object.js
//                                 ^                   keyword.operator.accessor.js
//                                  ^^^^^^^            meta.property.object.js
//                                  ^^^^^^^            variable.other.property.js
//                                         ^           meta.delimiter.comma.js
//                                                  ^  punctuation.definition.parameters.end.js
      if (extendsLoc) {
//    ^^ ^^^^^^^^^^^^ ^  meta.class.body.js
//    ^^                 keyword.control.conditional.js
//       ^          ^    meta.brace.round.js
//        ^^^^^^^^^^     variable.other.readwrite.js
//                    ^  meta.brace.curly.js
        this.addConfig(extendsLoc)
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//      ^^^^                        variable.language.this.js
//          ^                       keyword.operator.accessor.js
//           ^^^^^^^^^              meta.function-call.method.with-arguments.js
//           ^^^^^^^^^              entity.name.function.js
//                    ^          ^  meta.brace.round.js
//                     ^^^^^^^^^^   variable.other.readwrite.js
      } else {
//    ^ ^^^^ ^  meta.class.body.js
//    ^      ^  meta.brace.curly.js
//      ^^^^    keyword.control.conditional.js
        if (this.log) this.log.error(`Couldn't resolve extends clause of ${opts.extends} in ${alias}`)
//      ^^ ^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^ ^^^^^^^ ^^^^^^ ^^ ^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^  meta.class.body.js
//      ^^                                                                                              keyword.control.conditional.js
//         ^        ^               ^                                                                ^  meta.brace.round.js
//          ^^^^      ^^^^                                                                              variable.language.this.js
//              ^         ^   ^                                                ^                        keyword.operator.accessor.js
//               ^^^       ^^^                                                  ^^^^^^^                 meta.property.object.js
//               ^^^       ^^^                                                  ^^^^^^^                 variable.other.property.js
//                             ^^^^^                                                                    meta.function-call.method.with-arguments.js
//                             ^^^^^                                                                    entity.name.function.js
//                                   ^^^^^^^^^ ^^^^^^^ ^^^^^^^ ^^^^^^ ^^ ^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^   string.quasi.js
//                                   ^                                                                  punctuation.definition.quasi.begin.js
//                                   ^^^^^^^^^ ^^^^^^^ ^^^^^^^ ^^^^^^ ^^ ^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^   string.quoted.template.js
//                                                                       ^^^^^^^^^^^^^^^    ^^^^^^^^    entity.quasi.element.js
//                                                                       ^^                 ^^          punctuation.quasi.element.begin.js
//                                                                         ^^^^                         variable.other.object.js
//                                                                                     ^           ^    punctuation.quasi.element.end.js
//                                                                                            ^^^^^     variable.other.readwrite.js
//                                                                                                  ^   punctuation.definition.quasi.end.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js
      delete opts.extends
//    ^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^               keyword.operator.js
//           ^^^^          variable.other.object.js
//               ^         keyword.operator.accessor.js
//                ^^^^^^^  meta.property.object.js
//                ^^^^^^^  variable.other.property.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // resolve presets
//  ^^ ^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^ ^^^^^^^ ^^^^^^^  comment.line.double-slash.js
//  ^^                  punctuation.definition.comment.js
    if (opts.presets) {
//  ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                   keyword.control.conditional.js
//     ^            ^    meta.brace.round.js
//      ^^^^             variable.other.object.js
//          ^            keyword.operator.accessor.js
//           ^^^^^^^     meta.property.object.js
//           ^^^^^^^     variable.other.property.js
//                    ^  meta.brace.curly.js
      // If we're in the "pass per preset" mode, we resolve the presets
//    ^^ ^^ ^^^^^ ^^ ^^^ ^^^^^ ^^^ ^^^^^^^ ^^^^^ ^^ ^^^^^^^ ^^^ ^^^^^^^  meta.class.body.js
//    ^^ ^^ ^^^^^ ^^ ^^^ ^^^^^ ^^^ ^^^^^^^ ^^^^^ ^^ ^^^^^^^ ^^^ ^^^^^^^  comment.line.double-slash.js
//    ^^                                                                 punctuation.definition.comment.js
      // and keep them for further execution to calculate the options.
//    ^^ ^^^ ^^^^ ^^^^ ^^^ ^^^^^^^ ^^^^^^^^^ ^^ ^^^^^^^^^ ^^^ ^^^^^^^^  meta.class.body.js
//    ^^ ^^^ ^^^^ ^^^^ ^^^ ^^^^^^^ ^^^^^^^^^ ^^ ^^^^^^^^^ ^^^ ^^^^^^^^  comment.line.double-slash.js
//    ^^                                                                punctuation.definition.comment.js
      if (opts.passPerPreset) {
//    ^^ ^^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//    ^^                         keyword.control.conditional.js
//       ^                  ^    meta.brace.round.js
//        ^^^^                   variable.other.object.js
//            ^                  keyword.operator.accessor.js
//             ^^^^^^^^^^^^^     meta.property.object.js
//             ^^^^^^^^^^^^^     variable.other.property.js
//                            ^  meta.brace.curly.js
        opts.presets = this.resolvePresets(opts.presets, dirname, (preset, presetLoc) => {
//      ^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^ ^^ ^  meta.class.body.js
//      ^^^^                               ^^^^                                             variable.other.object.js
//          ^              ^                   ^                                            keyword.operator.accessor.js
//           ^^^^^^^                            ^^^^^^^                                     meta.property.object.js
//           ^^^^^^^                            ^^^^^^^                                     variable.other.property.js
//                   ^                                                                      keyword.operator.assignment.js
//                     ^^^^                                                                 variable.language.this.js
//                          ^^^^^^^^^^^^^^                                                  meta.function-call.method.with-arguments.js
//                          ^^^^^^^^^^^^^^                                                  entity.name.function.js
//                                        ^                                                 meta.brace.round.js
//                                                     ^        ^        ^                  meta.delimiter.comma.js
//                                                       ^^^^^^^   ^^^^^^  ^^^^^^^^^        variable.other.readwrite.js
//                                                                ^^^^^^^^ ^^^^^^^^^^ ^^    meta.function.arrow.js
//                                                                ^                         punctuation.definition.parameters.begin.js
//                                                                                  ^       punctuation.definition.parameters.end.js
//                                                                                    ^^    storage.type.function.arrow.js
//                                                                                       ^  meta.brace.curly.js
          this.mergeOptions({
//        ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^                 variable.language.this.js
//            ^                keyword.operator.accessor.js
//             ^^^^^^^^^^^^    meta.function-call.method.with-arguments.js
//             ^^^^^^^^^^^^    entity.name.function.js
//                         ^   meta.brace.round.js
//                          ^  meta.brace.curly.js
            options: preset,
//          ^^^^^^^^ ^^^^^^^  meta.class.body.js
//          ^^^^^^^^          constant.other.object.key.js
//          ^^^^^^^           string.unquoted.js
//                 ^          punctuation.separator.key-value.js
//                   ^^^^^^   variable.other.readwrite.js
//                         ^  meta.delimiter.comma.js
            extending: preset,
//          ^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//          ^^^^^^^^^^          constant.other.object.key.js
//          ^^^^^^^^^           string.unquoted.js
//                   ^          punctuation.separator.key-value.js
//                     ^^^^^^   variable.other.readwrite.js
//                           ^  meta.delimiter.comma.js
            alias: presetLoc,
//          ^^^^^^ ^^^^^^^^^^  meta.class.body.js
//          ^^^^^^             constant.other.object.key.js
//          ^^^^^              string.unquoted.js
//               ^             punctuation.separator.key-value.js
//                 ^^^^^^^^^   variable.other.readwrite.js
//                          ^  meta.delimiter.comma.js
            loc: presetLoc,
//          ^^^^ ^^^^^^^^^^  meta.class.body.js
//          ^^^^             constant.other.object.key.js
//          ^^^              string.unquoted.js
//             ^             punctuation.separator.key-value.js
//               ^^^^^^^^^   variable.other.readwrite.js
//                        ^  meta.delimiter.comma.js
            dirname: dirname
//          ^^^^^^^^ ^^^^^^^  meta.class.body.js
//          ^^^^^^^^          constant.other.object.key.js
//          ^^^^^^^           string.unquoted.js
//                 ^          punctuation.separator.key-value.js
//                   ^^^^^^^  variable.other.readwrite.js
          })
//        ^^  meta.class.body.js
//        ^   meta.brace.curly.js
//         ^  meta.brace.round.js
        })
//      ^^  meta.class.body.js
//      ^   meta.brace.curly.js
//       ^  meta.brace.round.js
      } else {
//    ^ ^^^^ ^  meta.class.body.js
//    ^      ^  meta.brace.curly.js
//      ^^^^    keyword.control.conditional.js
        // Otherwise, just merge presets options into the main options.
//      ^^ ^^^^^^^^^^ ^^^^ ^^^^^ ^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^^^ ^^^^^^^^  meta.class.body.js
//      ^^ ^^^^^^^^^^ ^^^^ ^^^^^ ^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^^^ ^^^^^^^^  comment.line.double-slash.js
//      ^^                                                               punctuation.definition.comment.js
        this.mergePresets(opts.presets, dirname)
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//      ^^^^                                      variable.language.this.js
//          ^                 ^                   keyword.operator.accessor.js
//           ^^^^^^^^^^^^                         meta.function-call.method.with-arguments.js
//           ^^^^^^^^^^^^                         entity.name.function.js
//                       ^                     ^  meta.brace.round.js
//                        ^^^^                    variable.other.object.js
//                             ^^^^^^^            meta.property.object.js
//                             ^^^^^^^            variable.other.property.js
//                                    ^           meta.delimiter.comma.js
//                                      ^^^^^^^   variable.other.readwrite.js
        delete opts.presets
//      ^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//      ^^^^^^               keyword.operator.js
//             ^^^^          variable.other.object.js
//                 ^         keyword.operator.accessor.js
//                  ^^^^^^^  meta.property.object.js
//                  ^^^^^^^  variable.other.property.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // env
//  ^^ ^^^  meta.class.body.js
//  ^^ ^^^  comment.line.double-slash.js
//  ^^      punctuation.definition.comment.js
    let envOpts
//  ^^^ ^^^^^^^  meta.class.body.js
//  ^^^          storage.type.js
//      ^^^^^^^  variable.other.readwrite.js
    let envKey = process.env.BABEL_ENV || process.env.NODE_ENV || "development"
//  ^^^ ^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^  meta.class.body.js
//  ^^^                                                                          storage.type.js
//      ^^^^^^                                                                   variable.other.readwrite.js
//             ^                                                                 keyword.operator.assignment.js
//               ^^^^^^^ ^^^              ^^^^^^^ ^^^                            support.type.object.process.js
//                      ^   ^                    ^   ^                           keyword.operator.accessor.js
//                           ^^^^^^^^^                ^^^^^^^^                   variable.other.constant.js
//                                     ^^                      ^^                keyword.operator.logical.js
//                                                                ^^^^^^^^^^^^^  string.quoted.double.js
//                                                                ^              punctuation.definition.string.begin.js
//                                                                            ^  punctuation.definition.string.end.js
    if (opts.env) {
//  ^^ ^^^^^^^^^^ ^  meta.class.body.js
//  ^^               keyword.control.conditional.js
//     ^        ^    meta.brace.round.js
//      ^^^^         variable.other.object.js
//          ^        keyword.operator.accessor.js
//           ^^^     meta.property.object.js
//           ^^^     variable.other.property.js
//                ^  meta.brace.curly.js
      envOpts = opts.env[envKey]
//    ^^^^^^^ ^ ^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^            ^^^^^^   variable.other.readwrite.js
//            ^                   keyword.operator.assignment.js
//              ^^^^              variable.other.object.js
//                  ^             keyword.operator.accessor.js
//                   ^^^          meta.property.object.js
//                   ^^^          variable.other.property.js
//                      ^      ^  meta.brace.square.js
      delete opts.env
//    ^^^^^^ ^^^^^^^^  meta.class.body.js
//    ^^^^^^           keyword.operator.js
//           ^^^^      variable.other.object.js
//               ^     keyword.operator.accessor.js
//                ^^^  meta.property.object.js
//                ^^^  variable.other.property.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // Merge them into current extending options in case of top-level
//  ^^ ^^^^^ ^^^^ ^^^^ ^^^^^^^ ^^^^^^^^^ ^^^^^^^ ^^ ^^^^ ^^ ^^^^^^^^^  meta.class.body.js
//  ^^ ^^^^^ ^^^^ ^^^^ ^^^^^^^ ^^^^^^^^^ ^^^^^^^ ^^ ^^^^ ^^ ^^^^^^^^^  comment.line.double-slash.js
//  ^^                                                                 punctuation.definition.comment.js
    // options. In case of presets, just re-assign options which are got
//  ^^ ^^^^^^^^ ^^ ^^^^ ^^ ^^^^^^^^ ^^^^ ^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^ ^^^  meta.class.body.js
//  ^^ ^^^^^^^^ ^^ ^^^^ ^^ ^^^^^^^^ ^^^^ ^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^ ^^^  comment.line.double-slash.js
//  ^^                                                                    punctuation.definition.comment.js
    // normalized during the `mergeOptions`.
//  ^^ ^^^^^^^^^^ ^^^^^^ ^^^ ^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^ ^^^^^^^^^^ ^^^^^^ ^^^ ^^^^^^^^^^^^^^^  comment.line.double-slash.js
//  ^^                                        punctuation.definition.comment.js
    if (rawOpts === extendingOpts) {
//  ^^ ^^^^^^^^ ^^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                                keyword.control.conditional.js
//     ^                         ^    meta.brace.round.js
//      ^^^^^^^     ^^^^^^^^^^^^^     variable.other.readwrite.js
//              ^^^                   keyword.operator.comparison.js
//                                 ^  meta.brace.curly.js
      Object.assign(extendingOpts, opts)
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//    ^^^^^^                              support.class.builtin.js
//          ^                             keyword.operator.accessor.js
//           ^^^^^^                       meta.function-call.method.with-arguments.js
//           ^^^^^^                       entity.name.function.js
//                 ^                   ^  meta.brace.round.js
//                  ^^^^^^^^^^^^^  ^^^^   variable.other.readwrite.js
//                               ^        meta.delimiter.comma.js
    } else {
//  ^ ^^^^ ^  meta.class.body.js
//  ^      ^  meta.brace.curly.js
//    ^^^^    keyword.control.conditional.js
      merge(extendingOpts || this.options, opts)
//    ^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^  meta.class.body.js
//    ^^^^^^^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^  meta.function-call.with-arguments.js
//    ^^^^^                                       entity.name.function.js
//         ^                                      punctuation.definition.parameters.begin.js
//          ^^^^^^^^^^^^^                  ^^^^   variable.other.readwrite.js
//                        ^^                      keyword.operator.logical.js
//                           ^^^^                 variable.language.this.js
//                               ^                keyword.operator.accessor.js
//                                ^^^^^^^         meta.property.object.js
//                                ^^^^^^^         variable.other.property.js
//                                       ^        meta.delimiter.comma.js
//                                             ^  punctuation.definition.parameters.end.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // merge in env options
//  ^^ ^^^^^ ^^ ^^^ ^^^^^^^  meta.class.body.js
//  ^^ ^^^^^ ^^ ^^^ ^^^^^^^  comment.line.double-slash.js
//  ^^                       punctuation.definition.comment.js
    this.mergeOptions({
//  ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                 variable.language.this.js
//      ^                keyword.operator.accessor.js
//       ^^^^^^^^^^^^    meta.function-call.method.with-arguments.js
//       ^^^^^^^^^^^^    entity.name.function.js
//                   ^   meta.brace.round.js
//                    ^  meta.brace.curly.js
      options: envOpts,
//    ^^^^^^^^ ^^^^^^^^  meta.class.body.js
//    ^^^^^^^^           constant.other.object.key.js
//    ^^^^^^^            string.unquoted.js
//           ^           punctuation.separator.key-value.js
//             ^^^^^^^   variable.other.readwrite.js
//                    ^  meta.delimiter.comma.js
      extending: extendingOpts,
//    ^^^^^^^^^^ ^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^^^^                 constant.other.object.key.js
//    ^^^^^^^^^                  string.unquoted.js
//             ^                 punctuation.separator.key-value.js
//               ^^^^^^^^^^^^^   variable.other.readwrite.js
//                            ^  meta.delimiter.comma.js
      alias: `${alias}.env.${envKey}`,
//    ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^                            constant.other.object.key.js
//    ^^^^^                             string.unquoted.js
//         ^                            punctuation.separator.key-value.js
//           ^^^^^^^^^^^^^^^^^^^^^^^^   string.quasi.js
//           ^                          punctuation.definition.quasi.begin.js
//           ^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.template.js
//            ^^^^^^^^     ^^^^^^^^^    entity.quasi.element.js
//            ^^           ^^           punctuation.quasi.element.begin.js
//              ^^^^^        ^^^^^^     variable.other.readwrite.js
//                   ^             ^    punctuation.quasi.element.end.js
//                                  ^   punctuation.definition.quasi.end.js
//                                   ^  meta.delimiter.comma.js
      dirname: dirname
//    ^^^^^^^^ ^^^^^^^  meta.class.body.js
//    ^^^^^^^^          constant.other.object.key.js
//    ^^^^^^^           string.unquoted.js
//           ^          punctuation.separator.key-value.js
//             ^^^^^^^  variable.other.readwrite.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  /**
//^^^  meta.class.body.js
//^^^  comment.block.documentation.js
//^^^  punctuation.definition.comment.js
   * Merges all presets into the main options in case we are not in the
// ^ ^^^^^^ ^^^ ^^^^^^^ ^^^^ ^^^ ^^^^ ^^^^^^^ ^^ ^^^^ ^^ ^^^ ^^^ ^^ ^^^  meta.class.body.js
// ^ ^^^^^^ ^^^ ^^^^^^^ ^^^^ ^^^ ^^^^ ^^^^^^^ ^^ ^^^^ ^^ ^^^ ^^^ ^^ ^^^  comment.block.documentation.js
   * "pass per preset" mode. Otherwise, options are calculated per preset.
// ^ ^^^^^ ^^^ ^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^^^^^ ^^^ ^^^^^^^^^^ ^^^ ^^^^^^^  meta.class.body.js
// ^ ^^^^^ ^^^ ^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^^^^^ ^^^ ^^^^^^^^^^ ^^^ ^^^^^^^  comment.block.documentation.js
   */
// ^^  meta.class.body.js
// ^^  comment.block.documentation.js
// ^^  punctuation.definition.comment.js
  mergePresets(presets: Array<string | Object>, dirname: string) {
//^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^ ^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^ ^^^^^^^    meta.function.method.js
//^^^^^^^^^^^^                                                      entity.name.function.method.js
//            ^                                                     punctuation.definition.parameters.begin.js
//             ^^^^^^^                          ^^^^^^^             variable.other.readwrite.js
//                    ^                                ^            punctuation.type.flowtype
//                      ^^^^^          ^^^^^^                       support.type.builtin.class.flowtype
//                           ^               ^                      punctuation.flowtype
//                            ^^^^^^                     ^^^^^^     support.type.builtin.primitive.flowtype
//                                   ^                              kewyword.operator.union.flowtype
//                                            ^                     meta.delimiter.comma.js
//                                                             ^    punctuation.definition.parameters.end.js
//                                                               ^  meta.brace.curly.js
    this.resolvePresets(presets, dirname, (presetOpts, presetLoc) => {
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^ ^^ ^  meta.class.body.js
//  ^^^^                                                                variable.language.this.js
//      ^                                                               keyword.operator.accessor.js
//       ^^^^^^^^^^^^^^                                                 meta.function-call.method.with-arguments.js
//       ^^^^^^^^^^^^^^                                                 entity.name.function.js
//                     ^                                                meta.brace.round.js
//                      ^^^^^^^  ^^^^^^^   ^^^^^^^^^^  ^^^^^^^^^        variable.other.readwrite.js
//                             ^        ^            ^                  meta.delimiter.comma.js
//                                        ^^^^^^^^^^^^ ^^^^^^^^^^ ^^    meta.function.arrow.js
//                                        ^                             punctuation.definition.parameters.begin.js
//                                                              ^       punctuation.definition.parameters.end.js
//                                                                ^^    storage.type.function.arrow.js
//                                                                   ^  meta.brace.curly.js
      this.mergeOptions({
//    ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^                 variable.language.this.js
//        ^                keyword.operator.accessor.js
//         ^^^^^^^^^^^^    meta.function-call.method.with-arguments.js
//         ^^^^^^^^^^^^    entity.name.function.js
//                     ^   meta.brace.round.js
//                      ^  meta.brace.curly.js
        options: presetOpts,
//      ^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//      ^^^^^^^^              constant.other.object.key.js
//      ^^^^^^^               string.unquoted.js
//             ^              punctuation.separator.key-value.js
//               ^^^^^^^^^^   variable.other.readwrite.js
//                         ^  meta.delimiter.comma.js
        alias: presetLoc,
//      ^^^^^^ ^^^^^^^^^^  meta.class.body.js
//      ^^^^^^             constant.other.object.key.js
//      ^^^^^              string.unquoted.js
//           ^             punctuation.separator.key-value.js
//             ^^^^^^^^^   variable.other.readwrite.js
//                      ^  meta.delimiter.comma.js
        loc: presetLoc,
//      ^^^^ ^^^^^^^^^^  meta.class.body.js
//      ^^^^             constant.other.object.key.js
//      ^^^              string.unquoted.js
//         ^             punctuation.separator.key-value.js
//           ^^^^^^^^^   variable.other.readwrite.js
//                    ^  meta.delimiter.comma.js
        dirname: path.dirname(presetLoc || "")
//      ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^ ^^ ^^^  meta.class.body.js
//      ^^^^^^^^                                constant.other.object.key.js
//      ^^^^^^^                                 string.unquoted.js
//             ^                                punctuation.separator.key-value.js
//               ^^^^                           variable.other.object.js
//                   ^                          keyword.operator.accessor.js
//                    ^^^^^^^                   meta.function-call.method.with-arguments.js
//                    ^^^^^^^                   entity.name.function.js
//                           ^               ^  meta.brace.round.js
//                            ^^^^^^^^^         variable.other.readwrite.js
//                                      ^^      keyword.operator.logical.js
//                                         ^^   string.quoted.double.js
//                                         ^    punctuation.definition.string.begin.js
//                                          ^   punctuation.definition.string.end.js
      })
//    ^^  meta.class.body.js
//    ^   meta.brace.curly.js
//     ^  meta.brace.round.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  /**
//^^^  meta.class.body.js
//^^^  comment.block.documentation.js
//^^^  punctuation.definition.comment.js
   * Resolves presets options which can be either direct object data,
// ^ ^^^^^^^^ ^^^^^^^ ^^^^^^^ ^^^^^ ^^^ ^^ ^^^^^^ ^^^^^^ ^^^^^^ ^^^^^  meta.class.body.js
// ^ ^^^^^^^^ ^^^^^^^ ^^^^^^^ ^^^^^ ^^^ ^^ ^^^^^^ ^^^^^^ ^^^^^^ ^^^^^  comment.block.documentation.js
   * or a module name to require.
// ^ ^^ ^ ^^^^^^ ^^^^ ^^ ^^^^^^^^  meta.class.body.js
// ^ ^^ ^ ^^^^^^ ^^^^ ^^ ^^^^^^^^  comment.block.documentation.js
   */
// ^^  meta.class.body.js
// ^^  comment.block.documentation.js
// ^^  punctuation.definition.comment.js
  resolvePresets(presets: Array<string | Object>, dirname: string, onResolve?) {
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^ ^^^^^^^ ^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^ ^^^^^^^ ^^^^^^^^^^^    meta.function.method.js
//^^^^^^^^^^^^^^                                                                  entity.name.function.method.js
//              ^                                                                 punctuation.definition.parameters.begin.js
//               ^^^^^^^                          ^^^^^^^          ^^^^^^^^^      variable.other.readwrite.js
//                      ^                                ^                  ^     punctuation.type.flowtype
//                        ^^^^^          ^^^^^^                                   support.type.builtin.class.flowtype
//                             ^               ^                                  punctuation.flowtype
//                              ^^^^^^                     ^^^^^^                 support.type.builtin.primitive.flowtype
//                                     ^                                          kewyword.operator.union.flowtype
//                                              ^                ^                meta.delimiter.comma.js
//                                                                           ^    punctuation.definition.parameters.end.js
//                                                                             ^  meta.brace.curly.js
    return presets.map((val) => {
//  ^^^^^^ ^^^^^^^^^^^^^^^^^ ^^ ^  meta.class.body.js
//  ^^^^^^                         keyword.control.flow.js
//         ^^^^^^^                 variable.other.object.js
//                ^                keyword.operator.accessor.js
//                 ^^^             meta.function-call.method.with-arguments.js
//                 ^^^             entity.name.function.js
//                    ^            meta.brace.round.js
//                     ^^^^^ ^^    meta.function.arrow.js
//                     ^           punctuation.definition.parameters.begin.js
//                      ^^^        variable.other.readwrite.js
//                         ^       punctuation.definition.parameters.end.js
//                           ^^    storage.type.function.arrow.js
//                              ^  meta.brace.curly.js
      if (typeof val === "string") {
//    ^^ ^^^^^^^ ^^^ ^^^ ^^^^^^^^^ ^  meta.class.body.js
//    ^^                              keyword.control.conditional.js
//       ^                       ^    meta.brace.round.js
//        ^^^^^^                      keyword.operator.js
//               ^^^                  variable.other.readwrite.js
//                   ^^^              keyword.operator.comparison.js
//                       ^^^^^^^^     string.quoted.double.js
//                       ^            punctuation.definition.string.begin.js
//                              ^     punctuation.definition.string.end.js
//                                 ^  meta.brace.curly.js
        let presetLoc = resolve(`babel-preset-${val}`, dirname) || resolve(val, dirname)
//      ^^^ ^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//      ^^^                                                                               storage.type.js
//          ^^^^^^^^^                           ^^^    ^^^^^^^             ^^^  ^^^^^^^   variable.other.readwrite.js
//                    ^                                                                   keyword.operator.assignment.js
//                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^    ^^^^^^^^^^^^ ^^^^^^^^  meta.function-call.with-arguments.js
//                      ^^^^^^^                                    ^^^^^^^                entity.name.function.js
//                             ^                                          ^               punctuation.definition.parameters.begin.js
//                              ^^^^^^^^^^^^^^^^^^^^^                                     string.quasi.js
//                              ^                                                         punctuation.definition.quasi.begin.js
//                              ^^^^^^^^^^^^^^^^^^^^^                                     string.quoted.template.js
//                                            ^^^^^^                                      entity.quasi.element.js
//                                            ^^                                          punctuation.quasi.element.begin.js
//                                                 ^                                      punctuation.quasi.element.end.js
//                                                  ^                                     punctuation.definition.quasi.end.js
//                                                   ^                        ^           meta.delimiter.comma.js
//                                                            ^                        ^  punctuation.definition.parameters.end.js
//                                                              ^^                        keyword.operator.logical.js
        if (presetLoc) {
//      ^^ ^^^^^^^^^^^ ^  meta.class.body.js
//      ^^                keyword.control.conditional.js
//         ^         ^    meta.brace.round.js
//          ^^^^^^^^^     variable.other.readwrite.js
//                     ^  meta.brace.curly.js
          let val = require(presetLoc)
//        ^^^ ^^^ ^ ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^                           storage.type.js
//            ^^^           ^^^^^^^^^   variable.other.readwrite.js
//                ^                     keyword.operator.assignment.js
//                  ^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//                  ^^^^^^^             entity.name.function.js
//                         ^            punctuation.definition.parameters.begin.js
//                                   ^  punctuation.definition.parameters.end.js
          onResolve && onResolve(val, presetLoc)
//        ^^^^^^^^^ ^^ ^^^^^^^^^^^^^^ ^^^^^^^^^^  meta.class.body.js
//        ^^^^^^^^^              ^^^  ^^^^^^^^^   variable.other.readwrite.js
//                  ^^                            keyword.operator.logical.js
//                     ^^^^^^^^^^^^^^ ^^^^^^^^^^  meta.function-call.with-arguments.js
//                     ^^^^^^^^^                  entity.name.function.js
//                              ^                 punctuation.definition.parameters.begin.js
//                                  ^             meta.delimiter.comma.js
//                                             ^  punctuation.definition.parameters.end.js
          return val
//        ^^^^^^ ^^^  meta.class.body.js
//        ^^^^^^      keyword.control.flow.js
//               ^^^  variable.other.readwrite.js
        } else {
//      ^ ^^^^ ^  meta.class.body.js
//      ^      ^  meta.brace.curly.js
//        ^^^^    keyword.control.conditional.js
          throw new Error(`Couldn't find preset ${JSON.stringify(val)} relative to directory ${JSON.stringify(dirname)}`)
//        ^^^^^ ^^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^^                                                                                                            keyword.control.trycatch.js
//              ^^^ ^^^^^^^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//              ^^^                                                                                                        keyword.operator.js
//                  ^^^^^                              ^^^^^^^^^                                    ^^^^^^^^^              entity.name.function.js
//                       ^                                                                                                 punctuation.definition.parameters.begin.js
//                        ^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.quasi.js
//                        ^                                                                                                punctuation.definition.quasi.begin.js
//                        ^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.template.js
//                                              ^^^^^^^^^^^^^^^^^^^^^^                       ^^^^^^^^^^^^^^^^^^^^^^^^^^    entity.quasi.element.js
//                                              ^^                                           ^^                            punctuation.quasi.element.begin.js
//                                                ^^^^^^^^^^^^^^                               ^^^^^^^^^^^^^^              meta.function-call.static.with-arguments.js
//                                                ^^^^                                         ^^^^                        variable.other.class.js
//                                                    ^                                            ^                       keyword.operator.accessor.js
//                                                              ^   ^                                        ^       ^     meta.brace.round.js
//                                                               ^^^                                          ^^^^^^^      variable.other.readwrite.js
//                                                                   ^                                                ^    punctuation.quasi.element.end.js
//                                                                                                                     ^   punctuation.definition.quasi.end.js
//                                                                                                                      ^  punctuation.definition.parameters.end.js
        }
//      ^  meta.class.body.js
//      ^  meta.brace.curly.js
      } else if (typeof val === "object") {
//    ^ ^^^^ ^^ ^^^^^^^ ^^^ ^^^ ^^^^^^^^^ ^  meta.class.body.js
//    ^                                   ^  meta.brace.curly.js
//      ^^^^ ^^                              keyword.control.conditional.js
//              ^                       ^    meta.brace.round.js
//               ^^^^^^                      keyword.operator.js
//                      ^^^                  variable.other.readwrite.js
//                          ^^^              keyword.operator.comparison.js
//                              ^^^^^^^^     string.quoted.double.js
//                              ^            punctuation.definition.string.begin.js
//                                     ^     punctuation.definition.string.end.js
        onResolve && onResolve(val)
//      ^^^^^^^^^ ^^ ^^^^^^^^^^^^^^  meta.class.body.js
//      ^^^^^^^^^              ^^^   variable.other.readwrite.js
//                ^^                 keyword.operator.logical.js
//                   ^^^^^^^^^^^^^^  meta.function-call.with-arguments.js
//                   ^^^^^^^^^       entity.name.function.js
//                            ^      punctuation.definition.parameters.begin.js
//                                ^  punctuation.definition.parameters.end.js
        return val
//      ^^^^^^ ^^^  meta.class.body.js
//      ^^^^^^      keyword.control.flow.js
//             ^^^  variable.other.readwrite.js
      } else {
//    ^ ^^^^ ^  meta.class.body.js
//    ^      ^  meta.brace.curly.js
//      ^^^^    keyword.control.conditional.js
        throw new Error(`Unsupported preset format: ${val}.`)
//      ^^^^^ ^^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^ ^^^^^^^ ^^^^^^^^^  meta.class.body.js
//      ^^^^^                                                  keyword.control.trycatch.js
//            ^^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^ ^^^^^^^ ^^^^^^^^^  meta.function-call.with-arguments.js
//            ^^^                                              keyword.operator.js
//                ^^^^^                                        entity.name.function.js
//                     ^                                       punctuation.definition.parameters.begin.js
//                      ^^^^^^^^^^^^ ^^^^^^ ^^^^^^^ ^^^^^^^^   string.quasi.js
//                      ^                                      punctuation.definition.quasi.begin.js
//                      ^^^^^^^^^^^^ ^^^^^^ ^^^^^^^ ^^^^^^^^   string.quoted.template.js
//                                                  ^^^^^^     entity.quasi.element.js
//                                                  ^^         punctuation.quasi.element.begin.js
//                                                    ^^^      variable.other.readwrite.js
//                                                       ^     punctuation.quasi.element.end.js
//                                                         ^   punctuation.definition.quasi.end.js
//                                                          ^  punctuation.definition.parameters.end.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  addIgnoreConfig(loc) {
//^^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^^^    meta.function.method.js
//^^^^^^^^^^^^^^^         entity.name.function.method.js
//               ^        punctuation.definition.parameters.begin.js
//                ^^^     variable.other.readwrite.js
//                   ^    punctuation.definition.parameters.end.js
//                     ^  meta.brace.curly.js
    let file  = fs.readFileSync(loc, "utf8")
//  ^^^ ^^^^  ^ ^^^^^^^^^^^^^^^^^^^^ ^^^^^^^  meta.class.body.js
//  ^^^                                       storage.type.js
//      ^^^^                    ^^^           variable.other.readwrite.js
//            ^                               keyword.operator.assignment.js
//              ^^                            variable.other.object.js
//                ^                           keyword.operator.accessor.js
//                 ^^^^^^^^^^^^               meta.function-call.method.with-arguments.js
//                 ^^^^^^^^^^^^               entity.name.function.js
//                             ^           ^  meta.brace.round.js
//                                 ^          meta.delimiter.comma.js
//                                   ^^^^^^   string.quoted.double.js
//                                   ^        punctuation.definition.string.begin.js
//                                        ^   punctuation.definition.string.end.js
    let lines = file.split("\n")
//  ^^^ ^^^^^ ^ ^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^                           storage.type.js
//      ^^^^^                     variable.other.readwrite.js
//            ^                   keyword.operator.assignment.js
//              ^^^^              variable.other.object.js
//                  ^             keyword.operator.accessor.js
//                   ^^^^^        meta.function-call.method.with-arguments.js
//                   ^^^^^        entity.name.function.js
//                        ^    ^  meta.brace.round.js
//                         ^^^^   string.quoted.double.js
//                         ^      punctuation.definition.string.begin.js
//                          ^^    constant.character.escape
//                            ^   punctuation.definition.string.end.js

    lines = lines
//  ^^^^^ ^ ^^^^^  meta.class.body.js
//  ^^^^^   ^^^^^  variable.other.readwrite.js
//        ^        keyword.operator.assignment.js
      .map((line) => line.replace(/#(.*?)$/, "").trim())
//    ^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//    ^                  ^                      ^         keyword.operator.accessor.js
//     ^^^                ^^^^^^^                         meta.function-call.method.with-arguments.js
//     ^^^                ^^^^^^^                ^^^^     entity.name.function.js
//        ^                      ^             ^       ^  meta.brace.round.js
//         ^^^^^^ ^^                                      meta.function.arrow.js
//         ^                                              punctuation.definition.parameters.begin.js
//          ^^^^                                          variable.other.readwrite.js
//              ^                                         punctuation.definition.parameters.end.js
//                ^^                                      storage.type.function.arrow.js
//                   ^^^^                                 variable.other.object.js
//                                ^^^^^^^^^               string.regexp.js
//                                ^          ^            punctuation.definition.string.begin.js
//                                  ^^^^^                 meta.group.regexp
//                                  ^   ^                 punctuation.definition.group.regexp
//                                    ^^                  keyword.operator.quantifier.regexp
//                                       ^                keyword.control.anchor.regexp
//                                        ^   ^           punctuation.definition.string.end.js
//                                         ^              meta.delimiter.comma.js
//                                           ^^           string.quoted.double.js
//                                               ^^^^^^   meta.function-call.method.without-arguments.js
//                                                   ^^   meta.group.braces.round.function.arguments.js
      .filter((line) => !!line)
//    ^^^^^^^^^^^^^^ ^^ ^^^^^^^  meta.class.body.js
//    ^                          keyword.operator.accessor.js
//     ^^^^^^                    meta.function-call.method.with-arguments.js
//     ^^^^^^                    entity.name.function.js
//           ^                ^  meta.brace.round.js
//            ^^^^^^ ^^          meta.function.arrow.js
//            ^                  punctuation.definition.parameters.begin.js
//             ^^^^       ^^^^   variable.other.readwrite.js
//                 ^             punctuation.definition.parameters.end.js
//                   ^^          storage.type.function.arrow.js
//                      ^^       keyword.operator.logical.js

    this.mergeOptions({
//  ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                 variable.language.this.js
//      ^                keyword.operator.accessor.js
//       ^^^^^^^^^^^^    meta.function-call.method.with-arguments.js
//       ^^^^^^^^^^^^    entity.name.function.js
//                   ^   meta.brace.round.js
//                    ^  meta.brace.curly.js
      options: { ignore: lines },
//    ^^^^^^^^ ^ ^^^^^^^ ^^^^^ ^^  meta.class.body.js
//    ^^^^^^^^   ^^^^^^^           constant.other.object.key.js
//    ^^^^^^^    ^^^^^^            string.unquoted.js
//           ^         ^           punctuation.separator.key-value.js
//             ^               ^   meta.brace.curly.js
//                       ^^^^^     variable.other.readwrite.js
//                              ^  meta.delimiter.comma.js
      loc
//    ^^^  meta.class.body.js
//    ^^^  variable.other.readwrite.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  findConfigs(loc) {
//^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^    meta.function.method.js
//^^^^^^^^^^^         entity.name.function.method.js
//           ^        punctuation.definition.parameters.begin.js
//            ^^^     variable.other.readwrite.js
//               ^    punctuation.definition.parameters.end.js
//                 ^  meta.brace.curly.js
    if (!loc) return
//  ^^ ^^^^^^ ^^^^^^  meta.class.body.js
//  ^^                keyword.control.conditional.js
//     ^    ^         meta.brace.round.js
//      ^             keyword.operator.logical.js
//       ^^^          variable.other.readwrite.js
//            ^^^^^^  keyword.control.flow.js

    if (!isAbsolute(loc)) {
//  ^^ ^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^                       keyword.control.conditional.js
//     ^                ^    meta.brace.round.js
//      ^                    keyword.operator.logical.js
//       ^^^^^^^^^^^^^^^     meta.function-call.with-arguments.js
//       ^^^^^^^^^^          entity.name.function.js
//                 ^         punctuation.definition.parameters.begin.js
//                  ^^^      variable.other.readwrite.js
//                     ^     punctuation.definition.parameters.end.js
//                        ^  meta.brace.curly.js
      loc = path.join(process.cwd(), loc)
//    ^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^  meta.class.body.js
//    ^^^                            ^^^   variable.other.readwrite.js
//        ^                                keyword.operator.assignment.js
//          ^^^^                           variable.other.object.js
//              ^            ^             keyword.operator.accessor.js
//               ^^^^                      meta.function-call.method.with-arguments.js
//               ^^^^         ^^^          entity.name.function.js
//                   ^                  ^  meta.brace.round.js
//                    ^^^^^^^              support.type.object.process.js
//                            ^^^^^        meta.function-call.method.without-arguments.js
//                               ^^        meta.group.braces.round.function.arguments.js
//                                 ^       meta.delimiter.comma.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    let foundConfig = false
//  ^^^ ^^^^^^^^^^^ ^ ^^^^^  meta.class.body.js
//  ^^^                      storage.type.js
//      ^^^^^^^^^^^          variable.other.readwrite.js
//                  ^        keyword.operator.assignment.js
//                    ^^^^^  constant.language.boolean.false.js
    let foundIgnore = false
//  ^^^ ^^^^^^^^^^^ ^ ^^^^^  meta.class.body.js
//  ^^^                      storage.type.js
//      ^^^^^^^^^^^          variable.other.readwrite.js
//                  ^        keyword.operator.assignment.js
//                    ^^^^^  constant.language.boolean.false.js

    while (loc !== (loc = path.dirname(loc))) {
//  ^^^^^ ^^^^ ^^^ ^^^^ ^ ^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//  ^^^^^                                        keyword.control.loop.js
//        ^        ^                  ^   ^^^    meta.brace.round.js
//         ^^^      ^^^                ^^^       variable.other.readwrite.js
//             ^^^                               keyword.operator.comparison.js
//                      ^                        keyword.operator.assignment.js
//                        ^^^^                   variable.other.object.js
//                            ^                  keyword.operator.accessor.js
//                             ^^^^^^^           meta.function-call.method.with-arguments.js
//                             ^^^^^^^           entity.name.function.js
//                                            ^  meta.brace.curly.js
      if (!foundConfig) {
//    ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//    ^^                   keyword.control.conditional.js
//       ^            ^    meta.brace.round.js
//        ^                keyword.operator.logical.js
//         ^^^^^^^^^^^     variable.other.readwrite.js
//                      ^  meta.brace.curly.js
        let configLoc = path.join(loc, BABELRC_FILENAME)
//      ^^^ ^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.class.body.js
//      ^^^                                               storage.type.js
//          ^^^^^^^^^             ^^^                     variable.other.readwrite.js
//                    ^                                   keyword.operator.assignment.js
//                      ^^^^                              variable.other.object.js
//                          ^                             keyword.operator.accessor.js
//                           ^^^^                         meta.function-call.method.with-arguments.js
//                           ^^^^                         entity.name.function.js
//                               ^                     ^  meta.brace.round.js
//                                   ^                    meta.delimiter.comma.js
//                                     ^^^^^^^^^^^^^^^^   variable.other.constant.js
        if (exists(configLoc)) {
//      ^^ ^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//      ^^                        keyword.control.conditional.js
//         ^                 ^    meta.brace.round.js
//          ^^^^^^^^^^^^^^^^^     meta.function-call.with-arguments.js
//          ^^^^^^                entity.name.function.js
//                ^               punctuation.definition.parameters.begin.js
//                 ^^^^^^^^^      variable.other.readwrite.js
//                          ^     punctuation.definition.parameters.end.js
//                             ^  meta.brace.curly.js
          this.addConfig(configLoc)
//        ^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^                       variable.language.this.js
//            ^                      keyword.operator.accessor.js
//             ^^^^^^^^^             meta.function-call.method.with-arguments.js
//             ^^^^^^^^^             entity.name.function.js
//                      ^         ^  meta.brace.round.js
//                       ^^^^^^^^^   variable.other.readwrite.js
          foundConfig = true
//        ^^^^^^^^^^^ ^ ^^^^  meta.class.body.js
//        ^^^^^^^^^^^         variable.other.readwrite.js
//                    ^       keyword.operator.assignment.js
//                      ^^^^  constant.language.boolean.true.js
        }
//      ^  meta.class.body.js
//      ^  meta.brace.curly.js

        let pkgLoc = path.join(loc, PACKAGE_FILENAME)
//      ^^^ ^^^^^^ ^ ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.class.body.js
//      ^^^                                            storage.type.js
//          ^^^^^^             ^^^                     variable.other.readwrite.js
//                 ^                                   keyword.operator.assignment.js
//                   ^^^^                              variable.other.object.js
//                       ^                             keyword.operator.accessor.js
//                        ^^^^                         meta.function-call.method.with-arguments.js
//                        ^^^^                         entity.name.function.js
//                            ^                     ^  meta.brace.round.js
//                                ^                    meta.delimiter.comma.js
//                                  ^^^^^^^^^^^^^^^^   variable.other.constant.js
        if (!foundConfig && exists(pkgLoc)) {
//      ^^ ^^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^^^^ ^  meta.class.body.js
//      ^^                                     keyword.control.conditional.js
//         ^                              ^    meta.brace.round.js
//          ^            ^^                    keyword.operator.logical.js
//           ^^^^^^^^^^^           ^^^^^^      variable.other.readwrite.js
//                          ^^^^^^^^^^^^^^     meta.function-call.with-arguments.js
//                          ^^^^^^             entity.name.function.js
//                                ^            punctuation.definition.parameters.begin.js
//                                       ^     punctuation.definition.parameters.end.js
//                                          ^  meta.brace.curly.js
          foundConfig = this.addConfig(pkgLoc, "babel", JSON)
//        ^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^^^^  meta.class.body.js
//        ^^^^^^^^^^^                  ^^^^^^                  variable.other.readwrite.js
//                    ^                                        keyword.operator.assignment.js
//                      ^^^^                                   variable.language.this.js
//                          ^                                  keyword.operator.accessor.js
//                           ^^^^^^^^^                         meta.function-call.method.with-arguments.js
//                           ^^^^^^^^^                         entity.name.function.js
//                                    ^                     ^  meta.brace.round.js
//                                           ^        ^        meta.delimiter.comma.js
//                                             ^^^^^^^         string.quoted.double.js
//                                             ^               punctuation.definition.string.begin.js
//                                                   ^         punctuation.definition.string.end.js
//                                                      ^^^^   variable.other.constant.js
        }
//      ^  meta.class.body.js
//      ^  meta.brace.curly.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js

      if (!foundIgnore) {
//    ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//    ^^                   keyword.control.conditional.js
//       ^            ^    meta.brace.round.js
//        ^                keyword.operator.logical.js
//         ^^^^^^^^^^^     variable.other.readwrite.js
//                      ^  meta.brace.curly.js
        let ignoreLoc = path.join(loc, BABELIGNORE_FILENAME)
//      ^^^ ^^^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//      ^^^                                                   storage.type.js
//          ^^^^^^^^^             ^^^                         variable.other.readwrite.js
//                    ^                                       keyword.operator.assignment.js
//                      ^^^^                                  variable.other.object.js
//                          ^                                 keyword.operator.accessor.js
//                           ^^^^                             meta.function-call.method.with-arguments.js
//                           ^^^^                             entity.name.function.js
//                               ^                         ^  meta.brace.round.js
//                                   ^                        meta.delimiter.comma.js
//                                     ^^^^^^^^^^^^^^^^^^^^   variable.other.constant.js
        if (exists(ignoreLoc)) {
//      ^^ ^^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//      ^^                        keyword.control.conditional.js
//         ^                 ^    meta.brace.round.js
//          ^^^^^^^^^^^^^^^^^     meta.function-call.with-arguments.js
//          ^^^^^^                entity.name.function.js
//                ^               punctuation.definition.parameters.begin.js
//                 ^^^^^^^^^      variable.other.readwrite.js
//                          ^     punctuation.definition.parameters.end.js
//                             ^  meta.brace.curly.js
          this.addIgnoreConfig(ignoreLoc)
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//        ^^^^                             variable.language.this.js
//            ^                            keyword.operator.accessor.js
//             ^^^^^^^^^^^^^^^             meta.function-call.method.with-arguments.js
//             ^^^^^^^^^^^^^^^             entity.name.function.js
//                            ^         ^  meta.brace.round.js
//                             ^^^^^^^^^   variable.other.readwrite.js
          foundIgnore = true
//        ^^^^^^^^^^^ ^ ^^^^  meta.class.body.js
//        ^^^^^^^^^^^         variable.other.readwrite.js
//                    ^       keyword.operator.assignment.js
//                      ^^^^  constant.language.boolean.true.js
        }
//      ^  meta.class.body.js
//      ^  meta.brace.curly.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js

      if (foundIgnore && foundConfig) return
//    ^^ ^^^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^^^^^^  meta.class.body.js
//    ^^                                      keyword.control.conditional.js
//       ^                          ^         meta.brace.round.js
//        ^^^^^^^^^^^    ^^^^^^^^^^^          variable.other.readwrite.js
//                    ^^                      keyword.operator.logical.js
//                                    ^^^^^^  keyword.control.flow.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  normaliseOptions() {
//^^^^^^^^^^^^^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^^^^^    meta.function.method.js
//^^^^^^^^^^^^^^^^      entity.name.function.method.js
//                ^     punctuation.definition.parameters.begin.js
//                 ^    punctuation.definition.parameters.end.js
//                   ^  meta.brace.curly.js
    let opts = this.options
//  ^^^ ^^^^ ^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^                      storage.type.js
//      ^^^^                 variable.other.readwrite.js
//           ^               keyword.operator.assignment.js
//             ^^^^          variable.language.this.js
//                 ^         keyword.operator.accessor.js
//                  ^^^^^^^  meta.property.object.js
//                  ^^^^^^^  variable.other.property.js

    for (let key in config) {
//  ^^^ ^^^^ ^^^ ^^ ^^^^^^^ ^  meta.class.body.js
//  ^^^ ^^^^ ^^^ ^^ ^^^^^^^    meta.for.js
//  ^^^                        keyword.control.loop.js
//      ^                 ^    meta.brace.round.js
//       ^^^                   storage.type.js
//           ^^^    ^^^^^^     variable.other.readwrite.js
//               ^^            keyword.operator.js
//                          ^  meta.brace.curly.js
      let option = config[key]
//    ^^^ ^^^^^^ ^ ^^^^^^^^^^^  meta.class.body.js
//    ^^^                       storage.type.js
//        ^^^^^^          ^^^   variable.other.readwrite.js
//               ^              keyword.operator.assignment.js
//                 ^^^^^^       variable.other.object.js
//                       ^   ^  meta.brace.square.js
      let val    = opts[key]
//    ^^^ ^^^    ^ ^^^^^^^^^  meta.class.body.js
//    ^^^                     storage.type.js
//        ^^^           ^^^   variable.other.readwrite.js
//               ^            keyword.operator.assignment.js
//                 ^^^^       variable.other.object.js
//                     ^   ^  meta.brace.square.js

      // optional
//    ^^ ^^^^^^^^  meta.class.body.js
//    ^^ ^^^^^^^^  comment.line.double-slash.js
//    ^^           punctuation.definition.comment.js
      if (!val && option.optional) continue
//    ^^ ^^^^^ ^^ ^^^^^^^^^^^^^^^^ ^^^^^^^^  meta.class.body.js
//    ^^                                     keyword.control.conditional.js
//       ^                       ^           meta.brace.round.js
//        ^    ^^                            keyword.operator.logical.js
//         ^^^                               variable.other.readwrite.js
//                ^^^^^^                     variable.other.object.js
//                      ^                    keyword.operator.accessor.js
//                       ^^^^^^^^            meta.property.object.js
//                       ^^^^^^^^            variable.other.property.js
//                                 ^^^^^^^^  keyword.control.loop.js

      // aliases
//    ^^ ^^^^^^^  meta.class.body.js
//    ^^ ^^^^^^^  comment.line.double-slash.js
//    ^^          punctuation.definition.comment.js
      if (option.alias) {
//    ^^ ^^^^^^^^^^^^^^ ^  meta.class.body.js
//    ^^                   keyword.control.conditional.js
//       ^            ^    meta.brace.round.js
//        ^^^^^^           variable.other.object.js
//              ^          keyword.operator.accessor.js
//               ^^^^^     meta.property.object.js
//               ^^^^^     variable.other.property.js
//                      ^  meta.brace.curly.js
        opts[option.alias] = opts[option.alias] || val
//      ^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^ ^^ ^^^  meta.class.body.js
//      ^^^^ ^^^^^^          ^^^^ ^^^^^^                variable.other.object.js
//          ^            ^       ^            ^         meta.brace.square.js
//                 ^                    ^               keyword.operator.accessor.js
//                  ^^^^^                ^^^^^          meta.property.object.js
//                  ^^^^^                ^^^^^          variable.other.property.js
//                         ^                            keyword.operator.assignment.js
//                                              ^^      keyword.operator.logical.js
//                                                 ^^^  variable.other.readwrite.js
      } else {
//    ^ ^^^^ ^  meta.class.body.js
//    ^      ^  meta.brace.curly.js
//      ^^^^    keyword.control.conditional.js
        opts[key] = val
//      ^^^^^^^^^ ^ ^^^  meta.class.body.js
//      ^^^^             variable.other.object.js
//          ^   ^        meta.brace.square.js
//           ^^^    ^^^  variable.other.readwrite.js
//                ^      keyword.operator.assignment.js
      }
//    ^  meta.class.body.js
//    ^  meta.brace.curly.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js

  init(opts: Object = {}): Object {
//^^^^^^^^^^ ^^^^^^ ^ ^^^^ ^^^^^^ ^  meta.class.body.js
//^^^^^^^^^^ ^^^^^^ ^ ^^^^ ^^^^^^    meta.function.method.js
//^^^^                               entity.name.function.method.js
//    ^                              punctuation.definition.parameters.begin.js
//     ^^^^                          variable.other.readwrite.js
//         ^             ^           punctuation.type.flowtype
//           ^^^^^^        ^^^^^^    support.type.builtin.class.flowtype
//                  ^                keyword.operator.assignment.js
//                    ^^          ^  meta.brace.curly.js
//                      ^            punctuation.definition.parameters.end.js
    let filename = opts.filename
//  ^^^ ^^^^^^^^ ^ ^^^^^^^^^^^^^  meta.class.body.js
//  ^^^                           storage.type.js
//      ^^^^^^^^                  variable.other.readwrite.js
//               ^                keyword.operator.assignment.js
//                 ^^^^           variable.other.object.js
//                     ^          keyword.operator.accessor.js
//                      ^^^^^^^^  meta.property.object.js
//                      ^^^^^^^^  variable.other.property.js

    // resolve all .babelrc files
//  ^^ ^^^^^^^ ^^^ ^^^^^^^^ ^^^^^  meta.class.body.js
//  ^^ ^^^^^^^ ^^^ ^^^^^^^^ ^^^^^  comment.line.double-slash.js
//  ^^                             punctuation.definition.comment.js
    if (opts.babelrc !== false) {
//  ^^ ^^^^^^^^^^^^^ ^^^ ^^^^^^ ^  meta.class.body.js
//  ^^                             keyword.control.conditional.js
//     ^                      ^    meta.brace.round.js
//      ^^^^                       variable.other.object.js
//          ^                      keyword.operator.accessor.js
//           ^^^^^^^               meta.property.object.js
//           ^^^^^^^               variable.other.property.js
//                   ^^^           keyword.operator.comparison.js
//                       ^^^^^     constant.language.boolean.false.js
//                              ^  meta.brace.curly.js
      this.findConfigs(filename)
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^                        variable.language.this.js
//        ^                       keyword.operator.accessor.js
//         ^^^^^^^^^^^            meta.function-call.method.with-arguments.js
//         ^^^^^^^^^^^            entity.name.function.js
//                    ^        ^  meta.brace.round.js
//                     ^^^^^^^^   variable.other.readwrite.js
    }
//  ^  meta.class.body.js
//  ^  meta.brace.curly.js

    // merge in base options
//  ^^ ^^^^^ ^^ ^^^^ ^^^^^^^  meta.class.body.js
//  ^^ ^^^^^ ^^ ^^^^ ^^^^^^^  comment.line.double-slash.js
//  ^^                        punctuation.definition.comment.js
    this.mergeOptions({
//  ^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                 variable.language.this.js
//      ^                keyword.operator.accessor.js
//       ^^^^^^^^^^^^    meta.function-call.method.with-arguments.js
//       ^^^^^^^^^^^^    entity.name.function.js
//                   ^   meta.brace.round.js
//                    ^  meta.brace.curly.js
      options: opts,
//    ^^^^^^^^ ^^^^^  meta.class.body.js
//    ^^^^^^^^        constant.other.object.key.js
//    ^^^^^^^         string.unquoted.js
//           ^        punctuation.separator.key-value.js
//             ^^^^   variable.other.readwrite.js
//                 ^  meta.delimiter.comma.js
      alias: "base",
//    ^^^^^^ ^^^^^^^  meta.class.body.js
//    ^^^^^^          constant.other.object.key.js
//    ^^^^^           string.unquoted.js
//         ^          punctuation.separator.key-value.js
//           ^^^^^^   string.quoted.double.js
//           ^        punctuation.definition.string.begin.js
//                ^   punctuation.definition.string.end.js
//                 ^  meta.delimiter.comma.js
      dirname: filename && path.dirname(filename)
//    ^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//    ^^^^^^^^                                     constant.other.object.key.js
//    ^^^^^^^                                      string.unquoted.js
//           ^                                     punctuation.separator.key-value.js
//             ^^^^^^^^                 ^^^^^^^^   variable.other.readwrite.js
//                      ^^                         keyword.operator.logical.js
//                         ^^^^                    variable.other.object.js
//                             ^                   keyword.operator.accessor.js
//                              ^^^^^^^            meta.function-call.method.with-arguments.js
//                              ^^^^^^^            entity.name.function.js
//                                     ^        ^  meta.brace.round.js
    })
//  ^^  meta.class.body.js
//  ^   meta.brace.curly.js
//   ^  meta.brace.round.js

    // normalise
//  ^^ ^^^^^^^^^  meta.class.body.js
//  ^^ ^^^^^^^^^  comment.line.double-slash.js
//  ^^            punctuation.definition.comment.js
    this.normaliseOptions(opts)
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^                         variable.language.this.js
//      ^                        keyword.operator.accessor.js
//       ^^^^^^^^^^^^^^^^        meta.function-call.method.with-arguments.js
//       ^^^^^^^^^^^^^^^^        entity.name.function.js
//                       ^    ^  meta.brace.round.js
//                        ^^^^   variable.other.readwrite.js

    return this.options
//  ^^^^^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^               keyword.control.flow.js
//         ^^^^          variable.language.this.js
//             ^         keyword.operator.accessor.js
//              ^^^^^^^  meta.property.object.js
//              ^^^^^^^  variable.other.property.js
  }
//^  meta.class.body.js
//^  meta.brace.curly.js
}
// <- punctuation.section.class.end.js

OptionManager.memoisedPlugins = []
// <- meta.property.class.js variable.other.class.js
 // <- meta.property.class.js variable.other.class.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^       meta.property.class.js
//^^^^^^^^^^^                       variable.other.class.js
//           ^                      keyword.operator.accessor.js
//            ^^^^^^^^^^^^^^^       variable.other.property.static.js
//                            ^     keyword.operator.assignment.js
//                              ^^  meta.brace.square.js
