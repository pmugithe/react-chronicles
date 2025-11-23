// two ways to export a class
// 1. Named export
// 2. Default export

// Here we are using named export   
// A Person class with constructor and a method
// Exporting the Person class
// Named export
// You can import it using: import { Person, add, so ..on methods } from './person.js';
// Default export -- Export only one default export is allowed per module
// You can import it using: import Person from './person.js';
// export default class Person {
//    constructor(name, age){
//        this.name = name;
//        this.age = age;
//    }

//    greet(){
//        console.log (`Hello my name is ${this.name} and I am ${this.age} years old.`);
//    }

// }
export class Person {
    constructor(name, age, id){

        this.name = name;
        this.age = age;
        this.id = id;
    }

    greet(){
        console.log (`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }

}

let person1 = new Person("Alice", 30);
person1.greet();

let person2 = new Person("Pradeep", 28, 2);
person2.greet();

export function sayMyName(){
    console.log("My name is Pradeep");
}