/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longestSub = 0;
    
    if (s.length === 1) {
        return 1;
    }
    
    while(s.length > 0) {
        
        let substring = s[0]
        
        for (let i = 1; i < s.length; i++) {
            let currChar = s[i];
            if (substring.includes(currChar)) {
                if (substring.length > longestSub) {
                    longestSub = substring.length;
                    break;
                } else {
                    break;
                }
            } else {
                substring += currChar;
                substring.length > longestSub ? longestSub = substring.length : null;
                continue;
            }
        }
        
        s = s.substring(1);

    }
    
    return longestSub;
    
};