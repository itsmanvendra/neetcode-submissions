class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length;
        let dp = Array.from({length: n}, () => Array(n).fill(-1));

        function fn(index, prev_index){
            if(index >= n) return 0;
            if(dp[index][prev_index + 1] !== -1) return dp[index][prev_index + 1];
            let len = fn(index+1, prev_index);
            if(prev_index === -1 || nums[index] > nums[prev_index]){
                return dp[index][prev_index + 1] = Math.max(1+ fn(index+1, index), len);
            }
            return dp[index][prev_index + 1] = len;
        }
        return fn(0, -1)
    }
}
