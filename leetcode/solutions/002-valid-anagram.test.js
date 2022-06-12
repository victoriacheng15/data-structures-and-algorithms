// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */

// const isAnagram = function (s, t) {
//   const sortedStr = [...s].sort().join();
//   const sortedStr2 = [...t].sort().join();
//   return sortedStr === sortedStr2;
// };

// 115ms

const isAnagram = function (s, t) {
  const map = {};

  if (s.length !== t.length) return false;

  for (const letter of s) {
    map[letter] ? (map[letter] += 1) : (map[letter] = 1);
  }

  for (const char of t) {
    if (map[char]) {
      map[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

// 88ms

describe('check for anagram', () => {
  it('should return true if all letters are the same', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  it('should return false if one letter is different', () => {
    expect(isAnagram('rat', 'car')).toBeFalsy();
    expect(isAnagram('aacc', 'ccac')).toBeFalsy();
    expect(isAnagram('aa', 'bb')).toBeFalsy();
  });
});
