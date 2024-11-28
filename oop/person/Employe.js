const Person = require("./Person");
const UniPerson = require("./UniPerson");

const _employeeId = Symbol("EmployeeId");
const _salary = Symbol("salary");

class Employee extends UniPerson {
    constructor(id, name, employeeId) {
        super(id, name);
        this[_employeeId] = employeeId;
        this[_salary] = null;
    }

    get employeeId() {
        return this[_employeeId];
    }

    
    set salary(value) {
        this[_salary] = value;
    }

    get salary() {
        return this[_salary];
    }

    toString() {
        return `${super.print()} EmployeeId: ${this[_employeeId]} Fee: ${this[_salary]}`;
    }
}

module.exports = Employee;
