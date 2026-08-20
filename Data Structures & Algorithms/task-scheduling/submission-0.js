class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let arr = Array(26).fill(0);
        let temp = [];
        let pq = new MaxPriorityQueue(([x, y]) => y);
        let time = 0;
        let count = 0;
        for (let i = 0; i < tasks.length; i++) {
            ++arr[tasks[i].charCodeAt(0) - 65];
        }
        for (let i = 0; i < 26; i++) {
            if (arr[i] !== 0) {
                let char = String.fromCharCode(i + 65);
                pq.enqueue([char, arr[i]]);
            }
        }
        while (count < tasks.length) {
            if (temp[time]) {
                pq.enqueue(temp[time]);
            }
            if (pq.size() > 0) {
                let topEle = pq.dequeue();
                count++;
                topEle[1]--;
                if (topEle[1] > 0) {
                    temp[time + n + 1] = topEle;
                }
            }
            ++time;
        }
        return time;
    }
}
