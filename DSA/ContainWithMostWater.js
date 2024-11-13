/**
 * @param {number[]} height
 * @return {number}
 * #region bin O(n) with two pointers
 */
var maxArea = function(height) {
    let maxWater = 0;
    let lp = 0, rp = height.length-1;

    while(lp < rp){
        let w = rp-lp;
        let ht = Math.min(height[lp], height[rp]);
        let currentWater = w * ht;
        maxWater = Math.max(maxWater, currentWater);

        height[lp] < height[rp] ? lp++ : rp--;
    }

    return maxWater;
};