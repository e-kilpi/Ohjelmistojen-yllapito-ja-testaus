import get from '../src/get.js'

describe('get', () => {
  const obj = { a: [{ b: { c: 3 } }] }

  test('get using string path', () => {
    expect(get(obj, 'a[0].b.c')).toBe(3)
  })

  test('get using array path', () => {
    expect(get(obj, ['a','0','b','c'])).toBe(3)
  })

  test('get with default value', () => {
    expect(get(obj, 'a.b.c', 'default')).toBe('default')
  })
})