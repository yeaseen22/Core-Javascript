// basic object

const microphone = {
    brand: 'fiften',
    indicator: true,
    price: 899,
    color: 'black',

    startRecording() {
        console.log('start Recording');
    },

    stopRecording: () => {
        console.log('Stop Recording');
    }
}

/** 
 * there are two different parts of object
 * 1. noun/adjective (state/data/property/field)
 * 2. verb / (functionalities => start, stop)
 * */


const testObj = new Object();
testObj.name = 'test Object';
testObj.time = new Date();
// console.log(testObj);



// object have prototype methods and without prototype base(literator object)

// console.log(Object.keys(microphone));
// console.log(Object.values(microphone));

// object dot notation microphone.brand
// object array notation microphone['brand']


// for(let k in microphone) {
//     let name = 66
//     console.log(k, '\n', microphone['name']);
// }

// object key value pair(its return an 2d array)

// console.log(Object.entries(microphone));

// const array = [
//     [ 'brand', 'fiften' ],
//     [ 'indicator', true ],
//     [ 'price', 899 ],
//     [ 'color', 'black' ],
//   ];


//   return array to object
// console.log(Object.fromEntries(array));


// const empty = {};

// console.log(Boolean(empty));


// const students = [
//     {
//         id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
//         name: 'Md Al-Amin',
//         email: 'alamin@test.com',
//     },
//     {
//         id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
//         name: 'Akib Ahmed',
//         email: 'akib@test.com',
//     },
//     {
//         id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
//         name: 'Elias Emon',
//         email: 'elias@test.com',
//     },
// ];

// // update data
// const idToUpdate = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
// const updatedData = {
//     name: 'Habiba Akhtar',
//     email: 'habiba@test.com',
// };

// const updatedIndex = students.findIndex( (item) => item.id === idToUpdate);
// students[updatedIndex] = {
//     ...students[updatedIndex],
//     ...updatedData
// };

// // delete 
// const deleteStudentObj = students.splice( updatedIndex, 1);
// console.log(deleteStudentObj);


// console.log(students);

// // object tranverse
// for(let i in students) {
//     console.log(students[i].name);
// }

const students2 = {
    '67de71e5-0eac-474f-ab51-850ba9b31ed5': {
        id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
        name: 'Md Al-Amin',
        email: 'alamin@test.com'
    },

    'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e': {
        id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
        name: 'Akib Ahmed',
        email: 'akib@test.com',
    },


    'ee729e84-a84e-4adf-b32c-4647a7114d5b': {
        id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
        name: 'Elias Emon',
        email: 'elias@test.com',
    },

};


// adding data
const std = {
    id: 'ebdf6b72-c32b-4b1d-8578-e8c655b05c14',
    name: 'Feroz Khan',
    email: 'feroz@gmail.com'
}

students2[std.id] = std;

// updating data
const idToUpdateForStudent2 = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
const idToUpdateNewObj = {
    name: 'Hm Azizul',
    email: 'hmazizul@gmail.com'
}

students2[idToUpdateForStudent2] = {
    ...students2[idToUpdateForStudent2],
    ...idToUpdateNewObj
}

// deleted data from obj
delete students2[idToUpdateForStudent2];

for(let key in students2){
    // console.log(students2[kye]);
}

// Object.keys(students2).forEach( (key) => {
//     const student = students2[key];
//     console.log(student.name, student.email);
// });

Object.values(students2).forEach( (student) => {
    // console.log(student);
});



const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i,
    };
    arr.push(o);
    arrToObj[i] = o;
}

console.time('array');
let id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd('array'); // 104.901ms

console.time('obj');
arrToObj[id].value = 999;
console.timeEnd('obj'); // 0.019ms



// important 3 javascript function
// map, filter, reduce

/**
 * Map [same length as original array]
 * Filter [with filtered item]
 * Reduce [Know one knows]
 */

const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];

const learReduce = numbers.reduce(  (acc, cur) => {
    acc+= cur.toString();
    return acc;
}, '');
console.log(learReduce);









