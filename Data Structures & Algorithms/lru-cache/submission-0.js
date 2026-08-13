class Node {
    constructor(key,val) {
        this.prev = null;
        this.next = null;
        this.val = val;
        this.key = key;
    }

    deleteNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insertNode(start, node) {
        start.next.prev = node;
        node.next = start.next;
        node.prev = start;
        start.next = node;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */

    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.start = new Node(-1, -1);
        this.end = new Node(-2, -2);
        this.start.next = this.end;
        this.end.prev = this.start;
        this.head = this.start;
        this.tail = this.end;
        this.mp = new Map();
        this.maxSize = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.mp.has(key)) return -1;
        let node = this.mp.get(key);
        node.deleteNode(node);
        node.insertNode(this.tail.prev, node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let newNode = new Node(key, value);
        if (this.mp.has(key)) {
            let node = this.mp.get(key);
            node.deleteNode(node);
            node.insertNode(this.tail.prev, newNode);
            this.mp.set(key, newNode);
        } else {
            if (this.mp.size === this.maxSize) {
                const node = this.head.next;
                node.deleteNode(node);
                this.mp.delete(node.key);
            }
            newNode.insertNode(this.tail.prev, newNode);
            this.mp.set(key, newNode);
        }
    }
}
