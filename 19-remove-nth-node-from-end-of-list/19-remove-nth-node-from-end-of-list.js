/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  
  let dummyNode = new ListNode(1, head)
  
  let front = dummyNode
  let back = dummyNode
  
  for (let i = 0; i < n; i++) {
    front = front.next;
  }
  
  while (front.next !== null) {
    front = front.next;
    back = back.next;
  }
  
  back.next = back.next.next;
  
  return dummyNode.next;
  
  
};