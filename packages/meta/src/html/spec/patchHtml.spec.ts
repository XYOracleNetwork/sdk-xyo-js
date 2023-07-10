import { mergeDocumentHeads } from '../patchHtml'

describe('patchHtml', () => {
  const cases: [string, string, string, string][] = [
    [
      'Overwrites existing elements',
      '<html><head><meta name="description" content="original"></head><body></body></html>',
      '<html><head><meta name="description" content="updated"></head><body></body></html>',
      '<html><head><meta name="description" content="updated"></head><body></body></html>',
    ],
    [
      'Merges unique elements',
      '<html><head><meta name="og:title" content="original"></head><body></body></html>',
      '<html><head><meta name="og:description" content="updated"></head><body></body></html>',
      '<html><head><meta name="og:title" content="original"><meta name="og:description" content="updated"></head><body></body></html>',
    ],
    [
      'Overwrites existing elements & merges unique elements',
      '<html><head><meta name="description" content="original"><meta name="og:title" content="original"></head><body></body></html>',
      '<html><head><meta name="description" content="updated"><meta name="og:description" content="updated"></head><body></body></html>',
      '<html><head><meta name="description" content="updated"><meta name="og:title" content="original"><meta name="og:description" content="updated"></head><body></body></html>',
    ],
  ]
  it.each(cases)('%s', (_, a: string, b: string, expected: string) => {
    expect(mergeDocumentHeads(a, b)).toBe(expected)
  })
})
