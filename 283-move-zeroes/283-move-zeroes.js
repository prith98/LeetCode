/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  
  let counter = 0;
  
  for (let i in nums) {
    if (nums[i] !== 0) {
      [nums[counter], nums[i]] = [nums[i], nums[counter]]
      counter++
    }
  }
  
  return nums
  
};