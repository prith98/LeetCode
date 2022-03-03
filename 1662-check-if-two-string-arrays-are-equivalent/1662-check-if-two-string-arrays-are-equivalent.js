/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let string1 = '';
    let string2 = '';
    
    word1.forEach(letter => string1 += letter)
    word2.forEach(letter => string2 += letter)
    
    return string1 === string2
    
    
};