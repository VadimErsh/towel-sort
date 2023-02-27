module.exports = function towelSort (matrix) {
  return Array.isArray(matrix) ? matrix.map( (el, i) => i % 2 !== 0 ? el.reverse() : el).flat() : []
}
