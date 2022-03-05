/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sorted = true;
    
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) > Math.abs(nums[i + 1])) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
            sorted = false;
        }
    }
    
    if (sorted) {
        let newArr = nums.map((num) =>  num ** 2)
        return newArr
    } else {
        return sortedSquares(nums)
    }
};