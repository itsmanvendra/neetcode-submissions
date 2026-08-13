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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root;
        let leftTree = this.invertTree(root.left);
        let rightTree = this.invertTree(root.right);
        root.left = rightTree;
        root.right = leftTree;
        return root;
    }
}
