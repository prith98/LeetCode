/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  let copy = [...nums]
  
  if (k > nums.length) {
    k = k % nums.length
  } else if (k === nums.length) {
    return nums;
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      nums[i] = copy[nums.length - k + i]
    } else {
      nums[i] = copy[i - k]
    }
  }
  
  
};