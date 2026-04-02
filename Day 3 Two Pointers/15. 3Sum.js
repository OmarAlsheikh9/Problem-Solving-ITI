 //* second one day 2
/* //^ first sol Time Limit in test 312/316 time o(n^2 * log n)
var threeSum = function(nums) {
  nums.sort((a,b)=>a-b);
  let result=[];
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      let target = (nums[i]+nums[j])*-1;
      if(isTargetExist(target,i,j,nums))
        result.push([nums[i],nums[j],target]);
    }
  }
  for(let i=0;i<result.length;i++)
    result[i].sort((a,b)=>a-b);
  //* result
  // debugger;
  for(let i=0;i<result.length;i++){
    for(let j=i+1;j<result.length;j++){
      let isEqual=true;
      for(let item=0;item<3;item++){
        if(result[i][item]!==result[j][item]){
          isEqual=false;
          break;
        }
      }
      if(isEqual)
        result.splice(j,1),j--;
    }

  }
  return result;
};
function isTargetExist(target , firstNumIndex , secondNumIndex ,nums){
  //^binary search 
  let start = 0,end=nums.length-1,mid=Math.floor((start+end)/2);
  while(start<=end){
    let curNum=nums[mid];
    if(curNum<target)
      start = mid +1;
    else if(curNum>target)
      end = mid -1;
    else { // curNum ==target
      if(mid !==firstNumIndex && mid !==secondNumIndex)
        return true;
      else
        return false;
    }
    mid= Math.floor((start+end)/2);
  }
  return false;
}
*/
/* //^ second sol Time Limit in test 315/316 time o(n^2 * log n)
var threeSum = function(nums) {
  let mp = new Map();
  nums.sort((a,b)=>a-b);
  let result= [];
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      let target = (nums[i]+nums[j])*-1;
      if(isTargetExist(target,i,j,nums)){
        let sortedNum= [target,nums[i],nums[j]];
        sortedNum.sort((a,b)=>a-b);
        if(mp.size===0||!mp.has(sortedNum.join(''))){
          result.push(sortedNum);
          mp.set(sortedNum.join(''),true);
        }
      }
    }
  }
  return result;
};
function isTargetExist(target , firstNumIndex , secondNumIndex ,nums){
  //^binary search 
  let start = 0,end=nums.length-1,mid=Math.floor((start+end)/2);
  while(start<=end){
    let curNum=nums[mid];
    if(curNum<target)
      start = mid +1;
    else if(curNum>target)
      end = mid -1;
    else { // curNum ==target
      if(mid !==firstNumIndex && mid !==secondNumIndex)
        return true;
      else
        return false;
    }
    mid= Math.floor((start+end)/2);
  }
  return false;
}
*/
//^ thrid sol Correct time o(n^2)
var threeSum = function(nums) {//-1,0,1,2,-1,-4
  nums.sort((a,b)=>a-b);// -4 -1 -1 0 1 2
  let result= [];
  for(let i=0,a;i<nums.length;i++){
    a=nums[i];
    if(i>0&&a === nums[i-1])
      continue;
    let leftPointer = i+1 , rightPointer = nums.length-1;
    while(leftPointer<rightPointer){
      let threeSum = a + nums[leftPointer] + nums[rightPointer] ;
      if(threeSum < 0)
        leftPointer++;
      else if (threeSum > 0)
        rightPointer--;
      else{
        result.push([a,nums[rightPointer],nums[leftPointer]]);
        let oldLeftValue=nums[leftPointer];
        while(leftPointer<rightPointer&&nums[leftPointer]===oldLeftValue)
            leftPointer++;
      }
    }
  }
  return result;
};
function isTargetExist(target , firstNumIndex , secondNumIndex ,nums){
  //^binary search 
  let start = 0,end=nums.length-1,mid=Math.floor((start+end)/2);
  while(start<=end){
    let curNum=nums[mid];
    if(curNum<target)
      start = mid +1;
    else if(curNum>target)
      end = mid -1;
    else { // curNum ==target
      if(mid !==firstNumIndex && mid !==secondNumIndex)
        return true;
      else
        return false;
    }
    mid= Math.floor((start+end)/2);
  }
  return false;
}
let nums=[0,0,0];
// let nums=[0,0,0];
// let nums = [-100,-70,-60,110,120,130,160];
// [[-100,-60,160],[-70,-60,130]]


// debugger;
console.log(threeSum(nums));

