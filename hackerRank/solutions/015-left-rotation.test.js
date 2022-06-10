function rotateLeft(d, arr) {
  // Write your code here
  while (d) {
    arr.push(arr.shift());
    d -= 1;
  }
  return arr;
  // or
  // for (let i = 0; i < 4; i += 1) {
  //   arr.push(arr.shift());
  // }
  // return arr;
}

describe('rotate the array to left', () => {
  it('returns the array after rotated', () => {
    expect(rotateLeft(4, [1, 2, 3, 4, 5])).toEqual([5, 1, 2, 3, 4]);
  });
});
