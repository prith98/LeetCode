/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  
  if (nums.length === 1) return nums;
  
  let sorted = true;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (!nums[i] && nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      sorted = false;
    }
  }
  
  if (sorted) {
    return nums;
  } else {
    moveZeroes(nums)
  }
  
  
};