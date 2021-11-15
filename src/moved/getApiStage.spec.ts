import getApiStage from './getApiStage'

describe('getApiStage', () => {
  test('checking happy path', () => {
    // eslint-disable-next-line @delagen/deprecation/deprecation
    const apiStage = getApiStage('localhost')
    expect(apiStage).toBeDefined()
  })
})
