//* first sol using brute force time o(n^2)
/*
// loop on heights every one calculate its vaild postion from left and right pointer
// using left right calcaulate distance right-left+1 then * curHeight to get value of rectangleArea
var largestRectangleArea = function(heights) {
  let longestSum=0;
  for(let i=0;i<heights.length;i++){
    let curHeight = heights[i];
    let left = i-1,right=i+1;
    while(left>=0&&heights[left]>=curHeight)//*go left while left is vaild
      left--;
    while(right<heights.length&&heights[right]>=curHeight)
      right++;
    left++,right--;//* return left and right pointers to valid places
    let area = curHeight * (right-left+1);
    longestSum=Math.max(area,longestSum);
  }
  return longestSum;
};
*/

//* second sol using monotonic stack time o(n)
// make stack save all heights that still want to know its area but to know its area we want know right
// loop on heights every time save cur index height in stack becase we move from left to right so when we met new height we didn't know its right to get area
// every loop if we have heights in stack and met height that smaller than top of stack(biggest value in stack because stack is sorted(monotonic stack)) 
// first delete it from stack and get its index value . select its right and left then make area and update longestSum
// After loop we may have element in stack that its width from index to end of heights 
var largestRectangleArea = function(heights) {
  let longestArea=0,stack=[];
  for(let i=0;i<heights.length;i++){
    let curHeight=heights[i];
    while(stack.length&&heights[stack[stack.length-1]]>curHeight){
      let item_index=stack.pop(),left=stack.length?stack[stack.length-1]+1:0,
      right=i-1;
      let area = heights[item_index] * (right-left+1);
      longestArea=Math.max(longestArea,area);
    }
    stack.push(i);
  }
  while(stack.length){
    let item_index=stack.pop(),left=stack.length?stack[stack.length-1]+1:0,
    right=heights.length-1;
    let area = heights[item_index] * (right-left+1);
    longestArea=Math.max(longestArea,area);
  }
    return longestArea;
};
console.log(largestRectangleArea([2,5,2]));

console.log(largestRectangleArea([2,1,5,6,2,3]));