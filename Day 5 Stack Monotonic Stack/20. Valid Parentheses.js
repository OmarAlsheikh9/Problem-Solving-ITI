
var isValid = function(s) {
  let rules = new Map();
  rules.set('(',')');
  rules.set('{','}');
  rules.set('[',']');
  let openBrackets=[];
  for(let i=0;i<s.length;i++){
    if(s[i]==='('||s[i]==='{'||s[i]==='[')// open brackets then add to top of array
      openBrackets.unshift(s[i]);
    else{
      let lastOpen = openBrackets[0];
      if(openBrackets.length===0 || rules.get(lastOpen)!==s[i] )
        return false;
      openBrackets.shift();
    }
  }
  return openBrackets.length === 0? true:false;
};
// debugger;
console.log(isValid('()'));//true
console.log(isValid('()[]{}'));//true
console.log(isValid('(]'));//false
console.log(isValid('([])'));//true
console.log(isValid('([)]')); // false