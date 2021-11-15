import ApiEndpoint from './ApiEndpoint'

describe('ApiEndpoint', () => {
  test('checking happy path', () => {
    // eslint-disable-next-line @delagen/deprecation/deprecation
    const apiEndpoint = new ApiEndpoint({ apiDomain: 'sample.com' }, '/')
    expect(apiEndpoint).toBeDefined()
  })
})
