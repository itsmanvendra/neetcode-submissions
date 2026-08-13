class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        let maxCount = 0;
        let count = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) continue;
            if (nums[i + 1] - nums[i] === 1) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 0;
            }
        }
        maxCount = Math.max(maxCount, count);
        return maxCount + 1;
    }
}
