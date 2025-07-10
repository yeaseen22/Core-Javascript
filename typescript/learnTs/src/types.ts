

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
    name: 'demo', age: 10
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
    breed: 'golden'
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