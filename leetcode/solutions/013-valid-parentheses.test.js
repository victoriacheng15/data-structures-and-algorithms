/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const array = [];
  const parentheses = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  for (const char of s) {
    const current = parentheses[char];
    if (current && current === array[array.length - 1]) {
      array.pop(char);
    } else {
      array.push(char);
    }
  }
  return array.length === 0;
  // return { array };
};

// 71ms

describe('check for valid parentheses', () => {
  it('should return true for s = "()"', () => {
    expect(isValid('()')).toBe(true);
  });

  it('should return true for s = "()[]{}"', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return true for s = "(]"', () => {
    expect(isValid('(]')).toBe(false);
  });
});
