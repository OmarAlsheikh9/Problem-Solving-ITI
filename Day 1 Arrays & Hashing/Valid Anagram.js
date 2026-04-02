var isAnagram = function (s,t) {
  // strings are anagram if there have same length and each letter in them exist in other
  // 1. check length
  if(s.length!==t.length)
    return false;

  let freq = new Array(26).fill(0);//make array count letters with length 26 that represent letters in english with zero because until now we haven't any letter
  // 2. count letter
  for (let i = 0; i < s.length; i++) {
    // first get ascall code for a and current letter of s and t
    const aCode = "a".codePointAt(0);
    const sCurCode = s[i].codePointAt(0);
    const tCurCode = t[i].codePointAt(0);
    freq[sCurCode - aCode]++; // in every letter in s we increment count of this letter 
    freq[tCurCode - aCode]--; // in every letter in t we decrement count of this letter
  }
  // if there is letter remain after subtract count of s from t then it isn't vaild
  for(let i=0;i<freq.length;i++)
    if(freq[i])
      return false;
  return true;
};