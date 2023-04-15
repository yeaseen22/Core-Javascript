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

// let result = changeToInt('dffdd22.22')
// console.log(result);

function makeWords(text) {

    try{
        let str = text.trim();
        let words = str.split(' ');
        return words;
    } catch(e) {
        // console.log(e.message);
        console.log('Please Provide a valid text');
    }


    // let str = text.trim();
    // let words = str.split(' ');

    // return words;
}

// let words = makeWords('  Hm Nayem   ')
// let words = makeWords(55)
// console.log(words);

class customError extends Error {
    constructor(msg) {
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, customError)
        }
    }
}


try{
    console.log('I am line 1');
    throw new customError('I am your error');
    console.log('I am line 2');
    console.log('I am line 3');
} catch(e) {
    console.log(e.message);
} finally{
    console.log("I am finally blocked");
}


// try{
//     console.log('I am line 1');
//     throw new Error('I am your error');
//     console.log('I am line 2');
//     console.log('I am line 3');
// } catch(e) {
//     console.log(e.message);
// } finally{
//     console.log("I am finally blocked");
// }









