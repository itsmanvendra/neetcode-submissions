class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount + 1).fill(Infinity);
        for (let coin of coins) {
            dp[coin] = 1;
        }
        dp[0] = 0;
        for (let i = 1; i < amount + 1; i++) {
            if (dp[i] !== Infinity) continue;
            for (let coin of coins) {
                if (i - coin >= 0) {
                    dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
                }
            }
        }
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
