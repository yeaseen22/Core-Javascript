//#region, for this key word, implicit binding, explicit binding, new binding, window binding

// var PrintPlayerName = function (name) {
//     console.log(name)
// }
// PrintPlayerName('sakib') // for finding this we have to find where the function is called

// #region implicit binding 
var sakib = {
    name: 'sakib',
    age: 35,
    printNamePlayerName: function () {
        console.log(this.name)
    }
}

// sakib.printNamePlayerName();  //only work with normal function not with arrow function




var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function(){
        console.log(this.name, 'from function')
    }
}

var sakib = {
    name: 'sakib',
    age: 35
}

var tamim = {
    name: 'tamim',
    age: 35
}

printPlayerNameFunction(sakib)
printPlayerNameFunction(tamim)

// sakib.printPlayerName()
// tamim.printPlayerName()


var Person = function(name,age) {
    return{
        name:name,
        age: age,
        printName: function(){
            console.log(this.name)
        },
        father: {
            name: 'Mr.xxx',
            printName: function(){
                console.log(this.name)
            }
        }
    }
}

var sakib = new Person('sakib', 38)
console.log(sakib.name)
sakib.father.printName()


// #region explicit binding
var printNameForExplicit = function(v1,v2,v3){
    console.log(`${this.name} is ${v1} ${v2} & ${v3}`)
}

var sakibForExplicit = {
    name: 'sakib',
    age: 35
}

var v1 = 'Handsome'
var v2 = 'All Rounder'
var v3 = 'Best Player'
var v = [v1,v2,v3]

// printNameForExplicit.call(sakib, v1,v2,v3)
// printNameForExplicit.apply(sakib, v)
var newFunc = printNameForExplicit.bind(sakib, v1,v2,v3)
// console.log(newFunc())


// #region new binding
function PersonForNewBinding(name,age){
    this.name = name;
    this.age = age;

    console.log(`${this.name} is ${this.age} years old`)
}

var sakib = new PersonForNewBinding('sakib', 35)

'use strict' // in this case it will make an error
//#region window binding
var printNameWindow = function(){
    // console.log(this);
    console.log(this.name) // undefined
}

var sakib = {
    name: 'sakib'
}
printNameWindow()  // it will be window object in case of arrow function



