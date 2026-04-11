// assertion 
let response: any = '42';
let numbericLength: number = (response as string).length; // forceful assertion

type Book = {
    name: string
}

let bookString = '{"name": "whole"}';
let bookObject = JSON.parse(bookString) as Book

console.log('book', bookObjects);

const inputElement = document.getElementById('username') as HTMLInputElement

let value: any;

value = 'chai';
value = [1, 1, 2,];
value = 2.5;
value.toUpperCase();

let newValue: unknown;
newValue = 'chai';
newValue = [1, 1, 2,];
newValue = 2.5;
// newValue.toUpperCase();

if (typeof newValue === 'string') {
    newValue.toUpperCase()
}

try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);

    }
    console.log('error', error);
}

const data: unknown = 'chai aur code';
const strData: string = data as String;

type Role = "admin" | "user";

function redirectUser(role: Role): void {
    if (role === 'admin') {
        console.log('redirect to admin');
        return;
    }
    if (role === 'user') {
        console.log('redirect to usert');
        return
    }
    role
}
function returnRever(): never {
    while (true) { }
}
//region for remember note ehcking never,unkown, any, void

