import difference from '../src/difference.js'

describe('difference', () => {
  test('returns elements not in other array', () => {
    expect(difference([1,2,3], [2,3,4])).toEqual([1])
  })
})