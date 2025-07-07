
function greet(name: string): string {
    return `Hello ${name}`;

}

// console.log(greet('Typescript'));

// array
let names: string[] = ['Alice', 'Bob', 'Charlie']

let scores: Array<number> = [10, 22, 33]

// tuples
let students: [string, number, boolean] = ["Alice", 11, true]

// any type
let randomValue: any = 'Hello'

randomValue = 10;
randomValue = true

let value: unknown = "world";

if (typeof value === 'string') {
    console.log(value.toUpperCase());
}

// void
function logMessage(): void {
    console.log('log success');
}
logMessage()


// null and undefined

let nothing: null = null;

let notAssigned: undefined = undefined;

// function type signature
let greenFunction: (name: string) => string
let greenFunction2: (name: string) => string

greenFunction = function (name: string): string {
    return `Hi ${name}`
}

greenFunction2 = function (name: string): string {
    return `Hi ${name}`
}

// never return type
function throwError():never{
    throw new Error("something went wrong")
}

throwError()
