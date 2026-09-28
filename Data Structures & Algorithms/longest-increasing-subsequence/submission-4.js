class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length;
        let dp = Array(n).fill(1);

        let maxx = 1;

        for(let i = 1; i<n; i++){
            for(let j = 0; j<i; j++){
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxx = Math.max(dp[i], maxx);
        }

        return maxx
    }
}
