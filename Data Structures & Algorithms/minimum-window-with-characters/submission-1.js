class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        let mp = new Map();
        for (let i = 0; i < t.length; i++) {
            mp.set(t[i], (mp.get(t[i]) || 0) + 1);
        }
        let i = 0;
        let j = 0;
        let minLen = Infinity;
        let sI = -1;
        let count = 0;
        while (j < s.length) {
            mp.set(s[j], (mp.get(s[j]) || 0) - 1);
            if (mp.get(s[j]) >= 0) ++count;
            while (count === t.length) {
                if (j - i + 1 < minLen) {
                    minLen = j - i + 1;
                    sI = i;
                }
                if (mp.get(s[i]) >= 0) --count;
                mp.set(s[i], mp.get(s[i]) + 1);
                ++i;
            }
            ++j;
        }
        return sI === -1 ? "" : s.substring(sI, sI + minLen);
    }
}
