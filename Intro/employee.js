
import { Person, sayMyName } from './person.js';
export class Employee {
    constructor(employeeId, position) {
        this.employeeId = employeeId;
        this.position = position;
    }

    showDetails() {
        let person1 = new Person("Alice", 30, 1);
        let person2 = new Person("Pradeep", 25, 2);
        person1.greet();
        person2.greet();
        if (this.employeeId === 2) {
            sayMyName();
        }
        //alert("Employee Details:");
        console.log(`Employee ID: ${this.employeeId}, Position: ${this.position}`);
    }
}
let emp1 = new Employee(1, "Developer");
emp1.showDetails();

let emp2 = new Employee(2, "Manager");
emp2.showDetails(); 