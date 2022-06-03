function countTriplets(arr, r) {
  let count = 0;
  const map2 = {};
  const map3 = {};
  arr.forEach((num) => {
    if (map3[num]) count += map3[num];

    if (map2[num]) {
      map3[num * r] = map3[num * r] ? map3[num * r] + map2[num] : map2[num];
    }
    map2[num * r] = map2[num * r] ? map2[num * r] + 1 : 1;
  });

  return count;
}

describe('count triplets', () => {
  it('should return the amount of triplets', () => {
    expect(countTriplets([1, 2, 2, 4], 2)).toBe(2);
    // expect(countTriplets([1, 3, 9, 9, 27, 81], 3)).toBe(6);
    // expect(countTriplets([1, 5, 5, 25, 125], 5)).toBe(4);
  });
});
