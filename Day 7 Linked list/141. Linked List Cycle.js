function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//* using slow and fast pointer if slow in middle of list fast will be in tail
var hasCycle = function(head) {
  if(!head||!head.next)
    return false;
  let slow = head,fast=head.next;
  while(fast&&fast.next){
    if(slow===fast)
      return true;
    slow=slow.next;
    fast=fast.next.next;
  }
  return false;
};