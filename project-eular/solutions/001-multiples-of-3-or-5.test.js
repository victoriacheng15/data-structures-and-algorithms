function addAllNum(number) {
  const array = [...new Array(number - 1).keys()].map((num) => num + 1);
  return array.reduce((acc, curr) => {
    if (curr % 3 === 0 || curr % 5 === 0) acc += curr;
    return acc;
  }, 0);
}

describe('add all num', () => {
  it('should return the sum of multiple 3 or 5 below the parameter', () => {
    expect(addAllNum(10)).toBe(23);
    expect(addAllNum(1000)).toBe(233168);
  });
});

/* 
  const array = [...Array(num - 1).keys()];
  return array
    .map((index) => index + 1)
    .filter((number) => number % 3 === 0 || number % 5 === 0)
    .reduce((acc, total) => acc + total, 0);
*/
