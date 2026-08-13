class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let mySet = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (mySet.has(nums[i])) return nums[i];
            mySet.add(nums[i]);
        }
    }
}
