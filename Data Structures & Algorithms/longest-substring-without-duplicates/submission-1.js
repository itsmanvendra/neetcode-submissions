class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        let n = s.length;
        let mp = new Map();
        let i = 0;
        let j = 0;
        let len = 1;
        while (j < n) {
            if (mp.has(s[j]) && mp.get(s[j]) >= i) {
                i = mp.get(s[j]) + 1;
            }
            mp.set(s[j], j);
            j++;
            len = Math.max(j - i, len);
        }
        return len;
    }
}
