import at from '../src/at.js'

describe('at', () => {
  test('returns specified elements', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, 'a[0].b.c', 'a[1]')).toEqual([3, 4])
  })
})