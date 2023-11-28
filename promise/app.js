// firstPromise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'one')
// });

// secondPromise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'two')
// });

// secondPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }).catch((e)=>{
//     console.log(e);
// })

// firstPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }).catch((e)=>{
//     console.log(e);
// })

// console.log(firstPromise);
// console.log(secondPromise);

// function getIphone(isPassed) {
//     let iphonePromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPassed) {
//                 resolve('I have got my I phone')
//             } else { reject(new Error('I am failed')) }
//         }, 2000)
//     })

//     return iphonePromise
// }
// getIphone(true)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((e) =>{
//         console.log(e.message);
//     })

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// fetch(`${BASE_URL}/users/1`)
//     .then((res)=>res.json())
//     .then((data)=> Promise.resolve(data))
//     .then((str) => console.log(str))
//     .catch((e)=>{console.log(e);})

// function getRequest(url) {

//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest();
//         xhr.open('get', url);

//         xhr.onreadystatechange = function (e) {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error('Error Occured'))
//                 }
//             }
//         }

//         xhr.send()
//     });
// }

// let res = getRequest(`${BASE_URL}/users/1`)
// console.log(res);
// getRequest(`${BASE_URL}/users/1`)
//     .then((data)=> console.log(data))
//     .catch((e)=>console.log(e.message))

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Hi all ${username}`);
  }, 1000);
}

function likevideo(video, cb) {
  setTimeout(() => {
    cb(`Hi all ${video}`);
  }, 1000);
}

const message = importantAction("Roadise", function (message) {
  console.log(message);

  likevideo("watch the video", (message) => {
    console.log("message was printed");
  });
});

console.log("stop");

var module = (function () {
  function privateMethod() {}

  return {
    publicMethod: function () {
      // call private function
    },
  };
})();

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Hello Promise");
    else {
      reject(new Error("Why aren't full field the task"));
    }
  }, 1000);
});

// sub.then((res) =>{
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

importantAction("Hello")
  .then((res) => {
    console.log(res);
    return likevideo("Hello video");
  })
  .catch((error) => {
    console.log(error);
  });

// prmise combinator

// Promise.all([importantAction, likevideo])
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log('Error Occured', error);
//     })

//     Promise.race([importantAction, likevideo])
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log('Error Occured', error);
//     })

//     Promise.allSettled([importantAction, likevideo])
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log('Error Occured', error);
//     })

//     Promise.any([importantAction, likevideo])
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log('Error Occured', error);
//     })

const result = async () => {
  // const message1 = await importantAction('Hello Important')
  // const messag2 = await likevideo('Like it man')
  // console.log({message1, messag2})

  try {
    const message1 = await importantAction("Hello Important");
    const messag2 = await likevideo("Like it man");
    console.log({ message1, messag2 });
  } catch (error) {
    console.log("Error occured", error);
  }
};

// result();

const statusFoCo = true;

console.log("task 1");

// promise defination
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

enroll()
  .then(prograss)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
