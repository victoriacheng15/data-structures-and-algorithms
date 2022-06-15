// function largestPrime(input) {
//   let divisor = 2;
//   while (input > 1) {
//     if (input % divisor === 0) {
//       input /= divisor;
//     } else {
//       divisor += 1;
//     }
//   }
//   return divisor;
// }

function largestPrime(input) {
  let divisor = 2;
  while (input > 1) {
    !(input % divisor) ? (input /= divisor) : (divisor += 1);
  }
  return divisor;
}

const num = 600851475143;
console.log(largestPrime(num));

describe('find the largest prime factor', () => {
  it('should return the largest prime factor', () => {
    expect(largestPrime(13195)).toEqual(29);
    expect(largestPrime(num)).toBe(6857);
  });
});
