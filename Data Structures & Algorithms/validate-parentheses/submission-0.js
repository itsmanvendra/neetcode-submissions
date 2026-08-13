class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        let mp = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let i = 0; i < s.length; i++) {
            let ch = s[i];
            if (ch === "(" || ch === "{" || ch === "[") {
                arr.push(ch);
            } else if (ch === ")" || ch === "}" || ch === "]") {
                if (arr.length === 0) return false;
                let top = arr.pop();
                if (top === mp[ch]) {
                    continue;
                } else {
                    return false;
                }
            }
        }
        if (arr.length > 0) return false;
        return true;
    }
}
