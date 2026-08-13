class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let s = 0;
        let e = nums.length - 1;
        if (nums[s] <= nums[e]) return nums[s];
        while (s < e) {
            let mid = Math.floor((s + e) / 2);
            if (nums[s] <= nums[mid]) {
                // left side sorted
                if (nums[mid] > nums[e] && nums[mid] > nums[mid + 1]) {
                    return nums[mid + 1];
                } else {
                    s = mid + 1;
                }
            } else if (nums[mid] <= nums[e]) {
                // right side sorted
                if (nums[mid] < nums[s] && nums[mid] < nums[mid - 1]) {
                    return nums[mid];
                } else {
                    e = mid - 1;
                }
            }
        }
    }
}
