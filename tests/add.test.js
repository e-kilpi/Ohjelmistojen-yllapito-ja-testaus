import add from '../src/add.js'

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5)
  })

  test('adds positive and negative number', () => {
    expect(add(5, -3)).toBe(2)
  })

  test('adds zero correctly', () => {
    expect(add(5, 0)).toBe(5)
  })

  test('handles string numbers', () => {
    expect(add('2', '3')).toBe(5)
  })
})