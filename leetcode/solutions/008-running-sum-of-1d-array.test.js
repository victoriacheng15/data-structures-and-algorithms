/**
 * @param {number[]} nums
 * @return {number[]}
 */

// const runningSum = function (nums) {
//   const result = [];
//   for (let i = 0; i < nums.length; i += 1) {
//     const arr = nums.slice(0, i + 1);
//     result.push(arr.reduce((acc, curr) => acc + curr, 0));
//   }
//   return result;
// };

const runningSum = function (nums) {
  return nums.map((num, index) => {
    if (index === 0) return num;
    const arr = nums.slice(0, index + 1);
    return arr.reduce((acc, curr) => acc + curr, 0);
  });
};

// 80 ms

describe('running sum', () => {
  it('should return [1,3,6,10] for [1,2,3,4]', () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  it('should return [3,4,6,16,17] for [3,1,2,10,1]', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
});
