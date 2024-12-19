import {
  describe, expect, it,
} from 'vitest'

import { GeoJson } from './GeoJson.ts'

describe('GeoJson', () => {
  it('constructor', () => {
    const instance = new GeoJson('0')
    expect(instance).toBeDefined()
  })
})
