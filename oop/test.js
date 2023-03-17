

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

    this.draw = function () {
        console.log('I am draw method');
        console.log(this.printDrawFunction);
        console.log(this);
    },

    this.printDrawFunction = function () {
        console.log('My Width is ', this.width);
        console.log('My Height is ', this.height);

    }
}

// var rect3 = new Rectangle(10, 8)
// rect3.draw()

function myNew(constructor){
    var obje = {};
    Object.setPrototypeOf(obje, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obje, argsArray.slice(1));

    return obje;
}

var rect4 = myNew(Rectangle, 60, 70);
rect4.draw();