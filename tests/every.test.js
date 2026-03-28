import every from '../src/every.js'

describe('every', () => {
  test('all true values', () => {
    expect(every([true, 1, 'yes'], Boolean)).toBe(true)
  })

  test('one false value', () => {
    expect(every([true, 0, 'yes'], Boolean)).toBe(false)
  })

  test('empty array', () => {
    expect(every([], Boolean)).toBe(true)
  })
})