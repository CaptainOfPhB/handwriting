function pipe(...fns) {
  return function (initial) {
    return fns.reduce((acc, curr) => {
      if (typeof curr !== 'function') {
        throw new Error('pipe expects all arguments to be functions')
      }
      return curr(acc)
    }, initial)
  }
}

module.exports = pipe
