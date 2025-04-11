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
      // console.log('testing wtih inner obj = ',this.newName);
    },
  },
};

user.childObj.getDetails();

let user2 = {
  name: "piyush",
  age: 22,
  getDetails: () => {
    // console.log('object this arrow fn undefined= ',this);
  },
};
user2.getDetails();

let user3 = {
  name: "piyush",
  age: 22,
  getDetails() {
    const arrowForGetDe = () => {
      // console.log('arrow fn inside arrow fn this working = ',this.name);
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
    console.log('class constructor fun this = ',this.name);
    return this.name;
  }
}

const User = new user4("Armaan");
// console.log(User.getName());

const users5 = {
  firstName: "armaan",
  getName: function () {
    const firstName = "armaan2";
    return this.firstName;
  },
};
// console.log('from object ',users5.getName());

function makeUser() {
  return {
    name: "John",
    ref1: this,
    ref: function () {
      return this;
    },
  };
}

let makeuser = makeUser();
// console.log(makeuser.ref.name);
console.log(makeuser.ref1);


const user6 = {
  name: "hello",
  logMessae() {
    console.log('outside ',this.name);
  },
};

function getNameOfThis() {
  return function () {
    console.log(user6.name, "own function");
  };
}

getNameOfThis()();

setTimeout(user6.logMessae, 1000); // for workable this code
setTimeout(function () {
  user6.logMessae();
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

// function Person(name) {
//   this.name = name;
// }

// const Jhon = new Person("John");
// // console.log(Jhon.name);

// function PersonAgain() {
//   console.log("Hello", this.name);
// }

// const Person1 = { name: "John" };
// const Person2 = { name: "Jane" };

// PersonAgain.apply(Person1);
// PersonAgain.call(Person2);

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

let userForThis = { name: "jhon" };
let adminForThis = { name: "admin" };

function sayHi() {
  console.log(this.name);
}

userForThis.f = sayHi;
adminForThis.f = sayHi;

// console.log(userForThis.f);
// userForThis.f();
// adminForThis["f"]();

let userForArrow = {
  firstName: "Iliyana",
  sayHi() {
    let arrow = () => {
      console.log(this.firstName);
    };
    arrow();
  },
};
userForArrow.sayHi();
