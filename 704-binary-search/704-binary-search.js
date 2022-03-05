/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    

    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        
        let midPoint = Math.floor((low + high) / 2);
        if (nums[midPoint] === target) {
            return midPoint
        } else if (nums[midPoint] > target) {
            high = midPoint - 1
        } else if (nums[midPoint] < target) {
            low = midPoint + 1;
        }
        
    }
    
    
    return -1;
    
    
    
};