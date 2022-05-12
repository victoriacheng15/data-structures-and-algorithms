function maximumToys(prices, k) {
  // Write your code here
  let sum = 0;
  const finalArr = prices.sort((a, b) => a - b).filter((price) => price < k);
  let count = 0;
  for (const price of finalArr) {
    sum += price;
    if (sum <= k) count += 1;
  }
  return count;
}

describe('maximum toys', () => {
  it('get max number of toys based on the budget', () => {
    expect(maximumToys([1, 2, 3, 4], 7)).toBe(3);
    expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4);
  });
});
