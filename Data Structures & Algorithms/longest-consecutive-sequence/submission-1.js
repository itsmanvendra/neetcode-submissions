class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

    if(nums.length === 0) return 0;
    let set = new Set();
    let maxCount = 1;
    for(let i = 0; i<nums.length; i++){
        set.add(nums[i]);
    }
    for(let value of set){
        let count = 1;
        if(set.has(value - 1)){
            continue;
        }
        let k = value+1;
        while(set.has(k)){
            count++;
            k++
        }
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};
    }

