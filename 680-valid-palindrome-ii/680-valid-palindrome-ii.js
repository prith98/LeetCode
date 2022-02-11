/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    let left = 0, right = s.length - 1;
    
    const next = (left, right) => {
        while (left < right) {
            if (s.charAt(left) !== s.charAt(right)) {
                return false;
            }
            
            left ++, right --;
        }
        return true;
    }
    
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return next(left + 1, right) || next(left, right - 1)
        }
        
        left ++, right--;
    }
    
    return true;
};