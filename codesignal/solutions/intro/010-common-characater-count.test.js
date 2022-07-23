/* 
Given two strings, find the number of common characters between them.
*/

function solution(s1, s2) {
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);
  let count = 0;

  for (const char of s1) {
    freq1[char.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  for (const char of s2) {
    freq2[char.charCodeAt() - 'a'.charCodeAt()] += 1;
  }

  for (let i = 0; i < freq1.length; i += 1) {
    count += Math.min(freq1[i], freq2[i]);
  }

  return count;
}

describe('common character count', () => {
  it('should return common count', () => {
    expect(solution('aabcc', 'adcaa')).toBe(3);
  });

  it('should return common count', () => {
    expect(solution('abca', 'xyzbac')).toBe(3);
  });
});
