const { averageExams, isStudentPassExam } = require('./gradeCalculations');

describe('grade calculations', () => {
test("it should return exact average", () => {
  const listValueOfExamps = [80, 100, 100, 80];
  expect(averageExams(listValueOfExamps)).toEqual(90);
});
test("it should return exam passed status", () => {
  const listValueOfExamps = [80, 100, 100, 80];
  expect(isStudentPassExam(listValueOfExamps, "Budi")).toEqual(true);
});
test("it should return exact average", () => {
  const listValueOfExamps = [50, 40, 70, 80];
  expect(isStudentPassExam(listValueOfExamps, "Budi")).toEqual(false);
});

})

// test('it should handle non-number', () => {
//     const listValueOfExamps2 = [80,100,100, 80];
//     expect(() => averageExams(listValueOfExamps2)).toThrow();
// });