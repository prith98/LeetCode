/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
  const reverse = (word) => {
    if (word.length === 1) return word;
    let wordArray = word.split('')
    let low = 0;
    let high = word.length - 1;
    while(low <= high) {
      let temp = wordArray[high]
      wordArray[high] = wordArray[low]
      wordArray[low] = temp;
      low++;
      high--;
    }
    let reverseWord = wordArray.join('')
    return reverseWord
  }
  
  let sArray = s.split(' ')
  sArray = sArray.map(word => reverse(word))
  return sArray.join(' ')
  
  
  
};