/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = function (s, t) {
  if (s === null || t === null || s.length !== t.length) return false;
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i += 1) {
    const sChar = s[i];
    const tChar = t[i];
    if (sMap[sChar] !== tMap[tChar]) return false;

    sMap[sChar] = i + 1;
    tMap[tChar] = i + 1;
  }
  return true;
};

// 134ms

describe('isomophic strings', () => {
  it('should return true', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });

  it('should return false', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });
});
