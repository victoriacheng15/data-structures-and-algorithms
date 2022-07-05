/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = function (n) {
  if (n < 3) return n;
  let one = 1;
  let two = 2;
  for (let i = 3; i <= n; i += 1) {
    [one, two] = [two, one + two];
  }
  return two;
};

// 68ms

describe('climbing stairs', () => {
  it('should return 3 when n = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('should return 2 when n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('should return 8 when n = 5', () => {
    expect(climbStairs(5)).toBe(8);
  });
});
