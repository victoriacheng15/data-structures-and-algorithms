function countSwaps(a) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < a.length; i += 1) {
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
        count += 1;
      }
    }
  }
  // console.log(`Array is sorted in ${count} swaps.`);
  // console.log(`First Element: ${a[0]}`);
  // console.log(`Last Element: ${a[a.length - 1]}`);
  return count;
}

describe('sorting the array', () => {
  it('how many swaps?', () => {
    expect(countSwaps([1, 2, 3])).toBe(0);
    expect(countSwaps([3, 2, 1])).toBe(3);
    expect(countSwaps([4, 3, 2, 1])).toBe(6);
  });
});
