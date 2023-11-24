class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "hello";
  }
}

let myCar = new Car("MBW");
console.log(Car.hello());
