/**region majority element (moore's alogrithum)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            freq = num;
        }
        count += (num === freq) ? 1 : -1;
    }

    let countForVariation = 0;
    for(value in nums){
        if(value == ans){
            countForVariation++
        }
    }
    if(countForVariation > n/2) return ans;
    else{ return -1}
};

const result = majorityElement([1,1,1,2,2,2])

console.log('result of majority', result);


// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 2, 3])); // Output: -1 (no majority element)


    /** it only take one ms time
    * @param {number[]} nums
    * @return {number}
    */
    var majorityElement = function(nums) {
        let freq = null;
        let count = 0;

        for (const num of nums) {
            if (count === 0) {
                freq = num;
            }
            count += (num === freq) ? 1 : -1;
        }

        return freq;
    };