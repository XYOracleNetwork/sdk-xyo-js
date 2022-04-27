import { GeoJson } from './index'

describe('index', () => {
  it('constructor', () => {
    const instance = new GeoJson('0')
    expect(instance).toBeDefined()
  })
})
