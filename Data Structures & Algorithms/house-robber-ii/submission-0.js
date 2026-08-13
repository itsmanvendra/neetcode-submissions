class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
       let n = nums.length;
       if(n === 1) return nums[0];
       // excluded last house
       let arr1 = new Array(n-1).fill(0);
       //excluded first house
       let arr2 = new Array(n-1).fill(0);
       arr1[0] = nums[0];
       arr1[1] = Math.max(nums[0], nums[1]);
       for(let i = 2; i<n-1; i++){
        arr1[i] = Math.max(arr1[i-1], arr1[i-2] + nums[i]);
       }
       arr2[0] = nums[1];
       arr2[1] = Math.max(nums[1], nums[2]);
       for(let i = 3; i< n; i++){
        arr2[i-1] = Math.max(arr2[i-2], arr2[i-3] + nums[i]);
       }
       return Math.max(arr1[n-2], arr2[n-2])
    }
}
