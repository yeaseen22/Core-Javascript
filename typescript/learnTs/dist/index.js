"use strict";
function greet(name) {
    return `Hello ${name}`;
}
// console.log(greet('Typescript'));
// array
let names = ['Alice', 'Bob', 'Charlie'];
let scores = [10, 22, 33];
// tuples
let students = ["Alice", 11, true];
// any type
let randomValue = 'Hello';
randomValue = 10;
randomValue = true;
let value = "world";
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
// void
function logMessage() {
    console.log('log success');
}
logMessage();
// null and undefined
let nothing = null;
let notAssigned = undefined;
// function type signature
let greenFunction;
let greenFunction2;
greenFunction = function (name) {
    return `Hi ${name}`;
};
greenFunction2 = function (name) {
    return `Hi ${name}`;
};
// never return type
function throwError() {
    throw new Error("something went wrong");
}
throwError();
