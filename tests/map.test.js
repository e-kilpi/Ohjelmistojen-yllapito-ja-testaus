import map from '../src/map.js'

describe('map', () => {
  test('Maps values correctly', () => {
    const result = map([1,2,3], x => x * 2)
    expect(result).toEqual([2,4,6])
  })

  test('Empty array', () => {
    expect(map([], x => x)).toEqual([])
  })
})