class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b != 0){
            let temp = a & b;
            a = a ^ b;
            b = temp << 1;
        }
        return a;
    }
}
