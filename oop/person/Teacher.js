const Person = require("./Person");
const Employee = require("./Employe")

const _subject = Symbol("Subject");
// const _salary = Symbol("Salary");

class Teacher extends Employee {
  constructor(id, name, subject, employeId) {
    super(id, name, employeId);
    this[_subject] = subject;    // this[_salary] = salary;
  }

  get subject() {
    return this[_subject];
  }
  set subject(value) {
    this[_subject] = value;
  }


  // get salary() {
  //   return this[_salary];
  // }

  toString() {
    return `${super.toString()}, Subject= ${this[_subject]}`;
  }
}

module.exports = Teacher;
