
let array = [1,2,3,4]

function reuse(arr, cb){
    for(let i=0; i < array.length; i++){
        cb(arr[i], i, arr)
        
    }
}
let sum = 0;
reuse(array, function(value, index, arr){
    
    sum+= value
    console.log('login separtion ',sum);
    
})

array.forEach((item, index) => {
    sum+= item
    console.log('array original', sum);
    
})