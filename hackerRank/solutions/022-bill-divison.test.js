/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  const totalBill = bill
    .filter((_, index) => !(index === k))
    .reduce((acc, curr) => acc + curr, 0);
  const isOvercharge = b - totalBill / 2;
  return isOvercharge || 'Bon Appetit';
  // console.log(isOvercharge || 'Bon Appetit');
}

describe('bill division', () => {
  it('should return the overcharge amout', () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 12)).toEqual(5);
    expect(bonAppetit([3, 10, 2, 9], 1, 7)).toMatch('Bon Appetit');
  });
});
