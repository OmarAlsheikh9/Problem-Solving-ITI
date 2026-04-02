//* time o(n1+n2)
// if i try to conver each list to number to sum it then convert it to list i will give time limit and space limit because every list may have 100 digit 
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(-1);//dummy node trick to save first node but with dummy value then when return result return dummy.next which is actual head so every time i add node i use only tail pointer 
  let tail=dummy,rest=0;
  for(let temp1=l1,temp2=l2;temp1||temp2;){// loop if i have node in list1 or list2
    let item = new ListNode(),sum=0;// item my new node but i want to know its value which is sum of two nodes if exists
    if(temp1){
      sum = temp1.val;
      temp1=temp1.next;
    }
    if(temp2){
      sum += temp2.val;
      temp2=temp2.next;
    }
    sum+=rest;
    item.val=sum%10;
    rest=Math.trunc(sum/10);
    tail.next=item;
    tail=item;
  }
  if(rest)//if still rest exist then we must create new node with rest value
    tail.next=new ListNode(rest);
  return dummy.next;
};