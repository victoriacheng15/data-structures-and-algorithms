function timeConversion(s) {
  const arr = s.slice(0, 8).split(':');
  if (s.includes('PM')) {
    arr[0] = arr[0] === '12' ? '12' : +arr[0] + 12;
  } else {
    arr[0] = arr[0] === '12' ? '00' : arr[0];
  }
  return arr.join(':');
}

describe('time conversion', () => {
  test('convert 12 hours to 24 hours format', () => {
    expect(timeConversion('12:01:40AM')).toMatch('00:01:40');
    expect(timeConversion('06:40:35AM')).toMatch('06:40:35');
  });

  test('convert 12 hours to 24 hours format', () => {
    expect(timeConversion('12:05:55PM')).toMatch('12:05:55');
    expect(timeConversion('07:05:45PM')).toMatch('19:05:45');
  });
});
