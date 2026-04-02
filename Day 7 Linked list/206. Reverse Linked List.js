function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseList = function(head) {
  if(!head||!head.next)// if we don't have node or have only one node return we wan't do anything it's ok
    return head;
  let cur=head,next=cur.next;
  head=null;
  while(cur){
    next=cur.next;  // save next node
    cur.next=head;  // insert in front
    head=cur;       // update head
    cur=next;       // update cur
  }
  return head;
};