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

const p1 = new Person("Hm Nayem"); // when call class the it's call his own contructor function by default
const p2 = new Person("Shegufa Taranjum");
