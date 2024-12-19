import {
  describe, expect, it,
} from 'vitest'

import { GeoJson } from './index.ts'

describe('index', () => {
  it('constructor', () => {
    const instance = new GeoJson('0')
    expect(instance).toBeDefined()
  })
})
