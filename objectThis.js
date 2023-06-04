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

// setTimeout(user6.logMessae, 1000); // for workable this code
setTimeout(function () {
  user6.logMessae();
}, 1000);
