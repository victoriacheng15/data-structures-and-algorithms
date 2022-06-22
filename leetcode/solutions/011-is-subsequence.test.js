/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const isSubsequence = function (s, t) {
//   const chars = {};
//   for (const char of t) {
//     chars[char] = (chars[chars] || 0) + 1;
//   }
//   for (const char of s) {
//     if (!chars[char]) return false;
//     chars[char] -= 1;
//   }
//   return { chars };
//   // return true;
// };

// this works but it doesnt account for the letter's index order

const isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i += 1;

    j += 1;
  }

  return i === s.length;
};

// 86ms
// this solution accounts for the letter's index order

describe('is subsequence', () => {
  it('should return true', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  });

  it('should return false', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
    expect(isSubsequence('acb', 'ahbgdc')).toBe(false);
  });
});
