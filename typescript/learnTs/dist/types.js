"use strict";
const student = {
    name: "Alice",
    age: 11
};
function printUser(user) {
    console.log(`user name ${user.name}`);
}
function showUser(user) {
    console.log(user.name);
}
showUser(student);
const p = {
    name: 'demo', age: 10,
    greet: function () {
        throw new Error("Function not implemented.");
    }
};
const myDog = {
    name: "Tom",
    breed: 'golden'
};
// union
let value1;
function getProduct(id) {
    console.log(`Fetching product with id ${id}`);
}
getProduct("abc123");
const admin = {
    id: "user1",
    name: 'mamun',
    isAdmin: true,
};
function handleAction(action) {
    console.log(`Action ${action}`);
}
handleAction('start');
handleAction('pause');
// type narrowing
function processInput(input) {
    if (typeof input === 'string') {
        console.log('parse as string', input.trim());
    }
    else {
        console.log('parse as number', input * 2);
    }
}
processInput("hello world");
processInput(101);
function move(vehical) {
    if ("drive" in vehical) {
        vehical.drive();
    }
    else {
        vehical.sail();
    }
}
const car = {
    drive: () => {
        console.log('car is driving');
    }
};
move(car);
class Dog1 {
    bark() {
        console.log('woof woof');
    }
}
class Cat {
    meow() {
        console.log('Meow Meow');
    }
}
function makeSound(animal) {
    if (animal instanceof Dog1) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog1();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
