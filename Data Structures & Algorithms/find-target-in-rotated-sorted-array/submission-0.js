class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s = 0;
        let e = nums.length - 1;
        while(s<=e){
            let mid = Math.floor((s+e)/2);
            if(nums[mid] === target) return mid;
            else if(nums[s] <= nums[mid]){
                // left side sorted
                if((nums[s] <= target) && (target < nums[mid])){
                    e = mid - 1;
                }
                else{
                    s = mid + 1;
                }
            }
            else if(nums[mid] <= nums[e]){
                // right side sorted
                if((nums[mid] < target) && (target <= nums[e])){
                    s = mid + 1;
                }
                else{
                    e = mid -1
                }

            }
        }
        return -1
    }
}
