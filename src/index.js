
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sum = []
  
  if (matrix === undefined) return []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      i % 2 === 0
      ? sum.push(matrix[i][j])
      : sum.push(matrix[i][matrix[i].length - j - 1])
    }
  }
  return sum

}
