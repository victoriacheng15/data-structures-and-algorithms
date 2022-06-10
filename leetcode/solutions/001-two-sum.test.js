/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
};

describe('two sum', () => {
  it('should return an array of numbers', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
