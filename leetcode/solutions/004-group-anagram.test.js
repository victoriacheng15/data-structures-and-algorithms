/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function (strs) {
  const map = {};
  for (const word of strs) {
    const key = [...word].sort().join('');
    !map[key] ? (map[key] = [word]) : map[key].push(word);
  }
  return Object.values(map);
};

// 124ms

describe('group anagrams', () => {
  it('should return an array with groups od anagrams', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
  });

  it('should return a empty string in the array', () => {
    expect(groupAnagrams([''])).toEqual([['']]);
  });
});
