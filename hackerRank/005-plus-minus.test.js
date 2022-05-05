function plusMinus(arr) {
  const positive = arr.filter((num) => num > 0).length / arr.length;
  const negative = arr.filter((num) => num < 0).length / arr.length;
  const zero = arr.filter((num) => num === 0).length / arr.length;
  console.log(
    `${positive.toFixed(6)}\n${negative.toFixed(6)}\n${zero.toFixed(6)}`
  );
}

describe('plus minus', () => {
  it('returns the proportions of occurrence for postives, negative, and zeros', () => {
    const answers = [0.5, 0.333333, 0.166667];
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual(
      answers.forEach((answer) => console.log(`${answer.toFixed(6)}\n`))
    );
  });
});
