class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = new Map();

        function isPossible(remStr) {
            if (remStr === "") return true;
            if (dp.has(remStr)) return dp.get(remStr);
            for (let i = 0; i < remStr.length; i++) {
                let temp = remStr.substring(0, i + 1);
                if (wordDict.includes(temp)) {
                    if (isPossible(remStr.substring(i + 1))) {
                        dp.set(remStr, true);
                        return true;
                    }
                }
            }
            dp.set(remStr, false);
            return false;
        }
        return isPossible(s);
    }
}
