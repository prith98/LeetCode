/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 
  if (s.length !== t.length) return false;
  
  let objS = {};
  let objT = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!objS[s[i]]) {
      objS[s[i]] = 1;
    } else if (objS[s[i]]) {
      objS[s[i]]++;
    }
    if (!objT[t[i]]) {
      objT[t[i]] = 1;
    } else if (objT[t[i]]) {
      objT[t[i]]++;
    }
  }
  
  for (let keys in objS) {
    if (objS[keys] !== objT[keys]) {
      return false;
    }
  }
  
  return true;
  
  
  
  
};