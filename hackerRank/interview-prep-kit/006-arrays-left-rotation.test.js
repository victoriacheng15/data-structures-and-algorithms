function rotLeft(a, d) {
  // Write your code here
  const rotatedArr = a.concat();
  for (let i = 0; i < d; i += 1) {
    const frontItem = rotatedArr.shift();
    rotatedArr.push(frontItem);
  }
  return rotatedArr;
}

describe('left rotation', () => {
  test('move array to the left based on provided d', () => {
    expect(rotLeft([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
    expect(
      rotLeft(
        [
          41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10,
          86, 51,
        ],
        10
      )
    ).toEqual([
      77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84,
      77,
    ]);
  });
});
