// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return head;

        let curr = head;
        while (curr) {
            let newHead = new Node(curr.val);
            newHead.next = curr.next;
            curr.next = newHead;
            curr = newHead.next;
        }
        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random?.next;
            }
            curr = curr.next.next;
        }
        curr = head;
        let copyHead = head.next;

        while (curr) {
            let copy = curr.next;
            curr.next = copy.next;
            if (copy.next) {
                copy.next = copy.next.next;
            }
            curr = curr.next;
        }

        return copyHead;
    }
}
