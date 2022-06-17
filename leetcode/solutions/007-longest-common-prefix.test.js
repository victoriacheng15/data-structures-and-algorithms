/**
 * @param {string[]} strs
 * @return {string}
 */

// const longestCommonPrefix = function (strs) {
//   let index = 0;
//   const firstWord = strs[0];
//   const checkStr = (string) => firstWord[index] === string[index];
//   while (strs.every(checkStr)) {
//     index += 1;
//   }

//   return firstWord.slice(0, index);
// };

// Time Limit Exceeded

const longestCommonPrefix = function (strs) {
  let commonPrefix = '';
  for (let i = 0; i <= strs[0].length; i += 1) {
    if (strs.every((str) => str.slice(0, i) === strs[0].slice(0, i))) {
      commonPrefix = strs[0].slice(0, i);
    }
  }

  return commonPrefix;
};

// 57ms

describe('longest common prefix', () => {
  it('should return the same letters from the array', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefix(['a'])).toEqual('a');
  });

  it('should return emtpy string', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });
});
