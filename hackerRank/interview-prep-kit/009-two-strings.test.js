function twoStrings(s1, s2) {
  const commonChar = {};
  for (const char of s1) {
    commonChar[char] = (commonChar[char] || 0) + 1;
  }
  for (const letter of s2) {
    if (commonChar[letter]) {
      return 'YES';
    }
  }
  return 'NO';
}

describe('two strings', () => {
  it('find common letters', () => {
    expect(twoStrings('hello', 'world')).toMatch('YES');
    expect(twoStrings('hi', 'world')).toMatch('NO');
    expect(twoStrings('jackandjill', 'wentupthehill')).toMatch('YES');
    expect(twoStrings('wouldyoulikefries', 'abcabcabcabcabcabc')).toMatch('NO');
  });
});
