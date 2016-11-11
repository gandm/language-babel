// SYNTAX TEST "source.js.jsx"

A = function() {}
// <- meta.function.js entity.name.function.js
//^ ^^^^^^^^^^ ^^  meta.function.js
//^                keyword.operator.assignment.js
//  ^^^^^^^^       storage.type.function.js
//          ^      punctuation.definition.parameters.begin.js
//          ^^     meta.brace.round.js
//           ^     punctuation.definition.parameters.end.js
//             ^^  meta.brace.curly.js
B = function(z) {}
// <- meta.function.js entity.name.function.js
//^ ^^^^^^^^^^^ ^^  meta.function.js
//^                 keyword.operator.assignment.js
//  ^^^^^^^^        storage.type.function.js
//          ^       punctuation.definition.parameters.begin.js
//          ^ ^     meta.brace.round.js
//           ^      meta.function.parameters.js
//           ^      variable.other.readwrite.js
//            ^     punctuation.definition.parameters.end.js
//              ^^  meta.brace.curly.js
C = function c() {}
// <- meta.function.js entity.name.function.js
//^ ^^^^^^^^ ^^^ ^^  meta.function.js
//           ^       entity.name.function.js
//^                  keyword.operator.assignment.js
//  ^^^^^^^^         storage.type.function.js
//            ^      punctuation.definition.parameters.begin.js
//            ^^     meta.brace.round.js
//             ^     punctuation.definition.parameters.end.js
//               ^^  meta.brace.curly.js
D = function d(z) {}
// <- meta.function.js entity.name.function.js
//^ ^^^^^^^^ ^^^^ ^^  meta.function.js
//           ^        entity.name.function.js
//^                   keyword.operator.assignment.js
//  ^^^^^^^^          storage.type.function.js
//            ^       punctuation.definition.parameters.begin.js
//            ^ ^     meta.brace.round.js
//             ^      meta.function.parameters.js
//             ^      variable.other.readwrite.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.brace.curly.js
E = () => {}
// <- meta.function.arrow.js entity.name.function.js
//^ ^^ ^^ ^^  meta.function.arrow.js
//^           keyword.operator.assignment.js
//  ^         punctuation.definition.parameters.begin.js
//  ^^        meta.brace.round.js
//   ^        punctuation.definition.parameters.end.js
//     ^^     storage.type.function.arrow.js
//        ^^  meta.brace.curly.js
F = (z) => {}
// <- meta.function.arrow.js entity.name.function.js
//^ ^^^ ^^ ^^  meta.function.arrow.js
//^            keyword.operator.assignment.js
//  ^          punctuation.definition.parameters.begin.js
//  ^ ^        meta.brace.round.js
//   ^         meta.function.parameters.js
//   ^         variable.other.readwrite.js
//    ^        punctuation.definition.parameters.end.js
//      ^^     storage.type.function.arrow.js
//         ^^  meta.brace.curly.js
G = z => {}
// <- meta.function.arrow.js entity.name.function.js
//^ ^ ^^     meta.function.arrow.js
//^          keyword.operator.assignment.js
//  ^        variable.other.readwrite.js
//    ^^     storage.type.function.arrow.js
//       ^^  meta.brace.curly.js
function() {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^^^ ^^  meta.function.js
//^^^^^^       storage.type.function.js
//      ^      punctuation.definition.parameters.begin.js
//      ^^     meta.brace.round.js
//       ^     punctuation.definition.parameters.end.js
//         ^^  meta.brace.curly.js
function(z) {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^^^^ ^^  meta.function.js
//^^^^^^        storage.type.function.js
//      ^       punctuation.definition.parameters.begin.js
//      ^ ^     meta.brace.round.js
//       ^      meta.function.parameters.js
//       ^      variable.other.readwrite.js
//        ^     punctuation.definition.parameters.end.js
//          ^^  meta.brace.curly.js
function H() {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^ ^^  meta.function.js
//^^^^^^         storage.type.function.js
//       ^       entity.name.function.js
//        ^      punctuation.definition.parameters.begin.js
//        ^^     meta.brace.round.js
//         ^     punctuation.definition.parameters.end.js
//           ^^  meta.brace.curly.js
function I(z) {}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^ ^^  meta.function.js
//^^^^^^          storage.type.function.js
//       ^        entity.name.function.js
//        ^       punctuation.definition.parameters.begin.js
//        ^ ^     meta.brace.round.js
//         ^      meta.function.parameters.js
//         ^      variable.other.readwrite.js
//          ^     punctuation.definition.parameters.end.js
//            ^^  meta.brace.curly.js
() => {}
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.brace.round.js punctuation.definition.parameters.end.js
// ^^ ^^  meta.function.arrow.js
// ^^     storage.type.function.arrow.js
//    ^^  meta.brace.curly.js
(z) => {}
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^ ^^ ^^  meta.function.arrow.js
//^        meta.brace.round.js
//^        punctuation.definition.parameters.end.js
//  ^^     storage.type.function.arrow.js
//     ^^  meta.brace.curly.js
J.prototype.j = () => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^^ ^^ ^^  meta.prototype.function.arrow.js
//         ^              keyword.operator.accessor.js
//^^^^^^^^^               variable.language.prototype.js
//          ^             entity.name.function.js
//            ^           keyword.operator.assignment.js
//              ^         punctuation.definition.parameters.begin.js
//              ^^        meta.brace.round.js
//               ^        punctuation.definition.parameters.end.js
//                 ^^     storage.type.function.arrow.js
//                    ^^  meta.brace.curly.js
K.prototype.k = (z) => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^^^ ^^ ^^  meta.prototype.function.arrow.js
//         ^               keyword.operator.accessor.js
//^^^^^^^^^                variable.language.prototype.js
//          ^              entity.name.function.js
//            ^            keyword.operator.assignment.js
//              ^          punctuation.definition.parameters.begin.js
//              ^ ^        meta.brace.round.js
//               ^         meta.function.parameters.js
//               ^         variable.other.readwrite.js
//                ^        punctuation.definition.parameters.end.js
//                  ^^     storage.type.function.arrow.js
//                     ^^  meta.brace.curly.js
L.prototype.l = z => {}
// <- meta.prototype.function.arrow.js entity.name.class.js
 // <- meta.prototype.function.arrow.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^ ^^     meta.prototype.function.arrow.js
//         ^             keyword.operator.accessor.js
//^^^^^^^^^              variable.language.prototype.js
//          ^            entity.name.function.js
//            ^          keyword.operator.assignment.js
//              ^        variable.other.readwrite.js
//                ^^     storage.type.function.arrow.js
//                   ^^  meta.brace.curly.js
M.prototype.m = function() {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^^^^^^^^^^ ^^  meta.prototype.function.js
//         ^                   keyword.operator.accessor.js
//^^^^^^^^^                    variable.language.prototype.js
//          ^                  entity.name.function.js
//            ^                keyword.operator.assignment.js
//              ^^^^^^^^       storage.type.function.js
//                      ^      punctuation.definition.parameters.begin.js
//                      ^^     meta.brace.round.js
//                       ^     punctuation.definition.parameters.end.js
//                         ^^  meta.brace.curly.js
N.prototype.n = function(z) {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^^^^^^^^^^^ ^^  meta.prototype.function.js
//         ^                    keyword.operator.accessor.js
//^^^^^^^^^                     variable.language.prototype.js
//          ^                   entity.name.function.js
//            ^                 keyword.operator.assignment.js
//              ^^^^^^^^        storage.type.function.js
//                      ^       punctuation.definition.parameters.begin.js
//                      ^ ^     meta.brace.round.js
//                       ^      meta.function.parameters.js
//                       ^      variable.other.readwrite.js
//                        ^     punctuation.definition.parameters.end.js
//                          ^^  meta.brace.curly.js
O.prototype.o = function oo() {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^ ^^  meta.prototype.function.js
//         ^                      keyword.operator.accessor.js
//^^^^^^^^^                       variable.language.prototype.js
//          ^            ^^       entity.name.function.js
//            ^                   keyword.operator.assignment.js
//              ^^^^^^^^          storage.type.function.js
//                         ^      punctuation.definition.parameters.begin.js
//                         ^^     meta.brace.round.js
//                          ^     punctuation.definition.parameters.end.js
//                            ^^  meta.brace.curly.js
P.prototype.p = function pp(z) {}
// <- meta.prototype.function.js entity.name.class.js
 // <- meta.prototype.function.js keyword.operator.accessor.js
//^^^^^^^^^^^ ^ ^^^^^^^^ ^^^^^ ^^  meta.prototype.function.js
//         ^                       keyword.operator.accessor.js
//^^^^^^^^^                        variable.language.prototype.js
//          ^            ^^        entity.name.function.js
//            ^                    keyword.operator.assignment.js
//              ^^^^^^^^           storage.type.function.js
//                         ^       punctuation.definition.parameters.begin.js
//                         ^ ^     meta.brace.round.js
//                          ^      meta.function.parameters.js
//                          ^      variable.other.readwrite.js
//                           ^     punctuation.definition.parameters.end.js
//                             ^^  meta.brace.curly.js
Q.q = () => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js keyword.operator.accessor.js
//^ ^ ^^ ^^ ^^  meta.function.static.arrow.js
//^             entity.name.function.js
//  ^           keyword.operator.assignment.js
//    ^         punctuation.definition.parameters.begin.js
//    ^^        meta.brace.round.js
//     ^        punctuation.definition.parameters.end.js
//       ^^     storage.type.function.arrow.js
//          ^^  meta.brace.curly.js
R.r = (z) => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js keyword.operator.accessor.js
//^ ^ ^^^ ^^ ^^  meta.function.static.arrow.js
//^              entity.name.function.js
//  ^            keyword.operator.assignment.js
//    ^          punctuation.definition.parameters.begin.js
//    ^ ^        meta.brace.round.js
//     ^         meta.function.parameters.js
//     ^         variable.other.readwrite.js
//      ^        punctuation.definition.parameters.end.js
//        ^^     storage.type.function.arrow.js
//           ^^  meta.brace.curly.js
S.s = z => {}
// <- meta.function.static.arrow.js entity.name.class.js
 // <- meta.function.static.arrow.js keyword.operator.accessor.js
//^ ^ ^ ^^     meta.function.static.arrow.js
//^            entity.name.function.js
//  ^          keyword.operator.assignment.js
//    ^        variable.other.readwrite.js
//      ^^     storage.type.function.arrow.js
//         ^^  meta.brace.curly.js
T.t = function() {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js keyword.operator.accessor.js
//^ ^ ^^^^^^^^^^ ^^  meta.function.static.js
//^                  entity.name.function.js
//  ^                keyword.operator.assignment.js
//    ^^^^^^^^       storage.type.function.js
//            ^      punctuation.definition.parameters.begin.js
//            ^^     meta.brace.round.js
//             ^     punctuation.definition.parameters.end.js
//               ^^  meta.brace.curly.js
U.u = function(z) {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js keyword.operator.accessor.js
//^ ^ ^^^^^^^^^^^ ^^  meta.function.static.js
//^                   entity.name.function.js
//  ^                 keyword.operator.assignment.js
//    ^^^^^^^^        storage.type.function.js
//            ^       punctuation.definition.parameters.begin.js
//            ^ ^     meta.brace.round.js
//             ^      meta.function.parameters.js
//             ^      variable.other.readwrite.js
//              ^     punctuation.definition.parameters.end.js
//                ^^  meta.brace.curly.js
V.v = function vv() {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js keyword.operator.accessor.js
//^ ^ ^^^^^^^^ ^^^^ ^^  meta.function.static.js
//^            ^^       entity.name.function.js
//  ^                   keyword.operator.assignment.js
//    ^^^^^^^^          storage.type.function.js
//               ^      punctuation.definition.parameters.begin.js
//               ^^     meta.brace.round.js
//                ^     punctuation.definition.parameters.end.js
//                  ^^  meta.brace.curly.js
W.w = function ww(z) {}
// <- meta.function.static.js entity.name.class.js
 // <- meta.function.static.js keyword.operator.accessor.js
//^ ^ ^^^^^^^^ ^^^^^ ^^  meta.function.static.js
//^            ^^        entity.name.function.js
//  ^                    keyword.operator.assignment.js
//    ^^^^^^^^           storage.type.function.js
//               ^       punctuation.definition.parameters.begin.js
//               ^ ^     meta.brace.round.js
//                ^      meta.function.parameters.js
//                ^      variable.other.readwrite.js
//                 ^     punctuation.definition.parameters.end.js
//                   ^^  meta.brace.curly.js

class X extends XX {}
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                  meta.class.js
//^^^                  storage.type.class.js
//    ^         ^^     entity.name.class.js
//      ^^^^^^^        meta.class.extends.js
//      ^^^^^^^        storage.type.extends.js
//                 ^   punctuation.section.class.begin.js
//                  ^  punctuation.section.class.end.js
class Y {}
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^       meta.class.js
//^^^       storage.type.class.js
//    ^     entity.name.class.js
//      ^   punctuation.section.class.begin.js
//       ^  punctuation.section.class.end.js


// >> only:(source.js.jsx)
