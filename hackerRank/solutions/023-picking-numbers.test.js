function pickingNumbers(a) {
  let longestArr = 0;
  a.forEach((num) => {
    const subArr = a.filter((subNum) => {
      const condtion = num - subNum;
      return condtion === 0 || condtion === 1;
    });
    if (subArr.length > longestArr) longestArr = subArr.length;
  });
  return longestArr;
}

describe('picking numbers', () => {
  it('count any 2 elements is less than or equal to 1', () => {
    expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
    expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toBe(5);
  });
});
