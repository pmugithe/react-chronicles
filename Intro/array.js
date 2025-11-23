let arr = [1, 2, 3, 4, 5, "six"];

var arr1 = [10, 20, 30, "forty"];

console.log("Array elements:");

// for (let i of arr) {
//     console.log(i);
// }
for (let index in arr) {
    console.log(index);
}
// console.log("Array elements using traditional for loop:");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
console.log("Array elements using for..in loop:");
for (var i of arr1) {
    console.log(i);
}
// Demonstrating variable hoisting with var and let keywords   
// Map function to create a new array with squared values for even indices and 0 for odd indices

//Map is powerful function to transform array elements. *****
let newArr = arr.map((value, index) => {
    if(index%2 ===0){
        return value * value;
    }
    return value*0;
});

console.log("New array elements:" + newArr);