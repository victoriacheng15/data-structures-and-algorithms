function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return 'NO';
  const condition = Math.abs((x1 - x2) % (v2 - v1)) === 0;
  return condition ? 'YES' : 'NO';
}

describe('kangroo jump', () => {
  test('are both kangroos landing on the same location?', () => {
    expect(kangaroo(0, 3, 4, 2)).toMatch('YES');
    expect(kangaroo(0, 2, 5, 3)).toMatch('NO');
  });
});
