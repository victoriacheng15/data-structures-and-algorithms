/* 
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
*/

function solution(inputArray) {
  let moves = 0;
  for (let i = 1; i < inputArray.length; i += 1) {
    let localDiff = 0;
    if (inputArray[i] <= inputArray[i - 1]) {
      localDiff = inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] += localDiff;
      moves += localDiff;
    }
  }
  return moves;
}

describe('array change', () => {
  it('should return minimal number of moves', () => {
    expect(solution([1, 1, 1])).toBe(3);
  });
  it('should return minimal number of moves', () => {
    expect(solution([2, 1, 10, 1])).toBe(12);
  });
});
