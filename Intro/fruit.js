export class fruit {
    constructor() {}

     generateFruit() {
        console.log("Generating a random fruit...");
        const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
        const randomFruit = fruits[Math.floor(Math.random()*fruits.length)];
        console.log(`Generated fruit: ${randomFruit}`);
    }

     stringsManipulation() {
        // String manipulation example
const sampleString = "Hello, World!";
var str1 = "Adding strings together.";
const upperCaseString = sampleString.toUpperCase();
console.log(`Original String: ${sampleString}`);
console.log(`Uppercase String: ${upperCaseString}`);
const concatenatedString = sampleString + " " + str1;
console.log(`Concatenated String: ${concatenatedString}`);

// we can also use template literals
const templateLiteralString = `${sampleString} - This is a template literal example. with var: ${str1}`;
console.log(`Template Literal String: ${templateLiteralString}`);
    }
}


//reduce method example
const numbers = [1, 2, 3, 4, 5];
var totalSums = numbers.reduce((res, num) => res + num, 10);
//const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of array elements: ${totalSums}`);

console.log(`Total Sums using var: ${totalSums}`);

//reduce one more example
const words = ['I', 'am', 'learning', 'Redux', 'with', 'Me'];


var sentence = words.reduce((result, word) => {
    return result + ' ' + word;
}, '');
console.log(`Constructed Sentence: ${sentence}`);
console.log(sentence.trim());



