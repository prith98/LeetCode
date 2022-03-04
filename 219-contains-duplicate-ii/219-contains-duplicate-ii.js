/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    if (nums.length === 1) return false;
    
    let numObj = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (numObj[nums[i]] === undefined) {
            numObj[nums[i]] = [i];
        } else {
            numObj[nums[i]].push(i);
        }
    }
    
    for (let keys in numObj) {
        if (numObj[keys].length >= 2) {
            for (let i = 0; i < numObj[keys].length; i++) {
                for (let j = 0; j < numObj[keys].length; j++) {
                    if (j <= i) {
                        continue;
                    } else {
                        if (Math.abs(numObj[keys][i] - numObj[keys][j]) <= k) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    
    return false;
    
};