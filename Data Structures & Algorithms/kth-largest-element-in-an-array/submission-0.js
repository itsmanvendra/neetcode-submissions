class MyMinHeap {
    constructor() {
        this.queue = [];
        this.size = 0;
    }
    add(val) {
        this.queue.push(val);
        this.size++;
        this.heapifyUp(this.size - 1);
    }
    heapifyUp(index) {
        if (index === 0) return;
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.queue[parentIndex] > this.queue[index]) {
            [this.queue[parentIndex], this.queue[index]] = [this.queue[index], this.queue[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }
    top() {
        return this.queue[0];
    }
    length() {
        return this.size;
    }
    remove() {
        if (this.size === 0) return;
        [this.queue[0], this.queue[this.size - 1]] = [this.queue[this.size - 1], this.queue[0]];
        this.queue.pop();
        this.size--;
        if (this.size > 0) {
            this.heapifyDown(0);
        }

    }
    heapifyDown(index) {

        let leftNode = (2 * index) + 1;
        let rightNode = (2 * index) + 2;
        let smallestIndex = index;
        if (leftNode < this.size && this.queue[smallestIndex] > this.queue[leftNode]) {
            smallestIndex = leftNode;
        }
        if (rightNode < this.size && this.queue[smallestIndex] > this.queue[rightNode]) {
            smallestIndex = rightNode;
        }
        if (smallestIndex !== index) {
            [this.queue[index], this.queue[smallestIndex]] = [this.queue[smallestIndex], this.queue[index]];
            this.heapifyDown(smallestIndex);
        }
    }

}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    
    findKthLargest(nums, k) {
        let mH = new MyMinHeap();
    for (let i = 0; i < nums.length; i++) {
        mH.add(nums[i]);
        if(mH.length() > k){
            mH.remove();
        }
    }
    return mH.top();
    }
}
