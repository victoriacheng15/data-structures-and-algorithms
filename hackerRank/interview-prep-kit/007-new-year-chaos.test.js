function minimumBribes(q) {
  // Write your code here
  let bribe = 0;
  let chaotic = false;
  for (let i = q.length - 1; i >= 0; i -= 1) {
    if (q[i] - i > 3) chaotic = true;
    for (let j = q[i] - 2; j < i; j += 1) {
      if (q[j] > q[i]) bribe += 1;
    }
  }
  return chaotic ? 'Too chaotic' : bribe;
  // return chaotic ? console.log('Too chaotic') : console.log(bribe);
}

describe('minimum bribes', () => {
  test('how many bribes?', () => {
    expect(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])).toBe(1);
    expect(minimumBribes([4, 1, 2, 3])).toMatch('Too chaotic');
  });
});
