class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let dp = Array.from({ length: n  }, (_) => Array(2).fill(-1));

        function calcProfit(index, buy) {
            if (index >= n) return 0;
            if (dp[index][buy] !== -1) return dp[index][buy];
            let profit;
            if (buy) {
                profit = Math.max(-prices[index] + calcProfit(index + 1, 0), calcProfit(index + 1, 1));
            } else {
                profit = Math.max(prices[index] + calcProfit(index + 2, 1), calcProfit(index + 1, 0));
            }
            return (dp[index][buy] = profit);
        }
        return calcProfit(0, 1);
    }
}
