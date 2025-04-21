
const names = [
    'stack one',
    'stack two',
    'stack three',
    'stack four',
    'stack five'
]

function reuse(arr, logic){
    for(let i = 0; i< arr.length; i++){
        logic(arr[i], i, arr)
    }
}


/**
 * we duplicate things or repeated code
 */
let result1 = []
reuse(names, (value, item,arr) => {
    result1.push(value.length)
})
// console.log(result1);

let result2 = [];
reuse(names, (value) => {
    result2.push(value.toUpperCase())
});

let result3 = [];
reuse(names, (value) => {
    result3.push(value.substr(6))
})

function reuseAndMap(arr, logic){
    let result = [];
    for(let i = 0; i< arr.length; i++){
        result.push(logic(arr[i], i, arr));
        
    }
    return result
}

const lengths = reuseAndMap(names, (value) => value.length)
const upper = reuseAndMap(names, (value) => value.toUpperCase())
const sliced = reuseAndMap(names, (values) => values.substr(6))
// console.log(lengths);
// console.log(upper);
// console.log(sliced);


function reuseFilter(arr, logic){
    let result = [];
    let r;
    for(let i = 0; i< arr.length; i++){
       r = logic(arr[i], i, arr)
        // console.log('inside logic',r);
        if(r === true){
            result.push(arr[i])
        }
    }
    return result;
   
}

const ages = [32, 33, 16, 40];


const ageResult = reuseFilter(ages, (value) => {
// console.log('inside filter',  value);
return value >= 18;

})

// console.log('filter',ageResult);

/**
 * every method (all condition have to be true)
 */

let productReview = [
    {name: 'Md Ashraf', response:'positive',rating:'5'},
    {name: 'Jalal Uddin', response:'positive',rating:'5'},
    {name: 'Sakib Al Hasan', response:'negative',rating:'4'},
    {name: 'Tamim Iqbal', response:'positive',rating:'4'},
]

const positive = productReview.every((value) => value.rating);
// console.log('postive', positive)


/**
 * some method (single condition match have true)
 */

let testRunInSingleMatch = [
    {name: 'D Jaybardane', run: 300},
    {name: 'Macalam', run: 300},
    {name: 'D Hyden', run: 300},
    {name: 'Mc Lara', run: 400},
]

const atLeaseOne = testRunInSingleMatch.some((value) => value.run >= 400);
console.log('400 ', atLeaseOne);



