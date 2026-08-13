class MinStack {
    constructor() {
        this.arr = [];
        this.min = [];
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(value) {
        this.arr.push(value);
        if (this.length === 0) {
            this.min.push(value);
        } else {
            this.min.push(Math.min(this.min[this.length - 1], value));
        }
        this.length++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
        this.min.pop();
        this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.length - 1];
    }
}
