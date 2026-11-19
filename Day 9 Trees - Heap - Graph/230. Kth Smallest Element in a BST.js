function kthSmallest(root, k) {
  function inorder(root) {
    if (!root) return null; //basecase

    let left = inorder(root.left);
    if (left) return left;

    k--;
    if (k === 0) return root;

    return inorder(root.right);
  }
  let result = inorder(root);
  return result.val;
}
