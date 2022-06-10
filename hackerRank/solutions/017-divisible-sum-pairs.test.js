function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n; i += 1) {
    const divisble = ar
      .slice(i + 1, n)
      .map((num) => num + ar[i])
      .filter((sum) => !(sum % k)).length;
    count += divisble;
  }
  return count;
}

describe('divisible sum pairs', () => {
  it('should count how many sum pairs are divisible by k', () => {
    expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toEqual(5);
    // expect(divisibleSumPairs(6, 3, [1, 3, 6, 1, 2])).toEqual(5);
  });
});
