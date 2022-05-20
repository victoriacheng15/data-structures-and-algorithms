function birthday(s, d, m) {
  let count = 0;
  // for (let i = 0; i < s.length; i += 1) {
  //   const arr = s.slice(i, m + i);
  //   const condition = arr.reduce((acc, curr) => acc + curr, 0) === d;
  //   if (condition) count += 1;
  // }
  s.map((_, index) => {
    const arr = s.slice(index, m + index);
    if (arr.reduce((acc, curr) => acc + curr, 0) === d) count += 1;
  });
  return count;
}

describe('birthday', () => {
  it('should return how many squares', () => {
    expect(birthday([1, 2, 1, 3, 2], 3, 2)).toEqual(2);
    expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toEqual(0);
    expect(birthday([4], 4, 1)).toEqual(1);
  });
});
