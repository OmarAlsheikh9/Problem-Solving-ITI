var isPalindrome = function(s) {
  // 1. convert each letter in string to lowercase then convert it to array based on space to delete spaces 
  s=s.toLowerCase().split(' ');

  let alphanumericCharacters='abcdefghijklmnopqrstuvwxyz0123456789';// vaild alphanumeric Characters only letters and numbers
  // 2. loop in each word and every one create new string without un alphanumeric Characters then set it to word
  for(let i=0;i<s.length;i++){
    let newStr='';
    for(let j=0;j<s[i].length;j++)
      newStr+=alphanumericCharacters.includes(s[i][j])?s[i][j]:'';
    s[i]=newStr;
  }
  // Now we have array of word that all vaild alphanumeric Characters
  // 3. convert array to string without spaces
  s=s.join('');
  // 4. check is palindrome or not
  for(let start =0 , end = s.length-1;start<=end;start++,end--){
    if(s.at(start)!==s.at(end))
      return false;
  }
  return true;
};
// let s = "A man, a plan, a canal: Panama";
let s ='a.';
console.log(isPalindrome(s));
