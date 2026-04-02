function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// loop if you have node in list1 or list2 every time get right value update head,tail move to next node from entire node that we added from
// if there is only one list remain . link it then return
let mergeTwoLists = function (list1, list2) {
  let head = null,tail = null;
  for (let temp1 = list1, temp2 = list2; temp1 || temp2; ) {
    if (temp1 && temp2 && temp1.val <= temp2.val) {
      [head,tail] = addNode(head, tail, temp1);
      temp1 = temp1.next;
    } 
    else if (temp1 && temp2 && temp2.val <= temp1.val) {
      [head,tail] = addNode(head, tail, temp2);
      temp2 = temp2.next;
    } 
    else if (temp1) {
      [head,tail] = addNode(head, tail, temp1);
      break;
    } 
    else if (temp2) {
      [head,tail] = addNode(head, tail, temp2);
      break;
    }
  }
  return head;
};
function addNode(head, tail, item) {
  // let item = new ListNode(value);
  if (!head) head = tail = item;
  else {
    tail.next = item;
    tail = item;
  }
  return [head,tail];
}
