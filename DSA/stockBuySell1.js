// Here’s the complete code for the Merge Sort implementation:

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

const unsortedArray = [6, 3, 8, 5, 2];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 5, 6, 8]

/**
 * এই Merge Sort কোডটি একটি বিভাজন-এবং-জয় অ্যালগরিদম ব্যবহার করে অ্যারেকে সাজায়। এটি অ্যারেকে ছোট ছোট উপঅ্যারে বিভক্ত করে, প্রতিটি উপঅ্যারেকে সাজিয়ে আবার মিলিত করে সম্পূর্ণ অ্যারেকে সাজানো হয়।

Merge Sort কে দুটি ভাগে বিভক্ত করা যায়:

বিভাজন (Division): অ্যারেকে বারবার দুইভাগে ভাগ করে ছোট উপঅ্যারে বানানো।
মার্জিং (Merging): উপঅ্যারে সাজিয়ে একসাথে মিলিয়ে একটি সম্পূর্ণ সাজানো অ্যারে তৈরি করা।
এখন এই কোডের দুটি ফাংশনের কাজটি একে একে বুঝিয়ে দিচ্ছি।

merge ফাংশন:
merge ফাংশনটি দুটি সাজানো অ্যারেকে একত্রিত করে একটি সম্পূর্ণ সাজানো অ্যারে তৈরি করে। এটি নিচের মতো কাজ করে:

প্রথমে result নামের একটি খালি অ্যারে তৈরি করা হয়, যেখানে আমরা একত্রিত উপাদানগুলো রাখবো।
এরপর left ও right অ্যারের প্রতিটি উপাদান তুলনা করা হয়:
যদি left[leftIndex] এর মান right[rightIndex] এর চেয়ে ছোট হয়, তাহলে result তে left[leftIndex] যোগ করা হয় এবং leftIndex এক ধাপ বাড়ানো হয়।
অন্যথায় result তে right[rightIndex] যোগ করা হয় এবং rightIndex এক ধাপ বাড়ানো হয়।
একবার left বা right অ্যারের কোনো একটি খালি হয়ে গেলে, অবশিষ্ট অংশ result তে যোগ করা হয়। (এটা concat ব্যবহার করে করা হয়)।
Dry Run:

ধরুন, left = [3, 8] এবং right = [2, 5, 6]।

result = [];
leftIndex = 0;
rightIndex = 0;

// প্রথমে left[0] এবং right[0] তুলনা করা হবে:
result = [2]; // কারণ 2 < 3
rightIndex = 1;

// এরপর 3 এবং 5 তুলনা করা হবে:
result = [2, 3]; // কারণ 3 < 5
leftIndex = 1;

// এরপর 8 এবং 5 তুলনা করা হবে:
result = [2, 3, 5]; // কারণ 5 < 8
rightIndex = 2;

// এরপর 8 এবং 6 তুলনা করা হবে:
result = [2, 3, 5, 6]; // কারণ 6 < 8
rightIndex = 3;

// এখন right খালি হয়ে গেছে, তাই left এর অবশিষ্ট 8 যোগ করা হবে:
result = [2, 3, 5, 6, 8];
mergeSort ফাংশন:
mergeSort মূলত পুরো অ্যারেকে বারবার দুইভাগে বিভক্ত করে যতক্ষণ পর্যন্ত প্রতিটি উপঅ্যারের দৈর্ঘ্য ১ বা এর কম না হয়। একবার অ্যারেকে একক উপাদান যুক্ত উপঅ্যারে বিভক্ত করা হলে, merge ফাংশনের মাধ্যমে তাদের আবার একত্রিত করে সাজানো অ্যারে তৈরি করা হয়।

কিভাবে কাজ করে:

যদি array.length ১ বা এর কম হয়, তাহলে তা ইতিমধ্যেই সাজানো থাকে, তাই এই অ্যারেটি ফিরিয়ে দেয়া হয়।
অন্যথায়, mid দিয়ে অ্যারেকে দুটি ভাগে ভাগ করা হয়: left এবং right।
left অংশের জন্য আবার mergeSort(left) ডাকা হয় এবং right অংশের জন্য mergeSort(right) ডাকা হয়।
অবশেষে, merge(left, right) কল করে সাজানো দুটি অংশকে একত্রিত করা হয়।
Dry Run:

ধরুন, আমাদের ইনপুট অ্যারে [6, 3, 8, 5, 2]।

প্রথমে mergeSort([6, 3, 8, 5, 2]) কল করা হয়।
এই অ্যারেটিকে দুইভাগে ভাগ করা হয়:
left = [6, 3]
right = [8, 5, 2]
left = [6, 3] এর জন্য:

mergeSort([6, 3]) এর ফলে:
left = [6]
right = [3]
merge([6], [3]) কল করে [3, 6] সাজানো অ্যারে পাওয়া যায়।
right = [8, 5, 2] এর জন্য:

mergeSort([8, 5, 2]) এর ফলে:
left = [8]
right = [5, 2]
mergeSort([5, 2]) এর ফলে:
left = [5]
right = [2]
merge([5], [2]) কল করে [2, 5] সাজানো অ্যারে পাওয়া যায়।
এরপর merge([8], [2, 5]) কল করে [2, 5, 8] সাজানো অ্যারে পাওয়া যায়।
অবশেষে:

merge([3, 6], [2, 5, 8]) কল করে পুরো অ্যারে [2, 3, 5, 6, 8] সাজানো হয়।
Merge Sort অ্যালগরিদমের কাজের প্রক্রিয়া:
এটি মূল অ্যারেকে বারবার দুইভাগে বিভক্ত করে একক উপাদানে পরিণত করে।
এরপর দুইটি ছোট ছোট সাজানো অ্যারেকে merge ফাংশনের মাধ্যমে একত্রিত করে বৃহত্তর সাজানো অ্যারে তৈরি করে।
শেষ পর্যন্ত পুরো অ্যারেটি সাজানো হয়।
 * **/ 