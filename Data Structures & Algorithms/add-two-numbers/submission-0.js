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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head1 = l1;
        let head2 = l2;
        let dummyNode = new ListNode(-1);
        let curr = dummyNode;
        let carry = 0;
        while (head1 || head2 || carry) {
            let sum = carry;
            if (head1) {
                sum += head1.val;
                head1 = head1.next;
            }
            if (head2) {
                sum += head2.val;
                head2 = head2.next;
            }
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            let newNode = new ListNode(sum);
            curr.next = newNode;
            curr = curr.next;
        }
        return dummyNode.next;
    }
}
