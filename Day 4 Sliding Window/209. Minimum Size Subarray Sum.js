 //* minnimum size subarray sum
var minSubArrayLen = function (target, nums) {
  let result = nums.length,isValid=false;
  let curSum = nums[0];
  for (let start = 0, end = 0;start<=end && start < nums.length && end< nums.length; ) {
    if(curSum<target){
      end++;
      curSum+=nums[end];
    }
    else{
      result=Math.min(result,end-start+1);
      curSum-=nums[start];
      start++;
      isValid=true;
    }
  }
  return isValid ? result : 0;
};
let target = 7,nums = [2, 3, 1, 2, 4, 3]; //2
// let target = 4, nums = [1,4,4];//1
// debugger;
// let target = 11, nums = [1,1,1,1,1,1,1,1];//0
// let target = 11, nums = [1,2,3,4,5];//3
console.log(minSubArrayLen(target, nums));