// SYNTAX TEST "source.js.jsx"
function example() {
    return (
        <MyComponent myAttr={123}>
        // ^ entity.name.tag.open.jsx
        //              ^ entity.other.attribute-name.jsx
        //                  ^ meta.embedded.expression.js punctuation.section.embedded.begin.jsx
        //                    ^ constant.numeric
            <AnotherComponent props={props...} />
            //                              ^ keyword.operator.spread
        </MyComponent>
        // ^ entity.name.tag.close.jsx
    );
}
