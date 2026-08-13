class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = 0;
        for(let num of nums){
            sum += num;
        }
        if(sum % 2) return false;
        sum = sum / 2;
        let dp = new Array(sum + 1).fill(false);
        dp[0] = true;
        for(let num of nums){
            for(let j = sum; j>= num; --j){
                dp[j] = dp[j] || dp[j - num];
            }
            if(dp[sum]){
                return true;
            }
        }
        return dp[sum]
    }
}
