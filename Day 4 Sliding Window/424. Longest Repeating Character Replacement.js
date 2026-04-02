"use strict";
function getMostFreqLetter(freqLetters){
  let result = 0;
  for(const [key,value] of freqLetters.entries()){
    result = Math.max(result,value);
  }
  return result;
}
var characterReplacement = function(s, k) {
  let maxLength = 0;
  let freqLetters = new Map();
  for(let start = 0, end = 0; end<s.length ; end++){
    // update map
    if(freqLetters.has(s[end]))
      freqLetters.set(s[end],freqLetters.get(s[end]) +1 );
    else
      freqLetters.set(s[end],1);
    // update most freq letter
    let mostFreqLetter = getMostFreqLetter(freqLetters);
    let windowSize = end - start +1;
    // validation
    if(windowSize - mostFreqLetter <= k )
      maxLength = Math.max(maxLength,windowSize);
    else{
      // update map by remove element that removed
      freqLetters.set(s[start],freqLetters.get(s[start]) -1 );
      if(freqLetters.get(s[start]) === 0 )
        freqLetters.delete(s[start]);
      // move start pointer to forward because we can't make any vaild string from this start point
      start++;
    }
  }
  return maxLength;
};


/* //* Time Limit 26 / 50 testcases passed time o(n^2)
var characterReplacement = function(s, k) {
  let maxLength = 0;
  for(let start = 0 ; start<s.length ; start++){
    let mostFreqLetter = s[start],curLength=1;
    let freqLetters = new Map();
    freqLetters.set(s[start],1);
    for(let cur = start+1 ; cur<s.length; cur++){
      // update map
      if(freqLetters.has(s[cur]))
        freqLetters.set(s[cur],freqLetters.get(s[cur]) +1 );
      else
        freqLetters.set(s[cur],1);
      // update most freq letter
      if(mostFreqLetter!==s[cur] ){
        if(freqLetters.get(mostFreqLetter) < freqLetters.get(s[cur]))
          mostFreqLetter = s[cur];
      }
      // validation
      if( (curLength - freqLetters.get(mostFreqLetter)) >= k )
        break;
      else
        curLength++;
    }
    maxLength = Math.max(maxLength,curLength);
  }
  return maxLength;
};
*/
let s = 'AABABBA' ,k =1;
// let s = 'ABBB' ,k =2; // 4
// let s ='ABCDE' ,k=1; // 2
// let s = "AABB", k = 1
// let s = "ABAB", k = 2;

// debugger;
console.log(characterReplacement(s,k));