function hourglassSum(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]; // first row
      sum += arr[i + 1][j + 1]; // 2nd row
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]; // 3rd row
      if (maxSum < sum) maxSum = sum;
    }
  }
  return maxSum;
}

describe('hourglass sum', () => {
  test('sum all numbers based on hourglass shape', () => {
    const hourglass = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];
    expect(hourglassSum(hourglass)).toEqual(19);
  });
  test('for negative numbers', () => {
    const hourglass1 = [
      [-1, -1, 0, -9, -2, -2],
      [-2, -1, -6, -8, -2, -5],
      [-1, -1, -1, -2, -3, -4],
      [-1, -9, -2, -4, -4, -5],
      [-7, -3, -3, -2, -9, -9],
      [-1, -3, -1, -2, -4, -5],
    ];
    expect(hourglassSum(hourglass1)).toEqual(-6);
  });
});
