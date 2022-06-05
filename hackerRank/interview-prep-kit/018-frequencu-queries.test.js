function freqQuery(queries) {
  const result = [];
  const hash = {};
  const freq = [];
  queries.forEach((arr) => {
    const [op, value] = arr;
    const initValue = hash[value] || 0;

    if (op === 1) {
      hash[value] = initValue + 1;

      freq[initValue] = (freq[initValue] || 0) - 1;
      freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
    }

    if (op === 2 && initValue > 0) {
      hash[value] = initValue - 1;

      freq[initValue - 1] += 1;
      freq[initValue] -= 1;
    }

    if (op === 3) result.push(freq[value] > 0 ? 1 : 0);
  });
  // return { hash, freq, result };
  return result;
}

describe('frequency queries', () => {
  it('should return something', () => {
    const arr = [
      [1, 5],
      [1, 6],
      [3, 2],
      [1, 10],
      [1, 10],
      [1, 6],
      [2, 5],
      [3, 2],
    ];
    expect(freqQuery(arr)).toEqual([0, 1]);
    const arr1 = [
      [3, 4],
      [2, 1003],
      [1, 16],
      [3, 1],
    ];
    expect(freqQuery(arr1)).toEqual([0, 1]);
  });
});
