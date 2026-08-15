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
    goodNodes(root) {
        if (!root) return 0;
        let ans = 0;
        function traversal(curr, currMax) {
            if (curr.val >= currMax) {
                ++ans;
                currMax = curr.val;
            }
            if (curr.left) traversal(curr.left, currMax);
            if (curr.right) traversal(curr.right, currMax);
        }
        traversal(root, -Infinity);
        return ans;
    }
}
