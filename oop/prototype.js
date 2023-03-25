function Shape() {

}


// prototypical inheritance

function Square(width) {
    console.log('Hi I am Square');
    this.width = width;
}


Square.prototype.draw = function () {
    console.log('Drawing');
    // common: function (){
    //     console.log('I am common Method');
    // }
}

Shape.prototype.common = function () {
    console.log('I am common methods');
}



Square.prototype = Object.create(Shape.prototype);
// reset Square constructor 
Square.prototype.constructor() = Square;
var see =  new Square.prototype.constructor(33);
console.log(see);

// function Circle(){

// }

// Circle.prototype = {
//     common: function (){
//         console.log('I am common Method');
//     }
// }

var shape = new Shape();
var s1 = new Square(45);

var circle2 = new Circle();

Circle.prototype = Object.create(Shape.prototype)













