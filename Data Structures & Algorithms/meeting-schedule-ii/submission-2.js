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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length === 0) return 0;
        let newIntervals = [];
        for(let i = 0; i<intervals.length; i++){
            const interval = intervals[i];
            newIntervals.push([interval.start, interval.end])
        }
        
        newIntervals.sort((a, b) => a[0] - b[0]);
        let arr = new MinPriorityQueue()
        arr.enqueue(newIntervals[0][1])
        for(let i = 1; i<newIntervals.length; i++){
            if(arr.front() <= newIntervals[i][0]){
                arr.dequeue();
            }
            arr.enqueue(newIntervals[i][1])
        }
        return arr.size()

    }
}
