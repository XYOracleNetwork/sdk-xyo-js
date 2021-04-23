import Log from './Log'

describe('Log', () => {
  test('checking happy path', () => {
    const log = new Log({ devMode: false })
    expect(log).toBeDefined()
  })
})
