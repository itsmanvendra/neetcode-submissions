class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let ans = [];
        let n = nums.length;
        for (let i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) continue;
            if (nums[i] > 0) break;
            let j = i + 1;
            let k = n - 1;
            let target = 0 - nums[i];
            while (j < k) {
                let sum = nums[j] + nums[k];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[k]]);
                    while (nums[j] === nums[j + 1]) {
                        j++;
                    }
                    while (nums[k] === nums[k - 1]) {
                        k--;
                    }
                    j++;
                    k--;
                } else if (sum > target) {
                    --k;
                } else {
                    j++;
                }
            }
        }
        return ans;
    }
}
