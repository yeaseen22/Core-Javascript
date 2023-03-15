
// function that call them self to work

function sayHi(n) {
    if(n === 0) {
        return 
    }
    console.log('Hi, I am Calling');
    sayHi(n-1)
}

// sayHi(5)

function fact(n){
    if(n === 1){
        return 1
    }

    return n * fact(n - 1);
}

console.log(fact(5))


