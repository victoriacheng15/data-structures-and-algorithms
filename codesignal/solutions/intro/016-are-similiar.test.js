/* 
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.
*/

function solution(a, b) {
  const filteredA = a.filter((el, idx) => el !== b[idx]);
  const filteredb = b.filter((el, idx) => el !== a[idx]);
  const lengthA = filteredA.length;
  const joinedA = filteredA.join('');
  const reversedJoinedB = filteredb.reverse().join('');
  return lengthA === 0 || (lengthA === 2 && joinedA === reversedJoinedB);
}

describe('are similar?', () => {
  it('should return a boolean value', () => {
    expect(solution([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return a boolean value', () => {
    expect(solution([1, 2, 2], [2, 1, 1])).toBe(false);
  });
});
