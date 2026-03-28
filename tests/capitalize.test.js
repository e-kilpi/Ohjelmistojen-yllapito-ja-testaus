import capitalize from '../src/capitalize.js'

describe('capitalize', () => {
  test('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('Hello')).toBe('Hello')
  })

  test('should handle numbers in a string', () => {
    expect(capitalize('123')).toBe('123');
  })
})