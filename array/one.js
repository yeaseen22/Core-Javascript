


// array of function
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, divide, mod];
const a = 10, b = 20
for (let i = 0; i < funcs.length; i++) {
    const result = funcs[i](a, b);
    // console.log(`[${funcs[i].name}] Result = ${funcs}`)
}

// array of array

const pointTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23]
]

// one dimensional traversal
for (let i = 0; i < pointTable.length; i++) {
    // console.log(`Point ${i}: - x=${pointTable[i][0]} and y=${pointTable[i][1]}`)
}

// two dimensional traversal
const numbersTable = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


for(let i=0; i<numbersTable.length; i++){
    for(let j=0; j<numbersTable[i].length;j++){
        console.log(numbersTable[i][j]);
        
    }
}

// matrix example
const matrixA = [
    [1,3],
    [1,0],
    [1,2]
]

const matrixB = [
    [0,0],
    [7,5],
    [2,1]
]

const matrixSum= (a, b) => {
    const result = [];
    for(let i=0; i<a.length; i++){
        let row = [];
        for(let j=0; j< a[i].length; j++){
            row.push(a[i][j] + b[i][j])
        }
        result.push(row)
    }
    return result;
}

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);
