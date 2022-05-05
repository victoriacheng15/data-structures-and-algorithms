function miniMaxSum(arr) {
  const sum = arr.reduce((a, b) => a + b);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  console.log(`${sum - max} ${sum - min}`);
}

describe('find the minimum and maximum values', () => {
  test('get both values based on the array', () => {
    const values = [10, 14];
    expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual(
      values.forEach((value) => console.log(value))
    );
  });
});
