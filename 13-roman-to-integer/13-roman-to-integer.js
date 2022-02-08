/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const nums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        let num1 = nums[s[i]]
        let num2 = nums[s[i + 1]]
        if (num1 >= num2) {
            sum += num1;
        } else if (num2 > num1) {
            sum += (num2 - num1)
            i++;
        } else if (num2 === undefined) {
            sum += num1;
        }
    }
    
    return sum
    
};