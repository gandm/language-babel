// SYNTAX TEST "source.js.jsx"
/* flow */

type MyObject {
// <- support.type.type.flowtype
//      ^ support.type.class.flowtype
    isAwesome: boolean,
    // ^ variable
    //         ^ support.type.builtin.primitive
    message?: string
    // ^ variable
    //     ^ keyword.operator.optional.parameter
};

type F<U, V> = (x: U) => V;
// <- support.type.type.flowtype
//   ^ support.type.class.flowtype
//    ^ punctutation.flowtype
//     ^ support.type.class.flowtype
//        ^ support.type.class.flowtype
//                       ^ support.type.class.flowtype

var b: typeof X;
//   ^ punctuation.type.flowtype
//       ^ keyword.operator
//            ^ support.type.class.flowtype

function example(arg1: number, arg2: MyObject): Array<Object> {
//                ^ variable
//                   ^ punctuation.type.flowtype
//                       ^ support.type.builtin.primitive.flowtype
//                              ^ variable
//                                    ^ support.type.class.flowtype
//                                            ^ punctuation.type.flowtype
//                                                ^ support.type.builtin.class.flowtype
//                                                   ^ punctuation.flowtype
//                                                      ^ support.type.builtin.class.flowtype
//                                                          ^ punctuation.flowtype
}
