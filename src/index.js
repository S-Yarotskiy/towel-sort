
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  matrix.map(function (item, i) {
    if (i%2 != 0) item.reverse()
  });
  return matrix.flat()
  
}
