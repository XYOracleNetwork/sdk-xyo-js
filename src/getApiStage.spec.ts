import getApiStage from './getApiStage'

describe('getApiStage', () => {
  test('checking happy path', () => {
    const apiStage = getApiStage('localhost')
    expect(apiStage).toBeDefined()
  })
})
