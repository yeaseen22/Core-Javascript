const letters = new Set(["a"]);
letters.add("b");
const c = "c";
letters.add(c);

// forEach fro set
let text = "";
letters.forEach(function (value) {
  text += value;
});
// console.log(letters.values());

const sets = new Set();
console.dir(sets.values());

const myIterator = letters.entries();
for (const myIteratorMap of myIterator) {
  console.log(myIteratorMap);
}

// set a collection of unique elements any type
const set = new Set()
const fruitSet = new Set(['watermelon', 'tomato', 'apple', 'abquodo'])
const saladSet = new Set();
saladSet.add('tomato')
saladSet.add('avocado')
saladSet.add('carrot')
saladSet.add('cucumber');

console.log(saladSet); // set(4) {"tomato","avocado","carrot",cucumber}

saladSet.add('cucumer') //not allow duplicate

console.log(saladSet);


console.log('does the salad have a carrot?'. saladSet.has('carrot'));  //true

saladSet.delete('avocado')

console.log(saladSet); //// set(4) {"tomato","carrot",cucumber}

saladSet.clear() // clear the set

// region iterate over set

const houseNo = new Set([360,567,101])

houseNo.values() //setIterator 360,567
houseNo.keys() // save iterator 360...
houseNo.entries() // give keys and value, but key and value are same {360 => 360}

