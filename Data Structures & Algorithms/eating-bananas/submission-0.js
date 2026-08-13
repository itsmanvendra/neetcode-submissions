class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minBananas = Infinity;
        let minP = 1;
        let maxP = -Infinity;
        for (let i = 0; i < piles.length; i++) {
            if (maxP < piles[i]) {
                maxP = piles[i];
            }
        }
        while (minP <= maxP) {
            let mid = Math.floor((minP + maxP) / 2);
            let hoursNeeded = 0;
            for (let i = 0; i < piles.length; i++) {
                hoursNeeded += Math.ceil(piles[i] / mid);
            }
            if (hoursNeeded > h) {
                minP = mid + 1;
            } else {
                minBananas = mid;
                maxP = mid - 1;
            }
        }
        return minBananas;
    }
}
