import pipe from '../pipe'
import { expect, test } from 'vitest'

test('should throw an error when any arguments is not a function', () => {
  expect(pipe(123)).toThrow('pipe expects all arguments to be functions')
})

test('should return right result', () => {
  const fn = pipe(
    x => x + 1,
    y => y * 2
  )
  expect(fn(3)).eq(8)
})
