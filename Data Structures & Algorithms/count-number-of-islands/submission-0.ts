class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let m = grid.length;
    let n = grid[0].length;
    let ans = 0;
    let queue = [];
    const DIRS = [[-1,0], [1,0], [0,-1], [0,1]];
    function bfs(){
        let head = 0;
        while(queue.length > head){
            let top = queue[head++];
            
            for(let [x,y] of DIRS){
                let nr = x + top[0];
                let nc = y + top[1];
                if(nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === '1'){
                    queue.push([nr, nc]);
                    grid[nr][nc] = '0';
                }
            }

        }
        queue = [];
    }

    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
    
             if(grid[i][j] === '1'){
                grid[i][j] = '0';
                ans++;
                queue.push([i,j]);
                bfs();
            }
        }
    }
   
    return ans;
    }
}
