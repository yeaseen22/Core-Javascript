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

console.log(reducedFlatMap);
console.log(reducedFlatMap1);
