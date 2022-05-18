function printLinkedList(head) {
  if (!head) return;
  console.log(head.data);
  printLinkedList(head.next);
}

// note the test below may not be the way to testing linked list since I am not familiar. I may change in the future

describe('print linked list', () => {
  it('should print elements from the linked list', () => {
    const answer = [16, 13].forEach((elem) => console.log(elem));
    const answer2 = [17, 19, 5, 12].forEach((elem) => console.log(elem));
    expect(printLinkedList([16, 13])).toEqual(answer);
    expect(printLinkedList([17, 19, 5, 12])).toEqual(answer2);
  });
});
