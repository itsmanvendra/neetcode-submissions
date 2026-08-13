class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let maxL = height[0];
        let maxR = height[n - 1];
        let arrL = [];
        let arrR = [];
        for (let i = 0; i < n; i++) {
            maxL = Math.max(maxL, height[i]);
            maxR = Math.max(maxR, height[n - 1 - i]);
            arrL.push(maxL);
            arrR.push(maxR);
        }
        arrR.reverse();
        let maxWater = 0;
        for (let i = 0; i < n; i++) {
            let waterTrapped = Math.min(arrL[i], arrR[i]) - height[i];
            maxWater = maxWater + Math.max(0, waterTrapped);
        }
        return maxWater;
    }
}
