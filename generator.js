function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* range(start = 0, stop = 100, step = 5) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}

// generate unique id
function* generateId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const userId = generateId();
console.log("user id", userId.next().value);
console.log("user id", userId.next().value);
console.log("user id", userId.next().value);
console.log("user id", userId.next().value);
