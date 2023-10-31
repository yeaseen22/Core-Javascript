`By specification, only two primitive types may serve as object property keys:

string type, or
symbol type.`;

let id = Symbol("id");
// console.dir(id);
// console.log(id);
// console.log(id.toString());
// console.log(id.description);

let user = {
  name: "Jhon",
  money: 123,
  [id]: 123,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: ${this.name}"}` : this.money;
  },
};

// user[id] = 1;

// user[id] = "their id value"; // if use this do with symbol, don't use with dote notation string
// console.log("id checked ", user[id]);
// console.log(user);

// Symbol Feature in js

let symbol1 = Symbol(`I am symbol 1`);
let symbol2 = Symbol("I am symbol 2");

// console.log(symbol1 == symbol2);
// console.log(symbol1 === symbol2);
// console.log(symbol1);

let symbolFor1 = Symbol.for("name1");
let symbolFor2 = Symbol.for("name1");
// console.log(symbolFor1 === symbolFor2);

let cricket = Symbol.for("This Is Cricket Symbol");

var object = {
  name: "Shakib",
  [cricket]: "Bangladesh",
};

// console.log(object[cricket]);

// why symbol

let object1 = {};
object1.name = "javascript";
object1.estd = 1992;

// hidden properties
object1[Symbol("founder")] = "Brendan Eich";
console.log(object1);

for (let key in object1) {
  console.log(key);
}

console.log(Object.keys(object1));

let myOwnArMethSymbol = Symbol("My Own method");
Array.prototype[myOwnArMethSymbol] = () => {
  console.log("This is an custom array function");
};

let MYArr = [1, 2, 3];
// console.log(MYArr["myOwnArMethSymbol"](2));
MYArr[myOwnArMethSymbol](2);
// MYArr.myOwnArMethSymbol(2);
// console.log(MYArr);

// example fo Symbol.iterator

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

// symbol iterator as string
let str = "Hello";

let iterate = str[Symbol.iterator]();

while (true) {
  let result = iterate.next();
  if (result.done) break;
  console.log(result.value);
}

// well knows symbols

function myFunc() {
  const PVT = Symbol("my private value");

  return {
    modify(obj) {
      obj[PVT] = true;
    },
    output(obj) {
      return obj[PVT];
    },
  };
}

const value = myFunc();
const obj = { a: 1, b: 1 };

value.modify(obj);
console.log(value.output(obj));
delete obj[Symbol("my private value")];

console.log(obj);
