class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        let dp = new Map();
        function dfs(remainingStr){
            if(remainingStr === '') return 1;
            if(dp.has(remainingStr)) return dp.get(remainingStr);
            let count = 0;
            let temp1 = remainingStr.substring(0,1);
            if(temp1 !== '0'){
                count += dfs(remainingStr.substring(1));
            }
            if(remainingStr.length >= 2){
                let temp2 = remainingStr.substring(0,2);
                if(temp2 >= '10' && temp2 <= '26'){
                    count += dfs(remainingStr.substring(2));
                }
            }
            dp.set(remainingStr, count);
            return count;
        }
        return dfs(s);
    }
}
