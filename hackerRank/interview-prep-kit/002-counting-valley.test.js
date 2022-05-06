function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let level = 0;
  for (let i = 0; i < steps; i += 1) {
    if (path[i] === 'U') {
      level += 1;
      if (level === 0) count += 1;
    } else {
      level -= 1;
    }
  }
  return count;
}

describe('counting valleys', () => {
  test('counting how many steps', () => {
    expect(countingValleys(8, 'UDDDUDUU')).toEqual(1);
  });

  test('counting how many steps', () => {
    expect(countingValleys(12, 'DDUUDDUDUUUD')).toEqual(2);
  });
});
