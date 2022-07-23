/* 
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
*/

function solution(sequence) {
  let count = 0;
  for (let i = 0; i < sequence.length; i += 1) {
    const current = sequence[i];
    if (current <= sequence[i - 1]) count += 1;

    if (count > 1) return false;

    if (current <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
      return false;
    }
  }
  return true;
}

describe('almost increasing sequence', () => {
  it('should return a boolean value', () => {
    expect(solution([1, 3, 2, 1])).toBe(false);
  });

  it('should return a boolean value', () => {
    expect(solution([1, 3, 2])).toBe(true);
  });
});
