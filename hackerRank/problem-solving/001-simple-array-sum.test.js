function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}

describe('simple array sum', () => {
  it('returns the sum of provided array', () => {
    const array = [1, 2, 3, 4, 10, 11];
    expect(simpleArraySum(array)).toEqual(31);
  });
});
