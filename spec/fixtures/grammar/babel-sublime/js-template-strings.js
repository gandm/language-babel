// SYNTAX TEST "source.js.jsx"

return `another template ${aa}`
// <- keyword.control.flow.js
 // <- keyword.control.flow.js
//^^^^                           keyword.control.flow.js
//     ^^^^^^^^ ^^^^^^^^ ^^^^^^  string.quasi.js
//     ^                         punctuation.definition.quasi.begin.js
//     ^^^^^^^^ ^^^^^^^^ ^^^^^^  string.quoted.template.js
//                       ^^^^^   entity.quasi.element.js
//                       ^^      punctuation.quasi.element.begin.js
//                         ^^    variable.other.readwrite.js
//                           ^   punctuation.quasi.element.end.js
//                            ^  punctuation.definition.quasi.end.js

// >> only:source.js.jsx
