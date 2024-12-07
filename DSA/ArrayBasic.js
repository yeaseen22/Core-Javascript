// function to search a key to  be deleted
function findElement(arr, n, key) {
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    return -1;
}

// Function to delete an element
function deleteElement(arr, n, key) {
    // Find position of element to be deleted
    let pos = findElement(arr, n, key);

    if (pos == -1) {
        document.write("Element not found");
        return n;
    }
    // Deleting element
    let i;
    for (i = pos; i < n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1;
}

// javascript Program to Insert an element
// at a specific position in an Array
function insertElement(arr, n, x, pos) {
    // shift elements to the right
    // which are on the right side of pos
    var i = n - 1;
    for (i; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
}


/**
 * FINDING THE SECOND LARGEST VALUE IN AN ARRAY
 *  Made with Efficient Way of Solving this problem
 *  Solved with O(1) time complexity | O(n) space complexity
 *  Solve with Single Loop
 * @param {*} myArr 
 * @returns 
 */
function findSecondLargestValue2(myArr) {
    const arrSize = myArr.length;
    const lastIndex = arrSize - 1;

    // initilized supposed secondMax and maxValue
    let secondMax = myArr[0];
    let maxVal = myArr[lastIndex];

    // loop through the array
    // compare the value with max value, if the value is greater than max value
    // then assign the value to the max value and assign the max value to the second max value
    for (let i = 0; i < arrSize; i++) {
        if (myArr[i] > maxVal) {
            secondMax = maxVal; // 5, 5 = 5
            maxVal = myArr[i]; // 5, 7 = 7

            // if the value is greater than second max value and less than max value
            // then assign the value to the second max value
        } else if (myArr[i] > secondMax && myArr[i] < maxVal) {
            secondMax = myArr[i]; // 5
        }
    }

    return secondMax;
}

// Test Cases to Run..
const myArr = [3, 5, 7, 1, 4];
const result = findSecondLargestValue2(myArr);
console.log('Second Max - ', result);



function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j], arr[i]);

        if (arr[j] !== arr[i]) {
            i = i + 1;
            arr[i] = arr[j];
            arr.length = arr.length - 1;
        }
    }

    return i + 1;
}

// Testing
const arr = [1, 1, 2, 3, 3];
console.log('Before Duplicate - ', arr);

const length = removeDuplicates(arr);

console.log("New Length:", length);
console.log('Arr after filter duplicates - ', arr);


// console.log("Modified Array:", arr.slice(0, length)); // Only the unique part



/**
Count the Occurrences of an Element
    - Input: An array and a value x.
    - Task: Count how many times x appears.
    - Example: `[1, 2, 2, 3, 4, 2], x=2 → 3`.
**/

function checkOccurances(arr, value) {
    const arraySize = arr.length;
    let occuranceCounts = 0;

    for (let i = 0; i < arraySize; i++) {
        // console.log(arr[i]);
        if (arr[i] == value) {
            occuranceCounts++;
        }
    }

    return occuranceCounts;
}


// Test Case..
const myArr2 = [1, 2, 2, 3, 4, 2];
const value = 2;

const resultOfMyArr = checkOccurances(myArr, value);

console.log('myArr - ', resultOfMyArr);


/**
Check if an Array Is Sorted**
  - Input: An array of integers.
  - Task: Return `true` if the array is sorted in ascending order.
  - Example: `[1, 2, 3, 4] → true, [1, 3, 2] → false`.
**/

function checkIsArraySortedOrNot(arr, mode = 'asc') {
    // Write Code Here..
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1] && mode == 'asc') {
            return false;

        } else if (arr[i] < arr[i + 1] && mode == 'desc') {
            return false;
        }
    }

    return true;
}


// Test Case..
const myArr4 = [1, 2, 3, 4];
//   const myArr = [1, 3, 2];
//   const myArr3 = [4, 3, 2];

const resultOfMyArrary = checkIsArraySortedOrNot(myArr);
const resultOfMyArr2 = checkIsArraySortedOrNot(myArr2);
const resultOfMyArr3 = checkIsArraySortedOrNot(myArr4, 'desc');

console.log('myArr - ', resultOfMyArr);
console.log('myArr2 - ', resultOfMyArr2);
console.log('myArr3 - ', resultOfMyArr3);