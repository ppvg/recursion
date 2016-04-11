module.exports = function flatten (input) {
  var output = []
  input.forEach(function (element) {
    if (Array.isArray(element)) {
      output = output.concat(flatten(element))
    } else {
      output.push(element)
    }
  })
  return output
}
