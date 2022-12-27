// how we can create an object
// let user = {}  // object literal
// let users = new Object();
// console.log(user)
// console.log(users) // this both return empty object

// let user = {
//     name: 'Yeaseen Arafat',
//     age: 19,
//     "is HeLike Birds": true
// }
// user["is HeLike Birds"] = false;
// // delete user["is HeLike Birds"];

// console.log(user["is HeLike Birds"])

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   console.log( user[key] ); // John (if enter "name")


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   console.log( user[key])

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// console.log(user.name); // 'Pete', changes are seen from the "user" reference

// comparision by references
// let a = {};
// let b = a; // copy the reference

// console.log( a == b ); // true, both variables reference the same object
// console.log( a === b ); // true

// let a = {};
// let b = {}; // two independent objects

// console.log( a == b ); // false
// console.log( a === b ); // false

// Cloning and merging, Object.assign
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }
// // console.log(key)

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// console.log( user.name ); // still John in the original objects
// console.log(clone)
// console.log(user)

// let user1 = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user1, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(user1)

// let user2 = { name: "John" };

// Object.assign(user2, { name: "Pete" });

// console.log(user2.name);  // If the copied property name already exists, it gets overwritten:

// let user = {
//   name: "John",
//   age: 30
// };
// let e = {};

// let clone = Object.assign({}, user);
// console.log(clone)

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( user.sizes === clone.sizes ); // true, same object

// // user and clone share sizes
// user.sizes.width++;       // change a property from one place
// console.log(clone.sizes.width); // 51, see the result from the other one

// An important side effect of storing objects as references is that an object declared as const can be modified.

// For instance:

// const user = {
//   name: "John"
// };

// user.name = "Pete"; // (*)

// console.log(user.name); // Pete (bad thing todo)


// let user = {
//   name: "John",
//   age: 30
// };

// user.sayHi = function() {
//   console.log("Hello!");
// };

// user.sayHi(); // Hello!

// let user = {
//   // ...
// };

// // first, declare
// function sayHi() {
//   console.log("Hello!");
// };

// // then add as a method
// user.sayHi = sayHi;

// user.sayHi(); // Hello!

// these objects do the same

//  user = {
//   sayHi: function() {
//     console.log("Hello");
//   }
// };

// // method shorthand looks better, right?
// user = {
//   sayHi() { // same as "sayHi: function(){...}"
//     console.log("Hello");
//   }
// };

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     console.log(this.name);
//   }

// };

// user.sayHi(); // John

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert( user.name ); // leads to an error
//   }

// };


// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi(); // TypeError: Cannot read property 'name' of null


// let obj1= {
//   names: 'Armaan' 
// }
// let obj2 = {
//   names: 'Yeaseen'
// }

// function sayHi () {
//   console.log(this.names)
// }
// sayHi()

// const person = {
//     FirstNmae: 'Yeaseen',
//     lastName: 'Arafat',
//     age: 50,
//     eyeColor: "blue",

//     fullName: function (age) {
//         if(age>18){
//            return (this.FirstNmae, " is old maybe ", this.age);
//         }
//     }
// };
// person.fullName();


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     },
//     LastName: function (){
//         this.fullName();
//         return  'Hi all', this.lastName;
//     }
//   }
// let names =  person.fullName()
// console.log(names)
// console.log(person.LastName())
// var se = person.LastName;
// console.log(typeof se)


// do not create like that
// x = new String();        // Declares x as a String object
// y = new Number();        // Declares y as a Number object
// z = new Boolean();       // Declares z as a Boolean objec



// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age:50,
//   eyeColor: "blue"
// };

// const x = person1;
// x.age = 10;
// console.log(person1)

// multi level inheritance
function Person (names) {
    this.names = names;
}
var p1 = new Person('Yeaseen Arafat');
console.log(p1)

// instance vs prototype member 
function squre (width) {
    this.width = width;

}

var sqr1 = new squre(45);
var sqr2 = new squre (56);

squre.prototype = {
    draw:  function () {
        console.log('Draw')
    },
    toString: function(){
        return 'My Width is = ' + this.width
    }
};
console.log(sqr1.draw())
console.log(sqr2)



