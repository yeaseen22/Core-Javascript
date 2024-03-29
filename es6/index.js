let age = 12;
var names = 'Hm Nayem';

// console.log(`My name is ${names} and I am ${age} years old. I am ${age < 18 ? 'not ': '' }adult`);

let add = (a,b) => a+b;
let sqr = x => x*x;
// console.log(add);
// console.log(sqr);

// arrow function this
// function testMe(){
//     console.log(this);
// }

// testMe.call({}); //return empty object


let obje = {
    name: 'Hm Nayem',
    print: () => {
        console.log(`${this.name}`);
    }
}

// obje.print() //return window, or undefined use strict mode of babel

let obj = {
    name : 'Hm Nayem',
    print : function (){
        // console.log(`${this.name}`);
        // let self = this;
        setTimeout( () => {
            console.log(this);
            // console.log(`Hello ${self.name}`);
             console.log(`Hello ${this.name}`);
        }, 1000)
    }
}

// obj.print();


// default parameters

function defaultPer(n=10){
    return n*n;
}
// console.log(defaultPer(5));

function greet(name='Hm Nayem', msg='hello'){
    console.log(name.length);
    console.log(`${msg}!  ${name}`);
}

// greet()


// Custom Iteratable Object

let objCustoItarable = {
    start: 1,
    end: 10,
    [Symbol.iterator]: function (){
        let currentValue = this.start;
        const self = this;
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}

// for(let v of objCustoItarable){
//     console.log(v);
// }


let iterate = objCustoItarable[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// some object change in es6
let a1 = 10, b1 = 20
let objectIteralES5 = {
    a1,
    b1,
    print(){
        console.log(this);
    }
}

// console.log(objectIteralES5);


let objeOfArr = {
    a:10,
    b: 20
}
// object to arr
// console.log(Object.entries(objeOfArr));

// arr to object
let arrayToObj = [
    ['a', 10],
    ['b', 20]
];

// console.log(Object.fromEntries(arrayToObj));

// symbol
let s1 = Symbol();
let s2 = Symbol('test')

console.log(s1);
console.log(s2);
console.log(s1 === s2);
// ename system
let toss = {
    HEAD: Symbol("HEAD"),
    TELL: Symbol("TELL")
}

function createIterator(collection){
    let i = 0
    return {
        next() {
            return {
                done : i >= collection.length,
                value: collection[i++]
            }
        }
    }
}




// let iterate1 = createIterator(arr)
let iterate1 = arr[Symbol.iterator]()
console.log(iterate1.next());

let str = 'text';
let iterateText = str[Symbol.iterator]();

// console.log(iterateText.next()); 











