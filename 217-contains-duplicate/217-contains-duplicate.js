/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 1) return false;
    
    let numObj = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (!numObj[nums[i]]) {
            numObj[nums[i]] = 1
        } else {
            return true;
        }
    }
    
    return false;
    
    
};