class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let n = points.length;
        let pq = new MinPriorityQueue((q) => q[1]);
        let ans = 0;
        let visited = new Set();
        pq.push([0, 0]);
        while (pq.size() > 0) {
            let [i, w] = pq.pop();
            if (visited.has(i)) continue;
            visited.add(i);
            ans += w;
            // early breakthrough
            if (visited.size === n) return ans;

            for (let j = 0; j < n; j++) {
                if (visited.has(j)) continue;
                let dist =
                    Math.abs(points[j][0] - points[i][0]) + Math.abs(points[j][1] - points[i][1]);
                pq.push([j, dist]);
            }
        }

        return ans;
    }
}
