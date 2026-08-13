class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }
        let n1 = nums1.length;
        let n2 = nums2.length;
        let low = 0;
        let high = n1;
        let equalParts = Math.floor((n1 + n2 + 1) / 2);
        while (low <= high) {
            const mid1 = Math.floor((low + high) / 2);
            const mid2 = equalParts - mid1;
            let l1 = -Infinity;
            let l2 = -Infinity;
            let r1 = Infinity;
            let r2 = Infinity;
            if (n1 >= mid1 && mid1 > 0) {
                l1 = nums1[mid1 - 1];
            }
            if (n1 > mid1 && mid1 >= 0) {
                r1 = nums1[mid1];
            }
            if (n2 >= mid2 && mid2 > 0) {
                l2 = nums2[mid2 - 1];
            }
            if (n2 > mid2 && mid2 >= 0) {
                r2 = nums2[mid2];
            }
            if (l1 <= r2 && l2 <= r1) {
                if ((n1 + n2) % 2) return Math.max(l1, l2);
                else {
                    return (Math.max(l1, l2) + Math.min(r2, r1)) / 2;
                }
            }
            if(l1 > r2){
                high = mid1 -1;
            }
            else{
                low = mid1 + 1;
            }
        }
    }
}
