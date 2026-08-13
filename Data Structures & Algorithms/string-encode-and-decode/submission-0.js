class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = [];
        for (let i = 0; i < strs.length; i++) {
            let encodedString = "";
            for (let j = 0; j < strs[i].length; j++) {
                let charCode = strs[i].charCodeAt(j);
                let newchar = String.fromCharCode((charCode % 256) + 5);
                console.log(newchar);
                encodedString += newchar;
            }
            ans.push(encodedString);
        }
        return JSON.stringify(ans);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        let currStr = JSON.parse(str)
        for (let j = 0; j < currStr.length; j++) {
            let decodedString = "";
            for (let i = 0; i < currStr[j].length; i++) {
                let charCode = currStr[j].charCodeAt(i);
                charCode = (charCode % 256) - 5;
                if (charCode < 0) {
                    charCode += 256;
                }
                let newChar = String.fromCharCode(charCode);
                console.log(newChar);
                decodedString += newChar;
            }
            ans.push(decodedString)
        }
        return ans;
    }
}
