console.log(Number("3.14"));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("3 14"));
console.log(Number("sumit"));

console.log(parseFloat(3.4));
console.log(parseInt(3.5));

let y = "5";
let x = +y; // x convert to a number

// string to number
console.log(String(123));
console.log(String(11 + 22));

console.log((123).toString());

let a = 10e6;
console.log(a.toExponential());
let b = 20.3;
console.log(b.toFixed());

let precision = 10.37865;
console.log(precision.toPrecision(3));

// convert Date to number

let d = new Date();
console.log(Number(d));
console.log(d.getTime());

// convert Date to String

console.log(d.toString());

// convert to boolean
console.log(Number(false));
console.log(Number(true));

// conver to boolean to string
console.log(String(false));
console.log(String(true));

console.log(false.toString());

// automatic type convertion
console.log(5 + null); // 5
console.log("5" + null); //5null
console.log("5" + 2); // 52
console.log("5" - 2); //3
console.log("5" * "2"); //10

// automatic string convertion
