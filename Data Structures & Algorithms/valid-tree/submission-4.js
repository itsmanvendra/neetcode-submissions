class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(n === 1 && edges.length === 0) return true;
        if (edges.length > n - 1) return false;
        let graph = {};
        for (let [a, b] of edges) {
            if(a === b) return false;
            if (!graph[a]) {
                graph[a] = [];
            }
            if (!graph[b]) {
                graph[b] = [];
            }
            graph[a].push(b);
            graph[b].push(a);
        }
        let visited = new Set();
        for (let i = 0; i < n; i++) {
            if (!graph[i]) return false;
        }
        function bfs() {
            let queue = [0];
            let head = 0;
            while (head < queue.length) {
                let curr = queue[head++];
                if (!visited.has(curr)) visited.add(curr);
                for (let neighbour of graph[curr] || []) {
                    if (visited.has(neighbour)) continue;
                    queue.push(neighbour);
                }
            }
        }
        bfs();
        if (visited.size === n) return true;
        return false;
    }
}
