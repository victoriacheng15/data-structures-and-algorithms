/* 
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function solution(inputArray) {
  let largest = -Infinity;
  for (let i = 1; i < inputArray.length; i += 1) {
    const product = inputArray[i] * inputArray[i - 1];
    if (largest < product) largest = product;
  }
  return largest;
}

// or
// function solution(inputArray) {
//   let prod = inputArray[0] * inputArray[1];

//   for (let i = 1; i < inputArray.length - 1; i++) {
//     prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
//   }

//   return prod;
// }

// function solution(arr) {
//   return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
// }

describe('adjacent element product', () => {
  it('should return the largest product', () => {
    expect(solution([3, 6, -2, -5, 7, 3])).toBe(21);
  });

  it('should return the largest product', () => {
    expect(solution([9, 5, 10, 2, 24, -1, -48])).toBe(50);
  });
});
