/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numString = x.toString();
    
    if (x < 0){
        return false;
    } else {

            var counter = 0;
            while (counter < numString.length - counter - 1){
                if (numString[counter] === numString[numString.length - counter - 1]){
                    counter++;
                    continue;
                } else {
                    return false;
                }
            }
            
            return true;
        
    }
};