
let obj = { name: 'hello' }

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
// console.log(copyObject2);

const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: 12345
  }
};


// Step 1: Clone the object (you choose how)
const clonedPerson = {...person}

// Step 2: Modify original object's nested value
person.address.city = "Looking Glass";
person.name = 'Bob'

// Step 3: Log both objects
console.log("Original:", person);
console.log("Clone:", clonedPerson);



/**
 * write a function that deep compare object 
 */
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    // check if any of the are null
    if (obj1 === null || obj2 === null) {
        return false;
    }

    // if one of them are not object
    if (typeof obj1 !== 'object' || typeof obj2 === 'object') {
        return false;
    }

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false;
    }

    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
    }

    return keys1.some(function (key) {
        // return obj1[key] === obj2[key]

        return deepEqual(obj1[key], obj2[key])
    })
}




