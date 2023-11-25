function main() {
  setTimeout(() => {
    console.log("Something");
  }, 0);

  test();
}

function test() {
  console.log("Test");
}

// main();

// first we learn callback
function display(some) {
  console.log(some);
}

function calculate(num1, num2, callback) {
  //   return num1 + num2;
  let sum = num1 + num2;
  //   display(sum);
  if (callback) callback(sum);
  return sum;
}

// console.log(calculate(5, 5, display));
// display(result);
// let result = calculate(5, 5);
// console.log(result);

console.log("line 1 code");
// setTimeout(
//   (function () {
//     console.log("line 2 code");
//   },
//   2000)
// );
setInterval(
  (function () {
    console.log("line 2 code");
  },
  2000)
);

console.log("line 3 code");
