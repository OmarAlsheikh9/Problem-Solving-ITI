/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let queue = new Array();
  queue.push(root);
  while (queue.length !== 0) {
    let cur = [],
      size = queue.length;
    while (size--) {
      let node = queue.shift();
      cur.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(cur);
  }
  return result;
}
