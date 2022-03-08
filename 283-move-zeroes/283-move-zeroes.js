/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  
    let pointer = 0
    for (let i in nums){
        if (nums[i] !== 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
    }
    return nums
  
  
};