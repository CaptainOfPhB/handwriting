import compose from '../compose'
import { expect, test } from 'vitest'

test('should throw an error when any arguments is not a function', () => {
  expect(compose(123)).toThrow('compose expects all arguments to be functions')
})

test('should return right result', () => {
  const fn = compose(
    x => x + 1,
    y => y * 2
  )
  expect(fn(3)).eq(7)
})
