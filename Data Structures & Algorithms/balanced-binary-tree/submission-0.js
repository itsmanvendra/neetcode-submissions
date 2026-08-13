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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;
        let ans = true;
        function traversal(curr) {
            if (!curr) return 0;
            const left = traversal(curr.left);
            const right = traversal(curr.right);
            if (Math.abs(left - right) > 1 && ans) {
                ans = false;
                return;
            } else {
                return Math.max(left, right) + 1;
            }
        }
        traversal(root);
        return ans;
    }
}
