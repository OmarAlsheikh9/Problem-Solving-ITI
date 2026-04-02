var twoSum = function(nums, target) {
  // 1. we will iterate through numbers and each element if we subtract target from element then we have element that we want to know if exist in array or not because target = sum of two numbers in array 
  let result=[];
  for(let i=0;i<nums.length;i++){
    let targetSearchValue = target -nums[i]; // value of number that we search for it in array 
    let isVaild=false;// suppose that we doesn't have number that we find in array
    targetSearchIndex=-1; // suppose its index -1 because we want to return its index not value
    for(let j=i+1;j<nums.length;j++)
      if(nums[j]===targetSearchValue){//if we found it 
        isVaild=true;
        targetSearchIndex=j;
        break;
    }
    if(isVaild){
      result.push(i,targetSearchIndex);
      break;
    }
  }
  return result;
};
