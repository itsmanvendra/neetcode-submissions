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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let mp = {};
        for (let i = 0; i < inorder.length; i++) {
            mp[inorder[i]] = i;
        }
        function myBuildTree(preStart, inStart, inEnd) {
            if (inStart > inEnd) return null;
            const rootValue = preorder[preStart];
            const root = new TreeNode(rootValue);
            let index = mp[rootValue];
            const leftSize = index - inStart;
            root.left = myBuildTree(preStart + 1, inStart, index - 1);
            root.right = myBuildTree(preStart + leftSize + 1, index + 1, inEnd);
            return root;
        }

        return myBuildTree(0, 0, inorder.length - 1);
    }
}
