

const student = {
    name: "Alice",
    age: 11
}

function printUser(user: { name: string, age: number }): void {
    console.log(`user name ${user.name}`);

}

// type alias
type User = {
    name: string,
    age: number
}

function showUser(user: User) {
    console.log(user.name);
}

showUser(student)


// definte interface
interface UserProfile {
    name: string;
    age: number;
    email: string;
}

// metge the information of person
interface Person {
    name: string
}

interface Person {
    age: number;
}

const p: Person = {
    name: 'demo', age: 10,
    greet: function (): void {
        throw new Error("Function not implemented.");
    }
}

// when to use type or interface

// designing public api (interface)
// for simple object use both
// for complex object: use (interface)
// union and intersection: use type
// primitive and functions: use type
// flexibility interface(extends, implementation) type (union and intersection)


// extending interface
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string
}

const myDog: Dog = {
    name: "Tom",
    breed: 'golden',
    move: function (): void {
        throw new Error("Function not implemented.");
    }
}

// union
let value1: string | number

type ProductId = string | number;

function getProduct(id: string | number) {
    console.log(`Fetching product with id ${id}`);
}

getProduct("abc123")

// intersection type (&)

type UserInter = {
    id: string;
    name: string;
}

type Admin = {
    isAdmin: boolean;
}

type AdminUser = UserInter & Admin

const admin: AdminUser = {
    id: "user1",
    name: 'mamun',
    isAdmin: true,
}


// literal types
type Action = "start" | "stop" | "pause" | "submite" | "reset"

function handleAction(action: Action) {
    console.log(`Action ${action}`);

}
handleAction('start')
handleAction('pause')

// type narrowing

function processInput(input: string | number) {
    if (typeof input === 'string') {
        console.log('parse as string', input.trim());

    } else {
        console.log('parse as number', input * 2);

    }
}

processInput("hello world")
processInput(101)

type Car = {
    drive: () => void;
}

type Boat = {
    sail: () => void;
}

function move(vehical: Car | Boat) {
    if ("drive" in vehical) {
        vehical.drive()
    } else {
        vehical.sail()
    }
}

const car: Car = {
    drive: () => {
        console.log('car is driving');
    }
}

move(car)

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

function makeSound(animal: Dog1 | Cat){
    if(animal instanceof Dog1){
        animal.bark()
    }else{
        animal.meow()
    }
}

const dog = new Dog1();
const cat = new Cat();

makeSound(dog)
makeSound(cat)