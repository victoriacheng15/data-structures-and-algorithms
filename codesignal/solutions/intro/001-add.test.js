// Write a function that returns the sum of two numbers.

function solution(param1, param2) {
  return param1 + param2;
}

describe('sum 2 numbers', () => {
  it('should return 199 when 99 + 100', () => {
    expect(solution(99, 100)).toBe(199);
  });

  it('should return -2000 when -1000 + -1000', () => {
    expect(solution(-1000, -1000)).toBe(-2000);
  });

  it('should return 1000 when 0 + 1000', () => {
    expect(solution(0, 1000)).toBe(1000);
  });
});
