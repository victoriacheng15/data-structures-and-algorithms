function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      aScore += 1;
    } else if (a[i] < b[i]) {
      bScore += 1;
    }
  }
  return [aScore, bScore];
}

describe('compare triplets', () => {
  it('returns the first and second scores based on inputs', () => {
    const a = [17, 28, 30];
    const b = [99, 16, 8];
    expect(compareTriplets(a, b)).toEqual([2, 1]);
  });
  it('returns the first and second scores based on inputs', () => {
    const a = [1, 2, 3];
    const b = [3, 2, 1];
    expect(compareTriplets(a, b)).toEqual([1, 1]);
  });
});
