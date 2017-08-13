// SYNTAX TEST "source.js.jsx"

/* this file contains all grammatical productions in ECMA-262 edition 5.1 ** * **/

<!-- HTML-style comments -->
// <- comment.block.html.js punctuation.definition.comment.js
 // <- comment.block.html.js punctuation.definition.comment.js
//^^                     ^^^  comment.block.html.js
//^^                     ^^^  punctuation.definition.comment.js
//   ^^^^                     variable.other.constant.js
//       ^                    keyword.operator.arithmetic.js
//        ^^^^^ ^^^^^^^^      variable.other.readwrite.js

import i0 from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^    ^^^^            keyword.control.module.js
//     ^^                 variable.other.readwrite.js
//             ^^^^^^^^   string.quoted.module.js
//             ^          punctuation.definition.string.begin.js
//                    ^   punctuation.definition.string.end.js
//                     ^  punctuation.terminator.statement.js
import * as i1 from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^         ^^^^            keyword.control.module.js
//     ^                       keyword.operator.module.all.js
//       ^^                    keyword.control.module.reference.js
//          ^^                 variable.other.readwrite.js
//                  ^^^^^^^^   string.quoted.module.js
//                  ^          punctuation.definition.string.begin.js
//                         ^   punctuation.definition.string.end.js
//                          ^  punctuation.terminator.statement.js
import {} from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^    ^^^^            keyword.control.module.js
//     ^^                 meta.brace.curly.js
//             ^^^^^^^^   string.quoted.module.js
//             ^          punctuation.definition.string.begin.js
//                    ^   punctuation.definition.string.end.js
//                     ^  punctuation.terminator.statement.js
import { i2, a as i3, } from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                  ^^^^            keyword.control.module.js
//     ^              ^                 meta.brace.curly.js
//       ^^  ^    ^^                    variable.other.readwrite.js
//         ^        ^                   meta.delimiter.comma.js
//             ^^                       keyword.control.module.reference.js
//                           ^^^^^^^^   string.quoted.module.js
//                           ^          punctuation.definition.string.begin.js
//                                  ^   punctuation.definition.string.end.js
//                                   ^  punctuation.terminator.statement.js
import i4, * as i5 from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^             ^^^^            keyword.control.module.js
//     ^^       ^^                 variable.other.readwrite.js
//       ^                         meta.delimiter.comma.js
//         ^                       keyword.operator.module.all.js
//           ^^                    keyword.control.module.reference.js
//                      ^^^^^^^^   string.quoted.module.js
//                      ^          punctuation.definition.string.begin.js
//                             ^   punctuation.definition.string.end.js
//                              ^  punctuation.terminator.statement.js
import i6, {} from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^        ^^^^            keyword.control.module.js
//     ^^                     variable.other.readwrite.js
//       ^                    meta.delimiter.comma.js
//         ^^                 meta.brace.curly.js
//                 ^^^^^^^^   string.quoted.module.js
//                 ^          punctuation.definition.string.begin.js
//                        ^   punctuation.definition.string.end.js
//                         ^  punctuation.terminator.statement.js
import i7, { i8, var as i9 } from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                       ^^^^            keyword.control.module.js
//     ^^    ^^  ^^^    ^^                   variable.other.readwrite.js
//       ^     ^                             meta.delimiter.comma.js
//         ^               ^                 meta.brace.curly.js
//                   ^^                      keyword.control.module.reference.js
//                                ^^^^^^^^   string.quoted.module.js
//                                ^          punctuation.definition.string.begin.js
//                                       ^   punctuation.definition.string.end.js
//                                        ^  punctuation.terminator.statement.js
import "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^            keyword.control.module.js
//     ^^^^^^^^   string.quoted.module.js
//     ^          punctuation.definition.string.begin.js
//            ^   punctuation.definition.string.end.js
//             ^  punctuation.terminator.statement.js

export * from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^   ^^^^            keyword.control.module.js
//     ^                 keyword.operator.module.all.js
//            ^^^^^^^^   string.quoted.module.js
//            ^          punctuation.definition.string.begin.js
//                   ^   punctuation.definition.string.end.js
//                    ^  punctuation.terminator.statement.js
export {} from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^    ^^^^            keyword.control.module.js
//     ^^                 meta.brace.curly.js
//             ^^^^^^^^   string.quoted.module.js
//             ^          punctuation.definition.string.begin.js
//                    ^   punctuation.definition.string.end.js
//                     ^  punctuation.terminator.statement.js
export { i0, i1 as a, i2 as var, } from "module";
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                             ^^^^            keyword.control.module.js
//     ^                         ^                 meta.brace.curly.js
//       ^^  ^^    ^  ^^    ^^^                    variable.other.readwrite.js
//         ^        ^          ^                   meta.delimiter.comma.js
//              ^^       ^^                        keyword.control.module.reference.js
//                                      ^^^^^^^^   string.quoted.module.js
//                                      ^          punctuation.definition.string.begin.js
//                                             ^   punctuation.definition.string.end.js
//                                              ^  punctuation.terminator.statement.js
export {};
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^      keyword.control.module.js
//     ^^   meta.brace.curly.js
//       ^  punctuation.terminator.statement.js
export { i3, i4 as in };
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                    keyword.control.module.js
//     ^              ^   meta.brace.curly.js
//       ^^  ^^    ^^     variable.other.readwrite.js
//         ^              meta.delimiter.comma.js
//              ^^        keyword.control.module.reference.js
//                     ^  punctuation.terminator.statement.js
export var e5, e6 = 0;
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                  keyword.control.module.js
//     ^^^              storage.type.js
//         ^^  ^^       variable.other.readwrite.js
//           ^       ^  punctuation.terminator.statement.js
//                ^     keyword.operator.assignment.js
//                  ^   constant.numeric.js
export let e7, e8 = 0;
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                  keyword.control.module.js
//     ^^^              storage.type.js
//         ^^  ^^       variable.other.readwrite.js
//           ^       ^  punctuation.terminator.statement.js
//                ^     keyword.operator.assignment.js
//                  ^   constant.numeric.js
export const e9 = 0, e10 = 0;
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                         keyword.control.module.js
//     ^^^^^                   storage.type.js
//           ^^      ^^^       variable.other.readwrite.js
//              ^        ^     keyword.operator.assignment.js
//                ^        ^   constant.numeric.js
//                 ^        ^  punctuation.terminator.statement.js
export function e11(){}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                   keyword.control.module.js
//     ^^^^^^^^ ^^^^^^^  meta.function.js
//     ^^^^^^^^          storage.type.function.js
//              ^^^      entity.name.function.js
//                 ^     punctuation.definition.parameters.begin.js
//                 ^^    meta.brace.round.js
//                  ^    punctuation.definition.parameters.end.js
//                   ^^  meta.brace.curly.js
export function* e12(){}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                    keyword.control.module.js
//     ^^^^^^^^^ ^^^^^^^  meta.function.js
//     ^^^^^^^^           storage.type.function.js
//             ^          keyword.generator.asterisk.js
//               ^^^      entity.name.function.js
//                  ^     punctuation.definition.parameters.begin.js
//                  ^^    meta.brace.round.js
//                   ^    punctuation.definition.parameters.end.js
//                    ^^  meta.brace.curly.js
export class e13 {}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^               keyword.control.module.js
//     ^^^^^         meta.class.js
//     ^^^^^         storage.type.class.js
//           ^^^     entity.name.class.js
//               ^   punctuation.section.class.begin.js
//                ^  punctuation.section.class.end.js
export class e14 extends e15 {}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^                           keyword.control.module.js
//     ^^^^^                     meta.class.js
//     ^^^^^                     storage.type.class.js
//           ^^^         ^^^     entity.name.class.js
//               ^^^^^^^         meta.class.extends.js
//               ^^^^^^^         storage.type.extends.js
//                           ^   punctuation.section.class.begin.js
//                            ^  punctuation.section.class.end.js
export default function e16(){}
// <- keyword.control.module.js
 // <- keyword.control.module.js
//^^^^ ^^^^^^^                   keyword.control.module.js
//             ^^^^^^^^ ^^^^^^^  meta.function.js
//             ^^^^^^^^          storage.type.function.js
//                      ^^^      entity.name.function.js
//                         ^     punctuation.definition.parameters.begin.js
//                         ^^    meta.brace.round.js
//                          ^    punctuation.definition.parameters.end.js
//                           ^^  meta.brace.curly.js

// whitespace
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^^^  comment.line.double-slash.js
tab:for(;;)break	tab;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^                    constant.other.object.key.js
//^                    string.unquoted.js
// ^                   punctuation.separator.key-value.js
//  ^^^^^^^            meta.for.js
//  ^^^    ^^^^^       keyword.control.loop.js
//     ^  ^            meta.brace.round.js
//      ^^          ^  punctuation.terminator.statement.js
//               ^^^   variable.other.readwrite.js
verticalTab:for(;;)breakverticalTab;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^^^^                            constant.other.object.key.js
//^^^^^^^^^                            string.unquoted.js
//         ^                           punctuation.separator.key-value.js
//          ^^^^^^^                    meta.for.js
//          ^^^    ^^^^^               keyword.control.loop.js
//             ^  ^                    meta.brace.round.js
//              ^^                  ^  punctuation.terminator.statement.js
//                       ^^^^^^^^^^^   variable.other.readwrite.js
formFeed:for(;;)breakformFeed;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^                         constant.other.object.key.js
//^^^^^^                         string.unquoted.js
//      ^                        punctuation.separator.key-value.js
//       ^^^^^^^                 meta.for.js
//       ^^^    ^^^^^            keyword.control.loop.js
//          ^  ^                 meta.brace.round.js
//           ^^               ^  punctuation.terminator.statement.js
//                    ^^^^^^^^   variable.other.readwrite.js
space:for(;;)break space;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^                      constant.other.object.key.js
//^^^                      string.unquoted.js
//   ^                     punctuation.separator.key-value.js
//    ^^^^^^^              meta.for.js
//    ^^^    ^^^^^         keyword.control.loop.js
//       ^  ^              meta.brace.round.js
//        ^^            ^  punctuation.terminator.statement.js
//                 ^^^^^   variable.other.readwrite.js
nbsp:for(;;)break nbsp;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^                     constant.other.object.key.js
//^^                     string.unquoted.js
//  ^                    punctuation.separator.key-value.js
//   ^^^^^^^             meta.for.js
//   ^^^    ^^^^^        keyword.control.loop.js
//      ^  ^             meta.brace.round.js
//       ^^           ^  punctuation.terminator.statement.js
//                ^^^^   variable.other.readwrite.js
bom:for(;;)break﻿bom;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^                    constant.other.object.key.js
//^                    string.unquoted.js
// ^                   punctuation.separator.key-value.js
//  ^^^^^^^            meta.for.js
//  ^^^    ^^^^^       keyword.control.loop.js
//     ^  ^            meta.brace.round.js
//      ^^          ^  punctuation.terminator.statement.js
//               ^^^   variable.other.readwrite.js

// line terminators
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^ ^^^^^^^^^^^  comment.line.double-slash.js
lineFeed:0
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^    constant.other.object.key.js
//^^^^^^    string.unquoted.js
//      ^   punctuation.separator.key-value.js
//       ^  constant.numeric.js
0;
// <- constant.numeric.js // <- punctuation.terminator.statement.jscarriageReturn:0// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^^^^^^^    constant.other.object.key.js
//^^^^^^^^^^^^    string.unquoted.js
//            ^   punctuation.separator.key-value.js
//             ^  constant.numeric.js
0;
// <- constant.numeric.js
 // <- punctuation.terminator.statement.js
carriageReturnLineFeed:0
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^^^^^^^^^^^^^^^    constant.other.object.key.js
//^^^^^^^^^^^^^^^^^^^^    string.unquoted.js
//                    ^   punctuation.separator.key-value.js
//                     ^  constant.numeric.js
0;
// <- constant.numeric.js
 // <- punctuation.terminator.statement.js
lineSeparator:0 0;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^^^^^^       constant.other.object.key.js
//^^^^^^^^^^^       string.unquoted.js
//           ^      punctuation.separator.key-value.js
//            ^ ^   constant.numeric.js
//               ^  punctuation.terminator.statement.js
paragraphSeparator:0 0;
// <- constant.other.object.key.js string.unquoted.js
 // <- constant.other.object.key.js string.unquoted.js
//^^^^^^^^^^^^^^^^       constant.other.object.key.js
//^^^^^^^^^^^^^^^^       string.unquoted.js
//                ^      punctuation.separator.key-value.js
//                 ^ ^   constant.numeric.js
//                    ^  punctuation.terminator.statement.js

// identifier names
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^^^^^^^ ^^^^^  comment.line.double-slash.js

var $, _, \u0078, \u{2F9F9}, x$, x_, x\u0030, x\u{e01d5}, xa, x0, x0a,
// <- storage.type.js
 // <- storage.type.js
//^                                                                     storage.type.js
//  ^                                                                   variable.other.dollar.js
//   ^  ^       ^          ^   ^   ^        ^           ^   ^   ^    ^  punctuation.terminator.statement.js
//     ^  ^^^^^^  ^^^^^^^^^  ^^  ^^  ^^^^^^^  ^^^^^^^^^^  ^^  ^^  ^^^   variable.other.readwrite.js
  x0123456789, qwertyuiopasdfghjklzxcvbnm, QWERTYUIOPASDFGHJKLZXCVBNM;
//^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^                               variable.other.readwrite.js
//           ^                           ^                           ^  punctuation.terminator.statement.js
//                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^   variable.other.constant.js

// a representative sample of ID_Start and ID_Continue
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^ ^^^^^^^^^^^^^^ ^^^^^^ ^^ ^^^^^^^^ ^^^ ^^^^^^^^^^^  comment.line.double-slash.js

var 䩶, x󠇕, œ一, ǻ둘, ɤ〩, φ, ﬁⅷ, ユニコード, x‌‍;
// <- storage.type.js
 // <- storage.type.js
//^                                         storage.type.js
//  ^  ^^^  ^^  ^^  ^^  ^  ^^  ^^^^^  ^^^   variable.other.readwrite.js
//   ^    ^   ^   ^   ^  ^   ^      ^    ^  punctuation.terminator.statement.js
let letx; let[x\u0078] = 0; const constx = 0;
// <- storage.type.js
 // <- storage.type.js
//^       ^^^               ^^^^^              storage.type.js
//  ^^^^      ^^^^^^^             ^^^^^^       variable.other.readwrite.js
//      ^                 ^                 ^  punctuation.terminator.statement.js
//           ^       ^                         meta.brace.square.js
//                     ^                 ^     keyword.operator.assignment.js
//                       ^                 ^   constant.numeric.js
{ let x; let y = 0; const z = 0; }
// <- meta.brace.curly.js
//                               ^  meta.brace.curly.js
//^^^    ^^^        ^^^^^           storage.type.js
//    ^      ^            ^         variable.other.readwrite.js
//     ^          ^            ^    punctuation.terminator.statement.js
//             ^            ^       keyword.operator.assignment.js
//               ^            ^     constant.numeric.js

null; true; false;
// <- constant.language.null.js
 // <- constant.language.null.js
//^^                constant.language.null.js
//  ^     ^      ^  punctuation.terminator.statement.js
//    ^^^^          constant.language.boolean.true.js
//          ^^^^^   constant.language.boolean.false.js

0; 1234567890;
// <- constant.numeric.js
 // <- punctuation.terminator.statement.js
// ^^^^^^^^^^   constant.numeric.js
//           ^  punctuation.terminator.statement.js
0.; 0.00; 10.00; .0; .00
// <- constant.numeric.js
 // <- constant.numeric.js
//  ^^^^  ^^^^^  ^^  ^^^  constant.numeric.js
//^     ^      ^   ^      punctuation.terminator.statement.js
0e0; 0E0; 0.e0; 0.00e+0; .00e-0;
// <- constant.numeric.js
 // <- constant.numeric.js
//^  ^^^  ^^^^  ^^^^^^^  ^^^^^^   constant.numeric.js
// ^    ^     ^        ^       ^  punctuation.terminator.statement.js
0x0; 0X0; 0x0123456789abcdefABCDEF;
// <- constant.numeric.js
 // <- constant.numeric.js
//^  ^^^  ^^^^^^^^^^^^^^^^^^^^^^^^   constant.numeric.js
// ^    ^                         ^  punctuation.terminator.statement.js
0b0; 0B0; 0b01; 0b10; 0b10101010;
// <- constant.numeric.js
 // <- constant.numeric.js
//^  ^^^  ^^^^  ^^^^  ^^^^^^^^^^   constant.numeric.js
// ^    ^     ^     ^           ^  punctuation.terminator.statement.js
0o0; 0O0; 0o01234567;
// <- constant.numeric.js
 // <- constant.numeric.js
//^  ^^^  ^^^^^^^^^^   constant.numeric.js
// ^    ^           ^  punctuation.terminator.statement.js
2e308;
// <- constant.numeric.js
 // <- constant.numeric.js
//^^^   constant.numeric.js
//   ^  punctuation.terminator.statement.js

""; "'"; "\'\"\\\b\f\n\r\t\v\0";
// <- string.quoted.double.js punctuation.definition.string.begin.js
 // <- string.quoted.double.js punctuation.definition.string.end.js
//  ^^^  ^^^^^^^^^^^^^^^^^^^^^^   string.quoted.double.js
//  ^    ^                        punctuation.definition.string.begin.js
//    ^                       ^   punctuation.definition.string.end.js
//^    ^                       ^  punctuation.terminator.statement.js
//        ^^^^^^^^^^^^^^^^^^^^    constant.character.escape
"\0";
// <- string.quoted.double.js punctuation.definition.string.begin.js
 // <- string.quoted.double.js constant.character.escape
//^^   string.quoted.double.js
//^    constant.character.escape
// ^   punctuation.definition.string.end.js
//  ^  punctuation.terminator.statement.js
"\x01\x23\x45\x67\x89\xAB\xCD\xEF\xab\xcd\xef";
// <- string.quoted.double.js punctuation.definition.string.begin.js
 // <- string.quoted.double.js constant.character.escape
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.double.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    constant.character.escape
//                                           ^   punctuation.definition.string.end.js
//                                            ^  punctuation.terminator.statement.js
"\u0123\u4567\u89AB\uCDEF\u00ab\ucdef";
// <- string.quoted.double.js punctuation.definition.string.begin.js
 // <- string.quoted.double.js constant.character.escape
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.double.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    constant.character.escape
//                                   ^   punctuation.definition.string.end.js
//                                    ^  punctuation.terminator.statement.js
"\uD834\uDF06\u2603\u03C6 \u{0000001F4a9}\u{1D306}\u{2603}\u{3c6} 𝌆☃φ"; "\
// <- string.quoted.double.js punctuation.definition.string.begin.js
 // <- string.quoted.double.js constant.character.escape
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^  ^^  string.quoted.double.js
//                                                                       ^   punctuation.definition.string.begin.js
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^            constant.character.escape
//                                                                    ^      punctuation.definition.string.end.js
//                                                                     ^     punctuation.terminator.statement.js
//                                                                        ^  constant.character.escape.newline.js
";
// <- string.quoted.double.js punctuation.definition.string.end.js
 // <- punctuation.terminator.statement.js

''; '"'; '\'\"\\\b\f\n\r\t\v\0';
// <- string.quoted.single.js punctuation.definition.string.begin.js
 // <- string.quoted.single.js punctuation.definition.string.end.js
//  ^^^  ^^^^^^^^^^^^^^^^^^^^^^   string.quoted.single.js
//  ^    ^                        punctuation.definition.string.begin.js
//    ^                       ^   punctuation.definition.string.end.js
//^    ^                       ^  punctuation.terminator.statement.js
//        ^^^^^^^^^^^^^^^^^^^^    constant.character.escape
'\0';
// <- string.quoted.single.js punctuation.definition.string.begin.js
 // <- string.quoted.single.js constant.character.escape
//^^   string.quoted.single.js
//^    constant.character.escape
// ^   punctuation.definition.string.end.js
//  ^  punctuation.terminator.statement.js
'\x01\x23\x45\x67\x89\xAB\xCD\xEF\xab\xcd\xef';
// <- string.quoted.single.js punctuation.definition.string.begin.js
 // <- string.quoted.single.js constant.character.escape
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.single.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    constant.character.escape
//                                           ^   punctuation.definition.string.end.js
//                                            ^  punctuation.terminator.statement.js
'\u0123\u4567\u89AB\uCDEF\u00ab\ucdef';
// <- string.quoted.single.js punctuation.definition.string.begin.js
 // <- string.quoted.single.js constant.character.escape
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.quoted.single.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    constant.character.escape
//                                   ^   punctuation.definition.string.end.js
//                                    ^  punctuation.terminator.statement.js
'\uD834\uDF06\u2603\u03C6 \u{0000001F4a9} \u{1D306}\u{2603}\u{3c6} 𝌆☃φ'; '\
// <- string.quoted.single.js punctuation.definition.string.begin.js
 // <- string.quoted.single.js constant.character.escape
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^  ^^  string.quoted.single.js
//                                                                        ^   punctuation.definition.string.begin.js
//^^^^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^^^^            constant.character.escape
//                                                                     ^      punctuation.definition.string.end.js
//                                                                      ^     punctuation.terminator.statement.js
//                                                                         ^  constant.character.escape.newline.js
';
// <- string.quoted.single.js punctuation.definition.string.end.js
 // <- punctuation.terminator.statement.js

/x/; /|/; /|||/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js
//^  ^^^  ^^^^^   string.regexp.js
//   ^    ^       punctuation.definition.string.begin.js
//^    ^      ^   punctuation.definition.string.end.js
// ^    ^      ^  punctuation.terminator.statement.js
//    ^    ^^^    keyword.operator.or.regexp
/^$\b\B/; /(?=(?!(?:(.))))/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js keyword.control.anchor.regexp
//^^^^^^  ^^^^^^^^^^^^^^^^^   string.regexp.js
//        ^                   punctuation.definition.string.begin.js
//^^^^^                       keyword.control.anchor.regexp
//     ^                  ^   punctuation.definition.string.end.js
//      ^                  ^  punctuation.terminator.statement.js
//         ^^^^^^^^^^^^^^^    meta.group.assertion.regexp
//         ^  ^  ^  ^ ^^^^    punctuation.definition.group.regexp
//          ^^ ^^             punctuation.definition.group.assertion.regexp
//          ^^                meta.assertion.look-ahead.regexp
//             ^^             meta.assertion.negative-look-ahead.regexp
//               ^^^^^^^      meta.group.regexp
//                ^^          punctuation.definition.group.capture.regexp
/a.\f\n\r\t\v\0\[\-\/\\\x00\u0000\uD834\uDF06/; /\u{00000001d306}/u; /\d\D\s\S\w\W/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^   string.regexp.js
//                                              ^                    ^                punctuation.definition.string.begin.js
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    ^^^^^^^^^^^^^^^^     ^^^^^^^^^^^^    constant.character.escape.backslash.regexp
//                                           ^                   ^                ^   punctuation.definition.string.end.js
//                                            ^                    ^               ^  punctuation.terminator.statement.js
//                                                                ^                   keyword.other.js
/\ca\cb\cc\cd\ce\cf\cg\ch\ci\cj\ck\cl\cm\cn\co\cp\cq\cr\cs\ct\cu\cv\cw\cx\cy\cz/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js constant.character.escape.backslash.regexp
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.regexp.js
//^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^     constant.character.escape.backslash.regexp
//                                                                             ^   punctuation.definition.string.end.js
//                                                                              ^  punctuation.terminator.statement.js
/\cA\cB\cC\cD\cE\cF\cG\cH\cI\cJ\cK\cL\cM\cN\cO\cP\cQ\cR\cS\cT\cU\cV\cW\cX\cY\cZ/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js constant.character.escape.backslash.regexp
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   string.regexp.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    constant.character.escape.backslash.regexp
//                                                                             ^   punctuation.definition.string.end.js
//                                                                              ^  punctuation.terminator.statement.js
/[a-z-]/; /[^\b\-^]/; /[/\]\\]/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js constant.other.character-class.set.regexp punctuation.definition.character-class.regexp
//^^^^^^  ^^^^^^^^^^  ^^^^^^^^^   string.regexp.js
//        ^           ^           punctuation.definition.string.begin.js
//^^^^^    ^^^^^^^^    ^^^^^^^    constant.other.character-class.set.regexp
//    ^    ^      ^    ^     ^    punctuation.definition.character-class.regexp
//^^^          ^^^                constant.other.character-class.range.regexp
//^ ^        ^^^ ^       ^^^^     constant.character.escape.backslash.regexp
//^ ^          ^ ^                constant.character.regexp
// ^            ^                 punctuation.definition.range.regexp
//     ^           ^          ^   punctuation.definition.string.end.js
//      ^           ^          ^  punctuation.terminator.statement.js
//          ^                     keyword.operator.negation.regexp
/./i; /./g; /./m; /./u; /./y; /./gimyu;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js
//^^  ^^^^  ^^^^  ^^^^  ^^^^  ^^^^^^^^   string.regexp.js
//    ^     ^     ^     ^     ^          punctuation.definition.string.begin.js
//^     ^     ^     ^     ^     ^        punctuation.definition.string.end.js
// ^     ^     ^     ^     ^     ^^^^^   keyword.other.js
//  ^     ^     ^     ^     ^         ^  punctuation.terminator.statement.js
/.*/; /.*?/; /.+/; /.+?/; /.?/; /.??/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js
//^^  ^^^^^  ^^^^  ^^^^^  ^^^^  ^^^^^   string.regexp.js
//    ^      ^     ^      ^     ^       punctuation.definition.string.begin.js
//^     ^^     ^     ^^     ^     ^^    keyword.operator.quantifier.regexp
// ^      ^     ^      ^     ^      ^   punctuation.definition.string.end.js
//  ^      ^     ^      ^     ^      ^  punctuation.terminator.statement.js
/.{0}/; /.{0,}/; /.{0,0}/;
// <- string.regexp.js punctuation.definition.string.begin.js
 // <- string.regexp.js
//^^^^  ^^^^^^^  ^^^^^^^^   string.regexp.js
//      ^        ^          punctuation.definition.string.begin.js
//^^^     ^^^^     ^^^^^    keyword.operator.quantifier.regexp
//   ^        ^         ^   punctuation.definition.string.end.js
//    ^        ^         ^  punctuation.terminator.statement.js

`a`; `${0}`; `0${0,1}2`; `0${`1${2}3`}4`;
// <- string.quasi.js string.quoted.template.js punctuation.definition.quasi.begin.js
 // <- string.quasi.js string.quoted.template.js
//^  ^^^^^^  ^^^^^^^^^^  ^^^^^^^^^^^^^^^   string.quasi.js
//^  ^^^^^^  ^^^^^^^^^^  ^^^^^^^^^^^^^^^   string.quoted.template.js
//   ^       ^           ^   ^             punctuation.definition.quasi.begin.js
//^       ^           ^             ^  ^   punctuation.definition.quasi.end.js
// ^       ^           ^                ^  punctuation.terminator.statement.js
//    ^^^^     ^^^^^^      ^^^^^^^^^^^     entity.quasi.element.js
//    ^^       ^^          ^^  ^^          punctuation.quasi.element.begin.js
//      ^        ^ ^             ^         constant.numeric.js
//       ^          ^             ^  ^     punctuation.quasi.element.end.js
//                ^                        meta.delimiter.comma.js
`\``; `a\${b`; `\0\n\x0A\u000A\u{A}`;
// <- string.quasi.js string.quoted.template.js punctuation.definition.quasi.begin.js
 // <- string.quasi.js string.quoted.template.js constant.character.escape
//^^  ^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^   string.quasi.js
//^^  ^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^   string.quoted.template.js
//    ^        ^                       punctuation.definition.quasi.begin.js
//^             ^^^^^^^^^^^^^^^^^^^    constant.character.escape
// ^        ^                      ^   punctuation.definition.quasi.end.js
//  ^        ^                      ^  punctuation.terminator.statement.js

this;
// <- variable.language.this.js
 // <- variable.language.this.js
//^^   variable.language.this.js
//  ^  punctuation.terminator.statement.js

x;
// <- variable.other.readwrite.js
 // <- punctuation.terminator.statement.js

[]; [,]; [0]; [0,]; [,0]; [0,0]; [0,0,]; [0,,0]; [,,];
// <- meta.brace.square.js
 // <- meta.brace.square.js
//  ^ ^  ^ ^  ^  ^  ^  ^  ^   ^  ^    ^  ^    ^  ^  ^   meta.brace.square.js
//^    ^    ^     ^     ^      ^       ^       ^     ^  punctuation.terminator.statement.js
//   ^          ^    ^      ^      ^ ^     ^^     ^^    meta.delimiter.comma.js
//        ^    ^      ^    ^ ^    ^ ^     ^  ^          constant.numeric.js

({}); ({x}); ({x:0}); ({x:0,y:0}); ({x:0,}); ({'x':0,"y":0,in:0});
// <- meta.brace.round.js
 // <- meta.brace.curly.litobj.js
// ^  ^   ^  ^     ^  ^         ^  ^      ^  ^                  ^   meta.brace.round.js
//^    ^ ^    ^   ^    ^       ^    ^    ^    ^                ^    meta.brace.curly.litobj.js
//  ^      ^        ^            ^         ^                     ^  punctuation.terminator.statement.js
//      ^                                                           variable.other.readwrite.shorthandpropertyname.js
//             ^        ^   ^        ^         ^^^   ^^^   ^^       constant.other.object.key.js
//             ^        ^   ^        ^                     ^^       string.unquoted.js
//              ^        ^   ^        ^           ^     ^    ^      punctuation.separator.key-value.js
//               ^        ^   ^        ^           ^     ^    ^     constant.numeric.js
//                         ^            ^           ^     ^         meta.delimiter.comma.js
//                                             ^^^                  string.quoted.single.js
//                                             ^     ^              punctuation.definition.string.begin.js
//                                               ^     ^            punctuation.definition.string.end.js
//                                                   ^^^            string.quoted.double.js
({
// <- meta.brace.round.js
 // <- meta.brace.curly.litobj.js
  0: 0, 0.: 0, 0.0: 0, .0: 0, 0e0: 0, 0x0: 0, [0]: 0,
//^  ^  ^^  ^  ^^^  ^  ^^  ^  ^^^  ^  ^^^  ^   ^   ^   constant.numeric.js
//    ^      ^       ^      ^       ^       ^       ^  meta.delimiter.comma.js
//                                            ^ ^      meta.brace.square.js
//                                               ^     punctuation.separator.key-value.js
   get x(){}, set x(a){}, get 'y'(){}, set "y"(a){},
// ^^^ ^^^^^  ^^^ ^^^^^^  ^^^ ^^^^^    ^^^ ^^^^^^     meta.accessor.js
// ^^^        ^^^         ^^^          ^^^            storage.type.accessor.js
//     ^          ^                                   entity.name.function.accessor.js
//      ^          ^             ^            ^       punctuation.definition.parameters.begin.js
//      ^^         ^ ^           ^^           ^ ^     meta.brace.round.js
//       ^           ^            ^             ^     punctuation.definition.parameters.end.js
//        ^^          ^^           ^^            ^^   meta.brace.curly.js
//          ^           ^            ^             ^  meta.delimiter.comma.js
//                  ^                          ^      meta.function.parameters.js
//                  ^                          ^      variable.other.readwrite.js
//                            ^^^                     string.quoted.single.js
//                            ^            ^          punctuation.definition.string.begin.js
//                              ^            ^        punctuation.definition.string.end.js
//                                         ^^^        string.quoted.double.js
  get 0(){}, set 0(a){}, get var(){}, set var(a){},
//^^^        ^^^   ^                          ^      variable.other.readwrite.js
//    ^          ^                                   constant.numeric.js
//     ^^         ^ ^           ^^           ^ ^     meta.brace.round.js
//       ^^          ^^           ^^            ^^   meta.brace.curly.js
//         ^           ^            ^             ^  meta.delimiter.comma.js
//                       ^^^ ^^^^^^^  ^^^ ^^^^^^^^   meta.accessor.js
//                       ^^^          ^^^            storage.type.accessor.js
//                           ^^^          ^^^        entity.name.function.accessor.js
//                              ^            ^       punctuation.definition.parameters.begin.js
//                               ^             ^     punctuation.definition.parameters.end.js
//                                            ^      meta.function.parameters.js
  get [0](){}, set [0](a){}, [1](){},
//^^^ ^^^^^    ^^^ ^^^^^^              meta.accessor.js
//^^^          ^^^                     storage.type.accessor.js
//    ^            ^                   meta.brace.square.open.flowtype
//     ^            ^         ^        constant.numeric.js
//      ^            ^                 meta.brace.square.end.flowtype
//       ^            ^         ^      punctuation.definition.parameters.begin.js
//       ^^           ^ ^       ^^     meta.brace.round.js
//        ^             ^        ^     punctuation.definition.parameters.end.js
//         ^^            ^^       ^^   meta.brace.curly.js
//           ^             ^        ^  meta.delimiter.comma.js
//                     ^               meta.function.parameters.js
//                     ^               variable.other.readwrite.js
//                           ^^^^^^^   meta.function.method.js
//                           ^ ^       meta.brace.square.js
  a(){}, 'b'(){}, "c"(){}, 0(){}, .1(){}, 1.(){}, 1e1(){},
//^^^^^  ^^^^^^^  ^^^^^^^                                   meta.function.method.js
//^      ^^^      ^^^                                       entity.name.function.method.js
// ^        ^        ^                                      punctuation.definition.parameters.begin.js
// ^^       ^^       ^^     ^^      ^^      ^^       ^^     meta.brace.round.js
//  ^        ^        ^                                     punctuation.definition.parameters.end.js
//   ^^       ^^       ^^     ^^      ^^      ^^       ^^   meta.brace.curly.js
//     ^        ^        ^      ^       ^       ^        ^  meta.delimiter.comma.js
//                         ^      ^^      ^^      ^^^       constant.numeric.js
  var(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k){},
//^^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^^^   meta.function.method.js
//^^^                                                                    entity.name.function.method.js
//   ^                                                                   punctuation.definition.parameters.begin.js
//   ^                                                             ^     meta.brace.round.js
//    ^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^      meta.function.parameters.js
//    ^  ^       ^   ^                    ^  ^         ^                 variable.other.readwrite.js
//     ^      ^   ^^      ^      ^   ^     ^      ^          ^        ^  meta.delimiter.comma.js
//         ^           ^                       ^         ^               keyword.operator.assignment.js
//           ^           ^                       ^         ^             constant.numeric.js
//              ^                                                        meta.brace.square.open.flowtype
//                          ^^^                                ^^^       keyword.operator.spread.js
//                             ^                                  ^      meta.property.object.js
//                             ^                                  ^      variable.other.property.js
//                              ^                                        meta.brace.square.end.flowtype
//                                 ^                        ^            meta.brace.curly.litobj.js
//                                  ^                                    variable.other.readwrite.shorthandpropertyname.js
//                                     ^            ^                    constant.other.object.key.js
//                                     ^            ^                    string.unquoted.js
//                                      ^            ^                   punctuation.separator.key-value.js
//                                                                 ^     punctuation.definition.parameters.end.js
//                                                                  ^^   meta.brace.curly.js
  set in([a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k]){},
//^^^ ^^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^^^^   meta.accessor.js
//^^^                                                                         storage.type.accessor.js
//    ^^                                                                      entity.name.function.accessor.js
//      ^                                                                     punctuation.definition.parameters.begin.js
//      ^                                                               ^     meta.brace.round.js
//       ^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^      meta.function.parameters.js
//       ^          ^                                                         meta.brace.square.open.flowtype
//        ^  ^       ^   ^                    ^  ^         ^                  variable.other.readwrite.js
//         ^      ^   ^^      ^      ^   ^     ^      ^          ^         ^  meta.delimiter.comma.js
//             ^           ^                       ^         ^                keyword.operator.assignment.js
//               ^           ^                       ^         ^              constant.numeric.js
//                              ^^^                                ^^^        keyword.operator.spread.js
//                                 ^                                  ^       meta.property.object.js
//                                 ^                                  ^       variable.other.property.js
//                                  ^                                  ^      meta.brace.square.end.flowtype
//                                     ^                        ^             meta.brace.curly.litobj.js
//                                      ^                                     variable.other.readwrite.shorthandpropertyname.js
//                                         ^            ^                     constant.other.object.key.js
//                                         ^            ^                     string.unquoted.js
//                                          ^            ^                    punctuation.separator.key-value.js
//                                                                      ^     punctuation.definition.parameters.end.js
//                                                                       ^^   meta.brace.curly.js
  *d(){}, *'e'(){}, *"f"(){}, *2(){}, *.2(){}, *3.(){}, *2e2(){}, *in(){},
//^^^^^^  ^^^^^^^^  ^^^^^^^^                                      ^^^^^^^   meta.function.method.js
//^       ^         ^                                             ^         keyword.generator.asterisk.js
// ^       ^^^       ^^^                                           ^^       entity.name.function.method.js
//  ^         ^         ^                                            ^      punctuation.definition.parameters.begin.js
//  ^^        ^^        ^^      ^^       ^^       ^^        ^^       ^^     meta.brace.round.js
//   ^         ^         ^                                            ^     punctuation.definition.parameters.end.js
//    ^^        ^^        ^^      ^^       ^^       ^^        ^^       ^^   meta.brace.curly.js
//      ^         ^         ^       ^        ^        ^         ^        ^  meta.delimiter.comma.js
//                            ^       ^        ^        ^                   keyword.operator.arithmetic.js
//                             ^       ^^       ^^       ^^^                constant.numeric.js
});
// <- meta.brace.curly.litobj.js
 // <- meta.brace.round.js
//^  punctuation.terminator.statement.js
({ __proto__: null, get __proto__(){}, set __proto__(a){}, });
// <- meta.brace.round.js
 // <- meta.brace.curly.litobj.js
//                               ^^                 ^ ^     ^   meta.brace.round.js
//                                                         ^    meta.brace.curly.litobj.js
// ^^^^^^^^^                                                    constant.other.object.key.js
// ^^^^^^^^^                                                    string.unquoted.js
//          ^                                                   punctuation.separator.key-value.js
//            ^^^^                                              constant.language.null.js
//                ^                  ^                   ^      meta.delimiter.comma.js
//                  ^^^ ^^^^^^^^^^^^^  ^^^ ^^^^^^^^^^^^^^       meta.accessor.js
//                  ^^^                ^^^                      storage.type.accessor.js
//                      ^^^^^^^^^          ^^^^^^^^^            entity.name.function.accessor.js
//                               ^                  ^           punctuation.definition.parameters.begin.js
//                                ^                   ^         punctuation.definition.parameters.end.js
//                                 ^^                  ^^       meta.brace.curly.js
//                                                   ^          meta.function.parameters.js
//                                                   ^          variable.other.readwrite.js
//                                                           ^  punctuation.terminator.statement.js
({ "__proto__": null, __proto__(){}, });
// <- meta.brace.round.js
 // <- meta.brace.curly.litobj.js
//                             ^^     ^   meta.brace.round.js
//                                   ^    meta.brace.curly.litobj.js
// ^^^^^^^^^^^                            constant.other.object.key.js
// ^^^^^^^^^^^                            string.quoted.double.js
// ^                                      punctuation.definition.string.begin.js
//           ^                            punctuation.definition.string.end.js
//            ^                           punctuation.separator.key-value.js
//              ^^^^                      constant.language.null.js
//                  ^              ^      meta.delimiter.comma.js
//                    ^^^^^^^^^^^^^       meta.function.method.js
//                    ^^^^^^^^^           entity.name.function.method.js
//                             ^          punctuation.definition.parameters.begin.js
//                              ^         punctuation.definition.parameters.end.js
//                               ^^       meta.brace.curly.js
//                                     ^  punctuation.terminator.statement.js

0..a; 0 .a; (0).a;
// <- constant.numeric.js
 // <- constant.numeric.js
//    ^      ^      constant.numeric.js
//^     ^      ^    keyword.operator.accessor.js
// ^     ^      ^   meta.property.object.js
// ^     ^      ^   variable.other.property.js
//  ^     ^      ^  punctuation.terminator.statement.js
//          ^ ^     meta.brace.round.js

0[0];
// <- constant.numeric.js
 // <- meta.brace.square.js
//^    constant.numeric.js
// ^   meta.brace.square.js
//  ^  punctuation.terminator.statement.js

// this function makes the NewExpression and CallExpression tests not throw at runtime
// <- comment.line.double-slash.js punctuation.definition.comment.js
 // <- comment.line.double-slash.js punctuation.definition.comment.js
// ^^^^ ^^^^^^^^ ^^^^^ ^^^ ^^^^^^^^^^^^^ ^^^ ^^^^^^^^^^^^^^ ^^^^^ ^^^ ^^^^^ ^^ ^^^^^^^  comment.line.double-slash.js
x = function f(){ return f; }; x[0] = x; x.a = x;
// <- meta.function.js entity.name.function.js
//^ ^^^^^^^^ ^^^^ ^^^^^^ ^^ ^                      meta.function.js
//           ^                                     entity.name.function.js
//^                                 ^        ^     keyword.operator.assignment.js
//  ^^^^^^^^                                       storage.type.function.js
//            ^                                    punctuation.definition.parameters.begin.js
//            ^^                                   meta.brace.round.js
//             ^                                   punctuation.definition.parameters.end.js
//              ^           ^                      meta.brace.curly.js
//                ^^^^^^                           keyword.control.flow.js
//                       ^            ^        ^   variable.other.readwrite.js
//                        ^  ^         ^        ^  punctuation.terminator.statement.js
//                             ^         ^         variable.other.object.js
//                              ^ ^                meta.brace.square.js
//                               ^                 constant.numeric.js
//                                        ^        keyword.operator.accessor.js
//                                         ^       meta.property.object.js
//                                         ^       variable.other.property.js

new x(); new new x()();
// <- keyword.operator.js
 // <- keyword.operator.js
//^      ^^^ ^^^         keyword.operator.js
//  ^^^          ^^^     meta.function-call.without-arguments.js
//  ^            ^       entity.name.function.js
//   ^^           ^^^^   meta.brace.round.js
//     ^              ^  punctuation.terminator.statement.js
new x[0](); new x.a(); new x[0].a(); new x.a[0]();
// <- keyword.operator.js
 // <- keyword.operator.js
//^         ^^^        ^^^           ^^^            keyword.operator.js
//  ^^^^^^                                          meta.function-call.without-arguments.js
//  ^           ^          ^             ^          variable.other.object.js
//   ^ ^                    ^ ^             ^ ^     meta.brace.square.js
//    ^                      ^               ^      constant.numeric.js
//      ^^         ^^            ^^            ^^   meta.brace.round.js
//        ^          ^             ^             ^  punctuation.terminator.statement.js
//               ^             ^          ^         keyword.operator.accessor.js
//                ^^^           ^^^        ^^^^^^   meta.method-call.without-arguments.js
//                ^             ^          ^        entity.name.function.js
new x; new new x; new new x();
// <- keyword.operator.js
 // <- keyword.operator.js
//^    ^^^ ^^^    ^^^ ^^^       keyword.operator.js
//  ^          ^                variable.other.readwrite.js
//   ^          ^            ^  punctuation.terminator.statement.js
//                        ^^^   meta.function-call.without-arguments.js
//                        ^     entity.name.function.js
//                         ^^   meta.brace.round.js
new new x().a; new new x()[0];
// <- keyword.operator.js
 // <- keyword.operator.js
//^ ^^^        ^^^ ^^^          keyword.operator.js
//      ^^^            ^^^      meta.function-call.without-arguments.js
//      ^              ^        entity.name.function.js
//       ^^             ^^      meta.brace.round.js
//         ^                    keyword.operator.accessor.js
//          ^                   meta.property.object.js
//          ^                   variable.other.property.js
//           ^               ^  punctuation.terminator.statement.js
//                        ^ ^   meta.brace.square.js
//                         ^    constant.numeric.js

x(); x()(); x(x); x(x, x);
// <- meta.function-call.without-arguments.js entity.name.function.js
 // <- meta.function-call.without-arguments.js meta.brace.round.js
//^  ^^^                    meta.function-call.without-arguments.js
//   ^      ^     ^         entity.name.function.js
//^   ^^^^   ^ ^   ^    ^   meta.brace.round.js
// ^      ^     ^        ^  punctuation.terminator.statement.js
//          ^^^^  ^^^^ ^^   meta.function-call.with-arguments.js
//            ^     ^  ^    variable.other.readwrite.js
//                   ^      meta.delimiter.comma.js
x.a().a(); x[0]()[0](); x().a[0]();
// <- variable.other.object.js
 // <- keyword.operator.accessor.js
//         ^                         variable.other.object.js
//   ^                     ^         keyword.operator.accessor.js
//^^^ ^^^                   ^^^^^^   meta.method-call.without-arguments.js
//^   ^                 ^   ^        entity.name.function.js
// ^^  ^^      ^^   ^^   ^^     ^^   meta.brace.round.js
//       ^            ^           ^  punctuation.terminator.statement.js
//         ^^^^^^^^^^^  ^^^          meta.function-call.without-arguments.js
//          ^ ^  ^ ^         ^ ^     meta.brace.square.js
//           ^    ^           ^      constant.numeric.js
x(...[0,1,], ...[], ...function* f(){ return yield 2; });
// <- meta.function-call.with-arguments.js entity.name.function.js
 // <- meta.function-call.with-arguments.js meta.brace.round.js
//^^^^^^^^^^ ^^^^^^ ^^^^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^ ^^ ^^   meta.function-call.with-arguments.js
//                               ^                         entity.name.function.js
//                                ^^                   ^   meta.brace.round.js
//^^^        ^^^    ^^^                                    keyword.operator.spread.js
//   ^    ^     ^^                                         meta.brace.square.js
//    ^ ^                                          ^       constant.numeric.js
//     ^ ^ ^      ^                                        meta.delimiter.comma.js
//                     ^^^^^^^^^ ^^^^ ^^^^^^ ^^^^^ ^^ ^    meta.function.js
//                     ^^^^^^^^                            storage.type.function.js
//                             ^                           keyword.generator.asterisk.js
//                                ^                        punctuation.definition.parameters.begin.js
//                                 ^                       punctuation.definition.parameters.end.js
//                                  ^                 ^    meta.brace.curly.js
//                                    ^^^^^^ ^^^^^         keyword.control.flow.js
//                                                  ^   ^  punctuation.terminator.statement.js
x`a`; x`0${1}2`;
// <- string.quasi.js entity.name.tag.js
 // <- string.quasi.js string.quoted.template.js punctuation.definition.quasi.begin.js
//^^  ^^^^^^^^^   string.quasi.js
//    ^           entity.name.tag.js
//^^   ^^^^^^^^   string.quoted.template.js
//     ^          punctuation.definition.quasi.begin.js
// ^          ^   punctuation.definition.quasi.end.js
//  ^          ^  punctuation.terminator.statement.js
//       ^^^^     entity.quasi.element.js
//       ^^       punctuation.quasi.element.begin.js
//         ^      constant.numeric.js
//          ^     punctuation.quasi.element.end.js

x++; x--;
// <- variable.other.readwrite.js
 // <- keyword.operator.arithmetic.js
//   ^     variable.other.readwrite.js
//^   ^^   keyword.operator.arithmetic.js
// ^    ^  punctuation.terminator.statement.js

delete void typeof+-~!x; ++x; --x;
// <- keyword.operator.js
 // <- keyword.operator.js
//^^^^ ^^^^ ^^^^^^                  keyword.operator.js
//                ^^     ^^   ^^    keyword.operator.arithmetic.js
//                  ^               keyword.operator.bitwise.js
//                   ^              keyword.operator.logical.js
//                    ^    ^    ^   variable.other.readwrite.js
//                     ^    ^    ^  punctuation.terminator.statement.js

0*0; 0/0; 0%0;
// <- constant.numeric.js
 // <- keyword.operator.arithmetic.js
//^  ^ ^  ^ ^   constant.numeric.js
//    ^    ^    keyword.operator.arithmetic.js
// ^    ^    ^  punctuation.terminator.statement.js

0+0; 0-0;
// <- constant.numeric.js
 // <- keyword.operator.arithmetic.js
//^  ^ ^   constant.numeric.js
//    ^    keyword.operator.arithmetic.js
// ^    ^  punctuation.terminator.statement.js

0<<0; 0>>0; 0>>>0;
// <- constant.numeric.js
 // <- keyword.operator.bitwise.js
// ^  ^  ^  ^   ^   constant.numeric.js
//^    ^^    ^^^    keyword.operator.bitwise.js
//  ^     ^      ^  punctuation.terminator.statement.js

0<0; 0>0; 0<=0; 0>=0;
// <- constant.numeric.js
 // <- keyword.operator.relational.js
//^  ^ ^  ^  ^  ^  ^   constant.numeric.js
//    ^    ^^    ^^    keyword.operator.relational.js
// ^    ^     ^     ^  punctuation.terminator.statement.js
0 instanceof function(){};
// <- constant.numeric.js
//^^^^^^^^^^                keyword.operator.js
//           ^^^^^^^^^^^^   meta.function.js
//           ^^^^^^^^       storage.type.function.js
//                   ^      punctuation.definition.parameters.begin.js
//                   ^^     meta.brace.round.js
//                    ^     punctuation.definition.parameters.end.js
//                     ^^   meta.brace.curly.js
//                       ^  punctuation.terminator.statement.js
0 in{};
// <- constant.numeric.js
//^^     keyword.operator.js
//  ^^   meta.brace.curly.js
//    ^  punctuation.terminator.statement.js

0==0; 0!=0; 0===0; 0!==0;
// <- constant.numeric.js
 // <- keyword.operator.comparison.js
// ^  ^  ^  ^   ^  ^   ^   constant.numeric.js
//^    ^^    ^^^    ^^^    keyword.operator.comparison.js
//  ^     ^      ^      ^  punctuation.terminator.statement.js

0&0; 0^0; 0|0; 0&&0; 0||0;
// <- constant.numeric.js
 // <- keyword.operator.bitwise.js
//^  ^ ^  ^ ^  ^  ^  ^  ^   constant.numeric.js
//    ^    ^                keyword.operator.bitwise.js
// ^    ^    ^     ^     ^  punctuation.terminator.statement.js
//              ^^    ^^    keyword.operator.logical.js

0?0:0; 0?0?0:0:0; 0||0?x=0:x=0;
// <- constant.numeric.js
 // <- keyword.operator.ternary.js
//^ ^  ^ ^ ^ ^ ^  ^  ^   ^   ^   constant.numeric.js
// ^    ^ ^ ^ ^       ^   ^      keyword.operator.ternary.js
//   ^          ^             ^  punctuation.terminator.statement.js
//                 ^^            keyword.operator.logical.js
//                     ^   ^     variable.other.readwrite.js
//                      ^   ^    keyword.operator.assignment.js

x=0; x*=0; x/=0; x%=0; x+=0; x-=0;
// <- variable.other.readwrite.js
 // <- keyword.operator.assignment.js
//   ^     ^     ^     ^     ^      variable.other.readwrite.js
//^     ^     ^     ^     ^     ^   constant.numeric.js
// ^     ^     ^     ^     ^     ^  punctuation.terminator.statement.js
//    ^^    ^^    ^^    ^^    ^^    keyword.operator.assignment.augmented.js
x<<=0; x>>=0; x>>>=0; x&=0; x^=0; x|=0;
// <- variable.other.readwrite.js
 // <- keyword.operator.assignment.augmented.js
//     ^      ^       ^     ^     ^      variable.other.readwrite.js
//^^    ^^^    ^^^^    ^^    ^^    ^^    keyword.operator.assignment.augmented.js
//  ^      ^       ^     ^     ^     ^   constant.numeric.js
//   ^      ^       ^     ^     ^     ^  punctuation.terminator.statement.js

0,0; 0,0,0; x=0,x=0;
// <- constant.numeric.js
 // <- meta.delimiter.comma.js
//^  ^ ^ ^    ^   ^   constant.numeric.js
//    ^ ^      ^      meta.delimiter.comma.js
// ^      ^        ^  punctuation.terminator.statement.js
//          ^   ^     variable.other.readwrite.js
//           ^   ^    keyword.operator.assignment.js


{} {;} {0} {0;} {0;0} {0;0;}
// <- meta.brace.curly.js
 // <- meta.brace.curly.js
// ^ ^ ^ ^ ^  ^ ^   ^ ^    ^  meta.brace.curly.js
//  ^        ^    ^     ^ ^   punctuation.terminator.statement.js
//      ^   ^    ^ ^   ^ ^    constant.numeric.js

var x0; var x1,y2; var x3,y4,z5;
// <- storage.type.js
 // <- storage.type.js
//^     ^^^        ^^^            storage.type.js
//  ^^      ^^ ^^      ^^ ^^ ^^   variable.other.readwrite.js
//    ^       ^  ^       ^  ^  ^  punctuation.terminator.statement.js
var x6=0; var x7=0,y8; var x9,y10=0; var x11=0,y12=0;
// <- storage.type.js
 // <- storage.type.js
//^       ^^^          ^^^           ^^^               storage.type.js
//  ^^        ^^   ^^      ^^ ^^^        ^^^   ^^^     variable.other.readwrite.js
//    ^         ^                ^          ^     ^    keyword.operator.assignment.js
//     ^         ^                ^          ^     ^   constant.numeric.js
//      ^         ^  ^       ^     ^          ^     ^  punctuation.terminator.statement.js

;
// <- punctuation.terminator.statement.js

if(0); if(0);else;
// <- keyword.control.conditional.js
 // <- keyword.control.conditional.js
//     ^^    ^^^^   keyword.control.conditional.js
//^ ^    ^ ^        meta.brace.round.js
// ^      ^         constant.numeric.js
//   ^      ^    ^  punctuation.terminator.statement.js

do;while(0) 0;
// <- keyword.control.loop.js
 // <- keyword.control.loop.js
// ^^^^^        keyword.control.loop.js
//^          ^  punctuation.terminator.statement.js
//      ^ ^     meta.brace.round.js
//       ^  ^   constant.numeric.js
do;while(0);
// <- keyword.control.loop.js
 // <- keyword.control.loop.js
// ^^^^^      keyword.control.loop.js
//^        ^  punctuation.terminator.statement.js
//      ^ ^   meta.brace.round.js
//       ^    constant.numeric.js
do;while(0) 0
// <- keyword.control.loop.js
 // <- keyword.control.loop.js
// ^^^^^       keyword.control.loop.js
//^            punctuation.terminator.statement.js
//      ^ ^    meta.brace.round.js
//       ^  ^  constant.numeric.js
while(0);
// <- keyword.control.loop.js
 // <- keyword.control.loop.js
//^^^      keyword.control.loop.js
//   ^ ^   meta.brace.round.js
//    ^    constant.numeric.js
//      ^  punctuation.terminator.statement.js
for(;;)break; for(0;0;0); for((0 in[]);0;);
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^^^       ^^^^^^^^^^  ^^^^^^ ^^^^^^^^^   meta.for.js
//^    ^^^^^  ^^^         ^^^                keyword.control.loop.js
// ^  ^          ^     ^     ^^      ^   ^   meta.brace.round.js
//  ^^      ^      ^ ^  ^             ^ ^ ^  punctuation.terminator.statement.js
//                ^ ^ ^        ^       ^     constant.numeric.js
//                               ^^          keyword.operator.js
//                                 ^^        meta.brace.square.js
for(var a0;;)break; for(var a1,b2;0;0);
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^^^ ^^^^^       ^^^^^^^ ^^^^^^^^^^   meta.for.js
//^          ^^^^^  ^^^                  keyword.control.loop.js
// ^        ^          ^             ^   meta.brace.round.js
//  ^^^                 ^^^              storage.type.js
//      ^^                  ^^ ^^        variable.other.readwrite.js
//        ^^      ^           ^  ^ ^  ^  punctuation.terminator.statement.js
//                                ^ ^    constant.numeric.js
for(var a3=0;;)break; for(var a4=(0 in[]);0;);
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^^^ ^^^^^^^       ^^^^^^^ ^^^^^ ^^^^^^^^^   meta.for.js
//^            ^^^^^  ^^^                       keyword.control.loop.js
// ^          ^          ^       ^      ^   ^   meta.brace.round.js
//  ^^^                   ^^^                   storage.type.js
//      ^^                    ^^                variable.other.readwrite.js
//        ^                     ^               keyword.operator.assignment.js
//         ^                      ^       ^     constant.numeric.js
//          ^^      ^                    ^ ^ ^  punctuation.terminator.statement.js
//                                  ^^          keyword.operator.js
//                                    ^^        meta.brace.square.js
for(x in{}); for(var x12 in{});
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^ ^^^^^  ^^^^^^^ ^^^ ^^^^^   meta.for.js
//^          ^^^                 keyword.control.loop.js
// ^      ^     ^            ^   meta.brace.round.js
//  ^                ^^^         variable.other.readwrite.js
//    ^^                 ^^      keyword.operator.js
//      ^^                 ^^    meta.brace.curly.js
//         ^                  ^  punctuation.terminator.statement.js
//               ^^^             storage.type.js
for(x of[]); for(var x13 of[]);
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^ ^^^^^  ^^^^^^^ ^^^ ^^^^^   meta.for.js
//^          ^^^                 keyword.control.loop.js
// ^      ^     ^            ^   meta.brace.round.js
//  ^                ^^^         variable.other.readwrite.js
//    ^^                 ^^      keyword.operator.js
//      ^^                 ^^    meta.brace.square.js
//         ^                  ^  punctuation.terminator.statement.js
//               ^^^             storage.type.js

for(;0;)continue; x:for(;0;)continue x;
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^^^^            ^^^^^^^^             meta.for.js
//^     ^^^^^^^^    ^^^     ^^^^^^^^     keyword.control.loop.js
// ^   ^               ^   ^             meta.brace.round.js
//  ^ ^         ^       ^ ^           ^  punctuation.terminator.statement.js
//   ^                   ^               constant.numeric.js
//                ^                      constant.other.object.key.js
//                ^                      string.unquoted.js
//                 ^                     punctuation.separator.key-value.js
//                                   ^   variable.other.readwrite.js

for(;;)break; x:for(;;)break x;
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^^^^^         ^^^^^^^          meta.for.js
//^    ^^^^^    ^^^    ^^^^^     keyword.control.loop.js
// ^  ^            ^  ^          meta.brace.round.js
//  ^^      ^       ^^        ^  punctuation.terminator.statement.js
//            ^                  constant.other.object.key.js
//            ^                  string.unquoted.js
//             ^                 punctuation.separator.key-value.js
//                           ^   variable.other.readwrite.js
switch(0){case 0:break;default:}
// <- meta.switch.js keyword.control.switch.js
 // <- meta.switch.js keyword.control.switch.js
//^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^  meta.switch.js
//^^^^    ^^^^         ^^^^^^^    keyword.control.switch.js
//    ^ ^                         meta.brace.round.js
//     ^       ^                  constant.numeric.js
//       ^                        meta.brace.curly.switchStart.js
//              ^             ^   keyword.operator.js
//               ^^^^^            keyword.control.loop.js
//                    ^           punctuation.terminator.statement.js
//                             ^  meta.brace.curly.switchEnd.js

function f0(){ return; }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^ ^^^^^^^ ^  meta.function.js
//^^^^^^                  storage.type.function.js
//       ^^               entity.name.function.js
//         ^              punctuation.definition.parameters.begin.js
//         ^^             meta.brace.round.js
//          ^             punctuation.definition.parameters.end.js
//           ^         ^  meta.brace.curly.js
//             ^^^^^^     keyword.control.flow.js
//                   ^    punctuation.terminator.statement.js
function f1(){ return 0; }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^ ^^^^^^ ^^ ^  meta.function.js
//^^^^^^                    storage.type.function.js
//       ^^                 entity.name.function.js
//         ^                punctuation.definition.parameters.begin.js
//         ^^               meta.brace.round.js
//          ^               punctuation.definition.parameters.end.js
//           ^           ^  meta.brace.curly.js
//             ^^^^^^       keyword.control.flow.js
//                    ^     constant.numeric.js
//                     ^    punctuation.terminator.statement.js
switch(0){} switch(0){case 0:} switch(0){case 0:case 0:}
// <- meta.switch.js keyword.control.switch.js
 // <- meta.switch.js keyword.control.switch.js
//^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^ ^^^^^^^^^^^^^^ ^^^^^^ ^^^  meta.switch.js
//^^^^      ^^^^^^    ^^^^     ^^^^^^    ^^^^   ^^^^      keyword.control.switch.js
//    ^ ^         ^ ^                ^ ^                  meta.brace.round.js
//     ^           ^       ^          ^       ^      ^    constant.numeric.js
//       ^           ^                  ^                 meta.brace.curly.switchStart.js
//        ^                  ^                         ^  meta.brace.curly.switchEnd.js
//                          ^                  ^      ^   keyword.operator.js
switch(0){default:} switch(0){case 0:default:case 0:}
// <- meta.switch.js keyword.control.switch.js
 // <- meta.switch.js keyword.control.switch.js
//^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^ ^^^  meta.switch.js
//^^^^    ^^^^^^^   ^^^^^^    ^^^^   ^^^^^^^ ^^^^      keyword.control.switch.js
//    ^ ^                 ^ ^                          meta.brace.round.js
//     ^                   ^       ^              ^    constant.numeric.js
//       ^                   ^                         meta.brace.curly.switchStart.js
//               ^                  ^       ^      ^   keyword.operator.js
//                ^                                 ^  meta.brace.curly.switchEnd.js
switch(0){case 0:;} switch(0){case 0:;;}
// <- meta.switch.js keyword.control.switch.js
 // <- meta.switch.js keyword.control.switch.js
//^^^^^^^^^^^^ ^^^^ ^^^^^^^^^^^^^^ ^^^^^  meta.switch.js
//^^^^    ^^^^      ^^^^^^    ^^^^        keyword.control.switch.js
//    ^ ^                 ^ ^             meta.brace.round.js
//     ^       ^           ^       ^      constant.numeric.js
//       ^                   ^            meta.brace.curly.switchStart.js
//              ^                   ^     keyword.operator.js
//               ^                   ^^   punctuation.terminator.statement.js
//                ^                    ^  meta.brace.curly.switchEnd.js
switch(0){default:;} switch(0){default:;;}
// <- meta.switch.js keyword.control.switch.js
 // <- meta.switch.js keyword.control.switch.js
//^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^  meta.switch.js
//^^^^    ^^^^^^^    ^^^^^^    ^^^^^^^      keyword.control.switch.js
//    ^ ^                  ^ ^              meta.brace.round.js
//     ^                    ^               constant.numeric.js
//       ^                    ^             meta.brace.curly.switchStart.js
//               ^                    ^     keyword.operator.js
//                ^                    ^^   punctuation.terminator.statement.js
//                 ^                     ^  meta.brace.curly.switchEnd.js

x:; x:y:;
// <- constant.other.object.key.js string.unquoted.js
 // <- punctuation.separator.key-value.js
//  ^ ^    constant.other.object.key.js
//  ^ ^    string.unquoted.js
//   ^ ^   punctuation.separator.key-value.js
//^     ^  punctuation.terminator.statement.js

try { throw 0; }catch(x){}
// <- keyword.control.trycatch.js
 // <- keyword.control.trycatch.js
//^   ^^^^^     ^^^^^       keyword.control.trycatch.js
//  ^          ^        ^^  meta.brace.curly.js
//          ^               constant.numeric.js
//           ^              punctuation.terminator.statement.js
//                   ^ ^    meta.brace.round.js
//                    ^     variable.other.readwrite.js

try{}catch(x){}
// <- keyword.control.trycatch.js
 // <- keyword.control.trycatch.js
//^  ^^^^^       keyword.control.trycatch.js
// ^^        ^^  meta.brace.curly.js
//        ^ ^    meta.brace.round.js
//         ^     variable.other.readwrite.js
try{}finally{}
// <- keyword.control.trycatch.js
 // <- keyword.control.trycatch.js
//^  ^^^^^^^    keyword.control.trycatch.js
// ^^       ^^  meta.brace.curly.js
try{}catch(x){}finally{}
// <- keyword.control.trycatch.js
 // <- keyword.control.trycatch.js
//^  ^^^^^     ^^^^^^^    keyword.control.trycatch.js
// ^^        ^^       ^^  meta.brace.curly.js
//        ^ ^             meta.brace.round.js
//         ^              variable.other.readwrite.js

debugger;
// <- keyword.other.js
 // <- keyword.other.js
//^^^^^^   keyword.other.js
//      ^  punctuation.terminator.statement.js

function f2(){}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^  meta.function.js
//^^^^^^         storage.type.function.js
//       ^^      entity.name.function.js
//         ^     punctuation.definition.parameters.begin.js
//         ^^    meta.brace.round.js
//          ^    punctuation.definition.parameters.end.js
//           ^^  meta.brace.curly.js
function f3(x){}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^  meta.function.js
//^^^^^^          storage.type.function.js
//       ^^       entity.name.function.js
//         ^      punctuation.definition.parameters.begin.js
//         ^ ^    meta.brace.round.js
//          ^     meta.function.parameters.js
//          ^     variable.other.readwrite.js
//           ^    punctuation.definition.parameters.end.js
//            ^^  meta.brace.curly.js
function f4(x,y){}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^^^^  meta.function.js
//^^^^^^            storage.type.function.js
//       ^^         entity.name.function.js
//         ^        punctuation.definition.parameters.begin.js
//         ^   ^    meta.brace.round.js
//          ^^^     meta.function.parameters.js
//          ^ ^     variable.other.readwrite.js
//           ^      meta.delimiter.comma.js
//             ^    punctuation.definition.parameters.end.js
//              ^^  meta.brace.curly.js
function f5(){ function f6(){} }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^ ^^^^^^^^ ^^^^^^ ^  meta.function.js
//^^^^^^       ^^^^^^^^           storage.type.function.js
//       ^^             ^^        entity.name.function.js
//         ^              ^       punctuation.definition.parameters.begin.js
//         ^^             ^^      meta.brace.round.js
//          ^              ^      punctuation.definition.parameters.end.js
//           ^              ^^ ^  meta.brace.curly.js
{ function f7(){} };
// <- meta.brace.curly.js
//             ^^ ^   meta.brace.curly.js
//^^^^^^^^ ^^^^^^     meta.function.js
//^^^^^^^^            storage.type.function.js
//         ^^         entity.name.function.js
//           ^        punctuation.definition.parameters.begin.js
//           ^^       meta.brace.round.js
//            ^       punctuation.definition.parameters.end.js
//                 ^  punctuation.terminator.statement.js
for (;0;) +function f8(){}; 0
// <- meta.for.js keyword.control.loop.js
 // <- meta.for.js keyword.control.loop.js
//^ ^^^^^                      meta.for.js
//^                            keyword.control.loop.js
//  ^   ^             ^^       meta.brace.round.js
//   ^ ^                  ^    punctuation.terminator.statement.js
//    ^                     ^  constant.numeric.js
//        ^                    keyword.operator.arithmetic.js
//         ^^^^^^^^ ^^^^^^     meta.function.js
//         ^^^^^^^^            storage.type.function.js
//                  ^^         entity.name.function.js
//                    ^        punctuation.definition.parameters.begin.js
//                     ^       punctuation.definition.parameters.end.js
//                      ^^     meta.brace.curly.js
do +function f9(){}; while(0)
// <- keyword.control.loop.js
 // <- keyword.control.loop.js
//                   ^^^^^     keyword.control.loop.js
// ^                           keyword.operator.arithmetic.js
//  ^^^^^^^^ ^^^^^^            meta.function.js
//  ^^^^^^^^                   storage.type.function.js
//           ^^                entity.name.function.js
//             ^               punctuation.definition.parameters.begin.js
//             ^^         ^ ^  meta.brace.round.js
//              ^              punctuation.definition.parameters.end.js
//               ^^            meta.brace.curly.js
//                 ^           punctuation.terminator.statement.js
//                         ^   constant.numeric.js

function f10(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k){}
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^^^  meta.function.js
//^^^^^^                                                                       storage.type.function.js
//       ^^^                                                                   entity.name.function.js
//          ^                                                                  punctuation.definition.parameters.begin.js
//          ^                                                             ^    meta.brace.round.js
//           ^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^     meta.function.parameters.js
//           ^  ^       ^   ^                    ^  ^         ^                variable.other.readwrite.js
//            ^      ^   ^^      ^      ^   ^     ^      ^          ^          meta.delimiter.comma.js
//                ^           ^                       ^         ^              keyword.operator.assignment.js
//                  ^           ^                       ^         ^            constant.numeric.js
//                     ^                                                       meta.brace.square.open.flowtype
//                                 ^^^                                ^^^      keyword.operator.spread.js
//                                    ^                                  ^     meta.property.object.js
//                                    ^                                  ^     variable.other.property.js
//                                     ^                                       meta.brace.square.end.flowtype
//                                        ^                        ^           meta.brace.curly.litobj.js
//                                         ^                                   variable.other.readwrite.shorthandpropertyname.js
//                                            ^            ^                   constant.other.object.key.js
//                                            ^            ^                   string.unquoted.js
//                                             ^            ^                  punctuation.separator.key-value.js
//                                                                        ^    punctuation.definition.parameters.end.js
//                                                                         ^^  meta.brace.curly.js
function f11(){ "use strict" }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^ ^^^^^^^ ^  meta.function.js
//^^^^^^                        storage.type.function.js
//       ^^^                    entity.name.function.js
//          ^                   punctuation.definition.parameters.begin.js
//          ^^                  meta.brace.round.js
//           ^                  punctuation.definition.parameters.end.js
//            ^              ^  meta.brace.curly.js
//              ^^^^ ^^^^^^^    string.quoted.double.js
//              ^               punctuation.definition.string.begin.js
//                         ^    punctuation.definition.string.end.js
function f12(){ 'use strict' }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^ ^^^^^^^ ^  meta.function.js
//^^^^^^                        storage.type.function.js
//       ^^^                    entity.name.function.js
//          ^                   punctuation.definition.parameters.begin.js
//          ^^                  meta.brace.round.js
//           ^                  punctuation.definition.parameters.end.js
//            ^              ^  meta.brace.curly.js
//              ^^^^ ^^^^^^^    string.quoted.single.js
//              ^               punctuation.definition.string.begin.js
//                         ^    punctuation.definition.string.end.js
function f13(){ "other directive" }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^ ^^^^^^^^^^ ^  meta.function.js
//^^^^^^                             storage.type.function.js
//       ^^^                         entity.name.function.js
//          ^                        punctuation.definition.parameters.begin.js
//          ^^                       meta.brace.round.js
//           ^                       punctuation.definition.parameters.end.js
//            ^                   ^  meta.brace.curly.js
//              ^^^^^^ ^^^^^^^^^^    string.quoted.double.js
//              ^                    punctuation.definition.string.begin.js
//                              ^    punctuation.definition.string.end.js
function f14(){ 'other directive' }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^ ^^^^^^^^^^ ^  meta.function.js
//^^^^^^                             storage.type.function.js
//       ^^^                         entity.name.function.js
//          ^                        punctuation.definition.parameters.begin.js
//          ^^                       meta.brace.round.js
//           ^                       punctuation.definition.parameters.end.js
//            ^                   ^  meta.brace.curly.js
//              ^^^^^^ ^^^^^^^^^^    string.quoted.single.js
//              ^                    punctuation.definition.string.begin.js
//                              ^    punctuation.definition.string.end.js
function f15(){ ("string") }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^^^^ ^  meta.function.js
//^^^^^^                      storage.type.function.js
//       ^^^                  entity.name.function.js
//          ^                 punctuation.definition.parameters.begin.js
//          ^^  ^        ^    meta.brace.round.js
//           ^                punctuation.definition.parameters.end.js
//            ^            ^  meta.brace.curly.js
//               ^^^^^^^^     string.quoted.double.js
//               ^            punctuation.definition.string.begin.js
//                      ^     punctuation.definition.string.end.js
function f16(){ ('string') }
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^ ^^^^^^^^^^ ^  meta.function.js
//^^^^^^                      storage.type.function.js
//       ^^^                  entity.name.function.js
//          ^                 punctuation.definition.parameters.begin.js
//          ^^  ^        ^    meta.brace.round.js
//           ^                punctuation.definition.parameters.end.js
//            ^            ^  meta.brace.curly.js
//               ^^^^^^^^     string.quoted.single.js
//               ^            punctuation.definition.string.begin.js
//                      ^     punctuation.definition.string.end.js
function f17(){
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^ ^^^^^^  meta.function.js
//^^^^^^         storage.type.function.js
//       ^^^     entity.name.function.js
//          ^    punctuation.definition.parameters.begin.js
//          ^^   meta.brace.round.js
//           ^   punctuation.definition.parameters.end.js
//            ^  meta.brace.curly.js
  'string'
//^^^^^^^^  meta.function.js
//^^^^^^^^  string.quoted.single.js
//^         punctuation.definition.string.begin.js
//       ^  punctuation.definition.string.end.js
  +0
//^^  meta.function.js
//^^  constant.numeric.js
}
// <- meta.function.js meta.brace.curly.js

function*g0(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k){
// <- meta.function.js storage.type.function.js
 // <- meta.function.js storage.type.function.js
//^^^^^^^^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^^  meta.function.js
//^^^^^^                                                                     storage.type.function.js
//      ^                                                                    keyword.generator.asterisk.js
//       ^^                                                                  entity.name.function.js
//         ^                                                                 punctuation.definition.parameters.begin.js
//         ^                                                             ^   meta.brace.round.js
//          ^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^    meta.function.parameters.js
//          ^  ^       ^   ^                    ^  ^         ^               variable.other.readwrite.js
//           ^      ^   ^^      ^      ^   ^     ^      ^          ^         meta.delimiter.comma.js
//               ^           ^                       ^         ^             keyword.operator.assignment.js
//                 ^           ^                       ^         ^           constant.numeric.js
//                    ^                                                      meta.brace.square.open.flowtype
//                                ^^^                                ^^^     keyword.operator.spread.js
//                                   ^                                  ^    meta.property.object.js
//                                   ^                                  ^    variable.other.property.js
//                                    ^                                      meta.brace.square.end.flowtype
//                                       ^                        ^          meta.brace.curly.litobj.js
//                                        ^                                  variable.other.readwrite.shorthandpropertyname.js
//                                           ^            ^                  constant.other.object.key.js
//                                           ^            ^                  string.unquoted.js
//                                            ^            ^                 punctuation.separator.key-value.js
//                                                                       ^   punctuation.definition.parameters.end.js
//                                                                        ^  meta.brace.curly.js
  return a = yield* b = yield c = yield yield;
//^^^^^^ ^ ^ ^^^^^^ ^ ^ ^^^^^ ^ ^ ^^^^^ ^^^^^^  meta.function.js
//^^^^^^     ^^^^^      ^^^^^     ^^^^^ ^^^^^   keyword.control.flow.js
//       ^          ^         ^                 variable.other.readwrite.js
//         ^          ^         ^               keyword.operator.assignment.js
//                ^                             keyword.generator.asterisk.js
//                                           ^  punctuation.terminator.statement.js
}
// <- meta.function.js meta.brace.curly.js
(function * g1(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k){
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//            ^                                                             ^   meta.brace.round.js
//^^^^^^^ ^ ^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^^  meta.function.js
//^^^^^^^                                                                       storage.type.function.js
//        ^                                                                     keyword.generator.asterisk.js
//          ^^                                                                  entity.name.function.js
//            ^                                                                 punctuation.definition.parameters.begin.js
//             ^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^    meta.function.parameters.js
//             ^  ^       ^   ^                    ^  ^         ^               variable.other.readwrite.js
//              ^      ^   ^^      ^      ^   ^     ^      ^          ^         meta.delimiter.comma.js
//                  ^           ^                       ^         ^             keyword.operator.assignment.js
//                    ^           ^                       ^         ^           constant.numeric.js
//                       ^                                                      meta.brace.square.open.flowtype
//                                   ^^^                                ^^^     keyword.operator.spread.js
//                                      ^                                  ^    meta.property.object.js
//                                      ^                                  ^    variable.other.property.js
//                                       ^                                      meta.brace.square.end.flowtype
//                                          ^                        ^          meta.brace.curly.litobj.js
//                                           ^                                  variable.other.readwrite.shorthandpropertyname.js
//                                              ^            ^                  constant.other.object.key.js
//                                              ^            ^                  string.unquoted.js
//                                               ^            ^                 punctuation.separator.key-value.js
//                                                                          ^   punctuation.definition.parameters.end.js
//                                                                           ^  meta.brace.curly.js
  return a = yield* b = yield c = yield yield;
//^^^^^^ ^ ^ ^^^^^^ ^ ^ ^^^^^ ^ ^ ^^^^^ ^^^^^^  meta.function.js
//^^^^^^     ^^^^^      ^^^^^     ^^^^^ ^^^^^   keyword.control.flow.js
//       ^          ^         ^                 variable.other.readwrite.js
//         ^          ^         ^               keyword.operator.assignment.js
//                ^                             keyword.generator.asterisk.js
//                                           ^  punctuation.terminator.statement.js
})
// <- meta.function.js meta.brace.curly.js
 // <- meta.brace.round.js

(function(){});
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//       ^^  ^   meta.brace.round.js
//^^^^^^^^^^^    meta.function.js
//^^^^^^^        storage.type.function.js
//       ^       punctuation.definition.parameters.begin.js
//        ^      punctuation.definition.parameters.end.js
//         ^^    meta.brace.curly.js
//            ^  punctuation.terminator.statement.js
(function(x){});
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//       ^ ^  ^   meta.brace.round.js
//^^^^^^^^^^^^    meta.function.js
//^^^^^^^         storage.type.function.js
//       ^        punctuation.definition.parameters.begin.js
//        ^       meta.function.parameters.js
//        ^       variable.other.readwrite.js
//         ^      punctuation.definition.parameters.end.js
//          ^^    meta.brace.curly.js
//             ^  punctuation.terminator.statement.js
(function(x,y){});
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//       ^   ^  ^   meta.brace.round.js
//^^^^^^^^^^^^^^    meta.function.js
//^^^^^^^           storage.type.function.js
//       ^          punctuation.definition.parameters.begin.js
//        ^^^       meta.function.parameters.js
//        ^ ^       variable.other.readwrite.js
//         ^        meta.delimiter.comma.js
//           ^      punctuation.definition.parameters.end.js
//            ^^    meta.brace.curly.js
//               ^  punctuation.terminator.statement.js
(function(){ function f(){} });
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//       ^^            ^^    ^   meta.brace.round.js
//^^^^^^^^^^ ^^^^^^^^ ^^^^^ ^    meta.function.js
//^^^^^^^    ^^^^^^^^            storage.type.function.js
//       ^             ^         punctuation.definition.parameters.begin.js
//        ^             ^        punctuation.definition.parameters.end.js
//         ^             ^^ ^    meta.brace.curly.js
//                    ^          entity.name.function.js
//                            ^  punctuation.terminator.statement.js
(function f(){});
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//         ^^  ^   meta.brace.round.js
//^^^^^^^ ^^^^^    meta.function.js
//^^^^^^^          storage.type.function.js
//        ^        entity.name.function.js
//         ^       punctuation.definition.parameters.begin.js
//          ^      punctuation.definition.parameters.end.js
//           ^^    meta.brace.curly.js
//              ^  punctuation.terminator.statement.js
(function f(x){});
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//         ^ ^  ^   meta.brace.round.js
//^^^^^^^ ^^^^^^    meta.function.js
//^^^^^^^           storage.type.function.js
//        ^         entity.name.function.js
//         ^        punctuation.definition.parameters.begin.js
//          ^       meta.function.parameters.js
//          ^       variable.other.readwrite.js
//           ^      punctuation.definition.parameters.end.js
//            ^^    meta.brace.curly.js
//               ^  punctuation.terminator.statement.js
(function f(x,y){});
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//         ^   ^  ^   meta.brace.round.js
//^^^^^^^ ^^^^^^^^    meta.function.js
//^^^^^^^             storage.type.function.js
//        ^           entity.name.function.js
//         ^          punctuation.definition.parameters.begin.js
//          ^^^       meta.function.parameters.js
//          ^ ^       variable.other.readwrite.js
//           ^        meta.delimiter.comma.js
//             ^      punctuation.definition.parameters.end.js
//              ^^    meta.brace.curly.js
//                 ^  punctuation.terminator.statement.js
(function f(){ function f(){} });
// <- meta.brace.round.js
 // <- meta.function.js storage.type.function.js
//         ^^            ^^    ^   meta.brace.round.js
//^^^^^^^ ^^^^ ^^^^^^^^ ^^^^^ ^    meta.function.js
//^^^^^^^      ^^^^^^^^            storage.type.function.js
//        ^             ^          entity.name.function.js
//         ^             ^         punctuation.definition.parameters.begin.js
//          ^             ^        punctuation.definition.parameters.end.js
//           ^             ^^ ^    meta.brace.curly.js
//                              ^  punctuation.terminator.statement.js

() => 0;
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.brace.round.js punctuation.definition.parameters.end.js
// ^^     meta.function.arrow.js
// ^^     storage.type.function.arrow.js
//    ^   constant.numeric.js
//     ^  punctuation.terminator.statement.js
() => {;}
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.brace.round.js punctuation.definition.parameters.end.js
// ^^ ^^^  meta.function.arrow.js
// ^^      storage.type.function.arrow.js
//    ^ ^  meta.brace.curly.js
//     ^   punctuation.terminator.statement.js
x => x
// <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^^    meta.function.arrow.js
//   ^  variable.other.readwrite.js
//^^    storage.type.function.arrow.js
x => x = 0
// <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^^        meta.function.arrow.js
//   ^      variable.other.readwrite.js
//^^        storage.type.function.arrow.js
//     ^    keyword.operator.assignment.js
//       ^  constant.numeric.js
x => y => x
// <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^^ ^ ^^    meta.function.arrow.js
//   ^       meta.function.parameters.js
//   ^    ^  variable.other.readwrite.js
//^^   ^^    storage.type.function.arrow.js
x => {x}
// <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^^      meta.function.arrow.js
//    ^   variable.other.readwrite.js
//^^      storage.type.function.arrow.js
//   ^ ^  meta.brace.curly.js
x => ({x});
// <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^^         meta.function.arrow.js
//^^         storage.type.function.arrow.js
//   ^   ^   meta.brace.round.js
//    ^ ^    meta.brace.curly.litobj.js
//     ^     variable.other.readwrite.shorthandpropertyname.js
//        ^  punctuation.terminator.statement.js
(x) => x;
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^ ^^     meta.function.arrow.js
//^        meta.brace.round.js
//     ^   variable.other.readwrite.js
//^        punctuation.definition.parameters.end.js
//  ^^     storage.type.function.arrow.js
//      ^  punctuation.terminator.statement.js
(x) => {return x};
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^ ^^ ^^^^^^^ ^^   meta.function.arrow.js
//^                 meta.brace.round.js
//             ^    variable.other.readwrite.js
//^                 punctuation.definition.parameters.end.js
//  ^^              storage.type.function.arrow.js
//     ^        ^   meta.brace.curly.js
//      ^^^^^^      keyword.control.flow.js
//               ^  punctuation.terminator.statement.js
(x) => ({x});
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^ ^^         meta.function.arrow.js
//^    ^   ^   meta.brace.round.js
//^            punctuation.definition.parameters.end.js
//  ^^         storage.type.function.arrow.js
//      ^ ^    meta.brace.curly.litobj.js
//       ^     variable.other.readwrite.shorthandpropertyname.js
//          ^  punctuation.terminator.statement.js
({x}) => ({x});
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.function.parameters.js meta.brace.curly.litobj.js
//^^^ ^^         meta.function.arrow.js
//  ^    ^   ^   meta.brace.round.js
//^^             meta.function.parameters.js
// ^      ^ ^    meta.brace.curly.litobj.js
//^        ^     variable.other.readwrite.shorthandpropertyname.js
//  ^            punctuation.definition.parameters.end.js
//    ^^         storage.type.function.arrow.js
//            ^  punctuation.terminator.statement.js
(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k) => {;};
// <- meta.function.arrow.js punctuation.definition.parameters.begin.js meta.brace.round.js
 // <- meta.function.arrow.js meta.function.parameters.js variable.other.readwrite.js
//^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^ ^^ ^^^   meta.function.arrow.js
//                                                            ^          meta.brace.round.js
//^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^           meta.function.parameters.js
//  ^       ^   ^                    ^  ^         ^                      variable.other.readwrite.js
//^      ^   ^^      ^      ^   ^     ^      ^          ^                meta.delimiter.comma.js
//    ^           ^                       ^         ^                    keyword.operator.assignment.js
//      ^           ^                       ^         ^                  constant.numeric.js
//         ^                                                             meta.brace.square.open.flowtype
//                     ^^^                                ^^^            keyword.operator.spread.js
//                        ^                                  ^           meta.property.object.js
//                        ^                                  ^           variable.other.property.js
//                         ^                                             meta.brace.square.end.flowtype
//                            ^                        ^                 meta.brace.curly.litobj.js
//                             ^                                         variable.other.readwrite.shorthandpropertyname.js
//                                ^            ^                         constant.other.object.key.js
//                                ^            ^                         string.unquoted.js
//                                 ^            ^                        punctuation.separator.key-value.js
//                                                            ^          punctuation.definition.parameters.end.js
//                                                              ^^       storage.type.function.arrow.js
//                                                                 ^ ^   meta.brace.curly.js
//                                                                  ^ ^  punctuation.terminator.statement.js

[a] = [...[0]];
// <- meta.brace.square.js
 // <- variable.other.readwrite.js
//^   ^   ^ ^^   meta.brace.square.js
//  ^            keyword.operator.assignment.js
//     ^^^       keyword.operator.spread.js
//         ^     constant.numeric.js
//            ^  punctuation.terminator.statement.js
({a} = {});
// <- meta.brace.round.js
 // <- meta.brace.curly.litobj.js
//       ^   meta.brace.round.js
// ^   ^^    meta.brace.curly.litobj.js
//^          variable.other.readwrite.shorthandpropertyname.js
//   ^       keyword.operator.assignment.js
//        ^  punctuation.terminator.statement.js
try{}catch([e]){}
// <- keyword.control.trycatch.js
 // <- keyword.control.trycatch.js
//^  ^^^^^         keyword.control.trycatch.js
// ^^          ^^  meta.brace.curly.js
//        ^   ^    meta.brace.round.js
//         ^ ^     meta.brace.square.js
//          ^      variable.other.readwrite.js
try{}catch({e}){}
// <- keyword.control.trycatch.js
 // <- keyword.control.trycatch.js
//^  ^^^^^         keyword.control.trycatch.js
// ^^          ^^  meta.brace.curly.js
//        ^   ^    meta.brace.round.js
//         ^ ^     meta.brace.curly.litobj.js
//          ^      variable.other.readwrite.shorthandpropertyname.js

class A {}
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^       meta.class.js
//^^^       storage.type.class.js
//    ^     entity.name.class.js
//      ^   punctuation.section.class.begin.js
//       ^  punctuation.section.class.end.js
class B extends new A {
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                    meta.class.js
//^^^                    storage.type.class.js
//    ^         ^^^ ^    entity.name.class.js
//      ^^^^^^^          meta.class.extends.js
//      ^^^^^^^          storage.type.extends.js
//                    ^  punctuation.section.class.begin.js
  constructor(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k) {
//^^^^^^^^^^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^ ^  meta.class.body.js
//^^^^^^^^^^^^^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^ ^  meta.function.method.js
//^^^^^^^^^^^                                                                   entity.name.function.method.js
//           ^                                                                  punctuation.definition.parameters.begin.js
//           ^                                                             ^    meta.brace.round.js
//            ^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^     meta.function.parameters.js
//            ^  ^       ^   ^                    ^  ^         ^                variable.other.readwrite.js
//             ^      ^   ^^      ^      ^   ^     ^      ^          ^          meta.delimiter.comma.js
//                 ^           ^                       ^         ^              keyword.operator.assignment.js
//                   ^           ^                       ^         ^            constant.numeric.js
//                      ^                                                       meta.brace.square.open.flowtype
//                                  ^^^                                ^^^      keyword.operator.spread.js
//                                     ^                                  ^     meta.property.object.js
//                                     ^                                  ^     variable.other.property.js
//                                      ^                                       meta.brace.square.end.flowtype
//                                         ^                        ^           meta.brace.curly.litobj.js
//                                          ^                                   variable.other.readwrite.shorthandpropertyname.js
//                                             ^            ^                   constant.other.object.key.js
//                                             ^            ^                   string.unquoted.js
//                                              ^            ^                  punctuation.separator.key-value.js
//                                                                         ^    punctuation.definition.parameters.end.js
//                                                                           ^  meta.brace.curly.js
    super(new.target);
//  ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^^^^^^^^^^^^^^   meta.function-call.with-arguments.js
//  ^^^^^               entity.name.function.js
//       ^          ^   meta.brace.round.js
//        ^^^           keyword.operator.js
//           ^          keyword.operator.accessor.js
//            ^^^^^^    meta.property.object.js
//            ^^^^^^    variable.other.property.js
//                   ^  punctuation.terminator.statement.js
    super()`template`;
//  ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^^^^             meta.function-call.without-arguments.js
//  ^^^^^               entity.name.function.js
//       ^^             meta.brace.round.js
//         ^^^^^^^^^^   string.quasi.js
//         ^^^^^^^^^^   string.quoted.template.js
//         ^            punctuation.definition.quasi.begin.js
//                  ^   punctuation.definition.quasi.end.js
//                   ^  punctuation.terminator.statement.js
    () => super(this);
//  ^^ ^^ ^^^^^^^^^^^^  meta.class.body.js
//  ^^ ^^ ^^^^^^^^^^^^  meta.function.method.js
//  ^^ ^^               meta.function.arrow.js
//  ^                   punctuation.definition.parameters.begin.js
//  ^^         ^    ^   meta.brace.round.js
//   ^                  punctuation.definition.parameters.end.js
//     ^^               storage.type.function.arrow.js
//        ^^^^^^^^^^^   meta.function-call.with-arguments.js
//        ^^^^^         entity.name.function.js
//              ^^^^    variable.language.this.js
//                   ^  punctuation.terminator.statement.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js
m(a, b = 0, [c,, d = 0, ...e], {f, g: h, i = 0, i: j = 0}, ...k) {
// <- meta.class.body.js meta.function.method.js entity.name.function.method.js
 // <- meta.class.body.js meta.function.method.js punctuation.definition.parameters.begin.js meta.brace.round.js
//^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^ ^  meta.class.body.js
//^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^^ ^  meta.function.method.js
//                                                             ^    meta.brace.round.js
//^^ ^ ^ ^^ ^^^^ ^ ^ ^^ ^^^^^^ ^^^ ^^ ^^ ^ ^ ^^ ^^ ^ ^ ^^^ ^^^^     meta.function.parameters.js
//^  ^       ^   ^                    ^  ^         ^                variable.other.readwrite.js
// ^      ^   ^^      ^      ^   ^     ^      ^          ^          meta.delimiter.comma.js
//     ^           ^                       ^         ^              keyword.operator.assignment.js
//       ^           ^                       ^         ^            constant.numeric.js
//          ^                                                       meta.brace.square.open.flowtype
//                      ^^^                                ^^^      keyword.operator.spread.js
//                         ^                                  ^     meta.property.object.js
//                         ^                                  ^     variable.other.property.js
//                          ^                                       meta.brace.square.end.flowtype
//                             ^                        ^           meta.brace.curly.litobj.js
//                              ^                                   variable.other.readwrite.shorthandpropertyname.js
//                                 ^            ^                   constant.other.object.key.js
//                                 ^            ^                   string.unquoted.js
//                                  ^            ^                  punctuation.separator.key-value.js
//                                                             ^    punctuation.definition.parameters.end.js
//                                                               ^  meta.brace.curly.js
    super.m();
//  ^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^  meta.function.method.js
//  ^^^^^       variable.language.super.js
//       ^      keyword.operator.accessor.js
//        ^^^   meta.method-call.without-arguments.js
//        ^     entity.name.function.js
//         ^^   meta.brace.round.js
//           ^  punctuation.terminator.statement.js
    super.m`template`;
//  ^^^^^^^^^^^^^^^^^^  meta.class.body.js
//  ^^^^^^^^^^^^^^^^^^  meta.function.method.js
//  ^^^^^               variable.language.super.js
//       ^              keyword.operator.accessor.js
//        ^^^^^^^^^^^   string.quasi.js
//        ^             entity.name.tag.js
//         ^^^^^^^^^^   string.quoted.template.js
//         ^            punctuation.definition.quasi.begin.js
//                  ^   punctuation.definition.quasi.end.js
//                   ^  punctuation.terminator.statement.js
    () => super.m(this);
//  ^^ ^^ ^^^^^^^^^^^^^^  meta.class.body.js
//  ^^ ^^ ^^^^^^^^^^^^^^  meta.function.method.js
//  ^^ ^^                 meta.function.arrow.js
//  ^                     punctuation.definition.parameters.begin.js
//  ^^           ^    ^   meta.brace.round.js
//   ^                    punctuation.definition.parameters.end.js
//     ^^                 storage.type.function.arrow.js
//        ^^^^^           variable.language.super.js
//             ^          keyword.operator.accessor.js
//              ^^^^^^^   meta.method-call.with-arguments.js
//              ^         entity.name.function.js
//                ^^^^    variable.language.this.js
//                     ^  punctuation.terminator.statement.js
  }
//^  meta.class.body.js
//^  meta.function.method.js
//^  meta.brace.curly.js

  ;
//^  meta.class.body.js
//^  punctuation.terminator.statement.js

  static a(){} static 'b'(){} static 0(){} static [0](){}
//^^^^^^ ^^^^^ ^^^^^^ ^^^^^^^ ^^^^^^ ^^^^^ ^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^ ^^^^^^ ^^^^^^^              ^^^^^^ ^^^^^^^  meta.function.method.js
//^^^^^^       ^^^^^^         ^^^^^^       ^^^^^^          storage.modifier.js
//       ^            ^^^                                  entity.name.function.method.js
//        ^              ^                           ^     punctuation.definition.parameters.begin.js
//        ^^             ^^           ^^             ^^    meta.brace.round.js
//         ^              ^                           ^    punctuation.definition.parameters.end.js
//          ^^             ^^           ^^             ^^  meta.brace.curly.js
//                                   ^             ^       constant.numeric.js
//                                                ^ ^      meta.brace.square.js
  static *c(){ yield; } static *"d"() { yield; } static *1(){ yield; } static *[1](){ yield; }
//^^^^^^ ^^^^^ ^^^^^^ ^ ^^^^^^ ^^^^^^ ^ ^^^^^^ ^ ^^^^^^ ^^^^^ ^^^^^^ ^ ^^^^^^ ^^^^^^^ ^^^^^^ ^  meta.class.body.js
//^^^^^^ ^^^^^ ^^^^^^ ^ ^^^^^^ ^^^^^^ ^ ^^^^^^ ^                       ^^^^^^ ^^^^^^^ ^^^^^^ ^  meta.function.method.js
//^^^^^^                ^^^^^^                   ^^^^^^                ^^^^^^                   storage.modifier.js
//       ^                     ^                                              ^                 keyword.generator.asterisk.js
//        ^                     ^^^                                                             entity.name.function.method.js
//         ^                       ^                                              ^             punctuation.definition.parameters.begin.js
//         ^^                      ^^                     ^^                      ^^            meta.brace.round.js
//          ^                       ^                                              ^            punctuation.definition.parameters.end.js
//           ^        ^               ^        ^            ^        ^              ^        ^  meta.brace.curly.js
//             ^^^^^                    ^^^^^                 ^^^^^                   ^^^^^     keyword.control.flow.js
//                  ^                        ^                     ^                       ^    punctuation.terminator.statement.js
//                                                      ^                                       keyword.operator.arithmetic.js
//                                                       ^                      ^               constant.numeric.js
//                                                                             ^ ^              meta.brace.square.js
  static var(){} static *in(){}
//^^^^^^ ^^^^^^^ ^^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^^ ^^^^^^^ ^^^^^^ ^^^^^^^  meta.function.method.js
//^^^^^^         ^^^^^^          storage.modifier.js
//       ^^^             ^^      entity.name.function.method.js
//          ^              ^     punctuation.definition.parameters.begin.js
//          ^^             ^^    meta.brace.round.js
//           ^              ^    punctuation.definition.parameters.end.js
//            ^^             ^^  meta.brace.curly.js
//                      ^        keyword.generator.asterisk.js

  static get e(){} static get 'f'(){} static get 2(){} static get [2](){}
//^^^^^^ ^^^ ^^^^^ ^^^^^^ ^^^ ^^^^^^^ ^^^^^^ ^^^ ^^^^^ ^^^^^^ ^^^ ^^^^^^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^ ^^^^^^ ^^^ ^^^^^                    ^^^^^^ ^^^ ^^^^^    meta.accessor.js
//^^^^^^           ^^^^^^             ^^^^^^           ^^^^^^              storage.modifier.js
//       ^^^              ^^^                                 ^^^          storage.type.accessor.js
//           ^                                                             entity.name.function.accessor.js
//            ^                  ^                                   ^     punctuation.definition.parameters.begin.js
//            ^^                 ^^               ^^                 ^^    meta.brace.round.js
//             ^                  ^                                   ^    punctuation.definition.parameters.end.js
//              ^^                 ^^               ^^                 ^^  meta.brace.curly.js
//                            ^^^                                          string.quoted.single.js
//                            ^                                            punctuation.definition.string.begin.js
//                              ^                                          punctuation.definition.string.end.js
//                                           ^^^                           variable.other.readwrite.js
//                                               ^                 ^       constant.numeric.js
//                                                                ^        meta.brace.square.open.flowtype
//                                                                  ^      meta.brace.square.end.flowtype
  static set g(a){} static set "h"(a){} static set 3(a){} static set [3](a){}
//^^^^^^ ^^^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^^^ ^^^^^^ ^^^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^                     ^^^^^^ ^^^ ^^^^^^    meta.accessor.js
//^^^^^^            ^^^^^^              ^^^^^^            ^^^^^^               storage.modifier.js
//       ^^^               ^^^                                   ^^^           storage.type.accessor.js
//           ^                                                                 entity.name.function.accessor.js
//            ^                   ^                                     ^      punctuation.definition.parameters.begin.js
//            ^ ^                 ^ ^               ^ ^                 ^ ^    meta.brace.round.js
//             ^                   ^                                     ^     meta.function.parameters.js
//             ^                   ^           ^^^   ^                   ^     variable.other.readwrite.js
//              ^                   ^                                     ^    punctuation.definition.parameters.end.js
//               ^^                  ^^                ^^                  ^^  meta.brace.curly.js
//                             ^^^                                             string.quoted.double.js
//                             ^                                               punctuation.definition.string.begin.js
//                               ^                                             punctuation.definition.string.end.js
//                                                 ^                  ^        constant.numeric.js
//                                                                   ^         meta.brace.square.open.flowtype
//                                                                     ^       meta.brace.square.end.flowtype
  static get if(){} static set if(a){}
//^^^^^^ ^^^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^^  meta.class.body.js
//^^^^^^ ^^^ ^^^^^^ ^^^^^^ ^^^ ^^^^^^^  meta.accessor.js
//^^^^^^            ^^^^^^              storage.modifier.js
//       ^^^               ^^^          storage.type.accessor.js
//           ^^                ^^       entity.name.function.accessor.js
//             ^                 ^      punctuation.definition.parameters.begin.js
//             ^^                ^ ^    meta.brace.round.js
//              ^                  ^    punctuation.definition.parameters.end.js
//               ^^                 ^^  meta.brace.curly.js
//                                ^     meta.function.parameters.js
//                                ^     variable.other.readwrite.js

  a(){} 'b'(){} 0(){} [0](){}
//^^^^^ ^^^^^^^ ^^^^^ ^^^^^^^  meta.class.body.js
//^^^^^ ^^^^^^^       ^^^^^^^  meta.function.method.js
//^     ^^^                    entity.name.function.method.js
// ^       ^             ^     punctuation.definition.parameters.begin.js
// ^^      ^^    ^^      ^^    meta.brace.round.js
//  ^       ^             ^    punctuation.definition.parameters.end.js
//   ^^      ^^    ^^      ^^  meta.brace.curly.js
//              ^      ^       constant.numeric.js
//                    ^ ^      meta.brace.square.js
  *c(){ yield; } *"d"(){ yield; } *1(){ yield; } *[1](){ yield; }
//^^^^^ ^^^^^^ ^ ^^^^^^^ ^^^^^^ ^ ^^^^^ ^^^^^^ ^ ^^^^^^^ ^^^^^^ ^  meta.class.body.js
//^^^^^ ^^^^^^ ^ ^^^^^^^ ^^^^^^ ^                ^^^^^^^ ^^^^^^ ^  meta.function.method.js
//^              ^                               ^                 keyword.generator.asterisk.js
// ^              ^^^                                              entity.name.function.method.js
//  ^                ^                               ^             punctuation.definition.parameters.begin.js
//  ^^               ^^             ^^               ^^            meta.brace.round.js
//   ^                ^                               ^            punctuation.definition.parameters.end.js
//    ^        ^       ^        ^     ^        ^       ^        ^  meta.brace.curly.js
//      ^^^^^            ^^^^^          ^^^^^            ^^^^^     keyword.control.flow.js
//           ^                ^              ^                ^    punctuation.terminator.statement.js
//                                ^                                keyword.operator.arithmetic.js
//                                 ^               ^               constant.numeric.js
//                                                ^ ^              meta.brace.square.js
  var(){} *in(){ yield; }
//^^^^^^^ ^^^^^^ ^^^^^^ ^  meta.class.body.js
//^^^^^^^ ^^^^^^ ^^^^^^ ^  meta.function.method.js
//^^^      ^^              entity.name.function.method.js
//   ^       ^             punctuation.definition.parameters.begin.js
//   ^^      ^^            meta.brace.round.js
//    ^       ^            punctuation.definition.parameters.end.js
//     ^^      ^        ^  meta.brace.curly.js
//        ^                keyword.generator.asterisk.js
//               ^^^^^     keyword.control.flow.js
//                    ^    punctuation.terminator.statement.js

  get e(){} get 'f'(){} get 2(){} get [2](){}
//^^^ ^^^^^ ^^^ ^^^^^^^ ^^^ ^^^^^ ^^^ ^^^^^^^  meta.class.body.js
//^^^ ^^^^^ ^^^ ^^^^^             ^^^ ^^^^^    meta.accessor.js
//^^^       ^^^                   ^^^          storage.type.accessor.js
//    ^                                        entity.name.function.accessor.js
//     ^           ^                     ^     punctuation.definition.parameters.begin.js
//     ^^          ^^        ^^          ^^    meta.brace.round.js
//      ^           ^                     ^    punctuation.definition.parameters.end.js
//       ^^          ^^        ^^          ^^  meta.brace.curly.js
//              ^^^                            string.quoted.single.js
//              ^                              punctuation.definition.string.begin.js
//                ^                            punctuation.definition.string.end.js
//                      ^^^                    variable.other.readwrite.js
//                          ^          ^       constant.numeric.js
//                                    ^        meta.brace.square.open.flowtype
//                                      ^      meta.brace.square.end.flowtype
  set g(a){} set "h"(a){} set 3(a){} set [3](a){}
//^^^ ^^^^^^ ^^^ ^^^^^^^^ ^^^ ^^^^^^ ^^^ ^^^^^^^^  meta.class.body.js
//^^^ ^^^^^^ ^^^ ^^^^^^              ^^^ ^^^^^^    meta.accessor.js
//^^^        ^^^                     ^^^           storage.type.accessor.js
//    ^                                            entity.name.function.accessor.js
//     ^            ^                       ^      punctuation.definition.parameters.begin.js
//     ^ ^          ^ ^        ^ ^          ^ ^    meta.brace.round.js
//      ^            ^                       ^     meta.function.parameters.js
//      ^            ^    ^^^   ^            ^     variable.other.readwrite.js
//       ^            ^                       ^    punctuation.definition.parameters.end.js
//        ^^           ^^         ^^           ^^  meta.brace.curly.js
//               ^^^                               string.quoted.double.js
//               ^                                 punctuation.definition.string.begin.js
//                 ^                               punctuation.definition.string.end.js
//                            ^           ^        constant.numeric.js
//                                       ^         meta.brace.square.open.flowtype
//                                         ^       meta.brace.square.end.flowtype
  get if() {} set if(f) {}
//^^^ ^^^^ ^^ ^^^ ^^^^^ ^^  meta.class.body.js
//^^^ ^^^^ ^^ ^^^ ^^^^^ ^^  meta.accessor.js
//^^^         ^^^           storage.type.accessor.js
//    ^^          ^^        entity.name.function.accessor.js
//      ^           ^       punctuation.definition.parameters.begin.js
//      ^^          ^ ^     meta.brace.round.js
//       ^            ^     punctuation.definition.parameters.end.js
//         ^^           ^^  meta.brace.curly.js
//                   ^      meta.function.parameters.js
//                   ^      variable.other.readwrite.js
}
// <- punctuation.section.class.end.js
class C extends B { "constructor"(){ super(); } }
// <- meta.class.js storage.type.class.js
 // <- meta.class.js storage.type.class.js
//^^^                                              meta.class.js
//^^^                                              storage.type.class.js
//    ^         ^                                  entity.name.class.js
//      ^^^^^^^                                    meta.class.extends.js
//      ^^^^^^^                                    storage.type.extends.js
//                ^                                punctuation.section.class.begin.js
//                  ^^^^^^^^^^^^^^^^ ^^^^^^^^ ^    meta.class.body.js
//                  ^^^^^^^^^^^^^^^^ ^^^^^^^^ ^    meta.function.method.js
//                  ^^^^^^^^^^^^^                  entity.name.function.method.js
//                               ^                 punctuation.definition.parameters.begin.js
//                               ^^       ^^       meta.brace.round.js
//                                ^                punctuation.definition.parameters.end.js
//                                 ^          ^    meta.brace.curly.js
//                                   ^^^^^^^       meta.function-call.without-arguments.js
//                                   ^^^^^         entity.name.function.js
//                                          ^      punctuation.terminator.statement.js
//                                              ^  punctuation.section.class.end.js
