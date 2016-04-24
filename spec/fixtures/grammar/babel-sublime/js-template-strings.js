// SYNTAX TEST "source.js.jsx"
// nested template strings
var node = Relay.QL`
  node(123) {
    ${Relay.QL`
      User {
        address {
          ${fragment},
        },
      }
    `}
  }
`;

var node = Relay.QL` node(123) {${Relay.QL` User { address { ${fragment},}, }` } }`;
// <- storage.type.js
 // <- storage.type.js
//^                                                                                   storage.type.js
//  ^^^^                                                       ^^^^^^^^               variable.other.readwrite.js
//       ^                                                                            keyword.operator.assignment.js
//         ^^^^^^^^               ^^^^^^^^                                            meta.property.class.js
//         ^^^^^                  ^^^^^                                               variable.other.class.js
//              ^                      ^                                              keyword.operator.accessor.js
//               ^^                     ^^                                            variable.other.property.static.js
//                 ^ ^^^^^^^^^ ^^^^^^^^^^^^ ^^^^ ^ ^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^ ^ ^^   string.quasi.js
//                 ^                      ^                                           punctuation.definition.quasi.begin.js
//                 ^ ^^^^^^^^^ ^^^^^^^^^^^^ ^^^^ ^ ^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^ ^ ^^   string.quoted.template.js
//                              ^^^^^^^^^^^ ^^^^ ^ ^^^^^^^ ^ ^^^^^^^^^^^^^^ ^^ ^      entity.quasi.element.js
//                              ^^                           ^^                       punctuation.quasi.element.begin.js
//                                                                     ^       ^      punctuation.quasi.element.end.js
//                                                                           ^    ^   punctuation.definition.quasi.end.js
//                                                                                 ^  punctuation.terminator.statement.js

// >> only:source.js.jsx
