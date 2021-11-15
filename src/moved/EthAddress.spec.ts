import EthAddress from './EthAddress'

describe('EthAddress', () => {
  test('checking happy path', () => {
    const addressString = '7284b6A4233B8B05910F2CbF7dBf6715325F6fCb'.toLowerCase()
    // eslint-disable-next-line @delagen/deprecation/deprecation
    const address = EthAddress.fromString(addressString, 16)
    expect(address?.toString()).toBe(`0x${addressString}`)
    expect(address?.toShortString()).toBe('0x72...cb}')
  })
})
