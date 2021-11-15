import delay from './delay'

describe('delay', () => {
  test('checking happy path', async () => {
    const testInterval = 500
    const startTime = Date.now()
    // eslint-disable-next-line @delagen/deprecation/deprecation
    await delay(testInterval)
    const passedTime = Date.now() - startTime
    expect(passedTime).toBeGreaterThan(testInterval)
    expect(passedTime).toBeLessThan(testInterval * 1.05)
  })
})
