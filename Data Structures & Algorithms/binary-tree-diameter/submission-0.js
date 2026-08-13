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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxLength = 0;

        function traversal(root) {
            if (!root) return 0;
            let leftMax = traversal(root.left);
            let rightMax = traversal(root.right);
            maxLength = Math.max(1 + rightMax + leftMax, maxLength);
            return 1 + Math.max(rightMax, leftMax);
        }

        traversal(root);
        return maxLength - 1;
    }
}
