function evenFibonacci(n) {
  let prev = 0;
  let curr = 1;
  let result = 0;
  while (prev + curr < n) {
    const next = prev + curr;
    if (next % 2 === 0) result += next;
    prev = curr;
    curr = next;
  }
  return result;
}

describe('even fibonacci numbers', () => {
  it('should return the sum of even fibonacci number', () => {
    expect(evenFibonacci(4000000)).toBe(4613732);
  });
});
