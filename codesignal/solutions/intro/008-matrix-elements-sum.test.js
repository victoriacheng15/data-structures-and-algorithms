/* 
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
*/

function solution(matrix) {
  const len = matrix.length;
  const row0 = matrix[0].length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < row0; j += 1) {
      const current = matrix[i][j];
      if (current === 0 && typeof matrix[i + 1] !== 'undefined') {
        matrix[i + 1][j] = 0;
      }
    }
  }
  const sum = (array) => array.reduce((total, num) => total + num);
  return sum(matrix.map(sum, 0), 0);
}

describe('matrix elements sum', () => {
  it('should return the sum', () => {
    expect(
      solution([
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3],
      ])
    ).toBe(9);
  });

  it('should return the sum', () => {
    expect(
      solution([
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
      ])
    ).toBe(18);
  });
});
