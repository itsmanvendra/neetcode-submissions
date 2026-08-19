class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.pq = new MinPriorityQueue();
        this.len = k;
        for (let i = 0; i < nums.length; i++) {
            if (this.pq.size() < this.len) {
                this.pq.enqueue(nums[i]);
            } else if (this.pq.front() < nums[i]) {
                this.pq.dequeue();
                this.pq.enqueue(nums[i]);
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.pq.size() < this.len) {
            this.pq.enqueue(val);
        } else if (this.pq.front() < val) {
            this.pq.dequeue();
            this.pq.enqueue(val);
        }
        return this.pq.front();
    }
}
