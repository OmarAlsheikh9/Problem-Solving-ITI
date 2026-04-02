"use strict";
/* //* Time limit 987 / 988 testcases passed time o(n^3) space o(n)
var lengthOfLongestSubstring = function (s) {
  let longestSub = 0;
  for (let size = 1; size <= s.length; size++) {

    let start = 0,end = start + size - 1;
    let map = new Map();
    makeMap(map, start, end, s); //^ set with start and end
    // all slide window with same size
    while(end<s.length){
      // if my current window vaild has unique elements
      if(map.get("isVaild"))
        longestSub = Math.max(longestSub,map.size-1); // size-1 because i added element to map with key isVaild to know if window vaild or not and it doesn't part from s
      start++,end++;// new window
      map.clear();
      makeMap(map,start,end,s);
    }
  }
  return longestSub;
};
function makeMap(map, start, end, s) {
  let isVaild = true;
  while (start <= end) {
    if (map.has(s[start])) {
      isVaild = false;
      map.set(s[start],map.get(s[start]) +1 );
    } else map.set(s[start], 1);
    start++;
  }
  map.set("isVaild", isVaild);
}
*/

/* //* Time limit 987 / 988 testcases passed time o(n^2) space o(n^2)
function makeintialMaps(s){
  let arrayMap =[];
  for(let size = 1 ; size<=s.length; size++){
    let start =0 , end = start+size -1;
    let map = new Map();
    makeMap(map,start,end ,s);
    arrayMap.push(map);
  }
  return arrayMap;
}
function makeMap(map, start, end, s) {
  while (start <= end) {
    if (map.has(s[start])) 
      map.set(s[start],map.get(s[start]) +1 );
    else 
      map.set(s[start], 1);
    start++;
  }
}
var lengthOfLongestSubstring = function (s) {
  // //^make intial maps
  let arrayMap = makeintialMaps(s);
  let longestSub = 0;
  for (let size = 1; size <= s.length; size++) {
    let start = 0,end = start + size - 1;
    let map = arrayMap[size-1];
    // all slide window with same size
    while(end<s.length){
      if(map.size === size)
        longestSub = Math.max(longestSub,map.size); 
      let newEnd = end +1 ;
      //^ start
      // ? delete old start from map
      map.set(s[start],map.get(s[start]) -1 );
      if(map.get(s[start]) === 0 )
        map.delete(s[start]);
      //^ end
      // ? insert new end to map
      if(map.has(s[newEnd]))
        map.set(s[newEnd],map.get(s[newEnd]) +1 );
      else
        map.set(s[newEnd],1);
      start++,end++;
    }
  }
  return longestSub;
};


// let s = "abcabcbb";
// let s = 'bbbbb';
// let s ='pwwkew';
let s = 'jbpnbwwd';
// debugger;
console.log(lengthOfLongestSubstring(s));
*/


//* Accepted time o(n^2) space o(n)
//^ diffrent approuch from pervious two we will walk in array in each element we will keep update its window that start with this element untill we found letter that exist in window 
var lengthOfLongestSubstring = function (s) {
  let longestSub = 0;
  for(let i =0 ;i < s.length ; i++){
    let start = i,window = s[start];
    while(start<s.length){
      start++;
      if( start>=s.length || window.includes(s[start]) ){
        break;
      }
      window+=s[start];
    }
    longestSub = Math.max(longestSub,window.length);
  }
  return longestSub;
};


let s = "abcabcbb";
// let s = 'bbbbb';
// let s ='pwwkew';
// let s = 'jbpnbwwd';
// debugger;
console.log(lengthOfLongestSubstring(s));