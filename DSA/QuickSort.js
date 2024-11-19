function quickSort(arr) {
    // যদি অ্যারে এক বা শূন্য এলিমেন্টের হয়, তাহলে এটি ইতিমধ্যে সাজানো
    if (arr.length <= 1) {
        return arr;
    }

    // পিভট নির্বাচন (শেষ এলিমেন্ট)
    let pivot = arr[arr.length - 1];
    let left = [];  // পিভটের চেয়ে ছোট এলিমেন্টের জন্য অ্যারে
    let right = []; // পিভটের চেয়ে বড় এলিমেন্টের জন্য অ্যারে

    // পার্টিশনিং
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // পিভটের চেয়ে ছোট হলে বাম পাশে রাখুন
        } else {
            right.push(arr[i]); // পিভটের চেয়ে বড় হলে ডান পাশে রাখুন
        }
    }

    // পুনরাবৃত্তি
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// অ্যারে সাজানো
let sortedArray = quickSort(array);
console.log(sortedArray); // ফলাফল: [1, 5, 7, 8, 9, 10]