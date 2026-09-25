class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev2 = 0;
        let prev1 = 0;
        let ans = 0;
        for (let i = 0; i < nums.length; i++) {
            let money = nums[i] + prev2;
            ans = Math.max(prev1, money);
            prev2 = prev1;
            prev1 = ans;
        }
        return ans;
    }
}
