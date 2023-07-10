import { mergeDocumentHeads } from '../patchHtml'

describe('patchHtml', () => {
  const cases: [string, string, string][] = [
    [
      '<html><head></head><body></body></html>',
      '<html><head><meta name="description" content="test" /></head><body>',
      '<html><head><meta name="description" content="test" /></head><body></body></html>',
    ],
  ]
  it.each(cases)('Generates head meta', (a: string, b: string, expected: string) => {
    expect(mergeDocumentHeads(a, b)).toBe(expected)
  })
})
