
// rest operator
function sum (...rest) {
    return rest.reduce((a,b) => a+b)
}
// console.log(sum(1,2,3,4,5));

// spread
let a = [1,2,3,4,5];
// console.log(...a);

let obj = {
    a: 10,
    b: 20,
    c: 30
}

let obj2 = {
    ...obj
}
console.log(obj2);


