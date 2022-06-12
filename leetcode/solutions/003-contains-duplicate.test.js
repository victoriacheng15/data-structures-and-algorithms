/**
 * @param {number[]} nums
 * @return {boolean}
 */

const start = performance.now();

// const containsDuplicate = function (nums) {
//   const counts = {};
//   for (const num of nums) {
//     if (num in counts) {
//       return true;
//     }
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   return false;
// };

// 141ms

// const containsDuplicate = function (nums) {
//   return new Set(nums).size !== nums.length;
// };

// 148ms

const containsDuplicate = function (nums) {
  const hash = new Set();
  for (const num of nums) {
    if (hash.has(num)) return true;
    hash.add(num);
  }
  return false;
};

// 77ms

describe('check for duplicate', () => {
  it('should return true if any values is at least twice in the araray', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    // expect(containsDuplicate([1, 2, 3, 1])).toEqual('');
  });

  it('should return false if any values only appears once', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  });
});
