/* 
Given a string, find out if its characters can be rearranged to form a palindrome.
*/

function solution(inputString) {
  const charCount = [...inputString].reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
  const values = Object.values(charCount);
  return values.filter((count) => count % 2).length <= 1;
}

describe('palindrome rearranging', () => {
  it('should return a boolean value', () => {
    expect(solution('aabb')).toBe(true);
  });

  it('should return a boolean value', () => {
    expect(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')).toBe(false);
  });
});
