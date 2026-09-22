class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        let mp = {
            "}": "{",
            "]": "[",
            ")": "(",
        };
        for (let i = 0; i < s.length; i++) {
            if (arr.length > 0 && arr[arr.length - 1] === mp[s[i]]) {
                arr.pop();
            } else {
                arr.push(s[i]);
            }
        }
        return arr.length > 0 ? false: true
    }
}
