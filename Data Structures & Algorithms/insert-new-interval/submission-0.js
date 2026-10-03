class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let n = intervals.length;
        let i = 0;
        let ans = [];

        while (i < n && intervals[i][1] < newInterval[0]) {
            ans.push([intervals[i][0], intervals[i][1]]);
            i++;
        }
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
            i++;
        }
        ans.push([newInterval[0], newInterval[1]]);
        while (i < n) {
            ans.push([intervals[i][0], intervals[i][1]]);
            i++;
        }

        return ans;
    }
}
