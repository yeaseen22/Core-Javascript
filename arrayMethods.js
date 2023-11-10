let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1); // splice method is mutable

// arr.splice(0, 3, "lets", "dance");
// arr.splice(2, 0, "lets", "dance");

// console.log(arr);
// console.log(arr.length);

// let coptOfArr = arr.slice(1, 4); // slice isimmutable
// console.log(coptOfArr);
// console.log(arr);

arr.forEach((item, index, array) => {
  console.log(
    `arr item are ${item}, index are ${index}, array element are ${array}`
  );
});

console.log(arr);

let users = [
  { id: 1, name: "Jhon" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "Doe" },
];

let userArr = users.find((item) => item.id == 1);
let someUser = users.filter((item) => item.id > 3);
console.log(users.findIndex((user) => user.name == "Pete"));
console.log(users.findLastIndex((user) => user.name == "Doe"));
console.log(someUser);
console.log(userArr);

function compareNumber(a, b) {
  // if (a > b) return 1;
  // if (a == b) return 0;
  // if (a < b) return -1;
  return a - b;
}

let arrForSort = [1, 2, 5, 4, 15];

arrForJoin.sort(function (a, b) {
  return a - b;
});
console.log(arrForJoin);
// console.log(arrForSort.sort(compareNumber));

let names = "Bilbo, Gandalf, Nazgul";
let namesArr = ['"Bilbo', "Gandalf", "Nazgul"];
let arrForSplit = names.split(", ");
let arrForJoin = namesArr.join(";");
for (let name of arr) {
  console.log(`A Message to ${name}`);
}

// console.log(arrForJoin);
// console.log(arrForSplit);

const numbers = [34, 55, 23, 1, 66, 43, 2, 4];

function myFunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("---------------");
}

// numbers.forEach(myFunction);
numbers.map(myFunction);

// array contatenation
const myGirl = ["Shegufa", "Tarangum", "Befari"];
const myBoy = ["Hm", "Nayem", "Befari"];
const myChildren = myGirl.concat(myBoy);
console.log(myChildren);

// sorting
