// Find the largest three distinct elements in an array
function findLargestThreeDistinctElements(arr) {
  let max1 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }

  let max2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max2 && arr[i] !== max1) {
      max2 = arr[i];
    }
  }

  // Step 3: Find the third maximum element in the array
  let max3 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max3 && arr[i] !== max1 && arr[i] !== max2) {
      max3 = arr[i];
    }
  }

  return [max1, max2, max3];
}

const number = [10, 5, 20, 10, 30, 30, 40];
const largestThree = findLargestThreeDistinctElements(number);
console.log("Original Array", number);
console.log("three longest number in array ", largestThree);
