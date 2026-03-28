import isBoolean from '../src/isBoolean.js'

describe('isBoolean', () => {
  test('returns true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  test('returns false for non-boolean values', () => {
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean('true')).toBe(false)
  })

  test('returns true for Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true)
  })
})