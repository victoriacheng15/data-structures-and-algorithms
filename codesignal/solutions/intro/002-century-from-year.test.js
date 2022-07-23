/* 
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
*/

function solution(year) {
  let centuryCount = 0;
  while (year > 0) {
    year -= 100;
    centuryCount += 1;
  }
  return centuryCount;
}

// or

// function solution(year) {
//   return Math.ceil(year / 100)
// }

describe('century from year', () => {
  it('should return 199 when 99 + 100', () => {
    expect(solution(1905)).toBe(20);
  });

  it('should return -2000 when -1000 + -1000', () => {
    expect(solution(374)).toBe(4);
  });
});
