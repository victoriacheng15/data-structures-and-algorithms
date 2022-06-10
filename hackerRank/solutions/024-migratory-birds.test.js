function migratoryBirds(arr) {
  const sorted = arr.sort();
  let ans = sorted[0];
  let maxOccur = 1;
  let count = 0;
  sorted.map((_, i) => {
    count = sorted[i] === sorted[i - 1] ? count + 1 : 0;
    if (count > maxOccur) {
      ans = sorted[i];
      maxOccur = count;
    }
  });
  return ans;
}

describe('migratory birds', () => {
  it('should return highest frequency of type', () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
  });
  it('should return highest frequency and lowest value of type', () => {
    expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
  });
});
