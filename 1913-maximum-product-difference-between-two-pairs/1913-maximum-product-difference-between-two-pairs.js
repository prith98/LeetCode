/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  
  let isSorted = true;
    
  for (let i = 0; i < nums.length - 1; i++) {
    let num1 = nums[i];
    let num2 = nums[i + 1];
    if (num1 > num2) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]; 
      isSorted = false;
    }
  }
  
  if (isSorted) {
    return ((nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]));
  } else {
    return maxProductDifference(nums)
  }
  
  
};