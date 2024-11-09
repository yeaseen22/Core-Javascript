
// let arr = [2, 7, 11, 15]
// let target = 13;
// function pairSum(arr, target) {
//     let ans = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 ans.push(i, j);
//                 return ans;
//             }
//         }
//     }
//     return ans
// }
// const result = pairSum(arr, target);
// console.log(result);

// let arr = [2, 7, 11, 15];
// let target = 13;

// function pairSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return ` ${i} ${j}`; 
//             }
//         }
//     }
//     return null;
// }

// const result = pairSum(arr, target);
// console.log(result);


let arr = [2, 7, 11, 15];
let target = 13;

function pairSumWithTwoPointer(arr, target) {
    let n = arr.length;
    let i = 0, j = n - 1;
    let ans = []
    while (i < j) {
        let pairSum = arr[i] + arr[j]
        if (pairSum > target) {
            j--;

        } else if (pairSum < target) {
            i++;
        } else {
            ans.push(i, j);
            return ans;
        }
    }
    return ans;
}

const result = pairSum(arr, target);
console.log(result);
