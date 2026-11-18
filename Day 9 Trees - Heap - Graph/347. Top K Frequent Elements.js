function topKFrequent(nums, k) {
  let listNum = new Map(),
    result = new Array();
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    if (listNum.has(nums[i])) count = listNum.get(nums[i]);
    count++;
    listNum.set(nums[i], count);
  }
  const sortedListNum = new Map(
    [...listNum.entries()].sort((a, b) => b[1] - a[1]),
  );

  for (const [key, value] of sortedListNum) {
    if (k--) result.push(key);
    else break;
  }
  return result;
}
