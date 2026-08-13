class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let maxArea = 0;
        while (i < j) {
            let area = Math.min(heights[i], heights[j]) * (j - i);
            maxArea = Math.max(area, maxArea);
            if (heights[i] > heights[j]) {
                --j;
            } else {
                ++i;
            }
        }
        return maxArea;
    }
}
