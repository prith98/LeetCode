/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;

};