/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = function (nums, k) {
  const count = {};
  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  const sortedCount = [...Object.entries(count)].sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let i = 0; i < k; i += 1) {
    result.push(+sortedCount[i][0]);
  }
  return result;
};

describe('top k frequent', () => {
  it('returns the most frequent elements based on provided k', () => {
    expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([2, -1]);
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
