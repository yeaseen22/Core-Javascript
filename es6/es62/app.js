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

let iterate = createIterator(arr);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
// console.dir(iterate.next)

// we can use iterator with this also
// console.log(arr[Symbol.iterator]);
// console.log('str'[Symbol.iterator]);


let iterate2 = arr[Symbol.iterator]();

console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());
console.log(iterate2.next());


let str = 'Text';
let iterateText = str[Symbol.iterator]();
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
