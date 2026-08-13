class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        /**
 * @param {number[][]} edges
 * @return {number[]}
 */

    let n = edges.length;
    let parentArr = Array.from({length: n+1}, (_,i) => i);
    let freqArr = new Array(n+1).fill(1);
    function find(x){
        if(x !== parentArr[x]) parentArr[x] = find(parentArr[x]);
        return parentArr[x];
    }
    let ans = [];
    function union(u,v){
        let a = find(u);
        let b = find(v);
        if(a === b){
            ans = [u,v];
        }
        if(freqArr[a] > freqArr[b]){
            parentArr[b] = a;
        }
        else if(freqArr[a] < freqArr[b]){
            parentArr[a] = b;
        }
        else{
            parentArr[b] = a;
            ++freqArr[a];
        }

    }
    for(let i = 0; i<n;i++){
        union(edges[i][0], edges[i][1])
    }
    return ans;
};
    }

