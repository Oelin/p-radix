module.exports = function(number, size) {
  return number.toString(2).padStart(size, 0).split('')
}
