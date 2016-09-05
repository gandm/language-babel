// SYNTAX TEST "source.js.jsx"
// nested template strings
// don't load language-graphql as it won't be there when spec's are run!!!!


Relay.QL`
// <- string.quasi.js variable.other.class.js
 // <- string.quasi.js variable.other.class.js
//^^^^^^^  string.quasi.js
//^^^      variable.other.class.js
//   ^     keyword.operator.accessor.js
//    ^^   entity.name.tag.grapahql.js
//      ^  string.quoted.template.js
//      ^  punctuation.definition.quasi.begin.js
`
// <- string.quasi.js punctuation.definition.quasi.end.js string.quoted.template.js

gql`
// <- string.quasi.js entity.name.tag.grapahql.js
 // <- string.quasi.js entity.name.tag.grapahql.js
//^^  string.quasi.js
//^   entity.name.tag.grapahql.js
// ^  string.quoted.template.js
// ^  punctuation.definition.quasi.begin.js
`
// <- string.quasi.js punctuation.definition.quasi.end.js string.quoted.template.js

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
