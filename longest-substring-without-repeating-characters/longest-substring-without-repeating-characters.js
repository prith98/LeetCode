/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let wordObj = {};
    
    let maxSubstring = 0;
    let currentSubstring = 0;
    
    for (let i = 0; i < s.length;) {
        if (!wordObj[s[i]]) {
            currentSubstring++;
            maxSubstring = Math.max(maxSubstring, currentSubstring);
            wordObj[s[i]] = true;
            i++;
        } else {
            currentSubstring = 0;
            s = s.substring(1);
            wordObj = {};
            i = 0;
        }
    }
    
    return maxSubstring;
    
};