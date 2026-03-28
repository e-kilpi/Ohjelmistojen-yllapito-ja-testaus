import isSymbol from '../src/isSymbol.js'

describe('isSymbol', () => {
  test('Symbol primitive', () => {
    expect(isSymbol(Symbol('a'))).toBe(true)
  })

  test('Non-symbol values', () => {
    expect(isSymbol('abc')).toBe(false)
    expect(isSymbol(123)).toBe(false)
  })
})