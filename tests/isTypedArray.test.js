import isTypedArray from '../src/isTypedArray.js'

describe('isTypedArray', () => {
  test('Typed arrays', () => {
    expect(isTypedArray(new Uint8Array())).toBe(true)
  })

  test('Non-typed arrays', () => {
    expect(isTypedArray([1,2,3])).toBe(false)
  })
})