const arr = [1,2,3,null,false,4,5,'','test',6,7];

let count = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length - 1; j++){
        if(!arr[j] || typeof arr[j] !== 'number'){
            arr[j] = arr[j + 1];
            arr[j + 1] = undefined;
        }
    }

    if(arr[i] == undefined){
        count++;
    }
}

arr.length -= count;

// console.log(arr);


const filteredArray = arr.filter( (v) => typeof v == 'number');
// console.log(filteredArray);


const arr2 = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
];


const index = arr2.findIndex( function (v) {
    return v.id == 4;
});

// updating bad way
// arr[index] = 'total updated'

// arr2[index].value = 400;

const objForFindMe = arr2.find( (v) => v.id == 4 );
objForFindMe.value = 500;
// console.log(objForFindMe);

// console.log(arr2);


// make delete operation
// splice 
const indexForDeleFindIn = arr2.findIndex( (item) => item.id == 4 );
const arrForDeleSplice = arr2.splice( indexForDeleFindIn, 1 );
console.log(arrForDeleSplice);
console.log(arr2);


// filter








