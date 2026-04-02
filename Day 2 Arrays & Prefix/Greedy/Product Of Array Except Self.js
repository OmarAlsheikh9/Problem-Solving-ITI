var productExceptSelf = function(nums) {
  // in this problem we can easy solve it with using divsion by calculate result of all multiplication elements then in each element we division total result from it.
  // if array 1 2 3 4 > i will make two array from it
  // first prefix 1 2 6 24 by multiply current element with total multiplication of all previous elements
  // second posfix 24 24 12 4 by start from end element and multiply current element with total multiplication of all forward elements 

  let prefix = new Array(),posfix = new Array();
  // 1. make prefix array
  prefix.push(nums[0]);
  for(let i =1 ;i<nums.length;i++)
    prefix.push(prefix[prefix.length-1]*nums[i]); // multiply current element with total multiplication of all previous ones

  // 2. make postfix array
  posfix.push(nums[nums.length-1]);
  for(let i=nums.length-2;i!=-1;i--)
    posfix.unshift(posfix[0]*nums[i]); //multiply current element with total multiplication of all forward ones 

  // 3. make result: we iterate through array and in every element we want to know what's total multiplicatoin of all prevoius ones and multiply it by total multiplication of all forward ones 
  let result=[];
  for(let i=0;i<nums.length;i++){
    let prefixValue=1,postfixValue=1;
    if(i-1>=0)// if there value of prefix
      prefixValue=prefix[i-1];
    if(i+1<nums.length)
      postfixValue = posfix[i+1];
    result.push(prefixValue*postfixValue);
  }
  return result;
};