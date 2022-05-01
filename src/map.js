function map(callback, thisArg) {
  if (callback === undefined) {
    throw new Error('map requires at least one argument')
  }
  if (typeof callback !== 'function') {
    throw new Error('map requires a function as first argument')
  }
  const _callback = callback.bind(thisArg)
  let result = []
  for (let index = 0; index < this.length; index++) {
    const _this = Array.from(this)
    result.push(_callback(this[index], index, _this))
  }
  return result
}

Array.prototype.map = map

module.exports = map
