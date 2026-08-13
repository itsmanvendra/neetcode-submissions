class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let queue = [];
        const DIRS = [[-1,0], [1,0], [0,-1],[0,1]];
        for(let i = 0; i<m; i++){
            for(let j = 0; j<n; j++){
                if(grid[i][j] === 0){
                    queue.push([i,j]);
                }
            }
        }
        let head = 0;
        while(head < queue.length){
            let levelSize = queue.length - head;
            for(let i = 0; i<levelSize; i++){
                let [r,c] = queue[head++];
                for(let [dr,dc] of DIRS){
                    let nr = dr + r;
                    let nc = dc + c;
                    if(nr >= 0 && nr <m && nc >= 0 && nc < n && grid[nr][nc] !== -1){
                        if(grid[nr][nc] > grid[r][c] + 1){
                            grid[nr][nc] = grid[r][c] + 1;
                            queue.push([nr,nc]);
                        }
                    }
                }
            }
        }
    }
}
