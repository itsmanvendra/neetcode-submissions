class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        /**
         * @param {number[][]} heights
         * @return {number[][]}
         */

        let m = heights.length;
        let n = heights[0].length;
        const visited = new Set();
        let DIRS = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        let pacific = Array.from({ length: m }, (_, i) =>
            Array.from({ length: n }, (_, j) => false),
        );
        let atlantic = Array.from({ length: m }, (_, i) =>
            Array.from({ length: n }, (_, j) => false),
        );
        let pacificQueue = [];
        let atlanticQueue = [];
        for (let i = 0; i < m; i++) {
            pacific[i][0] = true;
            atlantic[i][n - 1] = true;
            pacificQueue.push([i, 0]);
            atlanticQueue.push([i, n - 1]);
        }
        for (let j = 0; j < n; j++) {
            pacific[0][j] = true;
            atlantic[m - 1][j] = true;
            pacificQueue.push([0, j]);
            atlanticQueue.push([m - 1, j]);
        }
        function bfs(queue, arr) {
            let head = 0;
            while (head < queue.length) {
                let [r, c] = queue[head++];
                for (let [dr, dc] of DIRS) {
                    let nr = dr + r;
                    let nc = dc + c;
                    if (
                        nc >= 0 &&
                        nc < n &&
                        nr >= 0 &&
                        nr < m &&
                        !arr[nr][nc] &&
                        heights[nr][nc] >= heights[r][c]
                    ) {
                        arr[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        bfs(pacificQueue, pacific);
        bfs(atlanticQueue, atlantic);

        let ans = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (pacific[i][j] === true && atlantic[i][j] === true) ans.push([i, j]);
            }
        }
        return ans;
    }
}
