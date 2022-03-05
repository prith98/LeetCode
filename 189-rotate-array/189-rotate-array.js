/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  let arrCopy = [...nums];
  
  if (k < nums.length) {
    let difference = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
      if (k - i > 0) {
        nums[i] = arrCopy[i + difference];
      } else if (k === i) {
        nums[i] = arrCopy[0]
      } else if (k - i < 0) {
        nums[i] = arrCopy[i - k]
      }
    }
  }
  
  if (k > nums.length) {
    k = k % nums.length;
        let difference = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
      if (k - i > 0) {
        nums[i] = arrCopy[i + difference];
      } else if (k === i) {
        nums[i] = arrCopy[0]
      } else if (k - i < 0) {
        nums[i] = arrCopy[i - k]
      }
    }
  }
  
  
};