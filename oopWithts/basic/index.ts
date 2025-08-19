
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

