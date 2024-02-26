let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", 1];

const str = tuple[0]
const num = tuple[1]

// const nothing = tuple[2];
// src/chapter3/taple.ts:7:23 - error TS2493: Tuple type '[string, number]' of length '2' has no element at index '2'.
