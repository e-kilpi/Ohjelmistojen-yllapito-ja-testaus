import drop from '../src/drop.js'

describe('drop', () => {
  test('Drops first value on the list', () => {
    expect(drop([1,2,3])).toEqual([2,3])
  })
  test('Drops specified amount of values from the list', () => {
    expect(drop([1,2,3],2)).toEqual([3])
  })
  test('Works on a longer list', () => {
    expect(drop([1,2,3,4,5,6,7,8,9,10],5)).toEqual([6,7,8,9,10])
  })
})