class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // dijkstra algo
        let graph = {};
        for (let [u, v, w] of times) {
            if (!graph[u]) {
                graph[u] = [];
            }
            graph[u].push([v, w]);
        }
        let time = new Array(n + 1).fill(Infinity);
        let pq = new MinPriorityQueue((q) => q[1]);
        pq.push([k, 0]);
        time[0] = -1;
        time[k] = 0;
        while (pq.size() > 0) {
            let [currNode, currWeight] = pq.pop();
            if (time[currNode] < currWeight) continue;
            for (let [neighbour, neighbourWeight] of graph[currNode] || []) {
                if (time[neighbour] > currWeight + neighbourWeight) {
                    time[neighbour] = currWeight + neighbourWeight;
                    pq.push([neighbour, currWeight + neighbourWeight]);
                }
            }
        }

        let ans = -1;
        for (let i = 0; i < n + 1; i++) {
            ans = Math.max(ans, time[i]);
        }
        if (ans === Infinity) return -1;
        return ans;
    }
}
