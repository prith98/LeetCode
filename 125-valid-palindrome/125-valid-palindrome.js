/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let newS = '';
  const pattern = /[A-Za-z0-9]/;
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(pattern)) {
      newS += s[i];
    }
  }
  
  newS = newS.split("");
  
  for (let i = 0, j = newS.length - 1; i < j; i++, j--) {
    if (newS[i] !== newS[j]) {
      return false;
    }
  }
  
  return true;
  
};