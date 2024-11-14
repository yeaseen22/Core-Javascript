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

class Person1 {
  static ClassName = "Person";
  static PI = 3.1416;

  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  print() {
    console.log("ClassName = Person" + this + "");
  }

  toString() {
    return `Name - ${this._name}, Email - ${this._email}`;
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
const p6 = new Person1("Sheikh", "sheikh@gmail.com");

// p1.name = "New Name";
// p1.print();
// console.log(p1);
// console.log(p1 + "");

const p4 = { _name: "test", _email: "test@gmail.com" };

// credential for create new user static method
const testUser = {
  name: "Asad",
  email: "asad@gmail.com",
  age: 23,
};

let p5 = null;
if (Person1.isValid(testUser.age)) {
  p5 = new Person1(testUser.name, testUser.email);
}

console.log(p1 instanceof Person1);
console.log(p4 instanceof Person1);
console.log(p5);

console.log(Person1.ClassName);

console.log(Person1.equal(p1, p2));
