// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer

//     alert( from + ': ' + text );
//   }

//   let from = "Ann";

//   showMessage(from, "Hello"); // *Ann*: Hello

//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ann

function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}

// showMessage("Ann",);

//#region javascript reflection
const greeting = new Function(
  "name",
  "email",

  `const fName = name.split(' ')[0];
   console.log("Hello,", fName, "Is that your email?", email);
   console.log("Yah This Is Mine");
   return fName;
  `
);

console.log(typeof greeting);
const fName = greeting("Hm Nayem", "hmnayme@gmail.com");
console.log("First Name", fName);

let arr = [function () {}];
console.log(arr[0]);

let sum = new Function("a", "b", "return a+ b");

//#region nested setTimeout
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);

//#region a common interview problem
for (let i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

// solve this problem via IIFE
