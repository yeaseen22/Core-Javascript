// data
const date = new Date();
console.log(date.getDate());

let car = undefined;
let car2 = null;
let car3 = Number();
let car4 = "";
// typeof car;
console.log(typeof car);
console.log(typeof car2);
console.log(typeof car4);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let cel = toCelsius(33);
// let cel3 = cel(); cel is not a function
// console.log(cel3);
