class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let i = 0;
        let j = n - 1;
        while (j >= 0 && i >= 0 && i < m && j < n) {
            if (target === matrix[i][j]) {
                return true;
            } else if (target > matrix[i][j]) {
                ++i;
            } else {
                --j;
            }
        }
        return false;
    }
}
