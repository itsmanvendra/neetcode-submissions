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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummyNode = new ListNode(-1);
        dummyNode.next = head;
        let prev = dummyNode;
        let curr = head;
        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }
        while (curr) {
            curr = curr.next;
            prev = prev.next;
        }
        prev.next = prev.next.next;
        return dummyNode.next;
    }
}
