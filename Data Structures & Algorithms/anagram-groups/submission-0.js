class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = [];
        let mp = new Map();
        for(let i = 0 ; i<strs.length; i++){
            let arr = new Array(26).fill(0);
            for(let j = 0; j<strs[i].length; j++){
                ++arr[strs[i].charCodeAt(j) - 97];
            }
            let newStr = "";
            for(let i = 0; i< 26; i++){
                newStr += `${String.fromCharCode(i+97)}${arr[i]}`;
            }
            if(mp.has(newStr)){
                mp.set(newStr, [...mp.get(newStr), strs[i]]);
            }
            else{
                mp.set(newStr, [strs[i]]);
            }
        }
        for(let val of mp.values()){
            ans.push(val);
        }
        return ans;
    }
}
