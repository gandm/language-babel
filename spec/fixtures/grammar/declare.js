// SYNTAX TEST "source.js.jsx"

interface Iterator<T> {
// <- keyword.other.interface.flowtype
 // <- keyword.other.interface.flowtype
//^^^^^^^                keyword.other.interface.flowtype
//        ^^^^^^^^       support.type.class.interface.js
//                ^ ^    punctutation.flowtype
//                 ^     support.type.class.flowtype
//                    ^  punctuation.section.class.begin.js
    next(): IteratorResult<T>
//  ^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^                       entity.name.function.method.js
//      ^                      punctuation.definition.parameters.begin.js
//       ^                     punctuation.definition.parameters.end.js
//        ^                    punctuation.type.flowtype
//          ^^^^^^^^^^^^^^ ^   support.type.class.flowtype
//                        ^ ^  punctutation.flowtype
    iterator(): Iterator<T>
//  ^^^^^^^^^^^ ^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^ ^^^^^^^^^^^  meta.function.method.js
//  ^^^^^^^^                 entity.name.function.method.js
//          ^                punctuation.definition.parameters.begin.js
//           ^               punctuation.definition.parameters.end.js
//            ^              punctuation.type.flowtype
//              ^^^^^^^^ ^   support.type.class.flowtype
//                      ^ ^  punctutation.flowtype
}
// <- punctuation.section.class.end.js

declare var NaN: number
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                  keyword.other.declare.flowtype
//      ^^^              storage.type.js
//          ^^^          variable.other.readwrite.js
//             ^         punctuation.type.flowtype
//               ^^^^^^  support.type.builtin.primitive.flowtype

declare var module: {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                keyword.other.declare.flowtype
//      ^^^            storage.type.js
//          ^^^^^^     variable.other.readwrite.js
//                ^    punctuation.type.flowtype
//                  ^  meta.brace.round.open.flowtype
    exports: any;
//  ^^^^^^^        variable.other.property.flowtype
//         ^       punctuation.type.flowtype
//           ^^^   support.type.builtin.primitive.flowtype
    require(id: string): any;
//  ^^^^^^^^^^^ ^^^^^^^        meta.function-call.with-arguments.js
//  ^^^^^^^                    entity.name.function.js
//         ^          ^        meta.brace.round.js
//          ^^  ^^^^^^         variable.other.readwrite.js
//                     ^       punctuation.type.flowtype
//                       ^^^   support.type.builtin.primitive.flowtype
    id: string;
//  ^^           variable.other.property.flowtype
//    ^          punctuation.type.flowtype
//      ^^^^^^   support.type.builtin.primitive.flowtype
    filename: string;
//  ^^^^^^^^           variable.other.property.flowtype
//          ^          punctuation.type.flowtype
//            ^^^^^^   support.type.builtin.primitive.flowtype
    loaded: boolean;
//  ^^^^^^            variable.other.property.flowtype
//        ^           punctuation.type.flowtype
//          ^^^^^^^   support.type.builtin.primitive.flowtype
    parent: any;
//  ^^^^^^        variable.other.property.flowtype
//        ^       punctuation.type.flowtype
//          ^^^   support.type.builtin.primitive.flowtype
    children: Array<any>;
//  ^^^^^^^^               variable.other.property.flowtype
//          ^              punctuation.type.flowtype
//            ^^^^^        support.type.builtin.class.flowtype
//                 ^   ^   punctuation.flowtype
//                  ^^^    support.type.builtin.primitive.flowtype
};
// <- meta.brace.round.close.flowtype
 // <- punctuation.terminator.statement.js

declare class Blob {
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^               keyword.other.declare.flowtype
//      ^^^^^         storage.type.class.flowtype
//            ^^^^    entity.name.class.js
//                 ^  punctuation.section.class.begin.js
    constructor(blobParts?: Array<any>, options?: {
//  ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^ ^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^ ^  meta.function.method.js
//  ^^^^^^^^^^^                                      entity.name.function.method.js
//             ^                                     punctuation.definition.parameters.begin.js
//              ^^^^^^^^^               ^^^^^^^      variable.other.readwrite.js
//                       ^                     ^     keyword.operator.optional.parameter.flowtype
//                        ^                     ^    punctuation.type.flowtype
//                          ^^^^^                    support.type.builtin.class.flowtype
//                               ^   ^               punctuation.flowtype
//                                ^^^                support.type.builtin.primitive.flowtype
//                                    ^              meta.delimiter.comma.js
//                                                ^  meta.brace.round.open.flowtype
        type?: string
//      ^^^^^^ ^^^^^^  meta.class.body.js
//      ^^^^^^ ^^^^^^  meta.function.method.js
//      ^^^^           variable.other.property.flowtype
//          ^          keyword.operator.optional.parameter.flowtype
//           ^         punctuation.type.flowtype
//             ^^^^^^  support.type.builtin.primitive.flowtype
        endings?: string
//      ^^^^^^^^^ ^^^^^^  meta.class.body.js
//      ^^^^^^^^^ ^^^^^^  meta.function.method.js
//      ^^^^^^^           variable.other.property.flowtype
//             ^          keyword.operator.optional.parameter.flowtype
//              ^         punctuation.type.flowtype
//                ^^^^^^  support.type.builtin.primitive.flowtype
    }): void
//  ^^^ ^^^^  meta.class.body.js
//  ^^^ ^^^^  meta.function.method.js
//  ^         meta.brace.round.close.flowtype
//   ^        punctuation.definition.parameters.end.js
//    ^       punctuation.type.flowtype
//      ^^^^  support.type.builtin.primitive.flowtype
    type: string
//  ^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^          variable.other.readwrite.js
//      ^         punctuation.type.flowtype
//        ^^^^^^  support.type.builtin.primitive.flowtype
    size: number
//  ^^^^^ ^^^^^^  meta.class.body.js
//  ^^^^          variable.other.readwrite.js
//      ^         punctuation.type.flowtype
//        ^^^^^^  support.type.builtin.primitive.flowtype
    slice(start?: number, end?: number, contentType?: string): Blob
//  ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^ ^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^ ^^^^  meta.function.method.js
//  ^^^^^                                                            entity.name.function.method.js
//       ^                                                           punctuation.definition.parameters.begin.js
//        ^^^^^           ^^^           ^^^^^^^^^^^                  variable.other.readwrite.js
//             ^             ^                     ^                 keyword.operator.optional.parameter.flowtype
//              ^             ^                     ^        ^       punctuation.type.flowtype
//                ^^^^^^        ^^^^^^                ^^^^^^         support.type.builtin.primitive.flowtype
//                      ^             ^                              meta.delimiter.comma.js
//                                                          ^        punctuation.definition.parameters.end.js
//                                                             ^^^^  support.type.class.flowtype
}
// <- punctuation.section.class.end.js

type CanvasImageSource = HTMLImageElement | number & string
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                                                         keyword.other.typedef.flowtype
//   ^^^^^^^^^^^^^^^^^   ^^^^^^^^^^^^^^^^                    support.type.class.flowtype
//                                        ^                  kewyword.operator.union.flowtype
//                                          ^^^^^^   ^^^^^^  support.type.builtin.primitive.flowtype
//                                                 ^         kewyword.operator.intersection.flowtype

type child_process$execOpts = {
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                             keyword.other.typedef.flowtype
//   ^^^^^^^^^^^^^^^^^^^^^^      support.type.primitive.flowtype
//                            ^  meta.brace.curly.js
  cwd?: string
//^^^           variable.other.readwrite.js
//   ^          keyword.operator.optional.parameter.flowtype
//    ^         punctuation.type.flowtype
//      ^^^^^^  support.type.builtin.primitive.flowtype
  env?: Object
//^^^           variable.other.readwrite.js
//   ^          keyword.operator.optional.parameter.flowtype
//    ^         punctuation.type.flowtype
//      ^^^^^^  support.type.builtin.class.flowtype
};
// <- meta.brace.curly.js
 // <- punctuation.object.end.flowtype

type ReactClass<D, P, S> = _ReactClass<D, P, S, *>
// <- keyword.other.typedef.flowtype
 // <- keyword.other.typedef.flowtype
//^^                                                keyword.other.typedef.flowtype
//   ^^^^^^^^^^ ^  ^  ^    ^^^^^^^^^^^ ^  ^  ^      support.type.class.flowtype
//             ^       ^              ^          ^  punctutation.flowtype
//               ^  ^                   ^  ^  ^     meta.delimiter.comma.js
//                                              ^   kewyword.operator.existential.flowtype

declare function require(id: string): any;
// <- keyword.other.declare.flowtype
 // <- keyword.other.declare.flowtype
//^^^^^                                     keyword.other.declare.flowtype
//      ^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^^ ^^^   meta.function.js
//      ^^^^^^^^                            storage.type.function.js
//               ^^^^^^^                    entity.name.function.js
//                      ^                   punctuation.definition.parameters.begin.js
//                       ^^                 variable.other.readwrite.js
//                         ^        ^       punctuation.type.flowtype
//                           ^^^^^^   ^^^   support.type.builtin.primitive.flowtype
//                                 ^        punctuation.definition.parameters.end.js
//                                       ^  punctuation.terminator.statement.js

// >> only:(source.js.jsx)
