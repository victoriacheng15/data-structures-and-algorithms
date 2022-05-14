function makeAnagram(a, b) {
  // Write your code here
  const freqs = {};
  for (const letter of [...a]) {
    freqs[letter] = (freqs[letter] || 0) + 1;
  }
  for (const letter of [...b]) {
    freqs[letter] = (freqs[letter] || 0) - 1;
  }
  const addCalc = (acc, count) => acc + Math.abs(freqs[count]);
  return Object.keys(freqs).reduce(addCalc, 0);
}

describe('making anagram', () => {
  it('how many deletions need?', () => {
    expect(makeAnagram('cde', 'abc')).toBe(4);
    expect(
      makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
    ).toBe(30);
    expect(makeAnagram('showman', 'woman')).toBe(2);
  });
});
