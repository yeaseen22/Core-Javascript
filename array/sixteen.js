
/**@Title map and filter using reducer */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// mapped
const squares = numbers.reduce((acc, cur) => {
    acc.push(cur * cur)
    return acc;
}, [])

// filter
const odd = numbers.reduce((acc, cur) => {
    if (cur % 2 === 1) {
        acc.push(cur)
    }
    return acc;
}, [])

// Big array
const bigArray = []
for (let i = 0; i < 5000000; i++) {
    bigArray.push(i)
}

// map and filter chain - time efficient
console.time('both')
bigArray.filter(v => v % 2 === 0).map((v) => v * 2)
console.timeEnd('both')

// map and filter reduce -  time efficient
console.time('reduce')
bigArray.reduce((acc, cur) => {
    // let calculation = cur% 2 === 0;
    if (cur % 2 === 0) {
        acc.push(cur * 2)
    }

    return acc;
}, [])
console.timeEnd('reduce')

console.time('reduce-opt')
const result = new Array(Math.ceil(bigArray.length / 2)) // preallocate max possible size
let index = 0
for (let i = 0; i < bigArray.length; i++) {
  const val = bigArray[i]
  if ((val & 1) === 0) { // bitwise check instead of modulo
    result[index++] = val << 1 // bitwise double instead of multiply
  }
}
result.length = index // trim extra unused elements
console.timeEnd('reduce-opt')
