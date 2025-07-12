
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('hello', this.name);

    }
}

const user = new Person('david', 100)


class BankAccount {
    public owner: string;
    private balance: number;
    protected accountType: string;

    constructor(name: string, balance: number) {
        this.owner = name;
        this.balance = balance;
        this.accountType = 'Savings'
    }

    showBalance() {
        console.log('your balance is ', this.balance);
    }
}

const account1 = new BankAccount('mamun', 1000)
console.log(account1);

class Animal {
    constructor(name: string) {

    }

    move() {
        console.log(this.name, 'is moving');

    }


}

class Dog2 extends Animal {
    bark() {
        console.log(this.name, ' is barking');

    }
}

const myDog1 = new Dog2("Tommy")
myDog1.move()


interface Driveable {
    start: () => void;
    stop: () => void;
}

class Car2 implements Driveable {
    start() {
        console.log('cart is started');

    }

    stop() {
        console.log('car is stopped');

    }
}

const againCar = new Car2()
againCar.start()