const Person = require("./person");
const Teacher = require("./Teacher");
const Student = require("./Student");

const p = new Person("hm nayem", "hnnayem@test.com");
const t = new Teacher(
  "Shegufa Taranjum",
  "shegufa@test.com",
  "Computer Fundamental",
  40000
);
const s = new Student(
  "hm nayem for student",
  "nayme@test.com",
  ["Computer 101", "Physics", "Math"],
  400000
);

console.log(p);
console.log(t);
console.log(s);
