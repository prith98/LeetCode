/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;
    let doIHaveStock = false;
    let currentStockPrice;
    
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] >= prices[i + 1]) {
            continue;
        } else {
            profit += prices[i + 1] - prices[i];
        }
        
    }
    
    return profit;
    
};