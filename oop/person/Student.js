const Person = require("./Person");
const UniPerson = require("./UniPerson");

const _subjects = Symbol("Subjects");
const _studentId = Symbol("StudentId");
const _guardian = Symbol("Guardian");
const _exams = Symbol("Exams");
const _fee = Symbol("Fee");

class Student extends UniPerson {
  constructor(id, name, studnetId, guardian) {
    super(id, name);
    this[_studentId] = studnetId;
    this[_guardian] = guardian;
    this[_exams] = [];
    this[_fee] = null;
  }

  get studnetId() {
    return this[_studentId];
  }
  get guardian() {
    return this[_guardian];
  }

  get exams() {
    return this[_exams];
  }

  set exams(value) {
    this[_exams] = value;
  }

  addExam(exam) {
    this[_exams].push(exam)
  }

  set fee(value) {
    this[_fee] = value;
  }

  get fee() {
    return this[_fee];
  }

  toString() {

    return `${super.print()} Subject: ${this[_studentId]} Fee: ${this[_fee]}`
  }
}

module.exports = Student;
