class Animal {
    speak() {
      console.log("একটি অজানা শব্দ করছে");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("বাউ বাউ!");
    }
  }
  
  let dog = new Dog();
  // dog.speak(); // বাউ বাউ!

  

// inheritance protoype
// প্যারেন্ট ক্লাস
function Shape() {
  this.x = 0;
  this.y = 0;
}

// প্রোটোটাইপ মেথড
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('আমি হ্যাঁ, আমি চলে গেছি...');
};

// চাইল্ড ক্লাস
function Rectangle() {
  Shape.call(this); // প্যারেন্ট কনসট্রাক্টর কল করছি
}

// প্রোটোটাইপ চেইন
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// টেস্ট করা
var rect = new Rectangle();

console.log('শুরুতে rect অবজেক্ট হলো:');
console.log(rect);
console.log('rect.move(1, 1) কল করা হলো:');
rect.move(1, 1);














  