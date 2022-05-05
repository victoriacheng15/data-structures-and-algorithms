function gradingStudents(grades) {
  const grading = grades.map((grade) => {
    if (grade < 38) return grade;
    return grade % 5 < 3 ? grade : grade + (5 - (grade % 5));
  });
  return grading;
}

describe('grading students', () => {
  test('grades array', () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
  });
});
