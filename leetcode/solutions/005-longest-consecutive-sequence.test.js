/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} nums
 * @return {number}
 */
// const longestConsecutive = function (nums) {
//   if (!nums.length) return 0;
//   const sorted = nums.sort((a, b) => a - b);
//   let longestStreak = 1;
//   let prev = sorted[0];
//   let cur = 1;
//   for (const num of sorted) {
//     if (num === prev + 1) {
//       cur += 1;
//     } else if (num !== prev) {
//       cur = 1;
//     }
//     prev = num;
//     longestStreak = Math.max(longestStreak, cur);
//   }
//   return longestStreak;
// };

// 147ms

// const longestConsecutive = function (nums) {
//   const set = new Set(nums);
//   let longest = 0;
//   for (const num of nums) {
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let currentStreak = 1;
//       while (set.has(currentNum + 1)) {
//         currentNum += 1;
//         currentStreak += 1;
//       }
//       longest = Math.max(longest, currentStreak);
//     }
//   }
//   return longest;
// };

// 657ms

const longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    let currLen = 1;
    let currNum = num;
    if (!set.has(num - 1)) {
      while (set.has(currNum + 1)) {
        currLen += 1;
        currNum += 1;
      }
    }
    longest = Math.max(currLen, longest);
  }
  return longest;
};

// 106ms

describe('find the longest consecutive sequence', () => {
  it('should return the length of longest consecutive sequence', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
    expect(longestConsecutive([])).toBe(0);
    expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])).toBe(7);
  });
});
