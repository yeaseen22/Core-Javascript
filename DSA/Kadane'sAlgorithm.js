let arr = [10, 5, 20, 10, 30, 30, 40];
let arr2= [1,2,3,4,5]
let n = arr2.length;


// for (let start = 0; start < n; start) {

//     for (let end = start; end < n; end++) {
//         for (let i = start; i <= end; i++) {
//             console.log(arr[i])
//         }
//         console.log(" ");

//     }
//     break;

// }

//#region normal bruit force solution
// let maxSum = 0;
// for (let start = 0; start < n; start++) {
//     let currentSum = 0;
//     for (let end = start; end < n; end++) {
//         currentSum += arr2[end];
//         maxSum = Math.max(maxSum, currentSum);
//     }
// }


// region kadane's algorithm solution
let maxSum =0;
let currentSum = arr[0]; 
arr2.forEach((item) => {
    currentSum+=item;
    maxSum = Math.max(currentSum,maxSum)
    if(currentSum<0){
        currentSum=0;
    }
})

console.log("max subarray sum:", maxSum);