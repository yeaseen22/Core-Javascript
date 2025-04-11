"use strict"
console.log('E = ',Math.E);
console.log("PI = ",Math.PI);
var n = -4.333;
var n2 = 5.78;
console.log("abs = ",Math.abs(n));
console.log("floor",Math.floor(n))
console.log('ceil = ',Math.ceil(n2));
console.log('max = ',Math.max(400, 500));
console.log('min = ',Math.min(400, 500));
console.log('pow = ',Math.pow(2, 3));
console.log('pow = ',Math.pow(2, 10));
console.log('sqrt = ',Math.sqrt(9));

// randow number generator
console.log('random and round = ',Math.round(Math.random() * 50 + 1));

var date = new Date();
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());

console.log(date.getMonth());
console.log(date.getDate());