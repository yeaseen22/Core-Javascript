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
console.log('testing', objToMap);

let mapToObj = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log('testing result ', mapToObj.meat);

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

// key can be any type, map remember the original order in which the element were added to it.

const map1 = new Map([
  ['name', 'typescirpt'],
  ['type', 'Yt'],
  ['owner', 'tapas']
])

map1.set('owner', 'ts') /// owner key value replace
map1.get('owner')

const funMap = new Map();

funMap.set(500, 'house');
funMap.set('true', 'checking');

let obj_map = { 'name': 'example' }

funMap.set(obj, true)


// create empty object
const funObj = {}
funObj[500] = 'housing number';
console.log(funObj[500] === funObj['500']); //true typecoerse
console.log(funMap.get(500) === funMap.get('500')); //false


// region map property and method
console.log(funMap.size);

console.log(funMap.has(500)); //true  but string 300 should be false

funMap.delete(500)
funMap.clear()

console.log('last map', funMap);

// region iterate over map
const ageMap = new Map([
  ['Jack', 20],
  ['Alan', 34],
  ['Bill', 10],
  ['Sam', 9]
]);
// getting all the keys
console.log(ageMap.keys());


// const mitr = ageMap.keys();
// console.log('mtr' ,mitr);
// mitr.forEach((item) => {
// console.log(item)
// })

console.log(ageMap.values());
console.log(ageMap.entries());
ageMap.forEach((key,value) => {
  console.log(`${key} is ${value} years old`);
  
})

// for(const [keys,value] of ageMap){
//   console.log(`${keys} is ${value} years old`);
// }