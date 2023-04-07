// Hello Functional Programming

/**
 * It return the same result if given the same arguments
 * It does not cause any observable side effects
 */


function sqr(n) {
    return n * n;
}
// console.log(sqr(2));


var point = {
    x: 10,
    y: 20
}

function printPoint(pointObj) {
    pointObj.x = 100;
    pointObj.y = 200;

    // console.log(point);
}

// printPoint(point)
// console.log(point, 'this is main object');




// First Class Function

function add(a, b) {
    return a + b;
}

// 1 A function can be stored in a variable
var sum = add;
// console.log(sum(4,5));
// console.log(typeof sum);

// 2 A function can be stored in Array

var arr = [];
arr.push(add)
// console.log(arr);
// console.log(arr[0](5,6));

// 3 A function can be stored in Object

var obj = {
    sumObj: add
}
// console.log(obj);
// console.log(obj.sumObj(8,9));

// 4 We can creat function as we nedd

// setTimeout( function (){
//     console.log('I have created..');
// },1000 )

// this are for higher order function
// 5 We can pass function as a arguments
// 6 We can return function from another function

function add2(a, b) {
    return a + b;
}


function manipulate(a, b, higdeOder) {
    var c = a + b;
    var d = a - b;

    // function multiply(){
    //     var m = higdeOder(a,b);
    //     return c*d*m;
    // }
    // return multiply;

    return function () {
        var m = higdeOder(a, b);
        return c * d * m;
    }

}
// var multiply2 = manipulate(3,4,add2);
// console.log(multiply2());



// clouser
function a() {
    var x = 5;

    return function () {
        console.log(x);
        // return x;
    }
}

// var abc = a();
// console.dir(abc);
// var abc = a()();
// console.log(abc);

// callback

function sample(a, b, cb) {
    var c = a + b;
    var d = a - b;

    var result = cb(c, d);
    return result;
}


var result1 = sample(3, 4, function (First, Second) {
    return First + Second;
})

// console.log(result1);



// return function from another function
function greet(msg) {
    function greeting(name) {
        return msg + ', ' + name;
    }

    return greeting;
}
var msgRetu = greet('Hello')('Shegufa Tarajum');
// console.log(msgRetu);
// var returnGreeting = msgRetu('Shegufa Taranjum');
// console.log(returnGreeting);

// console.log(msgRetu('Shegufa Tarajum'));



// Currying in javascript

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

var sum = currying(10)(15)(5);
// console.log(sum);


// function composition
function print(inp) {
    console.log(inp);
}

function multiplyByFive(n) {
    return n * 5;
}

function add(a, b) {
    return a + b;
}

// print(multiplyByFive(add(3, 5)))




// functions are object

function test() {
    console.log('somethings');
}


var Rect = new Function('width', 'height', `this.width = width;
this.height = height;

    this.draw = function () {
        console.log('I am draw method');
        console.log(this.printDrawFunction);
        console.log(this);
    },

    this.printDrawFunction = function () {
        console.log('My Width is ', this.width);
        console.log('My Height is ', this.height);
    }`
)


// function testFunction() {
//     console.log('I am a test function ');
// }

// const fn = testFunction;
// console.log(fn.toString());
// fn();

// const ar = [fn, testFunction];
// const o = {
//     fn: testFunction
// }


// let construct a function
const fn2 = new Function(
    'str',
    `let obj = {};
    for (let s of str) {
        if (s !== ' ') {
            obj[s] = s;
        }
    }    
    
    return obj;`
);

// function strToObj(str) {
//     `let obj = {}
//     for (let s of str) {
//         if (s !== ' ') {
//             obj[s] = s
//         }
//     }

//     return obj`
// }


// console.log(fn2('Hm Nayem'));


const fData = {
    params: ['a', 'b'],
    body: ['const r = a+b', 'return r'],
};

const fBody = fData.body.reduce((acc, cur) => {
    acc += cur + ';';
    return acc;
}, '');


console.log(fBody);

const tf = new Function(...fData.params, fBody);
console.log(tf(100,200));















