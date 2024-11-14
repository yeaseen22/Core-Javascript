
function extend(Parent, Child) {

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor() = Child;

}


function Shape(color) {
    this.color = color;
}


// prototypical inheritance

function Square(width, color) {
    shape.call(this, color);
    console.log('Hi I am Square');
    this.width = width;
}


Square.prototype.draw = function () {
    console.log('Drawing');
    // common: function (){
    //     console.log('I am common Method');
    // }
}

Square.prototype.common = function () {
    console.log('I am calling from square');
}



// Square.prototype = Object.create(Shape.prototype); //use extend custome function 
extend(Shape, Square);
// reset Square constructor 
Square.prototype.constructor() = Square;

// do in browser
// var see =  new Square.prototype.constructor(33);
// console.log(see);

function Circle(radius, color){
    Shape.call(this,color);
    this.radius = radius;
}

// Circle.prototype = {
//     common: function (){
//         console.log('I am common Method');
//     }
// }

var shape = new Shape();
var s1 = new Square(45, green);

var circle2 = new Circle();

// Circle.prototype = Object.create(Shape.prototype); //custom extend function 
extend(Shape, Circle)
Circle.prototype.constructor = Circle;


Circle.prototype.common = function() {
    Shape.prototype.common.call(this);
    console.log('I am calling from Circle');
}

var c = new Circle(4, 'black');

var s = new Shape('purple')

var shapes = [s,c];
for(var i of shapes ){
    i.common()
}


function mixing(target, ...source){
    Object.assign(target, ...source)
}

// composition
var canWark = {
    walk: function (){
        console.log('Walking');
    } 
}


var cnaEat = {
    eat: function (){
        console.log('Eating');
    }
}

var canSwim = {
    swim: function (){
        console.log('Swiming...');
    }
}

// var person = Object.assign({}, canWark,cnaEat)
// console.log(person);

function Person2(name){
    this.name = name;
}

// Object.assign(Person2.prototype, canWark,cnaEat)
mixing(Person2.prototype, canWark, cnaEat);

var personObj = new Person2();
console.log(personObj);


function GoldFish(name){
    this.name = name;
}
mixing(GoldFish, cnaEat, canWark)

var fish = new GoldFish('bla bla bla')
console.log(fish);



















