// also with no farameters
var num1 = 2;
// var num2 = 39;

// var sum = function () {
//   return num1 + num2;
// };

// // console.log(sum());
// console.dir(sum)

// different case
var sum = function () {
  var num2 = 39;
  return function () {
    return num1 + num2;
  };
};

var myFunc = sum();
console.dir(myFunc);

// more use case for understand closure

function banckAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}

var account = banckAccount(100000);
console.dir(account);

// more on closure

var sum = function () {
  var num2 = 3;
  var num = 6;

  return function () {
    return num, num1, num2;
  };
};

myFunc = sum();
console.dir(myFunc);

// using let keyword
let nums = 2;
let nums2 = 4;

sum = function () {
  return nums + nums2;
};

console.dir(sum);

// more flexibility with closure

function stopWathc() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

var timer = stopWathc();

for (var i = 0; i < 10000000; i++) {
  var a = Math.random() * 10000000;
}

timer;
console.dir(timer);
timer = null;

// Asynchronous way of refresenting closure

var a;

function async() {
  a = 20;

  setTimeout(() => {
    console.log(a);
  }, 3000);
  console.dir(async);
}

async();
a = 30;

// with api link fake api

function apiFunction(url) {
  fetch(url).then((res) => {
    console.log(res);
  });
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");
