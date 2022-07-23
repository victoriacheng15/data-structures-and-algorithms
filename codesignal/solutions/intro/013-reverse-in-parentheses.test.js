/* 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.
*/

function getStartAndEndIdx(string) {
  const regex = /\([a-z]*?\)/gi;
  const word = regex.exec(string);
  if (!word) return null;
  const startIndex = word.index;
  const endIndex = word.index + word[0].length - 1;
  return { startIndex, endIndex };
}

function revParenthese(startIndex, endIndex, string) {
  const start = string.slice(0, startIndex);
  const parenthese = string.slice(startIndex + 1, endIndex);
  const end = string.slice(endIndex + 1, string.length);
  const reversed = parenthese.split('').reverse().join('');
  return start + reversed + end;
}

function solution(inputString) {
  let indexes = getStartAndEndIdx(inputString);
  while (indexes) {
    const { startIndex, endIndex } = indexes;
    const newString = revParenthese(startIndex, endIndex, inputString);
    inputString = solution(newString);
    indexes = getStartAndEndIdx(inputString);
  }
  return inputString;
}

describe('reverse in parentheses', () => {
  it('should return string without parenthese', () => {
    expect(solution('(bar)')).toBe('rab');
  });

  it('should return string without parenthese', () => {
    expect(solution('foo(bar(baz))blim')).toBe('foobazrabblim');
  });
});
