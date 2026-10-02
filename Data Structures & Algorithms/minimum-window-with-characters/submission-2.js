class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
    let mp = new Map();
    for(let i = 0; i<t.length; i++){
        mp.set(t[i], (mp.get(t[i]) || 0) + 1)
    }
    let j = 0;
    let minWindowLen = Infinity;
    let sI = -1;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
            mp.set(s[i], (mp.get(s[i]) || 0) - 1);
            if(mp.get(s[i]) >= 0) ++count;
            while(count === t.length){
                let currWindowLen = i+1-j;
                if(minWindowLen > currWindowLen){
                    minWindowLen = currWindowLen;
                    sI = j;
                }
                if(mp.get(s[j]) >= 0) --count;
                mp.set(s[j], mp.get(s[j]) + 1);
                j++;
            }
    }


    return sI === -1 ? "" : s.substring(sI, sI + minWindowLen);
    }
}
