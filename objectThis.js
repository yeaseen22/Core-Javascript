// global.a = 5; or
// this.a = 5; // this refer to window then see in browser

function getPeram() {
  // console.log(this.a)
}
getPeram();

let user = {
  name: "piyush",
  age: 22,
  childObj: {
    newName: "Roadside Coder",
    getDetails() {
      // console.log(this.newName);
    },
  },
};

user.childObj.getDetails();

let user2 = {
  name: "piyush",
  age: 22,
  getDetails: () => {
    // console.log(this);
  },
};
user2.getDetails();

let user3 = {
  name: "piyush",
  age: 22,
  getDetails() {
    const arrowForGetDe = () => {
      // console.log(this.name);
    };
    arrowForGetDe();
  },
};
user3.getDetails();

class user4 {
  constructor(n) {
    this.name = n;
  }

  getName() {
    // console.log(this.name);
  }
}

const User = new user4("Armaan");
// console.log(User);

const users5 = {
  firstName: "armaan",
  getName: function () {
    const firstName = "armaan2";
    return this.firstName;
  },
};
// console.log(users5.getName());

function makeUser() {
  return {
    name: "John",
    // ref: this,
    ref: function () {
      return this;
    },
  };
}

// let makeuser = makeUser();
// console.log(makeUser.ref.name);

const user6 = {
  name: "hello",
  logMessae() {
    console.log(this.name);
  },
};

function getNameOfThis() {
  return function () {
    console.log(user6.name, "own function");
  };
}

// getNameOfThis()();

// setTimeout(user6.logMessae, 1000); // for workable this code
setTimeout(function () {
  // user6.logMessae();
}, 1000);

var length = 4;

function callback() {
  console.log(this.length);
}
// callback();

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

// object.method(callback);
// console.log(callback);

function Person(name) {
  this.name = name;
}

const Jhon = new Person("John");
// console.log(Jhon.name);

function PersonAgain() {
  console.log("Hello", this.name);
}

const Person1 = { name: "John" };
const Person2 = { name: "Jane" };

PersonAgain.apply(Person1);
PersonAgain.call(Person2);

`
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
`;
