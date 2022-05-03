function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[arr.length - 1 - i][i];
  }
  return Math.abs(diagonal1 - diagonal2);
}

describe('diagonal difference', () => {
  it('returns the absolute value of both diagonal difference', () => {
    const array = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(array)).toBe(15);
  });
});
