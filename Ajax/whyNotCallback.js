
const arr = [1,2,3,4];
const sqrArr = arr.map((v)=> v * v );


function asyncMap(arr, cb){
    return arr.map(v => {
        // setTimeout(cb.bind(null, v), 0)
        setTimeout(() =>cb(v))
    })
}

// let qbArr = asyncMap(arr, v => v*v*v);
// console.log(qbArr);







