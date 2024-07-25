
let names = [
    'stack learner',
    'stack school',
    'stack consultancy',
    'stack solution'
];

//#region Iteration Logic --> Business Logic

// function resue (arr, logic) {
//     for(let i = 0; i < arr.length; i++) {
//         // console.log(arr);
//         logic(arr[i], i, arr);
//     }
// }

// function log (value) {
//     console.log(value);
// }

// function logic (value, index, arr) {
//     console.log( value, index, arr);
// }

// // resue('foreach');
// resue([1, 2], log);
// resue(['one', 'two', 'three'], logic);


//#region own foreach
function myForEach (arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const nums = [1, 2, 3, 4];
let sum = 0;

function sumFunc (value) {
    sum+= value;
}

myForEach(nums, sumFunc);
console.log(sum);

myForEach(names, function (value, index, arr) {
    console.log(`${index + 1}: ${value}`);
    console.log(arr);
});

