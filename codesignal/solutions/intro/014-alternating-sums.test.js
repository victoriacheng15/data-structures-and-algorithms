/* 
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
*/

function solution(a) {
  const team1 = [];
  const team2 = [];
  for (let i = 0; i < a.length; i += 1) {
    const elem = a[i];
    i % 2 ? team2.push(elem) : team1.push(elem);
  }

  const sum = (arr) => arr.reduce((total, num) => total + num, 0);
  return [sum(team1), sum(team2)];
}

describe('alternating sum', () => {
  it('should return two sums in array', () => {
    expect(solution([50, 60, 60, 45, 70])).toEqual([180, 105]);
  });

  it('should return two sums in array', () => {
    expect(solution([100, 50, 50, 100])).toEqual([150, 150]);
  });
});
