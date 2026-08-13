class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let n = s.length
        let dp = Array.from({length: n}, (_,i) => Array.from({length: n}, (_, j) => i === j? true: false))
        let ans = n;
        for(let i = 0; i<n; i++){
            if(s[i] === s[i+1]){
                dp[i][i+1] = true;
                ++ans;
            }
        }
        for(let len = 3; len<=n; len++){
            for(let i = 0; i<= n-len; i++){
                let j = i+len-1;
                if(s[i] === s[j] && dp[i+1][j-1] === true){
                    dp[i][j] = true;
                    ++ans;
                }
            }
        }
        return ans;
    }
}
