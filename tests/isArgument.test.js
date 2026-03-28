import isArguments from '../src/isArguments.js'

describe('isArguments', () => {
  test('arguments object returns true', () => {
    function fn() { return arguments }
    expect(isArguments(fn(1,2,3))).toBe(true)
  })

  test('array returns false', () => {
    expect(isArguments([1,2,3])).toBe(false)
  })
})