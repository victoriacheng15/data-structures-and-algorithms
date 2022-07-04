/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// const searchInsert = function (nums, target) {
//   nums.push(target);
//   const sorted = nums.sort((a, b) => a - b);
//   return sorted.indexOf(target);
// };

// 92ms

const searchInsert = function (nums, target) {
  const newArr = [...nums, target].sort((a, b) => a - b);
  return newArr.indexOf(target);
};

// 115ms

describe('search insert position', () => {
  it('should return position 2 when target = 5 and nums = [1, 3, 5, 6]', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it('should return position 2 when target = 2 and nums = [1, 3, 5, 6]', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it('should return position 2 when target = 7 and nums = [1, 3, 5, 6]', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
});
