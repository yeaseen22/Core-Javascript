let arr = ["Shegufa Taranjum", "Hm Nayem"];
let object = {
  name: "Nayem",
  city: "Kustiya",
  getInfo: function () {
    console.log(this.name + "from" + this.city);
  },
};
// console.log(arr);

const personMethods = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
};

function Person(name, age) {
  // improving the code
  let person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;

  // calling methods from the personMethods object

  // person.eat = personMethods.eat;
  // person.age = personMethods.age;

  return person;
}

// know[not depending on different object] we improve personMethods object, with js prototype concepts
Person.prototype = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("person is sleeping");
  },
};

const sakib = Person("sakib", 35);
console.log(sakib.name);

const caption = {
  name: "Mashrafi",
  age: 36,
  country: "Bangladesh",
};

// const player = Object.create(caption);
// console.log(player.name);

// imlement with class syntex

class PersonWithClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("Person is eating from class");
  }
  sleep() {
    console.log("Person is sleeping from class");
  }
}

const sakibWithClass = new PersonWithClass("Sakib", 35);
sakibWithClass.eat();
