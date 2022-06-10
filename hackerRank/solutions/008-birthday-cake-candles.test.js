function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles);
  return candles.filter((unit) => unit === tallest).length;
}

describe('birthday cake candles', () => {
  test('get the maximum height from the array', () => {
    expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
  });
});
