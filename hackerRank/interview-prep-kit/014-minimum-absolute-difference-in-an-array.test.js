function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i += 1) {
    min = Math.min(min, Math.abs(arr[i] - arr[i + 1]));
  }
  return min;
}

describe('minimum absolute difference', () => {
  it('find the mini absolute difference', () => {
    expect(minimumAbsoluteDifference([3, -7, 0])).toBe(3);
    expect(
      minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
    ).toBe(1);
  });
});
