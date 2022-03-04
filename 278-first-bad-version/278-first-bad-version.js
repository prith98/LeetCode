/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        if (n === 1) return 1;
        
        let low = 1;
        let high = n;
        
        let firstBadVersion;
        
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (!isBadVersion(mid)) {
                low = mid + 1
            } else if (isBadVersion(mid)) {
                firstBadVersion = mid;
                high = mid - 1;
            }
        }
        
        if (firstBadVersion === undefined) {
            return n;
        } else {
            return firstBadVersion
        }
        
    };
};