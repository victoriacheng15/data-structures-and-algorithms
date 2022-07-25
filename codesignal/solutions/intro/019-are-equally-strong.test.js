function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
  );
}

describe('status', () => {
  it('should return 2', () => {
    expect(solution(10, 15, 15, 10)).toBe(true);
  });

  it('should return 2', () => {
    expect(solution(10, 15, 5, 20)).toBe(false);
  });
});
