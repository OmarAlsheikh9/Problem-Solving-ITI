"use strict";


/*//^ Time Limit Exceeded 47 / 48 testcases passed
var dailyTemperatures = function(temperatures) {
  let stackArr = [],result=[];
  for(let i = temperatures.length-1;i>=0;i--){
    let curElement = {value:temperatures[i],index:i};
    for(let j=stackArr.length-1;j>=0;j--){
      let stkElement=stackArr[j];
      if(curElement.value>= stkElement.value){
        stackArr.pop();
      }
      else{
        let days = stkElement.index - i;
        result.unshift(days);
        stackArr.push(curElement);
        break;
      }
    }
    if(stackArr.length === 0){
      stackArr.push(curElement);
      result.unshift(0);
    }
  }
  return result;
};
*/

//* Accepted Same pervious solution only change is to use push in result then make reverse to result array because push method take o(1) time but unshift o(n) time  
var dailyTemperatures = function(temperatures) {
  let stackArr = [],result=[];
  for(let i = temperatures.length-1;i>=0;i--){
    //^ save cur element in object to get its value to compare it with other days value. and index to calculate distance between two days
    let curElement = {value:temperatures[i],index:i};
    for(let j=stackArr.length-1;j>=0;j--){
      let stkElement=stackArr[j];//^ top element in stack
      if(curElement.value>= stkElement.value){//^ keep remove top element in stack if cur value in array bigger than or equal to it
        stackArr.pop();
      }
      else{//^ if cur value in array smaller than top element in stack.
        //^ i found first element that bigger than cur element so 
        //? 1. calculate distance for two days
        let days = stkElement.index - i;
        //? 2. push result
        result.push(days);
        //? 3. add it to stack for future element
        stackArr.push(curElement);
        break;
      }
    }
    if(stackArr.length === 0){//^ if stack empty then push cur element and make its result zero
      stackArr.push(curElement);
      result.push(0);
    }
  }
  result.reverse();
  return result;
};

// let temperatures = [73,74,75,71,69,72,76,73];//1,1,4,2,1,1,0,0
let temperatures = [89,62,70,58,47,47,46,76,100,70];//8,1,5,4,3,2,1,1,0,0

// debugger;
console.log(dailyTemperatures(temperatures));

