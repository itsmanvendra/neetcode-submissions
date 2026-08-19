class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let pq = new MaxPriorityQueue();
        for (let i = 0; i < stones.length; i++) {
            pq.enqueue(stones[i]);
        }
        while (pq.size() > 1) {
            let a = pq.dequeue();
            let b = pq.dequeue();
            let diff = Math.abs(a - b);
            if (diff !== 0) {
                pq.enqueue(diff);
            }
        }
        return pq.size() === 1 ? pq.front() : 0;
    }
}
