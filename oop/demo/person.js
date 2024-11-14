const person = {};
(person.name = "Hm Nayem"), (person.email = "nayem@gmail.com");

// then what's the benefits of (class) if we have object literal

class Person {
  name = "Person";
  email = "person@test.com";

  constructor(name) {
    // console.log(name);
    this.name = name;
    console.log(this.name);
  }

  changeName(name) {
    this.name = name;
  }
}

// const p1 = new Person("Hm Nayem"); // when call class the it's call his own contructor function by default
// const p2 = new Person("Shegufa Taranjum");

// private properties with [symbol]
const _name = Symbol("name");
const _email = Symbol("email");

class Person1 {
  static ClassName = "Person";
  static PI = 3.1416;

  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }

  get email() {
    return this[_email];
  }

  set email(value) {
    this[_email] = value;
  }

  print() {
    console.log("ClassName = Person" + this + "");
  }

  toString() {
    return `Name - ${this[_name]}, Email - ${this[_email]}`;
  }

  static isValid(age) {
    return age >= 18;
  }

  static equal(p1, p2) {
    if (p1.name !== p2.name) return false;
    if (p1.email !== p2.email) return false;

    return true;
  }
}

const p1 = new Person1("Hm Nayem", "nayem@gmail.com");
const p2 = new Person1("Shegufa Taranjum", "shegufataranjum@gmail.com");
const p3 = new Person1("Sheikh", "sheikh@gmail.com");

module.exports = Person1;
