class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        function robRange(start, end) {
            let prev2 = 0;
            let prev1 = 0;
            let ans = 0;
            for (let i = start; i < end; i++) {
                let money = nums[i] + prev2;
                ans = Math.max(prev1, money);
                prev2 = prev1;
                prev1 = ans;
            }
            return ans;
        }

        let way1 = robRange(0, nums.length - 1);
        let way2 = robRange(1, nums.length);

        return Math.max(way1, way2);
    }
}
