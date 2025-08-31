
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multipy(a: number, b: number): number {
    return a * b;
}

console.log((add(2, 3)));
console.log(subtract(10, 7));
console.log(multipy(4, 5));

class Car {
    private speed: number;
    brand: string;

    getSpeed(): number {
        return this.speed;
    }
    setSpeed(newSpeed: number) {
        if (newSpeed < 0) {
            console.log("Speed cannot be negative!");
        } else {
            this.speed = newSpeed;
        }
    }
    drive() {
        console.log(`The ${this.brand} is driving at ${this.speed} k/m`);
    }
}

const car1 = new Car();
car1.brand = 'Toyota';
// car1.speed = 120;
car1.drive()


const car2 = new Car();
car2.brand = 'tesla';
// car2.speed = 200;
car2.getSpeed()
car2.setSpeed(200)
car2.drive()


// {
//     "brand": "Ford",
//         "speed": 180,
// }

// {
//     "brand": "Audi",
//     "speed": 180,
// }
// { "brand": "Hyundai", "speed": 200 }

class User {
    readonly userName: string;
    email: string;

    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }
}

const user1 = new User("yeasin", "yeasin@email.com");
console.log(user1.userName); // yeasin
console.log(user1.email);

const user2 = new User('demo', 'demo@gmail.com')

console.log(user2.userName);
console.log(user2.email);

interface IShape {
    area(): number
}

class Circle implements IShape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Square implements IShape {
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

const circle = new Circle(5);
const square = new Square(4);

console.log("Circle area:", circle.area());
console.log("Square area:", square.area());


class Triangle implements IShape{
    base:number;
    height:number;

    constructor(base:number,height:number){
        this.base = base;
        this.height = height;
    }

    area():number{
        return 0.5 * this.base * this.height;
    }
}
const triangle = new Triangle(10, 5);
console.log("Triangle area:", triangle.area()); // 25

// Define the blueprint
type Shape = {
  area(): number;
};

// Use the blueprint
class Circle1 implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square1 implements Shape {
  side: number;
  constructor(side: number) {
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}


type circleM = {radius:number}
type squareM = {side:number}
type shape = circleM|squareM


function getArea(shape: shape): number {
  if ("radius" in shape) {
    // ✅ Must be a Circle
    return Math.PI * shape.radius * shape.radius;
  } else {
    // ✅ Must be a Square
    return shape.side * shape.side;
  }
}

const c: shape = { radius: 10 };
const s: shape = { side: 5 };

console.log(getArea(c)); // 314.159...
console.log(getArea(s)); // 25
