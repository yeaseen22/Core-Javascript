let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

let mapTransform = Object.fromEntries(map.entries());
console.log(mapTransform);

console.log(map);

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["totamoes", 350],
//   ["onion", 50],
// ]);

// recipeMap.set("apple", 500);
// recipeMap.get("onion");
// recipeMap.size();
// recipeMap.delete["apple"];

// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable);
// }

// for (let amount of recipeMap.values()) {
//   console.log(amount);
// }

// for (let entry of recipeMap) {
//   console.log(entry);
// }

// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

let obj = {
  name: "Jhon",
  age: 33,
};

let objToMap = new Map(Object.entries(obj));
console.log('testing',objToMap);

let mapToObj = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log('testing result ',mapToObj.meat);

// mow create set
let set = new Set([["oranges", "apples", "bananas"]]);
let objToSet = new Set(Object.entries(obj));
console.log('set', objToSet);


// for (let value of set) {
//   console.log(value);
// }

// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });
