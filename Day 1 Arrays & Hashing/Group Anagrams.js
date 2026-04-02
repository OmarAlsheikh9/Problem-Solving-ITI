var groupAnagrams = function(strs) {
  // we will compare every str with all and if there is anagram between of any of them we will delete them from strs array and push them as array in group array
  let group=new Array();
  for(let i=0;i<strs.length;i++){
    let cur=[];// to collect array of anagram of current string in strs
    for(let j=i+1;j<strs.length;j++){
      if(isAnagram(strs[i],strs[j])){
        cur.push(strs[j]);
        strs.splice(j,1);
        j--;// decrease because we delete element so we must go back one step
      }
  }
    if(cur.length>0){ // if there is anagram then we push them into group as array and delete them from strs array 
      cur.push(strs[i]);
      strs.splice(i,1);
      group.push(cur);
      i--;
    }
  }
  strs.forEach(element=>group.push(new Array (element)));// if there is element that doesn't has anagram we will insert each of as array in group
  return group;
};
var isAnagram = function (s,t) {
    if(s.length!==t.length)
        return false;
  let freq = new Array(26).fill(0);//make array count letters
  //count s letter
  for (let i = 0; i < s.length; i++) {
    // first get ascall code for a and current letter of s and t
    const aCode = "a".codePointAt(0);
    const sCurCode = s[i].codePointAt(0);
    const tCurCode = t[i].codePointAt(0);
    freq[sCurCode - aCode]++;
    freq[tCurCode - aCode]--;
  }
  // if there is letter remain after subtract count of a from b then it isn't vaild
  for(let i=0;i<freq.length;i++)
    if(freq[i])
      return false;
  return true;
};