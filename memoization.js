
function memoizedSum() {
    let result = {};

    return function (n1, n2) {
        if (result[`${n1},${n2}`]) {
            console.log('cached');
            return result[`${n1},${n2}`]
        }
        const sumResult = n1 + n2;
        result[`${n1},${n2}`] = sumResult;
        return sumResult
    }
}

function memeoiz(fn) {
    let result = {};

    return function (...args) {
        if (result[args]) {
            result[args]
        }
        const res = fn(...args)
        result[args] = res;
        return res
    }
}

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }


var memo = {}
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    const res = fibonacci(n - 1) + fibonacci(n - 2)
    return res
}

function fibonacci2(n, memeo = {}) {
    if (memeo[n]) {
        return memeo[n]
    }
    if (n <= 1) {
        return n;
    }
    const res = fibonacci(n - 1, memeo) + fibonacci(n - 2,memeo)
    memeo[n] = res;
    return res
}


const sum = memoizedSum();
console.log(sum(1, 2));
console.log(sum(3, 2));
console.log(sum(3, 2));
console.log(sum(4, 2));





