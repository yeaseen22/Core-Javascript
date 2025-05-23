
let obj = {name: 'hello'}

// it making the reference copying not object
let copyObject = obj
obj.money = 100000;
obj.age = {
    make: 23
}
// console.log(copyObject);
// console.log(obj);



let obj2 = {
    son: 'something',
    grandSon: {
        name: 'grand son'
    }
}

// it making the reference copying not object
let copyObject2 = { ...obj2 }
obj2.money = 100000;
obj2.age = {
    make: 23
}
console.log(copyObject2);


