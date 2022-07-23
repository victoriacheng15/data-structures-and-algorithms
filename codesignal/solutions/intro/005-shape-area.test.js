/* 
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

if n = 1, poly = 1
if n = 2, poly = 5
if n = 3, poly = 13
*/

function solution(n) {
  return 2 * n * (n - 1) + 1;
}

describe('shape area', () => {
  it('should return its poly based on the n', () => {
    expect(solution(3)).toBe(13);
  });

  it('should return its poly based on the n', () => {
    expect(solution(9999)).toBe(199940005);
  });
});
