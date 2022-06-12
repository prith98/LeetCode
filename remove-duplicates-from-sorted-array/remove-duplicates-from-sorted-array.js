/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let lastElement = nums[nums.length - 1];
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === lastElement) {
            nums = nums.splice(i + 1);
            k++;
        }
        if (nums[i] === nums[i + 1]) {
           nums.splice(i, 1)
           i--;
        }
    }
};