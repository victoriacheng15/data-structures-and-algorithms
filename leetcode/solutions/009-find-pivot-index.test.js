/**
 * @param {number[]} nums
 * @return {number}
 */

// const pivotIndex = function (nums) {
//   if (!nums.length) return -1;
//   let totalSum = 0;
//   for (const n of nums) totalSum += n;

//   let leftSum = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     if (leftSum === totalSum - leftSum - nums[i]) return i;
//     leftSum += nums[i];
//   }
//   return -1;
// };

// 132ms

// use halfSum method
const pivotIndex = function (nums) {
  const halfSum = nums.reduce((acc, curr) => acc + curr, 0) / 2;
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    const n = nums[i];
    if (sum === halfSum - n / 2) return i;
    sum += n;
  }
  return -1;
};

// 129ms

describe('find pivot index', () => {
  it('should return pivot index', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });

  it('should return -1', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });

  it('should return 0', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });
});
