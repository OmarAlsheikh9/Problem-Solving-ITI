"use strict";
var merge = function (intervals) {
  // 1. to make problem easy to solve first we will sort intervals based on start for each one Why ? because if i didn't sort so i will must to check every possible if first one has start smaller than second or reverse
  intervals.sort((a,b) => a[0]-b[0]);
  // 2. we iterate on intervals for each one we compare it with others that next to it if overlap or not to be overlap then must be start of second interval be lessthan end of first one so it exist between start of first and end of first
  for (let i = 0; i < intervals.length; i++) {
    let curInterval = intervals[i],newStart, newEnd;
    let startCur = curInterval[0], endCur = curInterval[1];
    for (let j = i + 1; j < intervals.length; j++) {
      let nextInterval = intervals[j],startNext = nextInterval[0],endNext = nextInterval[1];
      if (startNext <= endCur) {// if overlap then we set cur first one to be with new start and end 
        newStart = startCur;// because startCur always smaller than startEnd because we made sort on interaval based on start
        newEnd = Math.max(endCur,endNext);//only bigger than end 
        intervals.splice(j,1);// delete second one from intervals because we won't want compare it with others
        intervals[i]=[newStart,newEnd];//set cur one
        i--;//becase of deleting second interval length subtract with one so we must subtract i with one 
        break;
      }
    }
  }
  return intervals;
};

let intervals = [[1,4],[0,2],[3,5]];
// debugger;
console.log(merge(intervals));
// [0, 5] 
