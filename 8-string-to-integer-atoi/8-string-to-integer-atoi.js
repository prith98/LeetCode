/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
        var retNum = '';
    
    for (var i = 0; i < s.length; i++){
        
        if (s[i] === ' ' && retNum.length === 0){
            continue;
        } 
        
        if (s[i] === ' ' && retNum.length !== 0){
            break;
        }
        
        
        if (s[i] === '-'){
            if (retNum.length !== 0){
                break;
            } else {
                if (isNaN(Number(s[i + 1])) === false){
                    retNum += '-';
                    continue;
                } else {
                    break;
                }
            }
        }
        
        if (s[i] === '+'){
            if (retNum.length !== 0){
                break;
            } else {
                if (isNaN(Number(s[i + 1])) === false && s[i + 1] !== ' '){
                    continue;
                } else {
                    break;
                }
            }
        }
        
        
        
        
        
        
        if (isNaN(Number(s[i])) === false){
            retNum += s[i];
        } else {
            break;
        }
        
        
    }
    
    if (Number(retNum) < -2147483648){
        retNum = -2147483648;
    }
    if (Number(retNum) > (2 ** 31) - 1){
        retNum = (2 ** 31) - 1;
    }
    
    
    return retNum;
};