class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = [];
        let sI = intervals[0][0];
        let eI = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            if (eI < intervals[i][0]) {
                ans.push([sI, eI]);
                sI = intervals[i][0];
                eI = intervals[i][1];
            } else {
                eI = Math.max(eI, intervals[i][1]);
            }
        }
        ans.push([sI, eI]);
        return ans;
    }
}
