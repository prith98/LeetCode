/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (root === null) {
        return 0;
    }
    
    let maxCount = 0;
    let count = 0;
    
    const traverse = (node) => {
        
        count++;
        
        if (count > maxCount) {
            maxCount = count;
        }
        
        node.left && traverse(node.left)
        node.right && traverse(node.right)
        
        count --;
        
    }
    
    traverse(root)
    return maxCount
    
    
    
};