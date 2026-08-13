class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let ans = [];
        let arr = [];
        let i = 0;
        let j = 0;
        let currMax = -Infinity;
        let n = nums.length;
        while (j < n) {
            if (j - i === k) {
                ans.push(currMax);

                if (nums[i] === currMax) {
                    arr.shift();
                    if (arr.length > 0) {
                        currMax = arr[0];
                    } else {
                        currMax = -Infinity;
                    }
                }

                i++;
            } else {
                if (currMax < nums[j]) {
                    arr = [];
                    arr.push(nums[j]);
                    currMax = nums[j];
                } else {
                    let x = arr.length - 1;
                    while (arr[x] < nums[j]) {
                        arr.pop();
                        --x;
                    }
                    arr.push(nums[j]);
                }
                ++j;
            }
        }
        ans.push(currMax);
        return ans;
    }
}
