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
        let arr = [];
        arr.push(newIntervals[0][1])
        for(let i = 1; i<newIntervals.length; i++){
            let isRoomAvailable = false;
            for(let j = 0; j<arr.length; j++){
                if(arr[j] > newIntervals[i][0]){
                    continue;
                }
                else {
                    arr[j] = newIntervals[i][1];
                    isRoomAvailable = true;
                    break;
                }
            }
            if(!isRoomAvailable){
                arr.push(newIntervals[i][1]);
            }

        }
        return arr.length

    }
}
