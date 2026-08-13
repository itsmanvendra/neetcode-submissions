class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

    let m = board.length;
    let n = board[0].length;
    const DIRS = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    for (let i = 0; i < m; i++) {
        if(board[i][0] === 'O')bfs(i,0);
        if(board[i][n-1] === 'O')bfs(i,n-1);
    }
    for (let i = 0; i < n; i++) {
        if(board[0][i] === 'O')bfs(0,i);
        if(board[m-1][i] === 'O')bfs(m-1,i);
    }
    function bfs(i, j) {
        let queue = [[i, j]];
        board[i][j] = 'V';
        let head = 0
        while (head < queue.length) {
            let [r, c] = queue[head++];
            for (let [dr, dc] of DIRS) {
                let nr = dr + r;
                let nc = dc + c;
                if (nc >= 0 && nr >= 0 && nr <= m - 1 && nc <= n - 1 && board[nr][nc] === 'O') {
                    queue.push([nr, nc]);
                    board[nr][nc] = 'V'
                }
            }
        }
    }
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(board[i][j] === 'V') board[i][j] = 'O';
            else{
                board[i][j] = 'X';
            }
        }
    }


    }
}
