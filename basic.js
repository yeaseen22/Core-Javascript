const fruits = ["banana", "apple", "peach"];

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

let str = "Hello";
// console.log(str.charAt(0));
// console.log(str.length);
// console.log(str.toUpperCase());

const myString = "Hello, World!";
const myArray = myString.split(", ");
console.log(myArray);

const upperCaseString = myString.toUpperCase();
// console.log(upperCaseString);

// console.log(isNaN(str));

// scope
{
  var a = 5;
}

// console.log(a);

{
  //    let forlet = 5;
}
// console.log(forlet);

function test() {
  var a1 = "hello";
  let b1 = "bye";

  if (true) {
    let a1 = "HI";
    // var b1 = 'good bye' //this call illigal shadowing
    console.log(a1);
    console.log(b);
  }
}
// test();

// var vs let vs const
// Declaration

// map function

const nums = [1, 2, 3];
const mutiply = nums.map((num, i) => {
  return num * 3 + 1;
});

// console.log(mutiply);

// filter
const moreThenTwo = nums.filter((num, i) => {
  return num > 2;
});
console.log(moreThenTwo);

const sum = nums.reduce(
  (acc, curr) => {
    return acc;
  },
  { nums }
);

const afterReduce = sum.nums.map((n) => {
  return n;
});
console.log(afterReduce, "hi");
