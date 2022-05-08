function jumpingOnClouds(c) {
  // Write your code here
  let jump = 0;
  let currentIndex = 0;
  while (currentIndex < c.length - 1) {
    if (c[currentIndex + 2] === 0) {
      jump += 1;
      currentIndex += 2;
    } else {
      jump += 1;
      currentIndex += 1;
    }
  }
  return jump;
}

describe('jumping on clouds', () => {
  test('how many jump?', () => {
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toEqual(4);
    expect(jumpingOnClouds([0, 0, 0, 1, 0, 0])).toEqual(3);
  });
});
