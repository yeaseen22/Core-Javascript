// let a = 10;
// (function () {
//   console.log(a);
//   let a = 20;
// })();

// function hello() {
//   console.log(a);
//   let a = 20;
// }

// hello();

// const hi = () => {
//   console.log(a);
//   let c = 20;
// };

// hi();


console.log(typeof 42)
console.log(typeof 'hello')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof {a: 'there are a object'})
console.log(typeof null)
console.log(typeof function (){})
console.log(typeof Symbol('id'))
console.log(typeof 10n)

/**
 * type of in operator in js
 */
console.log(typeof 'in')

let obj = {a:1, b:2, c:3}
// console.log(typeof a in obj)

function Person(name){
    this.name = name;
}

const john = new Person('John')
console.log(john instanceof Person, 'checking if john is a person')
console.log(john instanceof Object, 'checking if john is an object')


let objectForPropertieExist = {a:1, b:2, c:3}
console.log('a' in objectForPropertieExist)

/** using hasOwnProperty */
console.log(objectForPropertieExist.hasOwnProperty('a'))




