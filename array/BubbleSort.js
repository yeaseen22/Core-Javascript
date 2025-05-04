/**
 * @Title implement bubble sort
 */


const myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90]

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            let temp = array[j];
            array[j] = array[j + 1]
            array[j + 1] = temp;
        }
    }
}

// region bubble sort with callback function
const bubbleSortWithCb = (array, cb) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (cb(array[j], array[j + 1]) > 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

const arr = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90]
// bubbleSortWithCb(myArray, (a,b) => a-b)

/**
 * @Title understand and implement linear search
 */

const arrForLinear = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90]

const team = [
    { id: 2, name: 'Shegufa' },
    { id: 4, name: 'Badhon' },
    { id: 10, name: 'Shetu' },
    { id: 1, name: 'Nayem' },
    { id: 8, name: 'Tamim' },
    { id: 3, name: 'Salvy' },
    { id: 6, name: 'Sakib' },
    { id: 5, name: 'Asief' },
    { id: 9, name: 'Riya' },
    { id: 9, name: 'Mehedi' }
];

const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

const s1 = linearSearch(arr, 39)
console.log(s1);

/**
 * why need this function because previous one not working other type
 * @param {Array} arr 
 * @param {Function} cb 
 * @returns 
 */
const linearSearchCb = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        }
    }
    return -1;
}

const s3 = linearSearchCb(team, item => item.name = 'mehedi')
console.log(s3);

const binarySearch = (arr, key) => {
    let lowest = 0;
    let hightest = arr.length - 1;

    while (lowest <= hightest) {
        let mid = Math.floor((lowest + hightest) / 2);
        if (arr[mid] === key) return mid;
        if (arr[mid] < key) lowest = mid + 1;
        if (arr[mid] > key) hightest = mid - 1;
    }
}

arr.sort((a, b) => a - b)
const index = binarySearch(arr, 11)


const ourFind = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

var a = ['stack', 'learner', 'and', 'stack', 'school'];

console.log(a.join());


const strArr = ['one', 'two', 'three'];

console.log(strArr.includes('one'));
console.log(strArr.indexOf('one'));
console.log(strArr.lastIndex('One'));

const Arr = ['a', 'b', 'c', 'd']
const iteratorArr = Arr[Symbol.iterator]()
console.log(iteratorArr.next());

const array = ['a', 'b', 'c'];
const keys = array.keys() // 0,1,2 iterator
const value = array.values() // 'a','b','c' iterator
const entries = array.entries() // [0, 'a'], [1, 'b'], [2, 'c'] iterator
