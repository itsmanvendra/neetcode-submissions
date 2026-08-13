class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let graph = {};
        for(let [src,dest,cost] of flights){
            if(!graph[src]){
                graph[src] = [];
            }
            graph[src].push([dest,cost]);
        }
        let minCost = new Array(n).fill(Infinity);
        minCost[src] = 0;
        let queue = [[src, 0, 0]];
        let head = 0;
        while(head < queue.length){
            let [src, cost, step] = queue[head++];
            if(step > k) continue;
            for(let [neighbour, neighbourCost] of graph[src]||[]){
                if(minCost[neighbour] > cost + neighbourCost){
                    minCost[neighbour] = cost + neighbourCost;
                    queue.push([neighbour, minCost[neighbour], step + 1]);
                }
            }
        }

        if(minCost[dst] === Infinity) return -1;
        return minCost[dst]
    }
}
