import ceil from '../src/ceil.js'

describe('ceil', () => {
  test('ceil positive numbers', () => {
    expect(ceil(4.2)).toBe(5)
  })

  test('ceil negative numbers', () => {
    expect(ceil(-4.2)).toBe(-4)
  })
})