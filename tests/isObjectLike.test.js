import isObjectLike from '../src/isObjectLike.js'

describe('isObjectLike', () => {
  test('Objects and arrays', () => {
    expect(isObjectLike({})).toBe(true)
    expect(isObjectLike([1,2,3])).toBe(true)
  })

  test('Function and null', () => {
    expect(isObjectLike(() => {})).toBe(false)
    expect(isObjectLike(null)).toBe(false)
  })
})