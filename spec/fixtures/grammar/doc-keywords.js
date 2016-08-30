// SYNTAX TEST "source.js.jsx"

// TODO, FIXME, CHANGED, XXX, IDEA, HACK, NOTE, and REVIEW
//^    ^                                                    not:storage.type.class.todo
// ^^^^                                                     storage.type.class.todo
//       ^^^^^                                              storage.type.class.fixme
//              ^^^^^^^                                     storage.type.class.changed
//                       ^^^                                storage.type.class.xxx
//                            ^^^^                          storage.type.class.idea
//                                  ^^^^                    storage.type.class.hack
//                                        ^^^^              storage.type.class.note
//                                                  ^^^^^^  storage.type.class.review


/**
JS Doc keywords ************************************************************************************************

@abstract (synonyms: @virtual) This member must be implemented (or overridden) by the inheritor.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^ ^^^^ ^^^^^^ ^^^^ ^^ ^^^^^^^^^^^ ^^^ ^^^^^^^^^^^ ^^ ^^^ ^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^                                                                                         storage.type.class.doc
//                   ^^^^^^^^                                                                     storage.type.class.jsdoc
@access Specify the access level of this member (private, public, or protected).
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^ ^^^^^^^ ^^^ ^^^^^^ ^^^^^ ^^ ^^^^ ^^^^^^ ^^^^^^^^^ ^^^^^^^ ^^ ^^^^^^^^^^^  comment.block.documentation.js
//^^^^^                                                                           storage.type.class.jsdoc
@alias Treat a member as if it had a different name.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^^^ ^ ^^^^^^ ^^ ^^ ^^ ^^^ ^ ^^^^^^^^^ ^^^^^  comment.block.documentation.js
//^^^^                                                storage.type.class.doc
@augments (synonyms: @extends) Indicate that a symbol inherits from, ands adds to, a parent symbol.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^^^ ^ ^^^^^^ ^^^^^^^^ ^^^^^ ^^^^ ^^^^ ^^^ ^ ^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^                                                                                            storage.type.class.jsdoc
//                   ^^^^^^^^                                                                        storage.type.class.doc
@author Identify the author of an item.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^ ^^^^^^^^ ^^^ ^^^^^^ ^^ ^^ ^^^^^  comment.block.documentation.js
//^^^^^                                  storage.type.class.doc
@borrowsThis object uses something from another object.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^^^ ^^^^^^ ^^^^ ^^^^^^^^^ ^^^^ ^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^                                             storage.type.class.jsdoc
@callbackDocument a callback function.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^^^^^^                       storage.type.class.jsdoc
@class (synonyms: @constructor)This function is intended to be called with the "new" keyword.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^ ^^^ ^^^^^ ^^^^^^^^  comment.block.documentation.js
//^^^^            ^^^^^^^^^^^^                                                                 storage.type.class.doc
@classdesc Use the following text to describe the entire class.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^ ^^^ ^^^ ^^^^^^^^^ ^^^^ ^^ ^^^^^^^^ ^^^ ^^^^^^ ^^^^^^  comment.block.documentation.js
//^^^^^^^^                                                       storage.type.class.jsdoc
@constant (synonyms: @const) Document an object as a constant.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^ ^^^^^^^^^^ ^^^^^^^ ^^^^^^^^ ^^ ^^^^^^ ^^ ^ ^^^^^^^^^  comment.block.documentation.js
//^^^^^^^            ^^^^^^                                     storage.type.class.jsdoc
@constructs This function member will be the constructor for the previous class.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^^ ^^^^ ^^^^^^^^ ^^^^^^ ^^^^ ^^ ^^^ ^^^^^^^^^^^ ^^^ ^^^ ^^^^^^^^ ^^^^^^  comment.block.documentation.js
//^^^^^^^^^                                                                       storage.type.class.jsdoc
@copyright Document some copyright information.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^ ^^^^^^^^ ^^^^ ^^^^^^^^^ ^^^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^                                       storage.type.class.jsdoc
@default (synonyms: @defaultvalue) Document the default value.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^^ ^^^ ^^^^^^^ ^^^^^^  comment.block.documentation.js
//^^^^^^            ^^^^^^^^^^^^^                               storage.type.class.jsdoc
@deprecated Document that this is no longer the preferred way.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^^ ^^^^^^^^ ^^^^ ^^^^ ^^ ^^ ^^^^^^ ^^^ ^^^^^^^^^ ^^^^  comment.block.documentation.js
//^^^^^^^^^                                                     storage.type.class.doc
@description (synonyms: @desc) Describe a symbol.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^ ^^^^^^^^ ^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^            ^^^^^                      storage.type.class.jsdoc
@enum Document a collection of related properties.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^ ^^^^^^^^ ^ ^^^^^^^^^^ ^^ ^^^^^^^ ^^^^^^^^^^^  comment.block.documentation.js
//^^^                                               storage.type.class.doc
@event Document an event.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^^^^^^ ^^ ^^^^^^  comment.block.documentation.js
//^^^^                     storage.type.class.doc
@example Provide an example of how to use a documented item.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^ ^^^^^^^ ^^ ^^^^^^^ ^^ ^^^ ^^ ^^^ ^ ^^^^^^^^^^ ^^^^^  comment.block.documentation.js
//^^^^^^                                                      storage.type.class.doc
@exports Identify the member that is exported by a JavaScript module.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^^^^^ ^^^ ^^^^^^ ^^^^ ^^ ^^^^^^^^ ^^ ^ ^^^^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^                                                               storage.type.class.jsdoc
@external (synonyms: @host) Identifies an external class, namespace, or module.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^ ^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^ ^^ ^^^^^^^^ ^^^^^^ ^^^^^^^^^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^            ^^^^^                                                       storage.type.class.jsdoc
@file (synonyms: @fileoverview, @overview) Describe a file.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^ ^ ^^^^^  comment.block.documentation.js
//^^^            ^^^^^^^^^^^^^  ^^^^^^^^^                    storage.type.class.jsdoc
@fires (synonyms: @emits) Describe the events this method may fire.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^^^^^^^^ ^^^^^^^ ^^^^^^^^ ^^^ ^^^^^^ ^^^^ ^^^^^^ ^^^ ^^^^^  comment.block.documentation.js
//^^^^                                                               storage.type.class.doc
//                ^^^^^^                                             storage.type.class.jsdoc
@function (synonyms: @func, @method) Describe a function or method.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^ ^^^^^^^^^^ ^^^^^^ ^^^^^^^^ ^^^^^^^^ ^ ^^^^^^^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^            ^^^^^                                           storage.type.class.jsdoc
//                          ^^^^^^^                                  storage.type.class.doc
@global Document a global object.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^ ^^^^^^^^ ^ ^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^                            storage.type.class.jsdoc
@ignore Omit a symbol from the documentation.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^ ^^^^ ^ ^^^^^^ ^^^^ ^^^ ^^^^^^^^^^^^^^  comment.block.documentation.js
//^^^^^                                        storage.type.class.doc
@implements This symbol implements an interface.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^^^^^^ ^^ ^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^                                       storage.type.class.jsdoc
@inheritdoc Indicate that a symbol should inherit its parent's documentation.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^^ ^^^^^^^^ ^^^^ ^ ^^^^^^ ^^^^^^ ^^^^^^^ ^^^ ^^^^^^^^ ^^^^^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^                                                                    storage.type.class.doc
@inner Document an inner object. @instance Document an instance member.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^ ^^^^^^^^ ^^ ^^^^^ ^^^^^^^ ^^^^^^^^^ ^^^^^^^^ ^^ ^^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^                           ^^^^^^^^^                               storage.type.class.jsdoc
@interface This symbol is an interface that others can implement.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^ ^^^^ ^^^^^^ ^^ ^^ ^^^^^^^^^ ^^^^ ^^^^^^ ^^^ ^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^                                                         storage.type.class.jsdoc
@kind What kind of symbol is this?
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^ ^^^^ ^^^^ ^^ ^^^^^^ ^^ ^^^^^  comment.block.documentation.js
//^^^                               storage.type.class.jsdoc
@lends Document properties on an object literal as if they belonged to a symbol with a given name.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^ ^^^^^^^^ ^^^^^^^^^^ ^^ ^^ ^^^^^^ ^^^^^^^ ^^ ^^ ^^^^ ^^^^^^^^ ^^ ^ ^^^^^^ ^^^^ ^ ^^^^^ ^^^^^  comment.block.documentation.js
//^^^^                                                                                              storage.type.class.jsdoc
@license Identify the license that applies to this code.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^^^^^ ^^^ ^^^^^^^ ^^^^ ^^^^^^^ ^^ ^^^^ ^^^^^  comment.block.documentation.js
//^^^^^^                                                  storage.type.class.jsdoc
@listens List the events that a symbol listens for.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^ ^^^ ^^^^^^ ^^^^ ^ ^^^^^^ ^^^^^^^ ^^^^  comment.block.documentation.js
//^^^^^^                                             storage.type.class.jsdoc
@member (synonyms: @var) Document a member.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^ ^^^^^^^^^^ ^^^^^ ^^^^^^^^ ^ ^^^^^^^  comment.block.documentation.js
//^^^^^            ^^^^                      storage.type.class.doc
@memberof This symbol belongs to a parent symbol.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^ ^^^^ ^^^^^^ ^^^^^^^ ^^ ^ ^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^                                          storage.type.class.jsdoc
@mixes This object mixes in all the members from another object.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^ ^^^^ ^^^^^^ ^^^^^ ^^ ^^^ ^^^ ^^^^^^^ ^^^^ ^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^                                                            storage.type.class.jsdoc
@mixin Document a mixin object.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^ ^^^^^^^^ ^ ^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^                           storage.type.class.jsdoc
@module Document a JavaScript module.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^ ^^^^^^^^ ^ ^^^^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^                                storage.type.class.jsdoc
@name Document the name of an object.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^ ^^^^^^^^ ^^^ ^^^^ ^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^                                  storage.type.class.jsdoc
@namespace Document a namespace object.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^ ^^^^^^^^ ^ ^^^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^^                               storage.type.class.jsdoc
@override Indicate that a symbol overrides its parent.
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^ ^^^^^^^^ ^^^^ ^ ^^^^^^ ^^^^^^^^^ ^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^                                               storage.type.class.jsduck
@param (synonyms: @arg, @argument) Document the parameter to a function.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^^^^^^^^ ^^^^^ ^^^^^^^^^^ ^^^^^^^^ ^^^ ^^^^^^^^^ ^^ ^ ^^^^^^^^^  comment.block.documentation.js
//^^^^                                                                    storage.type.class.doc
//                ^^^^                                                    storage.type.class.jsdoc
@private This symbol is meant to be private.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^ ^^^^ ^^^^^^ ^^ ^^^^^ ^^ ^^ ^^^^^^^^  comment.block.documentation.js
//^^^^^^                                      storage.type.class.doc
@property (synonyms: @prop) Document a property of an object.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^ ^^^^^^^^^^ ^^^^^^ ^^^^^^^^ ^ ^^^^^^^^ ^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^                                                      storage.type.class.doc
//                   ^^^^^                                     storage.type.class.jsdoc
@protected This symbol is meant to be protected.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^ ^^^^ ^^^^^^ ^^ ^^^^^ ^^ ^^ ^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^                                        storage.type.class.doc
@public This symbol is meant to be public.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^ ^^^^ ^^^^^^ ^^ ^^^^^ ^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^^^                                     storage.type.class.jsdoc
@readonly This symbol is meant to be read-only.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^ ^^^^ ^^^^^^ ^^ ^^^^^ ^^ ^^ ^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^                                        storage.type.class.doc
@requires This file requires a JavaScript module.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^ ^^^^ ^^^^ ^^^^^^^^ ^ ^^^^^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^^^                                          storage.type.class.doc
@returns (synonyms: @return) Document the return value of a function.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^^^^^^^ ^^^^^^^^ ^^^^^^^^ ^^^ ^^^^^^ ^^^^^ ^^ ^ ^^^^^^^^^  comment.block.documentation.js
//^^^^^^                                                               storage.type.class.jsdoc
//                  ^^^^^^^                                            storage.type.class.doc
@see Refer to some other documentation for more information.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^ ^^^^^ ^^ ^^^^ ^^^^^ ^^^^^^^^^^^^^ ^^^ ^^^^ ^^^^^^^^^^^^  comment.block.documentation.js
//^^                                                          storage.type.class.jsdoc
@since When was this feature added?
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^^ ^^^ ^^^^ ^^^^^^^ ^^^^^^  comment.block.documentation.js
//^^^^                               storage.type.class.doc
@static Document a static member.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^ ^^^^^^^^ ^ ^^^^^^ ^^^^^^^  comment.block.documentation.js
//^^^^^                            storage.type.class.doc
@summary A shorter version of the full description.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^ ^^^^^^^ ^^^^^^^ ^^ ^^^ ^^^^ ^^^^^^^^^^^^  comment.block.documentation.js
//^^^^^^                                             storage.type.class.jsdoc
@this What does the 'this' keyword refer to here?
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^ ^^^^ ^^^^ ^^^ ^^^^^^ ^^^^^^^ ^^^^^ ^^ ^^^^^  comment.block.documentation.js
//^^^                                              storage.type.class.jsdoc
@throws (synonyms: @exception) Describe what errors could be thrown.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^ ^^^^ ^^^^^^ ^^^^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^^^                                                               storage.type.class.doc
//                 ^^^^^^^^^^                                         storage.type.class.jsdoc
@todo Document tasks to be completed.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^ ^^^^^^^^ ^^^^^ ^^ ^^ ^^^^^^^^^^  comment.block.documentation.js
//^^^                                  storage.type.class.jsdoc
@tutorial Insert a link to an included tutorial file.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^ ^^^^^^ ^ ^^^^ ^^ ^^ ^^^^^^^^ ^^^^^^^^ ^^^^^  comment.block.documentation.js
//^^^^^^^                                              storage.type.class.jsdoc
@type Document the type of an object.
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^ ^^^^^^^^ ^^^ ^^^^ ^^ ^^ ^^^^^^^  comment.block.documentation.js
//^^^                                  storage.type.class.doc
@typedef Document a custom type.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^^^^^ ^ ^^^^^^ ^^^^^  comment.block.documentation.js
//^^^^^^                          storage.type.class.jsdoc
@variation Distinguish different objects with the same name.
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^ ^^^^^^^ ^^^^ ^^^ ^^^^ ^^^^^  comment.block.documentation.js
//^^^^^^^^                                                    storage.type.class.jsdoc
@version Documents the version number of an item. Inline Tags
// <- comment.block.documentation.js storage.type.class.jsdoc
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^ ^^^^^^^^^ ^^^ ^^^^^^^ ^^^^^^ ^^ ^^ ^^^^^ ^^^^^^ ^^^^  comment.block.documentation.js
//^^^^^^                                                       storage.type.class.jsdoc
{@link} (synonyms: {@linkcode}, {@linkplain}) Link to another item in the documentation.
// <- comment.block.documentation.js
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^^ ^^^^ ^^ ^^^^^^^ ^^^^ ^^ ^^^ ^^^^^^^^^^^^^^  comment.block.documentation.js
//^^^^              ^^^^^^^^^    ^^^^^^^^^^                                               storage.type.class.jsdoc
{@tutorial} Link to a tutorial
// <- comment.block.documentation.js
 // <- comment.block.documentation.js storage.type.class.jsdoc
//^^^^^^^^^ ^^^^ ^^ ^ ^^^^^^^^  comment.block.documentation.js
//^^^^^^^^                      storage.type.class.jsdoc
*/

/**

JSDuck keywords **********************************************************************************************

@abstract
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.doc
@accessor
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.jsduck
@alias
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.doc
@alternateClassName
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^^^^^^^^  storage.type.class.jsduck
@aside
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.jsduck
@author
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@cfg
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^  comment.block.documentation.js
//^^  storage.type.class.jsduck
@chainable
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^  comment.block.documentation.js
//^^^^^^^^  storage.type.class.jsduck
@class
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.doc
@constructor
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^  storage.type.class.doc
@deprecated
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^  storage.type.class.doc
@docauthor
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^  comment.block.documentation.js
//^^^^^^^^  storage.type.class.jsduck
@enum
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^  comment.block.documentation.js
//^^^  storage.type.class.doc
@event
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.doc
@evented
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^  comment.block.documentation.js
//^^^^^^  storage.type.class.jsduck
@example
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^  comment.block.documentation.js
//^^^^^^  storage.type.class.doc
@experimental
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^^  storage.type.class.jsduck
@extends
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^  comment.block.documentation.js
//^^^^^^  storage.type.class.doc
@fires (in 5.x beta)
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^ ^^^ ^^^ ^^^^^  comment.block.documentation.js
//^^^^                storage.type.class.doc
@ftype
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.jsduck
@hide
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^  comment.block.documentation.js
//^^^  storage.type.class.jsduck
@ignore
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@inheritable
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^  storage.type.class.jsduck
@inheritdoc
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^  storage.type.class.doc
@localdoc (in 5.x beta)
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^ ^^^ ^^^ ^^^^^  comment.block.documentation.js
//^^^^^^^                storage.type.class.jsduck
@markdown
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.jsduck
@member
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@method
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@mixins
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.jsduck
@new
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^  comment.block.documentation.js
//^^  storage.type.class.jsduck
@override
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.jsduck
@param
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.doc
@preventable
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^^^  comment.block.documentation.js
//^^^^^^^^^^  storage.type.class.jsduck
@private
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^  comment.block.documentation.js
//^^^^^^  storage.type.class.doc
@property
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.doc
@protected
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^^  comment.block.documentation.js
//^^^^^^^^  storage.type.class.doc
@ptype
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.jsduck
@readonly
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.doc
@removed
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^  comment.block.documentation.js
//^^^^^^  storage.type.class.jsduck
@requires
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.doc
@return
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@scss mixin
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^ ^^^^^  comment.block.documentation.js
//^^^ ^^^^^  storage.type.class.jsduck
@since
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.doc
@singleton
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^^  comment.block.documentation.js
//^^^^^^^^  storage.type.class.jsduck
@static
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@template
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^^^^  comment.block.documentation.js
//^^^^^^^  storage.type.class.jsduck
@throws
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^^^  comment.block.documentation.js
//^^^^^  storage.type.class.doc
@type
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^^  comment.block.documentation.js
//^^^  storage.type.class.doc
@uses
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^  comment.block.documentation.js
//^^^  storage.type.class.jsduck
@var
// <- comment.block.documentation.js storage.type.class.doc
 // <- comment.block.documentation.js storage.type.class.doc
//^^  comment.block.documentation.js
//^^  storage.type.class.doc
@xtype
// <- comment.block.documentation.js storage.type.class.jsduck
 // <- comment.block.documentation.js storage.type.class.jsduck
//^^^^  comment.block.documentation.js
//^^^^  storage.type.class.jsduck
*/

// >> only:(source.js.jsx)
