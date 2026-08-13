class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length;
        let n = text2.length;
        let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => -1));
        function calcSubsequenceLength(idx1, idx2) {
            if (idx1 < 0 || idx2 < 0) {
                return 0;
            }
            if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];
            if (text1[idx1] === text2[idx2]) {
                dp[idx1][idx2] = 1 + calcSubsequenceLength(idx1 - 1, idx2 - 1);
                return dp[idx1][idx2];
            }
            dp[idx1][idx2] = Math.max(
                calcSubsequenceLength(idx1, idx2 - 1),
                calcSubsequenceLength(idx1 - 1, idx2),
            );
            return dp[idx1][idx2];
        }
        return calcSubsequenceLength(m - 1, n - 1);
    }
}
