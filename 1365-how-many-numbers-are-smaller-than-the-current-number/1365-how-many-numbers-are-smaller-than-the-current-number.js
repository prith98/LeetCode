/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
  let returnArray = [];
  
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    nums.forEach(num => {
      if (num < nums[i]) {
        counter++;
      }
    })
    returnArray.push(counter);
  }
  
  return returnArray;
  
};