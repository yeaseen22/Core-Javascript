

function outer{
    let x = 10;

    return function inner() {
        console.log('inner ', x);

    }

    // inner()
}

const func = outer()
console.log('funct', func());


function outerCount() {

    let count = 0;

    return function innerCount() {
        count++;

        console.log('inner', count);

    }
}

let returnValue = outerCount();
returnValue()