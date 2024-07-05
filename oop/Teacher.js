const Person = require("./person");

const _subject = Symbol("Subject");
const _salary = Symbol("Salary");

class Teacher extends Person {
  constructor(name, email, subject, salary) {
    super(name, email);
    this[_subject] = subject;
    this[_salary] = salary;
  }

  get subject() {
    return this[_subject];
  }
  get salary() {
    return this[_salary];
  }
}

module.exports = Teacher;
