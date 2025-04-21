
let numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curValue) => {
    return acc + curValue
})
console.log(sum);

let avg = numbers.reduce((accumulator, cuurent, index, arr) => {
    accumulator += cuurent;
    if (index === arr.length - 1) {
        return accumulator / arr.length;
    }

    return accumulator
})
console.log(avg, 'average value')


let nestedArray = [[1, 2,], 3, [4, 5], [6]];

const flatedArray1 = nestedArray.flat() // home work for depth params of flat 
console.log(flatedArray1, 'flated with flat method ');

const flatedArray2 = nestedArray.reduce((acc, cur, index) => {
    console.log(acc, 'inside acc');

    // return acc[index] = cur
    return acc.concat(cur)
}, [])
console.log(flatedArray2, ' flated array 2');

const numbers2 = [1, 2, 3, 4, 5, 6]

const map = numbers2.map((x) => [x * 2])
console.log(map, 'maped one');

const flateMap = numbers2.flatMap((x) => [x * 2])
console.log('flatemap one', flateMap);


const flateMap2 = numbers2.flatMap((x) => [x, x * 2])
console.log('flatemap two', flateMap2);


const flateMapReduce = numbers2.reduce((acc, cur) => {
    return acc.concat(cur * 2)
}, [])

console.log(flateMapReduce, 'reducer first one')

const flateMapReduce2 = numbers2.reduce((acc, cur) => {
    return acc.concat([cur, cur * 2])
}, [])

console.log(flateMapReduce2, 'reducer second one')


const vote = [
    'java',
    'java',
    'python',
    'javascript',
    'java',
    'python',
    'javascript'
]

const voteReducer = vote.reduce((acc, cur, index, array) => {
    if (acc[cur]) {
        acc[cur]++
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {})

console.log(voteReducer, 'vote');


/**
 * my own reducer function
 * @param {Array} arr whole array
 * @param {Function} cb 
 * @param {Any} init 
 * @returns 
 */
function myReducer(arr, cb, init) {
    let acc = init;
    let start
    if (!init) {
        acc = arr[0];
        start = 1;
    }
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc
}