class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let graph = {};
        for (let [src, dst] of tickets) {
            if (!graph[src]) graph[src] = [];
            graph[src].push(dst);
        }
        for (let key in graph) {
            graph[key].sort();
        }
        console.log(graph);
        let ans = [];
        let visitedMp = new Map();
        function dfs(src) {
            if (!visitedMp.has(src)) {
                visitedMp.set(src, -1);
            }
            for (let i = 0; i < (graph[src] || []).length; i++) {
                if (visitedMp.get(src) < i) {
                    visitedMp.set(src, i);
                    dfs(graph[src]?.[i]);
                }
            }
            ans.push(src);
        }
        dfs("JFK");
        return ans.reverse();
    }
}
