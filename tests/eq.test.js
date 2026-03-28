import eq from '../src/eq.js'

describe('eq', () => {
  test('compares values for equality', () => {
    expect(eq(1,1)).toBe(true)
  })
  test('compares value and a string for equality', () => {
    expect(eq(1,'1')).toBe(true)
  })
  test('compares non-values for equality', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })
})