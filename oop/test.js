

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log('I am draw method');
//         this.printDrawFunction();
//     },

//     printDrawFunction: function () {
//         console.log('My Width is ', this.width);
//         console.log('My Height is ', this.height);

//         // return 0;
//     }

// }

// rect.draw();


// function myFunct() {
//     console.log(this);
//     rect.printDrawFunction()
//     // return 0;
// }

// // myFunct();
// // new myFunct()

// var another = {
//     width: 45,
//     height: 30,

//     print: rect.printDrawFunction
// }

// console.log(another.print);
// another.print();

// console.log(rect.width);


// factory pattern

var createRect = function (width, height) {
    return {
        width: 1001,
        height: 501,

        draw: function () {
            console.log('I am draw method');
            console.log(this.printDrawFunction);
            console.log(this);
        },

        printDrawFunction: function () {
            console.log('My Width is ', this.width);
            console.log('My Height is ', this.height);

            // return 0;
        }

    }
}

// var rect2 = createRect(4,5);
// rect2.draw();


// constructor pattern

var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    // make this private properti 
    var position = {
        x: 1000,
        y: 50
    }

    var position2 = {
        x: 1001,
        y: -501
    }

    var printDrawFunction = function () {
        console.log('My Width is ', this.width);
        console.log('My Height is ', this.height);

    }.bind(this);

    // access private properties way 1
    // this.getPosition = function (){
    //     return position;
    // }

    this.draw = function () {
        console.log('I am draw method');
        console.log(printDrawFunction);
        console.log('position x= '+ position.x);
        // console.log(this);
    }

    // access private properties way 2
    Object.defineProperty(this, 'position', {
        get: function () {
            return position;
        },
        set: function (value) {
            position = value;
        }
    })

}

// var rect3 = new Rectangle(10, 8)
// rect3.draw()

function myNew(constructor) {
    var obje = {};
    Object.setPrototypeOf(obje, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obje, argsArray.slice(1));

    return obje;
}

var rect4 = myNew(Rectangle, 60, 70);
// rect4.draw();


var Rect = new Function('width', 'height', `this.width = width;
    this.height = height;

    this.draw = function () {
        console.log('I am draw method');
        console.log(this.width);
        console.log(this);
    },

    this.printDrawFunction = function () {
        console.log('My Width is ', this.width);
        console.log('My Height is ', this.height);
    }`
)

// var rect5 = new Rect(3,4);
// console.log(rect5);


// bind call apply
function myFunct2(c, d) {
    console.log(this);
    console.log(this.a + this.b);
}

// myFunct2.call({a: 20, b: 20}, 30, 33);
// myFunct2.apply({a: 20, b: 20}, [30, 33]);
// myFunct2();


// var testBind = myFunct2.bind({a: 6, a: 3}, 5,6);
// console.log(testBind);

// pass by value vs pass by reference
// Call by value vs call by reference

var n = 20;

function change(n) {
    n = n + 100;
    console.log(n);
}

// change(n);
// console.log(n);

var obj2 = {
    a: 10,
    b: 20
};

function changeObj2(obj2) {
    obj2.a = 200;
    obj2.b = 300;

    console.log(obj2);
}

// changeObj2(obj2)
// console.log(obj2);



var rect7 = new Rectangle(22, 44);
// rect7.draw();
// rect7.height
// console.log(rect7.position)
rect7.position = {
    x:1,
    y: 2
}

console.log( rect7.position);








