let king = "John Doe";

if (true) {
  let king = "Sam";

  if (true) {
    let king = "MD+s";
    // console.log(king)
  }
}

if (true) {
  // console.log( "I am part one "+ king)
}

var x = 14;

function test() {
  var x = 10;
  // console.log(x);
  function nested() {
    var y = 45;
    console.log(x);
  }
  console.log(y);
  nested();
}
// test();

// scope chain
var a2 = 11;

function A() {
  var b2 = 12;

  function B() {
    var c = 23;
    console.log(c);
  }

  function C() {
    var d = 56;
    console.log(d);
  }

  console.log(b);

  D(b2);
  B();
  C();
}

function D(n) {
  return n + a2;
}

function subscripe() {
  var name = "Stack Learner";
  function displayName() {
    console.log(name);
  }
  displayName();
}

subscripe();
