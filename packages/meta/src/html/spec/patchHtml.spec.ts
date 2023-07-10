import { mergeDocumentHeads } from '../patchHtml'

describe('patchHtml', () => {
  describe('creates new fields', () => {
    const cases: [string, string, string][] = [
      [
        '<html><head></head><body></body></html>',
        '<html><head><meta name="description" content="updated"></head><body></body></html>',
        '<html><head><meta name="description" content="updated"></head><body></body></html>',
      ],
    ]
    it.each(cases)('matches expected', (a: string, b: string, expected: string) => {
      expect(mergeDocumentHeads(a, b)).toBe(expected)
    })
  })
  describe('overwrites existing fields', () => {
    const cases: [string, string, string][] = [
      [
        '<html><head><meta name="description" content="original"></head><body></body></html>',
        '<html><head><meta name="description" content="updated"></head><body></body></html>',
        '<html><head><meta name="description" content="updated"></head><body></body></html>',
      ],
    ]
    it.each(cases)('matches expected', (a: string, b: string, expected: string) => {
      expect(mergeDocumentHeads(a, b)).toBe(expected)
    })
  })
})
