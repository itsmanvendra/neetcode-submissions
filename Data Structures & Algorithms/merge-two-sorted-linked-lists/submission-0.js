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
    mergeTwoLists = function (list1, list2) {
        if (list1 === null && list2 === null) return list1;
        let dummy = new ListNode(-1);
        let head1 = list1;
        let head2 = list2;

        let prev = dummy;

        while (head1 && head2) {
            if (head1.val <= head2.val) {
                prev.next = head1;
                head1 = head1.next;
            } else {
                prev.next = head2;
                head2 = head2.next;
            }
            prev = prev.next;
        }

        if (head1 !== null) {
            prev.next = head1;
        }
        if (head2 !== null) {
            prev.next = head2;
        }

        return dummy.next;
    };
}
