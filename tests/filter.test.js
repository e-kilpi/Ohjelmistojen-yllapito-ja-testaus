import filter from '../src/filter.js'

describe('filter', () => {
  test('filters out inactive users', () => {
    const users = [
      { user: 'user1', active: true },
      { user: 'user2', active: false },
      { user: 'user3', active: false }
    ]
    expect(filter(users, u => u.active)).toEqual([{ user: 'user1', active: true }])
  })
})