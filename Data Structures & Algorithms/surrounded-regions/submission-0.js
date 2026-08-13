class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let m = board.length;
    let n = board[0].length;
    let visited = new Set();
    const DIRS = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if(!visited.has(`${i}-${j}`) && board[i][j] === 'O'){
                visited.add(`${i}-${j}`);
                bfs(i, j)
            }
            
           
        }
    }
    function bfs(i, j) {
        let queue = [[i, j]];
        let region = [[i, j]];
        let isRegionEnclosed = true;
        while (queue.length > 0) {
            let [r, c] = queue.shift();
            for (let [dr, dc] of DIRS) {
                let nr = dr + r;
                let nc = dc + c;
                if (nc >= 0 && nr >= 0 && nr <= m - 1 && nc <= n - 1 && board[nr][nc] === 'O' && !visited.has(`${nr}-${nc}`)) {
                    queue.push([nr, nc]);
                    region.push([nr, nc]);
                    visited.add(`${nr}-${nc}`)
                    if(nc === 0 || nc === n-1 || nr === 0 || nr === m-1){
                        isRegionEnclosed = false;
                    }
                }
            }
        }
        if(isRegionEnclosed){
            for(let [r,c] of region){
                board[r][c] = 'X';
            }
        }
    }
    }
}
