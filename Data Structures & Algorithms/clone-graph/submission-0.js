/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return node
        let cloneNode = new Node(node.val);
        let visited = new Map();
        let queue = [node];
        visited.set(node, cloneNode)
        while(queue.length > 0){
            let curr = queue.shift();
            for(let neighbour of curr.neighbors || []){
                if(!visited.has(neighbour)){
                    let newNode = new Node(neighbour.val);
                    visited.set(neighbour, newNode);
                    queue.push(neighbour);
                }
                let cloneCurrNode = visited.get(curr);
                cloneCurrNode.neighbors.push(visited.get(neighbour))
            }

        }
        return cloneNode

    }
}
