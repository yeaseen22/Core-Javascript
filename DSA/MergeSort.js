//region Merge function to combine two sorted arrays into one sorted array
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]); // Take element from the left array
            leftIndex++; // Move to the next element in the left array
        } else {
            result.push(right[rightIndex]); // Take element from the right array
            rightIndex++; // Move to the next element in the right array
        }
    }

    // Add remaining elements from the left array (if any)
    result = result.concat(left.slice(leftIndex));

    // Add remaining elements from the right array (if any)
    result = result.concat(right.slice(rightIndex));

    return result;
}

//region Recursive Merge Sort function to divide and conquer
function mergeSort(array) {
    // Base case: if the array has 1 or fewer elements, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Find the middle index to split the array into two halves
    const mid = Math.floor(array.length / 2);

    // Recursively split and sort the left half
    const left = mergeSort(array.slice(0, mid));

    // Recursively split and sort the right half
    const right = mergeSort(array.slice(mid));

    // Merge the sorted left and right halves
    return merge(left, right);
}

// Example usage:
const unsortedArray = [6, 3, 8, 5, 2];
console.log("Unsorted Array:", unsortedArray);

// Call mergeSort to sort the array
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);


`
Dry Run: [6, 3, 8, 5, 2]
Initial Call:

mergeSort([6, 3, 8, 5, 2])
Split: [6, 3, 8] এবং [5, 2]

Recursive Step 1:

mergeSort([6, 3, 8])
Split: [6] এবং [3, 8]
mergeSort([5, 2])
Split: [5] এবং [2]

Recursive Step 2:

mergeSort([3, 8])
Split: [3] এবং [8]

Merge Step:

merge([3], [8]) → [3, 8]
merge([6], [3, 8]) → [3, 6, 8]
merge([5], [2]) → [2, 5]
merge([3, 6, 8], [2, 5]) → [2, 3, 5, 6, 8]
Output:
Sorted Array: [2, 3, 5, 6, 8]

এভাবেই Merge Sort কাজ করে divide-and-conquer স্ট্র্যাটেজি ব্যবহার করে।
`