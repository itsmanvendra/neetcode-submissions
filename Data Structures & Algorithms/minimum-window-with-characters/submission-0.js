class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        let minString = "";
        let arrS = new Map();
        let arrT = new Map();

        for (let i = 0; i < t.length; i++) {
            if (arrS.has(s[i])) {
                arrS.set(s[i], arrS.get(s[i]) + 1);
            } else {
                arrS.set(s[i], +1);
            }
            if (arrT.has(t[i])) {
                arrT.set(t[i], arrT.get(t[i]) + 1);
            } else {
                arrT.set(t[i], +1);
            }
        }
        let j = t.length;
        let i = 0;
        function isWindowValid(arrS, arrT) {
            for (const key of arrT.keys()) {
                if (!arrS.has(key) || arrT.get(key) > arrS.get(key)) {
                    return false;
                }
            }
            return true;
        }
        while (j < s.length) {
            if (isWindowValid(arrS, arrT)) {
                if (minString === "") {
                    minString = s.substring(i, j);
                } else {
                    if (minString.length > j - i) {
                        minString = s.substring(i, j);
                    }
                }
                if (arrS.get(s[i]) > 1) {
                    arrS.set(s[i], arrS.get(s[i]) - 1);
                } else {
                    arrS.delete(s[i]);
                }
                ++i;
            } else {
                if (arrS.has(s[j])) {
                    arrS.set(s[j], arrS.get(s[j]) + 1);
                } else {
                    arrS.set(s[j], 1);
                }
                ++j;
            }
        }
        while (isWindowValid(arrS, arrT) && i < j) {
            if (minString === "") {
                minString = s.substring(i, j);
            } else {
                if (minString.length > j - i) {
                    minString = s.substring(i, j);
                }
            }
            if (arrS.get(s[i]) > 1) {
                arrS.set(s[i], arrS.get(s[i]) - 1);
            } else {
                arrS.delete(s[i]);
            }
            ++i;
        }
        return minString;
    }
}
