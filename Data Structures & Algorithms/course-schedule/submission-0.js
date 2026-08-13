class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let graph = {};
    for(let [a, b] of prerequisites){
        if(!graph[a]){
            graph[a] = [];
        }
        graph[a].push(b);
    }
    let visited = new Map();

    function courseCompleted(node){
        if(visited.has(node) && visited.get(node) === 2) return true;
        if(visited.has(node) && visited.get(node) === 1) return false;
        visited.set(node, 1);
        for(let prerequiste of graph[node] || []){
            if(visited.has(prerequiste) && visited.get(prerequiste) === 2) continue;
            if(visited.has(prerequiste) && visited.get(prerequiste) === 1) return false;
            if(!courseCompleted(prerequiste)) return false;
        }
        visited.set(node, 2);
        return true;

    }
    

    for(let key in graph){

        if(!courseCompleted(key)) return false;
    }
    return true;
    }
}
