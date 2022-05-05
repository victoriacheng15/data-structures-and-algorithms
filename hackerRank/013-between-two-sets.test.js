function getTotalX(a, b) {
  // Write your code here
  const low = a[a.length - 1];
  const high = b[0];
  let count = 0;
  for (let x = low; x <= high; x += 1) {
    if (a.every((value) => x % value === 0)) {
      if (b.every((value) => value % x === 0)) {
        count += 1;
      }
    }
  }
  return count;
}

describe('get total x', () => {
  test('output should be', () => {
    const a = [2, 6];
    const b = [24, 36];
    expect(getTotalX(a, b)).toEqual(2);
  });

  test('output should be', () => {
    const a = [2, 4];
    const b = [16, 32, 96];
    expect(getTotalX(a, b)).toEqual(3);
  });
});
