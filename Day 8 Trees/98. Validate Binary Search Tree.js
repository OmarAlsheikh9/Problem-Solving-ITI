function isValidBST(root) {
  let arr = [];
  fillArray(root, arr);
  for (let i = 1; i < arr.length; i++) if (arr[i - 1] >= arr[i]) return false;
  return true;
}
function fillArray(root, arr) {
  if (!root) return;
  fillArray(root.left, arr);
  arr.push(root.val);
  fillArray(root.right, arr);
}
