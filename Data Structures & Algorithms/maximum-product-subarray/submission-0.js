class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n = nums.length;
        let currMax = -11;
        let leftMax = 1;
        let rightMax = 1;
        for (let i = 0; i < n; i++) {
            leftMax *= nums[i];
            rightMax *= nums[n - 1 - i];
            currMax = Math.max(currMax, leftMax, rightMax);
            if (leftMax === 0) {
                leftMax = 1;
            }
            if (rightMax === 0) {
                rightMax = 1;
            }
        }
        return currMax == 0? 0:currMax;

    }
}
