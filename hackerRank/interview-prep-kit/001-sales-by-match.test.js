function sockMerchant(n, ar) {
  const map = new Map();
  let pairs = 0;

  for (const elem of ar) {
    if (map.has(elem)) {
      pairs += 1;
      map.delete(elem);
    } else {
      map.set(elem, 1);
    }
  }
  return pairs;
}

describe('socks merchant', () => {
  test('1. find how many pairs of socks', () => {
    const array = [10, 20, 20, 10, 10, 30, 10, 20];
    expect(sockMerchant(9, array)).toEqual(3);
  });

  test('2. find how many pairs of socks', () => {
    const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
    expect(sockMerchant(10, array)).toEqual(4);
  });
});
