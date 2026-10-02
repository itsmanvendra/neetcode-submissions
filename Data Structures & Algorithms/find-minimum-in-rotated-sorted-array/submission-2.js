class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums.length;
            let s = 0;
            let e = n - 1;
            let ans = nums[s];
            while (s <= e) {
                if (nums[s] <= nums[e]) return nums[s];
                let mid = Math.floor((s + e) / 2);
                if (nums[mid] > nums[e]) {
                    s = mid + 1;
                } else {
                    e = mid;
                }
            }
            return nums[s];
    }
}
