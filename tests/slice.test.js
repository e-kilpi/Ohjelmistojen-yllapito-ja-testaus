import slice from '../src/slice.js'

describe('slice', () => {
  const arr = [1,2,3,4]

  test('basic slice', () => {
    expect(slice(arr, 1, 3)).toEqual([2,3])
  })

  test('negative start', () => {
    expect(slice(arr, -2)).toEqual([3,4])
  })

  test('empty result', () => {
    expect(slice(arr, 3, 1)).toEqual([])
  })
})