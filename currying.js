

// #region currying
function muttiplay(a,b,c){
    return a+b+c
}

muttiplay(3,5,6)

function curriedMultiply(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(curriedMultiply(5)(6)(7))

function discount(dis){
    return function (price) {
        return price - price*dis
    }
}

let tenPercentDiscount = discount(0.1);
let twentyPercenDiscount = discount(0.2)
let customer1D = tenPercentDiscount(600)
let customer2D = tenPercentDiscount(700)
let customer3D = twentyPercenDiscount(1200)
// console.log(customer3D);



// #region curried function converter
function curry(func){
    return function curried(...args){
        if(args.length >= func.length){}
    }
}

function sum(a,b,c){
    return a+b+c;
}

let curreidSum = curry(sum)
