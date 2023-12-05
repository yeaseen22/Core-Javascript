// in this we are learn inheritance
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  run(speed) {
    console.log(this.name + "car is running at this " + speed);
  }
}

const BMW = new Car("BMW", 1999);
// console.log(BMW.run(110));

// inheritance
class CarInheritance {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "I have a " + this.carName;
  }
  get cname() {
    return this.carName;
  }
  set cname(x) {
    return (this.carName = x);
  }
}

// using set method to set the value
CarInheritance.cname = "Volvo";

class Model extends CarInheritance {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

// dynamic class
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

let user = makeClass("Hello");
new user().sayHi();
