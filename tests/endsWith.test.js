import endsWith from '../src/endsWith.js'

describe('endsWith', () => {
  test('checks if string ends with target', () => {
    expect(endsWith('stop','p')).toBe(true)
  })

  test('checks if string ends with target again', () => {
    expect(endsWith('stop','asdfasdfasdf')).toBe(false)
  })
})