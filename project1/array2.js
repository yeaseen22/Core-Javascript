// imperative way
// Array list..
const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

// undefined counter..
let countUndefined = 0;

// Make operations..
for (let i = 1; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== 'number') {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }

  if (arr[i] === undefined){
    countUndefined += 1;
  }
}

// Decrease the array size..
arr.length -= countUndefined;
console.log('After Operation', arr);


// for in loop
const arrForIn = ['A', 'L', 'P', 'I'];

for (let i in arrForIn){
  console.log(arrForIn[i]);
}

// for of loop
const arrForOf = ['A', 'L', 'P', 'I'];

for (let item of arrForOf){
  console.log(item);
}

// solve a problem with declarative way
// Array list..
const arrProblem2 = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

// Operation..
const filterArray = arrProblem2.filter((value) => {
  return typeof value === 'number';
});

console.log(filterArray);


// forEach method
// Array list..
const arrFroE = [12, 23, 21, 55, 6];

// Traversing with foreach-function..
arrForE.foreach((value, index, array) => {
	console.log(value, index, array);
});

// If only Array needs..
arrForE.foreach((_, __, array) => {
	console.log(array);
});

// If only Index needs..
arrForE.foreach((_, index) => {
	console.log(index);
});


// Update array data with findIndex method. And index’s are starts with 0 in every programming language.

// Array list..
const arrforFindI = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
  ];
  
  // Getting the Index of id = 4;
  const index = arrforFind.findIndex(function (V) {
    return V.id === 4;
  });
  
  // Update Operation..
  arrforFindI[index].value = 400;
  console.log(arrforFindI)


