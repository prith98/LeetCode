/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

let dupObj = {};

for (let i = 0; i < nums.length; i++) {
	if (dupObj[nums[i]]) {
		return true;
} else {
	dupObj[nums[i]] = true;
}
}

return false;	


};
