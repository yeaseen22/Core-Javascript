var recTangle = {
  width: 100,
  height: 50,

  draw: function () {
    console.log(` I am a rectangle `);
    this.printProperties();
    console.log(this);
  },
  printProperties: function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  },
};

// recTangle.draw();
// var newObj = {};
// newObj = recTangle;
// recTangle = null;
// console.log(newObj.height)

// about this
// function myFunc () {
//     console.log(this)
// }

// myFunc()
// new myFunc()

// var another = {
//     width: 47,
//     height: 56,
//     print: recTangle.printProperties
// }
// another.print();
// console.log(another.print)

// var recTangle = {
//     width: 100,
//     height: 50,

//     draw: function (){
//         console.log(` I am a rectangle `);
//         this.printProperties();
//         console.log(this)
//     },
//     printProperties: function () {
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//         // this.draw();
//     }
// }

// using factory pattern
var createReacTangle = function (width, height) {
  return {
    width,
    height,

    draw: function () {
      console.log(` I am a rectangle `);
      this.printProperties();
      console.log(this);
    },
    printProperties: function () {
      console.log("My Width is " + this.width);
      console.log("My Height is " + this.height);
      // this.draw();
    },
  };
};

// var react1 = createReacTangle(44, 77);
// react1.printProperties();

// recTangle.draw();
// recTangle.printProperties()

// using constructor patter
//  var Reactangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log(` I am a rectangle `);
//         this.printProperties();
//         console.log(this, `hi there`) ;
//      }

//     this.printProperties = function () {
//         console.log("My Width is " + this.width);
//         console.log("My Height is " + this.height);
//      }
//  }

//  var rect3 = new Reactangle(100, 57);
//  rect3.draw();
//  rect3.constructor();

// own new keyword created by yeaseen
// function myNew (constructor) {
//     var obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     var argsArray = Array.prototype.slice.apply(arguments);
//     constructor.apply(obj, argsArray.slice(1));

//     return obj;
// }

// var rect4 = myNew(Reactangle, 46,90);
// rect4.draw();

// function test () {
//   console.log('something')
// }

// functions are object in javascript
// function test () {
//     console.log(`something`)
// }

// var anothreact = new Function ( 'width', 'height' , `
//     this.width = width
//     this.height = height

//       this.draw = function () {
//           console.log(' I am a rectangle ');
//           this.printProperties();
//           console.log(this, 'hi there') ;
//       }

//       this.printProperties = function () {
//           console.log("My Width is " + this.width);
//           console.log("My Height is " + this.height);
//       }`
//      )

//      var rect5 = new anothreact(4,5);
//      console.log(rect5)
//      console.log(test.name, test.length)

// function myFunc2 (c, d) {
//     console.log(this)
//     console.log(this.a + this.b + c + d);
// }
// // myFunc2()
// // var testBind = myFunc2.bind({a:3, b: 3}, 5, 7)
// var testBind = myFunc2.bind({a:3, b: 3})
// testBind(5,7);

// pass by value vs pass reference
// call by value vs call by reference
// var n = 10;

// function change (n) {
//   n = n + 100;
//   console.log(n);
// }
// change(n)
// console.log(n)

// var obj = {
//   a: 10,
//   b: 20
// }

// function changeMe (obj) {
//     obj.a += 100;
//     obj.b += 100;
//     console.log(obj.a);
//     console.log(obj.b);
// }

// changeMe(obj);
// console.log(obj.a, 'this inside of obj');
// console.log(obj.b, 'this is inside of obj');

// about abstraction

var Reactangle = function (width, height) {
  this.width = width;
  this.height = height;
  var position = {
    X: 56,
    Y: -100,
  };

  var printProperties = function () {
    console.log("My Width is " + width);
    console.log("My Height is " + height);
  }.bind(this);

  // this.getposition = function () {
  //   return position
  // } one way of get set function

  this.draw = function () {
    console.log(` I am a rectangle `);
    printProperties();
    console.log("Postition: X= " + position.X + " y= " + position.Y);
  };
  // another way of get set function 
  Object.defineProperty(this, 'position', {
      get: function () {
        return position
      },
      set: function (value) {
        return position = value;
      }
  })
};

var rect7 = new Reactangle(45, 78);
// rect7.draw();
rect7.position = {
  X: 456,
  Y: -120,  
}
// console.log(rect7.getposition()) get setter one way call
// getter setter another way call
console.log(rect7.position)
