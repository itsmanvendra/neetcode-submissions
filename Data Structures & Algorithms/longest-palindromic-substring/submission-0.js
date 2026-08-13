class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n = s.length
        let dp = Array.from({length: n}, (_,i) => Array.from({length: n}, (_, j) => i === j? true: false))
        let maxLen = 1;
        let startIndex = 0;
        for(let i = 0; i<n; i++){
            if(s[i] === s[i+1]){
                dp[i][i+1] = true;
                if(maxLen < 2){
                    maxLen = 2;
                    startIndex = i;
                }
            }
        }
        for(let len = 3; len<=n; len++){
            for(let i = 0; i<= n-len; i++){
                let j = i+len-1;
                if(s[i] === s[j] && dp[i+1][j-1] === true){
                    dp[i][j] = true;
                    if(maxLen < len){
                        maxLen = len;
                        startIndex = i;
                    }
                }
            }
        }
        return s.substring(startIndex, maxLen+startIndex);
    }
}
