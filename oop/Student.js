const Person = require("./person");

const _subjects = Symbol("Subjects");
const _fee = Symbol("Fee");

class Student extends Person {
  constructor(name, email, subjects, fee) {
    super(name, email);
    this[_subjects] = subjects;
    this[_fee] = fee;
  }

  get subjects() {
    return this[_subjects];
  }
  get fee() {
    return this[_fee];
  }

  print() {
    super.print();
    console.log(`Subject: ${this[_subjects]} Fee: ${this[_fee]}`);
  }
}

module.exports = Student;
