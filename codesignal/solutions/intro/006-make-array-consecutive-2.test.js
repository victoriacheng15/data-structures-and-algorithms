/* 
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed
*/

function solution(statues) {
  let total = 0;
  statues.sort((a, b) => a - b);
  for (let i = 0; i < statues.length; i += 1) {
    const diff = statues[i + 1] - statues[i];
    if (diff > 1) {
      total += diff - 1;
    }
  }
  return total;
}

// or
// function solution(sequence) {
//   return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
// }

describe('make array consective', () => {
  it('should return the amount of missing numbers', () => {
    expect(solution([6, 2, 3, 8])).toBe(3);
  });

  it('should return the amount of missing numbers', () => {
    expect(solution([0, 3])).toBe(2);
  });
});
