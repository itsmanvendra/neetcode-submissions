class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let totalSum = Math.floor((n * (n + 1)) / 2);
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
        }
        return totalSum - sum;
    }
}
