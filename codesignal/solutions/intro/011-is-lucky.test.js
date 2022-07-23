/* 
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half
*/

function sum(num) {
  let total = 0;
  while (num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }
  return total;
}
function solution(n) {
  const { length } = `${n}`;
  const half = length / 2;
  const first = +`${n}`.slice(0, half);
  const second = +`${n}`.slice(half, length);
  return sum(first) === sum(second);
}

describe('is lucky?', () => {
  it('should return a boolean value', () => {
    expect(solution(1230)).toBe(true);
  });

  it('should return a boolean value', () => {
    expect(solution(261534)).toBe(false);
  });
});
