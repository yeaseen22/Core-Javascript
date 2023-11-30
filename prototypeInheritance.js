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
  let person = Object.create(personMethods);

  person.name = name;
  person.age = age;

  // calling methods from the personMethods object

  // person.eat = personMethods.eat;
  // person.age = personMethods.age;

  return person;
}

const sakib = Person("sakib", 35);
console.log(sakib);

const caption = {
  name: "Mashrafi",
  age: 36,
  country: "Bangladesh",
};

const player = Object.create(caption);
console.log(player.name);
