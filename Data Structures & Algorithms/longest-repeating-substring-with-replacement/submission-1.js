class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let n = s.length;
        let j = 0;
        let arr = Array(26).fill(0);
        let len = 1;

        function checkValid() {
            let isPossible = k;
            let maxxLen = 0;
            let index = -1;

            for (let l = 0; l < 26; l++) {
                if (arr[l] > maxxLen) {
                    index = l;
                    maxxLen = arr[l];
                }
            }

            for (let l = 0; l < 26; l++) {
                if (arr[l] > 0 && l !== index) {
                    isPossible -= arr[l];
                }
            }
            return isPossible >= 0 ? true : false;
        }

        for (let i = 0; i < n; i++) {
            let char = s.charCodeAt(i) - 65;
            arr[char]++;
            while (!checkValid()) {
                let newChar = s.charCodeAt(j) - 65;
                --arr[newChar];
                j++;
            }

            len = Math.max(i + 1 - j, len);
        }

        return len;
    }
}
