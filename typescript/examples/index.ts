// 1. Class + Constructor + Methods

class Person1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hi I am ${this.name} and I am ${this.age} years old`
    }
}

const p = new Person1('John', 100)

// access modifiers
class BankAccount {
    public owner: string;
    private balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance
    }
}

const account_bia_bank = new BankAccount('John',1000)


class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): string {
    return `${this.name} is moving.`;
  }
}

class Dog extends Animal {
  bark(): string {
    return `${this.name} says Woof!`;
  }
}

const dog = new Dog('Buddy');
console.log(dog.move());
console.log(dog.bark());



