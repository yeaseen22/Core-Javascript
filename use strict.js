"use strict"

function sum(a, b){
    // arguments always unchange in use strict mode
    console.log(arguments.length);
    var sum = a+b;
    console.log(sum);
}

sum(22, 44);

function test(){
    // this will be undefined in strict mode
    console.log(this);
}

test()

delete Object.prototype
console.log(Object.prototype); // in strict mode it throw uncaught type error

// first parameter overwright without any warining, but strict mode  save us
function magicalFunction(name,superPower,superPower){
    return `${name} super power is ${superPower}`
}

console.log(magicalFunction('Flash','Speed','Flight'));


