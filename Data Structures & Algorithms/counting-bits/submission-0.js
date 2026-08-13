class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let ans = [];
        for (let i = 0; i <= n; i++) {
            if (i === 0) {
                ans.push(0);
            } else if (i === 1) {
                ans.push(1);
            } else {
                let temp = Math.floor(Math.log2(i));
                let remaining = i - Math.pow(2, temp);
                ans.push(ans[remaining] + 1);
            }
        }
        return ans;
    }
}
