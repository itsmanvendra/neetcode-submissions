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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ans = null;
        let count = k;
        function traversal(root) {
            if (!root || ans !== null) return;
            traversal(root.left);
            --count;
            if (count === 0) {
                ans = root.val;
                return;
            }

            if (root.right) traversal(root.right);
        }
        traversal(root);
        return ans;
    }
}
