function findDigits(n) {
  const num = `${n}`;
  let count = 0;
  for (const number of num) {
    if (number !== 0 && n % number === 0) {
      count += 1;
    }
  }
  return count;
}

describe('find digits', () => {
  it('should return the counts of divisble digits', () => {
    expect(findDigits(12)).toBe(2);
    expect(findDigits(1012)).toBe(3);
  });
});
