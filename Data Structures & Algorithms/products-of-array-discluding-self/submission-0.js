class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let l2R = new Array(n).fill(1);
        let r2L = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            l2R[i] = l2R[i - 1] * nums[i - 1];
            r2L[n - 1 - i] = r2L[n - i] * nums[n - i];
        }
        let ans = [];
        for (let i = 0; i < n; i++) {
            ans.push(l2R[i] * r2L[i]);
        }
        return ans;
    }
}
