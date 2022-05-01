function reduce() {
  if (arguments[0] === undefined) {
    throw new Error('reduce requires at least one argument')
  }
  if (typeof arguments[0] !== 'function') {
    throw new Error('reduce requires a function as its first argument')
  }

  const callback = arguments[0]
  const hasInitialValue = arguments.length > 1

  let result = hasInitialValue ? arguments[1] : this[0]
  for (let index = 0; index < this.length; index++) {
    if (!hasInitialValue && index === 0) {
      continue
    }
    result = callback(result, this[index], index)
  }
  return result
}

Array.prototype.reduce = reduce

module.exports = reduce
