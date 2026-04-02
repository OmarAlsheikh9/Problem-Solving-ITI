"use strict";

var maxSubArray = function (nums) {
  // brute force version timelimit in test 200/210 time o(n^3)
  let maxSum = -Math.pow(10, 4);
  for (let size = 1; size <= nums.length; size++) {
    for (let start = 0; start < nums.length; start++) {
      let curSum = 0;
      nums.slice(start, start + size).forEach((element) => (curSum += element));
      if (curSum > maxSum) maxSum = curSum;
    }
  }
  return maxSum;
};
// solve with divide and conquer
// there was helping from this video https://youtu.be/yBCzO0FpsVc?si=zVK8PHO93lmvLskk to calculate middle subarray not just left and right
var maxSubArray_v2 = function (nums, start = 0, end = nums.length - 1) {
  if (start === end)
    // base case
    return nums[start];

  let mid = Math.floor((start + end) / 2); // using floor to make number without decimal
  let firstNums = maxSubArray_v2(nums, start, mid); // go calculate max sub array from left array 
  let lastNums = maxSubArray_v2(nums, mid + 1, end); // go calculate max sub array from right array
  let middle = sumMaxSubMiddle(nums, mid, start, end); // calculate sum of max of left and right
  return Math.max(firstNums, lastNums, middle);
};
function sumMaxSubMiddle(nums, mid, start, end) {
  let sum = 0,maxFirst= - (10 **4 );
  for (let i = mid; i != start-1; i--) {
    sum+=nums[i];
    maxFirst= Math.max(sum,maxFirst);
  }
  sum = 0;
  let maxLast = -(10 **4 );
  for (let i = mid+1; i <= end; i++){
    sum+=nums[i];
    maxLast= Math.max(sum,maxLast);
  }
  return maxFirst+ maxLast;
}
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
debugger;
console.log(maxSubArray_v2(nums)); // 6
// console.log(sumMaxSubMiddle(nums,4,0,nums.length));
