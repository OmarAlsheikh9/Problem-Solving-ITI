var checkInclusion = function (s1, s2) {
  let temp_s1=s1;
  //^ Here we have two pointer start and end start with first letter every loop we compare letter that exist in end if it includes inside temp of s1 if yes so will remove from temp_s1 then increase end because this letter vaild but if doesn't we will move start pointer and make two checks one for end if was equal start we will increase it because end should be equal or bigger than start . second check for letter that start will leave if it include from orginal s1 then we will added to temp_s1
  for (let start = 0, end = 0;start < s2.length && end < s2.length;) {
    let ch = s2[end];
    if(temp_s1.includes(ch)){
      temp_s1 = temp_s1.replace(ch,'');
      end++;
    }
    else{
      if(s1.includes(s2[start]))
        temp_s1+=s2[start];
      if(start===end)
        end++;
      start++;
    }

    if(temp_s1==='')
      return true;
  }
  return false;
};
// let  s1 = "ab", s2 = "eidbaooo"; //true
// let  s1 = "ab", s2 = "eidboaoo";// false
// let s1 = "abc",s2 = "bbbca"; // true
let s1 = "adc",s2 = "dcda"; // true
// debugger;

console.log(checkInclusion(s1, s2));