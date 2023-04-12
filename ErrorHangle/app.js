// let n = 10;

// if(n > 5){
//     throw new Error('N is Greater then 5')
// }

function changeToInt(v) {
    let result = Number.parseInt(v)
    if (!result) {
        console.log('Please provide a value which abale to convert to Integer');
        return
    } else {
        return result;
    }
}

let result = changeToInt('dffdd22.22')
console.log(result);



