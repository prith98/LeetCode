/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  if (s.length === 1) return s;
  
  let low = 0;
  let high = s.length - 1;
  
  while (low <= high) {
    let temp = s[high];
    s[high] = s[low]
    s[low] = temp;
    low++;
    high--;
  }
  
  return s;
  
};