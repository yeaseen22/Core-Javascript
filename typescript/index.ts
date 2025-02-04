console.log("Hello world");

// region typescript primitive types
let sales: number = 10;
let course: string = "typescript";
let is_published: boolean = true;

console.log(sales, course, is_published);

let x: undefined = undefined;
let y: null = null;

// region never cannot be assign
let neverValue: never;

// region unknow
let w: unknown = 10;
w = "hello"; // not error of unknown case

// region any type example
let v: any = true;
v = "string";

// region ts array types
const names: string[] = ["a", "b", "c"];
const numbers: number[] = [1, 2, 3];
const booleans: boolean[] = [true, false, true];

// region ts tuples
let outTuple: [number, string, boolean] = [1, "hello", true];
const outTouple2: readonly [number, string, boolean] = [
  1,
  "second touple value",
  true,
];

// region ts object type
let person: {
  name: string;
  age: number;
};

person = {
  name: "Name",
  age: 30,
};

// region with type alias
type Person = {
  name: string;
  age?: number;
};

let join: Person = {
  name: "Join",
};

// region with interface
interface Person2 {
  name: string;
  age?: number;
  degree?: string;
}

let jane: Person2 = {
  name: "Jane",
  age: 30,

};
console.log(jane.name);
