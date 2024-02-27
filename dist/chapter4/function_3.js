"use strict";
const calcBMI = function ({ height, weight }) {
    return weight / height ** 2;
};
const wakit = {
    height: 1.8,
    weight: 70,
};
console.log(calcBMI(wakit));
