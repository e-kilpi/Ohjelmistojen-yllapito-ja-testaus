import isLength from '../src/isLength.js'

describe('isLength', () => {
  test('Valid lengths', () => {
    expect(isLength(0)).toBe(true)
    expect(isLength(3)).toBe(true)
  })

  test('Invalid lengths', () => {
    expect(isLength(-1)).toBe(false)
    expect(isLength('3')).toBe(false)
  })
})