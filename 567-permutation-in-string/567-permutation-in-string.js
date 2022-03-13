/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    function charObjects (string) {
        let stringObj = {}
        for (let i = 0; i < string.length; i++) {
            if (!stringObj[string[i]]) {
                stringObj[string[i]] = 1;
            } else {
                stringObj[string[i]] ++;
            }
        }
        
        return stringObj;
    }
    
    let s1Obj = charObjects(s1);
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let perm = true;
        let curSubString = s2.substring(i, i + s1.length);
        let curObj = charObjects (curSubString);
        for (let keys in s1Obj) {
            if (s1Obj[keys] !== curObj[keys]) {
                perm = false;
                break;
            }
        }
        if (perm) {
            return perm;
        } else {
            continue;
        }
    }
    
    return false;
    
};