class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let dp = Array.from({ length: n +2 }, (_) => Array(2).fill(0));
        for(let i = n-1; i>= 0; i--){
            for(let buy = 0; buy <= 1; buy++){
                if(buy){
                    dp[i][buy] = Math.max(-prices[i] + dp[i +1][0], dp[i+1][1]);
                }
                else{
                    dp[i][buy] = Math.max(prices[i] + dp[i+2][1], dp[i+1][0]);
                }
                
            }
        }
        return dp[0][1];
    }
}
