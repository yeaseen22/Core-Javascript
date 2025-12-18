let score: number | string | boolean = 33;


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let mySelf: User | Admin = {
    name: 'omar',
    id: 334
}

mySelf = { username: 'my', id: 334 }

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase()
    }
    if (typeof id === 'number') {
        id + 2;
    }
}

// region Array

const data: number[] = [1, 2, 3, 4, 5]

const data2: string[] = ['1', '2', '3', '4', '5'];

const data3: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 3, 'r', true]

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle'
seatAllotment = 'middle'
seatAllotment = 'window'
// seatAllotment = 'crew' // not allowed


const orders = ['10', '20', '30', '40'];

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '30') {
        currentOrder = order;
        break;
    }
}
console.log('current order:', currentOrder);

export { };


function print(value: string | number) {
    if (typeof value === 'string') {
        value.toUpperCase();
    }
}

function log(person: Admin | User) {
    if ("id" is person) {
        person.id
    }
}

type Book{
    name: string;
}

let bookString = '{"name": "who am i"}';
let bookString = JSON.parse(bookString) as Book;

console.log(bookString);

const inputElement = document.getElementById("username") as HTMLInputElement

try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

const data: unknown = 'char aur code';
const strData: string = data as string;

type A = "x" | "y"

function test(v: A) {
    if (v === "x") {
        return
    }
    if (v === "y") {
        return
    }
}

function assertNever(x: never): never {
    throw new Error('unhandle case')
}

