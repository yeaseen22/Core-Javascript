function some (a, b, c){
    console.log(a, b, c);
    console.log(arguments);
}

// some(10, 20, 20)


function addAll(){
    var sum = 0;
    for(var i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}

// addAll(1,2,3);
// addAll(1,2,3,4,5,6,7,8,9);


// return something from a function


function addAll2(){
    var sum = 0;
    for(var i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
var result = addAll2(1,2,3)
console.log(result);


// function expression
// var addition = function addAll3 (a,b) {
//     return a+b;
// }

var addition = function  (a,b) {  //anonymous
    return a+b;
}

setTimeout( function () {
    console.log('I am called after 2 second');
}, 2000 );
