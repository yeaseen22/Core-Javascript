function show(x) {
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod();
  },
};

slow = cachingDecorator(slow);
console.log(slow(1));
console.log("Again" + slow(1));

function sayHi() {
  console.log(this.name);
}

let user = { name: "Jhon" };
let admin = { name: "Admin" };

sayHi.call(user);
sayHi.call(admin);
