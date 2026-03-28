import isDate from '../src/isDate.js'

describe('isDate', () => {
  test('Date object returns true', () => {
    expect(isDate(new Date())).toBe(true)
  })

  test('string returns false', () => {
    expect(isDate('Fri March 27 2026')).toBe(false)
  })
})