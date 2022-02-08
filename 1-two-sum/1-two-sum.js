/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let solutionArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let number1 = nums[i];
        while (j < nums.length) {
            let number2 = nums[j];
            let sum = number1 + number2;
            if (sum === target) {
                solutionArray.push(i);
                solutionArray.push(j);
                return solutionArray;
            } else {
                j++;
            }
        }
    }
};