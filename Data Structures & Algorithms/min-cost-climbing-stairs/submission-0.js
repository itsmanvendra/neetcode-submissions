class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length;
        let arr = new Array(n).fill(-1);
        arr[0] = arr[1] = 0;
        for (let i = 2; i < n; i++) {
            arr[i] = Math.min(arr[i - 1] + cost[i - 1], arr[i - 2] + cost[i - 2]);
        }
        return Math.min(arr[n - 1] + cost[n - 1], arr[n - 2] + cost[n - 2]);
    }
}
