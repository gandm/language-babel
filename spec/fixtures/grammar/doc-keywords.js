// SYNTAX TEST "source.js.jsx"
/**
 * @abstract {@tutorial name} [link text]{@link url}
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^^^ ^^^^^ ^^^^^ ^^^^^^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^^^^^  ^^^^^^^^^                   ^^^^^       storage.type.class.jsdoc
//           ^^^^^^^^^^ ^^^^^ ^^^^^ ^^^^^^^^^^^ ^^^^  meta.tag.inline.jsdoc
//           ^              ^            ^         ^  meta.brace.curly.jsdoc
//                      ^^^^                    ^^^   string.jsdoc
//                            ^^^^^ ^^^^^             string.linktext.jsdoc
 * @access protected this is protected
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^^^^ ^^^^ ^^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^                              storage.type.class.jsdoc
//         ^^^^^^^^^                    storage.modifier.jsdoc
 * @access private this is protected
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^^ ^^^^ ^^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^                            storage.type.class.jsdoc
//         ^^^^^^^                    storage.modifier.jsdoc
 * @access public this is protected
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^ ^^^^ ^^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^                           storage.type.class.jsdoc
//         ^^^^^^                    storage.modifier.jsdoc
 * @alias AAA.aaaa
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^           storage.type.class.jsdoc
//        ^^^       entity.name.class.jsdoc
//           ^      keyword.operator.accessor.jsdoc
//            ^^^^  entity.name.function.method.static.jsdoc
 * @alias aaa.aaaa
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^           storage.type.class.jsdoc
//        ^^^       entity.name.function.jsdoc
//           ^      keyword.operator.accessor.jsdoc
//            ^^^^  entity.name.function.method.static.jsdoc
 * @alias Aaa.aaaa
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^           storage.type.class.jsdoc
//        ^^^       entity.name.class.jsdoc
//           ^      keyword.operator.accessor.jsdoc
//            ^^^^  entity.name.function.method.static.jsdoc
 * @alias A#aaa this is an alias
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^ ^^^^ ^^ ^^ ^^^^^  comment.block.documentation.js
// ^^^^^^                         storage.type.class.jsdoc
//        ^                       entity.name.class.jsdoc
//         ^                      keyword.operator.accessor.jsdoc
//          ^^^                   entity.name.function.method.instance.jsdoc
 * @alias A~aaaa
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^         storage.type.class.jsdoc
//        ^       entity.name.class.jsdoc
//         ^      keyword.operator.accessor.jsdoc
//          ^^^^  entity.name.function.method.inner.jsdoc
 * @arg {Array.<MyClass>} employee
 // <- comment.block.documentation.js
// ^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^                             storage.type.class.jsdoc
//      ^^^^^^^^^^^^^^^^^           entity.name.type.instance.jsdoc
//      ^               ^           meta.brace.curly.jsdoc
//       ^^^^^                      entity.name.class.jsdoc
//                        ^^^^^^^^  variable.other.jsdoc
 * @argument {Array.<MyClass>} employee
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^                             storage.type.class.jsdoc
//           ^^^^^^^^^^^^^^^^^           entity.name.type.instance.jsdoc
//           ^               ^           meta.brace.curly.jsdoc
//            ^^^^^                      entity.name.class.jsdoc
//                             ^^^^^^^^  variable.other.jsdoc
 * @augments A~aaaa
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^^^         storage.type.class.jsdoc
//           ^       entity.name.class.jsdoc
//            ^      keyword.operator.accessor.jsdoc
//             ^^^^  entity.name.function.method.inner.jsdoc
 * @author author name <someemail@somedomain.com>
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^ ^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^                                         storage.type.class.jsdoc
 * @borrows A.member as Aaa."#member" borrows as a namespace
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^^^^^^ ^^^^^^^ ^^ ^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^                                                   storage.type.class.jsdoc
//          ^           ^^^                                   entity.name.class.jsdoc
//           ^                                                keyword.operator.accessor.jsdoc
//            ^^^^^^                                          entity.name.function.method.static.jsdoc
//                   ^^                                       keyword.as.jsdoc
//                         ^^^^^^^^^^                         string.method.jsdoc
 * @callback Requester~requestCallback is a callback
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^ ^^ ^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^                                          storage.type.class.jsdoc
//           ^^^^^^^^^                                entity.name.class.jsdoc
//                    ^                               keyword.operator.accessor.jsdoc
//                     ^^^^^^^^^^^^^^^                entity.name.function.method.inner.jsdoc
 * @class {type} name#aaaa A class
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^ ^^^^^^^^^ ^ ^^^^^  comment.block.documentation.js
// ^^^^^^                           storage.type.class.jsdoc
//        ^^^^^^                    entity.name.type.instance.jsdoc
//        ^    ^                    meta.brace.curly.jsdoc
//               ^^^^^^^^^          variable.other.jsdoc
 * @classdesc this is a description
 // <- comment.block.documentation.js
// ^^^^^^^^^^ ^^^^ ^^ ^ ^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^                        storage.type.class.jsdoc
 * @const {type} name a constant
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^ ^^^^ ^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^                         storage.type.class.jsdoc
//        ^^^^^^                  entity.name.type.instance.jsdoc
//        ^    ^                  meta.brace.curly.jsdoc
//               ^^^^             variable.other.jsdoc
 * @constant {{a: type}} name a constant
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^ ^^^^^^ ^^^^ ^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^                              storage.type.class.jsdoc
//           ^^^^ ^^^^^^                  entity.name.type.instance.jsdoc
//           ^^       ^^                  meta.brace.curly.jsdoc
//             ^                          variable.other.readwrite.jsdoc
//                       ^^^^             variable.other.jsdoc
 * @constructs
 // <- comment.block.documentation.js
// ^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^^  storage.type.class.jsdoc
 * @constructor {A} name
 // <- comment.block.documentation.js
// ^^^^^^^^^^^^ ^^^ ^^^^   comment.block.documentation.js
// ^^^^^^^^^^^^            storage.type.class.jsdoc
//              ^^^        entity.name.type.instance.jsdoc
//              ^ ^        meta.brace.curly.jsdoc
//                  ^^^^   variable.other.jsdoc
 * @copyright a copyright sting
 // <- comment.block.documentation.js
// ^^^^^^^^^^ ^ ^^^^^^^^^ ^^^^^  comment.block.documentation.js
// ^^^^^^^^^^                    storage.type.class.jsdoc
 * @default
 // <- comment.block.documentation.js
// ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^  storage.type.class.jsdoc
 * @defaultvalue
 // <- comment.block.documentation.js
// ^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^^^^  storage.type.class.jsdoc
 * @deprecated no longer used
 // <- comment.block.documentation.js
// ^^^^^^^^^^^ ^^ ^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^^^^^^^                 storage.type.class.jsdoc
 * @desc a description
 // <- comment.block.documentation.js
// ^^^^^ ^ ^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^                storage.type.class.jsdoc
 * @description a description
 // <- comment.block.documentation.js
// ^^^^^^^^^^^^ ^ ^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^^^                storage.type.class.jsdoc
 * @enum {number} a enum
 // <- comment.block.documentation.js
// ^^^^^ ^^^^^^^^ ^ ^^^^  comment.block.documentation.js
// ^^^^^                  storage.type.class.jsdoc
//       ^^^^^^^^         entity.name.type.instance.jsdoc
//       ^      ^         meta.brace.curly.jsdoc
//        ^^^^^^          support.type.builtin.primitive.jsdoc
 * @example
 // <- comment.block.documentation.js
// ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^  storage.type.class.jsdoc
 * @emits a#a
 // <- comment.block.documentation.js
// ^^^^^^ ^^^  comment.block.documentation.js
// ^^^^^^      storage.type.class.jsdoc
//        ^    entity.name.function.jsdoc
//         ^   keyword.operator.accessor.jsdoc
//          ^  entity.name.function.method.instance.jsdoc
 * @event chat."#channel"."op:announce-motd"
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^                                     storage.type.class.jsdoc
//        ^^^^                                entity.name.function.jsdoc
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  string.method.jsdoc
 * @exports module:aaaa/aa
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^                 storage.type.class.jsdoc
//          ^^^^^^          keyword.module.jsdoc
//                ^         punctuation.jsdoc
//                 ^^^^^^^  string.modulename.jsdoc
 * @extends A~aaaa
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^^         storage.type.class.jsdoc
//          ^       entity.name.class.jsdoc
//           ^      keyword.operator.accessor.jsdoc
//            ^^^^  entity.name.function.method.inner.jsdoc
 * @external string
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^^^         storage.type.class.jsdoc
 * @fileoverview
 // <- comment.block.documentation.js
// ^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^^^^  storage.type.class.jsdoc
 * @file
 // <- comment.block.documentation.js
// ^^^^^  comment.block.documentation.js
// ^^^^^  storage.type.class.jsdoc
 * @fires a#a
 // <- comment.block.documentation.js
// ^^^^^^ ^^^  comment.block.documentation.js
// ^^^^^^      storage.type.class.jsdoc
//        ^    entity.name.function.jsdoc
//         ^   keyword.operator.accessor.jsdoc
//          ^  entity.name.function.method.instance.jsdoc
 * @function $_myFunction yep it's a func
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^^^^^ ^^^ ^^^^ ^ ^^^^  comment.block.documentation.js
// ^^^^^^^^^                               storage.type.class.jsdoc
//           ^^^^^^^^^^^^                  variable.other.jsdoc
 * @func
 // <- comment.block.documentation.js
// ^^^^^  comment.block.documentation.js
// ^^^^^  storage.type.class.jsdoc
 * @global
 // <- comment.block.documentation.js
// ^^^^^^^  comment.block.documentation.js
// ^^^^^^^  storage.type.class.jsdoc
 * @host
 // <- comment.block.documentation.js
// ^^^^^  comment.block.documentation.js
// ^^^^^  storage.type.class.jsdoc
 * @method
 // <- comment.block.documentation.js
// ^^^^^^^  comment.block.documentation.js
// ^^^^^^^  storage.type.class.jsdoc
 * @module module:ssss/aaa aaaa
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^^^                       storage.type.class.jsdoc
//         ^^^^^^                keyword.module.jsdoc
//               ^               punctuation.jsdoc
//                ^^^^^^^^       string.modulename.jsdoc
 * @implements {type}
 // <- comment.block.documentation.js
// ^^^^^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^^         storage.type.class.jsdoc
//             ^^^^^^  entity.name.type.instance.jsdoc
//             ^    ^  meta.brace.curly.jsdoc
 * @ignore
 // <- comment.block.documentation.js
// ^^^^^^^  comment.block.documentation.js
// ^^^^^^^  storage.type.class.jsdoc
 * @instance
 // <- comment.block.documentation.js
// ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^  storage.type.class.jsdoc
 * @interface Color#rgb
 // <- comment.block.documentation.js
// ^^^^^^^^^^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^            storage.type.class.jsdoc
//            ^^^^^      entity.name.class.jsdoc
//                 ^     keyword.operator.accessor.jsdoc
//                  ^^^  entity.name.function.method.instance.jsdoc
 * @kind
 // <- comment.block.documentation.js
// ^^^^^  comment.block.documentation.js
// ^^^^^  storage.type.class.jsdoc
 * @lends Some.aaa
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^           storage.type.class.jsdoc
//        ^^^^      entity.name.class.jsdoc
//            ^     keyword.operator.accessor.jsdoc
//             ^^^  entity.name.function.method.static.jsdoc
 * @listens module:hurler~snowball
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^                         storage.type.class.jsdoc
//          ^^^^^^                  keyword.module.jsdoc
//                ^                 punctuation.jsdoc
//                 ^^^^^^^^^^^^^^^  string.modulename.jsdoc
 * @license MIT
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^  comment.block.documentation.js
// ^^^^^^^^      storage.type.class.jsdoc
 * @member {number} foo
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^^^ ^^^  comment.block.documentation.js
// ^^^^^^^               storage.type.class.jsdoc
//         ^^^^^^^^      entity.name.type.instance.jsdoc
//         ^      ^      meta.brace.curly.jsdoc
//          ^^^^^^       support.type.builtin.primitive.jsdoc
//                  ^^^  variable.other.jsdoc
 * @memberof Greeter#name
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^               storage.type.class.jsdoc
//           ^^^^^^^       entity.name.class.jsdoc
//                  ^      keyword.operator.accessor.jsdoc
//                   ^^^^  entity.name.function.method.instance.jsdoc
 * @mixes Eventful
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^           storage.type.class.jsdoc
//        ^^^^^^^^  entity.name.class.jsdoc
 * @mixin name
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^^       storage.type.class.jsdoc
//        ^^^^  variable.other.jsdoc
 * @name Eventful#aaaa
 // <- comment.block.documentation.js
// ^^^^^ ^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^                storage.type.class.jsdoc
//       ^^^^^^^^       entity.name.class.jsdoc
//               ^      keyword.operator.accessor.jsdoc
//                ^^^^  entity.name.function.method.instance.jsdoc
 * @namespace {type} Myspace
 // <- comment.block.documentation.js
// ^^^^^^^^^^ ^^^^^^ ^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^                 storage.type.class.jsdoc
//            ^^^^^^          entity.name.type.instance.jsdoc
//            ^    ^          meta.brace.curly.jsdoc
//                   ^^^^^^^  variable.other.jsdoc
 * @see something
 // <- comment.block.documentation.js
// ^^^^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^            storage.type.class.jsdoc
 * @inheritdoc
 // <- comment.block.documentation.js
// ^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^^  storage.type.class.jsdoc
 * @inner
 // <- comment.block.documentation.js
// ^^^^^^  comment.block.documentation.js
// ^^^^^^  storage.type.class.jsdoc
 * @override
 // <- comment.block.documentation.js
// ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^  storage.type.class.jsdoc
 * @overview
 // <- comment.block.documentation.js
// ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^  storage.type.class.jsdoc
 * @param {Array.<MyClass>} employee  The employee who is responsible for the project.
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^  ^^^ ^^^^^^^^ ^^^ ^^ ^^^^^^^^^^^ ^^^ ^^^ ^^^^^^^^  comment.block.documentation.js
// ^^^^^^                                                                               storage.type.class.jsdoc
//        ^^^^^^^^^^^^^^^^^                                                             entity.name.type.instance.jsdoc
//        ^               ^                                                             meta.brace.curly.jsdoc
//         ^^^^^                                                                        entity.name.class.jsdoc
//                          ^^^^^^^^                                                    variable.other.jsdoc
 * @param {{a: string}} employee.name - The name of the employee.
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^ ^^^^^^^^ ^^^^^^^^^^^^^ ^ ^^^ ^^^^ ^^ ^^^ ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^                                                          storage.type.class.jsdoc
//        ^^^^ ^^^^^^^^                                            entity.name.type.instance.jsdoc
//        ^^         ^^                                            meta.brace.curly.jsdoc
//          ^                                                      variable.other.readwrite.jsdoc
//             ^^^^^^                                              support.type.builtin.primitive.jsdoc
//                      ^^^^^^^^^^^^^                              variable.other.jsdoc
 * @param {string} employee.department - The employee's department.
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^ ^^^ ^^^^^^^^^^ ^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^                                                            storage.type.class.jsdoc
//        ^^^^^^^^                                                   entity.name.type.instance.jsdoc
//        ^      ^                                                   meta.brace.curly.jsdoc
//         ^^^^^^                                                    support.type.builtin.primitive.jsdoc
//                 ^^^^^^^^^^^^^^^^^^^                               variable.other.jsdoc
 * @param {string} employees[ ].department - The employee's department
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^ ^ ^^^ ^^^^^^^^^^ ^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^                                                               storage.type.class.jsdoc
//        ^^^^^^^^                                                      entity.name.type.instance.jsdoc
//        ^      ^                                                      meta.brace.curly.jsdoc
//         ^^^^^^                                                       support.type.builtin.primitive.jsdoc
//                 ^^^^^^^^^^ ^^^^^^^^^^^^                              variable.other.jsdoc
 * @param  employees[ ].department - The employee's department
 // <- comment.block.documentation.js
// ^^^^^^  ^^^^^^^^^^ ^^^^^^^^^^^^ ^ ^^^ ^^^^^^^^^^ ^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^                                                       storage.type.class.jsdoc
//         ^^^^^^^^^^ ^^^^^^^^^^^^                              variable.other.jsdoc
 * @param {(string|string[])} [somebody= 'John Doe'] - Somebody's name, or an array of names
 // <- comment.block.documentation.js
// ^^^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^ ^^^^^ ^ ^^^^^^^^^^ ^^^^^ ^^ ^^ ^^^^^ ^^ ^^^^^  comment.block.documentation.js
// ^^^^^^                                                                                     storage.type.class.jsdoc
//        ^^^^^^^^^^^^^^^^^^^                                                                 entity.name.type.instance.jsdoc
//        ^                 ^                                                                 meta.brace.curly.jsdoc
//          ^^^^^^ ^^^^^^                                                                     support.type.builtin.primitive.jsdoc
//                            ^^^^^^^^^^ ^^^^^ ^^^^^                                          variable.other.jsdoc
//                                       ^^^^^ ^^^^                                           string.jsdoc
 * @property {number}  defaults.treasure.gold - How much gold the party starts with
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^ ^ ^^^ ^^^^ ^^^^ ^^^ ^^^^^ ^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^^^^^                                                                         storage.type.class.jsdoc
//           ^^^^^^^^                                                                entity.name.type.instance.jsdoc
//           ^      ^                                                                meta.brace.curly.jsdoc
//            ^^^^^^                                                                 support.type.builtin.primitive.jsdoc
//                     ^^^^^^^^ ^^^^^^^^                                             entity.name.function.jsdoc
//                                      ^                                            keyword.operator.accessor.jsdoc
//                                       ^^^^                                        entity.name.function.method.static.jsdoc
 * @prop {number}  defaults.treasure.gold - How much gold the party starts with
 // <- comment.block.documentation.js
// ^^^^^ ^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^ ^ ^^^ ^^^^ ^^^^ ^^^ ^^^^^ ^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^                                                                         storage.type.class.jsdoc
//       ^^^^^^^^                                                                entity.name.type.instance.jsdoc
//       ^      ^                                                                meta.brace.curly.jsdoc
//        ^^^^^^                                                                 support.type.builtin.primitive.jsdoc
//                 ^^^^^^^^ ^^^^^^^^                                             entity.name.function.jsdoc
//                                  ^                                            keyword.operator.accessor.jsdoc
//                                   ^^^^                                        entity.name.function.method.static.jsdoc
 * @private {type}
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^^         storage.type.class.jsdoc
//          ^^^^^^  entity.name.type.instance.jsdoc
//          ^    ^  meta.brace.curly.jsdoc
 * @prop
 // <- comment.block.documentation.js
// ^^^^^  comment.block.documentation.js
// ^^^^^  storage.type.class.jsdoc
 * @protected {type}
 // <- comment.block.documentation.js
// ^^^^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^         storage.type.class.jsdoc
//            ^^^^^^  entity.name.type.instance.jsdoc
//            ^    ^  meta.brace.curly.jsdoc
 * @public {type}
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^         storage.type.class.jsdoc
//         ^^^^^^  entity.name.type.instance.jsdoc
//         ^    ^  meta.brace.curly.jsdoc
 * @readonly
 // <- comment.block.documentation.js
// ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^  storage.type.class.jsdoc
 * @requires module:hurler~snowball
 // <- comment.block.documentation.js
// ^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^                         storage.type.class.jsdoc
//           ^^^^^^                  keyword.module.jsdoc
//                 ^                 punctuation.jsdoc
//                  ^^^^^^^^^^^^^^^  string.modulename.jsdoc
 * @returns {type} and nothing else
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^ ^^^ ^^^^^^^ ^^^^  comment.block.documentation.js
// ^^^^^^^^                          storage.type.class.jsdoc
//          ^^^^^^                   entity.name.type.instance.jsdoc
//          ^    ^                   meta.brace.curly.jsdoc
 * @return {type}
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^         storage.type.class.jsdoc
//         ^^^^^^  entity.name.type.instance.jsdoc
//         ^    ^  meta.brace.curly.jsdoc
 * @since
 // <- comment.block.documentation.js
// ^^^^^^  comment.block.documentation.js
// ^^^^^^  storage.type.class.jsdoc
 * @static
 // <- comment.block.documentation.js
// ^^^^^^^  comment.block.documentation.js
// ^^^^^^^  storage.type.class.jsdoc
 * @summary a summary
 // <- comment.block.documentation.js
// ^^^^^^^^ ^ ^^^^^^^  comment.block.documentation.js
// ^^^^^^^^            storage.type.class.jsdoc
 * @this Greeter#name
 // <- comment.block.documentation.js
// ^^^^^ ^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^               storage.type.class.jsdoc
//       ^^^^^^^       entity.name.class.jsdoc
//              ^      keyword.operator.accessor.jsdoc
//               ^^^^  entity.name.function.method.instance.jsdoc
 * @throws {type}
 // <- comment.block.documentation.js
// ^^^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^^^         storage.type.class.jsdoc
//         ^^^^^^  entity.name.type.instance.jsdoc
//         ^    ^  meta.brace.curly.jsdoc
 * @todo
 // <- comment.block.documentation.js
// ^^^^^  comment.block.documentation.js
// ^^^^^  storage.type.class.jsdoc
 * @tutorial
 // <- comment.block.documentation.js
// ^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^  storage.type.class.jsdoc
 * @type {type}
 // <- comment.block.documentation.js
// ^^^^^ ^^^^^^  comment.block.documentation.js
// ^^^^^         storage.type.class.jsdoc
//       ^^^^^^  entity.name.type.instance.jsdoc
//       ^    ^  meta.brace.curly.jsdoc
 * @typedef {type} Class~innerMethod
 // <- comment.block.documentation.js
// ^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^                           storage.type.class.jsdoc
//          ^^^^^^                    entity.name.type.instance.jsdoc
//          ^    ^                    meta.brace.curly.jsdoc
//                 ^^^^^              entity.name.class.jsdoc
//                      ^             keyword.operator.accessor.jsdoc
//                       ^^^^^^^^^^^  entity.name.function.method.inner.jsdoc
 * @var {number} foo
 // <- comment.block.documentation.js
// ^^^^ ^^^^^^^^ ^^^  comment.block.documentation.js
// ^^^^               storage.type.class.jsdoc
//      ^^^^^^^^      entity.name.type.instance.jsdoc
//      ^      ^      meta.brace.curly.jsdoc
//       ^^^^^^       support.type.builtin.primitive.jsdoc
//               ^^^  variable.other.jsdoc
 * @variation
 // <- comment.block.documentation.js
// ^^^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^^^  storage.type.class.jsdoc
 * @version
 // <- comment.block.documentation.js
// ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^  storage.type.class.jsdoc
 * @virtual
 // <- comment.block.documentation.js
// ^^^^^^^^  comment.block.documentation.js
// ^^^^^^^^  storage.type.class.jsdoc
*/
// <- comment.block.documentation.js punctuation.definition.comment.js
 // <- comment.block.documentation.js punctuation.definition.comment.js
