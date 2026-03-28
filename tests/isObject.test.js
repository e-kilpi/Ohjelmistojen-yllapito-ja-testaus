import isObject from '../src/isObject.js'

describe('isObject', () => {
  test('Objects and arrays', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([1,2,3])).toBe(true)
  })

  test('Functions', () => {
    expect(isObject(() => {})).toBe(true)
  })

  test('Null and primitives', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(5)).toBe(false)
  })
})