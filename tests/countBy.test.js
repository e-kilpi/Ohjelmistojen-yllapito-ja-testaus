import countBy from '../src/countBy.js'

describe('countBy', () => {
  test('counts values with Math.floor-function', () => {
    const arr = [6.1, 4.2, 6.3]
    expect(countBy(arr, Math.floor)).toEqual({ '4': 0, '6': 1 })
  })
})