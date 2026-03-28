import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
  test('Null and primitives', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(1)).toBe(true)
  })

  test('Arrays', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1,2,3])).toBe(false)
  })

  test('Strings', () => {
    expect(isEmpty('')).toBe(true)
    expect(isEmpty('abc')).toBe(false)
  })

  test('Objects', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
  })
})