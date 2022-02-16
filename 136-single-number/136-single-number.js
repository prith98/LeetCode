/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let numberObject = {};
    
    for (let i = 0; i < nums.length; i++) {
        numberObject[nums[i]] ? numberObject[nums[i]] ++ : numberObject[nums[i]] = 1;
    }
    
    for (let keys in numberObject) {
        if (numberObject[keys] === 1) {
            return keys;
        }
    }
    
};