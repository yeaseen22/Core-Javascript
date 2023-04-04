const arr = [1,2,3];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// create iterato with es6 

function createIterator(collection){
    let i = 0;
    return {
        next(){
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
    a:10,
    b:20
}

// it not work for object(becase this object is not iterable)
for(let v of objeForOfloop){
    // console.log(v);
}

for(let i in objeForOfloop){
    // console.log(i);
}


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

function* generate2(collection){
    for(let i = 0; i < collection.length; i++){
        yield collection[i];
    }
}

let iterate3 = generate(arr)
console.log(iterate3.next());













