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
// setInterval(function () {
//   console.log("line 2 code");
// }, 2000);

console.log("line 3 code");

async function hello() {
  return "hello";
}

// console.log(hello());

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (statusFoCo) {
      resolve("task 2");
    } else {
      reject("Failed");
    }
  }, 2000);
});

// promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("task 3");

const paymne = true;
const marks = 70;

function enroll() {
  console.log("Course Enrollment is in progress .");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment Failed");
      }
    }, 2000);
  });

  return promise;
}

function prograss() {
  console.log("Course In Prograss");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks > 80) {
        resolve();
      } else {
        reject("You Could Not Get Enough Mark To Get The Certificate");
      }
    }, 2000);
  });

  return promise;
}

function getCertificate() {
  console.log("preparing your certificate");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! You Got The Certificate");
    }, 1000);
  });

  return promise;
}

// solve with async await
async function course() {
  try {
    await enroll();
    await prograss();
    const message = await getCertificate();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();
