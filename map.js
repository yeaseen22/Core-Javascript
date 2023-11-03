let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

let mapTransform = Object.fromEntries(map.entries());
console.log(mapTransform);

console.log(map);

let recipeMap = new Map([
  ["cucumber", 500],
  ["totamoes", 350],
  ["onion", 50],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (let amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap) {
  console.log(entry);
}

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

let obj = {
  name: "Jhon",
  age: 33,
};

let objToMap = new map(Object.entries(obj));
console.log(objToMap);

let mapToObj = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log(mapToObj.banana);

// mow create set
let set = new Set([["oranges", "apples", "bananas"]]);

for (let value of set) {
  console.log(value);
}

set.forEach((value, valueAgain, set) => {
  console.log(value);
});
