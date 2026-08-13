/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        let newHead = null;
        let count = 0;
        let currHead = head;
        let groupPrev = null;
        while (curr) {
            curr = curr.next;
            count += 1;
            if (count === k) {
                let prev = null;
                let groupTail = currHead;
                while (count) {
                    let next = currHead.next;
                    currHead.next = prev;
                    prev = currHead;
                    currHead = next;
                    --count;
                }
                if (newHead === null) {
                    newHead = prev;
                } else {
                    groupPrev.next = prev;
                }
                groupTail.next = curr;
                groupPrev = groupTail;
            }
        }
        return newHead;
    }
}
