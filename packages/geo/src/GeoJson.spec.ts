import { GeoJson } from './GeoJson'

describe('GeoJson', () => {
  it('constructor', () => {
    const instance = new GeoJson('0')
    expect(instance).toBeDefined()
  })
})
