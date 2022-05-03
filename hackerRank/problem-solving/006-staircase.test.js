function staircase(n) {
  for (let i = 1; i <= n; i += 1) {
    const empty = ' '.repeat(n - i);
    const hash = '#'.repeat(i);
    console.log(`${empty}${hash}`);
  }
}

describe('make staircases', () => {
  it('returns # based on the input of 6', () => {
    const stairs = ['     #', '    ##', '   ###', '  ####', ' #####', '######'];
    expect(staircase(6)).toEqual(
      stairs.forEach((stair) => console.log(`${stair}\n`))
    );
  });

  it('returns # based on the input of 4', () => {
    const stairs = ['   #', '  ##', ' ###', '####'];
    expect(staircase(4)).toEqual(
      stairs.forEach((stair) => console.log(`${stair}\n`))
    );
  });
});
