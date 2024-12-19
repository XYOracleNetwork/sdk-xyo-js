import {
  describe, expect, it,
} from 'vitest'

import type { Meta } from '../../models/index.ts'
import { getMetaAsDict } from '../getMetaAsDict.ts'

describe('getMetaAsDict', () => {
  const cases: Meta[] = [
    { description: 'description' },
    { twitter: { image: { '': 'twitter:image' } } },
  ]
  it.each(cases)('Generates head meta', (meta: Meta) => {
    const output = getMetaAsDict(meta)
    expect(output).toBeDefined()
    Object.entries(output).map(([key, value]) => {
      expect(key).toEqual(value)
    })
  })
})
