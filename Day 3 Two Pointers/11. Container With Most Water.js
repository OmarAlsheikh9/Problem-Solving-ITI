
/* //^ Time limit in test 50/65
var maxArea = function (height) { // * o (n^2)
  let totalMax=0;
  for(let start=0;start<height.length;start++){
    let end = height.length -1,countLines,curMax =0;
    while(end!==start){
      let curHeight = Math.min(height[start],height[end]);
      countLines= height.slice(start,end).length; // from start to end-1 
      curMax = Math.max(curMax,curHeight*countLines);
      end--;
    }
    totalMax = Math.max(curMax,totalMax);
  }
  return totalMax;
};
*/
////////////////////////////////////////////////
/*//^ Time limit in test 58/65
var maxArea = function (height) { // * o (n)
  let totalMax=0;
  let start =0 ,end = height.length -1;
  while(end!==start){
    let curHeight = Math.min(height[start],height[end]);
    let countLines= height.slice(start,end).length; // from start to end-1 
    totalMax = Math.max(totalMax,curHeight*countLines);
    if(height[start] < height[end])
      start++;
    else
      end--;
  }
  return totalMax;
};
*/

//^ Accepted time o(n) : solving issue from calculating length with pervious sol 
//^ in pervious sol i calculate countLines by make shallow copy from array from start to end and get length from this array but this slice method take k numbers to make it k: repersent numbers of element in array that made with slice so i change way of calculating length by using start and end pointer if i subtract end from start then i get length > length = end - start
var maxArea = function (height) { // * o (n)
  let totalMax=0;
  let start =0 ,end = height.length -1;//^ two pointers update them based on values that they had smaller one with change and if they equal change any of them
  while(start<height.length && end!=-1 && end!==start){
    //^ in every startPoint and endPoint calculate its area then set totalMax with max value from current area and pervoius one
    let curHeight = Math.min(height[start],height[end]);
    let countLines= end - start; //* calculate length
    totalMax = Math.max(totalMax,curHeight*countLines);
    if(height[start] < height[end])
      start++;
    else
      end--;
  }
  return totalMax;
};
// let height = [1,8,6,2,5,4,8,3,7]; // 1 2 3 4 5 6 7 8 8
// let height = [4,3,2,1,4];
let height = [8,7,2,1];//7   1 2 7 8
// debugger;
console.log(maxArea(height));