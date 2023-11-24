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
for (myIteratorMap of myIterator) {
  console.log(myIteratorMap);
}
