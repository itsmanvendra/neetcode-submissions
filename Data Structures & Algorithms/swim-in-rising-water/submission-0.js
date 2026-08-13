class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let time = Array.from({ length: m }, () => new Array(n).fill(Infinity));
        let pq = new MinPriorityQueue((q) => q[2]);
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];
        pq.push([0, 0, grid[0][0]]);
        time[0][0] = grid[0][0];
        while (pq.size() > 0) {
            let [u, v, w] = pq.pop();
            if (time[u][v] < w) continue;
            if (u === m - 1 && v === n - 1) return time[m - 1][n - 1];
            for (let [dr, dc] of DIRS) {
                let nr = dr + u;
                let nc = dc + v;
                if (nc >= 0 && nc < n && nr >= 0 && nr < m) {
                    if (time[nr][nc] > Math.max(w, grid[nr][nc])) {
                        time[nr][nc] = Math.max(w, grid[nr][nc]);
                        pq.push([nr, nc, time[nr][nc]]);
                    }
                }
            }
        }
        return ans;
    }
}
