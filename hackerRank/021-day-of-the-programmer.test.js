function dayOfProgrammer(year) {
  // Write your code here
  let days = 0;
  if (year < 1918) {
    days = year % 4 === 0 ? 244 : 243;
    return `${256 - days}.09.${year}`;
  }
  if (year > 1918) {
    // use new Date method (this wont work before 1918+)
    const leap = new Date(year, 1, 29).getDate() === 29;
    return leap ? `12.09.${year}` : `13.09.${year}`;
    // or this method
    // days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 244 : 243;
    // return `${256 - days}.09.${year}`;
  }
  return '26.09.1918';
}

describe('day of the programmer', () => {
  it('should return 12.09 with the year', () => {
    expect(dayOfProgrammer(2016)).toMatch('12.09.2016');
    expect(dayOfProgrammer(1800)).toMatch('12.09.1800');
  });
  it('should return 13.09 with the year', () => {
    expect(dayOfProgrammer(2017)).toMatch('13.09.2017');
  });
});
