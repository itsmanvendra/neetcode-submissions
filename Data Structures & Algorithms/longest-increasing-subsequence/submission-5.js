class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length;
        let dp = Array(n).fill(1);
        let hash = Array(n).fill(0);
        let lastIndex = 1;


        let maxx = 1;

        for(let i = 1; i<n; i++){
            hash[i] = i;
            for(let j = 0; j<i; j++){
                if(nums[i] > nums[j] && dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1;
                    hash[i] = j;
                }
            }
            if(dp[i] > maxx){
                maxx = dp[i];
                lastIndex = i;
            }

        }

        // let lisArr = [];
        // lisArr.push(nums[lastIndex]);
        // while(hash[lastIndex] !== lastIndex){
        //     lastIndex = hash[lastIndex];
        //     lisArr.push(nums[lastIndex]);
        // }

        // console.log(lisArr.reverse());

        return maxx
    }
}
