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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        let newHead = null;
        let prev = null;
        while(fast !== null){
            fast = fast.next;
            if(fast) fast = fast.next;
            prev = slow;
            slow = slow.next;

        }
        prev.next = null;
        
        while(slow){
            prev = slow.next;
            slow.next = newHead;
            newHead = slow;
            slow = prev;
        }
        slow = head;
        while(slow && newHead){
            let temp = slow.next;
            let temp2 = newHead.next;
            slow.next = newHead;
            newHead.next = temp;
            slow = temp;
            newHead = temp2
        }
        return head

    }
}
