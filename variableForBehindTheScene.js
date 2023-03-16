var a = 10;

var b;

// console.log(a);
// console.log(b);


b = 20;

// console.log(b);
// console.log(c);

var c = 50;

// console.log(c);

// Creational phase
// a = undefined
// b = undefined
// c = undefined

// Executional Phase
// a = 10;
// b = 20;
// c = 50;



// abc()
function abc() {
    console.log('I am a function');
}
// abc();



var a1 = 100;
// newPrint(a);

// print(10);

var newPrint = print;
// newPrint(45);


function print (a){
    console.log(a);
}


// print(a);

// Executional phase
// a1 = undefined
// newPrint = undefined
// print = ref


// Creational phase
// a1 = 100
// newPrint = undefined
// print() = call function and out of it is  (10);
// newPrint = print function ref
// newPrint = call print function and out of it is (45)
// print function called and output of it is 100


// function declaration vs function expression

abc1()

function abc1(){
    console.log('I am a function');
}

// newAbc();
var newAbc = function (){
    console.log('I am from anonymous function');
}

newAbc();



// Creational Phase
// abc1 = ref
// newAbc = undefinde


// Exectional Phase
// abc1 called and out of it is (I am a function)
// newAbc = function
// newAbc called and out it is ()