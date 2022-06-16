/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  
  let pointer = s.length - 1;
  
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[pointer];
    s[pointer] = temp;
    pointer --;
  }
  
  return s;
  
};