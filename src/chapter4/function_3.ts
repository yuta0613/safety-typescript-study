type Human = {
    height: number,
    weight: number
}

const calcBMI = function ({height, weight}: Human): number {
    return weight / height**2
}

const wakit: Human = {
    height: 1.8,
    weight: 70,
}

console.log(calcBMI(wakit))