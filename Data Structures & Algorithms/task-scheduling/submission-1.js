class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let arr = Array(26).fill(0);
        for(let i = 0; i<tasks.length; i++){
            ++arr[tasks[i].charCodeAt(0) -65]
        };
        let maxFreq = 0;
        for(let i = 0; i<26; i++){
            maxFreq = Math.max(maxFreq, arr[i]);
        }
        let maxFreqCount = 0;
        for(let i = 0; i<26; i++){
            if(maxFreq === arr[i]) maxFreqCount++;
        }
        let ans = (maxFreq-1)*(n+1) + maxFreqCount;
        return Math.max(ans,tasks.length)

    }
}
