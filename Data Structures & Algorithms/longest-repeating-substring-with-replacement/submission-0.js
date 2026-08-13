class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {
        let n = s.length;
        let arr = new Array(26).fill(0);
        let i = 0;
        let j = 0;
        let maxLen = 1;
        function isWindowValid(){
            let totalCount = 0;
            let maxCount = 0;
            for(let p = 0; p<26; p++){
                totalCount += arr[p];
                maxCount = Math.max(maxCount, arr[p]);
            }
            return totalCount - maxCount <= k
        }
        while(j<n){
            ++arr[s.charCodeAt(j) - 65];
            while(!isWindowValid()){
                --arr[s.charCodeAt(i) - 65];
                ++i;
            }
            maxLen = Math.max(maxLen, j-i+1);
            ++j;
        }
        return maxLen;
    }
}
