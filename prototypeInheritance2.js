
// 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// #region sub class
function Cricketer(name, age, type, country) {
    Person.call(this)
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`)
    }
}

Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer

// const sakib = new Person('Sakib', 36);
const sakib = new Cricketer('Sakib', 36, 'Al Rounder', 'BD');


sakib.eat()

console.log(sakib.name)


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}


class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age)
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}






