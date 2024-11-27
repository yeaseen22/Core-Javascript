const Person = require("./Person");
const Employee = require("./Employe")

const _title = Symbol("Subject");
const _salary = Symbol("Salary");

class Stuff extends Employee {
  constructor(id,name, title) {
    super(id,name);
    this[_title] = subject;
  }

  get subject() {
    return this[_title];
  }
  set subject(value) {
    this[_title] = value;
  }

  toString(){
    return `${super.toString()}, Subject= ${this[_subject]}`;
  }
}

module.exports = Stuff;
