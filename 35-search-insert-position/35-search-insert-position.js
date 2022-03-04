/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let low = 0;
    let high = nums.length - 1;
    
    let index;
    
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        index = mid;
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid - 1;
        }
    }
    
    if (target > nums[index]) {
        return index + 1;
    } else {
        return index;
    }
    
    
};