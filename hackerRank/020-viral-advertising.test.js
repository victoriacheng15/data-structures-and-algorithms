function viralAdvertising(n) {
  // Write your code here
  let totalLikes = 0;
  let shared = 5;
  let like = 0;
  for (let i = 0; i < n; i += 1) {
    like = Math.floor(shared / 2);
    shared = like * 3;
    totalLikes += like;
  }
  return totalLikes;
}

describe('viral advertising', () => {
  it('should return cumulative number of likes basedon the provided days', () => {
    expect(viralAdvertising(3)).toBe(9);
    expect(viralAdvertising(4)).toBe(15);
  });
});
