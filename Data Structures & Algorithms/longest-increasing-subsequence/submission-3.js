class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length;
        let dp = Array.from({ length: n + 1 }, () => Array(n+1).fill(0));

        for (let index = n - 1; index >= 0; index--) {
            for (let prev_index = index - 1; prev_index >= -1; prev_index--) {
                let len = dp[index + 1][prev_index + 1];
                if (prev_index === -1 || nums[index] > nums[prev_index]) {
                    dp[index][prev_index + 1] = Math.max(1 + dp[index + 1][index + 1], len);
                }
                else{
                    dp[index][prev_index + 1] = len;
                }  
            }
        }
        console.log(dp)

        return dp[0][-1+1]
    }
}
