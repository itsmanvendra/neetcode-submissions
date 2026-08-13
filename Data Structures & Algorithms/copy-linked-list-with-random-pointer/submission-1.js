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
        if(!head) return head;
        let curr = head;
        while(curr){
            let newNode = new Node(curr.val);
            newNode.next = curr.next;
            curr.next = newNode;
            curr = curr.next.next;
        }
        curr = head;
        while(curr){
            curr.next.random = curr.random?.next;
            curr = curr.next.next;
        }
        curr = head?.next;
        while(curr){
            if(curr.next){
                curr.next = curr.next?.next;
            }
            curr = curr.next;
            
        }
        return head?.next;
    }
}
