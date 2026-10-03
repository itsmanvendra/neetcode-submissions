class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let queue = [];
        const DIRS = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];
        let count = 0;
        let time = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                } else if (grid[i][j] === 1) {
                    count++;
                }
            }
        }
        while (count > 0 && queue.length > 0) {
            let tempQ = [];
            for (let i = 0; i < queue.length; i++) {
                let [x, y] = queue[i];
                for (let [r, c] of DIRS) {
                    let nc = y + c;
                    let nr = x + r;
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                        tempQ.push([nr, nc]);
                        --count;
                        grid[nr][nc] = 2;
                    }
                }
            }
            queue = [...tempQ];
            ++time;
        }
        return count > 0 ? -1 : time;
    }
}
