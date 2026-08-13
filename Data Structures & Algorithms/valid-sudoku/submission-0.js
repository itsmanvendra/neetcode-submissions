class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let col = {};
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") continue;
                let colKey = board[i][j];

                if (col[colKey]) {
                    return false;
                } else {
                    col[colKey] = 1;
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            let row = {};
            for (let j = 0; j < 9; j++) {
                if (board[j][i] === ".") continue;
                let rowKey = board[j][i];
                if (row[rowKey]) {
                    return false;
                } else {
                    row[rowKey] = 1;
                }
            }
        }
        let gridRowCount = 0;

        while (gridRowCount < 3) {
            for (let gridColCount = 0; gridColCount < 3; gridColCount++) {
                let mp = {};
                for (let i = gridRowCount * 3; i < (gridRowCount + 1) * 3; i++) {
                    for (let j = gridColCount * 3; j < (gridColCount + 1) * 3; j++) {
                        if (board[i][j] === ".") continue;
                        if (mp[board[i][j]]) return false;
                        else {
                            mp[board[i][j]] = 1;
                        }
                    }
                }
            }
            ++gridRowCount;
        }

        return true;
    }
}
