`By specification, only two primitive types may serve as object property keys:

string type, or
symbol type.`;

let id = Symbol("id");
console.dir(id);
console.log(id);
console.log(id.toString());
console.log(id.description);

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
