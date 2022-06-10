function reverseArray(a) {
  return a.reverse();
}

describe("Let's reverse the array", () => {
  test('reverse array', () => {
    expect(reverseArray([1, 4, 3, 2])).toEqual([2, 3, 4, 1]);
  });
});
