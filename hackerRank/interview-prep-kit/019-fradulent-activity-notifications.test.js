// function median(arr) {
//   const half = Math.floor(arr.length / 2);
//   if (arr.length % 2) return arr[half];
//   return (arr[half - 1] + arr[half]) / 2;
// }

// function activityNotifications(expenditure, d) {
//   let count = 0;
//   expenditure.map((_, i) => {
//     const arr = expenditure.slice(i, d + i).sort((a, b) => a - b);
//     const spent = expenditure[i + d];
//     const middle = median(arr);
//     if (spent >= middle * 2) count += 1;
//   });
//   return count;
// }

function getMedian(countArr, days) {
  let sum = 0;
  for (let i = 0; i < countArr.length; i += 1) {
    sum += countArr[i];
    if (sum * 2 === days) return i * 2 + 1;
    if (sum * 2 > days) return i * 2;
  }
}
function activityNotifications(expenditure, d) {
  const countArr = new Array(201).fill(0);
  let count = 0;
  for (let i = 0; i < d; i += 1) {
    countArr[expenditure[i]] += 1;
  }
  for (let i = d; i < expenditure.length; i += 1) {
    const medianx2 = getMedian(countArr, d);
    if (expenditure[i] >= medianx2) count += 1;
    if (i === expenditure.length - 1) break;
    countArr[expenditure[i - d]] -= 1;
    countArr[expenditure[i]] += 1;
  }
  return count;
}

describe('activity notifications', () => {
  it('should return num of notification', () => {
    expect(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)).toEqual(2);
    expect(activityNotifications([1, 2, 3, 4, 4], 4)).toEqual(0);
  });
});
