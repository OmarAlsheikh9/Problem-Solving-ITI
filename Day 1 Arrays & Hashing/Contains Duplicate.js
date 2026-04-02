var containsDuplicate = function(nums) {
  // 1. sort numbers then iterate through nums and in every number if current number equal to next one so we have duplicate
  sortNumbers(nums);
  for(let i=0;i<nums.length-1;i++)
    if(nums[i]===nums[i+1])
        return true;
  return false;
};
function sortNumbers(nums){
  nums.sort((a,b)=>a-b);
}