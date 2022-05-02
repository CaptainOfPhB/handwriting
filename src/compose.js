function compose(...fns) {
  return initial => fns.reverse().reduce((acc, curr) => {
    if (typeof curr !== 'function') {
      throw new Error('compose expects all arguments to be functions')
    }
    return curr(acc)
  }, initial)
}

module.exports = compose
