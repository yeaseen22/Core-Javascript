/**
 * @Title: Slice array into multiple array
 */


const arr = [1, 10, 3, 4, 5, 6];

// slice
const sliced = arr.slice(1,3)
console.log(sliced) 

// clone array
const cloned = arr.slice()
console.log(cloned);


// array like object to array
function toArray(){
    return Array.prototype.slice.call(arguments)
}
const argArray = toArray(1,2,3,4,5, 'test')
console.log(argArray) ;
