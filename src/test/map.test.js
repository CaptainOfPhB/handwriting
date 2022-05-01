import '../map'
import { expect, test } from 'vitest'

test('should throw an error when callback is empty', () => {
  expect(() => [].map()).toThrow('map requires at least one argument')
})

test('should throw an error when callback is not a function', () => {
  expect(() => [].map(123)).toThrow('map requires a function as first argument')
})

test('should return right result', () => {
  const result = [1, 2, 3].map(Math.pow)
  expect(result).toStrictEqual([1, 2, 9])
})

test('the second parameter thisArg should take effect', () => {
  const thisArg = 2
  const result = [1, 2, 3].map(function iterator(item) {
    return item * this
  }, thisArg)
  expect(result).toStrictEqual([2, 4, 6])
})

test('array arguments is constant', () => {
  const arr = [1, 2, 3]
  const result = arr.map(function (item, idx, _arr) {
    expect(_arr).toStrictEqual(arr)
    _arr[idx + 1] = item + 10
    return item * this
  }, 2)
  expect(result).toStrictEqual([2, 4, 6])
})


