/* 
Given the string, check if it is a palindrome.
*/

function solution(inputString) {
  const reversed = [...inputString].reduce((output, char) => {
    output = char + output;
    return output;
  }, '');
  return reversed === inputString;
}

describe('century from year', () => {
  it('should return true for abacaba', () => {
    expect(solution('abacaba')).toBe(true);
  });

  it('should return -false for zzzazzazz', () => {
    expect(solution('zzzazzazz')).toBe(false);
  });
});
