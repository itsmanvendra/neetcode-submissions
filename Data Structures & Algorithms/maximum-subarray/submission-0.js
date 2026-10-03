class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum = 0;
        let maxSum = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            maxSum = Math.max(sum, maxSum);
            if (sum < 0) {
                sum = 0;
            }
        }
        return maxSum;
    }
}
