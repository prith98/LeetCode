/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numString = x.toString();
    var reverseNumString = '';
    
    
    
    
    if (numString[0] === '-'){
        for (var i = numString.length - 1; i > 0; i--){
            reverseNumString += numString[i];
        }
        
        reverseNumString = '-' + reverseNumString;
        
        
        
    } else {
        for (var j = numString.length - 1; j >= 0; j--){
            reverseNumString += numString[j];
        }
        
        
    }
    
    if (Number(reverseNumString) < (-2) ** 31 || Number(reverseNumString) > (2 ** 31) - 1 ){
        return 0;
    } else {
        return reverseNumString;
    }
};