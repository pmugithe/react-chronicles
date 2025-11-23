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

console.log("Rest / Spread Parameter Demonstration:");

let stds = [{name: "John", marks: 85}, {name: "Jane", marks: 90}, {name: "Jim", marks: 78}];

let filterStudents = stds.map((student, index) => {
    {
        if(student.marks > 80){
            return {...student, remarks: "Excellent"}; // Spread operator to create a new object with updated marks
        }
        return student;
    }

});

console.log("Filtered Students:", filterStudents);

// Spread operator to combine two arrays
// Spread operator is used to expand elements of an iterable (like an array) into individual elements.
// Here, we are combining arrA and arrB into a new array combinedArr.
// The '...' syntax is the spread operator.
// Example:
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let combinedArr = [...arrA, ...arrB];
console.log("Combined Array:", combinedArr);

for( let i of combinedArr){
    console.log(i);
}

// Rest operator is used to collect multiple elements into a single array parameter.
// Destructuring assignment with rest operator
// Here, 'a', 'b', and 'c' will take the first three elements of combinedArr,
// and '...rest' will collect the remaining elements into an array.
// Example:
let [a,b,c,...rest] = combinedArr; 
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("rest:", rest);