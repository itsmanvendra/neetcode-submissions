/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let queue = [root];
        let ans = [];
        while(queue.length){
            let newQueue = [];
            let newAns = [];
            for(let i = 0; i<queue.length; i++){
                newAns.push(queue[i].val);
                if(queue[i].left) newQueue.push(queue[i].left);
                if(queue[i].right) newQueue.push(queue[i].right);
            }
            ans.push(newAns)
            queue = [...newQueue];
        }
        return ans;

    }
}
