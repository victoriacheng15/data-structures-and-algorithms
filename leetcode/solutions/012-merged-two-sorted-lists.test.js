/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (list1, list2) {
  const placeholder = new ListNode(0);
  let prev = placeholder;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;
  return placeholder.next;
};

// 104ms

describe('merge two sorted lists', () => {
  it('should return a merged list', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const result = mergeTwoLists(list1, list2);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(1);
    expect(result.next.next.val).toBe(2);
    expect(result.next.next.next.val).toBe(3);
    expect(result.next.next.next.next.val).toBe(4);
    expect(result.next.next.next.next.next.val).toBe(4);
  });
});
