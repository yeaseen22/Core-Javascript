// able to remember and access it's lexical scope
// when that function executing outside it's lexical scope

// function test(){
//     var msg = 'I am learning lexical scope and closure';

//     function sayMsg(){
//         console.log(msg);
//     }

//     sayMsg();
// }

// test()

function test() {
  var msg = "I am learning lexical scope and closure";

  return function () {
    // console.log(msg);
  };
}

// var sayMsg =  test();
// sayMsg()

// closure with loop
for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(function () {
      // console.log(n);
    }, 1000 * n);
  })(i);
}

// let counter = 0;

// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// add();
// add();
// add();

function add() {
  let counter = 0;
  return function () {
    counter += 1;
  };
}

let addition = add();
console.log(addition());
