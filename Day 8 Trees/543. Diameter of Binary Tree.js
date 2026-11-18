function diameterOfBinaryTree(root) {
  let best = 0;
  function height(cur) {
    if (!cur) return 0;

    const leftHeight = height(cur.left);
    const rightHeight = height(cur.right);
    const diameter = leftHeight + rightHeight;

    best = Math.max(diameter, best);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return best;
}
