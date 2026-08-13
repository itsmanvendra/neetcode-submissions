class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mp = {};
        let maxLen = 0;
        let n = s.length;
        let startIndex = 0;
        for (let i = 0; i < n; i++) {
            if (mp[s[i]] !== undefined && startIndex <= mp[s[i]]) {
                startIndex = mp[s[i]] + 1;
            }
            mp[s[i]] = i;
            let len = i - startIndex + 1;
            maxLen = Math.max(maxLen, len);
        }
        return maxLen;
    }
}
