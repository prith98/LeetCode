/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  
  let arr = [];
  
  function traverse(node) {    
    if (!node) {
      return
    }    
    arr.push(node);
    traverse(node.next)  
  }
  traverse(head)
  return arr[Math.ceil((arr.length - 1) / 2)];
  
};