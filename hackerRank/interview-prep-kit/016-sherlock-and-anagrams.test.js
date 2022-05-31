function freqSum(acc, freq) {
  return acc + Math.floor(((freq - 1) * freq) / 2);
}

function sherlockAndAnagrams(s) {
  const freq = {};
  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j < s.length + 1; j += 1) {
      const an = s.slice(i, j).split('').sort().join('');
      freq[an] = freq[an] + 1 || 1;
    }
  }
  return Object.values(freq).reduce(freqSum, 0);
}

describe('sherlock and anagrams', () => {
  it('should return an integer of anagrammatic pairs', () => {
    expect(sherlockAndAnagrams('abba')).toBe(4);
    expect(sherlockAndAnagrams('abcd')).toBe(0);
    expect(sherlockAndAnagrams('ifailuhkqq')).toBe(3);
    expect(sherlockAndAnagrams('kkkk')).toBe(10);
  });
});
