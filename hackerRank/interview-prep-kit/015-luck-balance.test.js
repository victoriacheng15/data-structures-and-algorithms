function luckBalance(k, contests) {
  // Write your code here
  const important = contests.filter((arr) => arr[1] === 1);
  important.sort((a, b) => a[0] - b[0]);
  const array = important.concat(contests.filter((arr) => arr[1] === 0));
  return array.reduce((acc, curr, index) => {
    const condition = index < important.length - k;
    return condition ? acc - curr[0] : acc + curr[0];
  }, 0);
}

describe('luck balance', () => {
  it('has x amount of final luck', () => {
    const arr = [
      [5, 1],
      [2, 1],
      [1, 1],
      [8, 1],
      [10, 0],
      [5, 0],
    ];
    expect(luckBalance(3, arr)).toBe(29);
    const arr2 = [
      [13, 1],
      [10, 1],
      [9, 1],
      [8, 1],
      [13, 1],
      [12, 1],
      [18, 1],
      [13, 1],
    ];
    expect(luckBalance(5, arr2)).toBe(42);
    const arr3 = [
      [5, 1],
      [4, 0],
      [6, 1],
      [2, 1],
      [8, 0],
    ];
    expect(luckBalance(2, arr3)).toBe(21);
  });
});
