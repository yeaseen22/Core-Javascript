

// 'use strict'

function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function'
}

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// create iterato with es6 

function createIterator(collection) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

// let iterate = createIterator(arr);
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.dir(iterate.next)

// we can use iterator with this also
// console.log(arr[Symbol.iterator]);
// console.log('str'[Symbol.iterator]);


// let iterate2 = arr[Symbol.iterator]();

// console.log(iterate2.next());
// console.log(iterate2.next());
// console.log(iterate2.next());
// console.log(iterate2.next());


// let str = 'Text';
// let iterateText = str[Symbol.iterator]();
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

// for of loop
// for(let v of arr){
//     console.log(v);
// }

// for(let v of 'HM Nayem'){
//     console.log(v);
// }

let objeForOfloop = {
    a: 10,
    b: 20
}

// it not work for object(becase this object is not iterable)
// for(let v of objeForOfloop){
// console.log(v);
// }

// for(let i in objeForOfloop){
// console.log(i);
// }


// Generators in js

let objCustoItarable = {
    start: 1,
    end: 10,

    // [Symbol.iterator]: function (){
    //     let currentValue = this.start;
    //     const self = this;
    //     return {
    //         next() {
    //             return {
    //                 done: currentValue > self.end,
    //                 value: currentValue > self.end ? undefined : currentValue++
    //             }
    //         }
    //     }
    // }

    // implement generator
    //     [Symbol.iterator]: function* () {
    //         let currentValue = this.start;
    //         while(currentValue <= this.end){
    //             yield currentValue++;
    //         }
    //     }
}

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

function* generate2(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}

// let iterate3 = generate(arr)
// console.log(iterate3.next());

// we can store premitive or object types of can stored in set
// we cannot duplicate data in set data structure
let set = new Set([1, 2, 3, 4]);
set.add(4);
set.add(5);
// console.log(set);
// console.log(set.has((5)));
// console.log(set.toJSON());
// console.log(set.keys());
// console.log(set.values());

let keyIterate = set.keys();
let valuesIterate = set.values();
// console.log(keyIterate.next());


set.clear()
// console.log(set);

// console.log(isIterable(set));

for (let v of set) {
    // console.log(v);
}

// console.log(set.entries());

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
]);

map.set('d', 40);
map.set({ name: 'Hm Nayem' }, 45)
map.delete('c');

// console.log(map);
// console.log(map.get('c'));
// console.log(map.values());
// console.log(map.keys);
// console.log(map.entries());


// for(let [k, v] of map){
//     console.log(v, k);
// }

map.forEach((v, k) => {
    // console.log(k, v);
})


let a = { a: 10 }, b = { b: 20 }
// let setTest = new Set([a,b]);

// a = null; // it cannot be null in this way
// console.log(setTest);

let weakSet = new WeakSet([a, b]);
// a = null;
// console.log(weakSet.has(a));


let weakMap = new WeakMap([[a, 34], [b, 20]]);
a = null;
// console.log(weakMap.get(a));
// console.log(weakMap.has(a));


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.another = function () {
            console.log('Inside the main class body');
        }
    }

    name = 'Hm Nayem';
    test2 = function () {
        console.log('Inside the main class body2');
    }

    draw() {
        console.log('Drawing..');
    }
}

// let newReac1 = new Rectangle(34,55);

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(this.name, this.email);
    }

    test() {
        console.log(this);
    }

    static create(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

// JSON
let str = '{"name": "Hm Nayem", "email": "hasa.m.nayem@mgmail.com"}'
let p1 = Person.create(str);
console.log(p1);
console.log(p1 instanceof Person);
let testforclass = p1.test;
// testforclass()


// function Shape(){
//     this.draw = function () {
//         console.log(this);
//     }
// }

// let shape1 = new Shape();
// let anotherShapeDraw = shape1.draw;
// anotherShapeDraw(); //return window object, but "use strict" make it undefined

// es6 private
// const _radius = Symbol();
// const _name = Symbol();
// const _draw = Symbol();
// class Circle {
//     constructor(radius, name){
//         this[_radius] = radius;
//         this[_name] = name;
//     }

//     [_draw] () {
//         console.log('Drawing..');
//     }
// }

// let c1 = new Circle(2, 'Guest');
// console.log(c1)




const _radius = new WeakSet();
const _name = new WeakSet();
const _resize = new WeakMap();
_radius.set(10)


class Circle {
    constructor(radius, name) {
        this.size = 100;
        _radius.set(this, radius)
        _name.set(this, name)
        _resize.set(this, () => {
            console.log(size);
        })
    }

    draw() {
        console.log('Drawing..');
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)();
    }
}

let c1 = new Circle(2, 'Guest');
console.log(c1.draw())

























