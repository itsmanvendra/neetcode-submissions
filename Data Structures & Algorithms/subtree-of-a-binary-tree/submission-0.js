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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function traversal(root) {
            if (!root && !subRoot) return true;
            if ((!root && subRoot) || (!subRoot && root)) return false;
            const atRootLevel = isSameTree(root, subRoot);
            let leftNode = traversal(root.left);
            let rightNode = traversal(root.right);
            if (atRootLevel || leftNode || rightNode) return true;
            return false;
        }
        function isSameTree(p, q) {
            if (!p && !q) return true;
            if ((!p && q) || (!q && p)) return false;
            if (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
                return true;
            }
            return false;
        }
        return traversal(root);
    }
}
