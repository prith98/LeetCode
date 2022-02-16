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
var swapPairs = function(head) {
    
    let start = new ListNode();  // Taking a pointer for keeping head of linked list safe with us
    
    start = head;  // storing head into result as we'll be updating head further.
    
    while(head != undefined && head.next != undefined){  //loop for itterating through linked list
      
        let temp = head.val;                              // swapping
        head.val = head.next.val;                     // swapping
        head = head.next;                               // swapping
        head.val = temp;                                // swapping
        head = head.next;                            // increasing the pointer to next element
    
    }
    return start;  
    
};