let x = 10 / "Apple";
// console.log(isNaN(x));
let see = 10;
let see2 = NaN;
// console.log(see / see2)
// console.log(typeof NaN)

let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
// console.log(myNumber);
// console.log(typeof Infinity);

let number = 32;
// console.log(number.toString(10))

let inch = 60;
let feet = inch / 12;
// console.log(feet);

let xstring = 123;
// xstring = xstring.toString();
// xstring = xstring.toExponential(1);
// xstring = xstring.toFixed();
xstring = xstring.toPrecision(3);
console.log(xstring);

let billion = 1e6;
