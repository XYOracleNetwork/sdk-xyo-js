import type { Meta } from '../../models'
import { getMetaAsDict } from '../getMetaAsDict'

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
