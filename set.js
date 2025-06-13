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


console.log('does the salad have a carrot?'.saladSet.has('carrot'));  //true

saladSet.delete('avocado')

console.log(saladSet); //// set(4) {"tomato","carrot",cucumber}

saladSet.clear() // clear the set

// region iterate over set

const houseNo = new Set([360, 567, 101])

houseNo.values() //setIterator 360,567
houseNo.keys() // save iterator 360...
houseNo.entries() // give keys and value, but key and value are same {360 => 360}

// convert set into array
const houseNoArr = [...houseNo];
console.log(houseNoArr);

const mixedFruit = ['watermelon', 'tomato', 'watermelon', 'avcado', 'apple', 'tomato', 'avcado']
const mixedFruitSet = new Set(mixedFruit)

let person = {
  'name': 'alex',
  'age':32
}

const pSet = new Set()
pSet.add(person)

// person.name = 'Bob' /// mutation name = 'Bob' in set
person = {}; // reassign create two entries one have person data and second have empty object

pSet.add(person)


// set theories
const first = new Set([1,2,3])
const second = new Set([3,4,5]);

// union 
console.log(first.union(second));

// intersection

console.log(first.intersection(second));

// difference
console.log(first.difference(second));

