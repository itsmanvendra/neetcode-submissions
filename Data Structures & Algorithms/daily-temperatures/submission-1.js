class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let ans = Array(n).fill(0);
        let arr = [[temperatures[n - 1], n - 1]];
        for (let i = n - 2; i >= 0; i--) {
            while (arr.length > 0 && arr[arr.length - 1][0] <= temperatures[i]) {
                arr.pop();
            }
            if (arr.length > 0) {
                ans[i] = arr[arr.length - 1][1] - i;
            }
            arr.push([temperatures[i], i]);
        }
        return ans;
    }
}
