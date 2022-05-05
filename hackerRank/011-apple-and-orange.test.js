function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const filtered = (value) => value >= s && value <= t;
  const appleCount = apples.map((n) => n + a).filter(filtered).length;
  const orangeCount = oranges.map((n) => n + b).filter(filtered).length;
  console.log(appleCount);
  console.log(orangeCount);
}

describe('count apples and oranges', () => {
  test('how many apples and oragnes?', () => {
    const appleArr = [2, 3, -4];
    const orangeArr = [3, -2, -4];
    const answer = [1, 2].forEach((count) => console.log(count));

    expect(countApplesAndOranges(7, 10, 4, 12, appleArr, orangeArr)).toEqual(
      answer
    );
  });
});
