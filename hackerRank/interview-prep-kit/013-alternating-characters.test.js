function alternatingCharacters(s) {
  // Write your code here
  return [...s].reduce((acc, _, index, array) => {
    const next = array[index + 1];
    if (array[index] === next) {
      acc += 1;
    }
    return acc;
  }, 0);
}

describe('alternating character', () => {
  it('no match adjacent characters', () => {
    expect(alternatingCharacters('AAAA')).toBe(3);
    expect(alternatingCharacters('ABABABAB')).toBe(0);
    expect(alternatingCharacters('AAABBB')).toBe(4);
  });
});
