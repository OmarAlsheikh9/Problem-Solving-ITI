//^ time o(n) space o(n)
var removeDuplicates = function (nums){ 
  let newSet = new Set(nums);// 1. create set to make list of unique values from nums
  let i=0;
  for (const element of newSet){// 2. make copy from unique values from set to nums array 
    nums[i++] = element;
  }
  return newSet.size; //  3. return numbers of unique values
}
let nums = [1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);