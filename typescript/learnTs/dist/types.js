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
    name: 'demo', age: 10
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
