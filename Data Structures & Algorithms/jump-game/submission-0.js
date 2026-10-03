class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n = nums.length;
        let maxx = 0;
        for (let i = 0; i < n; i++) {
            if (maxx < i) {
                return false;
            }
            maxx = Math.max(maxx, nums[i] + i);
        }
        return true 
    }
}
