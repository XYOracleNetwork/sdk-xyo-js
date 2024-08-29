/* eslint-disable @stylistic/max-len */
import { mergeDocumentHead } from '../mergeDocumentHead.ts'

describe('mergeDocumentHead', () => {
  const cases: [string, string, string, string][] = [
    [
      'Overwrites existing elements',
      '<html><head><meta property="description" content="original"></head><body></body></html>',
      '<html><head><meta property="description" content="updated"></head><body></body></html>',
      '<html><head><meta property="description" content="updated"></head><body></body></html>',
    ],
    [
      'Merges unique elements',
      '<html><head><meta property="og:title" content="original"></head><body></body></html>',
      '<html><head><meta property="og:description" content="updated"></head><body></body></html>',
      '<html><head><meta property="og:title" content="original"><meta property="og:description" content="updated"></head><body></body></html>',
    ],
    [
      'Overwrites existing elements & merges unique elements',
      '<html><head><meta property="description" content="original"><meta property="og:title" content="original"></head><body></body></html>',
      '<html><head><meta property="description" content="updated"><meta property="og:description" content="updated"></head><body></body></html>',
      '<html><head><meta property="description" content="updated"><meta property="og:title" content="original"><meta property="og:description" content="updated"></head><body></body></html>',
    ],
    [
      'Handles missing head tag in source',
      '<html><head><meta property="description" content="original"></head><body></body></html>',
      '<html><body></body></html>',
      '<html><head><meta property="description" content="original"></head><body></body></html>',
    ],
    [
      'Handles missing head tag in destination',
      '<html><body></body></html>',
      '<html><head><meta property="description" content="updated"></head><body></body></html>',
      '<html><head><meta property="description" content="updated"></head><body></body></html>',
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
