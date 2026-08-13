class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            let obj = this.keyStore.get(key);
            obj.push([timestamp, value]);
        } else {
            this.keyStore.set(key, [[timestamp, value]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }
        let obj = this.keyStore.get(key);
        let s = 0;
        let e = obj.length - 1;
        while (s <= e) {
            let mid = Math.floor((s + e) / 2);
            if (obj[mid][0] === timestamp) {
                return obj[mid][1];
            } else if (obj[mid][0] > timestamp) {
                e = mid - 1;
            } else {
                s = mid + 1;
            }
        }
        if (e === -1) return "";
        return obj[e][1];
    }
}
