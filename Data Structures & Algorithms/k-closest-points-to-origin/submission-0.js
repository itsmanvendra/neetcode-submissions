class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let pq = new MinPriorityQueue(([x, y]) => x * x + y * y);
        for (let i = 0; i < points.length; i++) {
            pq.enqueue(points[i]);
        }
        let ans = [];
        let count = 0;
        while (ans.length < k) {
            ans.push(pq.dequeue());
        }
        return ans;
    }
}
