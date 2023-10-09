// array constructor pattern
// const a1 = new Array(); // we can also pute size of array
// console.log(a1, a1.length);

// const a2 = new Array(12, 34, 45, 55, 56, 5);
// console.log(a2, a2.length);

// Factory Pattern
// const a3 = Array();
// console.log(a3);

// console.log(a1.__proto__.constructor);
// console.log(a3.__proto__.constructor);

// Array Traverse Array Element
// const arr = [23, 34, 56, 79, 99, 57, 10, 45, 67, 88, 90, 11];
// const n = arr[3];
// const m = arr[2];
// const x=1, y=0;
// console.log(m, n, arr[x], arr[y], arr[x]+arr[y], arr[x+y+1])

// simple traverse
// var sum = 0;
// for(let i=0; i<arr.length; i++){
//      sum = sum+arr[i];
// }
// console.log(sum)

// let smollestEle = arr[0];
// for (var i = 1; i < arr.length; i++) {
//   if (arr[i] > smollestEle) {
//     smollestEle = arr[i];
//   }
// }

// console.log(arr.length)
// console.log(smollestEle);

// Array Reducer function
// var number = [1, 3, 45, 66, 90, 78];
var number = ["fdff", "fdfffffe", "ffeyfefhu", "fsdfet", "fdffg"];
var number2 = ["fdff1", "fdfffffe2", "ffeyfefhu3", "fsdfet4", "fdffg5"];

// var result = number.reduce( (prevValue, curentValue, currentIndes, arr) => {
//   return prevValue + curentValue;
// }, 0);
// console.log(result)

// var sum = number.reduce( function (pre, current, index, arr) {
//    return pre + current;
// }, 0 )

// console.log(sum)

// let string = number.toString()
// let string = number.join("*")
// let string = number.pop()
// let string = number.push("HiThere")
// let string = number.shift()
// let string = number.unshift("Habijabi")
// number[number.length] = 'kiwi'
// let string = delete number[0]
// let string = number.splice(2, 0, "Banana", "Kiwi")
// let string = number.splice(2, 2, "Banana", "Kiwi")
// let string = number.concat(number2)
// let string = number.slice(1, 3)
// console.log(string)
// console.log(number)

// const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const n = Arr[3];
// const m = Arr[2];
// const x = 1, y = 0;
// console.log( Arr[x], Arr[y], Arr[x] + Arr[y], ' sum ', Arr[x+y+1]);

// let sum = 0;
// tranverse
// for(let i = 0; i < Arr.length; i++){
//   // console.log(Arr[i])
//   sum+= Arr[i];
// }
// console.log(sum)
// find the Avg
// console.log(sum/Arr.length)

// find the largest
// let largestNumber = Arr[0];

// for(let i = 1; i < Arr.length; i++){
//   if(Arr[i] < largestNumber){
//     largestNumber = Arr[i];
//   }
// }

// console.log(largestNumber);

// largest and second largest element
const array = [32, 523, 5632, 920, 6000];

// let largestNum = array[0];
// let secondLargestNum = 0;

// for(let i = 1; i < array.length; i++) {
// 	if(array[i] > largestNum) {
//     secondLargestNum = largestNum;
//     largestNum = array[i];
//     }
//   // else if (array[i] !== largestNum && array[i] > secondLargestNum) {
//   // secondLargestNum = array[i];
//   // }
// };
// console.log("Largest Number in the array is " + largestNum);
// console.log("Second Largest Number in the array is " + secondLargestNum);

// smallest and second smallest element in array
// var arr = [ 6, 3, 5, 2, 9 ];
// 		var smallest = arr[0];
// 		var secondSmallest = arr[1];

// 		for(var i = 0; i < arr.length; i++) {
// 			if(arr[i] < smallest) {
// 				smallest = arr[i];
// 			}

// 			if(arr[i] > smallest && arr[i] < secondSmallest ) {
// 				secondSmallest = arr[i];
// 			}
// 		}

// 		// console.log(secondSmallest);
//     // console.log(smallest);

// // add a new element in array
// // use unshift to insert at the end
const arrp1 = [1, 3, 4, 5];
arrp1[arrp1.length] = 88;
arrp1.push(22, 44);
// console.log(arrp1)

const arrp2 = [90, 101];
// arrp1.push(...arrp2) // or
Array.prototype.push.apply(arrp1, arrp2);
// // console.log(arrp1)

// // use unshift to insert at the beginning
const arrul = [5, 7, 8, 9, 10];
arrul.unshift(4);
const arrul2 = [1, 2, 3];
arrul.unshift(...arrul2);
Array.prototype.unshift.apply(arrul, arrul2);
// // console.log(arrul)

// use Splice to insert at the given index
const arrS1 = [1, 2, 3, 5, 9];
const arrs2 = [10, 11, 12, 14];
arrS1.splice(3, 0, 4);
arrS1.splice(5, 0, 6, 7, 8);
arrS1.splice(9, 0, ...arrs2);
// console.log(arrS1)

// // updating existing elemnt in array
const numbers = [1, 2, 4, 6, 7];
numbers[2] = 3;
numbers[3] = 4;
numbers[4] = 5;
numbers[5] = 6;
// console.log(numbers);

// array of object
const student = [
  { id: 1, names: "nayem1" },
  { id: 2, names: "nayem2" },
  { id: 3, names: "nayem3" },
  { id: 4, names: "nayem4" },
  { id: 5, names: "nayem5" },
];

const givenID = 3;
const updatedName = "Shayaike Salvi";

for (let i = 0; i < student.length; i++) {
  if (givenID === student[i].id) {
    student[i].names = updatedName;
    break;
  }
}

// console.log(student)

// multi Dimensional
const arrays = [];
arrays[2] = 90;
// console.log(arrays[2]);

const names = [
  "Hm Nayem",
  "Shegufa Taranjum",
  "Shayaike Salvy",
  "Badhon Khan",
  "Sakib Al Hasan",
  "Mehedi Hasan",
  "Asif Mahir",
];

// add element dynamicaly
names[names.length] = "Yeasin Arafat";
// console.log(names.length);

// constructor pattern
const a1 = new Array(1, 2, 3, 4, 5);
// console.log(a1, a1.length);

// // Factory pattern
const b1 = Array();
// console.log(a1.__proto__.constructor);
// console.log(b1.__proto__.constructor)

const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(5, 0, ...arrs2);
// console.log(arrSplice)

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Remove First Element
// Arr.shift();
// Remove Last Element
// Arr.pop();
// Arr.length = Arr.length - 1;

// Arr.splice(2,3)
const toBeDeleted = 5;
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] == toBeDeleted) {
    Arr.splice(i, 1);
  }
}

// delete Arr[i];

while (Arr.length) Arr.pop();

const toBeDeleted1 = 6;

Arr.filter((item) => item != toBeDeleted1);

delete Arr[1];

// Reset Whole arrya
let x = [1, 2, 3];
let y = x;
x = [];

//  console.log(x,y);

// Alternative way of reset whole array

let xx = [1, 2, 3];
let yy = xx;
xx.length = [];
//  console.log(xx, yy);

//  Alternative way of reset whole array with while loop

while (Arr.length) Arr.pop();
// console.log(Arr);

// Arr.length = Arr.length - 1;
// console.log(Arr[Arr.length] = null);
// console.log(Arr)

// concate multiple array

const concate1 = [1, 2, 3];
const concate2 = [4, 5, 6];
// const concat3 = concate1.concat(concate2);
const concat3 = [...concate1, ...concate2];
// console.log(concat3);

// array slice Methods
const sliceArr = [1, 2, 3, 4, 5, 6];
const newSliced = sliceArr.slice(1, 4);
const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = FRUITS.slice(0, 3);
// console.log(citrus);
// console.log(newSliced)

// array clone
const cloned = sliceArr.slice();
// console.log(cloned);

// Array like Object to Array
function toArray() {
  // console.log(Array.prototype.slice.call(arguments));
  return Array.prototype.slice.call(arguments);
}

// const argAraay = toArray(4, 3, 7, 8, 9, 'test');
const argAraay = toArray(4, 3, 7, 8);
// console.log(argAraay);

function age(a, b) {
  console.log(arguments);
}
// age(23,4);

// mutlidimensional array

const muti3d = [
  [
    [0.1, 0.1],
    [0.2, 0.2],
  ],
  [
    [0, 0],
    [0, 0],
  ],
];

// console.log(muti3d[0][1]);

const arr2 = Array.from({ length: 3 }, () =>
  Array.from({ length: 4 }, () => 0)
);

arr2[1][2] = 5;

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    //   console.log(arr2[i][j]);
  }
}

// console.log(arr2);

const arr3D = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => 0))
);

// set a value in the array
arr3D[1][1][1] = 5;
// console.log(arr3D);

// loop through the array and print each value
for (let i = 0; i < arr3D.length; i++) {
  for (let j = 0; j < arr3D[i].length; j++) {
    for (let k = 0; k < arr3D[i][j].length; k++) {
      //   console.log(arr3D[i][j][k]);
    }
  }
}

const testArr = ["Banana", "Orange", "Apple", "Mango"];
console.log(testArr.toString());
console.log(testArr);
console.log(typeof testArr);
