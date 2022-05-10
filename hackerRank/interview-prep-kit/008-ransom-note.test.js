function checkMagazine(magazine, note) {
  let commonWord = true;
  const magDict = {};
  for (const letter of magazine) {
    magDict[letter] = (magDict[letter] || 0) + 1;
  }

  for (const letter of note) {
    magDict[letter] = (magDict[letter] || 0) - 1;
  }

  for (const commonChars in magDict) {
    if (magDict[commonChars] < 0) commonWord = false;
  }

  return commonWord ? 'Yes' : 'No';
  // console.log(commonWord ? 'Yes' : 'No');
}

describe('check magazine', () => {
  test('which one, Yes or No', () => {
    expect(
      checkMagazine('give me one grand today night', 'give one grand today')
    ).toMatch('Yes');

    expect(
      checkMagazine('two times three is not four', 'two times two is four')
    ).toMatch('No');
  });
});

// function checkMagazine(magazine, note) {
//   const magArr = magazine.split(' ');
//   const noteArr = note.split(' ');
//   let commonWord = true;
//   const magDict = {};

//   magArr.forEach((word) => {
//     if (!magDict[word]) {
//       magDict[word] = (magDict[word] || 0) + 1;
//     }
//   });

//   noteArr.forEach((word) => {
//     if (magDict[word]) {
//       magDict[word] -= 1;
//       if (magDict[word] < 0) commonWord = false;
//     } else {
//       commonWord = false;
//     }
//   });

//   return commonWord ? 'Yes' : 'No';
// }
