import Log from './Log'

describe('Log', () => {
  test('checking happy path', () => {
    // eslint-disable-next-line @delagen/deprecation/deprecation
    const log = new Log({ devMode: false })
    expect(log).toBeDefined()
  })
})
