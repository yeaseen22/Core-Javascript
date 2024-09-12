let arr = [1, 2, 3, 4, 5];

// function someFuncton (accumulator, current) {
//     return accumulator + current;
// }

// const sum  = arr.reduce(someFuncton)
// console.log(sum)

// function reduce(accumulator, current) {
//   return accumulator + current;
// }

// const sumForReduce = arr.reduce(reduce);
// console.log(sumForReduce);

const avg = arr.reduce((a, b, index, arr) => {
  a += b;
  if (index === arr.length - 1) {
    return a / arr.length;
  }
  return a;
});

// console.log(avg)

const name = ["Yeaseen Arafat", "Afsan Mim", "Lavoni", "Fahim", "Nahid"];

const votes = ["java", "phython", "javascript", "Go lang", "php"];

function sumFunc(acc, curr, index, arr) {
  // console.log(`Index ${index} - Acc ${acc} - Cur ${curr}`);
  // console.log(index);
  return acc + curr;
}
// const sum = arr.reduce(sumFunc, 10);
// console.log(sum);
// console.log()

const nestedArray = [[1, 2], 3, [4, 5]];

// const flatedArray1 = nestedArray.flat();
// console.log(flatedArray1);

// using reduce implement flate feature
const flatedArray2 = nestedArray.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

// console.log(flatedArray2);

const arr2 = [1, 2, 3, 4, 5];

const arr2Map = arr2.map((x) => [x]);
console.log(arr2Map);

const flatMap = arr2.flatMap((x) => [x * 2]);
console.log(flatMap);

const reducedFlatMap = arr2.reduce((acc, cur) => {
  return acc.concat(cur * 2);
}, []);

const reducedFlatMap1 = arr2.reduce((acc, cur) => {
  return acc.concat([cur, cur * 2]);
}, []);

// console.log(reducedFlatMap);
// console.log(reducedFlatMap1);

const votes1 = [
  "Java",
  "Java",
  "Python",
  "Java",
  "JavaScript",
  "Python",
  "JavaScript",
];

const reuslt = votes1.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(reuslt);

// output example
// const result = {
//   Java: 3,
//   Paython: 2,
//   JavaScript: 2,
// };

/**
 * @title: our own reduce
 */

function myReduce(arr, cb, init) {
  let acc = init,
    start = 0;
  if (!init) {
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
}

console.log(
  myReduce(arr, (acc, cur) => {
    return acc + cur;
  })
);

let products = [
  { name: "Js CookeBook", price: 350 },
  { name: "Head First Python", price: 200 },
  { name: "Head First Java", price: 400 },
  { name: "Js CookeBook", price: 350 },
  { name: "Head First Java", price: 400 },
  { name: "Js CookeBook", price: 350 },
  { name: "Js CookeBook", price: 350 },
];

const Invoice = products.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantity++;
    acc[cur.name].price += cur.price;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

// console.log(Invoice);

/**
 * 'Js CookeBooke': {price 1400, quantity: 4}
 * 'Js CookeBooke': {price 200, quantity: 1}
 * 'Js CookeBooke': {price 800, quantity: 2}
 * **/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Horizontal sum
const resultH = matrix.map((row) => {
  return row.reduce((a, b) => a + b);
});
console.log(resultH);

// Vertical sum
const resultV = matrix.reduce((acc, cur) => {
  return acc.map((v, i) => cur[i] + v);
});
console.log(resultV);

// flat sum
const flatSum = matrix.reduce((acc, cur) => {
  return acc + cur.reduce((a, b) => a + b);
}, 0);
console.log(flatSum);

// mapped
const squares = arr2.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);
console.log(squares, "reduced");
