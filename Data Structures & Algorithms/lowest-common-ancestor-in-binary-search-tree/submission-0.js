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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function traversal(curr) {
            if (!curr) return false;
            if (curr.val === p.val || curr.val === q.val) return curr;
            let left = traversal(curr.left);
            let right = traversal(curr.right);
            if(left && right) return curr;
            return left || right
        }

        return traversal(root);
    }
}
