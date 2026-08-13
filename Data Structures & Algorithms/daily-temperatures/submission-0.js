class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let n = temperatures.length;
        let ans = new Array(n).fill(0);
        let len = 0;
        stack.push(n - 1);
        ++len;
        for (let i = n - 2; i >= 0; i--) {
            let top = stack[len - 1];

            while (len > 0 && temperatures[i] >= temperatures[top]) {
                stack.pop();
                --len;
                top = stack[len - 1];
            }

            stack.push(i);
            ans[i] = len === 0 ? 0 : top - i;
            ++len;
        }
        return ans;
    }
}
