# Data Strcutures and Algorithms in JavaScript

This a repo contains all my solutions for Hacker Rank and LeetCode.

In general, the file will contains the solution and a Jest testing and the file name will start with number and the problem name, i.e. `001-simple-array-sum.test.js`

Example:

```js
// Solution
function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}

// Test case
describe('simple array sum', () => {
  it('returns the sum of provided array', () => {
    const array = [1, 2, 3, 4, 10, 11];
    expect(simpleArraySum(array)).toEqual(31);
  });
});
```

## Solutions Link

[Hacker Rank](/hackerRank/hackerRank.md)

[LeetCode](/leetcode/leetcode.md)

[Project Euler](/project-euler/project-euler.md)

## DS & Algo Note Links

WIP