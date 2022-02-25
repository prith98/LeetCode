/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let normal = ''
    let reverse = ''
    let longestPalindrome = '';
    
    if (s.length === 1) return s
    if (s.length === 2) {
        if (s[0] === s[1]) {
            return s
        } else {
            return s[0]
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        let j = i;
        while (j < s.length) {
            normal += s[j]
            reverse = s[j] + reverse;
            if (normal.length === 1) {
                j++;
            } else {
                j++;
                if (normal === reverse) {
                    if (normal.length > longestPalindrome.length) {
                        longestPalindrome = normal;
                    }
                }
            }
        }
        normal = ''
        reverse = ''
        
    }
    
    longestPalindrome === '' ? longestPalindrome = s[0] : longestPalindrome = longestPalindrome
    return longestPalindrome;
    
    
    
};