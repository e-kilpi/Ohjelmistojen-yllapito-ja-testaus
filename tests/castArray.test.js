import castArray from '../src/castArray.js'

describe('castArray', () => {
  test('wraps non-array in array', () => {
    expect(castArray(5)).toEqual([5])
  })

  test('returns array as-is', () => {
    expect(castArray([1,2])).toEqual([1,2])
  })

  test('handles undefined', () => {
    expect(castArray()).toEqual([undefined])
  })
})