class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let graph = {};
        for(let [a,b] of edges){
            if(!graph[a]){
                graph[a] = [];
            }
            if(!graph[b]){
                graph[b] = [];
            }
            graph[a].push(b);
            graph[b].push(a);
        }
        let ans = 0;
        let visited = new Set();
        function bfs(node){
            let queue = [node];
            let head = 0;
            while(head < queue.length){
                let curr = queue[head++];
                for(let neighbour of graph[curr] || []){
                    if(visited.has(neighbour)) continue;
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
            
        }
        for(let i = 0; i<n; i++){

            if(!visited.has(i)){
                visited.add(i);
                bfs(i);
                ++ans;
            }
        }
        return ans;
    }
}
