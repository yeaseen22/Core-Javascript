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

greet()



