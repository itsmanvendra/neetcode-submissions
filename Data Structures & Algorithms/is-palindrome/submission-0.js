class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s
            .toLowerCase()
            .split("")
            .filter((char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9"))
            .join("");
        let start = 0;
        let end = newS.length - 1;
        while (start <= end) {
            if (newS[start] === newS[end]) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
}
