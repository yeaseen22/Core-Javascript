"use strict"

function sum(a, b){
    console.log(arguments.length);
    var sum = a+b;
    console.log(sum);
}

sum(22, 44);