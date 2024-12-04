// function to search a key to  be deleted
function findElement(arr,n,key)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    return -1;
} 
     
// Function to delete an element
function deleteElement(arr,n,key)
{
    // Find position of element to be deleted
    let pos = findElement(arr, n, key);
      
    if (pos == -1)
    {
        document.write("Element not found");
        return n;
    }
    // Deleting element
    let i;
    for (i = pos; i< n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1;
}

// javascript Program to Insert an element
// at a specific position in an Array
function insertElement(arr, n, x, pos)
{
    // shift elements to the right
    // which are on the right side of pos
    var i = n - 1;
    for (i; i >= pos; i--)
    {
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