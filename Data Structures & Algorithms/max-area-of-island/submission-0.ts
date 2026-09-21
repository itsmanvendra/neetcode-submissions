class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let n = grid.length;
        let m = grid[0].length;
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let ans:number = 0;
        let queue:number[][] = [];

        function bfs() {
            let head = 0;
            let area = 0;
            while (queue.length > head) {
                area++;
                let top = queue[head++];
                for (let [x, y] of DIRS) {
                    let nr = x + top[0];
                    let nc = y + top[1];
                    while (nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] === 1) {
                        queue.push([nr, nc]);
                        grid[nr][nc] = 0;
                    }
                }
            }
            ans = Math.max(area, ans);
            queue = [];
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) {
                    grid[i][j] = 0;
                    queue.push([i, j]);
                    bfs();
                }
            }
        }

        return ans;
    }
}
