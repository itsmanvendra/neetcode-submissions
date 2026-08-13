class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map();
        for(let i = 0; i<nums.length; i++){
            const diff = target - nums[i];
            if(mp.has(diff)){
                return [mp.get(diff), i]
            }
            else{
                mp.set(nums[i], i);
            }
        }
        return [0,0]
    }
}
