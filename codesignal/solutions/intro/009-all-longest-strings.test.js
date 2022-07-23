/* 
Given an array of strings, return another array containing all of its longest strings.
*/

function solution(inputArray) {
  const longest = Math.max(...inputArray.map((elem) => elem.length));
  return inputArray.filter((elem) => elem.length === longest);
}

describe('longest strings', () => {
  it('should return longest string elemet in array', () => {
    expect(solution(['aba', 'aa', 'ad', 'vcd', 'aba'])).toEqual([
      'aba',
      'vcd',
      'aba',
    ]);
  });

  it('should return longest string elemet in array', () => {
    expect(
      solution(['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa'])
    ).toEqual(['zzzzzz', 'abcdef', 'aaaaaa']);
  });
});
