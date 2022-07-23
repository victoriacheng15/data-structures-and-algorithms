/* 
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
*/

function solution(a) {
  const sorted = [...a].filter((num) => num !== -1).sort((x, y) => x - y);
  return a.map((elem) => (elem === -1 ? -1 : sorted.shift()));
}

describe('sort by height', () => {
  it('should return sorted order beside -1', () => {
    expect(solution([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([
      -1, 150, 160, 170, -1, -1, 180, 190,
    ]);
  });
});
