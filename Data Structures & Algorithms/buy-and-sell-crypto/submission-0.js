class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxElement = -1;
        let maximumProfit = 0;
        for(let i = prices.length - 1; i>=0; i--){
            maxElement = Math.max(maxElement, prices[i]);
            let currProfit = maxElement - prices[i];
            maximumProfit = Math.max(maximumProfit, currProfit);
        }
        return maximumProfit;

    }
}
