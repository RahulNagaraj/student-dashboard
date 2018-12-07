export function findTotalMarks(marks) {
  return Object.values(marks).reduce((a, b) => a + b, 0)
}