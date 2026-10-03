class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let lastEnd = intervals[0][1];
        let count = 1;
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= lastEnd) {
                ++count;
                lastEnd = intervals[i][1];
            }
        }
        return intervals.length - count;
    }
}
