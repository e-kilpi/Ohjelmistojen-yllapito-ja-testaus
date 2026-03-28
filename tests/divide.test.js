import divide from '../src/divide.js'

describe('divide', () => {
  test('divides numbers', () => {
    expect(divide(6,3)).toBe(2)
  })

  test('divide by zero', () => {
    expect(divide(6,0)).toBe(NaN)
  })

  test('divide string by a number', () => {
    expect(divide("20",2)).toBe(10)
  })
})