const arr = [0,123,-456*100];

const arr1 = [4,5,6]
const arr2 = [1,2,3, ...arr1]

console.log(arr)
console.log(arr2)

arr.push(789);
console.log(arr)

console.log(arr.includes(789))
console.log(arr.length)

const arr3 = [1,10, 100]
for (const elm of arr3) {
    console.log(elm);
}

console.log(arr[5])
//get undefined response, no compile error...