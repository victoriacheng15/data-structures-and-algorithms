function repeatedString(s, n) {
  const modulus = n % s.length;
  const repetition = (n - modulus) / s.length;
  const getA = (letter) => letter === 'a';
  const remainCounts = s.slice(0, modulus).split('').filter(getA).length;
  const total = s.split('').filter(getA).length;
  return total * repetition + remainCounts;
}

describe('repeated string', () => {
  test('repeated string based on provided n', () => {
    expect(repeatedString('aba', 10)).toBe(7);
  });

  test('how many are first letter', () => {
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
  });
});
