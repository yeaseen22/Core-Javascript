/**
 * @Title Function Compose
 */


const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;

const x = div2(times3(add10(5)))

console.log(x);

// pipe function
const pipe = (...fns) => (x) => fns.reduce((v,f) => f(v), x)

const result1 = pipe(add10, times3, div2)
// result1(5)
console.log(result1(5));

const compose = (...fns) => {
    return (x) => {
        return fns.reduce((v,f) => f(v),x)
    }
}

const result2 = compose(add10,times3,div2)
console.log(result2(5));
