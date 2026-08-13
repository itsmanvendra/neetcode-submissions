class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = ""
        for(let i = 0; i<strs.length; i++){
            let len = strs[i].length;
            ans += `${len}#${strs[i]}`;
        }
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let ans = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            ans.push(str.substring(i, i + length));
            i += length;
        }
        return ans;
    }
}
