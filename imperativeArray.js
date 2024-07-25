// Array list...
const arr = [12,33,54, 56,90];

// Traversing with for-loop..
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
};

//#region problem solving with (Imperative way)

//#region Array List...
const arr1 = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

//#region undefined counter..
let countUndefined = 0;

//#region make operation...
for(let i = 0; i < arr1.length; i++) {
    for(let j = i; j < arr1.length - 1; j++) {
        if( !arr1[j] || typeof arr1[j] !== 'number') {
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = undefined;
        }
    }

    if( arr1[i] === undefined ) {
        countUndefined += 1;
    }
}

//#region Decrease the array size..
arr1.length -= countUndefined;
// console.log('After Operation ', arr1);


//#region tranversiong with for in loop
const forInLoop = ['A', 'L', 'P', 'H', 'A'];

for(let i in forInLoop) {
    console.log(forInLoop[i]);
}






