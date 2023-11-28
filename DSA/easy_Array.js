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

function findThirdLargest(arr) {
  if (arr.length < 3) {
    return "Array should have at least three elements.";
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (
      arr[i] > thirdLargest &&
      arr[i] !== firstLargest &&
      arr[i] !== secondLargest
    ) {
      thirdLargest = arr[i];
    }
  }

  return thirdLargest;
}

// Example usage:
const numbers = [10, 5, 20, 10, 30, 30, 40];
const thirdLargest = findThirdLargest(numbers);

console.log("Third largest element:", thirdLargest);
