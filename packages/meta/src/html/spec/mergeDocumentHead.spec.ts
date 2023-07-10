import { mergeDocumentHead } from '../mergeDocumentHead'

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
    [
      'Handles missing head tag in source',
      '<html><head><meta name="description" content="original"></head><body></body></html>',
      '<html><body></body></html>',
      '<html><head><meta name="description" content="original"></head><body></body></html>',
    ],
    [
      'Handles missing head tag in destination',
      '<html><body></body></html>',
      '<html><head><meta name="description" content="updated"></head><body></body></html>',
      '<html><head><meta name="description" content="updated"></head><body></body></html>',
    ],
    [
      'Handles missing head tag in source & destination',
      '<html><body>original</body></html>',
      '<html><body>updated</body></html>',
      '<html><head></head><body>original</body></html>',
    ],
  ]
  it.each(cases)('%s', (_, a: string, b: string, expected: string) => {
    expect(mergeDocumentHead(a, b)).toBe(expected)
  })
})
