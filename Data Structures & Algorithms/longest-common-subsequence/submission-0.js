class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length;
    let n = text2.length;
    let dp = Array.from({length :m}, ()=> Array.from({length : n}, () => 0));
    let best = Array.from({length :m}, ()=> Array.from({length : n}, () => 0));
    for(let i = m-1; i>= 0; i--){
        for(let j = n-1; j>= 0; j--){
            if(text1[i] === text2[j]){
                if(i === m-1 || j === n-1){
                    dp[i][j] = 1;
                    best[i][j] = 1;
                }
                else{
                     dp[i][j] = 1 + best[i+1][j+1];
                }

            }
            if(i === m-1 && j !== n-1){
                best[i][j] = Math.max(dp[i][j], best[i][j+1])
            }
            else if(i !== m-1 && j === n-1){
                best[i][j] = Math.max(dp[i][j], best[i+1][j])
            }
            else if(i !== m-1 && j !== n-1){
                best[i][j] = Math.max(dp[i][j], best[i][j+1], best[i+1][j]);
            }
                
          

        }
    }
    return best[0][0];
    }
}
