/* 
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
*/

function solution(picture) {
  const output = ['', ...picture, ''];
  const len = picture[0].length;
  return output.map((elem) =>
    elem === '' ? '*'.repeat(len + 2) : `*${elem}*`
  );
}

describe('add border', () => {
  it('should return new border in array format', () => {
    expect(solution(['abc', 'ded'])).toEqual([
      '*****',
      '*abc*',
      '*ded*',
      '*****',
    ]);
  });

  it('should return new border in array format', () => {
    expect(solution(['aa', '**', 'zz'])).toEqual([
      '****',
      '*aa*',
      '****',
      '*zz*',
      '****',
    ]);
  });
});
