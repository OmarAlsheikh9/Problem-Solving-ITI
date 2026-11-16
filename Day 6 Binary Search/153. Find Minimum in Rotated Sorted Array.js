function findMin(nums) {
  let left = 0,right = nums.length - 1,mid;
  while (left < right) {
    mid = Math.trunc((left + right) / 2);
    if (nums[mid] > nums[right])
      // right is smaller then go from left to right
      left = mid + 1;
    else right = mid; // go from right to left
  }
  return nums[right]; //left = right
}
