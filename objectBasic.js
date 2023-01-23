// basic object

const microphone = {
    brand: 'fiften',
    indicator: true,
    price: 899,
    color: 'black',

    startRecording () {
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

console.log(Object.entries(microphone));

const array = [
    [ 'brand', 'fiften' ],
    [ 'indicator', true ],
    [ 'price', 899 ],
    [ 'color', 'black' ],
  ];


//   return array to object
console.log(Object.fromEntries(array));
  






