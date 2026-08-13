class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = {};
        for(let i = 0; i<nums.length; i++){
            if(!mp[nums[i]]){
                mp[nums[i]] = 1;
            }
            else{
                ++mp[nums[i]];
            }
        }
        let arr = [];
        for(let key of Object.keys(mp)){
            arr.push([Number(key), mp[key]]);
        }
        arr.sort((a,b) => b[1]- a[1]);
        let ans = [];
        for(let i = 0; i<k; i++){
            ans.push(arr[i][0])
        }
        return ans;
    }
}
