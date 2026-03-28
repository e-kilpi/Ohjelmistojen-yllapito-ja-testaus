import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
  test('lowercase string', () => {
    expect(upperFirst('fred')).toBe('Fred')
  })

  test('already uppercase', () => {
    expect(upperFirst('FRED')).toBe('FRED')
  })
})