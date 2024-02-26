"use strict";
const obj3 = {
    foo: 123,
};
// obj3.foo = 0;
// ^^^
// src/chapter3/readonly.ts:9:6 - error TS2540: Cannot assign to 'foo' because it is a read-only property.
//
// 9 obj3.foo = 0;
// ~~~
//
//
//     Found 1 error in src/chapter3/readonly.ts:9
