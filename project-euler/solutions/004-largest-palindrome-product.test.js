// find largest palindrome product for 2 3-digit numbers
function isPalindrome(number) {
  return `${number}` === `${number}`.split('').reverse().join('');
}

function largestPalindrome() {
  let largest = 0;
  for (let i = 999; i > 900; i -= 1) {
    for (let j = 999; j > 900; j -= 1) {
      const product = i * j;
      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }
  return largest;
}

// console.log(largestPalindrome());

describe('find largest palindrome product', () => {
  it('should return the largest palindrome product', () => {
    expect(largestPalindrome()).toEqual(906609);
  });
});
