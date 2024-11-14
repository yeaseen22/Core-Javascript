const Person = require("./Person");

const _profession = Symbol("profession");
const _income = Symbol("income");

class Guardian extends Person {
  constructor(id, name, profession, income) {
    super(id, name);
    this[_profession] = profession;
    this[_income] = income;
  }

  get _profession() {
    return this[_profession];
  }

  set _profession(value) {
    this[_profession] = value;
  }
  get _income() {
    return this[_income];
  }

  set _income(value) {
    this[_income] = value;
  }

  toString() {
    return `${super.toString()}, Profession= ${this[_profession]} Income= ${this[_income]}`;
    
  }
}

module.exports = Guardian
