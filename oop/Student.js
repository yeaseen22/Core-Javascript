const Person = require("./person");

class Student {
  constructor(name, email, subjects, fee) {
    super();
    this._subjects = subjects;
    this._fee = fee;
  }

  get subjects() {
    return this._subjects;
  }
  get fee() {
    return this._fee;
  }
}

module.exports = Student;
