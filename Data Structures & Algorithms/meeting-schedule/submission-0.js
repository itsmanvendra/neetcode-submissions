/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const myIntervals = [];
        for(let i = 0; i<intervals.length; i++){
            let interval = intervals[i];
            myIntervals.push([interval.start,interval.end])
        }
        
        myIntervals.sort((a, b) => a[0] - b[0]);
        let isPossible = true;
        for(let i = 0; i<myIntervals.length - 1; i++){
            if(myIntervals[i][1] > myIntervals[i+1][0]){
                isPossible = false;
            }
        }
        return isPossible;
    }
}
