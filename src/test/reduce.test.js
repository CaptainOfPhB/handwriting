import '../reduce'
import { test, expect } from 'vitest'

test('should throw an error when callback is empty', () => {
  expect(() => [].reduce()).toThrow('reduce requires at least one argument')
})

test('should throw an error when callback is not a function', () => {
  expect(() => [].reduce(123)).toThrow('reduce requires a function as its first argument')
})

test('should return right result when initial value is empty', () => {
  const result = [1, 2, 3].reduce((acc, curr) => acc + curr)
  expect(result).eq(6)
})

test('should return right result when initial value passed', () => {
  const result = [1, 2, 3].reduce((acc, curr) => acc + curr, 1)
  expect(result).eq(7)
})

test('array arguments is constant', () => {
  const arr = [1, 2, 3]
  const result = arr.reduce((acc, curr, idx, _arr) => {
    expect(_arr).toStrictEqual(arr)
    _arr[idx + 1] = acc + 10
    return acc + curr
  })
  expect(result).eq(6)
})
