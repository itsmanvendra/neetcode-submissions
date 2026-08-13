class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let ans = 0;
        let stack = [];
        const mp = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };
        for (let i = 0; i < tokens.length; i++) {
            if (Number.isFinite(Number(tokens[i]))) {
                stack.push(Number(tokens[i]));
            } else {
                let sym = tokens[i];
                let b = stack.pop();
                let a = stack.pop();
                let val = mp[sym](a, b);
                stack.push(val);
            }
        }
        return stack.pop();
    }
}
