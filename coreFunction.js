function some(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
}

// some(10, 20, 20)

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

// addAll(1,2,3);
// addAll(1,2,3,4,5,6,7,8,9);

// return something from a function

function addAll2() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var result = addAll2(1, 2, 3);
// console.log(result);

// function expression
// var addition = function addAll3 (a,b) {
//     return a+b;
// }

var addition = function (a, b) {
  //anonymous
  return a + b;
};

// setTimeout( function () {
//     console.log('I am called after 2 second');
// }, 2000 );

// inner function
function something(name, greet) {
  function firstName() {
    if (name) {
      return name.splite("")[0];
    } else {
      return "";
    }
  }

  var message = greet + " " + firstName();
}

// something('Good Morning', 'Hm Nayem')

// function scope

function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log("Both numbers are divisibaled by 3 and 5");
  } else {
    console.log("Not a valid number");
  }
}

test(15);

// call method
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "" + city + country;
  },
};

const person1 = {
  firstName: "Hm",
  lastName: "Nayem",
};

const person2 = {
  firstName: "Khaled",
  lastName: "Saifuallah",
};

// let practiceCall = person.fullName.call(person1, "Dhaka", "Bangladesh");
// console.log(practiceCall);

// apply method

let practiceApply = person.fullName.apply(person1, ["Dhaka", "Bangladesh"]);

let max = Math.max.apply(null, [1, 2, 3]);
console.log(max);
