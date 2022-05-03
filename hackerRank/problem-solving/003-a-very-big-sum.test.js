function aVeryBigSum(ar) {
  return ar.reduce((total, current) => Number(total) + Number(current), 0);
}

describe('a very big sum', () => {
  it('returns the big sum based on provided array', () => {
    const a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    expect(aVeryBigSum(a)).toEqual(5000000015);
  });
});
